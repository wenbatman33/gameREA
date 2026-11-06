(function () {
    function probeTextureFormat() {
        var canvas = document.createElement('canvas');
        var gl = null;
        try {
            gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        } catch (e) {
            gl = null;
        }
        var format = 'fallback';
        if (gl) {
            if (gl.getExtension('WEBGL_compressed_texture_astc')) {
                format = 'astc';
            } else if (gl.getExtension('WEBGL_compressed_texture_etc') || gl.getExtension('WEBGL_compressed_texture_etc1')) {
                format = 'pkm';
            } else {
                try {
                    if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
                        format = 'webp';
                    }
                } catch (e) {
                    format = 'fallback';
                }
            }
            var lose = gl.getExtension('WEBGL_lose_context');
            if (lose) {
                lose.loseContext();
            }
        }
        return format;
    }

    function downloadZip(url) {
        return fetch(url).then(function (response) {
            if (!response.ok) {
                throw new Error(response.status + ' ' + url);
            }
            return response.arrayBuffer();
        });
    }

    window.wzbPrefetchPromise = fetch('assets/wzb-res-packs.json').then(function (response) {
        if (!response.ok) {
            throw new Error(response.status + ' wzb-res-packs.json');
        }
        return response.json();
    }).then(function (packs) {
        var format = probeTextureFormat();
        var urls = (packs['common'] || []).concat(packs[format] || []);
        window.wzbResPacks = packs;
        window.wzbPrefetchFormat = format;
        return Promise.all(urls.map(downloadZip)).then(function (buffers) {
            return { format: format, buffers: buffers, packs: packs };
        });
    }).catch(function () {
        return null;
    });
})();
