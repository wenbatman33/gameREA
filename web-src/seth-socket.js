// Same-origin browser backend; no provider socket or account credentials.
(function () {
  const session = new URLSearchParams(location.search).get('t') || 'browser-local';
  window.io = {connect() {
    const handlers = new Map();
    const socket = {
      connected: true,
      on(name, fn) { handlers.set(name, fn); return socket; },
      off(name) { handlers.delete(name); return socket; },
      emit(name, data, ack) {
        if (typeof data === 'function') { ack = data; data = {}; }
        fetch(window.__SETH_BASE__ + 'local-api/' + encodeURIComponent(name), {
          method: 'POST', headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({session, data: data || {}})
        }).then(r => r.json()).then(value => ack?.(value)).catch(error => {
          console.error('Browser synthetic transport failed', name, error);
          handlers.get('error')?.({message: error.message});
        });
        return socket;
      },
      close() { socket.connected = false; handlers.get('disconnect')?.('browser-close'); },
      disconnect() { socket.close(); }
    };
    setTimeout(() => handlers.get('connect')?.(), 30);
    return socket;
  }};
})();
