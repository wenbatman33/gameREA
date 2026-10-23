// Loopback adapter for the captured client's Socket.IO-shaped transport.
// No original account token or remote socket is used.
(function () {
  const session = new URLSearchParams(location.search).get('t');
  window.io = {connect() {
    const handlers = new Map();
    const socket = {
      connected: true,
      on(name, fn) { handlers.set(name, fn); return socket; },
      off(name) { handlers.delete(name); return socket; },
      emit(name, data, ack) {
        if (typeof data === 'function') { ack = data; data = {}; }
        fetch('/local-api/' + encodeURIComponent(name), {
          method: 'POST', headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({session, data: data || {}})
        }).then(r => r.json()).then(value => ack?.(value)).catch(error => {
          console.error('Local transport failed', name, error);
          handlers.get('error')?.({message: error.message});
        });
        return socket;
      },
      close() { socket.connected = false; handlers.get('disconnect')?.('local-close'); },
      disconnect() { socket.close(); }
    };
    setTimeout(() => handlers.get('connect')?.(), 30);
    return socket;
  }};
})();
