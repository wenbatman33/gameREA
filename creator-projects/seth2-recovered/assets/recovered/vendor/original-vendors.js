// Original plugins ran as browser scripts, including during Creator editor evaluation.
(function(root){ var module=undefined, exports=undefined, require=undefined, define=undefined, process=undefined, Buffer=undefined; var self=root, window=root, global=root, globalThis=root;

// Reconstructed isolation layer. This is not an original game implementation.
(function(root){
  // Editor/AssetDB/Builder own native resource protocols and lifecycle.
  // The isolation policy belongs to the generated Web game, not to Creator.
  // A clean Editor restart removes wrappers installed by older tool versions.
  if((root.process&&root.process.versions&&root.process.versions.electron)||root.Editor){
    root.__SETH_RECOVERY_NETWORK_MODE__='Creator/Electron native resource pipeline; Web guard not installed';
    return;
  }
  const requestURL = value => new URL(String(value && typeof value.url === 'string' ? value.url : value), root.location ? root.location.href : 'http://localhost/');
  const allowed = (value,method='GET') => {
    const url = requestURL(value);
    // Actual Creator editor loaders use UUID caches, through import:/native:
    // and file://<this project>/library. No arbitrary file access is enabled.
    if(/^(GET|HEAD)$/i.test(method)){
      let cachePath=null;
      if((url.protocol==='import:'||url.protocol==='native:')&&!url.host)cachePath=url.pathname.replace(/^\/+/, '');
      if(url.protocol==='file:'&&!url.host){
        const libraryPath=decodeURIComponent(new URL("file:///Users/batman_work/Desktop/pg%E9%81%8A%E6%88%B2/creator-projects/seth2-recovered/library/").pathname);
        const filePath=decodeURIComponent(url.pathname);
        if(filePath.startsWith(libraryPath))cachePath=filePath.slice(libraryPath.length);
      }
      if(cachePath!==null){
        const match=/^([0-9a-f]{2})\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:@[a-z0-9_-]+)?(?:\.[a-z0-9._-]+)?$/i.exec(cachePath);
        if(match&&match[1].toLowerCase()===match[2].slice(0,2).toLowerCase())return true;
      }
    }
    const page=root.location?new URL(root.location.href):null;
    if(page&&/^(http:|https:)$/.test(page.protocol)){
      if(/^(http:|https:)$/.test(url.protocol)&&url.origin===page.origin)return true;
      // WebSocket policy: exactly the page's host/port and matching transport
      // security (https -> wss, http -> ws), no implicit alternate endpoints.
      if(url.protocol===(page.protocol==='https:'?'wss:':'ws:')){
        const transport=new URL(url.href);transport.protocol=page.protocol;
        if(transport.origin===page.origin)return true;
      }
    }
    return /^(data:|blob:)$/.test(url.protocol) ||
      (/^(https?:|wss?:)$/.test(url.protocol) && ['localhost','127.0.0.1','[::1]'].includes(url.hostname));
  };
  const reject = (value,method='GET') => { if(!allowed(value,method)){const url=requestURL(value);throw new Error('[Seth recovery] Third-party connection blocked: '+url.protocol+'//'+url.host+url.pathname);} };
  const state = root.__SETH_RECOVERY_GUARD_V2__ || {installed:false};
  state.reject = reject;
  if(!state.installed){
    if(root.fetch){const fetch=root.fetch;root.fetch=function(input,init){try{state.reject(input,init&&init.method||input&&input.method||'GET');}catch(error){return Promise.reject(error);}return fetch.call(this,input,init);};}
    if(root.XMLHttpRequest){const open=root.XMLHttpRequest.prototype.open;root.XMLHttpRequest.prototype.open=function(method,url,...args){state.reject(url,method);return open.call(this,method,url,...args);};}
    for(const key of ['WebSocket','EventSource'])if(root[key]){const Native=root[key];root[key]=new Proxy(Native,{construct(Target,args,NewTarget){state.reject(args[0]);return Reflect.construct(Target,args,NewTarget);}});}
    state.installed=true;root.__SETH_RECOVERY_GUARD_V2__=state;
  }
  root.__SETH_RECOVERY_NETWORK_MODE__='same-origin or loopback APIs; restricted Creator UUID cache reads';
})(typeof window!=='undefined'?window:globalThis);


;
// Original plugin 0: assets/scripts/plugin/CryptoJS.js
// SHA256: 531171cbf822bbf994b4a718a855e0ae61703c961d2b463fe7f9c4bc96d7f633
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/**
 * CryptoJS core components.
 */
var CryptoJS = CryptoJS || (function (Math, undefined) {
    /**
     * CryptoJS namespace.
     */
    var C = {};

    /**
     * Library namespace.
     */
    var C_lib = C.lib = {};

    /**
     * Base object for prototypal inheritance.
     */
    var Base = C_lib.Base = (function () {
        function F() {}

        return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function (overrides) {
                // Spawn
                F.prototype = this;
                var subtype = new F();

                // Augment
                if (overrides) {
                    subtype.mixIn(overrides);
                }

                // Create default initializer
                if (!subtype.hasOwnProperty('init')) {
                    subtype.init = function () {
                        subtype.$super.init.apply(this, arguments);
                    };
                }

                // Initializer's prototype is the subtype object
                subtype.init.prototype = subtype;

                // Reference supertype
                subtype.$super = this;

                return subtype;
            },

            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function () {
                var instance = this.extend();
                instance.init.apply(instance, arguments);

                return instance;
            },

            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function () {
            },

            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function (properties) {
                for (var propertyName in properties) {
                    if (properties.hasOwnProperty(propertyName)) {
                        this[propertyName] = properties[propertyName];
                    }
                }

                // IE won't copy toString using the loop above
                if (properties.hasOwnProperty('toString')) {
                    this.toString = properties.toString;
                }
            },

            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function () {
                return this.init.prototype.extend(this);
            }
        };
    }());

    /**
     * An array of 32-bit words.
     *
     * @property {Array} words The array of 32-bit words.
     * @property {number} sigBytes The number of significant bytes in this word array.
     */
    var WordArray = C_lib.WordArray = Base.extend({
        /**
         * Initializes a newly created word array.
         *
         * @param {Array} words (Optional) An array of 32-bit words.
         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.create();
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
         */
        init: function (words, sigBytes) {
            words = this.words = words || [];

            if (sigBytes != undefined) {
                this.sigBytes = sigBytes;
            } else {
                this.sigBytes = words.length * 4;
            }
        },

        /**
         * Converts this word array to a string.
         *
         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
         *
         * @return {string} The stringified word array.
         *
         * @example
         *
         *     var string = wordArray + '';
         *     var string = wordArray.toString();
         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
         */
        toString: function (encoder) {
            return (encoder || Hex).stringify(this);
        },

        /**
         * Concatenates a word array to this word array.
         *
         * @param {WordArray} wordArray The word array to append.
         *
         * @return {WordArray} This word array.
         *
         * @example
         *
         *     wordArray1.concat(wordArray2);
         */
        concat: function (wordArray) {
            // Shortcuts
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;

            // Clamp excess bits
            this.clamp();

            // Concat
            if (thisSigBytes % 4) {
                // Copy one byte at a time
                for (var i = 0; i < thatSigBytes; i++) {
                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
                }
            } else if (thatWords.length > 0xffff) {
                // Copy one word at a time
                for (var i = 0; i < thatSigBytes; i += 4) {
                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
                }
            } else {
                // Copy all words at once
                thisWords.push.apply(thisWords, thatWords);
            }
            this.sigBytes += thatSigBytes;

            // Chainable
            return this;
        },

        /**
         * Removes insignificant bits.
         *
         * @example
         *
         *     wordArray.clamp();
         */
        clamp: function () {
            // Shortcuts
            var words = this.words;
            var sigBytes = this.sigBytes;

            // Clamp
            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
            words.length = Math.ceil(sigBytes / 4);
        },

        /**
         * Creates a copy of this word array.
         *
         * @return {WordArray} The clone.
         *
         * @example
         *
         *     var clone = wordArray.clone();
         */
        clone: function () {
            var clone = Base.clone.call(this);
            clone.words = this.words.slice(0);

            return clone;
        },

        /**
         * Creates a word array filled with random bytes.
         *
         * @param {number} nBytes The number of random bytes to generate.
         *
         * @return {WordArray} The random word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.random(16);
         */
        random: function (nBytes) {
            var words = [];
            for (var i = 0; i < nBytes; i += 4) {
                words.push((Math.random() * 0x100000000) | 0);
            }

            return new WordArray.init(words, nBytes);
        }
    });

    /**
     * Encoder namespace.
     */
    var C_enc = C.enc = {};

    /**
     * Hex encoding strategy.
     */
    var Hex = C_enc.Hex = {
        /**
         * Converts a word array to a hex string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The hex string.
         *
         * @static
         *
         * @example
         *
         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
         */
        stringify: function (wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;

            // Convert
            var hexChars = [];
            for (var i = 0; i < sigBytes; i++) {
                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                hexChars.push((bite >>> 4).toString(16));
                hexChars.push((bite & 0x0f).toString(16));
            }

            return hexChars.join('');
        },

        /**
         * Converts a hex string to a word array.
         *
         * @param {string} hexStr The hex string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
         */
        parse: function (hexStr) {
            // Shortcut
            var hexStrLength = hexStr.length;

            // Convert
            var words = [];
            for (var i = 0; i < hexStrLength; i += 2) {
                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
            }

            return new WordArray.init(words, hexStrLength / 2);
        }
    };

    /**
     * Latin1 encoding strategy.
     */
    var Latin1 = C_enc.Latin1 = {
        /**
         * Converts a word array to a Latin1 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Latin1 string.
         *
         * @static
         *
         * @example
         *
         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
         */
        stringify: function (wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;

            // Convert
            var latin1Chars = [];
            for (var i = 0; i < sigBytes; i++) {
                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                latin1Chars.push(String.fromCharCode(bite));
            }

            return latin1Chars.join('');
        },

        /**
         * Converts a Latin1 string to a word array.
         *
         * @param {string} latin1Str The Latin1 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
         */
        parse: function (latin1Str) {
            // Shortcut
            var latin1StrLength = latin1Str.length;

            // Convert
            var words = [];
            for (var i = 0; i < latin1StrLength; i++) {
                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
            }

            return new WordArray.init(words, latin1StrLength);
        }
    };

    /**
     * UTF-8 encoding strategy.
     */
    var Utf8 = C_enc.Utf8 = {
        /**
         * Converts a word array to a UTF-8 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The UTF-8 string.
         *
         * @static
         *
         * @example
         *
         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
         */
        stringify: function (wordArray) {
            try {
                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
                throw new Error('Malformed UTF-8 data');
            }
        },

        /**
         * Converts a UTF-8 string to a word array.
         *
         * @param {string} utf8Str The UTF-8 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
         */
        parse: function (utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
        }
    };

    /**
     * Abstract buffered block algorithm template.
     *
     * The property blockSize must be implemented in a concrete subtype.
     *
     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
     */
    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
        /**
         * Resets this block algorithm's data buffer to its initial state.
         *
         * @example
         *
         *     bufferedBlockAlgorithm.reset();
         */
        reset: function () {
            // Initial values
            this._data = new WordArray.init();
            this._nDataBytes = 0;
        },

        /**
         * Adds new data to this block algorithm's buffer.
         *
         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
         *
         * @example
         *
         *     bufferedBlockAlgorithm._append('data');
         *     bufferedBlockAlgorithm._append(wordArray);
         */
        _append: function (data) {
            // Convert string to WordArray, else assume WordArray already
            if (typeof data == 'string') {
                data = Utf8.parse(data);
            }

            // Append
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
        },

        /**
         * Processes available data blocks.
         *
         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
         *
         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
         *
         * @return {WordArray} The processed data.
         *
         * @example
         *
         *     var processedData = bufferedBlockAlgorithm._process();
         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
         */
        _process: function (doFlush) {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4;

            // Count blocks ready
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            if (doFlush) {
                // Round up to include partial blocks
                nBlocksReady = Math.ceil(nBlocksReady);
            } else {
                // Round down to include only full blocks,
                // less the number of blocks that must remain in the buffer
                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }

            // Count words ready
            var nWordsReady = nBlocksReady * blockSize;

            // Count bytes ready
            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

            // Process blocks
            if (nWordsReady) {
                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                    // Perform concrete-algorithm logic
                    this._doProcessBlock(dataWords, offset);
                }

                // Remove processed words
                var processedWords = dataWords.splice(0, nWordsReady);
                data.sigBytes -= nBytesReady;
            }

            // Return processed words
            return new WordArray.init(processedWords, nBytesReady);
        },

        /**
         * Creates a copy of this object.
         *
         * @return {Object} The clone.
         *
         * @example
         *
         *     var clone = bufferedBlockAlgorithm.clone();
         */
        clone: function () {
            var clone = Base.clone.call(this);
            clone._data = this._data.clone();

            return clone;
        },

        _minBufferSize: 0
    });

    /**
     * Abstract hasher template.
     *
     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
     */
    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
        /**
         * Configuration options.
         */
        cfg: Base.extend(),

        /**
         * Initializes a newly created hasher.
         *
         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
         *
         * @example
         *
         *     var hasher = CryptoJS.algo.SHA256.create();
         */
        init: function (cfg) {
            // Apply config defaults
            this.cfg = this.cfg.extend(cfg);

            // Set initial values
            this.reset();
        },

        /**
         * Resets this hasher to its initial state.
         *
         * @example
         *
         *     hasher.reset();
         */
        reset: function () {
            // Reset data buffer
            BufferedBlockAlgorithm.reset.call(this);

            // Perform concrete-hasher logic
            this._doReset();
        },

        /**
         * Updates this hasher with a message.
         *
         * @param {WordArray|string} messageUpdate The message to append.
         *
         * @return {Hasher} This hasher.
         *
         * @example
         *
         *     hasher.update('message');
         *     hasher.update(wordArray);
         */
        update: function (messageUpdate) {
            // Append
            this._append(messageUpdate);

            // Update the hash
            this._process();

            // Chainable
            return this;
        },

        /**
         * Finalizes the hash computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} messageUpdate (Optional) A final message update.
         *
         * @return {WordArray} The hash.
         *
         * @example
         *
         *     var hash = hasher.finalize();
         *     var hash = hasher.finalize('message');
         *     var hash = hasher.finalize(wordArray);
         */
        finalize: function (messageUpdate) {
            // Final message update
            if (messageUpdate) {
                this._append(messageUpdate);
            }

            // Perform concrete-hasher logic
            var hash = this._doFinalize();

            return hash;
        },

        blockSize: 512/32,

        /**
         * Creates a shortcut function to a hasher's object interface.
         *
         * @param {Hasher} hasher The hasher to create a helper for.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
         */
        _createHelper: function (hasher) {
            return function (message, cfg) {
                return new hasher.init(cfg).finalize(message);
            };
        },

        /**
         * Creates a shortcut function to the HMAC's object interface.
         *
         * @param {Hasher} hasher The hasher to use in this HMAC helper.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
         */
        _createHmacHelper: function (hasher) {
            return function (message, key) {
                return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
        }
    });

    /**
     * Algorithm namespace.
     */
    var C_algo = C.algo = {};

    return C;
}(Math));
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Constants table
    var T = [];

    // Compute constants
    (function () {
        for (var i = 0; i < 64; i++) {
            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
        }
    }());

    /**
     * MD5 hash algorithm.
     */
    var MD5 = C_algo.MD5 = Hasher.extend({
        _doReset: function () {
            this._hash = new WordArray.init([
                0x67452301, 0xefcdab89,
                0x98badcfe, 0x10325476
            ]);
        },

        _doProcessBlock: function (M, offset) {
            // Swap endian
            for (var i = 0; i < 16; i++) {
                // Shortcuts
                var offset_i = offset + i;
                var M_offset_i = M[offset_i];

                M[offset_i] = (
                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
                );
            }

            // Shortcuts
            var H = this._hash.words;

            var M_offset_0  = M[offset + 0];
            var M_offset_1  = M[offset + 1];
            var M_offset_2  = M[offset + 2];
            var M_offset_3  = M[offset + 3];
            var M_offset_4  = M[offset + 4];
            var M_offset_5  = M[offset + 5];
            var M_offset_6  = M[offset + 6];
            var M_offset_7  = M[offset + 7];
            var M_offset_8  = M[offset + 8];
            var M_offset_9  = M[offset + 9];
            var M_offset_10 = M[offset + 10];
            var M_offset_11 = M[offset + 11];
            var M_offset_12 = M[offset + 12];
            var M_offset_13 = M[offset + 13];
            var M_offset_14 = M[offset + 14];
            var M_offset_15 = M[offset + 15];

            // Working varialbes
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];

            // Computation
            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
            d = II(d, a, b, c, M_offset_7,  10, T[49]);
            c = II(c, d, a, b, M_offset_14, 15, T[50]);
            b = II(b, c, d, a, M_offset_5,  21, T[51]);
            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
            d = II(d, a, b, c, M_offset_3,  10, T[53]);
            c = II(c, d, a, b, M_offset_10, 15, T[54]);
            b = II(b, c, d, a, M_offset_1,  21, T[55]);
            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
            d = II(d, a, b, c, M_offset_15, 10, T[57]);
            c = II(c, d, a, b, M_offset_6,  15, T[58]);
            b = II(b, c, d, a, M_offset_13, 21, T[59]);
            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
            d = II(d, a, b, c, M_offset_11, 10, T[61]);
            c = II(c, d, a, b, M_offset_2,  15, T[62]);
            b = II(b, c, d, a, M_offset_9,  21, T[63]);

            // Intermediate hash value
            H[0] = (H[0] + a) | 0;
            H[1] = (H[1] + b) | 0;
            H[2] = (H[2] + c) | 0;
            H[3] = (H[3] + d) | 0;
        },

        _doFinalize: function () {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;

            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;

            // Add padding
            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
            var nBitsTotalL = nBitsTotal;
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
            );
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
            );

            data.sigBytes = (dataWords.length + 1) * 4;

            // Hash final blocks
            this._process();

            // Shortcuts
            var hash = this._hash;
            var H = hash.words;

            // Swap endian
            for (var i = 0; i < 4; i++) {
                // Shortcut
                var H_i = H[i];

                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
            }

            // Return final computed hash
            return hash;
        },

        clone: function () {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();

            return clone;
        }
    });

    function FF(a, b, c, d, x, s, t) {
        var n = a + ((b & c) | (~b & d)) + x + t;
        return ((n << s) | (n >>> (32 - s))) + b;
    }

    function GG(a, b, c, d, x, s, t) {
        var n = a + ((b & d) | (c & ~d)) + x + t;
        return ((n << s) | (n >>> (32 - s))) + b;
    }

    function HH(a, b, c, d, x, s, t) {
        var n = a + (b ^ c ^ d) + x + t;
        return ((n << s) | (n >>> (32 - s))) + b;
    }

    function II(a, b, c, d, x, s, t) {
        var n = a + (c ^ (b | ~d)) + x + t;
        return ((n << s) | (n >>> (32 - s))) + b;
    }

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.MD5('message');
     *     var hash = CryptoJS.MD5(wordArray);
     */
    C.MD5 = Hasher._createHelper(MD5);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacMD5(message, key);
     */
    C.HmacMD5 = Hasher._createHmacHelper(MD5);
}(Math));
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var C_algo = C.algo;
    var MD5 = C_algo.MD5;

    /**
     * This key derivation function is meant to conform with EVP_BytesToKey.
     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
     */
    var EvpKDF = C_algo.EvpKDF = Base.extend({
        /**
         * Configuration options.
         *
         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
         * @property {number} iterations The number of iterations to perform. Default: 1
         */
        cfg: Base.extend({
            keySize: 128/32,
            hasher: MD5,
            iterations: 1
        }),

        /**
         * Initializes a newly created key derivation function.
         *
         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
         *
         * @example
         *
         *     var kdf = CryptoJS.algo.EvpKDF.create();
         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
         */
        init: function (cfg) {
            this.cfg = this.cfg.extend(cfg);
        },

        /**
         * Derives a key from a password.
         *
         * @param {WordArray|string} password The password.
         * @param {WordArray|string} salt A salt.
         *
         * @return {WordArray} The derived key.
         *
         * @example
         *
         *     var key = kdf.compute(password, salt);
         */
        compute: function (password, salt) {
            // Shortcut
            var cfg = this.cfg;

            // Init hasher
            var hasher = cfg.hasher.create();

            // Initial values
            var derivedKey = WordArray.create();

            // Shortcuts
            var derivedKeyWords = derivedKey.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;

            // Generate key
            while (derivedKeyWords.length < keySize) {
                if (block) {
                    hasher.update(block);
                }
                var block = hasher.update(password).finalize(salt);
                hasher.reset();

                // Iterations
                for (var i = 1; i < iterations; i++) {
                    block = hasher.finalize(block);
                    hasher.reset();
                }

                derivedKey.concat(block);
            }
            derivedKey.sigBytes = keySize * 4;

            return derivedKey;
        }
    });

    /**
     * Derives a key from a password.
     *
     * @param {WordArray|string} password The password.
     * @param {WordArray|string} salt A salt.
     * @param {Object} cfg (Optional) The configuration options to use for this computation.
     *
     * @return {WordArray} The derived key.
     *
     * @static
     *
     * @example
     *
     *     var key = CryptoJS.EvpKDF(password, salt);
     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
     */
    C.EvpKDF = function (password, salt, cfg) {
        return EvpKDF.create(cfg).compute(password, salt);
    };
}());
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;

    /**
     * Base64 encoding strategy.
     */
    var Base64 = C_enc.Base64 = {
        /**
         * Converts a word array to a Base64 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Base64 string.
         *
         * @static
         *
         * @example
         *
         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
         */
        stringify: function (wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = this._map;

            // Clamp excess bits
            wordArray.clamp();

            // Convert
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
                }
            }

            // Add padding
            var paddingChar = map.charAt(64);
            if (paddingChar) {
                while (base64Chars.length % 4) {
                    base64Chars.push(paddingChar);
                }
            }

            return base64Chars.join('');
        },

        /**
         * Converts a Base64 string to a word array.
         *
         * @param {string} base64Str The Base64 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
         */
        parse: function (base64Str) {
            // Shortcuts
            var base64StrLength = base64Str.length;
            var map = this._map;

            // Ignore padding
            var paddingChar = map.charAt(64);
            if (paddingChar) {
                var paddingIndex = base64Str.indexOf(paddingChar);
                if (paddingIndex != -1) {
                    base64StrLength = paddingIndex;
                }
            }

            // Convert
            var words = [];
            var nBytes = 0;
            for (var i = 0; i < base64StrLength; i++) {
                if (i % 4) {
                    var bits1 = map.indexOf(base64Str.charAt(i - 1)) << ((i % 4) * 2);
                    var bits2 = map.indexOf(base64Str.charAt(i)) >>> (6 - (i % 4) * 2);
                    words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
                    nBytes++;
                }
            }
            return WordArray.create(words, nBytes);
        },

        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    };
}());
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/**
 * Cipher core components.
 */
CryptoJS.lib.Cipher || (function (undefined) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
    var C_enc = C.enc;
    var Utf8 = C_enc.Utf8;
    var Base64 = C_enc.Base64;
    var C_algo = C.algo;
    var EvpKDF = C_algo.EvpKDF;

    /**
     * Abstract base cipher template.
     *
     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
     */
    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
        /**
         * Configuration options.
         *
         * @property {WordArray} iv The IV to use for this operation.
         */
        cfg: Base.extend(),

        /**
         * Creates this cipher in encryption mode.
         *
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {Cipher} A cipher instance.
         *
         * @static
         *
         * @example
         *
         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
         */
        createEncryptor: function (key, cfg) {
            return this.create(this._ENC_XFORM_MODE, key, cfg);
        },

        /**
         * Creates this cipher in decryption mode.
         *
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {Cipher} A cipher instance.
         *
         * @static
         *
         * @example
         *
         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
         */
        createDecryptor: function (key, cfg) {
            return this.create(this._DEC_XFORM_MODE, key, cfg);
        },

        /**
         * Initializes a newly created cipher.
         *
         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @example
         *
         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
         */
        init: function (xformMode, key, cfg) {
            // Apply config defaults
            this.cfg = this.cfg.extend(cfg);

            // Store transform mode and key
            this._xformMode = xformMode;
            this._key = key;

            // Set initial values
            this.reset();
        },

        /**
         * Resets this cipher to its initial state.
         *
         * @example
         *
         *     cipher.reset();
         */
        reset: function () {
            // Reset data buffer
            BufferedBlockAlgorithm.reset.call(this);

            // Perform concrete-cipher logic
            this._doReset();
        },

        /**
         * Adds data to be encrypted or decrypted.
         *
         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
         *
         * @return {WordArray} The data after processing.
         *
         * @example
         *
         *     var encrypted = cipher.process('data');
         *     var encrypted = cipher.process(wordArray);
         */
        process: function (dataUpdate) {
            // Append
            this._append(dataUpdate);

            // Process available blocks
            return this._process();
        },

        /**
         * Finalizes the encryption or decryption process.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
         *
         * @return {WordArray} The data after final processing.
         *
         * @example
         *
         *     var encrypted = cipher.finalize();
         *     var encrypted = cipher.finalize('data');
         *     var encrypted = cipher.finalize(wordArray);
         */
        finalize: function (dataUpdate) {
            // Final data update
            if (dataUpdate) {
                this._append(dataUpdate);
            }

            // Perform concrete-cipher logic
            var finalProcessedData = this._doFinalize();

            return finalProcessedData;
        },

        keySize: 128/32,

        ivSize: 128/32,

        _ENC_XFORM_MODE: 1,

        _DEC_XFORM_MODE: 2,

        /**
         * Creates shortcut functions to a cipher's object interface.
         *
         * @param {Cipher} cipher The cipher to create a helper for.
         *
         * @return {Object} An object with encrypt and decrypt shortcut functions.
         *
         * @static
         *
         * @example
         *
         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
         */
        _createHelper: (function () {
            function selectCipherStrategy(key) {
                if (typeof key == 'string') {
                    return PasswordBasedCipher;
                } else {
                    return SerializableCipher;
                }
            }

            return function (cipher) {
                return {
                    encrypt: function (message, key, cfg) {
                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                    },

                    decrypt: function (ciphertext, key, cfg) {
                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                    }
                };
            };
        }())
    });

    /**
     * Abstract base stream cipher template.
     *
     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
     */
    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
        _doFinalize: function () {
            // Process partial blocks
            var finalProcessedBlocks = this._process(!!'flush');

            return finalProcessedBlocks;
        },

        blockSize: 1
    });

    /**
     * Mode namespace.
     */
    var C_mode = C.mode = {};

    /**
     * Abstract base block cipher mode template.
     */
    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
        /**
         * Creates this mode for encryption.
         *
         * @param {Cipher} cipher A block cipher instance.
         * @param {Array} iv The IV words.
         *
         * @static
         *
         * @example
         *
         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
         */
        createEncryptor: function (cipher, iv) {
            return this.Encryptor.create(cipher, iv);
        },

        /**
         * Creates this mode for decryption.
         *
         * @param {Cipher} cipher A block cipher instance.
         * @param {Array} iv The IV words.
         *
         * @static
         *
         * @example
         *
         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
         */
        createDecryptor: function (cipher, iv) {
            return this.Decryptor.create(cipher, iv);
        },

        /**
         * Initializes a newly created mode.
         *
         * @param {Cipher} cipher A block cipher instance.
         * @param {Array} iv The IV words.
         *
         * @example
         *
         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
         */
        init: function (cipher, iv) {
            this._cipher = cipher;
            this._iv = iv;
        }
    });

    /**
     * Cipher Block Chaining mode.
     */
    var CBC = C_mode.CBC = (function () {
        /**
         * Abstract base CBC mode.
         */
        var CBC = BlockCipherMode.extend();

        /**
         * CBC encryptor.
         */
        CBC.Encryptor = CBC.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function (words, offset) {
                // Shortcuts
                var cipher = this._cipher;
                var blockSize = cipher.blockSize;

                // XOR and encrypt
                xorBlock.call(this, words, offset, blockSize);
                cipher.encryptBlock(words, offset);

                // Remember this block to use with next block
                this._prevBlock = words.slice(offset, offset + blockSize);
            }
        });

        /**
         * CBC decryptor.
         */
        CBC.Decryptor = CBC.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function (words, offset) {
                // Shortcuts
                var cipher = this._cipher;
                var blockSize = cipher.blockSize;

                // Remember this block to use with next block
                var thisBlock = words.slice(offset, offset + blockSize);

                // Decrypt and XOR
                cipher.decryptBlock(words, offset);
                xorBlock.call(this, words, offset, blockSize);

                // This block becomes the previous block
                this._prevBlock = thisBlock;
            }
        });

        function xorBlock(words, offset, blockSize) {
            // Shortcut
            var iv = this._iv;

            // Choose mixing block
            if (iv) {
                var block = iv;

                // Remove IV for subsequent blocks
                this._iv = undefined;
            } else {
                var block = this._prevBlock;
            }

            // XOR blocks
            for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= block[i];
            }
        }

        return CBC;
    }());

    /**
     * Padding namespace.
     */
    var C_pad = C.pad = {};

    /**
     * PKCS #5/7 padding strategy.
     */
    var Pkcs7 = C_pad.Pkcs7 = {
        /**
         * Pads data using the algorithm defined in PKCS #5/7.
         *
         * @param {WordArray} data The data to pad.
         * @param {number} blockSize The multiple that the data should be padded to.
         *
         * @static
         *
         * @example
         *
         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
         */
        pad: function (data, blockSize) {
            // Shortcut
            var blockSizeBytes = blockSize * 4;

            // Count padding bytes
            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

            // Create padding word
            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

            // Create padding
            var paddingWords = [];
            for (var i = 0; i < nPaddingBytes; i += 4) {
                paddingWords.push(paddingWord);
            }
            var padding = WordArray.create(paddingWords, nPaddingBytes);

            // Add padding
            data.concat(padding);
        },

        /**
         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
         *
         * @param {WordArray} data The data to unpad.
         *
         * @static
         *
         * @example
         *
         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
         */
        unpad: function (data) {
            // Get number of padding bytes from last byte
            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

            // Remove padding
            data.sigBytes -= nPaddingBytes;
        }
    };

    /**
     * Abstract base block cipher template.
     *
     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
     */
    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
        /**
         * Configuration options.
         *
         * @property {Mode} mode The block mode to use. Default: CBC
         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
         */
        cfg: Cipher.cfg.extend({
            mode: CBC,
            padding: Pkcs7
        }),

        reset: function () {
            // Reset cipher
            Cipher.reset.call(this);

            // Shortcuts
            var cfg = this.cfg;
            var iv = cfg.iv;
            var mode = cfg.mode;

            // Reset block mode
            if (this._xformMode == this._ENC_XFORM_MODE) {
                var modeCreator = mode.createEncryptor;
            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
                var modeCreator = mode.createDecryptor;

                // Keep at least one block in the buffer for unpadding
                this._minBufferSize = 1;
            }
            this._mode = modeCreator.call(mode, this, iv && iv.words);
        },

        _doProcessBlock: function (words, offset) {
            this._mode.processBlock(words, offset);
        },

        _doFinalize: function () {
            // Shortcut
            var padding = this.cfg.padding;

            // Finalize
            if (this._xformMode == this._ENC_XFORM_MODE) {
                // Pad data
                padding.pad(this._data, this.blockSize);

                // Process final blocks
                var finalProcessedBlocks = this._process(!!'flush');
            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
                // Process final blocks
                var finalProcessedBlocks = this._process(!!'flush');

                // Unpad data
                padding.unpad(finalProcessedBlocks);
            }

            return finalProcessedBlocks;
        },

        blockSize: 128/32
    });

    /**
     * A collection of cipher parameters.
     *
     * @property {WordArray} ciphertext The raw ciphertext.
     * @property {WordArray} key The key to this ciphertext.
     * @property {WordArray} iv The IV used in the ciphering operation.
     * @property {WordArray} salt The salt used with a key derivation function.
     * @property {Cipher} algorithm The cipher algorithm.
     * @property {Mode} mode The block mode used in the ciphering operation.
     * @property {Padding} padding The padding scheme used in the ciphering operation.
     * @property {number} blockSize The block size of the cipher.
     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
     */
    var CipherParams = C_lib.CipherParams = Base.extend({
        /**
         * Initializes a newly created cipher params object.
         *
         * @param {Object} cipherParams An object with any of the possible cipher parameters.
         *
         * @example
         *
         *     var cipherParams = CryptoJS.lib.CipherParams.create({
         *         ciphertext: ciphertextWordArray,
         *         key: keyWordArray,
         *         iv: ivWordArray,
         *         salt: saltWordArray,
         *         algorithm: CryptoJS.algo.AES,
         *         mode: CryptoJS.mode.CBC,
         *         padding: CryptoJS.pad.PKCS7,
         *         blockSize: 4,
         *         formatter: CryptoJS.format.OpenSSL
         *     });
         */
        init: function (cipherParams) {
            this.mixIn(cipherParams);
        },

        /**
         * Converts this cipher params object to a string.
         *
         * @param {Format} formatter (Optional) The formatting strategy to use.
         *
         * @return {string} The stringified cipher params.
         *
         * @throws Error If neither the formatter nor the default formatter is set.
         *
         * @example
         *
         *     var string = cipherParams + '';
         *     var string = cipherParams.toString();
         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
         */
        toString: function (formatter) {
            return (formatter || this.formatter).stringify(this);
        }
    });

    /**
     * Format namespace.
     */
    var C_format = C.format = {};

    /**
     * OpenSSL formatting strategy.
     */
    var OpenSSLFormatter = C_format.OpenSSL = {
        /**
         * Converts a cipher params object to an OpenSSL-compatible string.
         *
         * @param {CipherParams} cipherParams The cipher params object.
         *
         * @return {string} The OpenSSL-compatible string.
         *
         * @static
         *
         * @example
         *
         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
         */
        stringify: function (cipherParams) {
            // Shortcuts
            var ciphertext = cipherParams.ciphertext;
            var salt = cipherParams.salt;

            // Format
            if (salt) {
                var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
            } else {
                var wordArray = ciphertext;
            }

            return wordArray.toString(Base64);
        },

        /**
         * Converts an OpenSSL-compatible string to a cipher params object.
         *
         * @param {string} openSSLStr The OpenSSL-compatible string.
         *
         * @return {CipherParams} The cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
         */
        parse: function (openSSLStr) {
            // Parse base64
            var ciphertext = Base64.parse(openSSLStr);

            // Shortcut
            var ciphertextWords = ciphertext.words;

            // Test for salt
            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
                // Extract salt
                var salt = WordArray.create(ciphertextWords.slice(2, 4));

                // Remove salt from ciphertext
                ciphertextWords.splice(0, 4);
                ciphertext.sigBytes -= 16;
            }

            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
        }
    };

    /**
     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
     */
    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
        /**
         * Configuration options.
         *
         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
         */
        cfg: Base.extend({
            format: OpenSSLFormatter
        }),

        /**
         * Encrypts a message.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {WordArray|string} message The message to encrypt.
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {CipherParams} A cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
         */
        encrypt: function (cipher, message, key, cfg) {
            // Apply config defaults
            cfg = this.cfg.extend(cfg);

            // Encrypt
            var encryptor = cipher.createEncryptor(key, cfg);
            var ciphertext = encryptor.finalize(message);

            // Shortcut
            var cipherCfg = encryptor.cfg;

            // Create and return serializable cipher params
            return CipherParams.create({
                ciphertext: ciphertext,
                key: key,
                iv: cipherCfg.iv,
                algorithm: cipher,
                mode: cipherCfg.mode,
                padding: cipherCfg.padding,
                blockSize: cipher.blockSize,
                formatter: cfg.format
            });
        },

        /**
         * Decrypts serialized ciphertext.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {WordArray} The plaintext.
         *
         * @static
         *
         * @example
         *
         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
         */
        decrypt: function (cipher, ciphertext, key, cfg) {
            // Apply config defaults
            cfg = this.cfg.extend(cfg);

            // Convert string to CipherParams
            ciphertext = this._parse(ciphertext, cfg.format);

            // Decrypt
            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

            return plaintext;
        },

        /**
         * Converts serialized ciphertext to CipherParams,
         * else assumed CipherParams already and returns ciphertext unchanged.
         *
         * @param {CipherParams|string} ciphertext The ciphertext.
         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
         *
         * @return {CipherParams} The unserialized ciphertext.
         *
         * @static
         *
         * @example
         *
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
         */
        _parse: function (ciphertext, format) {
            if (typeof ciphertext == 'string') {
                return format.parse(ciphertext, this);
            } else {
                return ciphertext;
            }
        }
    });

    /**
     * Key derivation function namespace.
     */
    var C_kdf = C.kdf = {};

    /**
     * OpenSSL key derivation function.
     */
    var OpenSSLKdf = C_kdf.OpenSSL = {
        /**
         * Derives a key and IV from a password.
         *
         * @param {string} password The password to derive from.
         * @param {number} keySize The size in words of the key to generate.
         * @param {number} ivSize The size in words of the IV to generate.
         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
         *
         * @return {CipherParams} A cipher params object with the key, IV, and salt.
         *
         * @static
         *
         * @example
         *
         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
         */
        execute: function (password, keySize, ivSize, salt) {
            // Generate random salt
            if (!salt) {
                salt = WordArray.random(64/8);
            }

            // Derive key and IV
            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

            // Separate key and IV
            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
            key.sigBytes = keySize * 4;

            // Return params
            return CipherParams.create({ key: key, iv: iv, salt: salt });
        }
    };

    /**
     * A serializable cipher wrapper that derives the key from a password,
     * and returns ciphertext as a serializable cipher params object.
     */
    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
        /**
         * Configuration options.
         *
         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
         */
        cfg: SerializableCipher.cfg.extend({
            kdf: OpenSSLKdf
        }),

        /**
         * Encrypts a message using a password.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {WordArray|string} message The message to encrypt.
         * @param {string} password The password.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {CipherParams} A cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
         */
        encrypt: function (cipher, message, password, cfg) {
            // Apply config defaults
            cfg = this.cfg.extend(cfg);

            // Derive key and other params
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

            // Add IV to config
            cfg.iv = derivedParams.iv;

            // Encrypt
            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

            // Mix in derived params
            ciphertext.mixIn(derivedParams);

            return ciphertext;
        },

        /**
         * Decrypts serialized ciphertext using a password.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
         * @param {string} password The password.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {WordArray} The plaintext.
         *
         * @static
         *
         * @example
         *
         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
         */
        decrypt: function (cipher, ciphertext, password, cfg) {
            // Apply config defaults
            cfg = this.cfg.extend(cfg);

            // Convert string to CipherParams
            ciphertext = this._parse(ciphertext, cfg.format);

            // Derive key and other params
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

            // Add IV to config
            cfg.iv = derivedParams.iv;

            // Decrypt
            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

            return plaintext;
        }
    });
}());
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var BlockCipher = C_lib.BlockCipher;
    var C_algo = C.algo;

    // Lookup tables
    var SBOX = [];
    var INV_SBOX = [];
    var SUB_MIX_0 = [];
    var SUB_MIX_1 = [];
    var SUB_MIX_2 = [];
    var SUB_MIX_3 = [];
    var INV_SUB_MIX_0 = [];
    var INV_SUB_MIX_1 = [];
    var INV_SUB_MIX_2 = [];
    var INV_SUB_MIX_3 = [];

    // Compute lookup tables
    (function () {
        // Compute double table
        var d = [];
        for (var i = 0; i < 256; i++) {
            if (i < 128) {
                d[i] = i << 1;
            } else {
                d[i] = (i << 1) ^ 0x11b;
            }
        }

        // Walk GF(2^8)
        var x = 0;
        var xi = 0;
        for (var i = 0; i < 256; i++) {
            // Compute sbox
            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
            SBOX[x] = sx;
            INV_SBOX[sx] = x;

            // Compute multiplication
            var x2 = d[x];
            var x4 = d[x2];
            var x8 = d[x4];

            // Compute sub bytes, mix columns tables
            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
            SUB_MIX_3[x] = t;

            // Compute inv sub bytes, inv mix columns tables
            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
            INV_SUB_MIX_3[sx] = t;

            // Compute next counter
            if (!x) {
                x = xi = 1;
            } else {
                x = x2 ^ d[d[d[x8 ^ x2]]];
                xi ^= d[d[xi]];
            }
        }
    }());

    // Precomputed Rcon lookup
    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

    /**
     * AES block cipher algorithm.
     */
    var AES = C_algo.AES = BlockCipher.extend({
        _doReset: function () {
            // Shortcuts
            var key = this._key;
            var keyWords = key.words;
            var keySize = key.sigBytes / 4;

            // Compute number of rounds
            var nRounds = this._nRounds = keySize + 6

            // Compute number of key schedule rows
            var ksRows = (nRounds + 1) * 4;

            // Compute key schedule
            var keySchedule = this._keySchedule = [];
            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
                if (ksRow < keySize) {
                    keySchedule[ksRow] = keyWords[ksRow];
                } else {
                    var t = keySchedule[ksRow - 1];

                    if (!(ksRow % keySize)) {
                        // Rot word
                        t = (t << 8) | (t >>> 24);

                        // Sub word
                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

                        // Mix Rcon
                        t ^= RCON[(ksRow / keySize) | 0] << 24;
                    } else if (keySize > 6 && ksRow % keySize == 4) {
                        // Sub word
                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
                    }

                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
                }
            }

            // Compute inv key schedule
            var invKeySchedule = this._invKeySchedule = [];
            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
                var ksRow = ksRows - invKsRow;

                if (invKsRow % 4) {
                    var t = keySchedule[ksRow];
                } else {
                    var t = keySchedule[ksRow - 4];
                }

                if (invKsRow < 4 || ksRow <= 4) {
                    invKeySchedule[invKsRow] = t;
                } else {
                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
                }
            }
        },

        encryptBlock: function (M, offset) {
            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
        },

        decryptBlock: function (M, offset) {
            // Swap 2nd and 4th rows
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;

            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

            // Inv swap 2nd and 4th rows
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
        },

        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
            // Shortcut
            var nRounds = this._nRounds;

            // Get input, add round key
            var s0 = M[offset]     ^ keySchedule[0];
            var s1 = M[offset + 1] ^ keySchedule[1];
            var s2 = M[offset + 2] ^ keySchedule[2];
            var s3 = M[offset + 3] ^ keySchedule[3];

            // Key schedule row counter
            var ksRow = 4;

            // Rounds
            for (var round = 1; round < nRounds; round++) {
                // Shift rows, sub bytes, mix columns, add round key
                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

                // Update state
                s0 = t0;
                s1 = t1;
                s2 = t2;
                s3 = t3;
            }

            // Shift rows, sub bytes, add round key
            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

            // Set output
            M[offset]     = t0;
            M[offset + 1] = t1;
            M[offset + 2] = t2;
            M[offset + 3] = t3;
        },

        keySize: 256/32
    });

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
     */
    C.AES = BlockCipher._createHelper(AES);
}());
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/**
 * Zero padding strategy.
 */
CryptoJS.pad.ZeroPadding = {
    pad: function (data, blockSize) {
        // Shortcut
        var blockSizeBytes = blockSize * 4;

        // Pad
        data.clamp();
        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
    },

    unpad: function (data) {
        // Shortcut
        var dataWords = data.words;

        // Unpad
        var i = data.sigBytes - 1;
        while (!((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
            i--;
        }
        data.sigBytes = i + 1;
    }
};

window.CryptoJS = CryptoJS;



if (!('randomUUID' in crypto)){
    // https://stackoverflow.com/a/2117523/2800218
    // LICENSE: https://creativecommons.org/licenses/by-sa/4.0/legalcode
    crypto.randomUUID = function randomUUID() {
        return (
            [1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g,
                c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
    };
}
    
;


;
// Original plugin 1: assets/scripts/plugin/MotionPathPlugin.min.js
// SHA256: fad0a762dfe5607bcffde8eada2d2575fb518fa26e7e2c8c22fd4e808b7a6962
/*!
 * MotionPathPlugin 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(t){"use strict";function p(t){return"string"==typeof t}function x(t){return Math.round(1e10*t)/1e10||0}function y(t,e,n,r){var a=t[e],o=1===r?6:subdivideSegment(a,n,r);if((o||!r)&&o+n+2<a.length)return t.splice(e,0,a.slice(0,n+o+2)),a.splice(0,n+o),1}function C(t,e){var n=t.length,r=t[n-1]||[],a=r.length;n&&e[0]===r[a-2]&&e[1]===r[a-1]&&(e=r.concat(e.slice(2)),n--),t[n]=e}var M=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,T=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,r=/(^[#\.][a-z]|[a-y][a-z])/i,V=Math.PI/180,s=180/Math.PI,F=Math.sin,U=Math.cos,H=Math.abs,$=Math.sqrt,l=Math.atan2,A=1e8,h=function _isNumber(t){return"number"==typeof t},S={},_={},e=1e5,d=function _wrapProgress(t){return Math.round((t+A)%1*e)/e||(t<0?0:1)},N=function _round(t){return Math.round(t*e)/e||0},m=function _getSampleIndex(t,e,n){var r=t.length,a=~~(n*r);if(t[a]>e){for(;--a&&t[a]>e;);a<0&&(a=0)}else for(;t[++a]<e&&a<r;);return a<r?a:r-1},O=function _copyMetaData(t,e){return e.totalLength=t.totalLength,t.samples?(e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):t.totalPoints&&(e.totalPoints=t.totalPoints),e};function getRawPath(t){var e,n=(t=p(t)&&r.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return n&&(t=t.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(e=n._gsPath[t])&&!e._dirty?e:n._gsPath[t]=stringToRawPath(t)):t?p(t)?stringToRawPath(t):h(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")}function reverseSegment(t){var e,n=0;for(t.reverse();n<t.length;n+=2)e=t[n],t[n]=t[n+1],t[n+1]=e;t.reversed=!t.reversed}var B={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function convertToPath(t,e){var n,r,a,o,i,s,l,h,u,f,g,c,p,d,m,v,y,x,w,P,b,M,R=t.tagName.toLowerCase(),L=.552284749831;return"path"!==R&&t.getBBox?(s=function _createPath(t,e){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=[].slice.call(t.attributes),o=a.length;for(e=","+e+",";-1<--o;)n=a[o].nodeName.toLowerCase(),e.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,a[o].nodeValue);return r}(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),M=function _attrToObj(t,e){for(var n=e?e.split(","):[],r={},a=n.length;-1<--a;)r[n[a]]=+t.getAttribute(n[a])||0;return r}(t,B[R]),"rect"===R?(o=M.rx,i=M.ry||o,r=M.x,a=M.y,f=M.width-2*o,g=M.height-2*i,n=o||i?"M"+(v=(d=(p=r+o)+f)+o)+","+(x=a+i)+" V"+(w=x+g)+" C"+[v,P=w+i*L,m=d+o*L,b=w+i,d,b,d-(d-p)/3,b,p+(d-p)/3,b,p,b,c=r+o*(1-L),b,r,P,r,w,r,w-(w-x)/3,r,x+(w-x)/3,r,x,r,y=a+i*(1-L),c,a,p,a,p+(d-p)/3,a,d-(d-p)/3,a,d,a,m,a,v,y,v,x].join(",")+"z":"M"+(r+f)+","+a+" v"+g+" h"+-f+" v"+-g+" h"+f+"z"):"circle"===R||"ellipse"===R?(h="circle"===R?(o=i=M.r)*L:(o=M.rx,(i=M.ry)*L),n="M"+((r=M.cx)+o)+","+(a=M.cy)+" C"+[r+o,a+h,r+(l=o*L),a+i,r,a+i,r-l,a+i,r-o,a+h,r-o,a,r-o,a-h,r-l,a-i,r,a-i,r+l,a-i,r+o,a-h,r+o,a].join(",")+"z"):"line"===R?n="M"+M.x1+","+M.y1+" L"+M.x2+","+M.y2:"polyline"!==R&&"polygon"!==R||(n="M"+(r=(u=(t.getAttribute("points")+"").match(T)||[]).shift())+","+(a=u.shift())+" L"+u.join(","),"polygon"===R&&(n+=","+r+","+a+"z")),s.setAttribute("d",rawPathToString(s._gsRawPath=stringToRawPath(n))),e&&t.parentNode&&(t.parentNode.insertBefore(s,t),t.parentNode.removeChild(t)),s):t}function getRotationAtBezierT(t,e,n){var r,a=t[e],o=t[e+2],i=t[e+4];return a+=(o-a)*n,a+=((o+=(i-o)*n)-a)*n,r=o+(i+(t[e+6]-i)*n-o)*n-a,a=t[e+1],a+=((o=t[e+3])-a)*n,a+=((o+=((i=t[e+5])-o)*n)-a)*n,N(l(o+(i+(t[e+7]-i)*n-o)*n-a,r)*s)}function sliceRawPath(t,e,n){n=function _isUndefined(t){return void 0===t}(n)?1:x(n)||0,e=x(e)||0;var r=Math.max(0,~~(H(n-e)-1e-8)),a=function copyRawPath(t){for(var e=[],n=0;n<t.length;n++)e[n]=O(t[n],t[n].slice(0));return O(t,e)}(t);if(n<e&&(e=1-e,n=1-n,function _reverseRawPath(t,e){var n=t.length;for(e||t.reverse();n--;)t[n].reversed||reverseSegment(t[n])}(a),a.totalLength=0),e<0||n<0){var o=Math.abs(~~Math.min(e,n))+1;e+=o,n+=o}a.totalLength||cacheRawPathMeasurements(a);var i,s,l,h,u,f,g,c,p=1<n,d=getProgressData(a,e,S,!0),m=getProgressData(a,n,_),v=m.segment,w=d.segment,P=m.segIndex,b=d.segIndex,M=m.i,R=d.i,L=b===P,T=M===R&&L;if(p||r){for(i=P<b||L&&M<R||T&&m.t<d.t,y(a,b,R,d.t)&&(b++,i||(P++,T?(m.t=(m.t-d.t)/(1-d.t),M=0):L&&(M-=R))),Math.abs(1-(n-e))<1e-5?P=b-1:!m.t&&P?P--:y(a,P,M,m.t)&&i&&b++,1===d.t&&(b=(b+1)%a.length),u=[],g=1+(f=a.length)*r,g+=(f-(c=b)+P)%f,h=0;h<g;h++)C(u,a[c++%f]);a=u}else if(l=1===m.t?6:subdivideSegment(v,M,m.t),e!==n)for(s=subdivideSegment(w,R,T?d.t/m.t:d.t),L&&(l+=s),v.splice(M+l+2),(s||R)&&w.splice(0,R+s),h=a.length;h--;)(h<b||P<h)&&a.splice(h,1);else v.angle=getRotationAtBezierT(v,M+l,0),d=v[M+=l],m=v[M+1],v.length=v.totalLength=0,v.totalPoints=a.totalPoints=8,v.push(d,m,d,m,d,m,d,m);return a.totalLength=0,a}function measureSegment(t,e,n){e=e||0,t.samples||(t.samples=[],t.lookup=[]);var r,a,o,i,s,l,h,u,f,g,c,p,d,m,v,y,x,w=~~t.resolution||12,P=1/w,b=n?e+6*n+1:t.length,M=t[e],R=t[e+1],L=e?e/6*w:0,T=t.samples,C=t.lookup,S=(e?t.minLength:A)||A,_=T[L+n*w-1],N=e?T[L-1]:0;for(T.length=C.length=0,a=e+2;a<b;a+=6){if(o=t[a+4]-M,i=t[a+2]-M,s=t[a]-M,u=t[a+5]-R,f=t[a+3]-R,g=t[a+1]-R,l=h=c=p=0,H(o)<.01&&H(u)<.01&&H(s)+H(g)<.01)8<t.length&&(t.splice(a,6),a-=6,b-=6);else for(r=1;r<=w;r++)l=h-(h=((m=P*r)*m*o+3*(d=1-m)*(m*i+d*s))*m),c=p-(p=(m*m*u+3*d*(m*f+d*g))*m),(y=$(c*c+l*l))<S&&(S=y),N+=y,T[L++]=N;M+=o,R+=u}if(_)for(_-=N;L<T.length;L++)T[L]+=_;if(T.length&&S){if(t.totalLength=x=T[T.length-1]||0,x/(t.minLength=S)<9999)for(y=v=0,r=0;r<x;r+=S)C[y++]=T[v]<r?++v:v}else t.totalLength=T[0]=0;return e?N-T[e/2-1]:N}function cacheRawPathMeasurements(t,e){var n,r,a;for(a=n=r=0;a<t.length;a++)t[a].resolution=~~e||12,r+=t[a].length,n+=measureSegment(t[a]);return t.totalPoints=r,t.totalLength=n,t}function subdivideSegment(t,e,n){if(n<=0||1<=n)return 0;var r=t[e],a=t[e+1],o=t[e+2],i=t[e+3],s=t[e+4],l=t[e+5],h=r+(o-r)*n,u=o+(s-o)*n,f=a+(i-a)*n,g=i+(l-i)*n,c=h+(u-h)*n,p=f+(g-f)*n,d=s+(t[e+6]-s)*n,m=l+(t[e+7]-l)*n;return u+=(d-u)*n,g+=(m-g)*n,t.splice(e+2,4,N(h),N(f),N(c),N(p),N(c+(u-c)*n),N(p+(g-p)*n),N(u),N(g),N(d),N(m)),t.samples&&t.samples.splice(e/6*t.resolution|0,0,0,0,0,0,0,0),6}function getProgressData(t,e,n,r){n=n||{},t.totalLength||cacheRawPathMeasurements(t),(e<0||1<e)&&(e=d(e));var a,o,i,s,l,h,u,f=0,g=t[0];if(e)if(1===e)u=1,h=(g=t[f=t.length-1]).length-8;else{if(1<t.length){for(i=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<i;)f=h;e=(i-(s=l-(g=t[f]).totalLength))/(l-s)||0}a=g.samples,o=g.resolution,i=g.totalLength*e,s=(h=g.lookup.length?g.lookup[~~(i/g.minLength)]||0:m(a,i,e))?a[h-1]:0,(l=a[h])<i&&(s=l,l=a[++h]),u=1/o*((i-s)/(l-s)+h%o),h=6*~~(h/o),r&&1===u&&(h+6<g.length?(h+=6,u=0):f+1<t.length&&(h=u=0,g=t[++f]))}else u=h=f=0,g=t[0];return n.t=u,n.i=h,n.path=t,n.segment=g,n.segIndex=f,n}function getPositionOnPath(t,e,n,r){var a,o,i,s,l,h,u,f,g,c=t[0],p=r||{};if((e<0||1<e)&&(e=d(e)),c.lookup||cacheRawPathMeasurements(t),1<t.length){for(i=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<i;)c=t[h];e=(i-(s=l-c.totalLength))/(l-s)||0}return a=c.samples,o=c.resolution,i=c.totalLength*e,s=(h=c.lookup.length?c.lookup[e<1?~~(i/c.minLength):c.lookup.length-1]||0:m(a,i,e))?a[h-1]:0,(l=a[h])<i&&(s=l,l=a[++h]),g=1-(u=1/o*((i-s)/(l-s)+h%o)||0),f=c[h=6*~~(h/o)],p.x=N((u*u*(c[h+6]-f)+3*g*(u*(c[h+4]-f)+g*(c[h+2]-f)))*u+f),p.y=N((u*u*(c[h+7]-(f=c[h+1]))+3*g*(u*(c[h+5]-f)+g*(c[h+3]-f)))*u+f),n&&(p.angle=c.totalLength?getRotationAtBezierT(c,h,1<=u?1-1e-9:u||1e-9):c.angle||0),p}function transformRawPath(t,e,n,r,a,o,i){for(var s,l,h,u,f,g=t.length;-1<--g;)for(l=(s=t[g]).length,h=0;h<l;h+=2)u=s[h],f=s[h+1],s[h]=u*e+f*r+o,s[h+1]=u*n+f*a+i;return t._dirty=1,t}function arcToSegment(t,e,n,r,a,o,i,s,l){if(t!==s||e!==l){n=H(n),r=H(r);var h=a%360*V,u=U(h),f=F(h),g=Math.PI,c=2*g,p=(t-s)/2,d=(e-l)/2,m=u*p+f*d,v=-f*p+u*d,y=m*m,x=v*v,w=y/(n*n)+x/(r*r);1<w&&(n=$(w)*n,r=$(w)*r);var P=n*n,b=r*r,M=(P*b-P*x-b*y)/(P*x+b*y);M<0&&(M=0);var R=(o===i?-1:1)*$(M),L=n*v/r*R,T=-r*m/n*R,C=u*L-f*T+(t+s)/2,S=f*L+u*T+(e+l)/2,_=(m-L)/n,N=(v-T)/r,A=(-m-L)/n,O=(-v-T)/r,B=_*_+N*N,E=(N<0?-1:1)*Math.acos(_/$(B)),I=(_*O-N*A<0?-1:1)*Math.acos((_*A+N*O)/$(B*(A*A+O*O)));isNaN(I)&&(I=g),!i&&0<I?I-=c:i&&I<0&&(I+=c),E%=c,I%=c;var D,X=Math.ceil(H(I)/(c/4)),k=[],z=I/X,G=4/3*F(z/2)/(1+U(z/2)),Z=u*n,q=f*n,Y=f*-r,j=u*r;for(D=0;D<X;D++)m=U(a=E+D*z),v=F(a),_=U(a+=z),N=F(a),k.push(m-G*v,v+G*m,_+G*N,N-G*_,_,N);for(D=0;D<k.length;D+=2)m=k[D],v=k[D+1],k[D]=m*Z+v*Y+C,k[D+1]=m*q+v*j+S;return k[D-2]=s,k[D-1]=l,k}}function stringToRawPath(t){function Cf(t,e,n,r){u=(n-t)/3,f=(r-e)/3,s.push(t+u,e+f,n-u,r-f,n,r)}var e,n,r,a,o,i,s,l,h,u,f,g,c,p,d,m=(t+"").replace(L,function(t){var e=+t;return e<1e-4&&-1e-4<e?0:e}).match(M)||[],v=[],y=0,x=0,w=m.length,P=0,b="ERROR: malformed path: "+t;if(!t||!isNaN(m[0])||isNaN(m[1]))return console.log(b),v;for(e=0;e<w;e++)if(c=o,isNaN(m[e])?i=(o=m[e].toUpperCase())!==m[e]:e--,r=+m[e+1],a=+m[e+2],i&&(r+=y,a+=x),e||(l=r,h=a),"M"===o)s&&(s.length<8?--v.length:P+=s.length),y=l=r,x=h=a,s=[r,a],v.push(s),e+=2,o="L";else if("C"===o)i||(y=x=0),(s=s||[0,0]).push(r,a,y+1*m[e+3],x+1*m[e+4],y+=1*m[e+5],x+=1*m[e+6]),e+=6;else if("S"===o)u=y,f=x,"C"!==c&&"S"!==c||(u+=y-s[s.length-4],f+=x-s[s.length-3]),i||(y=x=0),s.push(u,f,r,a,y+=1*m[e+3],x+=1*m[e+4]),e+=4;else if("Q"===o)u=y+2/3*(r-y),f=x+2/3*(a-x),i||(y=x=0),y+=1*m[e+3],x+=1*m[e+4],s.push(u,f,y+2/3*(r-y),x+2/3*(a-x),y,x),e+=4;else if("T"===o)u=y-s[s.length-4],f=x-s[s.length-3],s.push(y+u,x+f,r+2/3*(y+1.5*u-r),a+2/3*(x+1.5*f-a),y=r,x=a),e+=2;else if("H"===o)Cf(y,x,y=r,x),e+=1;else if("V"===o)Cf(y,x,y,x=r+(i?x-y:0)),e+=1;else if("L"===o||"Z"===o)"Z"===o&&(r=l,a=h,s.closed=!0),("L"===o||.5<H(y-r)||.5<H(x-a))&&(Cf(y,x,r,a),"L"===o&&(e+=2)),y=r,x=a;else if("A"===o){if(p=m[e+4],d=m[e+5],u=m[e+6],f=m[e+7],n=7,1<p.length&&(p.length<3?(f=u,u=d,n--):(f=d,u=p.substr(2),n-=2),d=p.charAt(1),p=p.charAt(0)),g=arcToSegment(y,x,+m[e+1],+m[e+2],+m[e+3],+p,+d,(i?y:0)+1*u,(i?x:0)+1*f),e+=n,g)for(n=0;n<g.length;n++)s.push(g[n]);y=s[s.length-2],x=s[s.length-1]}else console.log(b);return(e=s.length)<6?(v.pop(),e=0):s[0]===s[e-2]&&s[1]===s[e-1]&&(s.closed=!0),v.totalPoints=P+e,v}function flatPointsToSegment(t,e){void 0===e&&(e=1);for(var n=t[0],r=0,a=[n,r],o=2;o<t.length;o+=2)a.push(n,r,t[o],r=(t[o]-n)*e/2,n=t[o],-r);return a}function pointsToSegment(t,e){H(t[0]-t[2])<1e-4&&H(t[1]-t[3])<1e-4&&(t=t.slice(2));var n,r,a,o,i,s,l,h,u,f,g,c,p,d,m=t.length-2,v=+t[0],y=+t[1],x=+t[2],w=+t[3],P=[v,y,v,y],b=x-v,M=w-y,R=Math.abs(t[m]-v)<.001&&Math.abs(t[m+1]-y)<.001;for(R&&(t.push(x,w),x=v,w=y,v=t[m-2],y=t[m-1],t.unshift(v,y),m+=4),e=e||0===e?+e:1,a=2;a<m;a+=2)n=v,r=y,v=x,y=w,x=+t[a+2],w=+t[a+3],v===x&&y===w||(o=b,i=M,b=x-v,M=w-y,h=((s=$(o*o+i*i))+(l=$(b*b+M*M)))*e*.25/$(Math.pow(b/l+o/s,2)+Math.pow(M/l+i/s,2)),g=v-((u=v-(v-n)*(s?h/s:0))+(((f=v+(x-v)*(l?h/l:0))-u)*(3*s/(s+l)+.5)/4||0)),d=y-((c=y-(y-r)*(s?h/s:0))+(((p=y+(w-y)*(l?h/l:0))-c)*(3*s/(s+l)+.5)/4||0)),v===n&&y===r||P.push(N(u+g),N(c+d),N(v),N(y),N(f+g),N(p+d)));return v!==x||y!==w||P.length<4?P.push(N(x),N(w),N(x),N(w)):P.length-=2,2===P.length?P.push(v,y,v,y,v,y):R&&(P.splice(0,6),P.length=P.length-6),P}function rawPathToString(t){h(t[0])&&(t=[t]);var e,n,r,a,o="",i=t.length;for(n=0;n<i;n++){for(a=t[n],o+="M"+N(a[0])+","+N(a[1])+" C",e=a.length,r=2;r<e;r++)o+=N(a[r++])+","+N(a[r++])+" "+N(a[r++])+","+N(a[r++])+" "+N(a[r++])+","+N(a[r])+" ";a.closed&&(o+="z")}return o}function R(t){var e=t.ownerDocument||t;!(k in t.style)&&"msTransform"in t.style&&(z=(k="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););if(v=window,E=new Y,e){w=(c=e).documentElement,P=e.body,(I=c.createElementNS("http://www.w3.org/2000/svg","g")).style.transform="none";var n=e.createElement("div"),r=e.createElement("div"),a=e&&(e.body||e.firstElementChild);a&&a.appendChild&&(a.appendChild(n),n.appendChild(r),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),D=r.offsetParent!==n,a.removeChild(n))}return e}function X(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)}function Z(t,e){if(t.parentNode&&(c||R(t))){var n=X(t),r=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",a=n?e?"rect":"g":"div",o=2!==e?0:100,i=3===e?100:0,s="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",l=c.createElementNS?c.createElementNS(r.replace(/^https/,"http"),a):c.createElement(a);return e&&(n?(b=b||Z(t),l.setAttribute("width",.01),l.setAttribute("height",.01),l.setAttribute("transform","translate("+o+","+i+")"),b.appendChild(l)):(g||((g=Z(t)).style.cssText=s),l.style.cssText=s+"width:0.1px;height:0.1px;top:"+i+"px;left:"+o+"px",g.appendChild(l))),l}throw"Need document and parent."}function aa(t,e){var n,r,a,o,i,s,l=X(t),h=t===l,u=l?G:q,f=t.parentNode;if(t===v)return t;if(u.length||u.push(Z(t,1),Z(t,2),Z(t,3)),n=l?b:g,l)h?(o=-(a=function _getCTM(t){var e,n=t.getCTM();return n||(e=t.style[k],t.style[k]="none",t.appendChild(I),n=I.getCTM(),t.removeChild(I),e?t.style[k]=e:t.style.removeProperty(k.replace(/([A-Z])/g,"-$1").toLowerCase())),n||E.clone()}(t)).e/a.a,i=-a.f/a.d,r=E):t.getBBox?(a=t.getBBox(),o=(r=(r=t.transform?t.transform.baseVal:{}).numberOfItems?1<r.numberOfItems?function _consolidate(t){for(var e=new Y,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e}(r):r.getItem(0).matrix:E).a*a.x+r.c*a.y,i=r.b*a.x+r.d*a.y):(r=new Y,o=i=0),e&&"g"===t.tagName.toLowerCase()&&(o=i=0),(h?l:f).appendChild(n),n.setAttribute("transform","matrix("+r.a+","+r.b+","+r.c+","+r.d+","+(r.e+o)+","+(r.f+i)+")");else{if(o=i=0,D)for(r=t.offsetParent,a=t;(a=a&&a.parentNode)&&a!==r&&a.parentNode;)4<(v.getComputedStyle(a)[k]+"").length&&(o=a.offsetLeft,i=a.offsetTop,a=0);if("absolute"!==(s=v.getComputedStyle(t)).position&&"fixed"!==s.position)for(r=t.offsetParent;f&&f!==r;)o+=f.scrollLeft||0,i+=f.scrollTop||0,f=f.parentNode;(a=n.style).top=t.offsetTop-i+"px",a.left=t.offsetLeft-o+"px",a[k]=s[k],a[z]=s[z],a.position="fixed"===s.position?"fixed":"absolute",t.parentNode.appendChild(n)}return n}function ba(t,e,n,r,a,o,i){return t.a=e,t.b=n,t.c=r,t.d=a,t.e=o,t.f=i,t}var c,v,w,P,g,b,E,I,D,n,k="transform",z=k+"Origin",G=[],q=[],Y=((n=Matrix2D.prototype).inverse=function inverse(){var t=this.a,e=this.b,n=this.c,r=this.d,a=this.e,o=this.f,i=t*r-e*n||1e-10;return ba(this,r/i,-e/i,-n/i,t/i,(n*o-r*a)/i,-(t*o-e*a)/i)},n.multiply=function multiply(t){var e=this.a,n=this.b,r=this.c,a=this.d,o=this.e,i=this.f,s=t.a,l=t.c,h=t.b,u=t.d,f=t.e,g=t.f;return ba(this,s*e+h*r,s*n+h*a,l*e+u*r,l*n+u*a,o+f*e+g*r,i+f*n+g*a)},n.clone=function clone(){return new Matrix2D(this.a,this.b,this.c,this.d,this.e,this.f)},n.equals=function equals(t){var e=this.a,n=this.b,r=this.c,a=this.d,o=this.e,i=this.f;return e===t.a&&n===t.b&&r===t.c&&a===t.d&&o===t.e&&i===t.f},n.apply=function apply(t,e){void 0===e&&(e={});var n=t.x,r=t.y,a=this.a,o=this.b,i=this.c,s=this.d,l=this.e,h=this.f;return e.x=n*a+r*i+l||0,e.y=n*o+r*s+h||0,e},Matrix2D);function Matrix2D(t,e,n,r,a,o){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===r&&(r=1),void 0===a&&(a=0),void 0===o&&(o=0),ba(this,t,e,n,r,a,o)}function getGlobalMatrix(t,e,n,r){if(!t||!t.parentNode||(c||R(t)).documentElement===t)return new Y;var a=function _forceNonZeroScale(t){for(var e,n;t&&t!==P;)(n=t._gsap)&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e}(t),o=X(t)?G:q,i=aa(t,n),s=o[0].getBoundingClientRect(),l=o[1].getBoundingClientRect(),h=o[2].getBoundingClientRect(),u=i.parentNode,f=!r&&function _isFixed(t){return"fixed"===v.getComputedStyle(t).position||((t=t.parentNode)&&1===t.nodeType?_isFixed(t):void 0)}(t),g=new Y((l.left-s.left)/100,(l.top-s.top)/100,(h.left-s.left)/100,(h.top-s.top)/100,s.left+(f?0:function _getDocScrollLeft(){return v.pageXOffset||c.scrollLeft||w.scrollLeft||P.scrollLeft||0}()),s.top+(f?0:function _getDocScrollTop(){return v.pageYOffset||c.scrollTop||w.scrollTop||P.scrollTop||0}()));if(u.removeChild(i),a)for(s=a.length;s--;)(l=a[s]).scaleX=l.scaleY=0,l.renderTransform(1,l);return e?g.inverse():g}function na(t,e,n,r){for(var a=e.length,o=2===r?0:r,i=0;i<a;i++)t[o]=parseFloat(e[i][n]),2===r&&(t[o+1]=0),o+=2;return t}function oa(t,e,n){return parseFloat(t._gsap.get(t,e,n||"px"))||0}function pa(t){var e,n=t[0],r=t[1];for(e=2;e<t.length;e+=2)n=t[e]+=n,r=t[e+1]+=r}function qa(t,e,n,r,a,o,i,s,l){return e="cubic"===i.type?[e]:(!1!==i.fromCurrent&&e.unshift(oa(n,r,s),a?oa(n,a,l):0),i.relative&&pa(e),[(a?pointsToSegment:flatPointsToSegment)(e,i.curviness)]),e=o(nt(e,n,i)),rt(t,n,r,e,"x",s),a&&rt(t,n,a,e,"y",l),cacheRawPathMeasurements(e,i.resolution||(0===i.curviness?20:12))}function ra(t){return t}function ta(t,e,n){var r,a=getGlobalMatrix(t),o=0,i=0;return"svg"===(t.tagName+"").toLowerCase()?(r=t.viewBox.baseVal).width||(r={width:+t.getAttribute("width"),height:+t.getAttribute("height")}):r=e&&t.getBBox&&t.getBBox(),e&&"auto"!==e&&(o=e.push?e[0]*(r?r.width:t.offsetWidth||0):e.x,i=e.push?e[1]*(r?r.height:t.offsetHeight||0):e.y),n.apply(o||i?a.apply({x:o,y:i}):{x:a.e,y:a.f})}function ua(t,e,n,r){var a,o=getGlobalMatrix(t.parentNode,!0,!0),i=o.clone().multiply(getGlobalMatrix(e)),s=ta(t,n,o),l=ta(e,r,o),h=l.x,u=l.y;return i.e=i.f=0,"auto"===r&&e.getTotalLength&&"path"===e.tagName.toLowerCase()&&(a=e.getAttribute("d").match(et)||[],h+=(a=i.apply({x:+a[0],y:+a[1]})).x,u+=a.y),a&&(h-=(a=i.apply(e.getBBox())).x,u-=a.y),i.e=h-s.x,i.f=u-s.y,i}var j,f,Q,W,J,o,K="x,translateX,left,marginLeft,xPercent".split(","),tt="y,translateY,top,marginTop,yPercent".split(","),i=Math.PI/180,et=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,nt=function _align(t,e,n){var r,a,o,i=n.align,s=n.matrix,l=n.offsetX,h=n.offsetY,u=n.alignOrigin,f=t[0][0],g=t[0][1],c=oa(e,"x"),p=oa(e,"y");return t&&t.length?(i&&("self"===i||(r=W(i)[0]||e)===e?transformRawPath(t,1,0,0,1,c-f,p-g):(u&&!1!==u[2]?j.set(e,{transformOrigin:100*u[0]+"% "+100*u[1]+"%"}):u=[oa(e,"xPercent")/-100,oa(e,"yPercent")/-100],o=(a=ua(e,r,u,"auto")).apply({x:f,y:g}),transformRawPath(t,a.a,a.b,a.c,a.d,c+a.e-(o.x-a.e),p+a.f-(o.y-a.f)))),s?transformRawPath(t,s.a,s.b,s.c,s.d,s.e,s.f):(l||h)&&transformRawPath(t,1,0,0,1,l||0,h||0),t):getRawPath("M0,0L0,0")},rt=function _addDimensionalPropTween(t,e,n,r,a,o){var i=e._gsap,s=i.harness,l=s&&s.aliases&&s.aliases[n],h=l&&l.indexOf(",")<0?l:n,u=t._pt=new f(t._pt,e,h,0,0,ra,0,i.set(e,h,t));u.u=Q(i.get(e,h,o))||0,u.path=r,u.pp=a,t._props.push(h)},a={version:"3.12.5",name:"motionPath",register:function register(t,e,n){Q=(j=t).utils.getUnit,W=j.utils.toArray,J=j.core.getStyleSaver,o=j.core.reverting||function(){},f=n},init:function init(t,e,n){if(!j)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;"object"==typeof e&&!e.style&&e.path||(e={path:e});var r,a,o=[],i=e.path,s=e.autoRotate,l=e.unitX,h=e.unitY,u=e.x,f=e.y,g=i[0],c=function _sliceModifier(e,n){return function(t){return e||1!==n?sliceRawPath(t,e,n):t}}(e.start,"end"in e?e.end:1);if(this.rawPaths=o,this.target=t,this.tween=n,this.styles=J&&J(t,"transform"),(this.rotate=s||0===s)&&(this.rOffset=parseFloat(s)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=Q(t._gsap.get(t,this.rProp))||0),!Array.isArray(i)||"closed"in i||"number"==typeof g)cacheRawPathMeasurements(r=c(nt(getRawPath(e.path),t,e)),e.resolution),o.push(r),rt(this,t,e.x||"x",r,"x",e.unitX||"px"),rt(this,t,e.y||"y",r,"y",e.unitY||"px");else{for(a in g)!u&&~K.indexOf(a)?u=a:!f&&~tt.indexOf(a)&&(f=a);for(a in u&&f?o.push(qa(this,na(na([],i,u,0),i,f,1),t,u,f,c,e,l||Q(i[0][u]),h||Q(i[0][f]))):u=f=0,g)a!==u&&a!==f&&o.push(qa(this,na([],i,a,2),t,a,0,c,e,Q(i[0][a])))}},render:function render(t,e){var n=e.rawPaths,r=n.length,a=e._pt;if(e.tween._time||!o()){for(1<t?t=1:t<0&&(t=0);r--;)getPositionOnPath(n[r],t,!r&&e.rotate,n[r]);for(;a;)a.set(a.t,a.p,a.path[a.pp]+a.u,a.d,t),a=a._next;e.rotate&&e.rSet(e.target,e.rProp,n[0].angle*(e.radians?i:1)+e.rOffset+e.ru,e,t)}else e.styles.revert()},getLength:function getLength(t){return cacheRawPathMeasurements(getRawPath(t)).totalLength},sliceRawPath:sliceRawPath,getRawPath:getRawPath,pointsToSegment:pointsToSegment,stringToRawPath:stringToRawPath,rawPathToString:rawPathToString,transformRawPath:transformRawPath,getGlobalMatrix:getGlobalMatrix,getPositionOnPath:getPositionOnPath,cacheRawPathMeasurements:cacheRawPathMeasurements,convertToPath:function convertToPath$1(t,e){return W(t).map(function(t){return convertToPath(t,!1!==e)})},convertCoordinates:function convertCoordinates(t,e,n){var r=getGlobalMatrix(e,!0,!0).multiply(getGlobalMatrix(t));return n?r.apply(n):r},getAlignMatrix:ua,getRelativePosition:function getRelativePosition(t,e,n,r){var a=ua(t,e,n,r);return{x:a.e,y:a.f}},arrayToRawPath:function arrayToRawPath(t,e){var n=na(na([],t,(e=e||{}).x||"x",0),t,e.y||"y",1);return e.relative&&pa(n),["cubic"===e.type?n:pointsToSegment(n,e.curviness)]}};!function _getGSAP(){return j||"undefined"!=typeof window&&(j=window.gsap)&&j.registerPlugin&&j}()||j.registerPlugin(a),t.MotionPathPlugin=a,t.default=a;if (typeof(window)==="undefined"||window!==t){Object.defineProperty(t,"__esModule",{value:!0})} else {delete t.default}});


;


;
// Original plugin 2: assets/scripts/plugin/forge.min.js
// SHA256: dc67fd132427ad96c9666c844b39565413c40ddb1f2d063c53512fbf6d387dfd
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.forge=t():e.forge=t()}(window,(function(){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=32)}([function(e,t){e.exports={options:{usePureJavaScript:!1}}},function(e,t,r){(function(t){var a=r(0),n=r(35),i=e.exports=a.util=a.util||{};function s(e){if(8!==e&&16!==e&&24!==e&&32!==e)throw new Error("Only 8, 16, 24, or 32 bits supported: "+e)}function o(e){if(this.data="",this.read=0,"string"==typeof e)this.data=e;else if(i.isArrayBuffer(e)||i.isArrayBufferView(e))if("undefined"!=typeof Buffer&&e instanceof Buffer)this.data=e.toString("binary");else{var t=new Uint8Array(e);try{this.data=String.fromCharCode.apply(null,t)}catch(e){for(var r=0;r<t.length;++r)this.putByte(t[r])}}else(e instanceof o||"object"==typeof e&&"string"==typeof e.data&&"number"==typeof e.read)&&(this.data=e.data,this.read=e.read);this._constructedStringLength=0}!function(){if("undefined"!=typeof process&&process.nextTick&&!process.browser)return i.nextTick=process.nextTick,void("function"==typeof setImmediate?i.setImmediate=setImmediate:i.setImmediate=i.nextTick);if("function"==typeof setImmediate)return i.setImmediate=function(){return setImmediate.apply(void 0,arguments)},void(i.nextTick=function(e){return setImmediate(e)});if(i.setImmediate=function(e){setTimeout(e,0)},"undefined"!=typeof window&&"function"==typeof window.postMessage){var e="forge.setImmediate",t=[];i.setImmediate=function(r){t.push(r),1===t.length&&window.postMessage(e,"*")},window.addEventListener("message",(function(r){if(r.source===window&&r.data===e){r.stopPropagation();var a=t.slice();t.length=0,a.forEach((function(e){e()}))}}),!0)}if("undefined"!=typeof MutationObserver){var r=Date.now(),a=!0,n=document.createElement("div");t=[];new MutationObserver((function(){var e=t.slice();t.length=0,e.forEach((function(e){e()}))})).observe(n,{attributes:!0});var s=i.setImmediate;i.setImmediate=function(e){Date.now()-r>15?(r=Date.now(),s(e)):(t.push(e),1===t.length&&n.setAttribute("a",a=!a))}}i.nextTick=i.setImmediate}(),i.isNodejs="undefined"!=typeof process&&process.versions&&process.versions.node,i.globalScope=i.isNodejs?t:"undefined"==typeof self?window:self,i.isArray=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i.isArrayBuffer=function(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer},i.isArrayBufferView=function(e){return e&&i.isArrayBuffer(e.buffer)&&void 0!==e.byteLength},i.ByteBuffer=o,i.ByteStringBuffer=o;i.ByteStringBuffer.prototype._optimizeConstructedString=function(e){this._constructedStringLength+=e,this._constructedStringLength>4096&&(this.data.substr(0,1),this._constructedStringLength=0)},i.ByteStringBuffer.prototype.length=function(){return this.data.length-this.read},i.ByteStringBuffer.prototype.isEmpty=function(){return this.length()<=0},i.ByteStringBuffer.prototype.putByte=function(e){return this.putBytes(String.fromCharCode(e))},i.ByteStringBuffer.prototype.fillWithByte=function(e,t){e=String.fromCharCode(e);for(var r=this.data;t>0;)1&t&&(r+=e),(t>>>=1)>0&&(e+=e);return this.data=r,this._optimizeConstructedString(t),this},i.ByteStringBuffer.prototype.putBytes=function(e){return this.data+=e,this._optimizeConstructedString(e.length),this},i.ByteStringBuffer.prototype.putString=function(e){return this.putBytes(i.encodeUtf8(e))},i.ByteStringBuffer.prototype.putInt16=function(e){return this.putBytes(String.fromCharCode(e>>8&255)+String.fromCharCode(255&e))},i.ByteStringBuffer.prototype.putInt24=function(e){return this.putBytes(String.fromCharCode(e>>16&255)+String.fromCharCode(e>>8&255)+String.fromCharCode(255&e))},i.ByteStringBuffer.prototype.putInt32=function(e){return this.putBytes(String.fromCharCode(e>>24&255)+String.fromCharCode(e>>16&255)+String.fromCharCode(e>>8&255)+String.fromCharCode(255&e))},i.ByteStringBuffer.prototype.putInt16Le=function(e){return this.putBytes(String.fromCharCode(255&e)+String.fromCharCode(e>>8&255))},i.ByteStringBuffer.prototype.putInt24Le=function(e){return this.putBytes(String.fromCharCode(255&e)+String.fromCharCode(e>>8&255)+String.fromCharCode(e>>16&255))},i.ByteStringBuffer.prototype.putInt32Le=function(e){return this.putBytes(String.fromCharCode(255&e)+String.fromCharCode(e>>8&255)+String.fromCharCode(e>>16&255)+String.fromCharCode(e>>24&255))},i.ByteStringBuffer.prototype.putInt=function(e,t){s(t);var r="";do{t-=8,r+=String.fromCharCode(e>>t&255)}while(t>0);return this.putBytes(r)},i.ByteStringBuffer.prototype.putSignedInt=function(e,t){return e<0&&(e+=2<<t-1),this.putInt(e,t)},i.ByteStringBuffer.prototype.putBuffer=function(e){return this.putBytes(e.getBytes())},i.ByteStringBuffer.prototype.getByte=function(){return this.data.charCodeAt(this.read++)},i.ByteStringBuffer.prototype.getInt16=function(){var e=this.data.charCodeAt(this.read)<<8^this.data.charCodeAt(this.read+1);return this.read+=2,e},i.ByteStringBuffer.prototype.getInt24=function(){var e=this.data.charCodeAt(this.read)<<16^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2);return this.read+=3,e},i.ByteStringBuffer.prototype.getInt32=function(){var e=this.data.charCodeAt(this.read)<<24^this.data.charCodeAt(this.read+1)<<16^this.data.charCodeAt(this.read+2)<<8^this.data.charCodeAt(this.read+3);return this.read+=4,e},i.ByteStringBuffer.prototype.getInt16Le=function(){var e=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8;return this.read+=2,e},i.ByteStringBuffer.prototype.getInt24Le=function(){var e=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2)<<16;return this.read+=3,e},i.ByteStringBuffer.prototype.getInt32Le=function(){var e=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2)<<16^this.data.charCodeAt(this.read+3)<<24;return this.read+=4,e},i.ByteStringBuffer.prototype.getInt=function(e){s(e);var t=0;do{t=(t<<8)+this.data.charCodeAt(this.read++),e-=8}while(e>0);return t},i.ByteStringBuffer.prototype.getSignedInt=function(e){var t=this.getInt(e),r=2<<e-2;return t>=r&&(t-=r<<1),t},i.ByteStringBuffer.prototype.getBytes=function(e){var t;return e?(e=Math.min(this.length(),e),t=this.data.slice(this.read,this.read+e),this.read+=e):0===e?t="":(t=0===this.read?this.data:this.data.slice(this.read),this.clear()),t},i.ByteStringBuffer.prototype.bytes=function(e){return void 0===e?this.data.slice(this.read):this.data.slice(this.read,this.read+e)},i.ByteStringBuffer.prototype.at=function(e){return this.data.charCodeAt(this.read+e)},i.ByteStringBuffer.prototype.setAt=function(e,t){return this.data=this.data.substr(0,this.read+e)+String.fromCharCode(t)+this.data.substr(this.read+e+1),this},i.ByteStringBuffer.prototype.last=function(){return this.data.charCodeAt(this.data.length-1)},i.ByteStringBuffer.prototype.copy=function(){var e=i.createBuffer(this.data);return e.read=this.read,e},i.ByteStringBuffer.prototype.compact=function(){return this.read>0&&(this.data=this.data.slice(this.read),this.read=0),this},i.ByteStringBuffer.prototype.clear=function(){return this.data="",this.read=0,this},i.ByteStringBuffer.prototype.truncate=function(e){var t=Math.max(0,this.length()-e);return this.data=this.data.substr(this.read,t),this.read=0,this},i.ByteStringBuffer.prototype.toHex=function(){for(var e="",t=this.read;t<this.data.length;++t){var r=this.data.charCodeAt(t);r<16&&(e+="0"),e+=r.toString(16)}return e},i.ByteStringBuffer.prototype.toString=function(){return i.decodeUtf8(this.bytes())},i.DataBuffer=function(e,t){t=t||{},this.read=t.readOffset||0,this.growSize=t.growSize||1024;var r=i.isArrayBuffer(e),a=i.isArrayBufferView(e);if(r||a)return this.data=r?new DataView(e):new DataView(e.buffer,e.byteOffset,e.byteLength),void(this.write="writeOffset"in t?t.writeOffset:this.data.byteLength);this.data=new DataView(new ArrayBuffer(0)),this.write=0,null!=e&&this.putBytes(e),"writeOffset"in t&&(this.write=t.writeOffset)},i.DataBuffer.prototype.length=function(){return this.write-this.read},i.DataBuffer.prototype.isEmpty=function(){return this.length()<=0},i.DataBuffer.prototype.accommodate=function(e,t){if(this.length()>=e)return this;t=Math.max(t||this.growSize,e);var r=new Uint8Array(this.data.buffer,this.data.byteOffset,this.data.byteLength),a=new Uint8Array(this.length()+t);return a.set(r),this.data=new DataView(a.buffer),this},i.DataBuffer.prototype.putByte=function(e){return this.accommodate(1),this.data.setUint8(this.write++,e),this},i.DataBuffer.prototype.fillWithByte=function(e,t){this.accommodate(t);for(var r=0;r<t;++r)this.data.setUint8(e);return this},i.DataBuffer.prototype.putBytes=function(e,t){if(i.isArrayBufferView(e)){var r=(a=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).byteLength-a.byteOffset;return this.accommodate(r),new Uint8Array(this.data.buffer,this.write).set(a),this.write+=r,this}if(i.isArrayBuffer(e)){var a=new Uint8Array(e);return this.accommodate(a.byteLength),new Uint8Array(this.data.buffer).set(a,this.write),this.write+=a.byteLength,this}if(e instanceof i.DataBuffer||"object"==typeof e&&"number"==typeof e.read&&"number"==typeof e.write&&i.isArrayBufferView(e.data)){a=new Uint8Array(e.data.byteLength,e.read,e.length());return this.accommodate(a.byteLength),new Uint8Array(e.data.byteLength,this.write).set(a),this.write+=a.byteLength,this}if(e instanceof i.ByteStringBuffer&&(e=e.data,t="binary"),t=t||"binary","string"==typeof e){var n;if("hex"===t)return this.accommodate(Math.ceil(e.length/2)),n=new Uint8Array(this.data.buffer,this.write),this.write+=i.binary.hex.decode(e,n,this.write),this;if("base64"===t)return this.accommodate(3*Math.ceil(e.length/4)),n=new Uint8Array(this.data.buffer,this.write),this.write+=i.binary.base64.decode(e,n,this.write),this;if("utf8"===t&&(e=i.encodeUtf8(e),t="binary"),"binary"===t||"raw"===t)return this.accommodate(e.length),n=new Uint8Array(this.data.buffer,this.write),this.write+=i.binary.raw.decode(n),this;if("utf16"===t)return this.accommodate(2*e.length),n=new Uint16Array(this.data.buffer,this.write),this.write+=i.text.utf16.encode(n),this;throw new Error("Invalid encoding: "+t)}throw Error("Invalid parameter: "+e)},i.DataBuffer.prototype.putBuffer=function(e){return this.putBytes(e),e.clear(),this},i.DataBuffer.prototype.putString=function(e){return this.putBytes(e,"utf16")},i.DataBuffer.prototype.putInt16=function(e){return this.accommodate(2),this.data.setInt16(this.write,e),this.write+=2,this},i.DataBuffer.prototype.putInt24=function(e){return this.accommodate(3),this.data.setInt16(this.write,e>>8&65535),this.data.setInt8(this.write,e>>16&255),this.write+=3,this},i.DataBuffer.prototype.putInt32=function(e){return this.accommodate(4),this.data.setInt32(this.write,e),this.write+=4,this},i.DataBuffer.prototype.putInt16Le=function(e){return this.accommodate(2),this.data.setInt16(this.write,e,!0),this.write+=2,this},i.DataBuffer.prototype.putInt24Le=function(e){return this.accommodate(3),this.data.setInt8(this.write,e>>16&255),this.data.setInt16(this.write,e>>8&65535,!0),this.write+=3,this},i.DataBuffer.prototype.putInt32Le=function(e){return this.accommodate(4),this.data.setInt32(this.write,e,!0),this.write+=4,this},i.DataBuffer.prototype.putInt=function(e,t){s(t),this.accommodate(t/8);do{t-=8,this.data.setInt8(this.write++,e>>t&255)}while(t>0);return this},i.DataBuffer.prototype.putSignedInt=function(e,t){return s(t),this.accommodate(t/8),e<0&&(e+=2<<t-1),this.putInt(e,t)},i.DataBuffer.prototype.getByte=function(){return this.data.getInt8(this.read++)},i.DataBuffer.prototype.getInt16=function(){var e=this.data.getInt16(this.read);return this.read+=2,e},i.DataBuffer.prototype.getInt24=function(){var e=this.data.getInt16(this.read)<<8^this.data.getInt8(this.read+2);return this.read+=3,e},i.DataBuffer.prototype.getInt32=function(){var e=this.data.getInt32(this.read);return this.read+=4,e},i.DataBuffer.prototype.getInt16Le=function(){var e=this.data.getInt16(this.read,!0);return this.read+=2,e},i.DataBuffer.prototype.getInt24Le=function(){var e=this.data.getInt8(this.read)^this.data.getInt16(this.read+1,!0)<<8;return this.read+=3,e},i.DataBuffer.prototype.getInt32Le=function(){var e=this.data.getInt32(this.read,!0);return this.read+=4,e},i.DataBuffer.prototype.getInt=function(e){s(e);var t=0;do{t=(t<<8)+this.data.getInt8(this.read++),e-=8}while(e>0);return t},i.DataBuffer.prototype.getSignedInt=function(e){var t=this.getInt(e),r=2<<e-2;return t>=r&&(t-=r<<1),t},i.DataBuffer.prototype.getBytes=function(e){var t;return e?(e=Math.min(this.length(),e),t=this.data.slice(this.read,this.read+e),this.read+=e):0===e?t="":(t=0===this.read?this.data:this.data.slice(this.read),this.clear()),t},i.DataBuffer.prototype.bytes=function(e){return void 0===e?this.data.slice(this.read):this.data.slice(this.read,this.read+e)},i.DataBuffer.prototype.at=function(e){return this.data.getUint8(this.read+e)},i.DataBuffer.prototype.setAt=function(e,t){return this.data.setUint8(e,t),this},i.DataBuffer.prototype.last=function(){return this.data.getUint8(this.write-1)},i.DataBuffer.prototype.copy=function(){return new i.DataBuffer(this)},i.DataBuffer.prototype.compact=function(){if(this.read>0){var e=new Uint8Array(this.data.buffer,this.read),t=new Uint8Array(e.byteLength);t.set(e),this.data=new DataView(t),this.write-=this.read,this.read=0}return this},i.DataBuffer.prototype.clear=function(){return this.data=new DataView(new ArrayBuffer(0)),this.read=this.write=0,this},i.DataBuffer.prototype.truncate=function(e){return this.write=Math.max(0,this.length()-e),this.read=Math.min(this.read,this.write),this},i.DataBuffer.prototype.toHex=function(){for(var e="",t=this.read;t<this.data.byteLength;++t){var r=this.data.getUint8(t);r<16&&(e+="0"),e+=r.toString(16)}return e},i.DataBuffer.prototype.toString=function(e){var t=new Uint8Array(this.data,this.read,this.length());if("binary"===(e=e||"utf8")||"raw"===e)return i.binary.raw.encode(t);if("hex"===e)return i.binary.hex.encode(t);if("base64"===e)return i.binary.base64.encode(t);if("utf8"===e)return i.text.utf8.decode(t);if("utf16"===e)return i.text.utf16.decode(t);throw new Error("Invalid encoding: "+e)},i.createBuffer=function(e,t){return t=t||"raw",void 0!==e&&"utf8"===t&&(e=i.encodeUtf8(e)),new i.ByteBuffer(e)},i.fillString=function(e,t){for(var r="";t>0;)1&t&&(r+=e),(t>>>=1)>0&&(e+=e);return r},i.xorBytes=function(e,t,r){for(var a="",n="",i="",s=0,o=0;r>0;--r,++s)n=e.charCodeAt(s)^t.charCodeAt(s),o>=10&&(a+=i,i="",o=0),i+=String.fromCharCode(n),++o;return a+=i},i.hexToBytes=function(e){var t="",r=0;for(!0&e.length&&(r=1,t+=String.fromCharCode(parseInt(e[0],16)));r<e.length;r+=2)t+=String.fromCharCode(parseInt(e.substr(r,2),16));return t},i.bytesToHex=function(e){return i.createBuffer(e).toHex()},i.int32ToBytes=function(e){return String.fromCharCode(e>>24&255)+String.fromCharCode(e>>16&255)+String.fromCharCode(e>>8&255)+String.fromCharCode(255&e)};var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u=[62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,64,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],l="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";i.encode64=function(e,t){for(var r,a,n,i="",s="",o=0;o<e.length;)r=e.charCodeAt(o++),a=e.charCodeAt(o++),n=e.charCodeAt(o++),i+=c.charAt(r>>2),i+=c.charAt((3&r)<<4|a>>4),isNaN(a)?i+="==":(i+=c.charAt((15&a)<<2|n>>6),i+=isNaN(n)?"=":c.charAt(63&n)),t&&i.length>t&&(s+=i.substr(0,t)+"\r\n",i=i.substr(t));return s+=i},i.decode64=function(e){e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");for(var t,r,a,n,i="",s=0;s<e.length;)t=u[e.charCodeAt(s++)-43],r=u[e.charCodeAt(s++)-43],a=u[e.charCodeAt(s++)-43],n=u[e.charCodeAt(s++)-43],i+=String.fromCharCode(t<<2|r>>4),64!==a&&(i+=String.fromCharCode((15&r)<<4|a>>2),64!==n&&(i+=String.fromCharCode((3&a)<<6|n)));return i},i.encodeUtf8=function(e){return unescape(encodeURIComponent(e))},i.decodeUtf8=function(e){return decodeURIComponent(escape(e))},i.binary={raw:{},hex:{},base64:{},base58:{},baseN:{encode:n.encode,decode:n.decode}},i.binary.raw.encode=function(e){return String.fromCharCode.apply(null,e)},i.binary.raw.decode=function(e,t,r){var a=t;a||(a=new Uint8Array(e.length));for(var n=r=r||0,i=0;i<e.length;++i)a[n++]=e.charCodeAt(i);return t?n-r:a},i.binary.hex.encode=i.bytesToHex,i.binary.hex.decode=function(e,t,r){var a=t;a||(a=new Uint8Array(Math.ceil(e.length/2)));var n=0,i=r=r||0;for(1&e.length&&(n=1,a[i++]=parseInt(e[0],16));n<e.length;n+=2)a[i++]=parseInt(e.substr(n,2),16);return t?i-r:a},i.binary.base64.encode=function(e,t){for(var r,a,n,i="",s="",o=0;o<e.byteLength;)r=e[o++],a=e[o++],n=e[o++],i+=c.charAt(r>>2),i+=c.charAt((3&r)<<4|a>>4),isNaN(a)?i+="==":(i+=c.charAt((15&a)<<2|n>>6),i+=isNaN(n)?"=":c.charAt(63&n)),t&&i.length>t&&(s+=i.substr(0,t)+"\r\n",i=i.substr(t));return s+=i},i.binary.base64.decode=function(e,t,r){var a,n,i,s,o=t;o||(o=new Uint8Array(3*Math.ceil(e.length/4))),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");for(var c=0,l=r=r||0;c<e.length;)a=u[e.charCodeAt(c++)-43],n=u[e.charCodeAt(c++)-43],i=u[e.charCodeAt(c++)-43],s=u[e.charCodeAt(c++)-43],o[l++]=a<<2|n>>4,64!==i&&(o[l++]=(15&n)<<4|i>>2,64!==s&&(o[l++]=(3&i)<<6|s));return t?l-r:o.subarray(0,l)},i.binary.base58.encode=function(e,t){return i.binary.baseN.encode(e,l,t)},i.binary.base58.decode=function(e,t){return i.binary.baseN.decode(e,l,t)},i.text={utf8:{},utf16:{}},i.text.utf8.encode=function(e,t,r){e=i.encodeUtf8(e);var a=t;a||(a=new Uint8Array(e.length));for(var n=r=r||0,s=0;s<e.length;++s)a[n++]=e.charCodeAt(s);return t?n-r:a},i.text.utf8.decode=function(e){return i.decodeUtf8(String.fromCharCode.apply(null,e))},i.text.utf16.encode=function(e,t,r){var a=t;a||(a=new Uint8Array(2*e.length));for(var n=new Uint16Array(a.buffer),i=r=r||0,s=r,o=0;o<e.length;++o)n[s++]=e.charCodeAt(o),i+=2;return t?i-r:a},i.text.utf16.decode=function(e){return String.fromCharCode.apply(null,new Uint16Array(e.buffer))},i.deflate=function(e,t,r){if(t=i.decode64(e.deflate(i.encode64(t)).rval),r){var a=2;32&t.charCodeAt(1)&&(a=6),t=t.substring(a,t.length-4)}return t},i.inflate=function(e,t,r){var a=e.inflate(i.encode64(t)).rval;return null===a?null:i.decode64(a)};var p=function(e,t,r){if(!e)throw new Error("WebStorage not available.");var a;if(null===r?a=e.removeItem(t):(r=i.encode64(JSON.stringify(r)),a=e.setItem(t,r)),void 0!==a&&!0!==a.rval){var n=new Error(a.error.message);throw n.id=a.error.id,n.name=a.error.name,n}},f=function(e,t){if(!e)throw new Error("WebStorage not available.");var r=e.getItem(t);if(e.init)if(null===r.rval){if(r.error){var a=new Error(r.error.message);throw a.id=r.error.id,a.name=r.error.name,a}r=null}else r=r.rval;return null!==r&&(r=JSON.parse(i.decode64(r))),r},h=function(e,t,r,a){var n=f(e,t);null===n&&(n={}),n[r]=a,p(e,t,n)},d=function(e,t,r){var a=f(e,t);return null!==a&&(a=r in a?a[r]:null),a},y=function(e,t,r){var a=f(e,t);if(null!==a&&r in a){delete a[r];var n=!0;for(var i in a){n=!1;break}n&&(a=null),p(e,t,a)}},g=function(e,t){p(e,t,null)},v=function(e,t,r){var a,n=null;void 0===r&&(r=["web","flash"]);var i=!1,s=null;for(var o in r){a=r[o];try{if("flash"===a||"both"===a){if(null===t[0])throw new Error("Flash local storage not available.");n=e.apply(this,t),i="flash"===a}"web"!==a&&"both"!==a||(t[0]=localStorage,n=e.apply(this,t),i=!0)}catch(e){s=e}if(i)break}if(!i)throw s;return n};i.setItem=function(e,t,r,a,n){v(h,arguments,n)},i.getItem=function(e,t,r,a){return v(d,arguments,a)},i.removeItem=function(e,t,r,a){v(y,arguments,a)},i.clearItems=function(e,t,r){v(g,arguments,r)},i.isEmpty=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},i.format=function(e){for(var t,r,a=/%./g,n=0,i=[],s=0;t=a.exec(e);){(r=e.substring(s,a.lastIndex-2)).length>0&&i.push(r),s=a.lastIndex;var o=t[0][1];switch(o){case"s":case"o":n<arguments.length?i.push(arguments[1+n++]):i.push("<?>");break;case"%":i.push("%");break;default:i.push("<%"+o+"?>")}}return i.push(e.substring(s)),i.join("")},i.formatNumber=function(e,t,r,a){var n=e,i=isNaN(t=Math.abs(t))?2:t,s=void 0===r?",":r,o=void 0===a?".":a,c=n<0?"-":"",u=parseInt(n=Math.abs(+n||0).toFixed(i),10)+"",l=u.length>3?u.length%3:0;return c+(l?u.substr(0,l)+o:"")+u.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+o)+(i?s+Math.abs(n-u).toFixed(i).slice(2):"")},i.formatSize=function(e){return e=e>=1073741824?i.formatNumber(e/1073741824,2,".","")+" GiB":e>=1048576?i.formatNumber(e/1048576,2,".","")+" MiB":e>=1024?i.formatNumber(e/1024,0)+" KiB":i.formatNumber(e,0)+" bytes"},i.bytesFromIP=function(e){return-1!==e.indexOf(".")?i.bytesFromIPv4(e):-1!==e.indexOf(":")?i.bytesFromIPv6(e):null},i.bytesFromIPv4=function(e){if(4!==(e=e.split(".")).length)return null;for(var t=i.createBuffer(),r=0;r<e.length;++r){var a=parseInt(e[r],10);if(isNaN(a))return null;t.putByte(a)}return t.getBytes()},i.bytesFromIPv6=function(e){for(var t=0,r=2*(8-(e=e.split(":").filter((function(e){return 0===e.length&&++t,!0}))).length+t),a=i.createBuffer(),n=0;n<8;++n)if(e[n]&&0!==e[n].length){var s=i.hexToBytes(e[n]);s.length<2&&a.putByte(0),a.putBytes(s)}else a.fillWithByte(0,r),r=0;return a.getBytes()},i.bytesToIP=function(e){return 4===e.length?i.bytesToIPv4(e):16===e.length?i.bytesToIPv6(e):null},i.bytesToIPv4=function(e){if(4!==e.length)return null;for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t.join(".")},i.bytesToIPv6=function(e){if(16!==e.length)return null;for(var t=[],r=[],a=0,n=0;n<e.length;n+=2){for(var s=i.bytesToHex(e[n]+e[n+1]);"0"===s[0]&&"0"!==s;)s=s.substr(1);if("0"===s){var o=r[r.length-1],c=t.length;o&&c===o.end+1?(o.end=c,o.end-o.start>r[a].end-r[a].start&&(a=r.length-1)):r.push({start:c,end:c})}t.push(s)}if(r.length>0){var u=r[a];u.end-u.start>0&&(t.splice(u.start,u.end-u.start+1,""),0===u.start&&t.unshift(""),7===u.end&&t.push(""))}return t.join(":")},i.estimateCores=function(e,t){if("function"==typeof e&&(t=e,e={}),e=e||{},"cores"in i&&!e.update)return t(null,i.cores);if("undefined"!=typeof navigator&&"hardwareConcurrency"in navigator&&navigator.hardwareConcurrency>0)return i.cores=navigator.hardwareConcurrency,t(null,i.cores);if("undefined"==typeof Worker)return i.cores=1,t(null,i.cores);if("undefined"==typeof Blob)return i.cores=2,t(null,i.cores);var r=URL.createObjectURL(new Blob(["(",function(){self.addEventListener("message",(function(e){for(var t=Date.now(),r=t+4;Date.now()<r;);self.postMessage({st:t,et:r})}))}.toString(),")()"],{type:"application/javascript"}));!function e(a,n,s){if(0===n){var o=Math.floor(a.reduce((function(e,t){return e+t}),0)/a.length);return i.cores=Math.max(1,o),URL.revokeObjectURL(r),t(null,i.cores)}!function(e,t){for(var a=[],n=[],i=0;i<e;++i){var s=new Worker(r);s.addEventListener("message",(function(r){if(n.push(r.data),n.length===e){for(var i=0;i<e;++i)a[i].terminate();t(null,n)}})),a.push(s)}for(i=0;i<e;++i)a[i].postMessage(i)}(s,(function(t,r){a.push(function(e,t){for(var r=[],a=0;a<e;++a)for(var n=t[a],i=r[a]=[],s=0;s<e;++s)if(a!==s){var o=t[s];(n.st>o.st&&n.st<o.et||o.st>n.st&&o.st<n.et)&&i.push(s)}return r.reduce((function(e,t){return Math.max(e,t.length)}),0)}(s,r)),e(a,n-1,s)}))}([],5,16)}}).call(this,r(34))},function(e,t,r){var a=r(0);r(5),r(23),r(24),r(1),a.random&&a.random.getBytes?e.exports=a.random:function(t){var r={},n=new Array(4),i=a.util.createBuffer();function s(){var e=a.prng.create(r);return e.getBytes=function(t,r){return e.generate(t,r)},e.getBytesSync=function(t){return e.generate(t)},e}r.formatKey=function(e){var t=a.util.createBuffer(e);return(e=new Array(4))[0]=t.getInt32(),e[1]=t.getInt32(),e[2]=t.getInt32(),e[3]=t.getInt32(),a.aes._expandKey(e,!1)},r.formatSeed=function(e){var t=a.util.createBuffer(e);return(e=new Array(4))[0]=t.getInt32(),e[1]=t.getInt32(),e[2]=t.getInt32(),e[3]=t.getInt32(),e},r.cipher=function(e,t){return a.aes._updateBlock(e,t,n,!1),i.putInt32(n[0]),i.putInt32(n[1]),i.putInt32(n[2]),i.putInt32(n[3]),i.getBytes()},r.increment=function(e){return++e[3],e},r.md=a.md.sha256;var o=s(),c=null,u=a.util.globalScope,l=u.crypto||u.msCrypto;if(l&&l.getRandomValues&&(c=function(e){return l.getRandomValues(e)}),a.options.usePureJavaScript||!a.util.isNodejs&&!c){if("undefined"==typeof window||window.document,o.collectInt(+new Date,32),"undefined"!=typeof navigator){var p="";for(var f in navigator)try{"string"==typeof navigator[f]&&(p+=navigator[f])}catch(e){}o.collect(p),p=null}t&&(t().mousemove((function(e){o.collectInt(e.clientX,16),o.collectInt(e.clientY,16)})),t().keypress((function(e){o.collectInt(e.charCode,8)})))}if(a.random)for(var f in o)a.random[f]=o[f];else a.random=o;a.random.createInstance=s,e.exports=a.random}("undefined"!=typeof jQuery?jQuery:null)},function(e,t,r){var a=r(0);r(1),r(6);var n=e.exports=a.asn1=a.asn1||{};function i(e,t,r){if(r>t){var a=new Error("Too few bytes to parse DER.");throw a.available=e.length(),a.remaining=t,a.requested=r,a}}n.Class={UNIVERSAL:0,APPLICATION:64,CONTEXT_SPECIFIC:128,PRIVATE:192},n.Type={NONE:0,BOOLEAN:1,INTEGER:2,BITSTRING:3,OCTETSTRING:4,NULL:5,OID:6,ODESC:7,EXTERNAL:8,REAL:9,ENUMERATED:10,EMBEDDED:11,UTF8:12,ROID:13,SEQUENCE:16,SET:17,PRINTABLESTRING:19,IA5STRING:22,UTCTIME:23,GENERALIZEDTIME:24,BMPSTRING:30},n.create=function(e,t,r,i,s){if(a.util.isArray(i)){for(var o=[],c=0;c<i.length;++c)void 0!==i[c]&&o.push(i[c]);i=o}var u={tagClass:e,type:t,constructed:r,composed:r||a.util.isArray(i),value:i};return s&&"bitStringContents"in s&&(u.bitStringContents=s.bitStringContents,u.original=n.copy(u)),u},n.copy=function(e,t){var r;if(a.util.isArray(e)){r=[];for(var i=0;i<e.length;++i)r.push(n.copy(e[i],t));return r}return"string"==typeof e?e:(r={tagClass:e.tagClass,type:e.type,constructed:e.constructed,composed:e.composed,value:n.copy(e.value,t)},t&&!t.excludeBitStringContents&&(r.bitStringContents=e.bitStringContents),r)},n.equals=function(e,t,r){if(a.util.isArray(e)){if(!a.util.isArray(t))return!1;if(e.length!==t.length)return!1;for(var i=0;i<e.length;++i)if(!n.equals(e[i],t[i]))return!1;return!0}if(typeof e!=typeof t)return!1;if("string"==typeof e)return e===t;var s=e.tagClass===t.tagClass&&e.type===t.type&&e.constructed===t.constructed&&e.composed===t.composed&&n.equals(e.value,t.value);return r&&r.includeBitStringContents&&(s=s&&e.bitStringContents===t.bitStringContents),s},n.getBerValueLength=function(e){var t=e.getByte();if(128!==t)return 128&t?e.getInt((127&t)<<3):t};n.fromDer=function(e,t){void 0===t&&(t={strict:!0,parseAllBytes:!0,decodeBitStrings:!0}),"boolean"==typeof t&&(t={strict:t,parseAllBytes:!0,decodeBitStrings:!0}),"strict"in t||(t.strict=!0),"parseAllBytes"in t||(t.parseAllBytes=!0),"decodeBitStrings"in t||(t.decodeBitStrings=!0),"string"==typeof e&&(e=a.util.createBuffer(e));var r=e.length(),s=function e(t,r,a,s){var o;i(t,r,2);var c=t.getByte();r--;var u=192&c,l=31&c;o=t.length();var p,f,h=function(e,t){var r=e.getByte();if(t--,128!==r){var a;if(128&r){var n=127&r;i(e,t,n),a=e.getInt(n<<3)}else a=r;if(a<0)throw new Error("Negative length: "+a);return a}}(t,r);if(r-=o-t.length(),void 0!==h&&h>r){if(s.strict){var d=new Error("Too few bytes to read ASN.1 value.");throw d.available=t.length(),d.remaining=r,d.requested=h,d}h=r}var y=32==(32&c);if(y)if(p=[],void 0===h)for(;;){if(i(t,r,2),t.bytes(2)===String.fromCharCode(0,0)){t.getBytes(2),r-=2;break}o=t.length(),p.push(e(t,r,a+1,s)),r-=o-t.length()}else for(;h>0;)o=t.length(),p.push(e(t,h,a+1,s)),r-=o-t.length(),h-=o-t.length();void 0===p&&u===n.Class.UNIVERSAL&&l===n.Type.BITSTRING&&(f=t.bytes(h));if(void 0===p&&s.decodeBitStrings&&u===n.Class.UNIVERSAL&&l===n.Type.BITSTRING&&h>1){var g=t.read,v=r,m=0;if(l===n.Type.BITSTRING&&(i(t,r,1),m=t.getByte(),r--),0===m)try{o=t.length();var C=e(t,r,a+1,{strict:!0,decodeBitStrings:!0}),E=o-t.length();r-=E,l==n.Type.BITSTRING&&E++;var S=C.tagClass;E!==h||S!==n.Class.UNIVERSAL&&S!==n.Class.CONTEXT_SPECIFIC||(p=[C])}catch(e){}void 0===p&&(t.read=g,r=v)}if(void 0===p){if(void 0===h){if(s.strict)throw new Error("Non-constructed ASN.1 object of indefinite length.");h=r}if(l===n.Type.BMPSTRING)for(p="";h>0;h-=2)i(t,r,2),p+=String.fromCharCode(t.getInt16()),r-=2;else p=t.getBytes(h),r-=h}var T=void 0===f?null:{bitStringContents:f};return n.create(u,l,y,p,T)}(e,e.length(),0,t);if(t.parseAllBytes&&0!==e.length()){var o=new Error("Unparsed DER bytes remain after ASN.1 parsing.");throw o.byteCount=r,o.remaining=e.length(),o}return s},n.toDer=function(e){var t=a.util.createBuffer(),r=e.tagClass|e.type,i=a.util.createBuffer(),s=!1;if("bitStringContents"in e&&(s=!0,e.original&&(s=n.equals(e,e.original))),s)i.putBytes(e.bitStringContents);else if(e.composed){e.constructed?r|=32:i.putByte(0);for(var o=0;o<e.value.length;++o)void 0!==e.value[o]&&i.putBuffer(n.toDer(e.value[o]))}else if(e.type===n.Type.BMPSTRING)for(o=0;o<e.value.length;++o)i.putInt16(e.value.charCodeAt(o));else e.type===n.Type.INTEGER&&e.value.length>1&&(0===e.value.charCodeAt(0)&&0==(128&e.value.charCodeAt(1))||255===e.value.charCodeAt(0)&&128==(128&e.value.charCodeAt(1)))?i.putBytes(e.value.substr(1)):i.putBytes(e.value);if(t.putByte(r),i.length()<=127)t.putByte(127&i.length());else{var c=i.length(),u="";do{u+=String.fromCharCode(255&c),c>>>=8}while(c>0);t.putByte(128|u.length);for(o=u.length-1;o>=0;--o)t.putByte(u.charCodeAt(o))}return t.putBuffer(i),t},n.oidToDer=function(e){var t,r,n,i,s=e.split("."),o=a.util.createBuffer();o.putByte(40*parseInt(s[0],10)+parseInt(s[1],10));for(var c=2;c<s.length;++c){t=!0,r=[],n=parseInt(s[c],10);do{i=127&n,n>>>=7,t||(i|=128),r.push(i),t=!1}while(n>0);for(var u=r.length-1;u>=0;--u)o.putByte(r[u])}return o},n.derToOid=function(e){var t;"string"==typeof e&&(e=a.util.createBuffer(e));var r=e.getByte();t=Math.floor(r/40)+"."+r%40;for(var n=0;e.length()>0;)n<<=7,128&(r=e.getByte())?n+=127&r:(t+="."+(n+r),n=0);return t},n.utcTimeToDate=function(e){var t=new Date,r=parseInt(e.substr(0,2),10);r=r>=50?1900+r:2e3+r;var a=parseInt(e.substr(2,2),10)-1,n=parseInt(e.substr(4,2),10),i=parseInt(e.substr(6,2),10),s=parseInt(e.substr(8,2),10),o=0;if(e.length>11){var c=e.charAt(10),u=10;"+"!==c&&"-"!==c&&(o=parseInt(e.substr(10,2),10),u+=2)}if(t.setUTCFullYear(r,a,n),t.setUTCHours(i,s,o,0),u&&("+"===(c=e.charAt(u))||"-"===c)){var l=60*parseInt(e.substr(u+1,2),10)+parseInt(e.substr(u+4,2),10);l*=6e4,"+"===c?t.setTime(+t-l):t.setTime(+t+l)}return t},n.generalizedTimeToDate=function(e){var t=new Date,r=parseInt(e.substr(0,4),10),a=parseInt(e.substr(4,2),10)-1,n=parseInt(e.substr(6,2),10),i=parseInt(e.substr(8,2),10),s=parseInt(e.substr(10,2),10),o=parseInt(e.substr(12,2),10),c=0,u=0,l=!1;"Z"===e.charAt(e.length-1)&&(l=!0);var p=e.length-5,f=e.charAt(p);"+"!==f&&"-"!==f||(u=60*parseInt(e.substr(p+1,2),10)+parseInt(e.substr(p+4,2),10),u*=6e4,"+"===f&&(u*=-1),l=!0);return"."===e.charAt(14)&&(c=1e3*parseFloat(e.substr(14),10)),l?(t.setUTCFullYear(r,a,n),t.setUTCHours(i,s,o,c),t.setTime(+t+u)):(t.setFullYear(r,a,n),t.setHours(i,s,o,c)),t},n.dateToUtcTime=function(e){if("string"==typeof e)return e;var t="",r=[];r.push((""+e.getUTCFullYear()).substr(2)),r.push(""+(e.getUTCMonth()+1)),r.push(""+e.getUTCDate()),r.push(""+e.getUTCHours()),r.push(""+e.getUTCMinutes()),r.push(""+e.getUTCSeconds());for(var a=0;a<r.length;++a)r[a].length<2&&(t+="0"),t+=r[a];return t+="Z"},n.dateToGeneralizedTime=function(e){if("string"==typeof e)return e;var t="",r=[];r.push(""+e.getUTCFullYear()),r.push(""+(e.getUTCMonth()+1)),r.push(""+e.getUTCDate()),r.push(""+e.getUTCHours()),r.push(""+e.getUTCMinutes()),r.push(""+e.getUTCSeconds());for(var a=0;a<r.length;++a)r[a].length<2&&(t+="0"),t+=r[a];return t+="Z"},n.integerToDer=function(e){var t=a.util.createBuffer();if(e>=-128&&e<128)return t.putSignedInt(e,8);if(e>=-32768&&e<32768)return t.putSignedInt(e,16);if(e>=-8388608&&e<8388608)return t.putSignedInt(e,24);if(e>=-2147483648&&e<2147483648)return t.putSignedInt(e,32);var r=new Error("Integer too large; max is 32-bits.");throw r.integer=e,r},n.derToInteger=function(e){"string"==typeof e&&(e=a.util.createBuffer(e));var t=8*e.length();if(t>32)throw new Error("Integer too large; max is 32-bits.");return e.getSignedInt(t)},n.validate=function(e,t,r,i){var s=!1;if(e.tagClass!==t.tagClass&&void 0!==t.tagClass||e.type!==t.type&&void 0!==t.type)i&&(e.tagClass!==t.tagClass&&i.push("["+t.name+'] Expected tag class "'+t.tagClass+'", got "'+e.tagClass+'"'),e.type!==t.type&&i.push("["+t.name+'] Expected type "'+t.type+'", got "'+e.type+'"'));else if(e.constructed===t.constructed||void 0===t.constructed){if(s=!0,t.value&&a.util.isArray(t.value))for(var o=0,c=0;s&&c<t.value.length;++c)s=t.value[c].optional||!1,e.value[o]&&((s=n.validate(e.value[o],t.value[c],r,i))?++o:t.value[c].optional&&(s=!0)),!s&&i&&i.push("["+t.name+'] Tag class "'+t.tagClass+'", type "'+t.type+'" expected value length "'+t.value.length+'", got "'+e.value.length+'"');if(s&&r)if(t.capture&&(r[t.capture]=e.value),t.captureAsn1&&(r[t.captureAsn1]=e),t.captureBitStringContents&&"bitStringContents"in e&&(r[t.captureBitStringContents]=e.bitStringContents),t.captureBitStringValue&&"bitStringContents"in e)if(e.bitStringContents.length<2)r[t.captureBitStringValue]="";else{if(0!==e.bitStringContents.charCodeAt(0))throw new Error("captureBitStringValue only supported for zero unused bits");r[t.captureBitStringValue]=e.bitStringContents.slice(1)}}else i&&i.push("["+t.name+'] Expected constructed "'+t.constructed+'", got "'+e.constructed+'"');return s};var s=/[^\\u0000-\\u00ff]/;n.prettyPrint=function(e,t,r){var i="";r=r||2,(t=t||0)>0&&(i+="\n");for(var o="",c=0;c<t*r;++c)o+=" ";switch(i+=o+"Tag: ",e.tagClass){case n.Class.UNIVERSAL:i+="Universal:";break;case n.Class.APPLICATION:i+="Application:";break;case n.Class.CONTEXT_SPECIFIC:i+="Context-Specific:";break;case n.Class.PRIVATE:i+="Private:"}if(e.tagClass===n.Class.UNIVERSAL)switch(i+=e.type,e.type){case n.Type.NONE:i+=" (None)";break;case n.Type.BOOLEAN:i+=" (Boolean)";break;case n.Type.INTEGER:i+=" (Integer)";break;case n.Type.BITSTRING:i+=" (Bit string)";break;case n.Type.OCTETSTRING:i+=" (Octet string)";break;case n.Type.NULL:i+=" (Null)";break;case n.Type.OID:i+=" (Object Identifier)";break;case n.Type.ODESC:i+=" (Object Descriptor)";break;case n.Type.EXTERNAL:i+=" (External or Instance of)";break;case n.Type.REAL:i+=" (Real)";break;case n.Type.ENUMERATED:i+=" (Enumerated)";break;case n.Type.EMBEDDED:i+=" (Embedded PDV)";break;case n.Type.UTF8:i+=" (UTF8)";break;case n.Type.ROID:i+=" (Relative Object Identifier)";break;case n.Type.SEQUENCE:i+=" (Sequence)";break;case n.Type.SET:i+=" (Set)";break;case n.Type.PRINTABLESTRING:i+=" (Printable String)";break;case n.Type.IA5String:i+=" (IA5String (ASCII))";break;case n.Type.UTCTIME:i+=" (UTC time)";break;case n.Type.GENERALIZEDTIME:i+=" (Generalized time)";break;case n.Type.BMPSTRING:i+=" (BMP String)"}else i+=e.type;if(i+="\n",i+=o+"Constructed: "+e.constructed+"\n",e.composed){var u=0,l="";for(c=0;c<e.value.length;++c)void 0!==e.value[c]&&(u+=1,l+=n.prettyPrint(e.value[c],t+1,r),c+1<e.value.length&&(l+=","));i+=o+"Sub values: "+u+l}else{if(i+=o+"Value: ",e.type===n.Type.OID){var p=n.derToOid(e.value);i+=p,a.pki&&a.pki.oids&&p in a.pki.oids&&(i+=" ("+a.pki.oids[p]+") ")}if(e.type===n.Type.INTEGER)try{i+=n.derToInteger(e.value)}catch(t){i+="0x"+a.util.bytesToHex(e.value)}else if(e.type===n.Type.BITSTRING){if(e.value.length>1?i+="0x"+a.util.bytesToHex(e.value.slice(1)):i+="(none)",e.value.length>0){var f=e.value.charCodeAt(0);1==f?i+=" (1 unused bit shown)":f>1&&(i+=" ("+f+" unused bits shown)")}}else if(e.type===n.Type.OCTETSTRING)s.test(e.value)||(i+="("+e.value+") "),i+="0x"+a.util.bytesToHex(e.value);else if(e.type===n.Type.UTF8)try{i+=a.util.decodeUtf8(e.value)}catch(t){if("URI malformed"!==t.message)throw t;i+="0x"+a.util.bytesToHex(e.value)+" (malformed UTF8)"}else e.type===n.Type.PRINTABLESTRING||e.type===n.Type.IA5String?i+=e.value:s.test(e.value)?i+="0x"+a.util.bytesToHex(e.value):0===e.value.length?i+="[null]":i+=e.value}return i}},function(e,t,r){var a=r(0);e.exports=a.md=a.md||{},a.md.algorithms=a.md.algorithms||{}},function(e,t,r){var a=r(0);function n(e,t){a.cipher.registerAlgorithm(e,(function(){return new a.aes.Algorithm(e,t)}))}r(13),r(19),r(1),e.exports=a.aes=a.aes||{},a.aes.startEncrypting=function(e,t,r,a){var n=d({key:e,output:r,decrypt:!1,mode:a});return n.start(t),n},a.aes.createEncryptionCipher=function(e,t){return d({key:e,output:null,decrypt:!1,mode:t})},a.aes.startDecrypting=function(e,t,r,a){var n=d({key:e,output:r,decrypt:!0,mode:a});return n.start(t),n},a.aes.createDecryptionCipher=function(e,t){return d({key:e,output:null,decrypt:!0,mode:t})},a.aes.Algorithm=function(e,t){l||p();var r=this;r.name=e,r.mode=new t({blockSize:16,cipher:{encrypt:function(e,t){return h(r._w,e,t,!1)},decrypt:function(e,t){return h(r._w,e,t,!0)}}}),r._init=!1},a.aes.Algorithm.prototype.initialize=function(e){if(!this._init){var t,r=e.key;if("string"!=typeof r||16!==r.length&&24!==r.length&&32!==r.length){if(a.util.isArray(r)&&(16===r.length||24===r.length||32===r.length)){t=r,r=a.util.createBuffer();for(var n=0;n<t.length;++n)r.putByte(t[n])}}else r=a.util.createBuffer(r);if(!a.util.isArray(r)){t=r,r=[];var i=t.length();if(16===i||24===i||32===i){i>>>=2;for(n=0;n<i;++n)r.push(t.getInt32())}}if(!a.util.isArray(r)||4!==r.length&&6!==r.length&&8!==r.length)throw new Error("Invalid key parameter.");var s=this.mode.name,o=-1!==["CFB","OFB","CTR","GCM"].indexOf(s);this._w=f(r,e.decrypt&&!o),this._init=!0}},a.aes._expandKey=function(e,t){return l||p(),f(e,t)},a.aes._updateBlock=h,n("AES-ECB",a.cipher.modes.ecb),n("AES-CBC",a.cipher.modes.cbc),n("AES-CFB",a.cipher.modes.cfb),n("AES-OFB",a.cipher.modes.ofb),n("AES-CTR",a.cipher.modes.ctr),n("AES-GCM",a.cipher.modes.gcm);var i,s,o,c,u,l=!1;function p(){l=!0,o=[0,1,2,4,8,16,32,64,128,27,54];for(var e=new Array(256),t=0;t<128;++t)e[t]=t<<1,e[t+128]=t+128<<1^283;i=new Array(256),s=new Array(256),c=new Array(4),u=new Array(4);for(t=0;t<4;++t)c[t]=new Array(256),u[t]=new Array(256);var r,a,n,p,f,h,d,y=0,g=0;for(t=0;t<256;++t){p=(p=g^g<<1^g<<2^g<<3^g<<4)>>8^255&p^99,i[y]=p,s[p]=y,h=(f=e[p])<<24^p<<16^p<<8^p^f,d=((r=e[y])^(a=e[r])^(n=e[a]))<<24^(y^n)<<16^(y^a^n)<<8^y^r^n;for(var v=0;v<4;++v)c[v][y]=h,u[v][p]=d,h=h<<24|h>>>8,d=d<<24|d>>>8;0===y?y=g=1:(y=r^e[e[e[r^n]]],g^=e[e[g]])}}function f(e,t){for(var r,a=e.slice(0),n=1,s=a.length,c=4*(s+6+1),l=s;l<c;++l)r=a[l-1],l%s==0?(r=i[r>>>16&255]<<24^i[r>>>8&255]<<16^i[255&r]<<8^i[r>>>24]^o[n]<<24,n++):s>6&&l%s==4&&(r=i[r>>>24]<<24^i[r>>>16&255]<<16^i[r>>>8&255]<<8^i[255&r]),a[l]=a[l-s]^r;if(t){for(var p,f=u[0],h=u[1],d=u[2],y=u[3],g=a.slice(0),v=(l=0,(c=a.length)-4);l<c;l+=4,v-=4)if(0===l||l===c-4)g[l]=a[v],g[l+1]=a[v+3],g[l+2]=a[v+2],g[l+3]=a[v+1];else for(var m=0;m<4;++m)p=a[v+m],g[l+(3&-m)]=f[i[p>>>24]]^h[i[p>>>16&255]]^d[i[p>>>8&255]]^y[i[255&p]];a=g}return a}function h(e,t,r,a){var n,o,l,p,f,h,d,y,g,v,m,C,E=e.length/4-1;a?(n=u[0],o=u[1],l=u[2],p=u[3],f=s):(n=c[0],o=c[1],l=c[2],p=c[3],f=i),h=t[0]^e[0],d=t[a?3:1]^e[1],y=t[2]^e[2],g=t[a?1:3]^e[3];for(var S=3,T=1;T<E;++T)v=n[h>>>24]^o[d>>>16&255]^l[y>>>8&255]^p[255&g]^e[++S],m=n[d>>>24]^o[y>>>16&255]^l[g>>>8&255]^p[255&h]^e[++S],C=n[y>>>24]^o[g>>>16&255]^l[h>>>8&255]^p[255&d]^e[++S],g=n[g>>>24]^o[h>>>16&255]^l[d>>>8&255]^p[255&y]^e[++S],h=v,d=m,y=C;r[0]=f[h>>>24]<<24^f[d>>>16&255]<<16^f[y>>>8&255]<<8^f[255&g]^e[++S],r[a?3:1]=f[d>>>24]<<24^f[y>>>16&255]<<16^f[g>>>8&255]<<8^f[255&h]^e[++S],r[2]=f[y>>>24]<<24^f[g>>>16&255]<<16^f[h>>>8&255]<<8^f[255&d]^e[++S],r[a?1:3]=f[g>>>24]<<24^f[h>>>16&255]<<16^f[d>>>8&255]<<8^f[255&y]^e[++S]}function d(e){var t,r="AES-"+((e=e||{}).mode||"CBC").toUpperCase(),n=(t=e.decrypt?a.cipher.createDecipher(r,e.key):a.cipher.createCipher(r,e.key)).start;return t.start=function(e,r){var i=null;r instanceof a.util.ByteBuffer&&(i=r,r={}),(r=r||{}).output=i,r.iv=e,n.call(t,r)},t}},function(e,t,r){var a=r(0);a.pki=a.pki||{};var n=e.exports=a.pki.oids=a.oids=a.oids||{};function i(e,t){n[e]=t,n[t]=e}function s(e,t){n[e]=t}i("1.2.840.113549.1.1.1","rsaEncryption"),i("1.2.840.113549.1.1.4","md5WithRSAEncryption"),i("1.2.840.113549.1.1.5","sha1WithRSAEncryption"),i("1.2.840.113549.1.1.7","RSAES-OAEP"),i("1.2.840.113549.1.1.8","mgf1"),i("1.2.840.113549.1.1.9","pSpecified"),i("1.2.840.113549.1.1.10","RSASSA-PSS"),i("1.2.840.113549.1.1.11","sha256WithRSAEncryption"),i("1.2.840.113549.1.1.12","sha384WithRSAEncryption"),i("1.2.840.113549.1.1.13","sha512WithRSAEncryption"),i("1.3.101.112","EdDSA25519"),i("1.2.840.10040.4.3","dsa-with-sha1"),i("1.3.14.3.2.7","desCBC"),i("1.3.14.3.2.26","sha1"),i("1.3.14.3.2.29","sha1WithRSASignature"),i("2.16.840.1.101.3.4.2.1","sha256"),i("2.16.840.1.101.3.4.2.2","sha384"),i("2.16.840.1.101.3.4.2.3","sha512"),i("2.16.840.1.101.3.4.2.4","sha224"),i("2.16.840.1.101.3.4.2.5","sha512-224"),i("2.16.840.1.101.3.4.2.6","sha512-256"),i("1.2.840.113549.2.2","md2"),i("1.2.840.113549.2.5","md5"),i("1.2.840.113549.1.7.1","data"),i("1.2.840.113549.1.7.2","signedData"),i("1.2.840.113549.1.7.3","envelopedData"),i("1.2.840.113549.1.7.4","signedAndEnvelopedData"),i("1.2.840.113549.1.7.5","digestedData"),i("1.2.840.113549.1.7.6","encryptedData"),i("1.2.840.113549.1.9.1","emailAddress"),i("1.2.840.113549.1.9.2","unstructuredName"),i("1.2.840.113549.1.9.3","contentType"),i("1.2.840.113549.1.9.4","messageDigest"),i("1.2.840.113549.1.9.5","signingTime"),i("1.2.840.113549.1.9.6","counterSignature"),i("1.2.840.113549.1.9.7","challengePassword"),i("1.2.840.113549.1.9.8","unstructuredAddress"),i("1.2.840.113549.1.9.14","extensionRequest"),i("1.2.840.113549.1.9.20","friendlyName"),i("1.2.840.113549.1.9.21","localKeyId"),i("1.2.840.113549.1.9.22.1","x509Certificate"),i("1.2.840.113549.1.12.10.1.1","keyBag"),i("1.2.840.113549.1.12.10.1.2","pkcs8ShroudedKeyBag"),i("1.2.840.113549.1.12.10.1.3","certBag"),i("1.2.840.113549.1.12.10.1.4","crlBag"),i("1.2.840.113549.1.12.10.1.5","secretBag"),i("1.2.840.113549.1.12.10.1.6","safeContentsBag"),i("1.2.840.113549.1.5.13","pkcs5PBES2"),i("1.2.840.113549.1.5.12","pkcs5PBKDF2"),i("1.2.840.113549.1.12.1.1","pbeWithSHAAnd128BitRC4"),i("1.2.840.113549.1.12.1.2","pbeWithSHAAnd40BitRC4"),i("1.2.840.113549.1.12.1.3","pbeWithSHAAnd3-KeyTripleDES-CBC"),i("1.2.840.113549.1.12.1.4","pbeWithSHAAnd2-KeyTripleDES-CBC"),i("1.2.840.113549.1.12.1.5","pbeWithSHAAnd128BitRC2-CBC"),i("1.2.840.113549.1.12.1.6","pbewithSHAAnd40BitRC2-CBC"),i("1.2.840.113549.2.7","hmacWithSHA1"),i("1.2.840.113549.2.8","hmacWithSHA224"),i("1.2.840.113549.2.9","hmacWithSHA256"),i("1.2.840.113549.2.10","hmacWithSHA384"),i("1.2.840.113549.2.11","hmacWithSHA512"),i("1.2.840.113549.3.7","des-EDE3-CBC"),i("2.16.840.1.101.3.4.1.2","aes128-CBC"),i("2.16.840.1.101.3.4.1.22","aes192-CBC"),i("2.16.840.1.101.3.4.1.42","aes256-CBC"),i("2.5.4.3","commonName"),i("2.5.4.4","surname"),i("2.5.4.5","serialNumber"),i("2.5.4.6","countryName"),i("2.5.4.7","localityName"),i("2.5.4.8","stateOrProvinceName"),i("2.5.4.9","streetAddress"),i("2.5.4.10","organizationName"),i("2.5.4.11","organizationalUnitName"),i("2.5.4.12","title"),i("2.5.4.13","description"),i("2.5.4.15","businessCategory"),i("2.5.4.17","postalCode"),i("2.5.4.42","givenName"),i("1.3.6.1.4.1.311.60.2.1.2","jurisdictionOfIncorporationStateOrProvinceName"),i("1.3.6.1.4.1.311.60.2.1.3","jurisdictionOfIncorporationCountryName"),i("2.16.840.1.113730.1.1","nsCertType"),i("2.16.840.1.113730.1.13","nsComment"),s("2.5.29.1","authorityKeyIdentifier"),s("2.5.29.2","keyAttributes"),s("2.5.29.3","certificatePolicies"),s("2.5.29.4","keyUsageRestriction"),s("2.5.29.5","policyMapping"),s("2.5.29.6","subtreesConstraint"),s("2.5.29.7","subjectAltName"),s("2.5.29.8","issuerAltName"),s("2.5.29.9","subjectDirectoryAttributes"),s("2.5.29.10","basicConstraints"),s("2.5.29.11","nameConstraints"),s("2.5.29.12","policyConstraints"),s("2.5.29.13","basicConstraints"),i("2.5.29.14","subjectKeyIdentifier"),i("2.5.29.15","keyUsage"),s("2.5.29.16","privateKeyUsagePeriod"),i("2.5.29.17","subjectAltName"),i("2.5.29.18","issuerAltName"),i("2.5.29.19","basicConstraints"),s("2.5.29.20","cRLNumber"),s("2.5.29.21","cRLReason"),s("2.5.29.22","expirationDate"),s("2.5.29.23","instructionCode"),s("2.5.29.24","invalidityDate"),s("2.5.29.25","cRLDistributionPoints"),s("2.5.29.26","issuingDistributionPoint"),s("2.5.29.27","deltaCRLIndicator"),s("2.5.29.28","issuingDistributionPoint"),s("2.5.29.29","certificateIssuer"),s("2.5.29.30","nameConstraints"),i("2.5.29.31","cRLDistributionPoints"),i("2.5.29.32","certificatePolicies"),s("2.5.29.33","policyMappings"),s("2.5.29.34","policyConstraints"),i("2.5.29.35","authorityKeyIdentifier"),s("2.5.29.36","policyConstraints"),i("2.5.29.37","extKeyUsage"),s("2.5.29.46","freshestCRL"),s("2.5.29.54","inhibitAnyPolicy"),i("1.3.6.1.4.1.11129.2.4.2","timestampList"),i("1.3.6.1.5.5.7.1.1","authorityInfoAccess"),i("1.3.6.1.5.5.7.3.1","serverAuth"),i("1.3.6.1.5.5.7.3.2","clientAuth"),i("1.3.6.1.5.5.7.3.3","codeSigning"),i("1.3.6.1.5.5.7.3.4","emailProtection"),i("1.3.6.1.5.5.7.3.8","timeStamping")},function(e,t,r){var a=r(0);r(1);var n=e.exports=a.pem=a.pem||{};function i(e){for(var t=e.name+": ",r=[],a=function(e,t){return" "+t},n=0;n<e.values.length;++n)r.push(e.values[n].replace(/^(\S+\r\n)/,a));t+=r.join(",")+"\r\n";var i=0,s=-1;for(n=0;n<t.length;++n,++i)if(i>65&&-1!==s){var o=t[s];","===o?(++s,t=t.substr(0,s)+"\r\n "+t.substr(s)):t=t.substr(0,s)+"\r\n"+o+t.substr(s+1),i=n-s-1,s=-1,++n}else" "!==t[n]&&"\t"!==t[n]&&","!==t[n]||(s=n);return t}function s(e){return e.replace(/^\s+/,"")}n.encode=function(e,t){t=t||{};var r,n="-----BEGIN "+e.type+"-----\r\n";if(e.procType&&(n+=i(r={name:"Proc-Type",values:[String(e.procType.version),e.procType.type]})),e.contentDomain&&(n+=i(r={name:"Content-Domain",values:[e.contentDomain]})),e.dekInfo&&(r={name:"DEK-Info",values:[e.dekInfo.algorithm]},e.dekInfo.parameters&&r.values.push(e.dekInfo.parameters),n+=i(r)),e.headers)for(var s=0;s<e.headers.length;++s)n+=i(e.headers[s]);return e.procType&&(n+="\r\n"),n+=a.util.encode64(e.body,t.maxline||64)+"\r\n",n+="-----END "+e.type+"-----\r\n"},n.decode=function(e){for(var t,r=[],n=/\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g,i=/([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/,o=/\r?\n/;t=n.exec(e);){var c=t[1];"NEW CERTIFICATE REQUEST"===c&&(c="CERTIFICATE REQUEST");var u={type:c,procType:null,contentDomain:null,dekInfo:null,headers:[],body:a.util.decode64(t[3])};if(r.push(u),t[2]){for(var l=t[2].split(o),p=0;t&&p<l.length;){for(var f=l[p].replace(/\s+$/,""),h=p+1;h<l.length;++h){var d=l[h];if(!/\s/.test(d[0]))break;f+=d,p=h}if(t=f.match(i)){for(var y={name:t[1],values:[]},g=t[2].split(","),v=0;v<g.length;++v)y.values.push(s(g[v]));if(u.procType)if(u.contentDomain||"Content-Domain"!==y.name)if(u.dekInfo||"DEK-Info"!==y.name)u.headers.push(y);else{if(0===y.values.length)throw new Error('Invalid PEM formatted message. The "DEK-Info" header must have at least one subfield.');u.dekInfo={algorithm:g[0],parameters:g[1]||null}}else u.contentDomain=g[0]||"";else{if("Proc-Type"!==y.name)throw new Error('Invalid PEM formatted message. The first encapsulated header must be "Proc-Type".');if(2!==y.values.length)throw new Error('Invalid PEM formatted message. The "Proc-Type" header must have two subfields.');u.procType={version:g[0],type:g[1]}}}++p}if("ENCRYPTED"===u.procType&&!u.dekInfo)throw new Error('Invalid PEM formatted message. The "DEK-Info" header must be present if "Proc-Type" is "ENCRYPTED".')}}if(0===r.length)throw new Error("Invalid PEM formatted message.");return r}},function(e,t,r){var a=r(0);r(4),r(1),(e.exports=a.hmac=a.hmac||{}).create=function(){var e=null,t=null,r=null,n=null,i={start:function(i,s){if(null!==i)if("string"==typeof i){if(!((i=i.toLowerCase())in a.md.algorithms))throw new Error('Unknown hash algorithm "'+i+'"');t=a.md.algorithms[i].create()}else t=i;if(null===s)s=e;else{if("string"==typeof s)s=a.util.createBuffer(s);else if(a.util.isArray(s)){var o=s;s=a.util.createBuffer();for(var c=0;c<o.length;++c)s.putByte(o[c])}var u=s.length();u>t.blockLength&&(t.start(),t.update(s.bytes()),s=t.digest()),r=a.util.createBuffer(),n=a.util.createBuffer(),u=s.length();for(c=0;c<u;++c){o=s.at(c);r.putByte(54^o),n.putByte(92^o)}if(u<t.blockLength)for(o=t.blockLength-u,c=0;c<o;++c)r.putByte(54),n.putByte(92);e=s,r=r.bytes(),n=n.bytes()}t.start(),t.update(r)},update:function(e){t.update(e)},getMac:function(){var e=t.digest().bytes();return t.start(),t.update(n),t.update(e),t.digest()}};return i.digest=i.getMac,i}},function(e,t,r){var a=r(0);r(4),r(1);var n=e.exports=a.sha1=a.sha1||{};a.md.sha1=a.md.algorithms.sha1=n,n.create=function(){s||(i=String.fromCharCode(128),i+=a.util.fillString(String.fromCharCode(0),64),s=!0);var e=null,t=a.util.createBuffer(),r=new Array(80),n={algorithm:"sha1",blockLength:64,digestLength:20,messageLength:0,fullMessageLength:null,messageLengthSize:8,start:function(){n.messageLength=0,n.fullMessageLength=n.messageLength64=[];for(var r=n.messageLengthSize/4,i=0;i<r;++i)n.fullMessageLength.push(0);return t=a.util.createBuffer(),e={h0:1732584193,h1:4023233417,h2:2562383102,h3:271733878,h4:3285377520},n}};return n.start(),n.update=function(i,s){"utf8"===s&&(i=a.util.encodeUtf8(i));var c=i.length;n.messageLength+=c,c=[c/4294967296>>>0,c>>>0];for(var u=n.fullMessageLength.length-1;u>=0;--u)n.fullMessageLength[u]+=c[1],c[1]=c[0]+(n.fullMessageLength[u]/4294967296>>>0),n.fullMessageLength[u]=n.fullMessageLength[u]>>>0,c[0]=c[1]/4294967296>>>0;return t.putBytes(i),o(e,r,t),(t.read>2048||0===t.length())&&t.compact(),n},n.digest=function(){var s=a.util.createBuffer();s.putBytes(t.bytes());var c,u=n.fullMessageLength[n.fullMessageLength.length-1]+n.messageLengthSize&n.blockLength-1;s.putBytes(i.substr(0,n.blockLength-u));for(var l=8*n.fullMessageLength[0],p=0;p<n.fullMessageLength.length-1;++p)l+=(c=8*n.fullMessageLength[p+1])/4294967296>>>0,s.putInt32(l>>>0),l=c>>>0;s.putInt32(l);var f={h0:e.h0,h1:e.h1,h2:e.h2,h3:e.h3,h4:e.h4};o(f,r,s);var h=a.util.createBuffer();return h.putInt32(f.h0),h.putInt32(f.h1),h.putInt32(f.h2),h.putInt32(f.h3),h.putInt32(f.h4),h},n};var i=null,s=!1;function o(e,t,r){for(var a,n,i,s,o,c,u,l=r.length();l>=64;){for(n=e.h0,i=e.h1,s=e.h2,o=e.h3,c=e.h4,u=0;u<16;++u)a=r.getInt32(),t[u]=a,a=(n<<5|n>>>27)+(o^i&(s^o))+c+1518500249+a,c=o,o=s,s=(i<<30|i>>>2)>>>0,i=n,n=a;for(;u<20;++u)a=(a=t[u-3]^t[u-8]^t[u-14]^t[u-16])<<1|a>>>31,t[u]=a,a=(n<<5|n>>>27)+(o^i&(s^o))+c+1518500249+a,c=o,o=s,s=(i<<30|i>>>2)>>>0,i=n,n=a;for(;u<32;++u)a=(a=t[u-3]^t[u-8]^t[u-14]^t[u-16])<<1|a>>>31,t[u]=a,a=(n<<5|n>>>27)+(i^s^o)+c+1859775393+a,c=o,o=s,s=(i<<30|i>>>2)>>>0,i=n,n=a;for(;u<40;++u)a=(a=t[u-6]^t[u-16]^t[u-28]^t[u-32])<<2|a>>>30,t[u]=a,a=(n<<5|n>>>27)+(i^s^o)+c+1859775393+a,c=o,o=s,s=(i<<30|i>>>2)>>>0,i=n,n=a;for(;u<60;++u)a=(a=t[u-6]^t[u-16]^t[u-28]^t[u-32])<<2|a>>>30,t[u]=a,a=(n<<5|n>>>27)+(i&s|o&(i^s))+c+2400959708+a,c=o,o=s,s=(i<<30|i>>>2)>>>0,i=n,n=a;for(;u<80;++u)a=(a=t[u-6]^t[u-16]^t[u-28]^t[u-32])<<2|a>>>30,t[u]=a,a=(n<<5|n>>>27)+(i^s^o)+c+3395469782+a,c=o,o=s,s=(i<<30|i>>>2)>>>0,i=n,n=a;e.h0=e.h0+n|0,e.h1=e.h1+i|0,e.h2=e.h2+s|0,e.h3=e.h3+o|0,e.h4=e.h4+c|0,l-=64}}},function(e,t,r){var a=r(0);function n(e,t){a.cipher.registerAlgorithm(e,(function(){return new a.des.Algorithm(e,t)}))}r(13),r(19),r(1),e.exports=a.des=a.des||{},a.des.startEncrypting=function(e,t,r,a){var n=d({key:e,output:r,decrypt:!1,mode:a||(null===t?"ECB":"CBC")});return n.start(t),n},a.des.createEncryptionCipher=function(e,t){return d({key:e,output:null,decrypt:!1,mode:t})},a.des.startDecrypting=function(e,t,r,a){var n=d({key:e,output:r,decrypt:!0,mode:a||(null===t?"ECB":"CBC")});return n.start(t),n},a.des.createDecryptionCipher=function(e,t){return d({key:e,output:null,decrypt:!0,mode:t})},a.des.Algorithm=function(e,t){var r=this;r.name=e,r.mode=new t({blockSize:8,cipher:{encrypt:function(e,t){return h(r._keys,e,t,!1)},decrypt:function(e,t){return h(r._keys,e,t,!0)}}}),r._init=!1},a.des.Algorithm.prototype.initialize=function(e){if(!this._init){var t=a.util.createBuffer(e.key);if(0===this.name.indexOf("3DES")&&24!==t.length())throw new Error("Invalid Triple-DES key size: "+8*t.length());this._keys=function(e){for(var t,r=[0,4,536870912,536870916,65536,65540,536936448,536936452,512,516,536871424,536871428,66048,66052,536936960,536936964],a=[0,1,1048576,1048577,67108864,67108865,68157440,68157441,256,257,1048832,1048833,67109120,67109121,68157696,68157697],n=[0,8,2048,2056,16777216,16777224,16779264,16779272,0,8,2048,2056,16777216,16777224,16779264,16779272],i=[0,2097152,134217728,136314880,8192,2105344,134225920,136323072,131072,2228224,134348800,136445952,139264,2236416,134356992,136454144],s=[0,262144,16,262160,0,262144,16,262160,4096,266240,4112,266256,4096,266240,4112,266256],o=[0,1024,32,1056,0,1024,32,1056,33554432,33555456,33554464,33555488,33554432,33555456,33554464,33555488],c=[0,268435456,524288,268959744,2,268435458,524290,268959746,0,268435456,524288,268959744,2,268435458,524290,268959746],u=[0,65536,2048,67584,536870912,536936448,536872960,536938496,131072,196608,133120,198656,537001984,537067520,537004032,537069568],l=[0,262144,0,262144,2,262146,2,262146,33554432,33816576,33554432,33816576,33554434,33816578,33554434,33816578],p=[0,268435456,8,268435464,0,268435456,8,268435464,1024,268436480,1032,268436488,1024,268436480,1032,268436488],f=[0,32,0,32,1048576,1048608,1048576,1048608,8192,8224,8192,8224,1056768,1056800,1056768,1056800],h=[0,16777216,512,16777728,2097152,18874368,2097664,18874880,67108864,83886080,67109376,83886592,69206016,85983232,69206528,85983744],d=[0,4096,134217728,134221824,524288,528384,134742016,134746112,16,4112,134217744,134221840,524304,528400,134742032,134746128],y=[0,4,256,260,0,4,256,260,1,5,257,261,1,5,257,261],g=e.length()>8?3:1,v=[],m=[0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0],C=0,E=0;E<g;E++){var S=e.getInt32(),T=e.getInt32();S^=(t=252645135&(S>>>4^T))<<4,S^=t=65535&((T^=t)>>>-16^S),S^=(t=858993459&(S>>>2^(T^=t<<-16)))<<2,S^=t=65535&((T^=t)>>>-16^S),S^=(t=1431655765&(S>>>1^(T^=t<<-16)))<<1,S^=t=16711935&((T^=t)>>>8^S),t=(S^=(t=1431655765&(S>>>1^(T^=t<<8)))<<1)<<8|(T^=t)>>>20&240,S=T<<24|T<<8&16711680|T>>>8&65280|T>>>24&240,T=t;for(var I=0;I<m.length;++I){m[I]?(S=S<<2|S>>>26,T=T<<2|T>>>26):(S=S<<1|S>>>27,T=T<<1|T>>>27);var A=r[(S&=-15)>>>28]|a[S>>>24&15]|n[S>>>20&15]|i[S>>>16&15]|s[S>>>12&15]|o[S>>>8&15]|c[S>>>4&15],B=u[(T&=-15)>>>28]|l[T>>>24&15]|p[T>>>20&15]|f[T>>>16&15]|h[T>>>12&15]|d[T>>>8&15]|y[T>>>4&15];t=65535&(B>>>16^A),v[C++]=A^t,v[C++]=B^t<<16}}return v}(t),this._init=!0}},n("DES-ECB",a.cipher.modes.ecb),n("DES-CBC",a.cipher.modes.cbc),n("DES-CFB",a.cipher.modes.cfb),n("DES-OFB",a.cipher.modes.ofb),n("DES-CTR",a.cipher.modes.ctr),n("3DES-ECB",a.cipher.modes.ecb),n("3DES-CBC",a.cipher.modes.cbc),n("3DES-CFB",a.cipher.modes.cfb),n("3DES-OFB",a.cipher.modes.ofb),n("3DES-CTR",a.cipher.modes.ctr);var i=[16843776,0,65536,16843780,16842756,66564,4,65536,1024,16843776,16843780,1024,16778244,16842756,16777216,4,1028,16778240,16778240,66560,66560,16842752,16842752,16778244,65540,16777220,16777220,65540,0,1028,66564,16777216,65536,16843780,4,16842752,16843776,16777216,16777216,1024,16842756,65536,66560,16777220,1024,4,16778244,66564,16843780,65540,16842752,16778244,16777220,1028,66564,16843776,1028,16778240,16778240,0,65540,66560,0,16842756],s=[-2146402272,-2147450880,32768,1081376,1048576,32,-2146435040,-2147450848,-2147483616,-2146402272,-2146402304,-2147483648,-2147450880,1048576,32,-2146435040,1081344,1048608,-2147450848,0,-2147483648,32768,1081376,-2146435072,1048608,-2147483616,0,1081344,32800,-2146402304,-2146435072,32800,0,1081376,-2146435040,1048576,-2147450848,-2146435072,-2146402304,32768,-2146435072,-2147450880,32,-2146402272,1081376,32,32768,-2147483648,32800,-2146402304,1048576,-2147483616,1048608,-2147450848,-2147483616,1048608,1081344,0,-2147450880,32800,-2147483648,-2146435040,-2146402272,1081344],o=[520,134349312,0,134348808,134218240,0,131592,134218240,131080,134217736,134217736,131072,134349320,131080,134348800,520,134217728,8,134349312,512,131584,134348800,134348808,131592,134218248,131584,131072,134218248,8,134349320,512,134217728,134349312,134217728,131080,520,131072,134349312,134218240,0,512,131080,134349320,134218240,134217736,512,0,134348808,134218248,131072,134217728,134349320,8,131592,131584,134217736,134348800,134218248,520,134348800,131592,8,134348808,131584],c=[8396801,8321,8321,128,8396928,8388737,8388609,8193,0,8396800,8396800,8396929,129,0,8388736,8388609,1,8192,8388608,8396801,128,8388608,8193,8320,8388737,1,8320,8388736,8192,8396928,8396929,129,8388736,8388609,8396800,8396929,129,0,0,8396800,8320,8388736,8388737,1,8396801,8321,8321,128,8396929,129,1,8192,8388609,8193,8396928,8388737,8193,8320,8388608,8396801,128,8388608,8192,8396928],u=[256,34078976,34078720,1107296512,524288,256,1073741824,34078720,1074266368,524288,33554688,1074266368,1107296512,1107820544,524544,1073741824,33554432,1074266112,1074266112,0,1073742080,1107820800,1107820800,33554688,1107820544,1073742080,0,1107296256,34078976,33554432,1107296256,524544,524288,1107296512,256,33554432,1073741824,34078720,1107296512,1074266368,33554688,1073741824,1107820544,34078976,1074266368,256,33554432,1107820544,1107820800,524544,1107296256,1107820800,34078720,0,1074266112,1107296256,524544,33554688,1073742080,524288,0,1074266112,34078976,1073742080],l=[536870928,541065216,16384,541081616,541065216,16,541081616,4194304,536887296,4210704,4194304,536870928,4194320,536887296,536870912,16400,0,4194320,536887312,16384,4210688,536887312,16,541065232,541065232,0,4210704,541081600,16400,4210688,541081600,536870912,536887296,16,541065232,4210688,541081616,4194304,16400,536870928,4194304,536887296,536870912,16400,536870928,541081616,4210688,541065216,4210704,541081600,0,541065232,16,16384,541065216,4210704,16384,4194320,536887312,0,541081600,536870912,4194320,536887312],p=[2097152,69206018,67110914,0,2048,67110914,2099202,69208064,69208066,2097152,0,67108866,2,67108864,69206018,2050,67110912,2099202,2097154,67110912,67108866,69206016,69208064,2097154,69206016,2048,2050,69208066,2099200,2,67108864,2099200,67108864,2099200,2097152,67110914,67110914,69206018,69206018,2,2097154,67108864,67110912,2097152,69208064,2050,2099202,69208064,2050,67108866,69208066,69206016,2099200,0,2,69208066,0,2099202,69206016,2048,67108866,67110912,2048,2097154],f=[268439616,4096,262144,268701760,268435456,268439616,64,268435456,262208,268697600,268701760,266240,268701696,266304,4096,64,268697600,268435520,268439552,4160,266240,262208,268697664,268701696,4160,0,0,268697664,268435520,268439552,266304,262144,266304,262144,268701696,4096,64,268697664,4096,266304,268439552,64,268435520,268697600,268697664,268435456,262144,268439616,0,268701760,262208,268435520,268697600,268439552,268439616,0,268701760,266240,266240,4160,4160,262208,268435456,268701696];function h(e,t,r,a){var n,h,d=32===e.length?3:9;n=3===d?a?[30,-2,-2]:[0,32,2]:a?[94,62,-2,32,64,2,30,-2,-2]:[0,32,2,62,30,-2,64,96,2];var y=t[0],g=t[1];y^=(h=252645135&(y>>>4^g))<<4,y^=(h=65535&(y>>>16^(g^=h)))<<16,y^=h=858993459&((g^=h)>>>2^y),y^=h=16711935&((g^=h<<2)>>>8^y),y=(y^=(h=1431655765&(y>>>1^(g^=h<<8)))<<1)<<1|y>>>31,g=(g^=h)<<1|g>>>31;for(var v=0;v<d;v+=3){for(var m=n[v+1],C=n[v+2],E=n[v];E!=m;E+=C){var S=g^e[E],T=(g>>>4|g<<28)^e[E+1];h=y,y=g,g=h^(s[S>>>24&63]|c[S>>>16&63]|l[S>>>8&63]|f[63&S]|i[T>>>24&63]|o[T>>>16&63]|u[T>>>8&63]|p[63&T])}h=y,y=g,g=h}g=g>>>1|g<<31,g^=h=1431655765&((y=y>>>1|y<<31)>>>1^g),g^=(h=16711935&(g>>>8^(y^=h<<1)))<<8,g^=(h=858993459&(g>>>2^(y^=h)))<<2,g^=h=65535&((y^=h)>>>16^g),g^=h=252645135&((y^=h<<16)>>>4^g),y^=h<<4,r[0]=y,r[1]=g}function d(e){var t,r="DES-"+((e=e||{}).mode||"CBC").toUpperCase(),n=(t=e.decrypt?a.cipher.createDecipher(r,e.key):a.cipher.createCipher(r,e.key)).start;return t.start=function(e,r){var i=null;r instanceof a.util.ByteBuffer&&(i=r,r={}),(r=r||{}).output=i,r.iv=e,n.call(t,r)},t}},function(e,t,r){var a=r(0);if(r(3),r(12),r(6),r(26),r(27),r(2),r(1),void 0===n)var n=a.jsbn.BigInteger;var i=a.util.isNodejs?r(16):null,s=a.asn1,o=a.util;a.pki=a.pki||{},e.exports=a.pki.rsa=a.rsa=a.rsa||{};var c=a.pki,u=[6,4,2,4,2,4,6,2],l={name:"PrivateKeyInfo",tagClass:s.Class.UNIVERSAL,type:s.Type.SEQUENCE,constructed:!0,value:[{name:"PrivateKeyInfo.version",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyVersion"},{name:"PrivateKeyInfo.privateKeyAlgorithm",tagClass:s.Class.UNIVERSAL,type:s.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:s.Class.UNIVERSAL,type:s.Type.OID,constructed:!1,capture:"privateKeyOid"}]},{name:"PrivateKeyInfo",tagClass:s.Class.UNIVERSAL,type:s.Type.OCTETSTRING,constructed:!1,capture:"privateKey"}]},p={name:"RSAPrivateKey",tagClass:s.Class.UNIVERSAL,type:s.Type.SEQUENCE,constructed:!0,value:[{name:"RSAPrivateKey.version",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyVersion"},{name:"RSAPrivateKey.modulus",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyModulus"},{name:"RSAPrivateKey.publicExponent",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyPublicExponent"},{name:"RSAPrivateKey.privateExponent",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyPrivateExponent"},{name:"RSAPrivateKey.prime1",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyPrime1"},{name:"RSAPrivateKey.prime2",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyPrime2"},{name:"RSAPrivateKey.exponent1",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyExponent1"},{name:"RSAPrivateKey.exponent2",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyExponent2"},{name:"RSAPrivateKey.coefficient",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyCoefficient"}]},f={name:"RSAPublicKey",tagClass:s.Class.UNIVERSAL,type:s.Type.SEQUENCE,constructed:!0,value:[{name:"RSAPublicKey.modulus",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"publicKeyModulus"},{name:"RSAPublicKey.exponent",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"publicKeyExponent"}]},h=a.pki.rsa.publicKeyValidator={name:"SubjectPublicKeyInfo",tagClass:s.Class.UNIVERSAL,type:s.Type.SEQUENCE,constructed:!0,captureAsn1:"subjectPublicKeyInfo",value:[{name:"SubjectPublicKeyInfo.AlgorithmIdentifier",tagClass:s.Class.UNIVERSAL,type:s.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:s.Class.UNIVERSAL,type:s.Type.OID,constructed:!1,capture:"publicKeyOid"}]},{name:"SubjectPublicKeyInfo.subjectPublicKey",tagClass:s.Class.UNIVERSAL,type:s.Type.BITSTRING,constructed:!1,value:[{name:"SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",tagClass:s.Class.UNIVERSAL,type:s.Type.SEQUENCE,constructed:!0,optional:!0,captureAsn1:"rsaPublicKey"}]}]},d={name:"DigestInfo",tagClass:s.Class.UNIVERSAL,type:s.Type.SEQUENCE,constructed:!0,value:[{name:"DigestInfo.DigestAlgorithm",tagClass:s.Class.UNIVERSAL,type:s.Type.SEQUENCE,constructed:!0,value:[{name:"DigestInfo.DigestAlgorithm.algorithmIdentifier",tagClass:s.Class.UNIVERSAL,type:s.Type.OID,constructed:!1,capture:"algorithmIdentifier"},{name:"DigestInfo.DigestAlgorithm.parameters",tagClass:s.Class.UNIVERSAL,type:s.Type.NULL,capture:"parameters",optional:!0,constructed:!1}]},{name:"DigestInfo.digest",tagClass:s.Class.UNIVERSAL,type:s.Type.OCTETSTRING,constructed:!1,capture:"digest"}]},y=function(e){var t;if(!(e.algorithm in c.oids)){var r=new Error("Unknown message digest algorithm.");throw r.algorithm=e.algorithm,r}t=c.oids[e.algorithm];var a=s.oidToDer(t).getBytes(),n=s.create(s.Class.UNIVERSAL,s.Type.SEQUENCE,!0,[]),i=s.create(s.Class.UNIVERSAL,s.Type.SEQUENCE,!0,[]);i.value.push(s.create(s.Class.UNIVERSAL,s.Type.OID,!1,a)),i.value.push(s.create(s.Class.UNIVERSAL,s.Type.NULL,!1,""));var o=s.create(s.Class.UNIVERSAL,s.Type.OCTETSTRING,!1,e.digest().getBytes());return n.value.push(i),n.value.push(o),s.toDer(n).getBytes()},g=function(e,t,r){if(r)return e.modPow(t.e,t.n);if(!t.p||!t.q)return e.modPow(t.d,t.n);var i;t.dP||(t.dP=t.d.mod(t.p.subtract(n.ONE))),t.dQ||(t.dQ=t.d.mod(t.q.subtract(n.ONE))),t.qInv||(t.qInv=t.q.modInverse(t.p));do{i=new n(a.util.bytesToHex(a.random.getBytes(t.n.bitLength()/8)),16)}while(i.compareTo(t.n)>=0||!i.gcd(t.n).equals(n.ONE));for(var s=(e=e.multiply(i.modPow(t.e,t.n)).mod(t.n)).mod(t.p).modPow(t.dP,t.p),o=e.mod(t.q).modPow(t.dQ,t.q);s.compareTo(o)<0;)s=s.add(t.p);var c=s.subtract(o).multiply(t.qInv).mod(t.p).multiply(t.q).add(o);return c=c.multiply(i.modInverse(t.n)).mod(t.n)};function v(e,t,r){var n=a.util.createBuffer(),i=Math.ceil(t.n.bitLength()/8);if(e.length>i-11){var s=new Error("Message is too long for PKCS#1 v1.5 padding.");throw s.length=e.length,s.max=i-11,s}n.putByte(0),n.putByte(r);var o,c=i-3-e.length;if(0===r||1===r){o=0===r?0:255;for(var u=0;u<c;++u)n.putByte(o)}else for(;c>0;){var l=0,p=a.random.getBytes(c);for(u=0;u<c;++u)0===(o=p.charCodeAt(u))?++l:n.putByte(o);c=l}return n.putByte(0),n.putBytes(e),n}function m(e,t,r,n){var i=Math.ceil(t.n.bitLength()/8),s=a.util.createBuffer(e),o=s.getByte(),c=s.getByte();if(0!==o||r&&0!==c&&1!==c||!r&&2!=c||r&&0===c&&void 0===n)throw new Error("Encryption block is invalid.");var u=0;if(0===c){u=i-3-n;for(var l=0;l<u;++l)if(0!==s.getByte())throw new Error("Encryption block is invalid.")}else if(1===c)for(u=0;s.length()>1;){if(255!==s.getByte()){--s.read;break}++u}else if(2===c)for(u=0;s.length()>1;){if(0===s.getByte()){--s.read;break}++u}if(0!==s.getByte()||u!==i-3-s.length())throw new Error("Encryption block is invalid.");return s.getBytes()}function C(e,t,r){"function"==typeof t&&(r=t,t={});var i={algorithm:{name:(t=t||{}).algorithm||"PRIMEINC",options:{workers:t.workers||2,workLoad:t.workLoad||100,workerScript:t.workerScript}}};function s(){o(e.pBits,(function(t,a){return t?r(t):(e.p=a,null!==e.q?u(t,e.q):void o(e.qBits,u))}))}function o(e,t){a.prime.generateProbablePrime(e,i,t)}function u(t,a){if(t)return r(t);if(e.q=a,e.p.compareTo(e.q)<0){var i=e.p;e.p=e.q,e.q=i}if(0!==e.p.subtract(n.ONE).gcd(e.e).compareTo(n.ONE))return e.p=null,void s();if(0!==e.q.subtract(n.ONE).gcd(e.e).compareTo(n.ONE))return e.q=null,void o(e.qBits,u);if(e.p1=e.p.subtract(n.ONE),e.q1=e.q.subtract(n.ONE),e.phi=e.p1.multiply(e.q1),0!==e.phi.gcd(e.e).compareTo(n.ONE))return e.p=e.q=null,void s();if(e.n=e.p.multiply(e.q),e.n.bitLength()!==e.bits)return e.q=null,void o(e.qBits,u);var l=e.e.modInverse(e.phi);e.keys={privateKey:c.rsa.setPrivateKey(e.n,e.e,l,e.p,e.q,l.mod(e.p1),l.mod(e.q1),e.q.modInverse(e.p)),publicKey:c.rsa.setPublicKey(e.n,e.e)},r(null,e.keys)}"prng"in t&&(i.prng=t.prng),s()}function E(e){var t=e.toString(16);t[0]>="8"&&(t="00"+t);var r=a.util.hexToBytes(t);return r.length>1&&(0===r.charCodeAt(0)&&0==(128&r.charCodeAt(1))||255===r.charCodeAt(0)&&128==(128&r.charCodeAt(1)))?r.substr(1):r}function S(e){return e<=100?27:e<=150?18:e<=200?15:e<=250?12:e<=300?9:e<=350?8:e<=400?7:e<=500?6:e<=600?5:e<=800?4:e<=1250?3:2}function T(e){return a.util.isNodejs&&"function"==typeof i[e]}function I(e){return void 0!==o.globalScope&&"object"==typeof o.globalScope.crypto&&"object"==typeof o.globalScope.crypto.subtle&&"function"==typeof o.globalScope.crypto.subtle[e]}function A(e){return void 0!==o.globalScope&&"object"==typeof o.globalScope.msCrypto&&"object"==typeof o.globalScope.msCrypto.subtle&&"function"==typeof o.globalScope.msCrypto.subtle[e]}function B(e){for(var t=a.util.hexToBytes(e.toString(16)),r=new Uint8Array(t.length),n=0;n<t.length;++n)r[n]=t.charCodeAt(n);return r}c.rsa.encrypt=function(e,t,r){var i,s=r,o=Math.ceil(t.n.bitLength()/8);!1!==r&&!0!==r?(s=2===r,i=v(e,t,r)):(i=a.util.createBuffer()).putBytes(e);for(var c=new n(i.toHex(),16),u=g(c,t,s).toString(16),l=a.util.createBuffer(),p=o-Math.ceil(u.length/2);p>0;)l.putByte(0),--p;return l.putBytes(a.util.hexToBytes(u)),l.getBytes()},c.rsa.decrypt=function(e,t,r,i){var s=Math.ceil(t.n.bitLength()/8);if(e.length!==s){var o=new Error("Encrypted message length is invalid.");throw o.length=e.length,o.expected=s,o}var c=new n(a.util.createBuffer(e).toHex(),16);if(c.compareTo(t.n)>=0)throw new Error("Encrypted message is invalid.");for(var u=g(c,t,r).toString(16),l=a.util.createBuffer(),p=s-Math.ceil(u.length/2);p>0;)l.putByte(0),--p;return l.putBytes(a.util.hexToBytes(u)),!1!==i?m(l.getBytes(),t,r):l.getBytes()},c.rsa.createKeyPairGenerationState=function(e,t,r){"string"==typeof e&&(e=parseInt(e,10)),e=e||2048;var i,s=(r=r||{}).prng||a.random,o={nextBytes:function(e){for(var t=s.getBytesSync(e.length),r=0;r<e.length;++r)e[r]=t.charCodeAt(r)}},c=r.algorithm||"PRIMEINC";if("PRIMEINC"!==c)throw new Error("Invalid key generation algorithm: "+c);return(i={algorithm:c,state:0,bits:e,rng:o,eInt:t||65537,e:new n(null),p:null,q:null,qBits:e>>1,pBits:e-(e>>1),pqState:0,num:null,keys:null}).e.fromInt(i.eInt),i},c.rsa.stepKeyPairGenerationState=function(e,t){"algorithm"in e||(e.algorithm="PRIMEINC");var r=new n(null);r.fromInt(30);for(var a,i=0,s=function(e,t){return e|t},o=+new Date,l=0;null===e.keys&&(t<=0||l<t);){if(0===e.state){var p=null===e.p?e.pBits:e.qBits,f=p-1;0===e.pqState?(e.num=new n(p,e.rng),e.num.testBit(f)||e.num.bitwiseTo(n.ONE.shiftLeft(f),s,e.num),e.num.dAddOffset(31-e.num.mod(r).byteValue(),0),i=0,++e.pqState):1===e.pqState?e.num.bitLength()>p?e.pqState=0:e.num.isProbablePrime(S(e.num.bitLength()))?++e.pqState:e.num.dAddOffset(u[i++%8],0):2===e.pqState?e.pqState=0===e.num.subtract(n.ONE).gcd(e.e).compareTo(n.ONE)?3:0:3===e.pqState&&(e.pqState=0,null===e.p?e.p=e.num:e.q=e.num,null!==e.p&&null!==e.q&&++e.state,e.num=null)}else if(1===e.state)e.p.compareTo(e.q)<0&&(e.num=e.p,e.p=e.q,e.q=e.num),++e.state;else if(2===e.state)e.p1=e.p.subtract(n.ONE),e.q1=e.q.subtract(n.ONE),e.phi=e.p1.multiply(e.q1),++e.state;else if(3===e.state)0===e.phi.gcd(e.e).compareTo(n.ONE)?++e.state:(e.p=null,e.q=null,e.state=0);else if(4===e.state)e.n=e.p.multiply(e.q),e.n.bitLength()===e.bits?++e.state:(e.q=null,e.state=0);else if(5===e.state){var h=e.e.modInverse(e.phi);e.keys={privateKey:c.rsa.setPrivateKey(e.n,e.e,h,e.p,e.q,h.mod(e.p1),h.mod(e.q1),e.q.modInverse(e.p)),publicKey:c.rsa.setPublicKey(e.n,e.e)}}l+=(a=+new Date)-o,o=a}return null!==e.keys},c.rsa.generateKeyPair=function(e,t,r,n){if(1===arguments.length?"object"==typeof e?(r=e,e=void 0):"function"==typeof e&&(n=e,e=void 0):2===arguments.length?"number"==typeof e?"function"==typeof t?(n=t,t=void 0):"number"!=typeof t&&(r=t,t=void 0):(r=e,n=t,e=void 0,t=void 0):3===arguments.length&&("number"==typeof t?"function"==typeof r&&(n=r,r=void 0):(n=r,r=t,t=void 0)),r=r||{},void 0===e&&(e=r.bits||2048),void 0===t&&(t=r.e||65537),!a.options.usePureJavaScript&&!r.prng&&e>=256&&e<=16384&&(65537===t||3===t))if(n){if(T("generateKeyPair"))return i.generateKeyPair("rsa",{modulusLength:e,publicExponent:t,publicKeyEncoding:{type:"spki",format:"pem"},privateKeyEncoding:{type:"pkcs8",format:"pem"}},(function(e,t,r){if(e)return n(e);n(null,{privateKey:c.privateKeyFromPem(r),publicKey:c.publicKeyFromPem(t)})}));if(I("generateKey")&&I("exportKey"))return o.globalScope.crypto.subtle.generateKey({name:"RSASSA-PKCS1-v1_5",modulusLength:e,publicExponent:B(t),hash:{name:"SHA-256"}},!0,["sign","verify"]).then((function(e){return o.globalScope.crypto.subtle.exportKey("pkcs8",e.privateKey)})).then(void 0,(function(e){n(e)})).then((function(e){if(e){var t=c.privateKeyFromAsn1(s.fromDer(a.util.createBuffer(e)));n(null,{privateKey:t,publicKey:c.setRsaPublicKey(t.n,t.e)})}}));if(A("generateKey")&&A("exportKey")){var u=o.globalScope.msCrypto.subtle.generateKey({name:"RSASSA-PKCS1-v1_5",modulusLength:e,publicExponent:B(t),hash:{name:"SHA-256"}},!0,["sign","verify"]);return u.oncomplete=function(e){var t=e.target.result,r=o.globalScope.msCrypto.subtle.exportKey("pkcs8",t.privateKey);r.oncomplete=function(e){var t=e.target.result,r=c.privateKeyFromAsn1(s.fromDer(a.util.createBuffer(t)));n(null,{privateKey:r,publicKey:c.setRsaPublicKey(r.n,r.e)})},r.onerror=function(e){n(e)}},void(u.onerror=function(e){n(e)})}}else if(T("generateKeyPairSync")){var l=i.generateKeyPairSync("rsa",{modulusLength:e,publicExponent:t,publicKeyEncoding:{type:"spki",format:"pem"},privateKeyEncoding:{type:"pkcs8",format:"pem"}});return{privateKey:c.privateKeyFromPem(l.privateKey),publicKey:c.publicKeyFromPem(l.publicKey)}}var p=c.rsa.createKeyPairGenerationState(e,t,r);if(!n)return c.rsa.stepKeyPairGenerationState(p,0),p.keys;C(p,r,n)},c.setRsaPublicKey=c.rsa.setPublicKey=function(e,t){var r={n:e,e:t,encrypt:function(e,t,n){if("string"==typeof t?t=t.toUpperCase():void 0===t&&(t="RSAES-PKCS1-V1_5"),"RSAES-PKCS1-V1_5"===t)t={encode:function(e,t,r){return v(e,t,2).getBytes()}};else if("RSA-OAEP"===t||"RSAES-OAEP"===t)t={encode:function(e,t){return a.pkcs1.encode_rsa_oaep(t,e,n)}};else if(-1!==["RAW","NONE","NULL",null].indexOf(t))t={encode:function(e){return e}};else if("string"==typeof t)throw new Error('Unsupported encryption scheme: "'+t+'".');var i=t.encode(e,r,!0);return c.rsa.encrypt(i,r,!0)},verify:function(e,t,n,i){"string"==typeof n?n=n.toUpperCase():void 0===n&&(n="RSASSA-PKCS1-V1_5"),void 0===i&&(i={_parseAllDigestBytes:!0}),"_parseAllDigestBytes"in i||(i._parseAllDigestBytes=!0),"RSASSA-PKCS1-V1_5"===n?n={verify:function(e,t){t=m(t,r,!0);var n=s.fromDer(t,{parseAllBytes:i._parseAllDigestBytes}),o={},c=[];if(!s.validate(n,d,o,c))throw(u=new Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value.")).errors=c,u;var u,l=s.derToOid(o.algorithmIdentifier);if(l!==a.oids.md2&&l!==a.oids.md5&&l!==a.oids.sha1&&l!==a.oids.sha224&&l!==a.oids.sha256&&l!==a.oids.sha384&&l!==a.oids.sha512&&l!==a.oids["sha512-224"]&&l!==a.oids["sha512-256"])throw(u=new Error("Unknown RSASSA-PKCS1-v1_5 DigestAlgorithm identifier.")).oid=l,u;if((l===a.oids.md2||l===a.oids.md5)&&!("parameters"in o))throw new Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value. Missing algorithm identifer NULL parameters.");return e===o.digest}}:"NONE"!==n&&"NULL"!==n&&null!==n||(n={verify:function(e,t){return e===(t=m(t,r,!0))}});var o=c.rsa.decrypt(t,r,!0,!1);return n.verify(e,o,r.n.bitLength())}};return r},c.setRsaPrivateKey=c.rsa.setPrivateKey=function(e,t,r,n,i,s,o,u){var l={n:e,e:t,d:r,p:n,q:i,dP:s,dQ:o,qInv:u,decrypt:function(e,t,r){"string"==typeof t?t=t.toUpperCase():void 0===t&&(t="RSAES-PKCS1-V1_5");var n=c.rsa.decrypt(e,l,!1,!1);if("RSAES-PKCS1-V1_5"===t)t={decode:m};else if("RSA-OAEP"===t||"RSAES-OAEP"===t)t={decode:function(e,t){return a.pkcs1.decode_rsa_oaep(t,e,r)}};else{if(-1===["RAW","NONE","NULL",null].indexOf(t))throw new Error('Unsupported encryption scheme: "'+t+'".');t={decode:function(e){return e}}}return t.decode(n,l,!1)},sign:function(e,t){var r=!1;"string"==typeof t&&(t=t.toUpperCase()),void 0===t||"RSASSA-PKCS1-V1_5"===t?(t={encode:y},r=1):"NONE"!==t&&"NULL"!==t&&null!==t||(t={encode:function(){return e}},r=1);var a=t.encode(e,l.n.bitLength());return c.rsa.encrypt(a,l,r)}};return l},c.wrapRsaPrivateKey=function(e){return s.create(s.Class.UNIVERSAL,s.Type.SEQUENCE,!0,[s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,s.integerToDer(0).getBytes()),s.create(s.Class.UNIVERSAL,s.Type.SEQUENCE,!0,[s.create(s.Class.UNIVERSAL,s.Type.OID,!1,s.oidToDer(c.oids.rsaEncryption).getBytes()),s.create(s.Class.UNIVERSAL,s.Type.NULL,!1,"")]),s.create(s.Class.UNIVERSAL,s.Type.OCTETSTRING,!1,s.toDer(e).getBytes())])},c.privateKeyFromAsn1=function(e){var t,r,i,o,u,f,h,d,y={},g=[];if(s.validate(e,l,y,g)&&(e=s.fromDer(a.util.createBuffer(y.privateKey))),y={},g=[],!s.validate(e,p,y,g)){var v=new Error("Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.");throw v.errors=g,v}return t=a.util.createBuffer(y.privateKeyModulus).toHex(),r=a.util.createBuffer(y.privateKeyPublicExponent).toHex(),i=a.util.createBuffer(y.privateKeyPrivateExponent).toHex(),o=a.util.createBuffer(y.privateKeyPrime1).toHex(),u=a.util.createBuffer(y.privateKeyPrime2).toHex(),f=a.util.createBuffer(y.privateKeyExponent1).toHex(),h=a.util.createBuffer(y.privateKeyExponent2).toHex(),d=a.util.createBuffer(y.privateKeyCoefficient).toHex(),c.setRsaPrivateKey(new n(t,16),new n(r,16),new n(i,16),new n(o,16),new n(u,16),new n(f,16),new n(h,16),new n(d,16))},c.privateKeyToAsn1=c.privateKeyToRSAPrivateKey=function(e){return s.create(s.Class.UNIVERSAL,s.Type.SEQUENCE,!0,[s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,s.integerToDer(0).getBytes()),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,E(e.n)),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,E(e.e)),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,E(e.d)),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,E(e.p)),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,E(e.q)),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,E(e.dP)),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,E(e.dQ)),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,E(e.qInv))])},c.publicKeyFromAsn1=function(e){var t={},r=[];if(s.validate(e,h,t,r)){var i,o=s.derToOid(t.publicKeyOid);if(o!==c.oids.rsaEncryption)throw(i=new Error("Cannot read public key. Unknown OID.")).oid=o,i;e=t.rsaPublicKey}if(r=[],!s.validate(e,f,t,r))throw(i=new Error("Cannot read public key. ASN.1 object does not contain an RSAPublicKey.")).errors=r,i;var u=a.util.createBuffer(t.publicKeyModulus).toHex(),l=a.util.createBuffer(t.publicKeyExponent).toHex();return c.setRsaPublicKey(new n(u,16),new n(l,16))},c.publicKeyToAsn1=c.publicKeyToSubjectPublicKeyInfo=function(e){return s.create(s.Class.UNIVERSAL,s.Type.SEQUENCE,!0,[s.create(s.Class.UNIVERSAL,s.Type.SEQUENCE,!0,[s.create(s.Class.UNIVERSAL,s.Type.OID,!1,s.oidToDer(c.oids.rsaEncryption).getBytes()),s.create(s.Class.UNIVERSAL,s.Type.NULL,!1,"")]),s.create(s.Class.UNIVERSAL,s.Type.BITSTRING,!1,[c.publicKeyToRSAPublicKey(e)])])},c.publicKeyToRSAPublicKey=function(e){return s.create(s.Class.UNIVERSAL,s.Type.SEQUENCE,!0,[s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,E(e.n)),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,E(e.e))])}},function(e,t,r){var a,n=r(0);e.exports=n.jsbn=n.jsbn||{};function i(e,t,r){this.data=[],null!=e&&("number"==typeof e?this.fromNumber(e,t,r):null==t&&"string"!=typeof e?this.fromString(e,256):this.fromString(e,t))}function s(){return new i(null)}function o(e,t,r,a,n,i){for(var s=16383&t,o=t>>14;--i>=0;){var c=16383&this.data[e],u=this.data[e++]>>14,l=o*c+u*s;n=((c=s*c+((16383&l)<<14)+r.data[a]+n)>>28)+(l>>14)+o*u,r.data[a++]=268435455&c}return n}n.jsbn.BigInteger=i,"undefined"==typeof navigator?(i.prototype.am=o,a=28):"Microsoft Internet Explorer"==navigator.appName?(i.prototype.am=function(e,t,r,a,n,i){for(var s=32767&t,o=t>>15;--i>=0;){var c=32767&this.data[e],u=this.data[e++]>>15,l=o*c+u*s;n=((c=s*c+((32767&l)<<15)+r.data[a]+(1073741823&n))>>>30)+(l>>>15)+o*u+(n>>>30),r.data[a++]=1073741823&c}return n},a=30):"Netscape"!=navigator.appName?(i.prototype.am=function(e,t,r,a,n,i){for(;--i>=0;){var s=t*this.data[e++]+r.data[a]+n;n=Math.floor(s/67108864),r.data[a++]=67108863&s}return n},a=26):(i.prototype.am=o,a=28),i.prototype.DB=a,i.prototype.DM=(1<<a)-1,i.prototype.DV=1<<a;i.prototype.FV=Math.pow(2,52),i.prototype.F1=52-a,i.prototype.F2=2*a-52;var c,u,l=new Array;for(c="0".charCodeAt(0),u=0;u<=9;++u)l[c++]=u;for(c="a".charCodeAt(0),u=10;u<36;++u)l[c++]=u;for(c="A".charCodeAt(0),u=10;u<36;++u)l[c++]=u;function p(e){return"0123456789abcdefghijklmnopqrstuvwxyz".charAt(e)}function f(e,t){var r=l[e.charCodeAt(t)];return null==r?-1:r}function h(e){var t=s();return t.fromInt(e),t}function d(e){var t,r=1;return 0!=(t=e>>>16)&&(e=t,r+=16),0!=(t=e>>8)&&(e=t,r+=8),0!=(t=e>>4)&&(e=t,r+=4),0!=(t=e>>2)&&(e=t,r+=2),0!=(t=e>>1)&&(e=t,r+=1),r}function y(e){this.m=e}function g(e){this.m=e,this.mp=e.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<e.DB-15)-1,this.mt2=2*e.t}function v(e,t){return e&t}function m(e,t){return e|t}function C(e,t){return e^t}function E(e,t){return e&~t}function S(e){if(0==e)return-1;var t=0;return 0==(65535&e)&&(e>>=16,t+=16),0==(255&e)&&(e>>=8,t+=8),0==(15&e)&&(e>>=4,t+=4),0==(3&e)&&(e>>=2,t+=2),0==(1&e)&&++t,t}function T(e){for(var t=0;0!=e;)e&=e-1,++t;return t}function I(){}function A(e){return e}function B(e){this.r2=s(),this.q3=s(),i.ONE.dlShiftTo(2*e.t,this.r2),this.mu=this.r2.divide(e),this.m=e}y.prototype.convert=function(e){return e.s<0||e.compareTo(this.m)>=0?e.mod(this.m):e},y.prototype.revert=function(e){return e},y.prototype.reduce=function(e){e.divRemTo(this.m,null,e)},y.prototype.mulTo=function(e,t,r){e.multiplyTo(t,r),this.reduce(r)},y.prototype.sqrTo=function(e,t){e.squareTo(t),this.reduce(t)},g.prototype.convert=function(e){var t=s();return e.abs().dlShiftTo(this.m.t,t),t.divRemTo(this.m,null,t),e.s<0&&t.compareTo(i.ZERO)>0&&this.m.subTo(t,t),t},g.prototype.revert=function(e){var t=s();return e.copyTo(t),this.reduce(t),t},g.prototype.reduce=function(e){for(;e.t<=this.mt2;)e.data[e.t++]=0;for(var t=0;t<this.m.t;++t){var r=32767&e.data[t],a=r*this.mpl+((r*this.mph+(e.data[t]>>15)*this.mpl&this.um)<<15)&e.DM;for(r=t+this.m.t,e.data[r]+=this.m.am(0,a,e,t,0,this.m.t);e.data[r]>=e.DV;)e.data[r]-=e.DV,e.data[++r]++}e.clamp(),e.drShiftTo(this.m.t,e),e.compareTo(this.m)>=0&&e.subTo(this.m,e)},g.prototype.mulTo=function(e,t,r){e.multiplyTo(t,r),this.reduce(r)},g.prototype.sqrTo=function(e,t){e.squareTo(t),this.reduce(t)},i.prototype.copyTo=function(e){for(var t=this.t-1;t>=0;--t)e.data[t]=this.data[t];e.t=this.t,e.s=this.s},i.prototype.fromInt=function(e){this.t=1,this.s=e<0?-1:0,e>0?this.data[0]=e:e<-1?this.data[0]=e+this.DV:this.t=0},i.prototype.fromString=function(e,t){var r;if(16==t)r=4;else if(8==t)r=3;else if(256==t)r=8;else if(2==t)r=1;else if(32==t)r=5;else{if(4!=t)return void this.fromRadix(e,t);r=2}this.t=0,this.s=0;for(var a=e.length,n=!1,s=0;--a>=0;){var o=8==r?255&e[a]:f(e,a);o<0?"-"==e.charAt(a)&&(n=!0):(n=!1,0==s?this.data[this.t++]=o:s+r>this.DB?(this.data[this.t-1]|=(o&(1<<this.DB-s)-1)<<s,this.data[this.t++]=o>>this.DB-s):this.data[this.t-1]|=o<<s,(s+=r)>=this.DB&&(s-=this.DB))}8==r&&0!=(128&e[0])&&(this.s=-1,s>0&&(this.data[this.t-1]|=(1<<this.DB-s)-1<<s)),this.clamp(),n&&i.ZERO.subTo(this,this)},i.prototype.clamp=function(){for(var e=this.s&this.DM;this.t>0&&this.data[this.t-1]==e;)--this.t},i.prototype.dlShiftTo=function(e,t){var r;for(r=this.t-1;r>=0;--r)t.data[r+e]=this.data[r];for(r=e-1;r>=0;--r)t.data[r]=0;t.t=this.t+e,t.s=this.s},i.prototype.drShiftTo=function(e,t){for(var r=e;r<this.t;++r)t.data[r-e]=this.data[r];t.t=Math.max(this.t-e,0),t.s=this.s},i.prototype.lShiftTo=function(e,t){var r,a=e%this.DB,n=this.DB-a,i=(1<<n)-1,s=Math.floor(e/this.DB),o=this.s<<a&this.DM;for(r=this.t-1;r>=0;--r)t.data[r+s+1]=this.data[r]>>n|o,o=(this.data[r]&i)<<a;for(r=s-1;r>=0;--r)t.data[r]=0;t.data[s]=o,t.t=this.t+s+1,t.s=this.s,t.clamp()},i.prototype.rShiftTo=function(e,t){t.s=this.s;var r=Math.floor(e/this.DB);if(r>=this.t)t.t=0;else{var a=e%this.DB,n=this.DB-a,i=(1<<a)-1;t.data[0]=this.data[r]>>a;for(var s=r+1;s<this.t;++s)t.data[s-r-1]|=(this.data[s]&i)<<n,t.data[s-r]=this.data[s]>>a;a>0&&(t.data[this.t-r-1]|=(this.s&i)<<n),t.t=this.t-r,t.clamp()}},i.prototype.subTo=function(e,t){for(var r=0,a=0,n=Math.min(e.t,this.t);r<n;)a+=this.data[r]-e.data[r],t.data[r++]=a&this.DM,a>>=this.DB;if(e.t<this.t){for(a-=e.s;r<this.t;)a+=this.data[r],t.data[r++]=a&this.DM,a>>=this.DB;a+=this.s}else{for(a+=this.s;r<e.t;)a-=e.data[r],t.data[r++]=a&this.DM,a>>=this.DB;a-=e.s}t.s=a<0?-1:0,a<-1?t.data[r++]=this.DV+a:a>0&&(t.data[r++]=a),t.t=r,t.clamp()},i.prototype.multiplyTo=function(e,t){var r=this.abs(),a=e.abs(),n=r.t;for(t.t=n+a.t;--n>=0;)t.data[n]=0;for(n=0;n<a.t;++n)t.data[n+r.t]=r.am(0,a.data[n],t,n,0,r.t);t.s=0,t.clamp(),this.s!=e.s&&i.ZERO.subTo(t,t)},i.prototype.squareTo=function(e){for(var t=this.abs(),r=e.t=2*t.t;--r>=0;)e.data[r]=0;for(r=0;r<t.t-1;++r){var a=t.am(r,t.data[r],e,2*r,0,1);(e.data[r+t.t]+=t.am(r+1,2*t.data[r],e,2*r+1,a,t.t-r-1))>=t.DV&&(e.data[r+t.t]-=t.DV,e.data[r+t.t+1]=1)}e.t>0&&(e.data[e.t-1]+=t.am(r,t.data[r],e,2*r,0,1)),e.s=0,e.clamp()},i.prototype.divRemTo=function(e,t,r){var a=e.abs();if(!(a.t<=0)){var n=this.abs();if(n.t<a.t)return null!=t&&t.fromInt(0),void(null!=r&&this.copyTo(r));null==r&&(r=s());var o=s(),c=this.s,u=e.s,l=this.DB-d(a.data[a.t-1]);l>0?(a.lShiftTo(l,o),n.lShiftTo(l,r)):(a.copyTo(o),n.copyTo(r));var p=o.t,f=o.data[p-1];if(0!=f){var h=f*(1<<this.F1)+(p>1?o.data[p-2]>>this.F2:0),y=this.FV/h,g=(1<<this.F1)/h,v=1<<this.F2,m=r.t,C=m-p,E=null==t?s():t;for(o.dlShiftTo(C,E),r.compareTo(E)>=0&&(r.data[r.t++]=1,r.subTo(E,r)),i.ONE.dlShiftTo(p,E),E.subTo(o,o);o.t<p;)o.data[o.t++]=0;for(;--C>=0;){var S=r.data[--m]==f?this.DM:Math.floor(r.data[m]*y+(r.data[m-1]+v)*g);if((r.data[m]+=o.am(0,S,r,C,0,p))<S)for(o.dlShiftTo(C,E),r.subTo(E,r);r.data[m]<--S;)r.subTo(E,r)}null!=t&&(r.drShiftTo(p,t),c!=u&&i.ZERO.subTo(t,t)),r.t=p,r.clamp(),l>0&&r.rShiftTo(l,r),c<0&&i.ZERO.subTo(r,r)}}},i.prototype.invDigit=function(){if(this.t<1)return 0;var e=this.data[0];if(0==(1&e))return 0;var t=3&e;return(t=(t=(t=(t=t*(2-(15&e)*t)&15)*(2-(255&e)*t)&255)*(2-((65535&e)*t&65535))&65535)*(2-e*t%this.DV)%this.DV)>0?this.DV-t:-t},i.prototype.isEven=function(){return 0==(this.t>0?1&this.data[0]:this.s)},i.prototype.exp=function(e,t){if(e>4294967295||e<1)return i.ONE;var r=s(),a=s(),n=t.convert(this),o=d(e)-1;for(n.copyTo(r);--o>=0;)if(t.sqrTo(r,a),(e&1<<o)>0)t.mulTo(a,n,r);else{var c=r;r=a,a=c}return t.revert(r)},i.prototype.toString=function(e){if(this.s<0)return"-"+this.negate().toString(e);var t;if(16==e)t=4;else if(8==e)t=3;else if(2==e)t=1;else if(32==e)t=5;else{if(4!=e)return this.toRadix(e);t=2}var r,a=(1<<t)-1,n=!1,i="",s=this.t,o=this.DB-s*this.DB%t;if(s-- >0)for(o<this.DB&&(r=this.data[s]>>o)>0&&(n=!0,i=p(r));s>=0;)o<t?(r=(this.data[s]&(1<<o)-1)<<t-o,r|=this.data[--s]>>(o+=this.DB-t)):(r=this.data[s]>>(o-=t)&a,o<=0&&(o+=this.DB,--s)),r>0&&(n=!0),n&&(i+=p(r));return n?i:"0"},i.prototype.negate=function(){var e=s();return i.ZERO.subTo(this,e),e},i.prototype.abs=function(){return this.s<0?this.negate():this},i.prototype.compareTo=function(e){var t=this.s-e.s;if(0!=t)return t;var r=this.t;if(0!=(t=r-e.t))return this.s<0?-t:t;for(;--r>=0;)if(0!=(t=this.data[r]-e.data[r]))return t;return 0},i.prototype.bitLength=function(){return this.t<=0?0:this.DB*(this.t-1)+d(this.data[this.t-1]^this.s&this.DM)},i.prototype.mod=function(e){var t=s();return this.abs().divRemTo(e,null,t),this.s<0&&t.compareTo(i.ZERO)>0&&e.subTo(t,t),t},i.prototype.modPowInt=function(e,t){var r;return r=e<256||t.isEven()?new y(t):new g(t),this.exp(e,r)},i.ZERO=h(0),i.ONE=h(1),I.prototype.convert=A,I.prototype.revert=A,I.prototype.mulTo=function(e,t,r){e.multiplyTo(t,r)},I.prototype.sqrTo=function(e,t){e.squareTo(t)},B.prototype.convert=function(e){if(e.s<0||e.t>2*this.m.t)return e.mod(this.m);if(e.compareTo(this.m)<0)return e;var t=s();return e.copyTo(t),this.reduce(t),t},B.prototype.revert=function(e){return e},B.prototype.reduce=function(e){for(e.drShiftTo(this.m.t-1,this.r2),e.t>this.m.t+1&&(e.t=this.m.t+1,e.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);e.compareTo(this.r2)<0;)e.dAddOffset(1,this.m.t+1);for(e.subTo(this.r2,e);e.compareTo(this.m)>=0;)e.subTo(this.m,e)},B.prototype.mulTo=function(e,t,r){e.multiplyTo(t,r),this.reduce(r)},B.prototype.sqrTo=function(e,t){e.squareTo(t),this.reduce(t)};var b=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509],N=(1<<26)/b[b.length-1];i.prototype.chunkSize=function(e){return Math.floor(Math.LN2*this.DB/Math.log(e))},i.prototype.toRadix=function(e){if(null==e&&(e=10),0==this.signum()||e<2||e>36)return"0";var t=this.chunkSize(e),r=Math.pow(e,t),a=h(r),n=s(),i=s(),o="";for(this.divRemTo(a,n,i);n.signum()>0;)o=(r+i.intValue()).toString(e).substr(1)+o,n.divRemTo(a,n,i);return i.intValue().toString(e)+o},i.prototype.fromRadix=function(e,t){this.fromInt(0),null==t&&(t=10);for(var r=this.chunkSize(t),a=Math.pow(t,r),n=!1,s=0,o=0,c=0;c<e.length;++c){var u=f(e,c);u<0?"-"==e.charAt(c)&&0==this.signum()&&(n=!0):(o=t*o+u,++s>=r&&(this.dMultiply(a),this.dAddOffset(o,0),s=0,o=0))}s>0&&(this.dMultiply(Math.pow(t,s)),this.dAddOffset(o,0)),n&&i.ZERO.subTo(this,this)},i.prototype.fromNumber=function(e,t,r){if("number"==typeof t)if(e<2)this.fromInt(1);else for(this.fromNumber(e,r),this.testBit(e-1)||this.bitwiseTo(i.ONE.shiftLeft(e-1),m,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(t);)this.dAddOffset(2,0),this.bitLength()>e&&this.subTo(i.ONE.shiftLeft(e-1),this);else{var a=new Array,n=7&e;a.length=1+(e>>3),t.nextBytes(a),n>0?a[0]&=(1<<n)-1:a[0]=0,this.fromString(a,256)}},i.prototype.bitwiseTo=function(e,t,r){var a,n,i=Math.min(e.t,this.t);for(a=0;a<i;++a)r.data[a]=t(this.data[a],e.data[a]);if(e.t<this.t){for(n=e.s&this.DM,a=i;a<this.t;++a)r.data[a]=t(this.data[a],n);r.t=this.t}else{for(n=this.s&this.DM,a=i;a<e.t;++a)r.data[a]=t(n,e.data[a]);r.t=e.t}r.s=t(this.s,e.s),r.clamp()},i.prototype.changeBit=function(e,t){var r=i.ONE.shiftLeft(e);return this.bitwiseTo(r,t,r),r},i.prototype.addTo=function(e,t){for(var r=0,a=0,n=Math.min(e.t,this.t);r<n;)a+=this.data[r]+e.data[r],t.data[r++]=a&this.DM,a>>=this.DB;if(e.t<this.t){for(a+=e.s;r<this.t;)a+=this.data[r],t.data[r++]=a&this.DM,a>>=this.DB;a+=this.s}else{for(a+=this.s;r<e.t;)a+=e.data[r],t.data[r++]=a&this.DM,a>>=this.DB;a+=e.s}t.s=a<0?-1:0,a>0?t.data[r++]=a:a<-1&&(t.data[r++]=this.DV+a),t.t=r,t.clamp()},i.prototype.dMultiply=function(e){this.data[this.t]=this.am(0,e-1,this,0,0,this.t),++this.t,this.clamp()},i.prototype.dAddOffset=function(e,t){if(0!=e){for(;this.t<=t;)this.data[this.t++]=0;for(this.data[t]+=e;this.data[t]>=this.DV;)this.data[t]-=this.DV,++t>=this.t&&(this.data[this.t++]=0),++this.data[t]}},i.prototype.multiplyLowerTo=function(e,t,r){var a,n=Math.min(this.t+e.t,t);for(r.s=0,r.t=n;n>0;)r.data[--n]=0;for(a=r.t-this.t;n<a;++n)r.data[n+this.t]=this.am(0,e.data[n],r,n,0,this.t);for(a=Math.min(e.t,t);n<a;++n)this.am(0,e.data[n],r,n,0,t-n);r.clamp()},i.prototype.multiplyUpperTo=function(e,t,r){--t;var a=r.t=this.t+e.t-t;for(r.s=0;--a>=0;)r.data[a]=0;for(a=Math.max(t-this.t,0);a<e.t;++a)r.data[this.t+a-t]=this.am(t-a,e.data[a],r,0,0,this.t+a-t);r.clamp(),r.drShiftTo(1,r)},i.prototype.modInt=function(e){if(e<=0)return 0;var t=this.DV%e,r=this.s<0?e-1:0;if(this.t>0)if(0==t)r=this.data[0]%e;else for(var a=this.t-1;a>=0;--a)r=(t*r+this.data[a])%e;return r},i.prototype.millerRabin=function(e){var t=this.subtract(i.ONE),r=t.getLowestSetBit();if(r<=0)return!1;for(var a,n=t.shiftRight(r),s={nextBytes:function(e){for(var t=0;t<e.length;++t)e[t]=Math.floor(256*Math.random())}},o=0;o<e;++o){do{a=new i(this.bitLength(),s)}while(a.compareTo(i.ONE)<=0||a.compareTo(t)>=0);var c=a.modPow(n,this);if(0!=c.compareTo(i.ONE)&&0!=c.compareTo(t)){for(var u=1;u++<r&&0!=c.compareTo(t);)if(0==(c=c.modPowInt(2,this)).compareTo(i.ONE))return!1;if(0!=c.compareTo(t))return!1}}return!0},i.prototype.clone=function(){var e=s();return this.copyTo(e),e},i.prototype.intValue=function(){if(this.s<0){if(1==this.t)return this.data[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this.data[0];if(0==this.t)return 0}return(this.data[1]&(1<<32-this.DB)-1)<<this.DB|this.data[0]},i.prototype.byteValue=function(){return 0==this.t?this.s:this.data[0]<<24>>24},i.prototype.shortValue=function(){return 0==this.t?this.s:this.data[0]<<16>>16},i.prototype.signum=function(){return this.s<0?-1:this.t<=0||1==this.t&&this.data[0]<=0?0:1},i.prototype.toByteArray=function(){var e=this.t,t=new Array;t[0]=this.s;var r,a=this.DB-e*this.DB%8,n=0;if(e-- >0)for(a<this.DB&&(r=this.data[e]>>a)!=(this.s&this.DM)>>a&&(t[n++]=r|this.s<<this.DB-a);e>=0;)a<8?(r=(this.data[e]&(1<<a)-1)<<8-a,r|=this.data[--e]>>(a+=this.DB-8)):(r=this.data[e]>>(a-=8)&255,a<=0&&(a+=this.DB,--e)),0!=(128&r)&&(r|=-256),0==n&&(128&this.s)!=(128&r)&&++n,(n>0||r!=this.s)&&(t[n++]=r);return t},i.prototype.equals=function(e){return 0==this.compareTo(e)},i.prototype.min=function(e){return this.compareTo(e)<0?this:e},i.prototype.max=function(e){return this.compareTo(e)>0?this:e},i.prototype.and=function(e){var t=s();return this.bitwiseTo(e,v,t),t},i.prototype.or=function(e){var t=s();return this.bitwiseTo(e,m,t),t},i.prototype.xor=function(e){var t=s();return this.bitwiseTo(e,C,t),t},i.prototype.andNot=function(e){var t=s();return this.bitwiseTo(e,E,t),t},i.prototype.not=function(){for(var e=s(),t=0;t<this.t;++t)e.data[t]=this.DM&~this.data[t];return e.t=this.t,e.s=~this.s,e},i.prototype.shiftLeft=function(e){var t=s();return e<0?this.rShiftTo(-e,t):this.lShiftTo(e,t),t},i.prototype.shiftRight=function(e){var t=s();return e<0?this.lShiftTo(-e,t):this.rShiftTo(e,t),t},i.prototype.getLowestSetBit=function(){for(var e=0;e<this.t;++e)if(0!=this.data[e])return e*this.DB+S(this.data[e]);return this.s<0?this.t*this.DB:-1},i.prototype.bitCount=function(){for(var e=0,t=this.s&this.DM,r=0;r<this.t;++r)e+=T(this.data[r]^t);return e},i.prototype.testBit=function(e){var t=Math.floor(e/this.DB);return t>=this.t?0!=this.s:0!=(this.data[t]&1<<e%this.DB)},i.prototype.setBit=function(e){return this.changeBit(e,m)},i.prototype.clearBit=function(e){return this.changeBit(e,E)},i.prototype.flipBit=function(e){return this.changeBit(e,C)},i.prototype.add=function(e){var t=s();return this.addTo(e,t),t},i.prototype.subtract=function(e){var t=s();return this.subTo(e,t),t},i.prototype.multiply=function(e){var t=s();return this.multiplyTo(e,t),t},i.prototype.divide=function(e){var t=s();return this.divRemTo(e,t,null),t},i.prototype.remainder=function(e){var t=s();return this.divRemTo(e,null,t),t},i.prototype.divideAndRemainder=function(e){var t=s(),r=s();return this.divRemTo(e,t,r),new Array(t,r)},i.prototype.modPow=function(e,t){var r,a,n=e.bitLength(),i=h(1);if(n<=0)return i;r=n<18?1:n<48?3:n<144?4:n<768?5:6,a=n<8?new y(t):t.isEven()?new B(t):new g(t);var o=new Array,c=3,u=r-1,l=(1<<r)-1;if(o[1]=a.convert(this),r>1){var p=s();for(a.sqrTo(o[1],p);c<=l;)o[c]=s(),a.mulTo(p,o[c-2],o[c]),c+=2}var f,v,m=e.t-1,C=!0,E=s();for(n=d(e.data[m])-1;m>=0;){for(n>=u?f=e.data[m]>>n-u&l:(f=(e.data[m]&(1<<n+1)-1)<<u-n,m>0&&(f|=e.data[m-1]>>this.DB+n-u)),c=r;0==(1&f);)f>>=1,--c;if((n-=c)<0&&(n+=this.DB,--m),C)o[f].copyTo(i),C=!1;else{for(;c>1;)a.sqrTo(i,E),a.sqrTo(E,i),c-=2;c>0?a.sqrTo(i,E):(v=i,i=E,E=v),a.mulTo(E,o[f],i)}for(;m>=0&&0==(e.data[m]&1<<n);)a.sqrTo(i,E),v=i,i=E,E=v,--n<0&&(n=this.DB-1,--m)}return a.revert(i)},i.prototype.modInverse=function(e){var t=e.isEven();if(this.isEven()&&t||0==e.signum())return i.ZERO;for(var r=e.clone(),a=this.clone(),n=h(1),s=h(0),o=h(0),c=h(1);0!=r.signum();){for(;r.isEven();)r.rShiftTo(1,r),t?(n.isEven()&&s.isEven()||(n.addTo(this,n),s.subTo(e,s)),n.rShiftTo(1,n)):s.isEven()||s.subTo(e,s),s.rShiftTo(1,s);for(;a.isEven();)a.rShiftTo(1,a),t?(o.isEven()&&c.isEven()||(o.addTo(this,o),c.subTo(e,c)),o.rShiftTo(1,o)):c.isEven()||c.subTo(e,c),c.rShiftTo(1,c);r.compareTo(a)>=0?(r.subTo(a,r),t&&n.subTo(o,n),s.subTo(c,s)):(a.subTo(r,a),t&&o.subTo(n,o),c.subTo(s,c))}return 0!=a.compareTo(i.ONE)?i.ZERO:c.compareTo(e)>=0?c.subtract(e):c.signum()<0?(c.addTo(e,c),c.signum()<0?c.add(e):c):c},i.prototype.pow=function(e){return this.exp(e,new I)},i.prototype.gcd=function(e){var t=this.s<0?this.negate():this.clone(),r=e.s<0?e.negate():e.clone();if(t.compareTo(r)<0){var a=t;t=r,r=a}var n=t.getLowestSetBit(),i=r.getLowestSetBit();if(i<0)return t;for(n<i&&(i=n),i>0&&(t.rShiftTo(i,t),r.rShiftTo(i,r));t.signum()>0;)(n=t.getLowestSetBit())>0&&t.rShiftTo(n,t),(n=r.getLowestSetBit())>0&&r.rShiftTo(n,r),t.compareTo(r)>=0?(t.subTo(r,t),t.rShiftTo(1,t)):(r.subTo(t,r),r.rShiftTo(1,r));return i>0&&r.lShiftTo(i,r),r},i.prototype.isProbablePrime=function(e){var t,r=this.abs();if(1==r.t&&r.data[0]<=b[b.length-1]){for(t=0;t<b.length;++t)if(r.data[0]==b[t])return!0;return!1}if(r.isEven())return!1;for(t=1;t<b.length;){for(var a=b[t],n=t+1;n<b.length&&a<N;)a*=b[n++];for(a=r.modInt(a);t<n;)if(a%b[t++]==0)return!1}return r.millerRabin(e)}},function(e,t,r){var a=r(0);r(1),e.exports=a.cipher=a.cipher||{},a.cipher.algorithms=a.cipher.algorithms||{},a.cipher.createCipher=function(e,t){var r=e;if("string"==typeof r&&(r=a.cipher.getAlgorithm(r))&&(r=r()),!r)throw new Error("Unsupported algorithm: "+e);return new a.cipher.BlockCipher({algorithm:r,key:t,decrypt:!1})},a.cipher.createDecipher=function(e,t){var r=e;if("string"==typeof r&&(r=a.cipher.getAlgorithm(r))&&(r=r()),!r)throw new Error("Unsupported algorithm: "+e);return new a.cipher.BlockCipher({algorithm:r,key:t,decrypt:!0})},a.cipher.registerAlgorithm=function(e,t){e=e.toUpperCase(),a.cipher.algorithms[e]=t},a.cipher.getAlgorithm=function(e){return(e=e.toUpperCase())in a.cipher.algorithms?a.cipher.algorithms[e]:null};var n=a.cipher.BlockCipher=function(e){this.algorithm=e.algorithm,this.mode=this.algorithm.mode,this.blockSize=this.mode.blockSize,this._finish=!1,this._input=null,this.output=null,this._op=e.decrypt?this.mode.decrypt:this.mode.encrypt,this._decrypt=e.decrypt,this.algorithm.initialize(e)};n.prototype.start=function(e){e=e||{};var t={};for(var r in e)t[r]=e[r];t.decrypt=this._decrypt,this._finish=!1,this._input=a.util.createBuffer(),this.output=e.output||a.util.createBuffer(),this.mode.start(t)},n.prototype.update=function(e){for(e&&this._input.putBuffer(e);!this._op.call(this.mode,this._input,this.output,this._finish)&&!this._finish;);this._input.compact()},n.prototype.finish=function(e){!e||"ECB"!==this.mode.name&&"CBC"!==this.mode.name||(this.mode.pad=function(t){return e(this.blockSize,t,!1)},this.mode.unpad=function(t){return e(this.blockSize,t,!0)});var t={};return t.decrypt=this._decrypt,t.overflow=this._input.length()%this.blockSize,!(!this._decrypt&&this.mode.pad&&!this.mode.pad(this._input,t))&&(this._finish=!0,this.update(),!(this._decrypt&&this.mode.unpad&&!this.mode.unpad(this.output,t))&&!(this.mode.afterFinish&&!this.mode.afterFinish(this.output,t)))}},function(e,t,r){var a=r(0);r(4),r(1);var n=e.exports=a.md5=a.md5||{};a.md.md5=a.md.algorithms.md5=n,n.create=function(){u||function(){i=String.fromCharCode(128),i+=a.util.fillString(String.fromCharCode(0),64),s=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,6,11,0,5,10,15,4,9,14,3,8,13,2,7,12,5,8,11,14,1,4,7,10,13,0,3,6,9,12,15,2,0,7,14,5,12,3,10,1,8,15,6,13,4,11,2,9],o=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],c=new Array(64);for(var e=0;e<64;++e)c[e]=Math.floor(4294967296*Math.abs(Math.sin(e+1)));u=!0}();var e=null,t=a.util.createBuffer(),r=new Array(16),n={algorithm:"md5",blockLength:64,digestLength:16,messageLength:0,fullMessageLength:null,messageLengthSize:8,start:function(){n.messageLength=0,n.fullMessageLength=n.messageLength64=[];for(var r=n.messageLengthSize/4,i=0;i<r;++i)n.fullMessageLength.push(0);return t=a.util.createBuffer(),e={h0:1732584193,h1:4023233417,h2:2562383102,h3:271733878},n}};return n.start(),n.update=function(i,s){"utf8"===s&&(i=a.util.encodeUtf8(i));var o=i.length;n.messageLength+=o,o=[o/4294967296>>>0,o>>>0];for(var c=n.fullMessageLength.length-1;c>=0;--c)n.fullMessageLength[c]+=o[1],o[1]=o[0]+(n.fullMessageLength[c]/4294967296>>>0),n.fullMessageLength[c]=n.fullMessageLength[c]>>>0,o[0]=o[1]/4294967296>>>0;return t.putBytes(i),l(e,r,t),(t.read>2048||0===t.length())&&t.compact(),n},n.digest=function(){var s=a.util.createBuffer();s.putBytes(t.bytes());var o=n.fullMessageLength[n.fullMessageLength.length-1]+n.messageLengthSize&n.blockLength-1;s.putBytes(i.substr(0,n.blockLength-o));for(var c,u=0,p=n.fullMessageLength.length-1;p>=0;--p)u=(c=8*n.fullMessageLength[p]+u)/4294967296>>>0,s.putInt32Le(c>>>0);var f={h0:e.h0,h1:e.h1,h2:e.h2,h3:e.h3};l(f,r,s);var h=a.util.createBuffer();return h.putInt32Le(f.h0),h.putInt32Le(f.h1),h.putInt32Le(f.h2),h.putInt32Le(f.h3),h},n};var i=null,s=null,o=null,c=null,u=!1;function l(e,t,r){for(var a,n,i,u,l,p,f,h=r.length();h>=64;){for(n=e.h0,i=e.h1,u=e.h2,l=e.h3,f=0;f<16;++f)t[f]=r.getInt32Le(),a=n+(l^i&(u^l))+c[f]+t[f],n=l,l=u,u=i,i+=a<<(p=o[f])|a>>>32-p;for(;f<32;++f)a=n+(u^l&(i^u))+c[f]+t[s[f]],n=l,l=u,u=i,i+=a<<(p=o[f])|a>>>32-p;for(;f<48;++f)a=n+(i^u^l)+c[f]+t[s[f]],n=l,l=u,u=i,i+=a<<(p=o[f])|a>>>32-p;for(;f<64;++f)a=n+(u^(i|~l))+c[f]+t[s[f]],n=l,l=u,u=i,i+=a<<(p=o[f])|a>>>32-p;e.h0=e.h0+n|0,e.h1=e.h1+i|0,e.h2=e.h2+u|0,e.h3=e.h3+l|0,h-=64}}},function(e,t,r){var a=r(0);r(8),r(4),r(1);var n,i=a.pkcs5=a.pkcs5||{};a.util.isNodejs&&!a.options.usePureJavaScript&&(n=r(16)),e.exports=a.pbkdf2=i.pbkdf2=function(e,t,r,i,s,o){if("function"==typeof s&&(o=s,s=null),a.util.isNodejs&&!a.options.usePureJavaScript&&n.pbkdf2&&(null===s||"object"!=typeof s)&&(n.pbkdf2Sync.length>4||!s||"sha1"===s))return"string"!=typeof s&&(s="sha1"),e=Buffer.from(e,"binary"),t=Buffer.from(t,"binary"),o?4===n.pbkdf2Sync.length?n.pbkdf2(e,t,r,i,(function(e,t){if(e)return o(e);o(null,t.toString("binary"))})):n.pbkdf2(e,t,r,i,s,(function(e,t){if(e)return o(e);o(null,t.toString("binary"))})):4===n.pbkdf2Sync.length?n.pbkdf2Sync(e,t,r,i).toString("binary"):n.pbkdf2Sync(e,t,r,i,s).toString("binary");if(null==s&&(s="sha1"),"string"==typeof s){if(!(s in a.md.algorithms))throw new Error("Unknown hash algorithm: "+s);s=a.md[s].create()}var c=s.digestLength;if(i>4294967295*c){var u=new Error("Derived key is too long.");if(o)return o(u);throw u}var l=Math.ceil(i/c),p=i-(l-1)*c,f=a.hmac.create();f.start(s,e);var h,d,y,g="";if(!o){for(var v=1;v<=l;++v){f.start(null,null),f.update(t),f.update(a.util.int32ToBytes(v)),h=y=f.digest().getBytes();for(var m=2;m<=r;++m)f.start(null,null),f.update(y),d=f.digest().getBytes(),h=a.util.xorBytes(h,d,c),y=d;g+=v<l?h:h.substr(0,p)}return g}v=1;function C(){if(v>l)return o(null,g);f.start(null,null),f.update(t),f.update(a.util.int32ToBytes(v)),h=y=f.digest().getBytes(),m=2,E()}function E(){if(m<=r)return f.start(null,null),f.update(y),d=f.digest().getBytes(),h=a.util.xorBytes(h,d,c),y=d,++m,a.util.setImmediate(E);g+=v<l?h:h.substr(0,p),++v,C()}C()}},function(e,t){},function(e,t,r){var a=r(0);r(5),r(3),r(10),r(4),r(37),r(6),r(7),r(18),r(11),r(1);var n=a.asn1,i=e.exports=a.pki=a.pki||{},s=i.oids,o={};o.CN=s.commonName,o.commonName="CN",o.C=s.countryName,o.countryName="C",o.L=s.localityName,o.localityName="L",o.ST=s.stateOrProvinceName,o.stateOrProvinceName="ST",o.O=s.organizationName,o.organizationName="O",o.OU=s.organizationalUnitName,o.organizationalUnitName="OU",o.E=s.emailAddress,o.emailAddress="E";var c=a.pki.rsa.publicKeyValidator,u={name:"Certificate",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.TBSCertificate",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"tbsCertificate",value:[{name:"Certificate.TBSCertificate.version",tagClass:n.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.version.integer",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"certVersion"}]},{name:"Certificate.TBSCertificate.serialNumber",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"certSerialNumber"},{name:"Certificate.TBSCertificate.signature",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.TBSCertificate.signature.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"certinfoSignatureOid"},{name:"Certificate.TBSCertificate.signature.parameters",tagClass:n.Class.UNIVERSAL,optional:!0,captureAsn1:"certinfoSignatureParams"}]},{name:"Certificate.TBSCertificate.issuer",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"certIssuer"},{name:"Certificate.TBSCertificate.validity",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.TBSCertificate.validity.notBefore (utc)",tagClass:n.Class.UNIVERSAL,type:n.Type.UTCTIME,constructed:!1,optional:!0,capture:"certValidity1UTCTime"},{name:"Certificate.TBSCertificate.validity.notBefore (generalized)",tagClass:n.Class.UNIVERSAL,type:n.Type.GENERALIZEDTIME,constructed:!1,optional:!0,capture:"certValidity2GeneralizedTime"},{name:"Certificate.TBSCertificate.validity.notAfter (utc)",tagClass:n.Class.UNIVERSAL,type:n.Type.UTCTIME,constructed:!1,optional:!0,capture:"certValidity3UTCTime"},{name:"Certificate.TBSCertificate.validity.notAfter (generalized)",tagClass:n.Class.UNIVERSAL,type:n.Type.GENERALIZEDTIME,constructed:!1,optional:!0,capture:"certValidity4GeneralizedTime"}]},{name:"Certificate.TBSCertificate.subject",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"certSubject"},c,{name:"Certificate.TBSCertificate.issuerUniqueID",tagClass:n.Class.CONTEXT_SPECIFIC,type:1,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.issuerUniqueID.id",tagClass:n.Class.UNIVERSAL,type:n.Type.BITSTRING,constructed:!1,captureBitStringValue:"certIssuerUniqueId"}]},{name:"Certificate.TBSCertificate.subjectUniqueID",tagClass:n.Class.CONTEXT_SPECIFIC,type:2,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.subjectUniqueID.id",tagClass:n.Class.UNIVERSAL,type:n.Type.BITSTRING,constructed:!1,captureBitStringValue:"certSubjectUniqueId"}]},{name:"Certificate.TBSCertificate.extensions",tagClass:n.Class.CONTEXT_SPECIFIC,type:3,constructed:!0,captureAsn1:"certExtensions",optional:!0}]},{name:"Certificate.signatureAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.signatureAlgorithm.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"certSignatureOid"},{name:"Certificate.TBSCertificate.signature.parameters",tagClass:n.Class.UNIVERSAL,optional:!0,captureAsn1:"certSignatureParams"}]},{name:"Certificate.signatureValue",tagClass:n.Class.UNIVERSAL,type:n.Type.BITSTRING,constructed:!1,captureBitStringValue:"certSignature"}]},l={name:"rsapss",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"rsapss.hashAlgorithm",tagClass:n.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,value:[{name:"rsapss.hashAlgorithm.AlgorithmIdentifier",tagClass:n.Class.UNIVERSAL,type:n.Class.SEQUENCE,constructed:!0,optional:!0,value:[{name:"rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"hashOid"}]}]},{name:"rsapss.maskGenAlgorithm",tagClass:n.Class.CONTEXT_SPECIFIC,type:1,constructed:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier",tagClass:n.Class.UNIVERSAL,type:n.Class.SEQUENCE,constructed:!0,optional:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"maskGenOid"},{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"maskGenHashOid"}]}]}]},{name:"rsapss.saltLength",tagClass:n.Class.CONTEXT_SPECIFIC,type:2,optional:!0,value:[{name:"rsapss.saltLength.saltLength",tagClass:n.Class.UNIVERSAL,type:n.Class.INTEGER,constructed:!1,capture:"saltLength"}]},{name:"rsapss.trailerField",tagClass:n.Class.CONTEXT_SPECIFIC,type:3,optional:!0,value:[{name:"rsapss.trailer.trailer",tagClass:n.Class.UNIVERSAL,type:n.Class.INTEGER,constructed:!1,capture:"trailer"}]}]},p={name:"CertificationRequestInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"certificationRequestInfo",value:[{name:"CertificationRequestInfo.integer",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"certificationRequestInfoVersion"},{name:"CertificationRequestInfo.subject",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"certificationRequestInfoSubject"},c,{name:"CertificationRequestInfo.attributes",tagClass:n.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,capture:"certificationRequestInfoAttributes",value:[{name:"CertificationRequestInfo.attributes",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"CertificationRequestInfo.attributes.type",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1},{name:"CertificationRequestInfo.attributes.value",tagClass:n.Class.UNIVERSAL,type:n.Type.SET,constructed:!0}]}]}]},f={name:"CertificationRequest",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"csr",value:[p,{name:"CertificationRequest.signatureAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"CertificationRequest.signatureAlgorithm.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"csrSignatureOid"},{name:"CertificationRequest.signatureAlgorithm.parameters",tagClass:n.Class.UNIVERSAL,optional:!0,captureAsn1:"csrSignatureParams"}]},{name:"CertificationRequest.signature",tagClass:n.Class.UNIVERSAL,type:n.Type.BITSTRING,constructed:!1,captureBitStringValue:"csrSignature"}]};function h(e,t){"string"==typeof t&&(t={shortName:t});for(var r,a=null,n=0;null===a&&n<e.attributes.length;++n)r=e.attributes[n],(t.type&&t.type===r.type||t.name&&t.name===r.name||t.shortName&&t.shortName===r.shortName)&&(a=r);return a}i.RDNAttributesAsArray=function(e,t){for(var r,a,i,c=[],u=0;u<e.value.length;++u){r=e.value[u];for(var l=0;l<r.value.length;++l)i={},a=r.value[l],i.type=n.derToOid(a.value[0].value),i.value=a.value[1].value,i.valueTagClass=a.value[1].type,i.type in s&&(i.name=s[i.type],i.name in o&&(i.shortName=o[i.name])),t&&(t.update(i.type),t.update(i.value)),c.push(i)}return c},i.CRIAttributesAsArray=function(e){for(var t=[],r=0;r<e.length;++r)for(var a=e[r],c=n.derToOid(a.value[0].value),u=a.value[1].value,l=0;l<u.length;++l){var p={};if(p.type=c,p.value=u[l].value,p.valueTagClass=u[l].type,p.type in s&&(p.name=s[p.type],p.name in o&&(p.shortName=o[p.name])),p.type===s.extensionRequest){p.extensions=[];for(var f=0;f<p.value.length;++f)p.extensions.push(i.certificateExtensionFromAsn1(p.value[f]))}t.push(p)}return t};var d=function(e,t,r){var a={};if(e!==s["RSASSA-PSS"])return a;r&&(a={hash:{algorithmOid:s.sha1},mgf:{algorithmOid:s.mgf1,hash:{algorithmOid:s.sha1}},saltLength:20});var i={},o=[];if(!n.validate(t,l,i,o)){var c=new Error("Cannot read RSASSA-PSS parameter block.");throw c.errors=o,c}return void 0!==i.hashOid&&(a.hash=a.hash||{},a.hash.algorithmOid=n.derToOid(i.hashOid)),void 0!==i.maskGenOid&&(a.mgf=a.mgf||{},a.mgf.algorithmOid=n.derToOid(i.maskGenOid),a.mgf.hash=a.mgf.hash||{},a.mgf.hash.algorithmOid=n.derToOid(i.maskGenHashOid)),void 0!==i.saltLength&&(a.saltLength=i.saltLength.charCodeAt(0)),a},y=function(e){switch(s[e.signatureOid]){case"sha1WithRSAEncryption":case"sha1WithRSASignature":return a.md.sha1.create();case"md5WithRSAEncryption":return a.md.md5.create();case"sha256WithRSAEncryption":return a.md.sha256.create();case"sha384WithRSAEncryption":return a.md.sha384.create();case"sha512WithRSAEncryption":return a.md.sha512.create();case"RSASSA-PSS":return a.md.sha256.create();default:var t=new Error("Could not compute "+e.type+" digest. Unknown signature OID.");throw t.signatureOid=e.signatureOid,t}},g=function(e){var t,r=e.certificate;switch(r.signatureOid){case s.sha1WithRSAEncryption:case s.sha1WithRSASignature:break;case s["RSASSA-PSS"]:var n,i,o;if(void 0===(n=s[r.signatureParameters.mgf.hash.algorithmOid])||void 0===a.md[n])throw(o=new Error("Unsupported MGF hash function.")).oid=r.signatureParameters.mgf.hash.algorithmOid,o.name=n,o;if(void 0===(i=s[r.signatureParameters.mgf.algorithmOid])||void 0===a.mgf[i])throw(o=new Error("Unsupported MGF function.")).oid=r.signatureParameters.mgf.algorithmOid,o.name=i,o;if(i=a.mgf[i].create(a.md[n].create()),void 0===(n=s[r.signatureParameters.hash.algorithmOid])||void 0===a.md[n])throw(o=new Error("Unsupported RSASSA-PSS hash function.")).oid=r.signatureParameters.hash.algorithmOid,o.name=n,o;t=a.pss.create(a.md[n].create(),i,r.signatureParameters.saltLength)}return r.publicKey.verify(e.md.digest().getBytes(),e.signature,t)};function v(e){for(var t,r,i=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]),s=e.attributes,o=0;o<s.length;++o){var c=(t=s[o]).value,u=n.Type.PRINTABLESTRING;"valueTagClass"in t&&(u=t.valueTagClass)===n.Type.UTF8&&(c=a.util.encodeUtf8(c)),r=n.create(n.Class.UNIVERSAL,n.Type.SET,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(t.type).getBytes()),n.create(n.Class.UNIVERSAL,u,!1,c)])]),i.value.push(r)}return i}function m(e){for(var t,r=0;r<e.length;++r){if(void 0===(t=e[r]).name&&(t.type&&t.type in i.oids?t.name=i.oids[t.type]:t.shortName&&t.shortName in o&&(t.name=i.oids[o[t.shortName]])),void 0===t.type){if(!t.name||!(t.name in i.oids))throw(c=new Error("Attribute type not specified.")).attribute=t,c;t.type=i.oids[t.name]}if(void 0===t.shortName&&t.name&&t.name in o&&(t.shortName=o[t.name]),t.type===s.extensionRequest&&(t.valueConstructed=!0,t.valueTagClass=n.Type.SEQUENCE,!t.value&&t.extensions)){t.value=[];for(var a=0;a<t.extensions.length;++a)t.value.push(i.certificateExtensionToAsn1(C(t.extensions[a])))}var c;if(void 0===t.value)throw(c=new Error("Attribute value not specified.")).attribute=t,c}}function C(e,t){if(t=t||{},void 0===e.name&&e.id&&e.id in i.oids&&(e.name=i.oids[e.id]),void 0===e.id){if(!e.name||!(e.name in i.oids))throw(S=new Error("Extension ID not specified.")).extension=e,S;e.id=i.oids[e.name]}if(void 0!==e.value)return e;if("keyUsage"===e.name){var r=0,o=0,c=0;e.digitalSignature&&(o|=128,r=7),e.nonRepudiation&&(o|=64,r=6),e.keyEncipherment&&(o|=32,r=5),e.dataEncipherment&&(o|=16,r=4),e.keyAgreement&&(o|=8,r=3),e.keyCertSign&&(o|=4,r=2),e.cRLSign&&(o|=2,r=1),e.encipherOnly&&(o|=1,r=0),e.decipherOnly&&(c|=128,r=7);var u=String.fromCharCode(r);0!==c?u+=String.fromCharCode(o)+String.fromCharCode(c):0!==o&&(u+=String.fromCharCode(o)),e.value=n.create(n.Class.UNIVERSAL,n.Type.BITSTRING,!1,u)}else if("basicConstraints"===e.name)e.value=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]),e.cA&&e.value.value.push(n.create(n.Class.UNIVERSAL,n.Type.BOOLEAN,!1,String.fromCharCode(255))),"pathLenConstraint"in e&&e.value.value.push(n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(e.pathLenConstraint).getBytes()));else if("extKeyUsage"===e.name){e.value=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]);var l=e.value.value;for(var p in e)!0===e[p]&&(p in s?l.push(n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(s[p]).getBytes())):-1!==p.indexOf(".")&&l.push(n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(p).getBytes())))}else if("nsCertType"===e.name){r=0,o=0;e.client&&(o|=128,r=7),e.server&&(o|=64,r=6),e.email&&(o|=32,r=5),e.objsign&&(o|=16,r=4),e.reserved&&(o|=8,r=3),e.sslCA&&(o|=4,r=2),e.emailCA&&(o|=2,r=1),e.objCA&&(o|=1,r=0);u=String.fromCharCode(r);0!==o&&(u+=String.fromCharCode(o)),e.value=n.create(n.Class.UNIVERSAL,n.Type.BITSTRING,!1,u)}else if("subjectAltName"===e.name||"issuerAltName"===e.name){e.value=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]);for(var f=0;f<e.altNames.length;++f){u=(m=e.altNames[f]).value;if(7===m.type&&m.ip){if(null===(u=a.util.bytesFromIP(m.ip)))throw(S=new Error('Extension "ip" value is not a valid IPv4 or IPv6 address.')).extension=e,S}else 8===m.type&&(u=m.oid?n.oidToDer(n.oidToDer(m.oid)):n.oidToDer(u));e.value.value.push(n.create(n.Class.CONTEXT_SPECIFIC,m.type,!1,u))}}else if("nsComment"===e.name&&t.cert){if(!/^[\x00-\x7F]*$/.test(e.comment)||e.comment.length<1||e.comment.length>128)throw new Error('Invalid "nsComment" content.');e.value=n.create(n.Class.UNIVERSAL,n.Type.IA5STRING,!1,e.comment)}else if("subjectKeyIdentifier"===e.name&&t.cert){var h=t.cert.generateSubjectKeyIdentifier();e.subjectKeyIdentifier=h.toHex(),e.value=n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,h.getBytes())}else if("authorityKeyIdentifier"===e.name&&t.cert){e.value=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]);l=e.value.value;if(e.keyIdentifier){var d=!0===e.keyIdentifier?t.cert.generateSubjectKeyIdentifier().getBytes():e.keyIdentifier;l.push(n.create(n.Class.CONTEXT_SPECIFIC,0,!1,d))}if(e.authorityCertIssuer){var y=[n.create(n.Class.CONTEXT_SPECIFIC,4,!0,[v(!0===e.authorityCertIssuer?t.cert.issuer:e.authorityCertIssuer)])];l.push(n.create(n.Class.CONTEXT_SPECIFIC,1,!0,y))}if(e.serialNumber){var g=a.util.hexToBytes(!0===e.serialNumber?t.cert.serialNumber:e.serialNumber);l.push(n.create(n.Class.CONTEXT_SPECIFIC,2,!1,g))}}else if("cRLDistributionPoints"===e.name){e.value=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]);l=e.value.value;var m,C=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]),E=n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[]);for(f=0;f<e.altNames.length;++f){u=(m=e.altNames[f]).value;if(7===m.type&&m.ip){if(null===(u=a.util.bytesFromIP(m.ip)))throw(S=new Error('Extension "ip" value is not a valid IPv4 or IPv6 address.')).extension=e,S}else 8===m.type&&(u=m.oid?n.oidToDer(n.oidToDer(m.oid)):n.oidToDer(u));E.value.push(n.create(n.Class.CONTEXT_SPECIFIC,m.type,!1,u))}C.value.push(n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[E])),l.push(C)}var S;if(void 0===e.value)throw(S=new Error("Extension value not specified.")).extension=e,S;return e}function E(e,t){switch(e){case s["RSASSA-PSS"]:var r=[];return void 0!==t.hash.algorithmOid&&r.push(n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(t.hash.algorithmOid).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")])])),void 0!==t.mgf.algorithmOid&&r.push(n.create(n.Class.CONTEXT_SPECIFIC,1,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(t.mgf.algorithmOid).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(t.mgf.hash.algorithmOid).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")])])])),void 0!==t.saltLength&&r.push(n.create(n.Class.CONTEXT_SPECIFIC,2,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(t.saltLength).getBytes())])),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,r);default:return n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")}}function S(e){var t=n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[]);if(0===e.attributes.length)return t;for(var r=e.attributes,i=0;i<r.length;++i){var s=r[i],o=s.value,c=n.Type.UTF8;"valueTagClass"in s&&(c=s.valueTagClass),c===n.Type.UTF8&&(o=a.util.encodeUtf8(o));var u=!1;"valueConstructed"in s&&(u=s.valueConstructed);var l=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(s.type).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SET,!0,[n.create(n.Class.UNIVERSAL,c,u,o)])]);t.value.push(l)}return t}i.certificateFromPem=function(e,t,r){var s=a.pem.decode(e)[0];if("CERTIFICATE"!==s.type&&"X509 CERTIFICATE"!==s.type&&"TRUSTED CERTIFICATE"!==s.type){var o=new Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');throw o.headerType=s.type,o}if(s.procType&&"ENCRYPTED"===s.procType.type)throw new Error("Could not convert certificate from PEM; PEM is encrypted.");var c=n.fromDer(s.body,r);return i.certificateFromAsn1(c,t)},i.certificateToPem=function(e,t){var r={type:"CERTIFICATE",body:n.toDer(i.certificateToAsn1(e)).getBytes()};return a.pem.encode(r,{maxline:t})},i.publicKeyFromPem=function(e){var t=a.pem.decode(e)[0];if("PUBLIC KEY"!==t.type&&"RSA PUBLIC KEY"!==t.type){var r=new Error('Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".');throw r.headerType=t.type,r}if(t.procType&&"ENCRYPTED"===t.procType.type)throw new Error("Could not convert public key from PEM; PEM is encrypted.");var s=n.fromDer(t.body);return i.publicKeyFromAsn1(s)},i.publicKeyToPem=function(e,t){var r={type:"PUBLIC KEY",body:n.toDer(i.publicKeyToAsn1(e)).getBytes()};return a.pem.encode(r,{maxline:t})},i.publicKeyToRSAPublicKeyPem=function(e,t){var r={type:"RSA PUBLIC KEY",body:n.toDer(i.publicKeyToRSAPublicKey(e)).getBytes()};return a.pem.encode(r,{maxline:t})},i.getPublicKeyFingerprint=function(e,t){var r,s=(t=t||{}).md||a.md.sha1.create();switch(t.type||"RSAPublicKey"){case"RSAPublicKey":r=n.toDer(i.publicKeyToRSAPublicKey(e)).getBytes();break;case"SubjectPublicKeyInfo":r=n.toDer(i.publicKeyToAsn1(e)).getBytes();break;default:throw new Error('Unknown fingerprint type "'+t.type+'".')}s.start(),s.update(r);var o=s.digest();if("hex"===t.encoding){var c=o.toHex();return t.delimiter?c.match(/.{2}/g).join(t.delimiter):c}if("binary"===t.encoding)return o.getBytes();if(t.encoding)throw new Error('Unknown encoding "'+t.encoding+'".');return o},i.certificationRequestFromPem=function(e,t,r){var s=a.pem.decode(e)[0];if("CERTIFICATE REQUEST"!==s.type){var o=new Error('Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".');throw o.headerType=s.type,o}if(s.procType&&"ENCRYPTED"===s.procType.type)throw new Error("Could not convert certification request from PEM; PEM is encrypted.");var c=n.fromDer(s.body,r);return i.certificationRequestFromAsn1(c,t)},i.certificationRequestToPem=function(e,t){var r={type:"CERTIFICATE REQUEST",body:n.toDer(i.certificationRequestToAsn1(e)).getBytes()};return a.pem.encode(r,{maxline:t})},i.createCertificate=function(){var e={version:2,serialNumber:"00",signatureOid:null,signature:null,siginfo:{}};return e.siginfo.algorithmOid=null,e.validity={},e.validity.notBefore=new Date,e.validity.notAfter=new Date,e.issuer={},e.issuer.getField=function(t){return h(e.issuer,t)},e.issuer.addField=function(t){m([t]),e.issuer.attributes.push(t)},e.issuer.attributes=[],e.issuer.hash=null,e.subject={},e.subject.getField=function(t){return h(e.subject,t)},e.subject.addField=function(t){m([t]),e.subject.attributes.push(t)},e.subject.attributes=[],e.subject.hash=null,e.extensions=[],e.publicKey=null,e.md=null,e.setSubject=function(t,r){m(t),e.subject.attributes=t,delete e.subject.uniqueId,r&&(e.subject.uniqueId=r),e.subject.hash=null},e.setIssuer=function(t,r){m(t),e.issuer.attributes=t,delete e.issuer.uniqueId,r&&(e.issuer.uniqueId=r),e.issuer.hash=null},e.setExtensions=function(t){for(var r=0;r<t.length;++r)C(t[r],{cert:e});e.extensions=t},e.getExtension=function(t){"string"==typeof t&&(t={name:t});for(var r,a=null,n=0;null===a&&n<e.extensions.length;++n)r=e.extensions[n],(t.id&&r.id===t.id||t.name&&r.name===t.name)&&(a=r);return a},e.sign=function(t,r){e.md=r||a.md.sha1.create();var o=s[e.md.algorithm+"WithRSAEncryption"];if(!o){var c=new Error("Could not compute certificate digest. Unknown message digest algorithm OID.");throw c.algorithm=e.md.algorithm,c}e.signatureOid=e.siginfo.algorithmOid=o,e.tbsCertificate=i.getTBSCertificate(e);var u=n.toDer(e.tbsCertificate);e.md.update(u.getBytes()),e.signature=t.sign(e.md)},e.verify=function(t){var r=!1;if(!e.issued(t)){var a=t.issuer,s=e.subject,o=new Error("The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject.");throw o.expectedIssuer=s.attributes,o.actualIssuer=a.attributes,o}var c=t.md;if(null===c){c=y({signatureOid:t.signatureOid,type:"certificate"});var u=t.tbsCertificate||i.getTBSCertificate(t),l=n.toDer(u);c.update(l.getBytes())}return null!==c&&(r=g({certificate:e,md:c,signature:t.signature})),r},e.isIssuer=function(t){var r=!1,a=e.issuer,n=t.subject;if(a.hash&&n.hash)r=a.hash===n.hash;else if(a.attributes.length===n.attributes.length){var i,s;r=!0;for(var o=0;r&&o<a.attributes.length;++o)i=a.attributes[o],s=n.attributes[o],i.type===s.type&&i.value===s.value||(r=!1)}return r},e.issued=function(t){return t.isIssuer(e)},e.generateSubjectKeyIdentifier=function(){return i.getPublicKeyFingerprint(e.publicKey,{type:"RSAPublicKey"})},e.verifySubjectKeyIdentifier=function(){for(var t=s.subjectKeyIdentifier,r=0;r<e.extensions.length;++r){var n=e.extensions[r];if(n.id===t){var i=e.generateSubjectKeyIdentifier().getBytes();return a.util.hexToBytes(n.subjectKeyIdentifier)===i}}return!1},e},i.certificateFromAsn1=function(e,t){var r={},s=[];if(!n.validate(e,u,r,s)){var o=new Error("Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.");throw o.errors=s,o}if(n.derToOid(r.publicKeyOid)!==i.oids.rsaEncryption)throw new Error("Cannot read public key. OID is not RSA.");var c=i.createCertificate();c.version=r.certVersion?r.certVersion.charCodeAt(0):0;var l=a.util.createBuffer(r.certSerialNumber);c.serialNumber=l.toHex(),c.signatureOid=a.asn1.derToOid(r.certSignatureOid),c.signatureParameters=d(c.signatureOid,r.certSignatureParams,!0),c.siginfo.algorithmOid=a.asn1.derToOid(r.certinfoSignatureOid),c.siginfo.parameters=d(c.siginfo.algorithmOid,r.certinfoSignatureParams,!1),c.signature=r.certSignature;var p=[];if(void 0!==r.certValidity1UTCTime&&p.push(n.utcTimeToDate(r.certValidity1UTCTime)),void 0!==r.certValidity2GeneralizedTime&&p.push(n.generalizedTimeToDate(r.certValidity2GeneralizedTime)),void 0!==r.certValidity3UTCTime&&p.push(n.utcTimeToDate(r.certValidity3UTCTime)),void 0!==r.certValidity4GeneralizedTime&&p.push(n.generalizedTimeToDate(r.certValidity4GeneralizedTime)),p.length>2)throw new Error("Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.");if(p.length<2)throw new Error("Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.");if(c.validity.notBefore=p[0],c.validity.notAfter=p[1],c.tbsCertificate=r.tbsCertificate,t){c.md=y({signatureOid:c.signatureOid,type:"certificate"});var f=n.toDer(c.tbsCertificate);c.md.update(f.getBytes())}var g=a.md.sha1.create(),v=n.toDer(r.certIssuer);g.update(v.getBytes()),c.issuer.getField=function(e){return h(c.issuer,e)},c.issuer.addField=function(e){m([e]),c.issuer.attributes.push(e)},c.issuer.attributes=i.RDNAttributesAsArray(r.certIssuer),r.certIssuerUniqueId&&(c.issuer.uniqueId=r.certIssuerUniqueId),c.issuer.hash=g.digest().toHex();var C=a.md.sha1.create(),E=n.toDer(r.certSubject);return C.update(E.getBytes()),c.subject.getField=function(e){return h(c.subject,e)},c.subject.addField=function(e){m([e]),c.subject.attributes.push(e)},c.subject.attributes=i.RDNAttributesAsArray(r.certSubject),r.certSubjectUniqueId&&(c.subject.uniqueId=r.certSubjectUniqueId),c.subject.hash=C.digest().toHex(),r.certExtensions?c.extensions=i.certificateExtensionsFromAsn1(r.certExtensions):c.extensions=[],c.publicKey=i.publicKeyFromAsn1(r.subjectPublicKeyInfo),c},i.certificateExtensionsFromAsn1=function(e){for(var t=[],r=0;r<e.value.length;++r)for(var a=e.value[r],n=0;n<a.value.length;++n)t.push(i.certificateExtensionFromAsn1(a.value[n]));return t},i.certificateExtensionFromAsn1=function(e){var t={};if(t.id=n.derToOid(e.value[0].value),t.critical=!1,e.value[1].type===n.Type.BOOLEAN?(t.critical=0!==e.value[1].value.charCodeAt(0),t.value=e.value[2].value):t.value=e.value[1].value,t.id in s)if(t.name=s[t.id],"keyUsage"===t.name){var r=0,i=0;(c=n.fromDer(t.value)).value.length>1&&(r=c.value.charCodeAt(1),i=c.value.length>2?c.value.charCodeAt(2):0),t.digitalSignature=128==(128&r),t.nonRepudiation=64==(64&r),t.keyEncipherment=32==(32&r),t.dataEncipherment=16==(16&r),t.keyAgreement=8==(8&r),t.keyCertSign=4==(4&r),t.cRLSign=2==(2&r),t.encipherOnly=1==(1&r),t.decipherOnly=128==(128&i)}else if("basicConstraints"===t.name){(c=n.fromDer(t.value)).value.length>0&&c.value[0].type===n.Type.BOOLEAN?t.cA=0!==c.value[0].value.charCodeAt(0):t.cA=!1;var o=null;c.value.length>0&&c.value[0].type===n.Type.INTEGER?o=c.value[0].value:c.value.length>1&&(o=c.value[1].value),null!==o&&(t.pathLenConstraint=n.derToInteger(o))}else if("extKeyUsage"===t.name)for(var c=n.fromDer(t.value),u=0;u<c.value.length;++u){var l=n.derToOid(c.value[u].value);l in s?t[s[l]]=!0:t[l]=!0}else if("nsCertType"===t.name){r=0;(c=n.fromDer(t.value)).value.length>1&&(r=c.value.charCodeAt(1)),t.client=128==(128&r),t.server=64==(64&r),t.email=32==(32&r),t.objsign=16==(16&r),t.reserved=8==(8&r),t.sslCA=4==(4&r),t.emailCA=2==(2&r),t.objCA=1==(1&r)}else if("subjectAltName"===t.name||"issuerAltName"===t.name){var p;t.altNames=[];c=n.fromDer(t.value);for(var f=0;f<c.value.length;++f){var h={type:(p=c.value[f]).type,value:p.value};switch(t.altNames.push(h),p.type){case 1:case 2:case 6:break;case 7:h.ip=a.util.bytesToIP(p.value);break;case 8:h.oid=n.derToOid(p.value)}}}else if("subjectKeyIdentifier"===t.name){c=n.fromDer(t.value);t.subjectKeyIdentifier=a.util.bytesToHex(c.value)}return t},i.certificationRequestFromAsn1=function(e,t){var r={},s=[];if(!n.validate(e,f,r,s)){var o=new Error("Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.");throw o.errors=s,o}if(n.derToOid(r.publicKeyOid)!==i.oids.rsaEncryption)throw new Error("Cannot read public key. OID is not RSA.");var c=i.createCertificationRequest();if(c.version=r.csrVersion?r.csrVersion.charCodeAt(0):0,c.signatureOid=a.asn1.derToOid(r.csrSignatureOid),c.signatureParameters=d(c.signatureOid,r.csrSignatureParams,!0),c.siginfo.algorithmOid=a.asn1.derToOid(r.csrSignatureOid),c.siginfo.parameters=d(c.siginfo.algorithmOid,r.csrSignatureParams,!1),c.signature=r.csrSignature,c.certificationRequestInfo=r.certificationRequestInfo,t){c.md=y({signatureOid:c.signatureOid,type:"certification request"});var u=n.toDer(c.certificationRequestInfo);c.md.update(u.getBytes())}var l=a.md.sha1.create();return c.subject.getField=function(e){return h(c.subject,e)},c.subject.addField=function(e){m([e]),c.subject.attributes.push(e)},c.subject.attributes=i.RDNAttributesAsArray(r.certificationRequestInfoSubject,l),c.subject.hash=l.digest().toHex(),c.publicKey=i.publicKeyFromAsn1(r.subjectPublicKeyInfo),c.getAttribute=function(e){return h(c,e)},c.addAttribute=function(e){m([e]),c.attributes.push(e)},c.attributes=i.CRIAttributesAsArray(r.certificationRequestInfoAttributes||[]),c},i.createCertificationRequest=function(){var e={version:0,signatureOid:null,signature:null,siginfo:{}};return e.siginfo.algorithmOid=null,e.subject={},e.subject.getField=function(t){return h(e.subject,t)},e.subject.addField=function(t){m([t]),e.subject.attributes.push(t)},e.subject.attributes=[],e.subject.hash=null,e.publicKey=null,e.attributes=[],e.getAttribute=function(t){return h(e,t)},e.addAttribute=function(t){m([t]),e.attributes.push(t)},e.md=null,e.setSubject=function(t){m(t),e.subject.attributes=t,e.subject.hash=null},e.setAttributes=function(t){m(t),e.attributes=t},e.sign=function(t,r){e.md=r||a.md.sha1.create();var o=s[e.md.algorithm+"WithRSAEncryption"];if(!o){var c=new Error("Could not compute certification request digest. Unknown message digest algorithm OID.");throw c.algorithm=e.md.algorithm,c}e.signatureOid=e.siginfo.algorithmOid=o,e.certificationRequestInfo=i.getCertificationRequestInfo(e);var u=n.toDer(e.certificationRequestInfo);e.md.update(u.getBytes()),e.signature=t.sign(e.md)},e.verify=function(){var t=!1,r=e.md;if(null===r){r=y({signatureOid:e.signatureOid,type:"certification request"});var a=e.certificationRequestInfo||i.getCertificationRequestInfo(e),s=n.toDer(a);r.update(s.getBytes())}return null!==r&&(t=g({certificate:e,md:r,signature:e.signature})),t},e};var T=new Date("1950-01-01T00:00:00Z"),I=new Date("2050-01-01T00:00:00Z");function A(e){return e>=T&&e<I?n.create(n.Class.UNIVERSAL,n.Type.UTCTIME,!1,n.dateToUtcTime(e)):n.create(n.Class.UNIVERSAL,n.Type.GENERALIZEDTIME,!1,n.dateToGeneralizedTime(e))}i.getTBSCertificate=function(e){var t=A(e.validity.notBefore),r=A(e.validity.notAfter),s=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(e.version).getBytes())]),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,a.util.hexToBytes(e.serialNumber)),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.siginfo.algorithmOid).getBytes()),E(e.siginfo.algorithmOid,e.siginfo.parameters)]),v(e.issuer),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[t,r]),v(e.subject),i.publicKeyToAsn1(e.publicKey)]);return e.issuer.uniqueId&&s.value.push(n.create(n.Class.CONTEXT_SPECIFIC,1,!0,[n.create(n.Class.UNIVERSAL,n.Type.BITSTRING,!1,String.fromCharCode(0)+e.issuer.uniqueId)])),e.subject.uniqueId&&s.value.push(n.create(n.Class.CONTEXT_SPECIFIC,2,!0,[n.create(n.Class.UNIVERSAL,n.Type.BITSTRING,!1,String.fromCharCode(0)+e.subject.uniqueId)])),e.extensions.length>0&&s.value.push(i.certificateExtensionsToAsn1(e.extensions)),s},i.getCertificationRequestInfo=function(e){return n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(e.version).getBytes()),v(e.subject),i.publicKeyToAsn1(e.publicKey),S(e)])},i.distinguishedNameToAsn1=function(e){return v(e)},i.certificateToAsn1=function(e){var t=e.tbsCertificate||i.getTBSCertificate(e);return n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[t,n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.signatureOid).getBytes()),E(e.signatureOid,e.signatureParameters)]),n.create(n.Class.UNIVERSAL,n.Type.BITSTRING,!1,String.fromCharCode(0)+e.signature)])},i.certificateExtensionsToAsn1=function(e){var t=n.create(n.Class.CONTEXT_SPECIFIC,3,!0,[]),r=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]);t.value.push(r);for(var a=0;a<e.length;++a)r.value.push(i.certificateExtensionToAsn1(e[a]));return t},i.certificateExtensionToAsn1=function(e){var t=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]);t.value.push(n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.id).getBytes())),e.critical&&t.value.push(n.create(n.Class.UNIVERSAL,n.Type.BOOLEAN,!1,String.fromCharCode(255)));var r=e.value;return"string"!=typeof e.value&&(r=n.toDer(r).getBytes()),t.value.push(n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,r)),t},i.certificationRequestToAsn1=function(e){var t=e.certificationRequestInfo||i.getCertificationRequestInfo(e);return n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[t,n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.signatureOid).getBytes()),E(e.signatureOid,e.signatureParameters)]),n.create(n.Class.UNIVERSAL,n.Type.BITSTRING,!1,String.fromCharCode(0)+e.signature)])},i.createCaStore=function(e){var t={certs:{}};function r(e){return s(e),t.certs[e.hash]||null}function s(e){if(!e.hash){var t=a.md.sha1.create();e.attributes=i.RDNAttributesAsArray(v(e),t),e.hash=t.digest().toHex()}}if(t.getIssuer=function(e){return r(e.issuer)},t.addCertificate=function(e){if("string"==typeof e&&(e=a.pki.certificateFromPem(e)),s(e.subject),!t.hasCertificate(e))if(e.subject.hash in t.certs){var r=t.certs[e.subject.hash];a.util.isArray(r)||(r=[r]),r.push(e),t.certs[e.subject.hash]=r}else t.certs[e.subject.hash]=e},t.hasCertificate=function(e){"string"==typeof e&&(e=a.pki.certificateFromPem(e));var t=r(e.subject);if(!t)return!1;a.util.isArray(t)||(t=[t]);for(var s=n.toDer(i.certificateToAsn1(e)).getBytes(),o=0;o<t.length;++o){if(s===n.toDer(i.certificateToAsn1(t[o])).getBytes())return!0}return!1},t.listAllCertificates=function(){var e=[];for(var r in t.certs)if(t.certs.hasOwnProperty(r)){var n=t.certs[r];if(a.util.isArray(n))for(var i=0;i<n.length;++i)e.push(n[i]);else e.push(n)}return e},t.removeCertificate=function(e){var o;if("string"==typeof e&&(e=a.pki.certificateFromPem(e)),s(e.subject),!t.hasCertificate(e))return null;var c=r(e.subject);if(!a.util.isArray(c))return o=t.certs[e.subject.hash],delete t.certs[e.subject.hash],o;for(var u=n.toDer(i.certificateToAsn1(e)).getBytes(),l=0;l<c.length;++l){u===n.toDer(i.certificateToAsn1(c[l])).getBytes()&&(o=c[l],c.splice(l,1))}return 0===c.length&&delete t.certs[e.subject.hash],o},e)for(var o=0;o<e.length;++o){var c=e[o];t.addCertificate(c)}return t},i.certificateError={bad_certificate:"forge.pki.BadCertificate",unsupported_certificate:"forge.pki.UnsupportedCertificate",certificate_revoked:"forge.pki.CertificateRevoked",certificate_expired:"forge.pki.CertificateExpired",certificate_unknown:"forge.pki.CertificateUnknown",unknown_ca:"forge.pki.UnknownCertificateAuthority"},i.verifyCertificateChain=function(e,t,r){"function"==typeof r&&(r={verify:r}),r=r||{};var n=(t=t.slice(0)).slice(0),s=r.validityCheckDate;void 0===s&&(s=new Date);var o=!0,c=null,u=0;do{var l=t.shift(),p=null,f=!1;if(s&&(s<l.validity.notBefore||s>l.validity.notAfter)&&(c={message:"Certificate is not valid yet or has expired.",error:i.certificateError.certificate_expired,notBefore:l.validity.notBefore,notAfter:l.validity.notAfter,now:s}),null===c){if(null===(p=t[0]||e.getIssuer(l))&&l.isIssuer(l)&&(f=!0,p=l),p){var h=p;a.util.isArray(h)||(h=[h]);for(var d=!1;!d&&h.length>0;){p=h.shift();try{d=p.verify(l)}catch(e){}}d||(c={message:"Certificate signature is invalid.",error:i.certificateError.bad_certificate})}null!==c||p&&!f||e.hasCertificate(l)||(c={message:"Certificate is not trusted.",error:i.certificateError.unknown_ca})}if(null===c&&p&&!l.isIssuer(p)&&(c={message:"Certificate issuer is invalid.",error:i.certificateError.bad_certificate}),null===c)for(var y={keyUsage:!0,basicConstraints:!0},g=0;null===c&&g<l.extensions.length;++g){var v=l.extensions[g];v.critical&&!(v.name in y)&&(c={message:"Certificate has an unsupported critical extension.",error:i.certificateError.unsupported_certificate})}if(null===c&&(!o||0===t.length&&(!p||f))){var m=l.getExtension("basicConstraints"),C=l.getExtension("keyUsage");if(null!==C&&(C.keyCertSign&&null!==m||(c={message:"Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",error:i.certificateError.bad_certificate})),null!==c||null===m||m.cA||(c={message:"Certificate basicConstraints indicates the certificate is not a CA.",error:i.certificateError.bad_certificate}),null===c&&null!==C&&"pathLenConstraint"in m)u-1>m.pathLenConstraint&&(c={message:"Certificate basicConstraints pathLenConstraint violated.",error:i.certificateError.bad_certificate})}var E=null===c||c.error,S=r.verify?r.verify(E,u,n):E;if(!0!==S)throw!0===E&&(c={message:"The application rejected the certificate.",error:i.certificateError.bad_certificate}),(S||0===S)&&("object"!=typeof S||a.util.isArray(S)?"string"==typeof S&&(c.error=S):(S.message&&(c.message=S.message),S.error&&(c.error=S.error))),c;c=null,o=!1,++u}while(t.length>0);return!0}},function(e,t,r){var a=r(0);r(2),r(1),(e.exports=a.pss=a.pss||{}).create=function(e){3===arguments.length&&(e={md:arguments[0],mgf:arguments[1],saltLength:arguments[2]});var t,r=e.md,n=e.mgf,i=r.digestLength,s=e.salt||null;if("string"==typeof s&&(s=a.util.createBuffer(s)),"saltLength"in e)t=e.saltLength;else{if(null===s)throw new Error("Salt length not specified or specific salt not given.");t=s.length()}if(null!==s&&s.length()!==t)throw new Error("Given salt length does not match length of given salt.");var o=e.prng||a.random,c={encode:function(e,c){var u,l,p=c-1,f=Math.ceil(p/8),h=e.digest().getBytes();if(f<i+t+2)throw new Error("Message is too long to encrypt.");l=null===s?o.getBytesSync(t):s.bytes();var d=new a.util.ByteBuffer;d.fillWithByte(0,8),d.putBytes(h),d.putBytes(l),r.start(),r.update(d.getBytes());var y=r.digest().getBytes(),g=new a.util.ByteBuffer;g.fillWithByte(0,f-t-i-2),g.putByte(1),g.putBytes(l);var v=g.getBytes(),m=f-i-1,C=n.generate(y,m),E="";for(u=0;u<m;u++)E+=String.fromCharCode(v.charCodeAt(u)^C.charCodeAt(u));var S=65280>>8*f-p&255;return(E=String.fromCharCode(E.charCodeAt(0)&~S)+E.substr(1))+y+String.fromCharCode(188)},verify:function(e,s,o){var c,u=o-1,l=Math.ceil(u/8);if(s=s.substr(-l),l<i+t+2)throw new Error("Inconsistent parameters to PSS signature verification.");if(188!==s.charCodeAt(l-1))throw new Error("Encoded message does not end in 0xBC.");var p=l-i-1,f=s.substr(0,p),h=s.substr(p,i),d=65280>>8*l-u&255;if(0!=(f.charCodeAt(0)&d))throw new Error("Bits beyond keysize not zero as expected.");var y=n.generate(h,p),g="";for(c=0;c<p;c++)g+=String.fromCharCode(f.charCodeAt(c)^y.charCodeAt(c));g=String.fromCharCode(g.charCodeAt(0)&~d)+g.substr(1);var v=l-i-t-2;for(c=0;c<v;c++)if(0!==g.charCodeAt(c))throw new Error("Leftmost octets not zero as expected");if(1!==g.charCodeAt(v))throw new Error("Inconsistent PSS signature, 0x01 marker not found");var m=g.substr(-t),C=new a.util.ByteBuffer;return C.fillWithByte(0,8),C.putBytes(e),C.putBytes(m),r.start(),r.update(C.getBytes()),h===r.digest().getBytes()}};return c}},function(e,t,r){var a=r(0);r(1),a.cipher=a.cipher||{};var n=e.exports=a.cipher.modes=a.cipher.modes||{};function i(e,t){if("string"==typeof e&&(e=a.util.createBuffer(e)),a.util.isArray(e)&&e.length>4){var r=e;e=a.util.createBuffer();for(var n=0;n<r.length;++n)e.putByte(r[n])}if(e.length()<t)throw new Error("Invalid IV length; got "+e.length()+" bytes and expected "+t+" bytes.");if(!a.util.isArray(e)){var i=[],s=t/4;for(n=0;n<s;++n)i.push(e.getInt32());e=i}return e}function s(e){e[e.length-1]=e[e.length-1]+1&4294967295}function o(e){return[e/4294967296|0,4294967295&e]}n.ecb=function(e){e=e||{},this.name="ECB",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=new Array(this._ints),this._outBlock=new Array(this._ints)},n.ecb.prototype.start=function(e){},n.ecb.prototype.encrypt=function(e,t,r){if(e.length()<this.blockSize&&!(r&&e.length()>0))return!0;for(var a=0;a<this._ints;++a)this._inBlock[a]=e.getInt32();this.cipher.encrypt(this._inBlock,this._outBlock);for(a=0;a<this._ints;++a)t.putInt32(this._outBlock[a])},n.ecb.prototype.decrypt=function(e,t,r){if(e.length()<this.blockSize&&!(r&&e.length()>0))return!0;for(var a=0;a<this._ints;++a)this._inBlock[a]=e.getInt32();this.cipher.decrypt(this._inBlock,this._outBlock);for(a=0;a<this._ints;++a)t.putInt32(this._outBlock[a])},n.ecb.prototype.pad=function(e,t){var r=e.length()===this.blockSize?this.blockSize:this.blockSize-e.length();return e.fillWithByte(r,r),!0},n.ecb.prototype.unpad=function(e,t){if(t.overflow>0)return!1;var r=e.length(),a=e.at(r-1);return!(a>this.blockSize<<2)&&(e.truncate(a),!0)},n.cbc=function(e){e=e||{},this.name="CBC",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=new Array(this._ints),this._outBlock=new Array(this._ints)},n.cbc.prototype.start=function(e){if(null===e.iv){if(!this._prev)throw new Error("Invalid IV parameter.");this._iv=this._prev.slice(0)}else{if(!("iv"in e))throw new Error("Invalid IV parameter.");this._iv=i(e.iv,this.blockSize),this._prev=this._iv.slice(0)}},n.cbc.prototype.encrypt=function(e,t,r){if(e.length()<this.blockSize&&!(r&&e.length()>0))return!0;for(var a=0;a<this._ints;++a)this._inBlock[a]=this._prev[a]^e.getInt32();this.cipher.encrypt(this._inBlock,this._outBlock);for(a=0;a<this._ints;++a)t.putInt32(this._outBlock[a]);this._prev=this._outBlock},n.cbc.prototype.decrypt=function(e,t,r){if(e.length()<this.blockSize&&!(r&&e.length()>0))return!0;for(var a=0;a<this._ints;++a)this._inBlock[a]=e.getInt32();this.cipher.decrypt(this._inBlock,this._outBlock);for(a=0;a<this._ints;++a)t.putInt32(this._prev[a]^this._outBlock[a]);this._prev=this._inBlock.slice(0)},n.cbc.prototype.pad=function(e,t){var r=e.length()===this.blockSize?this.blockSize:this.blockSize-e.length();return e.fillWithByte(r,r),!0},n.cbc.prototype.unpad=function(e,t){if(t.overflow>0)return!1;var r=e.length(),a=e.at(r-1);return!(a>this.blockSize<<2)&&(e.truncate(a),!0)},n.cfb=function(e){e=e||{},this.name="CFB",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=null,this._outBlock=new Array(this._ints),this._partialBlock=new Array(this._ints),this._partialOutput=a.util.createBuffer(),this._partialBytes=0},n.cfb.prototype.start=function(e){if(!("iv"in e))throw new Error("Invalid IV parameter.");this._iv=i(e.iv,this.blockSize),this._inBlock=this._iv.slice(0),this._partialBytes=0},n.cfb.prototype.encrypt=function(e,t,r){var a=e.length();if(0===a)return!0;if(this.cipher.encrypt(this._inBlock,this._outBlock),0===this._partialBytes&&a>=this.blockSize)for(var n=0;n<this._ints;++n)this._inBlock[n]=e.getInt32()^this._outBlock[n],t.putInt32(this._inBlock[n]);else{var i=(this.blockSize-a)%this.blockSize;i>0&&(i=this.blockSize-i),this._partialOutput.clear();for(n=0;n<this._ints;++n)this._partialBlock[n]=e.getInt32()^this._outBlock[n],this._partialOutput.putInt32(this._partialBlock[n]);if(i>0)e.read-=this.blockSize;else for(n=0;n<this._ints;++n)this._inBlock[n]=this._partialBlock[n];if(this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),i>0&&!r)return t.putBytes(this._partialOutput.getBytes(i-this._partialBytes)),this._partialBytes=i,!0;t.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=0}},n.cfb.prototype.decrypt=function(e,t,r){var a=e.length();if(0===a)return!0;if(this.cipher.encrypt(this._inBlock,this._outBlock),0===this._partialBytes&&a>=this.blockSize)for(var n=0;n<this._ints;++n)this._inBlock[n]=e.getInt32(),t.putInt32(this._inBlock[n]^this._outBlock[n]);else{var i=(this.blockSize-a)%this.blockSize;i>0&&(i=this.blockSize-i),this._partialOutput.clear();for(n=0;n<this._ints;++n)this._partialBlock[n]=e.getInt32(),this._partialOutput.putInt32(this._partialBlock[n]^this._outBlock[n]);if(i>0)e.read-=this.blockSize;else for(n=0;n<this._ints;++n)this._inBlock[n]=this._partialBlock[n];if(this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),i>0&&!r)return t.putBytes(this._partialOutput.getBytes(i-this._partialBytes)),this._partialBytes=i,!0;t.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=0}},n.ofb=function(e){e=e||{},this.name="OFB",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=null,this._outBlock=new Array(this._ints),this._partialOutput=a.util.createBuffer(),this._partialBytes=0},n.ofb.prototype.start=function(e){if(!("iv"in e))throw new Error("Invalid IV parameter.");this._iv=i(e.iv,this.blockSize),this._inBlock=this._iv.slice(0),this._partialBytes=0},n.ofb.prototype.encrypt=function(e,t,r){var a=e.length();if(0===e.length())return!0;if(this.cipher.encrypt(this._inBlock,this._outBlock),0===this._partialBytes&&a>=this.blockSize)for(var n=0;n<this._ints;++n)t.putInt32(e.getInt32()^this._outBlock[n]),this._inBlock[n]=this._outBlock[n];else{var i=(this.blockSize-a)%this.blockSize;i>0&&(i=this.blockSize-i),this._partialOutput.clear();for(n=0;n<this._ints;++n)this._partialOutput.putInt32(e.getInt32()^this._outBlock[n]);if(i>0)e.read-=this.blockSize;else for(n=0;n<this._ints;++n)this._inBlock[n]=this._outBlock[n];if(this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),i>0&&!r)return t.putBytes(this._partialOutput.getBytes(i-this._partialBytes)),this._partialBytes=i,!0;t.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=0}},n.ofb.prototype.decrypt=n.ofb.prototype.encrypt,n.ctr=function(e){e=e||{},this.name="CTR",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=null,this._outBlock=new Array(this._ints),this._partialOutput=a.util.createBuffer(),this._partialBytes=0},n.ctr.prototype.start=function(e){if(!("iv"in e))throw new Error("Invalid IV parameter.");this._iv=i(e.iv,this.blockSize),this._inBlock=this._iv.slice(0),this._partialBytes=0},n.ctr.prototype.encrypt=function(e,t,r){var a=e.length();if(0===a)return!0;if(this.cipher.encrypt(this._inBlock,this._outBlock),0===this._partialBytes&&a>=this.blockSize)for(var n=0;n<this._ints;++n)t.putInt32(e.getInt32()^this._outBlock[n]);else{var i=(this.blockSize-a)%this.blockSize;i>0&&(i=this.blockSize-i),this._partialOutput.clear();for(n=0;n<this._ints;++n)this._partialOutput.putInt32(e.getInt32()^this._outBlock[n]);if(i>0&&(e.read-=this.blockSize),this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),i>0&&!r)return t.putBytes(this._partialOutput.getBytes(i-this._partialBytes)),this._partialBytes=i,!0;t.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=0}s(this._inBlock)},n.ctr.prototype.decrypt=n.ctr.prototype.encrypt,n.gcm=function(e){e=e||{},this.name="GCM",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=new Array(this._ints),this._outBlock=new Array(this._ints),this._partialOutput=a.util.createBuffer(),this._partialBytes=0,this._R=3774873600},n.gcm.prototype.start=function(e){if(!("iv"in e))throw new Error("Invalid IV parameter.");var t,r=a.util.createBuffer(e.iv);if(this._cipherLength=0,t="additionalData"in e?a.util.createBuffer(e.additionalData):a.util.createBuffer(),this._tagLength="tagLength"in e?e.tagLength:128,this._tag=null,e.decrypt&&(this._tag=a.util.createBuffer(e.tag).getBytes(),this._tag.length!==this._tagLength/8))throw new Error("Authentication tag does not match tag length.");this._hashBlock=new Array(this._ints),this.tag=null,this._hashSubkey=new Array(this._ints),this.cipher.encrypt([0,0,0,0],this._hashSubkey),this.componentBits=4,this._m=this.generateHashTable(this._hashSubkey,this.componentBits);var n=r.length();if(12===n)this._j0=[r.getInt32(),r.getInt32(),r.getInt32(),1];else{for(this._j0=[0,0,0,0];r.length()>0;)this._j0=this.ghash(this._hashSubkey,this._j0,[r.getInt32(),r.getInt32(),r.getInt32(),r.getInt32()]);this._j0=this.ghash(this._hashSubkey,this._j0,[0,0].concat(o(8*n)))}this._inBlock=this._j0.slice(0),s(this._inBlock),this._partialBytes=0,t=a.util.createBuffer(t),this._aDataLength=o(8*t.length());var i=t.length()%this.blockSize;for(i&&t.fillWithByte(0,this.blockSize-i),this._s=[0,0,0,0];t.length()>0;)this._s=this.ghash(this._hashSubkey,this._s,[t.getInt32(),t.getInt32(),t.getInt32(),t.getInt32()])},n.gcm.prototype.encrypt=function(e,t,r){var a=e.length();if(0===a)return!0;if(this.cipher.encrypt(this._inBlock,this._outBlock),0===this._partialBytes&&a>=this.blockSize){for(var n=0;n<this._ints;++n)t.putInt32(this._outBlock[n]^=e.getInt32());this._cipherLength+=this.blockSize}else{var i=(this.blockSize-a)%this.blockSize;i>0&&(i=this.blockSize-i),this._partialOutput.clear();for(n=0;n<this._ints;++n)this._partialOutput.putInt32(e.getInt32()^this._outBlock[n]);if(i<=0||r){if(r){var o=a%this.blockSize;this._cipherLength+=o,this._partialOutput.truncate(this.blockSize-o)}else this._cipherLength+=this.blockSize;for(n=0;n<this._ints;++n)this._outBlock[n]=this._partialOutput.getInt32();this._partialOutput.read-=this.blockSize}if(this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),i>0&&!r)return e.read-=this.blockSize,t.putBytes(this._partialOutput.getBytes(i-this._partialBytes)),this._partialBytes=i,!0;t.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=0}this._s=this.ghash(this._hashSubkey,this._s,this._outBlock),s(this._inBlock)},n.gcm.prototype.decrypt=function(e,t,r){var a=e.length();if(a<this.blockSize&&!(r&&a>0))return!0;this.cipher.encrypt(this._inBlock,this._outBlock),s(this._inBlock),this._hashBlock[0]=e.getInt32(),this._hashBlock[1]=e.getInt32(),this._hashBlock[2]=e.getInt32(),this._hashBlock[3]=e.getInt32(),this._s=this.ghash(this._hashSubkey,this._s,this._hashBlock);for(var n=0;n<this._ints;++n)t.putInt32(this._outBlock[n]^this._hashBlock[n]);a<this.blockSize?this._cipherLength+=a%this.blockSize:this._cipherLength+=this.blockSize},n.gcm.prototype.afterFinish=function(e,t){var r=!0;t.decrypt&&t.overflow&&e.truncate(this.blockSize-t.overflow),this.tag=a.util.createBuffer();var n=this._aDataLength.concat(o(8*this._cipherLength));this._s=this.ghash(this._hashSubkey,this._s,n);var i=[];this.cipher.encrypt(this._j0,i);for(var s=0;s<this._ints;++s)this.tag.putInt32(this._s[s]^i[s]);return this.tag.truncate(this.tag.length()%(this._tagLength/8)),t.decrypt&&this.tag.bytes()!==this._tag&&(r=!1),r},n.gcm.prototype.multiply=function(e,t){for(var r=[0,0,0,0],a=t.slice(0),n=0;n<128;++n){e[n/32|0]&1<<31-n%32&&(r[0]^=a[0],r[1]^=a[1],r[2]^=a[2],r[3]^=a[3]),this.pow(a,a)}return r},n.gcm.prototype.pow=function(e,t){for(var r=1&e[3],a=3;a>0;--a)t[a]=e[a]>>>1|(1&e[a-1])<<31;t[0]=e[0]>>>1,r&&(t[0]^=this._R)},n.gcm.prototype.tableMultiply=function(e){for(var t=[0,0,0,0],r=0;r<32;++r){var a=e[r/8|0]>>>4*(7-r%8)&15,n=this._m[r][a];t[0]^=n[0],t[1]^=n[1],t[2]^=n[2],t[3]^=n[3]}return t},n.gcm.prototype.ghash=function(e,t,r){return t[0]^=r[0],t[1]^=r[1],t[2]^=r[2],t[3]^=r[3],this.tableMultiply(t)},n.gcm.prototype.generateHashTable=function(e,t){for(var r=8/t,a=4*r,n=16*r,i=new Array(n),s=0;s<n;++s){var o=[0,0,0,0],c=(a-1-s%a)*t;o[s/a|0]=1<<t-1<<c,i[s]=this.generateSubHashTable(this.multiply(o,e),t)}return i},n.gcm.prototype.generateSubHashTable=function(e,t){var r=1<<t,a=r>>>1,n=new Array(r);n[a]=e.slice(0);for(var i=a>>>1;i>0;)this.pow(n[2*i],n[i]=[]),i>>=1;for(i=2;i<a;){for(var s=1;s<i;++s){var o=n[i],c=n[s];n[i+s]=[o[0]^c[0],o[1]^c[1],o[2]^c[2],o[3]^c[3]]}i*=2}for(n[0]=[0,0,0,0],i=a+1;i<r;++i){var u=n[i^a];n[i]=[e[0]^u[0],e[1]^u[1],e[2]^u[2],e[3]^u[3]]}return n}},function(e,t,r){var a=r(0);r(3),r(8),r(14),r(7),r(21),r(2),r(9),r(1);var n=function(e,t,r,n){var i=a.util.createBuffer(),s=e.length>>1,o=s+(1&e.length),c=e.substr(0,o),u=e.substr(s,o),l=a.util.createBuffer(),p=a.hmac.create();r=t+r;var f=Math.ceil(n/16),h=Math.ceil(n/20);p.start("MD5",c);var d=a.util.createBuffer();l.putBytes(r);for(var y=0;y<f;++y)p.start(null,null),p.update(l.getBytes()),l.putBuffer(p.digest()),p.start(null,null),p.update(l.bytes()+r),d.putBuffer(p.digest());p.start("SHA1",u);var g=a.util.createBuffer();l.clear(),l.putBytes(r);for(y=0;y<h;++y)p.start(null,null),p.update(l.getBytes()),l.putBuffer(p.digest()),p.start(null,null),p.update(l.bytes()+r),g.putBuffer(p.digest());return i.putBytes(a.util.xorBytes(d.getBytes(),g.getBytes(),n)),i},i=function(e,t,r){var n=!1;try{var i=e.deflate(t.fragment.getBytes());t.fragment=a.util.createBuffer(i),t.length=i.length,n=!0}catch(e){}return n},s=function(e,t,r){var n=!1;try{var i=e.inflate(t.fragment.getBytes());t.fragment=a.util.createBuffer(i),t.length=i.length,n=!0}catch(e){}return n},o=function(e,t){var r=0;switch(t){case 1:r=e.getByte();break;case 2:r=e.getInt16();break;case 3:r=e.getInt24();break;case 4:r=e.getInt32()}return a.util.createBuffer(e.getBytes(r))},c=function(e,t,r){e.putInt(r.length(),t<<3),e.putBuffer(r)},u={Versions:{TLS_1_0:{major:3,minor:1},TLS_1_1:{major:3,minor:2},TLS_1_2:{major:3,minor:3}}};u.SupportedVersions=[u.Versions.TLS_1_1,u.Versions.TLS_1_0],u.Version=u.SupportedVersions[0],u.MaxFragment=15360,u.ConnectionEnd={server:0,client:1},u.PRFAlgorithm={tls_prf_sha256:0},u.BulkCipherAlgorithm={none:null,rc4:0,des3:1,aes:2},u.CipherType={stream:0,block:1,aead:2},u.MACAlgorithm={none:null,hmac_md5:0,hmac_sha1:1,hmac_sha256:2,hmac_sha384:3,hmac_sha512:4},u.CompressionMethod={none:0,deflate:1},u.ContentType={change_cipher_spec:20,alert:21,handshake:22,application_data:23,heartbeat:24},u.HandshakeType={hello_request:0,client_hello:1,server_hello:2,certificate:11,server_key_exchange:12,certificate_request:13,server_hello_done:14,certificate_verify:15,client_key_exchange:16,finished:20},u.Alert={},u.Alert.Level={warning:1,fatal:2},u.Alert.Description={close_notify:0,unexpected_message:10,bad_record_mac:20,decryption_failed:21,record_overflow:22,decompression_failure:30,handshake_failure:40,bad_certificate:42,unsupported_certificate:43,certificate_revoked:44,certificate_expired:45,certificate_unknown:46,illegal_parameter:47,unknown_ca:48,access_denied:49,decode_error:50,decrypt_error:51,export_restriction:60,protocol_version:70,insufficient_security:71,internal_error:80,user_canceled:90,no_renegotiation:100},u.HeartbeatMessageType={heartbeat_request:1,heartbeat_response:2},u.CipherSuites={},u.getCipherSuite=function(e){var t=null;for(var r in u.CipherSuites){var a=u.CipherSuites[r];if(a.id[0]===e.charCodeAt(0)&&a.id[1]===e.charCodeAt(1)){t=a;break}}return t},u.handleUnexpected=function(e,t){!e.open&&e.entity===u.ConnectionEnd.client||e.error(e,{message:"Unexpected message. Received TLS record out of order.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.unexpected_message}})},u.handleHelloRequest=function(e,t,r){!e.handshaking&&e.handshakes>0&&(u.queue(e,u.createAlert(e,{level:u.Alert.Level.warning,description:u.Alert.Description.no_renegotiation})),u.flush(e)),e.process()},u.parseHelloMessage=function(e,t,r){var n=null,i=e.entity===u.ConnectionEnd.client;if(r<38)e.error(e,{message:i?"Invalid ServerHello message. Message too short.":"Invalid ClientHello message. Message too short.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.illegal_parameter}});else{var s=t.fragment,c=s.length();if(n={version:{major:s.getByte(),minor:s.getByte()},random:a.util.createBuffer(s.getBytes(32)),session_id:o(s,1),extensions:[]},i?(n.cipher_suite=s.getBytes(2),n.compression_method=s.getByte()):(n.cipher_suites=o(s,2),n.compression_methods=o(s,1)),(c=r-(c-s.length()))>0){for(var l=o(s,2);l.length()>0;)n.extensions.push({type:[l.getByte(),l.getByte()],data:o(l,2)});if(!i)for(var p=0;p<n.extensions.length;++p){var f=n.extensions[p];if(0===f.type[0]&&0===f.type[1])for(var h=o(f.data,2);h.length()>0;){if(0!==h.getByte())break;e.session.extensions.server_name.serverNameList.push(o(h,2).getBytes())}}}if(e.session.version&&(n.version.major!==e.session.version.major||n.version.minor!==e.session.version.minor))return e.error(e,{message:"TLS version change is disallowed during renegotiation.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.protocol_version}});if(i)e.session.cipherSuite=u.getCipherSuite(n.cipher_suite);else for(var d=a.util.createBuffer(n.cipher_suites.bytes());d.length()>0&&(e.session.cipherSuite=u.getCipherSuite(d.getBytes(2)),null===e.session.cipherSuite););if(null===e.session.cipherSuite)return e.error(e,{message:"No cipher suites in common.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.handshake_failure},cipherSuite:a.util.bytesToHex(n.cipher_suite)});e.session.compressionMethod=i?n.compression_method:u.CompressionMethod.none}return n},u.createSecurityParameters=function(e,t){var r=e.entity===u.ConnectionEnd.client,a=t.random.bytes(),n=r?e.session.sp.client_random:a,i=r?a:u.createRandom().getBytes();e.session.sp={entity:e.entity,prf_algorithm:u.PRFAlgorithm.tls_prf_sha256,bulk_cipher_algorithm:null,cipher_type:null,enc_key_length:null,block_length:null,fixed_iv_length:null,record_iv_length:null,mac_algorithm:null,mac_length:null,mac_key_length:null,compression_algorithm:e.session.compressionMethod,pre_master_secret:null,master_secret:null,client_random:n,server_random:i}},u.handleServerHello=function(e,t,r){var a=u.parseHelloMessage(e,t,r);if(!e.fail){if(!(a.version.minor<=e.version.minor))return e.error(e,{message:"Incompatible TLS version.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.protocol_version}});e.version.minor=a.version.minor,e.session.version=e.version;var n=a.session_id.bytes();n.length>0&&n===e.session.id?(e.expect=d,e.session.resuming=!0,e.session.sp.server_random=a.random.bytes()):(e.expect=l,e.session.resuming=!1,u.createSecurityParameters(e,a)),e.session.id=n,e.process()}},u.handleClientHello=function(e,t,r){var n=u.parseHelloMessage(e,t,r);if(!e.fail){var i=n.session_id.bytes(),s=null;if(e.sessionCache&&(null===(s=e.sessionCache.getSession(i))?i="":(s.version.major!==n.version.major||s.version.minor>n.version.minor)&&(s=null,i="")),0===i.length&&(i=a.random.getBytes(32)),e.session.id=i,e.session.clientHelloVersion=n.version,e.session.sp={},s)e.version=e.session.version=s.version,e.session.sp=s.sp;else{for(var o,c=1;c<u.SupportedVersions.length&&!((o=u.SupportedVersions[c]).minor<=n.version.minor);++c);e.version={major:o.major,minor:o.minor},e.session.version=e.version}null!==s?(e.expect=S,e.session.resuming=!0,e.session.sp.client_random=n.random.bytes()):(e.expect=!1!==e.verifyClient?m:C,e.session.resuming=!1,u.createSecurityParameters(e,n)),e.open=!0,u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createServerHello(e)})),e.session.resuming?(u.queue(e,u.createRecord(e,{type:u.ContentType.change_cipher_spec,data:u.createChangeCipherSpec()})),e.state.pending=u.createConnectionState(e),e.state.current.write=e.state.pending.write,u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createFinished(e)}))):(u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createCertificate(e)})),e.fail||(u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createServerKeyExchange(e)})),!1!==e.verifyClient&&u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createCertificateRequest(e)})),u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createServerHelloDone(e)})))),u.flush(e),e.process()}},u.handleCertificate=function(e,t,r){if(r<3)return e.error(e,{message:"Invalid Certificate message. Message too short.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.illegal_parameter}});var n,i,s=t.fragment,c={certificate_list:o(s,3)},l=[];try{for(;c.certificate_list.length()>0;)n=o(c.certificate_list,3),i=a.asn1.fromDer(n),n=a.pki.certificateFromAsn1(i,!0),l.push(n)}catch(t){return e.error(e,{message:"Could not parse certificate list.",cause:t,send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.bad_certificate}})}var f=e.entity===u.ConnectionEnd.client;!f&&!0!==e.verifyClient||0!==l.length?0===l.length?e.expect=f?p:C:(f?e.session.serverCertificate=l[0]:e.session.clientCertificate=l[0],u.verifyCertificateChain(e,l)&&(e.expect=f?p:C)):e.error(e,{message:f?"No server certificate provided.":"No client certificate provided.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.illegal_parameter}}),e.process()},u.handleServerKeyExchange=function(e,t,r){if(r>0)return e.error(e,{message:"Invalid key parameters. Only RSA is supported.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.unsupported_certificate}});e.expect=f,e.process()},u.handleClientKeyExchange=function(e,t,r){if(r<48)return e.error(e,{message:"Invalid key parameters. Only RSA is supported.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.unsupported_certificate}});var n=t.fragment,i={enc_pre_master_secret:o(n,2).getBytes()},s=null;if(e.getPrivateKey)try{s=e.getPrivateKey(e,e.session.serverCertificate),s=a.pki.privateKeyFromPem(s)}catch(t){e.error(e,{message:"Could not get private key.",cause:t,send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.internal_error}})}if(null===s)return e.error(e,{message:"No private key set.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.internal_error}});try{var c=e.session.sp;c.pre_master_secret=s.decrypt(i.enc_pre_master_secret);var l=e.session.clientHelloVersion;if(l.major!==c.pre_master_secret.charCodeAt(0)||l.minor!==c.pre_master_secret.charCodeAt(1))throw new Error("TLS version rollback attack detected.")}catch(e){c.pre_master_secret=a.random.getBytes(48)}e.expect=S,null!==e.session.clientCertificate&&(e.expect=E),e.process()},u.handleCertificateRequest=function(e,t,r){if(r<3)return e.error(e,{message:"Invalid CertificateRequest. Message too short.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.illegal_parameter}});var a=t.fragment,n={certificate_types:o(a,1),certificate_authorities:o(a,2)};e.session.certificateRequest=n,e.expect=h,e.process()},u.handleCertificateVerify=function(e,t,r){if(r<2)return e.error(e,{message:"Invalid CertificateVerify. Message too short.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.illegal_parameter}});var n=t.fragment;n.read-=4;var i=n.bytes();n.read+=4;var s={signature:o(n,2).getBytes()},c=a.util.createBuffer();c.putBuffer(e.session.md5.digest()),c.putBuffer(e.session.sha1.digest()),c=c.getBytes();try{if(!e.session.clientCertificate.publicKey.verify(c,s.signature,"NONE"))throw new Error("CertificateVerify signature does not match.");e.session.md5.update(i),e.session.sha1.update(i)}catch(t){return e.error(e,{message:"Bad signature in CertificateVerify.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.handshake_failure}})}e.expect=S,e.process()},u.handleServerHelloDone=function(e,t,r){if(r>0)return e.error(e,{message:"Invalid ServerHelloDone message. Invalid length.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.record_overflow}});if(null===e.serverCertificate){var n={message:"No server certificate provided. Not enough security.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.insufficient_security}},i=e.verify(e,n.alert.description,0,[]);if(!0!==i)return(i||0===i)&&("object"!=typeof i||a.util.isArray(i)?"number"==typeof i&&(n.alert.description=i):(i.message&&(n.message=i.message),i.alert&&(n.alert.description=i.alert))),e.error(e,n)}null!==e.session.certificateRequest&&(t=u.createRecord(e,{type:u.ContentType.handshake,data:u.createCertificate(e)}),u.queue(e,t)),t=u.createRecord(e,{type:u.ContentType.handshake,data:u.createClientKeyExchange(e)}),u.queue(e,t),e.expect=v;var s=function(e,t){null!==e.session.certificateRequest&&null!==e.session.clientCertificate&&u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createCertificateVerify(e,t)})),u.queue(e,u.createRecord(e,{type:u.ContentType.change_cipher_spec,data:u.createChangeCipherSpec()})),e.state.pending=u.createConnectionState(e),e.state.current.write=e.state.pending.write,u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createFinished(e)})),e.expect=d,u.flush(e),e.process()};if(null===e.session.certificateRequest||null===e.session.clientCertificate)return s(e,null);u.getClientSignature(e,s)},u.handleChangeCipherSpec=function(e,t){if(1!==t.fragment.getByte())return e.error(e,{message:"Invalid ChangeCipherSpec message received.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.illegal_parameter}});var r=e.entity===u.ConnectionEnd.client;(e.session.resuming&&r||!e.session.resuming&&!r)&&(e.state.pending=u.createConnectionState(e)),e.state.current.read=e.state.pending.read,(!e.session.resuming&&r||e.session.resuming&&!r)&&(e.state.pending=null),e.expect=r?y:T,e.process()},u.handleFinished=function(e,t,r){var i=t.fragment;i.read-=4;var s=i.bytes();i.read+=4;var o=t.fragment.getBytes();(i=a.util.createBuffer()).putBuffer(e.session.md5.digest()),i.putBuffer(e.session.sha1.digest());var c=e.entity===u.ConnectionEnd.client,l=c?"server finished":"client finished",p=e.session.sp;if((i=n(p.master_secret,l,i.getBytes(),12)).getBytes()!==o)return e.error(e,{message:"Invalid verify_data in Finished message.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.decrypt_error}});e.session.md5.update(s),e.session.sha1.update(s),(e.session.resuming&&c||!e.session.resuming&&!c)&&(u.queue(e,u.createRecord(e,{type:u.ContentType.change_cipher_spec,data:u.createChangeCipherSpec()})),e.state.current.write=e.state.pending.write,e.state.pending=null,u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createFinished(e)}))),e.expect=c?g:I,e.handshaking=!1,++e.handshakes,e.peerCertificate=c?e.session.serverCertificate:e.session.clientCertificate,u.flush(e),e.isConnected=!0,e.connected(e),e.process()},u.handleAlert=function(e,t){var r,a=t.fragment,n={level:a.getByte(),description:a.getByte()};switch(n.description){case u.Alert.Description.close_notify:r="Connection closed.";break;case u.Alert.Description.unexpected_message:r="Unexpected message.";break;case u.Alert.Description.bad_record_mac:r="Bad record MAC.";break;case u.Alert.Description.decryption_failed:r="Decryption failed.";break;case u.Alert.Description.record_overflow:r="Record overflow.";break;case u.Alert.Description.decompression_failure:r="Decompression failed.";break;case u.Alert.Description.handshake_failure:r="Handshake failure.";break;case u.Alert.Description.bad_certificate:r="Bad certificate.";break;case u.Alert.Description.unsupported_certificate:r="Unsupported certificate.";break;case u.Alert.Description.certificate_revoked:r="Certificate revoked.";break;case u.Alert.Description.certificate_expired:r="Certificate expired.";break;case u.Alert.Description.certificate_unknown:r="Certificate unknown.";break;case u.Alert.Description.illegal_parameter:r="Illegal parameter.";break;case u.Alert.Description.unknown_ca:r="Unknown certificate authority.";break;case u.Alert.Description.access_denied:r="Access denied.";break;case u.Alert.Description.decode_error:r="Decode error.";break;case u.Alert.Description.decrypt_error:r="Decrypt error.";break;case u.Alert.Description.export_restriction:r="Export restriction.";break;case u.Alert.Description.protocol_version:r="Unsupported protocol version.";break;case u.Alert.Description.insufficient_security:r="Insufficient security.";break;case u.Alert.Description.internal_error:r="Internal error.";break;case u.Alert.Description.user_canceled:r="User canceled.";break;case u.Alert.Description.no_renegotiation:r="Renegotiation not supported.";break;default:r="Unknown error."}if(n.description===u.Alert.Description.close_notify)return e.close();e.error(e,{message:r,send:!1,origin:e.entity===u.ConnectionEnd.client?"server":"client",alert:n}),e.process()},u.handleHandshake=function(e,t){var r=t.fragment,n=r.getByte(),i=r.getInt24();if(i>r.length())return e.fragmented=t,t.fragment=a.util.createBuffer(),r.read-=4,e.process();e.fragmented=null,r.read-=4;var s=r.bytes(i+4);r.read+=4,n in K[e.entity][e.expect]?(e.entity!==u.ConnectionEnd.server||e.open||e.fail||(e.handshaking=!0,e.session={version:null,extensions:{server_name:{serverNameList:[]}},cipherSuite:null,compressionMethod:null,serverCertificate:null,clientCertificate:null,md5:a.md.md5.create(),sha1:a.md.sha1.create()}),n!==u.HandshakeType.hello_request&&n!==u.HandshakeType.certificate_verify&&n!==u.HandshakeType.finished&&(e.session.md5.update(s),e.session.sha1.update(s)),K[e.entity][e.expect][n](e,t,i)):u.handleUnexpected(e,t)},u.handleApplicationData=function(e,t){e.data.putBuffer(t.fragment),e.dataReady(e),e.process()},u.handleHeartbeat=function(e,t){var r=t.fragment,n=r.getByte(),i=r.getInt16(),s=r.getBytes(i);if(n===u.HeartbeatMessageType.heartbeat_request){if(e.handshaking||i>s.length)return e.process();u.queue(e,u.createRecord(e,{type:u.ContentType.heartbeat,data:u.createHeartbeat(u.HeartbeatMessageType.heartbeat_response,s)})),u.flush(e)}else if(n===u.HeartbeatMessageType.heartbeat_response){if(s!==e.expectedHeartbeatPayload)return e.process();e.heartbeatReceived&&e.heartbeatReceived(e,a.util.createBuffer(s))}e.process()};var l=1,p=2,f=3,h=4,d=5,y=6,g=7,v=8,m=1,C=2,E=3,S=4,T=5,I=6,A=u.handleUnexpected,B=u.handleChangeCipherSpec,b=u.handleAlert,N=u.handleHandshake,R=u.handleApplicationData,w=u.handleHeartbeat,_=[];_[u.ConnectionEnd.client]=[[A,b,N,A,w],[A,b,N,A,w],[A,b,N,A,w],[A,b,N,A,w],[A,b,N,A,w],[B,b,A,A,w],[A,b,N,A,w],[A,b,N,R,w],[A,b,N,A,w]],_[u.ConnectionEnd.server]=[[A,b,N,A,w],[A,b,N,A,w],[A,b,N,A,w],[A,b,N,A,w],[B,b,A,A,w],[A,b,N,A,w],[A,b,N,R,w],[A,b,N,A,w]];var L=u.handleHelloRequest,k=u.handleServerHello,U=u.handleCertificate,D=u.handleServerKeyExchange,P=u.handleCertificateRequest,V=u.handleServerHelloDone,O=u.handleFinished,K=[];K[u.ConnectionEnd.client]=[[A,A,k,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A],[L,A,A,A,A,A,A,A,A,A,A,U,D,P,V,A,A,A,A,A,A],[L,A,A,A,A,A,A,A,A,A,A,A,D,P,V,A,A,A,A,A,A],[L,A,A,A,A,A,A,A,A,A,A,A,A,P,V,A,A,A,A,A,A],[L,A,A,A,A,A,A,A,A,A,A,A,A,A,V,A,A,A,A,A,A],[L,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A],[L,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,O],[L,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A],[L,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A]];var x=u.handleClientHello,M=u.handleClientKeyExchange,F=u.handleCertificateVerify;K[u.ConnectionEnd.server]=[[A,x,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A],[A,A,A,A,A,A,A,A,A,A,A,U,A,A,A,A,A,A,A,A,A],[A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,M,A,A,A,A],[A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,F,A,A,A,A,A],[A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A],[A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,O],[A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A],[A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A]],u.generateKeys=function(e,t){var r=n,a=t.client_random+t.server_random;e.session.resuming||(t.master_secret=r(t.pre_master_secret,"master secret",a,48).bytes(),t.pre_master_secret=null),a=t.server_random+t.client_random;var i=2*t.mac_key_length+2*t.enc_key_length,s=e.version.major===u.Versions.TLS_1_0.major&&e.version.minor===u.Versions.TLS_1_0.minor;s&&(i+=2*t.fixed_iv_length);var o=r(t.master_secret,"key expansion",a,i),c={client_write_MAC_key:o.getBytes(t.mac_key_length),server_write_MAC_key:o.getBytes(t.mac_key_length),client_write_key:o.getBytes(t.enc_key_length),server_write_key:o.getBytes(t.enc_key_length)};return s&&(c.client_write_IV=o.getBytes(t.fixed_iv_length),c.server_write_IV=o.getBytes(t.fixed_iv_length)),c},u.createConnectionState=function(e){var t=e.entity===u.ConnectionEnd.client,r=function(){var e={sequenceNumber:[0,0],macKey:null,macLength:0,macFunction:null,cipherState:null,cipherFunction:function(e){return!0},compressionState:null,compressFunction:function(e){return!0},updateSequenceNumber:function(){4294967295===e.sequenceNumber[1]?(e.sequenceNumber[1]=0,++e.sequenceNumber[0]):++e.sequenceNumber[1]}};return e},a={read:r(),write:r()};if(a.read.update=function(e,t){return a.read.cipherFunction(t,a.read)?a.read.compressFunction(e,t,a.read)||e.error(e,{message:"Could not decompress record.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.decompression_failure}}):e.error(e,{message:"Could not decrypt record or bad MAC.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.bad_record_mac}}),!e.fail},a.write.update=function(e,t){return a.write.compressFunction(e,t,a.write)?a.write.cipherFunction(t,a.write)||e.error(e,{message:"Could not encrypt record.",send:!1,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.internal_error}}):e.error(e,{message:"Could not compress record.",send:!1,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.internal_error}}),!e.fail},e.session){var n=e.session.sp;switch(e.session.cipherSuite.initSecurityParameters(n),n.keys=u.generateKeys(e,n),a.read.macKey=t?n.keys.server_write_MAC_key:n.keys.client_write_MAC_key,a.write.macKey=t?n.keys.client_write_MAC_key:n.keys.server_write_MAC_key,e.session.cipherSuite.initConnectionState(a,e,n),n.compression_algorithm){case u.CompressionMethod.none:break;case u.CompressionMethod.deflate:a.read.compressFunction=s,a.write.compressFunction=i;break;default:throw new Error("Unsupported compression algorithm.")}}return a},u.createRandom=function(){var e=new Date,t=+e+6e4*e.getTimezoneOffset(),r=a.util.createBuffer();return r.putInt32(t),r.putBytes(a.random.getBytes(28)),r},u.createRecord=function(e,t){return t.data?{type:t.type,version:{major:e.version.major,minor:e.version.minor},length:t.data.length(),fragment:t.data}:null},u.createAlert=function(e,t){var r=a.util.createBuffer();return r.putByte(t.level),r.putByte(t.description),u.createRecord(e,{type:u.ContentType.alert,data:r})},u.createClientHello=function(e){e.session.clientHelloVersion={major:e.version.major,minor:e.version.minor};for(var t=a.util.createBuffer(),r=0;r<e.cipherSuites.length;++r){var n=e.cipherSuites[r];t.putByte(n.id[0]),t.putByte(n.id[1])}var i=t.length(),s=a.util.createBuffer();s.putByte(u.CompressionMethod.none);var o=s.length(),l=a.util.createBuffer();if(e.virtualHost){var p=a.util.createBuffer();p.putByte(0),p.putByte(0);var f=a.util.createBuffer();f.putByte(0),c(f,2,a.util.createBuffer(e.virtualHost));var h=a.util.createBuffer();c(h,2,f),c(p,2,h),l.putBuffer(p)}var d=l.length();d>0&&(d+=2);var y=e.session.id,g=y.length+1+2+4+28+2+i+1+o+d,v=a.util.createBuffer();return v.putByte(u.HandshakeType.client_hello),v.putInt24(g),v.putByte(e.version.major),v.putByte(e.version.minor),v.putBytes(e.session.sp.client_random),c(v,1,a.util.createBuffer(y)),c(v,2,t),c(v,1,s),d>0&&c(v,2,l),v},u.createServerHello=function(e){var t=e.session.id,r=t.length+1+2+4+28+2+1,n=a.util.createBuffer();return n.putByte(u.HandshakeType.server_hello),n.putInt24(r),n.putByte(e.version.major),n.putByte(e.version.minor),n.putBytes(e.session.sp.server_random),c(n,1,a.util.createBuffer(t)),n.putByte(e.session.cipherSuite.id[0]),n.putByte(e.session.cipherSuite.id[1]),n.putByte(e.session.compressionMethod),n},u.createCertificate=function(e){var t,r=e.entity===u.ConnectionEnd.client,n=null;e.getCertificate&&(t=r?e.session.certificateRequest:e.session.extensions.server_name.serverNameList,n=e.getCertificate(e,t));var i=a.util.createBuffer();if(null!==n)try{a.util.isArray(n)||(n=[n]);for(var s=null,o=0;o<n.length;++o){var l=a.pem.decode(n[o])[0];if("CERTIFICATE"!==l.type&&"X509 CERTIFICATE"!==l.type&&"TRUSTED CERTIFICATE"!==l.type){var p=new Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');throw p.headerType=l.type,p}if(l.procType&&"ENCRYPTED"===l.procType.type)throw new Error("Could not convert certificate from PEM; PEM is encrypted.");var f=a.util.createBuffer(l.body);null===s&&(s=a.asn1.fromDer(f.bytes(),!1));var h=a.util.createBuffer();c(h,3,f),i.putBuffer(h)}n=a.pki.certificateFromAsn1(s),r?e.session.clientCertificate=n:e.session.serverCertificate=n}catch(t){return e.error(e,{message:"Could not send certificate list.",cause:t,send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.bad_certificate}})}var d=3+i.length(),y=a.util.createBuffer();return y.putByte(u.HandshakeType.certificate),y.putInt24(d),c(y,3,i),y},u.createClientKeyExchange=function(e){var t=a.util.createBuffer();t.putByte(e.session.clientHelloVersion.major),t.putByte(e.session.clientHelloVersion.minor),t.putBytes(a.random.getBytes(46));var r=e.session.sp;r.pre_master_secret=t.getBytes();var n=(t=e.session.serverCertificate.publicKey.encrypt(r.pre_master_secret)).length+2,i=a.util.createBuffer();return i.putByte(u.HandshakeType.client_key_exchange),i.putInt24(n),i.putInt16(t.length),i.putBytes(t),i},u.createServerKeyExchange=function(e){var t=a.util.createBuffer();return t},u.getClientSignature=function(e,t){var r=a.util.createBuffer();r.putBuffer(e.session.md5.digest()),r.putBuffer(e.session.sha1.digest()),r=r.getBytes(),e.getSignature=e.getSignature||function(e,t,r){var n=null;if(e.getPrivateKey)try{n=e.getPrivateKey(e,e.session.clientCertificate),n=a.pki.privateKeyFromPem(n)}catch(t){e.error(e,{message:"Could not get private key.",cause:t,send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.internal_error}})}null===n?e.error(e,{message:"No private key set.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.internal_error}}):t=n.sign(t,null),r(e,t)},e.getSignature(e,r,t)},u.createCertificateVerify=function(e,t){var r=t.length+2,n=a.util.createBuffer();return n.putByte(u.HandshakeType.certificate_verify),n.putInt24(r),n.putInt16(t.length),n.putBytes(t),n},u.createCertificateRequest=function(e){var t=a.util.createBuffer();t.putByte(1);var r=a.util.createBuffer();for(var n in e.caStore.certs){var i=e.caStore.certs[n],s=a.pki.distinguishedNameToAsn1(i.subject),o=a.asn1.toDer(s);r.putInt16(o.length()),r.putBuffer(o)}var l=1+t.length()+2+r.length(),p=a.util.createBuffer();return p.putByte(u.HandshakeType.certificate_request),p.putInt24(l),c(p,1,t),c(p,2,r),p},u.createServerHelloDone=function(e){var t=a.util.createBuffer();return t.putByte(u.HandshakeType.server_hello_done),t.putInt24(0),t},u.createChangeCipherSpec=function(){var e=a.util.createBuffer();return e.putByte(1),e},u.createFinished=function(e){var t=a.util.createBuffer();t.putBuffer(e.session.md5.digest()),t.putBuffer(e.session.sha1.digest());var r=e.entity===u.ConnectionEnd.client,i=e.session.sp,s=r?"client finished":"server finished";t=n(i.master_secret,s,t.getBytes(),12);var o=a.util.createBuffer();return o.putByte(u.HandshakeType.finished),o.putInt24(t.length()),o.putBuffer(t),o},u.createHeartbeat=function(e,t,r){void 0===r&&(r=t.length);var n=a.util.createBuffer();n.putByte(e),n.putInt16(r),n.putBytes(t);var i=n.length(),s=Math.max(16,i-r-3);return n.putBytes(a.random.getBytes(s)),n},u.queue=function(e,t){if(t&&(0!==t.fragment.length()||t.type!==u.ContentType.handshake&&t.type!==u.ContentType.alert&&t.type!==u.ContentType.change_cipher_spec)){if(t.type===u.ContentType.handshake){var r=t.fragment.bytes();e.session.md5.update(r),e.session.sha1.update(r),r=null}var n;if(t.fragment.length()<=u.MaxFragment)n=[t];else{n=[];for(var i=t.fragment.bytes();i.length>u.MaxFragment;)n.push(u.createRecord(e,{type:t.type,data:a.util.createBuffer(i.slice(0,u.MaxFragment))})),i=i.slice(u.MaxFragment);i.length>0&&n.push(u.createRecord(e,{type:t.type,data:a.util.createBuffer(i)}))}for(var s=0;s<n.length&&!e.fail;++s){var o=n[s];e.state.current.write.update(e,o)&&e.records.push(o)}}},u.flush=function(e){for(var t=0;t<e.records.length;++t){var r=e.records[t];e.tlsData.putByte(r.type),e.tlsData.putByte(r.version.major),e.tlsData.putByte(r.version.minor),e.tlsData.putInt16(r.fragment.length()),e.tlsData.putBuffer(e.records[t].fragment)}return e.records=[],e.tlsDataReady(e)};var j=function(e){switch(e){case!0:return!0;case a.pki.certificateError.bad_certificate:return u.Alert.Description.bad_certificate;case a.pki.certificateError.unsupported_certificate:return u.Alert.Description.unsupported_certificate;case a.pki.certificateError.certificate_revoked:return u.Alert.Description.certificate_revoked;case a.pki.certificateError.certificate_expired:return u.Alert.Description.certificate_expired;case a.pki.certificateError.certificate_unknown:return u.Alert.Description.certificate_unknown;case a.pki.certificateError.unknown_ca:return u.Alert.Description.unknown_ca;default:return u.Alert.Description.bad_certificate}};for(var G in u.verifyCertificateChain=function(e,t){try{var r={};for(var n in e.verifyOptions)r[n]=e.verifyOptions[n];r.verify=function(t,r,n){j(t);var i=e.verify(e,t,r,n);if(!0!==i){if("object"==typeof i&&!a.util.isArray(i)){var s=new Error("The application rejected the certificate.");throw s.send=!0,s.alert={level:u.Alert.Level.fatal,description:u.Alert.Description.bad_certificate},i.message&&(s.message=i.message),i.alert&&(s.alert.description=i.alert),s}i!==t&&(i=function(e){switch(e){case!0:return!0;case u.Alert.Description.bad_certificate:return a.pki.certificateError.bad_certificate;case u.Alert.Description.unsupported_certificate:return a.pki.certificateError.unsupported_certificate;case u.Alert.Description.certificate_revoked:return a.pki.certificateError.certificate_revoked;case u.Alert.Description.certificate_expired:return a.pki.certificateError.certificate_expired;case u.Alert.Description.certificate_unknown:return a.pki.certificateError.certificate_unknown;case u.Alert.Description.unknown_ca:return a.pki.certificateError.unknown_ca;default:return a.pki.certificateError.bad_certificate}}(i))}return i},a.pki.verifyCertificateChain(e.caStore,t,r)}catch(t){var i=t;("object"!=typeof i||a.util.isArray(i))&&(i={send:!0,alert:{level:u.Alert.Level.fatal,description:j(t)}}),"send"in i||(i.send=!0),"alert"in i||(i.alert={level:u.Alert.Level.fatal,description:j(i.error)}),e.error(e,i)}return!e.fail},u.createSessionCache=function(e,t){var r=null;if(e&&e.getSession&&e.setSession&&e.order)r=e;else{for(var n in(r={}).cache=e||{},r.capacity=Math.max(t||100,1),r.order=[],e)r.order.length<=t?r.order.push(n):delete e[n];r.getSession=function(e){var t=null,n=null;if(e?n=a.util.bytesToHex(e):r.order.length>0&&(n=r.order[0]),null!==n&&n in r.cache)for(var i in t=r.cache[n],delete r.cache[n],r.order)if(r.order[i]===n){r.order.splice(i,1);break}return t},r.setSession=function(e,t){if(r.order.length===r.capacity){var n=r.order.shift();delete r.cache[n]}n=a.util.bytesToHex(e);r.order.push(n),r.cache[n]=t}}return r},u.createConnection=function(e){var t=null;t=e.caStore?a.util.isArray(e.caStore)?a.pki.createCaStore(e.caStore):e.caStore:a.pki.createCaStore();var r=e.cipherSuites||null;if(null===r)for(var n in r=[],u.CipherSuites)r.push(u.CipherSuites[n]);var i=e.server?u.ConnectionEnd.server:u.ConnectionEnd.client,s=e.sessionCache?u.createSessionCache(e.sessionCache):null,o={version:{major:u.Version.major,minor:u.Version.minor},entity:i,sessionId:e.sessionId,caStore:t,sessionCache:s,cipherSuites:r,connected:e.connected,virtualHost:e.virtualHost||null,verifyClient:e.verifyClient||!1,verify:e.verify||function(e,t,r,a){return t},verifyOptions:e.verifyOptions||{},getCertificate:e.getCertificate||null,getPrivateKey:e.getPrivateKey||null,getSignature:e.getSignature||null,input:a.util.createBuffer(),tlsData:a.util.createBuffer(),data:a.util.createBuffer(),tlsDataReady:e.tlsDataReady,dataReady:e.dataReady,heartbeatReceived:e.heartbeatReceived,closed:e.closed,error:function(t,r){r.origin=r.origin||(t.entity===u.ConnectionEnd.client?"client":"server"),r.send&&(u.queue(t,u.createAlert(t,r.alert)),u.flush(t));var a=!1!==r.fatal;a&&(t.fail=!0),e.error(t,r),a&&t.close(!1)},deflate:e.deflate||null,inflate:e.inflate||null,reset:function(e){o.version={major:u.Version.major,minor:u.Version.minor},o.record=null,o.session=null,o.peerCertificate=null,o.state={pending:null,current:null},o.expect=(o.entity,u.ConnectionEnd.client,0),o.fragmented=null,o.records=[],o.open=!1,o.handshakes=0,o.handshaking=!1,o.isConnected=!1,o.fail=!(e||void 0===e),o.input.clear(),o.tlsData.clear(),o.data.clear(),o.state.current=u.createConnectionState(o)}};o.reset();return o.handshake=function(e){if(o.entity!==u.ConnectionEnd.client)o.error(o,{message:"Cannot initiate handshake as a server.",fatal:!1});else if(o.handshaking)o.error(o,{message:"Handshake already in progress.",fatal:!1});else{o.fail&&!o.open&&0===o.handshakes&&(o.fail=!1),o.handshaking=!0;var t=null;(e=e||"").length>0&&(o.sessionCache&&(t=o.sessionCache.getSession(e)),null===t&&(e="")),0===e.length&&o.sessionCache&&null!==(t=o.sessionCache.getSession())&&(e=t.id),o.session={id:e,version:null,cipherSuite:null,compressionMethod:null,serverCertificate:null,certificateRequest:null,clientCertificate:null,sp:{},md5:a.md.md5.create(),sha1:a.md.sha1.create()},t&&(o.version=t.version,o.session.sp=t.sp),o.session.sp.client_random=u.createRandom().getBytes(),o.open=!0,u.queue(o,u.createRecord(o,{type:u.ContentType.handshake,data:u.createClientHello(o)})),u.flush(o)}},o.process=function(e){var t=0;return e&&o.input.putBytes(e),o.fail||(null!==o.record&&o.record.ready&&o.record.fragment.isEmpty()&&(o.record=null),null===o.record&&(t=function(e){var t=0,r=e.input,n=r.length();if(n<5)t=5-n;else{e.record={type:r.getByte(),version:{major:r.getByte(),minor:r.getByte()},length:r.getInt16(),fragment:a.util.createBuffer(),ready:!1};var i=e.record.version.major===e.version.major;i&&e.session&&e.session.version&&(i=e.record.version.minor===e.version.minor),i||e.error(e,{message:"Incompatible TLS version.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.protocol_version}})}return t}(o)),o.fail||null===o.record||o.record.ready||(t=function(e){var t=0,r=e.input,a=r.length();a<e.record.length?t=e.record.length-a:(e.record.fragment.putBytes(r.getBytes(e.record.length)),r.compact(),e.state.current.read.update(e,e.record)&&(null!==e.fragmented&&(e.fragmented.type===e.record.type?(e.fragmented.fragment.putBuffer(e.record.fragment),e.record=e.fragmented):e.error(e,{message:"Invalid fragmented record.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.unexpected_message}})),e.record.ready=!0));return t}(o)),!o.fail&&null!==o.record&&o.record.ready&&function(e,t){var r=t.type-u.ContentType.change_cipher_spec,a=_[e.entity][e.expect];r in a?a[r](e,t):u.handleUnexpected(e,t)}(o,o.record)),t},o.prepare=function(e){return u.queue(o,u.createRecord(o,{type:u.ContentType.application_data,data:a.util.createBuffer(e)})),u.flush(o)},o.prepareHeartbeatRequest=function(e,t){return e instanceof a.util.ByteBuffer&&(e=e.bytes()),void 0===t&&(t=e.length),o.expectedHeartbeatPayload=e,u.queue(o,u.createRecord(o,{type:u.ContentType.heartbeat,data:u.createHeartbeat(u.HeartbeatMessageType.heartbeat_request,e,t)})),u.flush(o)},o.close=function(e){if(!o.fail&&o.sessionCache&&o.session){var t={id:o.session.id,version:o.session.version,sp:o.session.sp};t.sp.keys=null,o.sessionCache.setSession(t.id,t)}o.open&&(o.open=!1,o.input.clear(),(o.isConnected||o.handshaking)&&(o.isConnected=o.handshaking=!1,u.queue(o,u.createAlert(o,{level:u.Alert.Level.warning,description:u.Alert.Description.close_notify})),u.flush(o)),o.closed(o)),o.reset(e)},o},e.exports=a.tls=a.tls||{},u)"function"!=typeof u[G]&&(a.tls[G]=u[G]);a.tls.prf_tls1=n,a.tls.hmac_sha1=function(e,t,r){var n=a.hmac.create();n.start("SHA1",e);var i=a.util.createBuffer();return i.putInt32(t[0]),i.putInt32(t[1]),i.putByte(r.type),i.putByte(r.version.major),i.putByte(r.version.minor),i.putInt16(r.length),i.putBytes(r.fragment.bytes()),n.update(i.getBytes()),n.digest().getBytes()},a.tls.createSessionCache=u.createSessionCache,a.tls.createConnection=u.createConnection},function(e,t,r){var a=r(0);r(3),r(6),r(22),r(7),r(15),r(28),r(18),r(11),r(1),r(17);var n=a.asn1,i=e.exports=a.pki=a.pki||{};i.pemToDer=function(e){var t=a.pem.decode(e)[0];if(t.procType&&"ENCRYPTED"===t.procType.type)throw new Error("Could not convert PEM to DER; PEM is encrypted.");return a.util.createBuffer(t.body)},i.privateKeyFromPem=function(e){var t=a.pem.decode(e)[0];if("PRIVATE KEY"!==t.type&&"RSA PRIVATE KEY"!==t.type){var r=new Error('Could not convert private key from PEM; PEM header type is not "PRIVATE KEY" or "RSA PRIVATE KEY".');throw r.headerType=t.type,r}if(t.procType&&"ENCRYPTED"===t.procType.type)throw new Error("Could not convert private key from PEM; PEM is encrypted.");var s=n.fromDer(t.body);return i.privateKeyFromAsn1(s)},i.privateKeyToPem=function(e,t){var r={type:"RSA PRIVATE KEY",body:n.toDer(i.privateKeyToAsn1(e)).getBytes()};return a.pem.encode(r,{maxline:t})},i.privateKeyInfoToPem=function(e,t){var r={type:"PRIVATE KEY",body:n.toDer(e).getBytes()};return a.pem.encode(r,{maxline:t})}},function(e,t,r){var a=r(0);if(r(5),r(3),r(10),r(4),r(6),r(15),r(7),r(2),r(25),r(11),r(1),void 0===n)var n=a.jsbn.BigInteger;var i=a.asn1,s=a.pki=a.pki||{};e.exports=s.pbe=a.pbe=a.pbe||{};var o=s.oids,c={name:"EncryptedPrivateKeyInfo",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedPrivateKeyInfo.encryptionAlgorithm",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:i.Class.UNIVERSAL,type:i.Type.OID,constructed:!1,capture:"encryptionOid"},{name:"AlgorithmIdentifier.parameters",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,captureAsn1:"encryptionParams"}]},{name:"EncryptedPrivateKeyInfo.encryptedData",tagClass:i.Class.UNIVERSAL,type:i.Type.OCTETSTRING,constructed:!1,capture:"encryptedData"}]},u={name:"PBES2Algorithms",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.keyDerivationFunc",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.keyDerivationFunc.oid",tagClass:i.Class.UNIVERSAL,type:i.Type.OID,constructed:!1,capture:"kdfOid"},{name:"PBES2Algorithms.params",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.params.salt",tagClass:i.Class.UNIVERSAL,type:i.Type.OCTETSTRING,constructed:!1,capture:"kdfSalt"},{name:"PBES2Algorithms.params.iterationCount",tagClass:i.Class.UNIVERSAL,type:i.Type.INTEGER,constructed:!1,capture:"kdfIterationCount"},{name:"PBES2Algorithms.params.keyLength",tagClass:i.Class.UNIVERSAL,type:i.Type.INTEGER,constructed:!1,optional:!0,capture:"keyLength"},{name:"PBES2Algorithms.params.prf",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,optional:!0,value:[{name:"PBES2Algorithms.params.prf.algorithm",tagClass:i.Class.UNIVERSAL,type:i.Type.OID,constructed:!1,capture:"prfOid"}]}]}]},{name:"PBES2Algorithms.encryptionScheme",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.encryptionScheme.oid",tagClass:i.Class.UNIVERSAL,type:i.Type.OID,constructed:!1,capture:"encOid"},{name:"PBES2Algorithms.encryptionScheme.iv",tagClass:i.Class.UNIVERSAL,type:i.Type.OCTETSTRING,constructed:!1,capture:"encIv"}]}]},l={name:"pkcs-12PbeParams",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,value:[{name:"pkcs-12PbeParams.salt",tagClass:i.Class.UNIVERSAL,type:i.Type.OCTETSTRING,constructed:!1,capture:"salt"},{name:"pkcs-12PbeParams.iterations",tagClass:i.Class.UNIVERSAL,type:i.Type.INTEGER,constructed:!1,capture:"iterations"}]};function p(e,t){return e.start().update(t).digest().getBytes()}function f(e){var t;if(e){if(!(t=s.oids[i.derToOid(e)])){var r=new Error("Unsupported PRF OID.");throw r.oid=e,r.supported=["hmacWithSHA1","hmacWithSHA224","hmacWithSHA256","hmacWithSHA384","hmacWithSHA512"],r}}else t="hmacWithSHA1";return h(t)}function h(e){var t=a.md;switch(e){case"hmacWithSHA224":t=a.md.sha512;case"hmacWithSHA1":case"hmacWithSHA256":case"hmacWithSHA384":case"hmacWithSHA512":e=e.substr(8).toLowerCase();break;default:var r=new Error("Unsupported PRF algorithm.");throw r.algorithm=e,r.supported=["hmacWithSHA1","hmacWithSHA224","hmacWithSHA256","hmacWithSHA384","hmacWithSHA512"],r}if(!t||!(e in t))throw new Error("Unknown hash algorithm: "+e);return t[e].create()}s.encryptPrivateKeyInfo=function(e,t,r){(r=r||{}).saltSize=r.saltSize||8,r.count=r.count||2048,r.algorithm=r.algorithm||"aes128",r.prfAlgorithm=r.prfAlgorithm||"sha1";var n,c,u,l=a.random.getBytesSync(r.saltSize),p=r.count,f=i.integerToDer(p);if(0===r.algorithm.indexOf("aes")||"des"===r.algorithm){var d,y,g;switch(r.algorithm){case"aes128":n=16,d=16,y=o["aes128-CBC"],g=a.aes.createEncryptionCipher;break;case"aes192":n=24,d=16,y=o["aes192-CBC"],g=a.aes.createEncryptionCipher;break;case"aes256":n=32,d=16,y=o["aes256-CBC"],g=a.aes.createEncryptionCipher;break;case"des":n=8,d=8,y=o.desCBC,g=a.des.createEncryptionCipher;break;default:throw(T=new Error("Cannot encrypt private key. Unknown encryption algorithm.")).algorithm=r.algorithm,T}var v="hmacWith"+r.prfAlgorithm.toUpperCase(),m=h(v),C=a.pkcs5.pbkdf2(t,l,p,n,m),E=a.random.getBytesSync(d);(I=g(C)).start(E),I.update(i.toDer(e)),I.finish(),u=I.output.getBytes();var S=function(e,t,r,n){var o=i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[i.create(i.Class.UNIVERSAL,i.Type.OCTETSTRING,!1,e),i.create(i.Class.UNIVERSAL,i.Type.INTEGER,!1,t.getBytes())]);"hmacWithSHA1"!==n&&o.value.push(i.create(i.Class.UNIVERSAL,i.Type.INTEGER,!1,a.util.hexToBytes(r.toString(16))),i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[i.create(i.Class.UNIVERSAL,i.Type.OID,!1,i.oidToDer(s.oids[n]).getBytes()),i.create(i.Class.UNIVERSAL,i.Type.NULL,!1,"")]));return o}(l,f,n,v);c=i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[i.create(i.Class.UNIVERSAL,i.Type.OID,!1,i.oidToDer(o.pkcs5PBES2).getBytes()),i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[i.create(i.Class.UNIVERSAL,i.Type.OID,!1,i.oidToDer(o.pkcs5PBKDF2).getBytes()),S]),i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[i.create(i.Class.UNIVERSAL,i.Type.OID,!1,i.oidToDer(y).getBytes()),i.create(i.Class.UNIVERSAL,i.Type.OCTETSTRING,!1,E)])])])}else{var T;if("3des"!==r.algorithm)throw(T=new Error("Cannot encrypt private key. Unknown encryption algorithm.")).algorithm=r.algorithm,T;n=24;var I,A=new a.util.ByteBuffer(l);C=s.pbe.generatePkcs12Key(t,A,1,p,n),E=s.pbe.generatePkcs12Key(t,A,2,p,n);(I=a.des.createEncryptionCipher(C)).start(E),I.update(i.toDer(e)),I.finish(),u=I.output.getBytes(),c=i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[i.create(i.Class.UNIVERSAL,i.Type.OID,!1,i.oidToDer(o["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()),i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[i.create(i.Class.UNIVERSAL,i.Type.OCTETSTRING,!1,l),i.create(i.Class.UNIVERSAL,i.Type.INTEGER,!1,f.getBytes())])])}return i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[c,i.create(i.Class.UNIVERSAL,i.Type.OCTETSTRING,!1,u)])},s.decryptPrivateKeyInfo=function(e,t){var r=null,n={},o=[];if(!i.validate(e,c,n,o)){var u=new Error("Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");throw u.errors=o,u}var l=i.derToOid(n.encryptionOid),p=s.pbe.getCipher(l,n.encryptionParams,t),f=a.util.createBuffer(n.encryptedData);return p.update(f),p.finish()&&(r=i.fromDer(p.output)),r},s.encryptedPrivateKeyToPem=function(e,t){var r={type:"ENCRYPTED PRIVATE KEY",body:i.toDer(e).getBytes()};return a.pem.encode(r,{maxline:t})},s.encryptedPrivateKeyFromPem=function(e){var t=a.pem.decode(e)[0];if("ENCRYPTED PRIVATE KEY"!==t.type){var r=new Error('Could not convert encrypted private key from PEM; PEM header type is "ENCRYPTED PRIVATE KEY".');throw r.headerType=t.type,r}if(t.procType&&"ENCRYPTED"===t.procType.type)throw new Error("Could not convert encrypted private key from PEM; PEM is encrypted.");return i.fromDer(t.body)},s.encryptRsaPrivateKey=function(e,t,r){if(!(r=r||{}).legacy){var n=s.wrapRsaPrivateKey(s.privateKeyToAsn1(e));return n=s.encryptPrivateKeyInfo(n,t,r),s.encryptedPrivateKeyToPem(n)}var o,c,u,l;switch(r.algorithm){case"aes128":o="AES-128-CBC",u=16,c=a.random.getBytesSync(16),l=a.aes.createEncryptionCipher;break;case"aes192":o="AES-192-CBC",u=24,c=a.random.getBytesSync(16),l=a.aes.createEncryptionCipher;break;case"aes256":o="AES-256-CBC",u=32,c=a.random.getBytesSync(16),l=a.aes.createEncryptionCipher;break;case"3des":o="DES-EDE3-CBC",u=24,c=a.random.getBytesSync(8),l=a.des.createEncryptionCipher;break;case"des":o="DES-CBC",u=8,c=a.random.getBytesSync(8),l=a.des.createEncryptionCipher;break;default:var p=new Error('Could not encrypt RSA private key; unsupported encryption algorithm "'+r.algorithm+'".');throw p.algorithm=r.algorithm,p}var f=l(a.pbe.opensslDeriveBytes(t,c.substr(0,8),u));f.start(c),f.update(i.toDer(s.privateKeyToAsn1(e))),f.finish();var h={type:"RSA PRIVATE KEY",procType:{version:"4",type:"ENCRYPTED"},dekInfo:{algorithm:o,parameters:a.util.bytesToHex(c).toUpperCase()},body:f.output.getBytes()};return a.pem.encode(h)},s.decryptRsaPrivateKey=function(e,t){var r=null,n=a.pem.decode(e)[0];if("ENCRYPTED PRIVATE KEY"!==n.type&&"PRIVATE KEY"!==n.type&&"RSA PRIVATE KEY"!==n.type)throw(u=new Error('Could not convert private key from PEM; PEM header type is not "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", or "RSA PRIVATE KEY".')).headerType=u,u;if(n.procType&&"ENCRYPTED"===n.procType.type){var o,c;switch(n.dekInfo.algorithm){case"DES-CBC":o=8,c=a.des.createDecryptionCipher;break;case"DES-EDE3-CBC":o=24,c=a.des.createDecryptionCipher;break;case"AES-128-CBC":o=16,c=a.aes.createDecryptionCipher;break;case"AES-192-CBC":o=24,c=a.aes.createDecryptionCipher;break;case"AES-256-CBC":o=32,c=a.aes.createDecryptionCipher;break;case"RC2-40-CBC":o=5,c=function(e){return a.rc2.createDecryptionCipher(e,40)};break;case"RC2-64-CBC":o=8,c=function(e){return a.rc2.createDecryptionCipher(e,64)};break;case"RC2-128-CBC":o=16,c=function(e){return a.rc2.createDecryptionCipher(e,128)};break;default:var u;throw(u=new Error('Could not decrypt private key; unsupported encryption algorithm "'+n.dekInfo.algorithm+'".')).algorithm=n.dekInfo.algorithm,u}var l=a.util.hexToBytes(n.dekInfo.parameters),p=c(a.pbe.opensslDeriveBytes(t,l.substr(0,8),o));if(p.start(l),p.update(a.util.createBuffer(n.body)),!p.finish())return r;r=p.output.getBytes()}else r=n.body;return null!==(r="ENCRYPTED PRIVATE KEY"===n.type?s.decryptPrivateKeyInfo(i.fromDer(r),t):i.fromDer(r))&&(r=s.privateKeyFromAsn1(r)),r},s.pbe.generatePkcs12Key=function(e,t,r,n,i,s){var o,c;if(null==s){if(!("sha1"in a.md))throw new Error('"sha1" hash algorithm unavailable.');s=a.md.sha1.create()}var u=s.digestLength,l=s.blockLength,p=new a.util.ByteBuffer,f=new a.util.ByteBuffer;if(null!=e){for(c=0;c<e.length;c++)f.putInt16(e.charCodeAt(c));f.putInt16(0)}var h=f.length(),d=t.length(),y=new a.util.ByteBuffer;y.fillWithByte(r,l);var g=l*Math.ceil(d/l),v=new a.util.ByteBuffer;for(c=0;c<g;c++)v.putByte(t.at(c%d));var m=l*Math.ceil(h/l),C=new a.util.ByteBuffer;for(c=0;c<m;c++)C.putByte(f.at(c%h));var E=v;E.putBuffer(C);for(var S=Math.ceil(i/u),T=1;T<=S;T++){var I=new a.util.ByteBuffer;I.putBytes(y.bytes()),I.putBytes(E.bytes());for(var A=0;A<n;A++)s.start(),s.update(I.getBytes()),I=s.digest();var B=new a.util.ByteBuffer;for(c=0;c<l;c++)B.putByte(I.at(c%u));var b=Math.ceil(d/l)+Math.ceil(h/l),N=new a.util.ByteBuffer;for(o=0;o<b;o++){var R=new a.util.ByteBuffer(E.getBytes(l)),w=511;for(c=B.length()-1;c>=0;c--)w>>=8,w+=B.at(c)+R.at(c),R.setAt(c,255&w);N.putBuffer(R)}E=N,p.putBuffer(I)}return p.truncate(p.length()-i),p},s.pbe.getCipher=function(e,t,r){switch(e){case s.oids.pkcs5PBES2:return s.pbe.getCipherForPBES2(e,t,r);case s.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:case s.oids["pbewithSHAAnd40BitRC2-CBC"]:return s.pbe.getCipherForPKCS12PBE(e,t,r);default:var a=new Error("Cannot read encrypted PBE data block. Unsupported OID.");throw a.oid=e,a.supportedOids=["pkcs5PBES2","pbeWithSHAAnd3-KeyTripleDES-CBC","pbewithSHAAnd40BitRC2-CBC"],a}},s.pbe.getCipherForPBES2=function(e,t,r){var n,o={},c=[];if(!i.validate(t,u,o,c))throw(n=new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.")).errors=c,n;if((e=i.derToOid(o.kdfOid))!==s.oids.pkcs5PBKDF2)throw(n=new Error("Cannot read encrypted private key. Unsupported key derivation function OID.")).oid=e,n.supportedOids=["pkcs5PBKDF2"],n;if((e=i.derToOid(o.encOid))!==s.oids["aes128-CBC"]&&e!==s.oids["aes192-CBC"]&&e!==s.oids["aes256-CBC"]&&e!==s.oids["des-EDE3-CBC"]&&e!==s.oids.desCBC)throw(n=new Error("Cannot read encrypted private key. Unsupported encryption scheme OID.")).oid=e,n.supportedOids=["aes128-CBC","aes192-CBC","aes256-CBC","des-EDE3-CBC","desCBC"],n;var l,p,h=o.kdfSalt,d=a.util.createBuffer(o.kdfIterationCount);switch(d=d.getInt(d.length()<<3),s.oids[e]){case"aes128-CBC":l=16,p=a.aes.createDecryptionCipher;break;case"aes192-CBC":l=24,p=a.aes.createDecryptionCipher;break;case"aes256-CBC":l=32,p=a.aes.createDecryptionCipher;break;case"des-EDE3-CBC":l=24,p=a.des.createDecryptionCipher;break;case"desCBC":l=8,p=a.des.createDecryptionCipher}var y=f(o.prfOid),g=a.pkcs5.pbkdf2(r,h,d,l,y),v=o.encIv,m=p(g);return m.start(v),m},s.pbe.getCipherForPKCS12PBE=function(e,t,r){var n={},o=[];if(!i.validate(t,l,n,o))throw(y=new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.")).errors=o,y;var c,u,p,h=a.util.createBuffer(n.salt),d=a.util.createBuffer(n.iterations);switch(d=d.getInt(d.length()<<3),e){case s.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:c=24,u=8,p=a.des.startDecrypting;break;case s.oids["pbewithSHAAnd40BitRC2-CBC"]:c=5,u=8,p=function(e,t){var r=a.rc2.createDecryptionCipher(e,40);return r.start(t,null),r};break;default:var y;throw(y=new Error("Cannot read PKCS #12 PBE data block. Unsupported OID.")).oid=e,y}var g=f(n.prfOid),v=s.pbe.generatePkcs12Key(r,h,1,d,c,g);return g.start(),p(v,s.pbe.generatePkcs12Key(r,h,2,d,u,g))},s.pbe.opensslDeriveBytes=function(e,t,r,n){if(null==n){if(!("md5"in a.md))throw new Error('"md5" hash algorithm unavailable.');n=a.md.md5.create()}null===t&&(t="");for(var i=[p(n,e+t)],s=16,o=1;s<r;++o,s+=16)i.push(p(n,i[o-1]+e+t));return i.join("").substr(0,r)}},function(e,t,r){var a=r(0);r(4),r(1);var n=e.exports=a.sha256=a.sha256||{};a.md.sha256=a.md.algorithms.sha256=n,n.create=function(){s||(i=String.fromCharCode(128),i+=a.util.fillString(String.fromCharCode(0),64),o=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],s=!0);var e=null,t=a.util.createBuffer(),r=new Array(64),n={algorithm:"sha256",blockLength:64,digestLength:32,messageLength:0,fullMessageLength:null,messageLengthSize:8,start:function(){n.messageLength=0,n.fullMessageLength=n.messageLength64=[];for(var r=n.messageLengthSize/4,i=0;i<r;++i)n.fullMessageLength.push(0);return t=a.util.createBuffer(),e={h0:1779033703,h1:3144134277,h2:1013904242,h3:2773480762,h4:1359893119,h5:2600822924,h6:528734635,h7:1541459225},n}};return n.start(),n.update=function(i,s){"utf8"===s&&(i=a.util.encodeUtf8(i));var o=i.length;n.messageLength+=o,o=[o/4294967296>>>0,o>>>0];for(var u=n.fullMessageLength.length-1;u>=0;--u)n.fullMessageLength[u]+=o[1],o[1]=o[0]+(n.fullMessageLength[u]/4294967296>>>0),n.fullMessageLength[u]=n.fullMessageLength[u]>>>0,o[0]=o[1]/4294967296>>>0;return t.putBytes(i),c(e,r,t),(t.read>2048||0===t.length())&&t.compact(),n},n.digest=function(){var s=a.util.createBuffer();s.putBytes(t.bytes());var o,u=n.fullMessageLength[n.fullMessageLength.length-1]+n.messageLengthSize&n.blockLength-1;s.putBytes(i.substr(0,n.blockLength-u));for(var l=8*n.fullMessageLength[0],p=0;p<n.fullMessageLength.length-1;++p)l+=(o=8*n.fullMessageLength[p+1])/4294967296>>>0,s.putInt32(l>>>0),l=o>>>0;s.putInt32(l);var f={h0:e.h0,h1:e.h1,h2:e.h2,h3:e.h3,h4:e.h4,h5:e.h5,h6:e.h6,h7:e.h7};c(f,r,s);var h=a.util.createBuffer();return h.putInt32(f.h0),h.putInt32(f.h1),h.putInt32(f.h2),h.putInt32(f.h3),h.putInt32(f.h4),h.putInt32(f.h5),h.putInt32(f.h6),h.putInt32(f.h7),h},n};var i=null,s=!1,o=null;function c(e,t,r){for(var a,n,i,s,c,u,l,p,f,h,d,y,g,v=r.length();v>=64;){for(c=0;c<16;++c)t[c]=r.getInt32();for(;c<64;++c)a=((a=t[c-2])>>>17|a<<15)^(a>>>19|a<<13)^a>>>10,n=((n=t[c-15])>>>7|n<<25)^(n>>>18|n<<14)^n>>>3,t[c]=a+t[c-7]+n+t[c-16]|0;for(u=e.h0,l=e.h1,p=e.h2,f=e.h3,h=e.h4,d=e.h5,y=e.h6,g=e.h7,c=0;c<64;++c)i=(u>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),s=u&l|p&(u^l),a=g+((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))+(y^h&(d^y))+o[c]+t[c],g=y,y=d,d=h,h=f+a>>>0,f=p,p=l,l=u,u=a+(n=i+s)>>>0;e.h0=e.h0+u|0,e.h1=e.h1+l|0,e.h2=e.h2+p|0,e.h3=e.h3+f|0,e.h4=e.h4+h|0,e.h5=e.h5+d|0,e.h6=e.h6+y|0,e.h7=e.h7+g|0,v-=64}}},function(e,t,r){var a=r(0);r(1);var n=null;!a.util.isNodejs||a.options.usePureJavaScript||process.versions["node-webkit"]||(n=r(16)),(e.exports=a.prng=a.prng||{}).create=function(e){for(var t={plugin:e,key:null,seed:null,time:null,reseeds:0,generated:0,keyBytes:""},r=e.md,i=new Array(32),s=0;s<32;++s)i[s]=r.create();function o(){if(t.pools[0].messageLength>=32)return c();var e=32-t.pools[0].messageLength<<5;t.collect(t.seedFileSync(e)),c()}function c(){t.reseeds=4294967295===t.reseeds?0:t.reseeds+1;var e=t.plugin.md.create();e.update(t.keyBytes);for(var r=1,a=0;a<32;++a)t.reseeds%r==0&&(e.update(t.pools[a].digest().getBytes()),t.pools[a].start()),r<<=1;t.keyBytes=e.digest().getBytes(),e.start(),e.update(t.keyBytes);var n=e.digest().getBytes();t.key=t.plugin.formatKey(t.keyBytes),t.seed=t.plugin.formatSeed(n),t.generated=0}function u(e){var t=null,r=a.util.globalScope,n=r.crypto||r.msCrypto;n&&n.getRandomValues&&(t=function(e){return n.getRandomValues(e)});var i=a.util.createBuffer();if(t)for(;i.length()<e;){var s=Math.max(1,Math.min(e-i.length(),65536)/4),o=new Uint32Array(Math.floor(s));try{t(o);for(var c=0;c<o.length;++c)i.putInt32(o[c])}catch(e){if(!("undefined"!=typeof QuotaExceededError&&e instanceof QuotaExceededError))throw e}}if(i.length()<e)for(var u,l,p,f=Math.floor(65536*Math.random());i.length()<e;){l=16807*(65535&f),l+=(32767&(u=16807*(f>>16)))<<16,f=4294967295&(l=(2147483647&(l+=u>>15))+(l>>31));for(c=0;c<3;++c)p=f>>>(c<<3),p^=Math.floor(256*Math.random()),i.putByte(255&p)}return i.getBytes(e)}return t.pools=i,t.pool=0,t.generate=function(e,r){if(!r)return t.generateSync(e);var n=t.plugin.cipher,i=t.plugin.increment,s=t.plugin.formatKey,o=t.plugin.formatSeed,u=a.util.createBuffer();t.key=null,function l(p){if(p)return r(p);if(u.length()>=e)return r(null,u.getBytes(e));t.generated>1048575&&(t.key=null);if(null===t.key)return a.util.nextTick((function(){!function(e){if(t.pools[0].messageLength>=32)return c(),e();var r=32-t.pools[0].messageLength<<5;t.seedFile(r,(function(r,a){if(r)return e(r);t.collect(a),c(),e()}))}(l)}));var f=n(t.key,t.seed);t.generated+=f.length,u.putBytes(f),t.key=s(n(t.key,i(t.seed))),t.seed=o(n(t.key,t.seed)),a.util.setImmediate(l)}()},t.generateSync=function(e){var r=t.plugin.cipher,n=t.plugin.increment,i=t.plugin.formatKey,s=t.plugin.formatSeed;t.key=null;for(var c=a.util.createBuffer();c.length()<e;){t.generated>1048575&&(t.key=null),null===t.key&&o();var u=r(t.key,t.seed);t.generated+=u.length,c.putBytes(u),t.key=i(r(t.key,n(t.seed))),t.seed=s(r(t.key,t.seed))}return c.getBytes(e)},n?(t.seedFile=function(e,t){n.randomBytes(e,(function(e,r){if(e)return t(e);t(null,r.toString())}))},t.seedFileSync=function(e){return n.randomBytes(e).toString()}):(t.seedFile=function(e,t){try{t(null,u(e))}catch(e){t(e)}},t.seedFileSync=u),t.collect=function(e){for(var r=e.length,a=0;a<r;++a)t.pools[t.pool].update(e.substr(a,1)),t.pool=31===t.pool?0:t.pool+1},t.collectInt=function(e,r){for(var a="",n=0;n<r;n+=8)a+=String.fromCharCode(e>>n&255);t.collect(a)},t.registerWorker=function(e){if(e===self)t.seedFile=function(e,t){self.addEventListener("message",(function e(r){var a=r.data;a.forge&&a.forge.prng&&(self.removeEventListener("message",e),t(a.forge.prng.err,a.forge.prng.bytes))})),self.postMessage({forge:{prng:{needed:e}}})};else{e.addEventListener("message",(function(r){var a=r.data;a.forge&&a.forge.prng&&t.seedFile(a.forge.prng.needed,(function(t,r){e.postMessage({forge:{prng:{err:t,bytes:r}}})}))}))}},t}},function(e,t,r){var a=r(0);r(1);var n=[217,120,249,196,25,221,181,237,40,233,253,121,74,160,216,157,198,126,55,131,43,118,83,142,98,76,100,136,68,139,251,162,23,154,89,245,135,179,79,19,97,69,109,141,9,129,125,50,189,143,64,235,134,183,123,11,240,149,33,34,92,107,78,130,84,214,101,147,206,96,178,28,115,86,192,20,167,140,241,220,18,117,202,31,59,190,228,209,66,61,212,48,163,60,182,38,111,191,14,218,70,105,7,87,39,242,29,155,188,148,67,3,248,17,199,246,144,239,62,231,6,195,213,47,200,102,30,215,8,232,234,222,128,82,238,247,132,170,114,172,53,77,106,42,150,26,210,113,90,21,73,116,75,159,208,94,4,24,164,236,194,224,65,110,15,81,203,204,36,145,175,80,161,244,112,57,153,124,58,133,35,184,180,122,252,2,54,91,37,85,151,49,45,93,250,152,227,138,146,174,5,223,41,16,103,108,186,201,211,0,230,207,225,158,168,44,99,22,1,63,88,226,137,169,13,56,52,27,171,51,255,176,187,72,12,95,185,177,205,46,197,243,219,71,229,165,156,119,10,166,32,104,254,127,193,173],i=[1,2,3,5],s=function(e,t){return e<<t&65535|(65535&e)>>16-t},o=function(e,t){return(65535&e)>>t|e<<16-t&65535};e.exports=a.rc2=a.rc2||{},a.rc2.expandKey=function(e,t){"string"==typeof e&&(e=a.util.createBuffer(e)),t=t||128;var r,i=e,s=e.length(),o=t,c=Math.ceil(o/8),u=255>>(7&o);for(r=s;r<128;r++)i.putByte(n[i.at(r-1)+i.at(r-s)&255]);for(i.setAt(128-c,n[i.at(128-c)&u]),r=127-c;r>=0;r--)i.setAt(r,n[i.at(r+1)^i.at(r+c)]);return i};var c=function(e,t,r){var n,c,u,l,p=!1,f=null,h=null,d=null,y=[];for(e=a.rc2.expandKey(e,t),u=0;u<64;u++)y.push(e.getInt16Le());r?(n=function(e){for(u=0;u<4;u++)e[u]+=y[l]+(e[(u+3)%4]&e[(u+2)%4])+(~e[(u+3)%4]&e[(u+1)%4]),e[u]=s(e[u],i[u]),l++},c=function(e){for(u=0;u<4;u++)e[u]+=y[63&e[(u+3)%4]]}):(n=function(e){for(u=3;u>=0;u--)e[u]=o(e[u],i[u]),e[u]-=y[l]+(e[(u+3)%4]&e[(u+2)%4])+(~e[(u+3)%4]&e[(u+1)%4]),l--},c=function(e){for(u=3;u>=0;u--)e[u]-=y[63&e[(u+3)%4]]});var g=function(e){var t=[];for(u=0;u<4;u++){var a=f.getInt16Le();null!==d&&(r?a^=d.getInt16Le():d.putInt16Le(a)),t.push(65535&a)}l=r?0:63;for(var n=0;n<e.length;n++)for(var i=0;i<e[n][0];i++)e[n][1](t);for(u=0;u<4;u++)null!==d&&(r?d.putInt16Le(t[u]):t[u]^=d.getInt16Le()),h.putInt16Le(t[u])},v=null;return v={start:function(e,t){e&&"string"==typeof e&&(e=a.util.createBuffer(e)),p=!1,f=a.util.createBuffer(),h=t||new a.util.createBuffer,d=e,v.output=h},update:function(e){for(p||f.putBuffer(e);f.length()>=8;)g([[5,n],[1,c],[6,n],[1,c],[5,n]])},finish:function(e){var t=!0;if(r)if(e)t=e(8,f,!r);else{var a=8===f.length()?8:8-f.length();f.fillWithByte(a,a)}if(t&&(p=!0,v.update()),!r&&(t=0===f.length()))if(e)t=e(8,h,!r);else{var n=h.length(),i=h.at(n-1);i>n?t=!1:h.truncate(i)}return t}}};a.rc2.startEncrypting=function(e,t,r){var n=a.rc2.createEncryptionCipher(e,128);return n.start(t,r),n},a.rc2.createEncryptionCipher=function(e,t){return c(e,t,!0)},a.rc2.startDecrypting=function(e,t,r){var n=a.rc2.createDecryptionCipher(e,128);return n.start(t,r),n},a.rc2.createDecryptionCipher=function(e,t){return c(e,t,!1)}},function(e,t,r){var a=r(0);r(1),r(2),r(9);var n=e.exports=a.pkcs1=a.pkcs1||{};function i(e,t,r){r||(r=a.md.sha1.create());for(var n="",i=Math.ceil(t/r.digestLength),s=0;s<i;++s){var o=String.fromCharCode(s>>24&255,s>>16&255,s>>8&255,255&s);r.start(),r.update(e+o),n+=r.digest().getBytes()}return n.substring(0,t)}n.encode_rsa_oaep=function(e,t,r){var n,s,o,c;"string"==typeof r?(n=r,s=arguments[3]||void 0,o=arguments[4]||void 0):r&&(n=r.label||void 0,s=r.seed||void 0,o=r.md||void 0,r.mgf1&&r.mgf1.md&&(c=r.mgf1.md)),o?o.start():o=a.md.sha1.create(),c||(c=o);var u=Math.ceil(e.n.bitLength()/8),l=u-2*o.digestLength-2;if(t.length>l)throw(g=new Error("RSAES-OAEP input message length is too long.")).length=t.length,g.maxLength=l,g;n||(n=""),o.update(n,"raw");for(var p=o.digest(),f="",h=l-t.length,d=0;d<h;d++)f+="\0";var y=p.getBytes()+f+""+t;if(s){if(s.length!==o.digestLength){var g;throw(g=new Error("Invalid RSAES-OAEP seed. The seed length must match the digest length.")).seedLength=s.length,g.digestLength=o.digestLength,g}}else s=a.random.getBytes(o.digestLength);var v=i(s,u-o.digestLength-1,c),m=a.util.xorBytes(y,v,y.length),C=i(m,o.digestLength,c),E=a.util.xorBytes(s,C,s.length);return"\0"+E+m},n.decode_rsa_oaep=function(e,t,r){var n,s,o;"string"==typeof r?(n=r,s=arguments[3]||void 0):r&&(n=r.label||void 0,s=r.md||void 0,r.mgf1&&r.mgf1.md&&(o=r.mgf1.md));var c=Math.ceil(e.n.bitLength()/8);if(t.length!==c)throw(m=new Error("RSAES-OAEP encoded message length is invalid.")).length=t.length,m.expectedLength=c,m;if(void 0===s?s=a.md.sha1.create():s.start(),o||(o=s),c<2*s.digestLength+2)throw new Error("RSAES-OAEP key is too short for the hash function.");n||(n=""),s.update(n,"raw");for(var u=s.digest().getBytes(),l=t.charAt(0),p=t.substring(1,s.digestLength+1),f=t.substring(1+s.digestLength),h=i(f,s.digestLength,o),d=a.util.xorBytes(p,h,p.length),y=i(d,c-s.digestLength-1,o),g=a.util.xorBytes(f,y,f.length),v=g.substring(0,s.digestLength),m="\0"!==l,C=0;C<s.digestLength;++C)m|=u.charAt(C)!==v.charAt(C);for(var E=1,S=s.digestLength,T=s.digestLength;T<g.length;T++){var I=g.charCodeAt(T),A=1&I^1,B=E?65534:0;m|=I&B,S+=E&=A}if(m||1!==g.charCodeAt(S))throw new Error("Invalid RSAES-OAEP padding.");return g.substring(S+1)}},function(e,t,r){var a=r(0);r(1),r(12),r(2),function(){if(a.prime)e.exports=a.prime;else{var t=e.exports=a.prime=a.prime||{},r=a.jsbn.BigInteger,n=[6,4,2,4,2,4,6,2],i=new r(null);i.fromInt(30);var s=function(e,t){return e|t};t.generateProbablePrime=function(e,t,n){"function"==typeof t&&(n=t,t={});var i=(t=t||{}).algorithm||"PRIMEINC";"string"==typeof i&&(i={name:i}),i.options=i.options||{};var s=t.prng||a.random,u={nextBytes:function(e){for(var t=s.getBytesSync(e.length),r=0;r<e.length;++r)e[r]=t.charCodeAt(r)}};if("PRIMEINC"===i.name)return function(e,t,n,i){if("workers"in n)return function(e,t,n,i){if("undefined"==typeof Worker)return o(e,t,n,i);var s=c(e,t),u=n.workers,l=n.workLoad||100,p=30*l/8,f=n.workerScript||"forge/prime.worker.js";if(-1===u)return a.util.estimateCores((function(e,t){e&&(t=2),u=t-1,h()}));function h(){u=Math.max(1,u);for(var a=[],n=0;n<u;++n)a[n]=new Worker(f);for(n=0;n<u;++n)a[n].addEventListener("message",h);var o=!1;function h(n){if(!o){0;var u=n.data;if(u.found){for(var f=0;f<a.length;++f)a[f].terminate();return o=!0,i(null,new r(u.prime,16))}s.bitLength()>e&&(s=c(e,t));var h=s.toString(16);n.target.postMessage({hex:h,workLoad:l}),s.dAddOffset(p,0)}}}h()}(e,t,n,i);return o(e,t,n,i)}(e,u,i.options,n);throw new Error("Invalid prime generation algorithm: "+i.name)}}function o(e,t,r,i){var s=c(e,t),o=function(e){return e<=100?27:e<=150?18:e<=200?15:e<=250?12:e<=300?9:e<=350?8:e<=400?7:e<=500?6:e<=600?5:e<=800?4:e<=1250?3:2}(s.bitLength());"millerRabinTests"in r&&(o=r.millerRabinTests);var u=10;"maxBlockTime"in r&&(u=r.maxBlockTime),function e(t,r,i,s,o,u,l){var p=+new Date;do{if(t.bitLength()>r&&(t=c(r,i)),t.isProbablePrime(o))return l(null,t);t.dAddOffset(n[s++%8],0)}while(u<0||+new Date-p<u);a.util.setImmediate((function(){e(t,r,i,s,o,u,l)}))}(s,e,t,0,o,u,i)}function c(e,t){var a=new r(e,t),n=e-1;return a.testBit(n)||a.bitwiseTo(r.ONE.shiftLeft(n),s,a),a.dAddOffset(31-a.mod(i).byteValue(),0),a}}()},function(e,t,r){var a=r(0);r(3),r(8),r(6),r(29),r(22),r(2),r(11),r(9),r(1),r(17);var n=a.asn1,i=a.pki,s=e.exports=a.pkcs12=a.pkcs12||{},o={name:"ContentInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"ContentInfo.contentType",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"contentType"},{name:"ContentInfo.content",tagClass:n.Class.CONTEXT_SPECIFIC,constructed:!0,captureAsn1:"content"}]},c={name:"PFX",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"PFX.version",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"version"},o,{name:"PFX.macData",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,optional:!0,captureAsn1:"mac",value:[{name:"PFX.macData.mac",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"PFX.macData.mac.digestAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"PFX.macData.mac.digestAlgorithm.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"macAlgorithm"},{name:"PFX.macData.mac.digestAlgorithm.parameters",tagClass:n.Class.UNIVERSAL,captureAsn1:"macAlgorithmParameters"}]},{name:"PFX.macData.mac.digest",tagClass:n.Class.UNIVERSAL,type:n.Type.OCTETSTRING,constructed:!1,capture:"macDigest"}]},{name:"PFX.macData.macSalt",tagClass:n.Class.UNIVERSAL,type:n.Type.OCTETSTRING,constructed:!1,capture:"macSalt"},{name:"PFX.macData.iterations",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,optional:!0,capture:"macIterations"}]}]},u={name:"SafeBag",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"SafeBag.bagId",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"bagId"},{name:"SafeBag.bagValue",tagClass:n.Class.CONTEXT_SPECIFIC,constructed:!0,captureAsn1:"bagValue"},{name:"SafeBag.bagAttributes",tagClass:n.Class.UNIVERSAL,type:n.Type.SET,constructed:!0,optional:!0,capture:"bagAttributes"}]},l={name:"Attribute",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"Attribute.attrId",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"oid"},{name:"Attribute.attrValues",tagClass:n.Class.UNIVERSAL,type:n.Type.SET,constructed:!0,capture:"values"}]},p={name:"CertBag",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"CertBag.certId",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"certId"},{name:"CertBag.certValue",tagClass:n.Class.CONTEXT_SPECIFIC,constructed:!0,value:[{name:"CertBag.certValue[0]",tagClass:n.Class.UNIVERSAL,type:n.Class.OCTETSTRING,constructed:!1,capture:"cert"}]}]};function f(e,t,r,a){for(var n=[],i=0;i<e.length;i++)for(var s=0;s<e[i].safeBags.length;s++){var o=e[i].safeBags[s];void 0!==a&&o.type!==a||(null!==t?void 0!==o.attributes[t]&&o.attributes[t].indexOf(r)>=0&&n.push(o):n.push(o))}return n}function h(e){if(e.composed||e.constructed){for(var t=a.util.createBuffer(),r=0;r<e.value.length;++r)t.putBytes(e.value[r].value);e.composed=e.constructed=!1,e.value=t.getBytes()}return e}function d(e,t){var r={},s=[];if(!n.validate(e,a.pkcs7.asn1.encryptedDataValidator,r,s))throw(o=new Error("Cannot read EncryptedContentInfo.")).errors=s,o;var o,c=n.derToOid(r.contentType);if(c!==i.oids.data)throw(o=new Error("PKCS#12 EncryptedContentInfo ContentType is not Data.")).oid=c,o;c=n.derToOid(r.encAlgorithm);var u=i.pbe.getCipher(c,r.encParameter,t),l=h(r.encryptedContentAsn1),p=a.util.createBuffer(l.value);if(u.update(p),!u.finish())throw new Error("Failed to decrypt PKCS#12 SafeContents.");return u.output.getBytes()}function y(e,t,r){if(!t&&0===e.length)return[];if((e=n.fromDer(e,t)).tagClass!==n.Class.UNIVERSAL||e.type!==n.Type.SEQUENCE||!0!==e.constructed)throw new Error("PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag.");for(var a=[],s=0;s<e.value.length;s++){var o=e.value[s],c={},l=[];if(!n.validate(o,u,c,l))throw(v=new Error("Cannot read SafeBag.")).errors=l,v;var f,h,d={type:n.derToOid(c.bagId),attributes:g(c.bagAttributes)};a.push(d);var y=c.bagValue.value[0];switch(d.type){case i.oids.pkcs8ShroudedKeyBag:if(null===(y=i.decryptPrivateKeyInfo(y,r)))throw new Error("Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?");case i.oids.keyBag:try{d.key=i.privateKeyFromAsn1(y)}catch(e){d.key=null,d.asn1=y}continue;case i.oids.certBag:f=p,h=function(){if(n.derToOid(c.certId)!==i.oids.x509Certificate){var e=new Error("Unsupported certificate type, only X.509 supported.");throw e.oid=n.derToOid(c.certId),e}var r=n.fromDer(c.cert,t);try{d.cert=i.certificateFromAsn1(r,!0)}catch(e){d.cert=null,d.asn1=r}};break;default:var v;throw(v=new Error("Unsupported PKCS#12 SafeBag type.")).oid=d.type,v}if(void 0!==f&&!n.validate(y,f,c,l))throw(v=new Error("Cannot read PKCS#12 "+f.name)).errors=l,v;h()}return a}function g(e){var t={};if(void 0!==e)for(var r=0;r<e.length;++r){var a={},s=[];if(!n.validate(e[r],l,a,s)){var o=new Error("Cannot read PKCS#12 BagAttribute.");throw o.errors=s,o}var c=n.derToOid(a.oid);if(void 0!==i.oids[c]){t[i.oids[c]]=[];for(var u=0;u<a.values.length;++u)t[i.oids[c]].push(a.values[u].value)}}return t}s.pkcs12FromAsn1=function(e,t,r){"string"==typeof t?(r=t,t=!0):void 0===t&&(t=!0);var u={};if(!n.validate(e,c,u,[]))throw(l=new Error("Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.")).errors=l,l;var l,p={version:u.version.charCodeAt(0),safeContents:[],getBags:function(e){var t,r={};return"localKeyId"in e?t=e.localKeyId:"localKeyIdHex"in e&&(t=a.util.hexToBytes(e.localKeyIdHex)),void 0===t&&!("friendlyName"in e)&&"bagType"in e&&(r[e.bagType]=f(p.safeContents,null,null,e.bagType)),void 0!==t&&(r.localKeyId=f(p.safeContents,"localKeyId",t,e.bagType)),"friendlyName"in e&&(r.friendlyName=f(p.safeContents,"friendlyName",e.friendlyName,e.bagType)),r},getBagsByFriendlyName:function(e,t){return f(p.safeContents,"friendlyName",e,t)},getBagsByLocalKeyId:function(e,t){return f(p.safeContents,"localKeyId",e,t)}};if(3!==u.version.charCodeAt(0))throw(l=new Error("PKCS#12 PFX of version other than 3 not supported.")).version=u.version.charCodeAt(0),l;if(n.derToOid(u.contentType)!==i.oids.data)throw(l=new Error("Only PKCS#12 PFX in password integrity mode supported.")).oid=n.derToOid(u.contentType),l;var g=u.content.value[0];if(g.tagClass!==n.Class.UNIVERSAL||g.type!==n.Type.OCTETSTRING)throw new Error("PKCS#12 authSafe content data is not an OCTET STRING.");if(g=h(g),u.mac){var v=null,m=0,C=n.derToOid(u.macAlgorithm);switch(C){case i.oids.sha1:v=a.md.sha1.create(),m=20;break;case i.oids.sha256:v=a.md.sha256.create(),m=32;break;case i.oids.sha384:v=a.md.sha384.create(),m=48;break;case i.oids.sha512:v=a.md.sha512.create(),m=64;break;case i.oids.md5:v=a.md.md5.create(),m=16}if(null===v)throw new Error("PKCS#12 uses unsupported MAC algorithm: "+C);var E=new a.util.ByteBuffer(u.macSalt),S="macIterations"in u?parseInt(a.util.bytesToHex(u.macIterations),16):1,T=s.generateKey(r,E,3,S,m,v),I=a.hmac.create();if(I.start(v,T),I.update(g.value),I.getMac().getBytes()!==u.macDigest)throw new Error("PKCS#12 MAC could not be verified. Invalid password?")}return function(e,t,r,a){if((t=n.fromDer(t,r)).tagClass!==n.Class.UNIVERSAL||t.type!==n.Type.SEQUENCE||!0!==t.constructed)throw new Error("PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo");for(var s=0;s<t.value.length;s++){var c=t.value[s],u={},l=[];if(!n.validate(c,o,u,l))throw(v=new Error("Cannot read ContentInfo.")).errors=l,v;var p={encrypted:!1},f=null,g=u.content.value[0];switch(n.derToOid(u.contentType)){case i.oids.data:if(g.tagClass!==n.Class.UNIVERSAL||g.type!==n.Type.OCTETSTRING)throw new Error("PKCS#12 SafeContents Data is not an OCTET STRING.");f=h(g).value;break;case i.oids.encryptedData:f=d(g,a),p.encrypted=!0;break;default:var v;throw(v=new Error("Unsupported PKCS#12 contentType.")).contentType=n.derToOid(u.contentType),v}p.safeBags=y(f,r,a),e.safeContents.push(p)}}(p,g.value,t,r),p},s.toPkcs12Asn1=function(e,t,r,o){(o=o||{}).saltSize=o.saltSize||8,o.count=o.count||2048,o.algorithm=o.algorithm||o.encAlgorithm||"aes128","useMac"in o||(o.useMac=!0),"localKeyId"in o||(o.localKeyId=null),"generateLocalKeyId"in o||(o.generateLocalKeyId=!0);var c,u=o.localKeyId;if(null!==u)u=a.util.hexToBytes(u);else if(o.generateLocalKeyId)if(t){var l=a.util.isArray(t)?t[0]:t;"string"==typeof l&&(l=i.certificateFromPem(l)),(N=a.md.sha1.create()).update(n.toDer(i.certificateToAsn1(l)).getBytes()),u=N.digest().getBytes()}else u=a.random.getBytes(20);var p=[];null!==u&&p.push(n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.localKeyId).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SET,!0,[n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,u)])])),"friendlyName"in o&&p.push(n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.friendlyName).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SET,!0,[n.create(n.Class.UNIVERSAL,n.Type.BMPSTRING,!1,o.friendlyName)])])),p.length>0&&(c=n.create(n.Class.UNIVERSAL,n.Type.SET,!0,p));var f=[],h=[];null!==t&&(h=a.util.isArray(t)?t:[t]);for(var d=[],y=0;y<h.length;++y){"string"==typeof(t=h[y])&&(t=i.certificateFromPem(t));var g=0===y?c:void 0,v=i.certificateToAsn1(t),m=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.certBag).getBytes()),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.x509Certificate).getBytes()),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,n.toDer(v).getBytes())])])]),g]);d.push(m)}if(d.length>0){var C=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,d),E=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.data).getBytes()),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,n.toDer(C).getBytes())])]);f.push(E)}var S=null;if(null!==e){var T=i.wrapRsaPrivateKey(i.privateKeyToAsn1(e));S=null===r?n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.keyBag).getBytes()),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[T]),c]):n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.pkcs8ShroudedKeyBag).getBytes()),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[i.encryptPrivateKeyInfo(T,r,o)]),c]);var I=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[S]),A=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.data).getBytes()),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,n.toDer(I).getBytes())])]);f.push(A)}var B,b=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,f);if(o.useMac){var N=a.md.sha1.create(),R=new a.util.ByteBuffer(a.random.getBytes(o.saltSize)),w=o.count,_=(e=s.generateKey(r,R,3,w,20),a.hmac.create());_.start(N,e),_.update(n.toDer(b).getBytes());var L=_.getMac();B=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.sha1).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")]),n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,L.getBytes())]),n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,R.getBytes()),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(w).getBytes())])}return n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(3).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.data).getBytes()),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,n.toDer(b).getBytes())])]),B])},s.generateKey=a.pbe.generatePkcs12Key},function(e,t,r){var a=r(0);r(3),r(1);var n=a.asn1,i=e.exports=a.pkcs7asn1=a.pkcs7asn1||{};a.pkcs7=a.pkcs7||{},a.pkcs7.asn1=i;var s={name:"ContentInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"ContentInfo.ContentType",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"contentType"},{name:"ContentInfo.content",tagClass:n.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,captureAsn1:"content"}]};i.contentInfoValidator=s;var o={name:"EncryptedContentInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedContentInfo.contentType",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"contentType"},{name:"EncryptedContentInfo.contentEncryptionAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"encAlgorithm"},{name:"EncryptedContentInfo.contentEncryptionAlgorithm.parameter",tagClass:n.Class.UNIVERSAL,captureAsn1:"encParameter"}]},{name:"EncryptedContentInfo.encryptedContent",tagClass:n.Class.CONTEXT_SPECIFIC,type:0,capture:"encryptedContent",captureAsn1:"encryptedContentAsn1"}]};i.envelopedDataValidator={name:"EnvelopedData",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"EnvelopedData.Version",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"version"},{name:"EnvelopedData.RecipientInfos",tagClass:n.Class.UNIVERSAL,type:n.Type.SET,constructed:!0,captureAsn1:"recipientInfos"}].concat(o)},i.encryptedDataValidator={name:"EncryptedData",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedData.Version",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"version"}].concat(o)};var c={name:"SignerInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"SignerInfo.version",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1},{name:"SignerInfo.issuerAndSerialNumber",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"SignerInfo.issuerAndSerialNumber.issuer",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"issuer"},{name:"SignerInfo.issuerAndSerialNumber.serialNumber",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"serial"}]},{name:"SignerInfo.digestAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"SignerInfo.digestAlgorithm.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"digestAlgorithm"},{name:"SignerInfo.digestAlgorithm.parameter",tagClass:n.Class.UNIVERSAL,constructed:!1,captureAsn1:"digestParameter",optional:!0}]},{name:"SignerInfo.authenticatedAttributes",tagClass:n.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,capture:"authenticatedAttributes"},{name:"SignerInfo.digestEncryptionAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,capture:"signatureAlgorithm"},{name:"SignerInfo.encryptedDigest",tagClass:n.Class.UNIVERSAL,type:n.Type.OCTETSTRING,constructed:!1,capture:"signature"},{name:"SignerInfo.unauthenticatedAttributes",tagClass:n.Class.CONTEXT_SPECIFIC,type:1,constructed:!0,optional:!0,capture:"unauthenticatedAttributes"}]};i.signedDataValidator={name:"SignedData",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"SignedData.Version",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"version"},{name:"SignedData.DigestAlgorithms",tagClass:n.Class.UNIVERSAL,type:n.Type.SET,constructed:!0,captureAsn1:"digestAlgorithms"},s,{name:"SignedData.Certificates",tagClass:n.Class.CONTEXT_SPECIFIC,type:0,optional:!0,captureAsn1:"certificates"},{name:"SignedData.CertificateRevocationLists",tagClass:n.Class.CONTEXT_SPECIFIC,type:1,optional:!0,captureAsn1:"crls"},{name:"SignedData.SignerInfos",tagClass:n.Class.UNIVERSAL,type:n.Type.SET,capture:"signerInfos",optional:!0,value:[c]}]},i.recipientInfoValidator={name:"RecipientInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"RecipientInfo.version",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"version"},{name:"RecipientInfo.issuerAndSerial",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"RecipientInfo.issuerAndSerial.issuer",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"issuer"},{name:"RecipientInfo.issuerAndSerial.serialNumber",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"serial"}]},{name:"RecipientInfo.keyEncryptionAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"RecipientInfo.keyEncryptionAlgorithm.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"encAlgorithm"},{name:"RecipientInfo.keyEncryptionAlgorithm.parameter",tagClass:n.Class.UNIVERSAL,constructed:!1,captureAsn1:"encParameter",optional:!0}]},{name:"RecipientInfo.encryptedKey",tagClass:n.Class.UNIVERSAL,type:n.Type.OCTETSTRING,constructed:!1,capture:"encKey"}]}},function(e,t,r){var a=r(0);r(1),a.mgf=a.mgf||{},(e.exports=a.mgf.mgf1=a.mgf1=a.mgf1||{}).create=function(e){return{generate:function(t,r){for(var n=new a.util.ByteBuffer,i=Math.ceil(r/e.digestLength),s=0;s<i;s++){var o=new a.util.ByteBuffer;o.putInt32(s),e.start(),e.update(t+o.getBytes()),n.putBuffer(e.digest())}return n.truncate(n.length()-r),n.getBytes()}}}},function(e,t,r){var a=r(0);r(4),r(1);var n=e.exports=a.sha512=a.sha512||{};a.md.sha512=a.md.algorithms.sha512=n;var i=a.sha384=a.sha512.sha384=a.sha512.sha384||{};i.create=function(){return n.create("SHA-384")},a.md.sha384=a.md.algorithms.sha384=i,a.sha512.sha256=a.sha512.sha256||{create:function(){return n.create("SHA-512/256")}},a.md["sha512/256"]=a.md.algorithms["sha512/256"]=a.sha512.sha256,a.sha512.sha224=a.sha512.sha224||{create:function(){return n.create("SHA-512/224")}},a.md["sha512/224"]=a.md.algorithms["sha512/224"]=a.sha512.sha224,n.create=function(e){if(o||(s=String.fromCharCode(128),s+=a.util.fillString(String.fromCharCode(0),128),c=[[1116352408,3609767458],[1899447441,602891725],[3049323471,3964484399],[3921009573,2173295548],[961987163,4081628472],[1508970993,3053834265],[2453635748,2937671579],[2870763221,3664609560],[3624381080,2734883394],[310598401,1164996542],[607225278,1323610764],[1426881987,3590304994],[1925078388,4068182383],[2162078206,991336113],[2614888103,633803317],[3248222580,3479774868],[3835390401,2666613458],[4022224774,944711139],[264347078,2341262773],[604807628,2007800933],[770255983,1495990901],[1249150122,1856431235],[1555081692,3175218132],[1996064986,2198950837],[2554220882,3999719339],[2821834349,766784016],[2952996808,2566594879],[3210313671,3203337956],[3336571891,1034457026],[3584528711,2466948901],[113926993,3758326383],[338241895,168717936],[666307205,1188179964],[773529912,1546045734],[1294757372,1522805485],[1396182291,2643833823],[1695183700,2343527390],[1986661051,1014477480],[2177026350,1206759142],[2456956037,344077627],[2730485921,1290863460],[2820302411,3158454273],[3259730800,3505952657],[3345764771,106217008],[3516065817,3606008344],[3600352804,1432725776],[4094571909,1467031594],[275423344,851169720],[430227734,3100823752],[506948616,1363258195],[659060556,3750685593],[883997877,3785050280],[958139571,3318307427],[1322822218,3812723403],[1537002063,2003034995],[1747873779,3602036899],[1955562222,1575990012],[2024104815,1125592928],[2227730452,2716904306],[2361852424,442776044],[2428436474,593698344],[2756734187,3733110249],[3204031479,2999351573],[3329325298,3815920427],[3391569614,3928383900],[3515267271,566280711],[3940187606,3454069534],[4118630271,4000239992],[116418474,1914138554],[174292421,2731055270],[289380356,3203993006],[460393269,320620315],[685471733,587496836],[852142971,1086792851],[1017036298,365543100],[1126000580,2618297676],[1288033470,3409855158],[1501505948,4234509866],[1607167915,987167468],[1816402316,1246189591]],(u={})["SHA-512"]=[[1779033703,4089235720],[3144134277,2227873595],[1013904242,4271175723],[2773480762,1595750129],[1359893119,2917565137],[2600822924,725511199],[528734635,4215389547],[1541459225,327033209]],u["SHA-384"]=[[3418070365,3238371032],[1654270250,914150663],[2438529370,812702999],[355462360,4144912697],[1731405415,4290775857],[2394180231,1750603025],[3675008525,1694076839],[1203062813,3204075428]],u["SHA-512/256"]=[[573645204,4230739756],[2673172387,3360449730],[596883563,1867755857],[2520282905,1497426621],[2519219938,2827943907],[3193839141,1401305490],[721525244,746961066],[246885852,2177182882]],u["SHA-512/224"]=[[2352822216,424955298],[1944164710,2312950998],[502970286,855612546],[1738396948,1479516111],[258812777,2077511080],[2011393907,79989058],[1067287976,1780299464],[286451373,2446758561]],o=!0),void 0===e&&(e="SHA-512"),!(e in u))throw new Error("Invalid SHA-512 algorithm: "+e);for(var t=u[e],r=null,n=a.util.createBuffer(),i=new Array(80),p=0;p<80;++p)i[p]=new Array(2);var f=64;switch(e){case"SHA-384":f=48;break;case"SHA-512/256":f=32;break;case"SHA-512/224":f=28}var h={algorithm:e.replace("-","").toLowerCase(),blockLength:128,digestLength:f,messageLength:0,fullMessageLength:null,messageLengthSize:16,start:function(){h.messageLength=0,h.fullMessageLength=h.messageLength128=[];for(var e=h.messageLengthSize/4,i=0;i<e;++i)h.fullMessageLength.push(0);n=a.util.createBuffer(),r=new Array(t.length);for(i=0;i<t.length;++i)r[i]=t[i].slice(0);return h}};return h.start(),h.update=function(e,t){"utf8"===t&&(e=a.util.encodeUtf8(e));var s=e.length;h.messageLength+=s,s=[s/4294967296>>>0,s>>>0];for(var o=h.fullMessageLength.length-1;o>=0;--o)h.fullMessageLength[o]+=s[1],s[1]=s[0]+(h.fullMessageLength[o]/4294967296>>>0),h.fullMessageLength[o]=h.fullMessageLength[o]>>>0,s[0]=s[1]/4294967296>>>0;return n.putBytes(e),l(r,i,n),(n.read>2048||0===n.length())&&n.compact(),h},h.digest=function(){var t=a.util.createBuffer();t.putBytes(n.bytes());var o,c=h.fullMessageLength[h.fullMessageLength.length-1]+h.messageLengthSize&h.blockLength-1;t.putBytes(s.substr(0,h.blockLength-c));for(var u=8*h.fullMessageLength[0],p=0;p<h.fullMessageLength.length-1;++p)u+=(o=8*h.fullMessageLength[p+1])/4294967296>>>0,t.putInt32(u>>>0),u=o>>>0;t.putInt32(u);var f=new Array(r.length);for(p=0;p<r.length;++p)f[p]=r[p].slice(0);l(f,i,t);var d,y=a.util.createBuffer();d="SHA-512"===e?f.length:"SHA-384"===e?f.length-2:f.length-4;for(p=0;p<d;++p)y.putInt32(f[p][0]),p===d-1&&"SHA-512/224"===e||y.putInt32(f[p][1]);return y},h};var s=null,o=!1,c=null,u=null;function l(e,t,r){for(var a,n,i,s,o,u,l,p,f,h,d,y,g,v,m,C,E,S,T,I,A,B,b,N,R,w,_,L,k,U,D,P,V,O=r.length();O>=128;){for(_=0;_<16;++_)t[_][0]=r.getInt32()>>>0,t[_][1]=r.getInt32()>>>0;for(;_<80;++_)a=(((L=(U=t[_-2])[0])>>>19|(k=U[1])<<13)^(k>>>29|L<<3)^L>>>6)>>>0,n=((L<<13|k>>>19)^(k<<3|L>>>29)^(L<<26|k>>>6))>>>0,i=(((L=(P=t[_-15])[0])>>>1|(k=P[1])<<31)^(L>>>8|k<<24)^L>>>7)>>>0,s=((L<<31|k>>>1)^(L<<24|k>>>8)^(L<<25|k>>>7))>>>0,D=t[_-7],V=t[_-16],k=n+D[1]+s+V[1],t[_][0]=a+D[0]+i+V[0]+(k/4294967296>>>0)>>>0,t[_][1]=k>>>0;for(d=e[0][0],y=e[0][1],g=e[1][0],v=e[1][1],m=e[2][0],C=e[2][1],E=e[3][0],S=e[3][1],T=e[4][0],I=e[4][1],A=e[5][0],B=e[5][1],b=e[6][0],N=e[6][1],R=e[7][0],w=e[7][1],_=0;_<80;++_)l=((T>>>14|I<<18)^(T>>>18|I<<14)^(I>>>9|T<<23))>>>0,p=(b^T&(A^b))>>>0,o=((d>>>28|y<<4)^(y>>>2|d<<30)^(y>>>7|d<<25))>>>0,u=((d<<4|y>>>28)^(y<<30|d>>>2)^(y<<25|d>>>7))>>>0,f=(d&g|m&(d^g))>>>0,h=(y&v|C&(y^v))>>>0,k=w+(((T<<18|I>>>14)^(T<<14|I>>>18)^(I<<23|T>>>9))>>>0)+((N^I&(B^N))>>>0)+c[_][1]+t[_][1],a=R+l+p+c[_][0]+t[_][0]+(k/4294967296>>>0)>>>0,n=k>>>0,i=o+f+((k=u+h)/4294967296>>>0)>>>0,s=k>>>0,R=b,w=N,b=A,N=B,A=T,B=I,T=E+a+((k=S+n)/4294967296>>>0)>>>0,I=k>>>0,E=m,S=C,m=g,C=v,g=d,v=y,d=a+i+((k=n+s)/4294967296>>>0)>>>0,y=k>>>0;k=e[0][1]+y,e[0][0]=e[0][0]+d+(k/4294967296>>>0)>>>0,e[0][1]=k>>>0,k=e[1][1]+v,e[1][0]=e[1][0]+g+(k/4294967296>>>0)>>>0,e[1][1]=k>>>0,k=e[2][1]+C,e[2][0]=e[2][0]+m+(k/4294967296>>>0)>>>0,e[2][1]=k>>>0,k=e[3][1]+S,e[3][0]=e[3][0]+E+(k/4294967296>>>0)>>>0,e[3][1]=k>>>0,k=e[4][1]+I,e[4][0]=e[4][0]+T+(k/4294967296>>>0)>>>0,e[4][1]=k>>>0,k=e[5][1]+B,e[5][0]=e[5][0]+A+(k/4294967296>>>0)>>>0,e[5][1]=k>>>0,k=e[6][1]+N,e[6][0]=e[6][0]+b+(k/4294967296>>>0)>>>0,e[6][1]=k>>>0,k=e[7][1]+w,e[7][0]=e[7][0]+R+(k/4294967296>>>0)>>>0,e[7][1]=k>>>0,O-=128}}},function(e,t,r){e.exports=r(33)},function(e,t,r){e.exports=r(0),r(5),r(36),r(3),r(13),r(10),r(38),r(8),r(40),r(41),r(42),r(30),r(15),r(7),r(26),r(28),r(43),r(21),r(27),r(24),r(18),r(2),r(25),r(44),r(20),r(1)},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){var r={};e.exports=r;var a={};r.encode=function(e,t,r){if("string"!=typeof t)throw new TypeError('"alphabet" must be a string.');if(void 0!==r&&"number"!=typeof r)throw new TypeError('"maxline" must be a number.');var a="";if(e instanceof Uint8Array){var n=0,i=t.length,s=t.charAt(0),o=[0];for(n=0;n<e.length;++n){for(var c=0,u=e[n];c<o.length;++c)u+=o[c]<<8,o[c]=u%i,u=u/i|0;for(;u>0;)o.push(u%i),u=u/i|0}for(n=0;0===e[n]&&n<e.length-1;++n)a+=s;for(n=o.length-1;n>=0;--n)a+=t[o[n]]}else a=function(e,t){var r=0,a=t.length,n=t.charAt(0),i=[0];for(r=0;r<e.length();++r){for(var s=0,o=e.at(r);s<i.length;++s)o+=i[s]<<8,i[s]=o%a,o=o/a|0;for(;o>0;)i.push(o%a),o=o/a|0}var c="";for(r=0;0===e.at(r)&&r<e.length()-1;++r)c+=n;for(r=i.length-1;r>=0;--r)c+=t[i[r]];return c}(e,t);if(r){var l=new RegExp(".{1,"+r+"}","g");a=a.match(l).join("\r\n")}return a},r.decode=function(e,t){if("string"!=typeof e)throw new TypeError('"input" must be a string.');if("string"!=typeof t)throw new TypeError('"alphabet" must be a string.');var r=a[t];if(!r){r=a[t]=[];for(var n=0;n<t.length;++n)r[t.charCodeAt(n)]=n}e=e.replace(/\s/g,"");var i=t.length,s=t.charAt(0),o=[0];for(n=0;n<e.length;n++){var c=r[e.charCodeAt(n)];if(void 0===c)return;for(var u=0,l=c;u<o.length;++u)l+=o[u]*i,o[u]=255&l,l>>=8;for(;l>0;)o.push(255&l),l>>=8}for(var p=0;e[p]===s&&p<e.length-1;++p)o.push(0);return"undefined"!=typeof Buffer?Buffer.from(o.reverse()):new Uint8Array(o.reverse())}},function(e,t,r){var a=r(0);r(5),r(20);var n=e.exports=a.tls;function i(e,t,r){var i=t.entity===a.tls.ConnectionEnd.client;e.read.cipherState={init:!1,cipher:a.cipher.createDecipher("AES-CBC",i?r.keys.server_write_key:r.keys.client_write_key),iv:i?r.keys.server_write_IV:r.keys.client_write_IV},e.write.cipherState={init:!1,cipher:a.cipher.createCipher("AES-CBC",i?r.keys.client_write_key:r.keys.server_write_key),iv:i?r.keys.client_write_IV:r.keys.server_write_IV},e.read.cipherFunction=u,e.write.cipherFunction=s,e.read.macLength=e.write.macLength=r.mac_length,e.read.macFunction=e.write.macFunction=n.hmac_sha1}function s(e,t){var r,i=!1,s=t.macFunction(t.macKey,t.sequenceNumber,e);e.fragment.putBytes(s),t.updateSequenceNumber(),r=e.version.minor===n.Versions.TLS_1_0.minor?t.cipherState.init?null:t.cipherState.iv:a.random.getBytesSync(16),t.cipherState.init=!0;var c=t.cipherState.cipher;return c.start({iv:r}),e.version.minor>=n.Versions.TLS_1_1.minor&&c.output.putBytes(r),c.update(e.fragment),c.finish(o)&&(e.fragment=c.output,e.length=e.fragment.length(),i=!0),i}function o(e,t,r){if(!r){var a=e-t.length()%e;t.fillWithByte(a-1,a)}return!0}function c(e,t,r){var a=!0;if(r){for(var n=t.length(),i=t.last(),s=n-1-i;s<n-1;++s)a=a&&t.at(s)==i;a&&t.truncate(i+1)}return a}function u(e,t){var r,i=!1;r=e.version.minor===n.Versions.TLS_1_0.minor?t.cipherState.init?null:t.cipherState.iv:e.fragment.getBytes(16),t.cipherState.init=!0;var s=t.cipherState.cipher;s.start({iv:r}),s.update(e.fragment),i=s.finish(c);var o=t.macLength,u=a.random.getBytesSync(o),l=s.output.length();l>=o?(e.fragment=s.output.getBytes(l-o),u=s.output.getBytes(o)):e.fragment=s.output.getBytes(),e.fragment=a.util.createBuffer(e.fragment),e.length=e.fragment.length();var p=t.macFunction(t.macKey,t.sequenceNumber,e);return t.updateSequenceNumber(),i=function(e,t,r){var n=a.hmac.create();return n.start("SHA1",e),n.update(t),t=n.digest().getBytes(),n.start(null,null),n.update(r),r=n.digest().getBytes(),t===r}(t.macKey,u,p)&&i}n.CipherSuites.TLS_RSA_WITH_AES_128_CBC_SHA={id:[0,47],name:"TLS_RSA_WITH_AES_128_CBC_SHA",initSecurityParameters:function(e){e.bulk_cipher_algorithm=n.BulkCipherAlgorithm.aes,e.cipher_type=n.CipherType.block,e.enc_key_length=16,e.block_length=16,e.fixed_iv_length=16,e.record_iv_length=16,e.mac_algorithm=n.MACAlgorithm.hmac_sha1,e.mac_length=20,e.mac_key_length=20},initConnectionState:i},n.CipherSuites.TLS_RSA_WITH_AES_256_CBC_SHA={id:[0,53],name:"TLS_RSA_WITH_AES_256_CBC_SHA",initSecurityParameters:function(e){e.bulk_cipher_algorithm=n.BulkCipherAlgorithm.aes,e.cipher_type=n.CipherType.block,e.enc_key_length=32,e.block_length=16,e.fixed_iv_length=16,e.record_iv_length=16,e.mac_algorithm=n.MACAlgorithm.hmac_sha1,e.mac_length=20,e.mac_key_length=20},initConnectionState:i}},function(e,t,r){var a=r(0);r(30),e.exports=a.mgf=a.mgf||{},a.mgf.mgf1=a.mgf1},function(e,t,r){var a=r(0);r(12),r(2),r(31),r(1);var n=r(39),i=n.publicKeyValidator,s=n.privateKeyValidator;if(void 0===o)var o=a.jsbn.BigInteger;var c=a.util.ByteBuffer,u="undefined"==typeof Buffer?Uint8Array:Buffer;a.pki=a.pki||{},e.exports=a.pki.ed25519=a.ed25519=a.ed25519||{};var l=a.ed25519;function p(e){var t=e.message;if(t instanceof Uint8Array||t instanceof u)return t;var r=e.encoding;if(void 0===t){if(!e.md)throw new TypeError('"options.message" or "options.md" not specified.');t=e.md.digest().getBytes(),r="binary"}if("string"==typeof t&&!r)throw new TypeError('"options.encoding" must be "binary" or "utf8".');if("string"==typeof t){if("undefined"!=typeof Buffer)return Buffer.from(t,r);t=new c(t,r)}else if(!(t instanceof c))throw new TypeError('"options.message" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a string with "options.encoding" specifying its encoding.');for(var a=new u(t.length()),n=0;n<a.length;++n)a[n]=t.at(n);return a}l.constants={},l.constants.PUBLIC_KEY_BYTE_LENGTH=32,l.constants.PRIVATE_KEY_BYTE_LENGTH=64,l.constants.SEED_BYTE_LENGTH=32,l.constants.SIGN_BYTE_LENGTH=64,l.constants.HASH_BYTE_LENGTH=64,l.generateKeyPair=function(e){var t=(e=e||{}).seed;if(void 0===t)t=a.random.getBytesSync(l.constants.SEED_BYTE_LENGTH);else if("string"==typeof t){if(t.length!==l.constants.SEED_BYTE_LENGTH)throw new TypeError('"seed" must be '+l.constants.SEED_BYTE_LENGTH+" bytes in length.")}else if(!(t instanceof Uint8Array))throw new TypeError('"seed" must be a node.js Buffer, Uint8Array, or a binary string.');t=p({message:t,encoding:"binary"});for(var r=new u(l.constants.PUBLIC_KEY_BYTE_LENGTH),n=new u(l.constants.PRIVATE_KEY_BYTE_LENGTH),i=0;i<32;++i)n[i]=t[i];return function(e,t){var r,a=[P(),P(),P(),P()],n=E(t,32);for(n[0]&=248,n[31]&=127,n[31]|=64,L(a,n),B(e,a),r=0;r<32;++r)t[r+32]=e[r]}(r,n),{publicKey:r,privateKey:n}},l.privateKeyFromAsn1=function(e){var t={},r=[];if(!a.asn1.validate(e,s,t,r)){var n=new Error("Invalid Key.");throw n.errors=r,n}var i=a.asn1.derToOid(t.privateKeyOid),o=a.oids.EdDSA25519;if(i!==o)throw new Error('Invalid OID "'+i+'"; OID must be "'+o+'".');var c=t.privateKey;return{privateKeyBytes:p({message:a.asn1.fromDer(c).value,encoding:"binary"})}},l.publicKeyFromAsn1=function(e){var t={},r=[];if(!a.asn1.validate(e,i,t,r)){var n=new Error("Invalid Key.");throw n.errors=r,n}var s=a.asn1.derToOid(t.publicKeyOid),o=a.oids.EdDSA25519;if(s!==o)throw new Error('Invalid OID "'+s+'"; OID must be "'+o+'".');var c=t.ed25519PublicKey;if(c.length!==l.constants.PUBLIC_KEY_BYTE_LENGTH)throw new Error("Key length is invalid.");return p({message:c,encoding:"binary"})},l.publicKeyFromPrivateKey=function(e){var t=p({message:(e=e||{}).privateKey,encoding:"binary"});if(t.length!==l.constants.PRIVATE_KEY_BYTE_LENGTH)throw new TypeError('"options.privateKey" must have a byte length of '+l.constants.PRIVATE_KEY_BYTE_LENGTH);for(var r=new u(l.constants.PUBLIC_KEY_BYTE_LENGTH),a=0;a<r.length;++a)r[a]=t[32+a];return r},l.sign=function(e){var t=p(e=e||{}),r=p({message:e.privateKey,encoding:"binary"});if(r.length===l.constants.SEED_BYTE_LENGTH)r=l.generateKeyPair({seed:r}).privateKey;else if(r.length!==l.constants.PRIVATE_KEY_BYTE_LENGTH)throw new TypeError('"options.privateKey" must have a byte length of '+l.constants.SEED_BYTE_LENGTH+" or "+l.constants.PRIVATE_KEY_BYTE_LENGTH);var a=new u(l.constants.SIGN_BYTE_LENGTH+t.length);!function(e,t,r,a){var n,i,s=new Float64Array(64),o=[P(),P(),P(),P()],c=E(a,32);c[0]&=248,c[31]&=127,c[31]|=64;var u=r+64;for(n=0;n<r;++n)e[64+n]=t[n];for(n=0;n<32;++n)e[32+n]=c[32+n];var l=E(e.subarray(32),r+32);for(T(l),L(o,l),B(e,o),n=32;n<64;++n)e[n]=a[n];var p=E(e,r+64);for(T(p),n=32;n<64;++n)s[n]=0;for(n=0;n<32;++n)s[n]=l[n];for(n=0;n<32;++n)for(i=0;i<32;i++)s[n+i]+=p[n]*c[i];S(e.subarray(32),s)}(a,t,t.length,r);for(var n=new u(l.constants.SIGN_BYTE_LENGTH),i=0;i<n.length;++i)n[i]=a[i];return n},l.verify=function(e){var t=p(e=e||{});if(void 0===e.signature)throw new TypeError('"options.signature" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a binary string.');var r=p({message:e.signature,encoding:"binary"});if(r.length!==l.constants.SIGN_BYTE_LENGTH)throw new TypeError('"options.signature" must have a byte length of '+l.constants.SIGN_BYTE_LENGTH);var a=p({message:e.publicKey,encoding:"binary"});if(a.length!==l.constants.PUBLIC_KEY_BYTE_LENGTH)throw new TypeError('"options.publicKey" must have a byte length of '+l.constants.PUBLIC_KEY_BYTE_LENGTH);var n,i=new u(l.constants.SIGN_BYTE_LENGTH+t.length),s=new u(l.constants.SIGN_BYTE_LENGTH+t.length);for(n=0;n<l.constants.SIGN_BYTE_LENGTH;++n)i[n]=r[n];for(n=0;n<t.length;++n)i[n+l.constants.SIGN_BYTE_LENGTH]=t[n];return function(e,t,r,a){var n,i=new u(32),s=[P(),P(),P(),P()],o=[P(),P(),P(),P()];if(-1,r<64)return-1;if(function(e,t){var r=P(),a=P(),n=P(),i=P(),s=P(),o=P(),c=P();k(e[2],h),function(e,t){var r;for(r=0;r<16;++r)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}(e[1],t),K(n,e[1]),x(i,n,d),O(n,n,e[2]),V(i,e[2],i),K(s,i),K(o,s),x(c,o,s),x(r,c,n),x(r,r,i),function(e,t){var r,a=P();for(r=0;r<16;++r)a[r]=t[r];for(r=250;r>=0;--r)K(a,a),1!==r&&x(a,a,t);for(r=0;r<16;++r)e[r]=a[r]}(r,r),x(r,r,n),x(r,r,i),x(r,r,i),x(e[0],r,i),K(a,e[0]),x(a,a,i),N(a,n)&&x(e[0],e[0],C);if(K(a,e[0]),x(a,a,i),N(a,n))return-1;w(e[0])===t[31]>>7&&O(e[0],f,e[0]);return x(e[3],e[0],e[1]),0}(o,a))return-1;for(n=0;n<r;++n)e[n]=t[n];for(n=0;n<32;++n)e[n+32]=a[n];var c=E(e,r);if(T(c),_(s,o,c),L(o,t.subarray(32)),I(s,o),B(i,s),r-=64,R(t,0,i,0)){for(n=0;n<r;++n)e[n]=0;return-1}for(n=0;n<r;++n)e[n]=t[n+64];return r}(s,i,i.length,a)>=0};var f=P(),h=P([1]),d=P([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),y=P([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),g=P([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),v=P([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),m=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]),C=P([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function E(e,t){var r=a.md.sha512.create(),n=new c(e);r.update(n.getBytes(t),"binary");var i=r.digest().getBytes();if("undefined"!=typeof Buffer)return Buffer.from(i,"binary");for(var s=new u(l.constants.HASH_BYTE_LENGTH),o=0;o<64;++o)s[o]=i.charCodeAt(o);return s}function S(e,t){var r,a,n,i;for(a=63;a>=32;--a){for(r=0,n=a-32,i=a-12;n<i;++n)t[n]+=r-16*t[a]*m[n-(a-32)],r=t[n]+128>>8,t[n]-=256*r;t[n]+=r,t[a]=0}for(r=0,n=0;n<32;++n)t[n]+=r-(t[31]>>4)*m[n],r=t[n]>>8,t[n]&=255;for(n=0;n<32;++n)t[n]-=r*m[n];for(a=0;a<32;++a)t[a+1]+=t[a]>>8,e[a]=255&t[a]}function T(e){for(var t=new Float64Array(64),r=0;r<64;++r)t[r]=e[r],e[r]=0;S(e,t)}function I(e,t){var r=P(),a=P(),n=P(),i=P(),s=P(),o=P(),c=P(),u=P(),l=P();O(r,e[1],e[0]),O(l,t[1],t[0]),x(r,r,l),V(a,e[0],e[1]),V(l,t[0],t[1]),x(a,a,l),x(n,e[3],t[3]),x(n,n,y),x(i,e[2],t[2]),V(i,i,i),O(s,a,r),O(o,i,n),V(c,i,n),V(u,a,r),x(e[0],s,o),x(e[1],u,c),x(e[2],c,o),x(e[3],s,u)}function A(e,t,r){for(var a=0;a<4;++a)D(e[a],t[a],r)}function B(e,t){var r=P(),a=P(),n=P();!function(e,t){var r,a=P();for(r=0;r<16;++r)a[r]=t[r];for(r=253;r>=0;--r)K(a,a),2!==r&&4!==r&&x(a,a,t);for(r=0;r<16;++r)e[r]=a[r]}(n,t[2]),x(r,t[0],n),x(a,t[1],n),b(e,a),e[31]^=w(r)<<7}function b(e,t){var r,a,n,i=P(),s=P();for(r=0;r<16;++r)s[r]=t[r];for(U(s),U(s),U(s),a=0;a<2;++a){for(i[0]=s[0]-65517,r=1;r<15;++r)i[r]=s[r]-65535-(i[r-1]>>16&1),i[r-1]&=65535;i[15]=s[15]-32767-(i[14]>>16&1),n=i[15]>>16&1,i[14]&=65535,D(s,i,1-n)}for(r=0;r<16;r++)e[2*r]=255&s[r],e[2*r+1]=s[r]>>8}function N(e,t){var r=new u(32),a=new u(32);return b(r,e),b(a,t),R(r,0,a,0)}function R(e,t,r,a){return function(e,t,r,a,n){var i,s=0;for(i=0;i<n;++i)s|=e[t+i]^r[a+i];return(1&s-1>>>8)-1}(e,t,r,a,32)}function w(e){var t=new u(32);return b(t,e),1&t[0]}function _(e,t,r){var a,n;for(k(e[0],f),k(e[1],h),k(e[2],h),k(e[3],f),n=255;n>=0;--n)A(e,t,a=r[n/8|0]>>(7&n)&1),I(t,e),I(e,e),A(e,t,a)}function L(e,t){var r=[P(),P(),P(),P()];k(r[0],g),k(r[1],v),k(r[2],h),x(r[3],g,v),_(e,r,t)}function k(e,t){var r;for(r=0;r<16;r++)e[r]=0|t[r]}function U(e){var t,r,a=1;for(t=0;t<16;++t)r=e[t]+a+65535,a=Math.floor(r/65536),e[t]=r-65536*a;e[0]+=a-1+37*(a-1)}function D(e,t,r){for(var a,n=~(r-1),i=0;i<16;++i)a=n&(e[i]^t[i]),e[i]^=a,t[i]^=a}function P(e){var t,r=new Float64Array(16);if(e)for(t=0;t<e.length;++t)r[t]=e[t];return r}function V(e,t,r){for(var a=0;a<16;++a)e[a]=t[a]+r[a]}function O(e,t,r){for(var a=0;a<16;++a)e[a]=t[a]-r[a]}function K(e,t){x(e,t,t)}function x(e,t,r){var a,n,i=0,s=0,o=0,c=0,u=0,l=0,p=0,f=0,h=0,d=0,y=0,g=0,v=0,m=0,C=0,E=0,S=0,T=0,I=0,A=0,B=0,b=0,N=0,R=0,w=0,_=0,L=0,k=0,U=0,D=0,P=0,V=r[0],O=r[1],K=r[2],x=r[3],M=r[4],F=r[5],j=r[6],G=r[7],H=r[8],q=r[9],Q=r[10],z=r[11],Y=r[12],X=r[13],W=r[14],Z=r[15];i+=(a=t[0])*V,s+=a*O,o+=a*K,c+=a*x,u+=a*M,l+=a*F,p+=a*j,f+=a*G,h+=a*H,d+=a*q,y+=a*Q,g+=a*z,v+=a*Y,m+=a*X,C+=a*W,E+=a*Z,s+=(a=t[1])*V,o+=a*O,c+=a*K,u+=a*x,l+=a*M,p+=a*F,f+=a*j,h+=a*G,d+=a*H,y+=a*q,g+=a*Q,v+=a*z,m+=a*Y,C+=a*X,E+=a*W,S+=a*Z,o+=(a=t[2])*V,c+=a*O,u+=a*K,l+=a*x,p+=a*M,f+=a*F,h+=a*j,d+=a*G,y+=a*H,g+=a*q,v+=a*Q,m+=a*z,C+=a*Y,E+=a*X,S+=a*W,T+=a*Z,c+=(a=t[3])*V,u+=a*O,l+=a*K,p+=a*x,f+=a*M,h+=a*F,d+=a*j,y+=a*G,g+=a*H,v+=a*q,m+=a*Q,C+=a*z,E+=a*Y,S+=a*X,T+=a*W,I+=a*Z,u+=(a=t[4])*V,l+=a*O,p+=a*K,f+=a*x,h+=a*M,d+=a*F,y+=a*j,g+=a*G,v+=a*H,m+=a*q,C+=a*Q,E+=a*z,S+=a*Y,T+=a*X,I+=a*W,A+=a*Z,l+=(a=t[5])*V,p+=a*O,f+=a*K,h+=a*x,d+=a*M,y+=a*F,g+=a*j,v+=a*G,m+=a*H,C+=a*q,E+=a*Q,S+=a*z,T+=a*Y,I+=a*X,A+=a*W,B+=a*Z,p+=(a=t[6])*V,f+=a*O,h+=a*K,d+=a*x,y+=a*M,g+=a*F,v+=a*j,m+=a*G,C+=a*H,E+=a*q,S+=a*Q,T+=a*z,I+=a*Y,A+=a*X,B+=a*W,b+=a*Z,f+=(a=t[7])*V,h+=a*O,d+=a*K,y+=a*x,g+=a*M,v+=a*F,m+=a*j,C+=a*G,E+=a*H,S+=a*q,T+=a*Q,I+=a*z,A+=a*Y,B+=a*X,b+=a*W,N+=a*Z,h+=(a=t[8])*V,d+=a*O,y+=a*K,g+=a*x,v+=a*M,m+=a*F,C+=a*j,E+=a*G,S+=a*H,T+=a*q,I+=a*Q,A+=a*z,B+=a*Y,b+=a*X,N+=a*W,R+=a*Z,d+=(a=t[9])*V,y+=a*O,g+=a*K,v+=a*x,m+=a*M,C+=a*F,E+=a*j,S+=a*G,T+=a*H,I+=a*q,A+=a*Q,B+=a*z,b+=a*Y,N+=a*X,R+=a*W,w+=a*Z,y+=(a=t[10])*V,g+=a*O,v+=a*K,m+=a*x,C+=a*M,E+=a*F,S+=a*j,T+=a*G,I+=a*H,A+=a*q,B+=a*Q,b+=a*z,N+=a*Y,R+=a*X,w+=a*W,_+=a*Z,g+=(a=t[11])*V,v+=a*O,m+=a*K,C+=a*x,E+=a*M,S+=a*F,T+=a*j,I+=a*G,A+=a*H,B+=a*q,b+=a*Q,N+=a*z,R+=a*Y,w+=a*X,_+=a*W,L+=a*Z,v+=(a=t[12])*V,m+=a*O,C+=a*K,E+=a*x,S+=a*M,T+=a*F,I+=a*j,A+=a*G,B+=a*H,b+=a*q,N+=a*Q,R+=a*z,w+=a*Y,_+=a*X,L+=a*W,k+=a*Z,m+=(a=t[13])*V,C+=a*O,E+=a*K,S+=a*x,T+=a*M,I+=a*F,A+=a*j,B+=a*G,b+=a*H,N+=a*q,R+=a*Q,w+=a*z,_+=a*Y,L+=a*X,k+=a*W,U+=a*Z,C+=(a=t[14])*V,E+=a*O,S+=a*K,T+=a*x,I+=a*M,A+=a*F,B+=a*j,b+=a*G,N+=a*H,R+=a*q,w+=a*Q,_+=a*z,L+=a*Y,k+=a*X,U+=a*W,D+=a*Z,E+=(a=t[15])*V,s+=38*(T+=a*K),o+=38*(I+=a*x),c+=38*(A+=a*M),u+=38*(B+=a*F),l+=38*(b+=a*j),p+=38*(N+=a*G),f+=38*(R+=a*H),h+=38*(w+=a*q),d+=38*(_+=a*Q),y+=38*(L+=a*z),g+=38*(k+=a*Y),v+=38*(U+=a*X),m+=38*(D+=a*W),C+=38*(P+=a*Z),i=(a=(i+=38*(S+=a*O))+(n=1)+65535)-65536*(n=Math.floor(a/65536)),s=(a=s+n+65535)-65536*(n=Math.floor(a/65536)),o=(a=o+n+65535)-65536*(n=Math.floor(a/65536)),c=(a=c+n+65535)-65536*(n=Math.floor(a/65536)),u=(a=u+n+65535)-65536*(n=Math.floor(a/65536)),l=(a=l+n+65535)-65536*(n=Math.floor(a/65536)),p=(a=p+n+65535)-65536*(n=Math.floor(a/65536)),f=(a=f+n+65535)-65536*(n=Math.floor(a/65536)),h=(a=h+n+65535)-65536*(n=Math.floor(a/65536)),d=(a=d+n+65535)-65536*(n=Math.floor(a/65536)),y=(a=y+n+65535)-65536*(n=Math.floor(a/65536)),g=(a=g+n+65535)-65536*(n=Math.floor(a/65536)),v=(a=v+n+65535)-65536*(n=Math.floor(a/65536)),m=(a=m+n+65535)-65536*(n=Math.floor(a/65536)),C=(a=C+n+65535)-65536*(n=Math.floor(a/65536)),E=(a=E+n+65535)-65536*(n=Math.floor(a/65536)),i=(a=(i+=n-1+37*(n-1))+(n=1)+65535)-65536*(n=Math.floor(a/65536)),s=(a=s+n+65535)-65536*(n=Math.floor(a/65536)),o=(a=o+n+65535)-65536*(n=Math.floor(a/65536)),c=(a=c+n+65535)-65536*(n=Math.floor(a/65536)),u=(a=u+n+65535)-65536*(n=Math.floor(a/65536)),l=(a=l+n+65535)-65536*(n=Math.floor(a/65536)),p=(a=p+n+65535)-65536*(n=Math.floor(a/65536)),f=(a=f+n+65535)-65536*(n=Math.floor(a/65536)),h=(a=h+n+65535)-65536*(n=Math.floor(a/65536)),d=(a=d+n+65535)-65536*(n=Math.floor(a/65536)),y=(a=y+n+65535)-65536*(n=Math.floor(a/65536)),g=(a=g+n+65535)-65536*(n=Math.floor(a/65536)),v=(a=v+n+65535)-65536*(n=Math.floor(a/65536)),m=(a=m+n+65535)-65536*(n=Math.floor(a/65536)),C=(a=C+n+65535)-65536*(n=Math.floor(a/65536)),E=(a=E+n+65535)-65536*(n=Math.floor(a/65536)),i+=n-1+37*(n-1),e[0]=i,e[1]=s,e[2]=o,e[3]=c,e[4]=u,e[5]=l,e[6]=p,e[7]=f,e[8]=h,e[9]=d,e[10]=y,e[11]=g,e[12]=v,e[13]=m,e[14]=C,e[15]=E}},function(e,t,r){var a=r(0);r(3);var n=a.asn1;t.privateKeyValidator={name:"PrivateKeyInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"PrivateKeyInfo.version",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"privateKeyVersion"},{name:"PrivateKeyInfo.privateKeyAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"privateKeyOid"}]},{name:"PrivateKeyInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.OCTETSTRING,constructed:!1,capture:"privateKey"}]},t.publicKeyValidator={name:"SubjectPublicKeyInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"subjectPublicKeyInfo",value:[{name:"SubjectPublicKeyInfo.AlgorithmIdentifier",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"publicKeyOid"}]},{tagClass:n.Class.UNIVERSAL,type:n.Type.BITSTRING,constructed:!1,composed:!0,captureBitStringValue:"ed25519PublicKey"}]}},function(e,t,r){var a=r(0);r(1),r(2),r(12),e.exports=a.kem=a.kem||{};var n=a.jsbn.BigInteger;function i(e,t,r,n){e.generate=function(e,i){for(var s=new a.util.ByteBuffer,o=Math.ceil(i/n)+r,c=new a.util.ByteBuffer,u=r;u<o;++u){c.putInt32(u),t.start(),t.update(e+c.getBytes());var l=t.digest();s.putBytes(l.getBytes(n))}return s.truncate(s.length()-i),s.getBytes()}}a.kem.rsa={},a.kem.rsa.create=function(e,t){var r=(t=t||{}).prng||a.random,i={encrypt:function(t,i){var s,o=Math.ceil(t.n.bitLength()/8);do{s=new n(a.util.bytesToHex(r.getBytesSync(o)),16).mod(t.n)}while(s.compareTo(n.ONE)<=0);var c=o-(s=a.util.hexToBytes(s.toString(16))).length;return c>0&&(s=a.util.fillString(String.fromCharCode(0),c)+s),{encapsulation:t.encrypt(s,"NONE"),key:e.generate(s,i)}},decrypt:function(t,r,a){var n=t.decrypt(r,"NONE");return e.generate(n,a)}};return i},a.kem.kdf1=function(e,t){i(this,e,0,t||e.digestLength)},a.kem.kdf2=function(e,t){i(this,e,1,t||e.digestLength)}},function(e,t,r){var a=r(0);r(1),e.exports=a.log=a.log||{},a.log.levels=["none","error","warning","info","debug","verbose","max"];var n={},i=[],s=null;a.log.LEVEL_LOCKED=2,a.log.NO_LEVEL_CHECK=4,a.log.INTERPOLATE=8;for(var o=0;o<a.log.levels.length;++o){var c=a.log.levels[o];n[c]={index:o,name:c.toUpperCase()}}a.log.logMessage=function(e){for(var t=n[e.level].index,r=0;r<i.length;++r){var s=i[r];if(s.flags&a.log.NO_LEVEL_CHECK)s.f(e);else t<=n[s.level].index&&s.f(s,e)}},a.log.prepareStandard=function(e){"standard"in e||(e.standard=n[e.level].name+" ["+e.category+"] "+e.message)},a.log.prepareFull=function(e){if(!("full"in e)){var t=[e.message];t=t.concat([]||!1),e.full=a.util.format.apply(this,t)}},a.log.prepareStandardFull=function(e){"standardFull"in e||(a.log.prepareStandard(e),e.standardFull=e.standard)};var u=["error","warning","info","debug","verbose"];for(o=0;o<u.length;++o)!function(e){a.log[e]=function(t,r){var n=Array.prototype.slice.call(arguments).slice(2),i={timestamp:new Date,level:e,category:t,message:r,arguments:n};a.log.logMessage(i)}}(u[o]);if(a.log.makeLogger=function(e){var t={flags:0,f:e};return a.log.setLevel(t,"none"),t},a.log.setLevel=function(e,t){var r=!1;if(e&&!(e.flags&a.log.LEVEL_LOCKED))for(var n=0;n<a.log.levels.length;++n){if(t==a.log.levels[n]){e.level=t,r=!0;break}}return r},a.log.lock=function(e,t){void 0===t||t?e.flags|=a.log.LEVEL_LOCKED:e.flags&=~a.log.LEVEL_LOCKED},a.log.addLogger=function(e){i.push(e)},"undefined"!=typeof console&&"log"in console){var l;if(console.error&&console.warn&&console.info&&console.debug){var p={error:console.error,warning:console.warn,info:console.info,debug:console.debug,verbose:console.debug},f=function(e,t){a.log.prepareStandard(t);var r=p[t.level],n=[t.standard];n=n.concat(t.arguments.slice()),r.apply(console,n)};l=a.log.makeLogger(f)}else{f=function(e,t){a.log.prepareStandardFull(t),console.log(t.standardFull)};l=a.log.makeLogger(f)}a.log.setLevel(l,"debug"),a.log.addLogger(l),s=l}else console={log:function(){}};if(null!==s&&"undefined"!=typeof window&&window.location){var h=new URL(window.location.href).searchParams;if(h.has("console.level")&&a.log.setLevel(s,h.get("console.level").slice(-1)[0]),h.has("console.lock"))"true"==h.get("console.lock").slice(-1)[0]&&a.log.lock(s)}a.log.consoleLogger=s},function(e,t,r){e.exports=r(4),r(14),r(9),r(23),r(31)},function(e,t,r){var a=r(0);r(5),r(3),r(10),r(6),r(7),r(29),r(2),r(1),r(17);var n=a.asn1,i=e.exports=a.pkcs7=a.pkcs7||{};function s(e){var t={},r=[];if(!n.validate(e,i.asn1.recipientInfoValidator,t,r)){var s=new Error("Cannot read PKCS#7 RecipientInfo. ASN.1 object is not an PKCS#7 RecipientInfo.");throw s.errors=r,s}return{version:t.version.charCodeAt(0),issuer:a.pki.RDNAttributesAsArray(t.issuer),serialNumber:a.util.createBuffer(t.serial).toHex(),encryptedContent:{algorithm:n.derToOid(t.encAlgorithm),parameter:t.encParameter?t.encParameter.value:void 0,content:t.encKey}}}function o(e){for(var t,r=[],i=0;i<e.length;++i)r.push((t=e[i],n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(t.version).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[a.pki.distinguishedNameToAsn1({attributes:t.issuer}),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,a.util.hexToBytes(t.serialNumber))]),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(t.encryptedContent.algorithm).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")]),n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,t.encryptedContent.content)])));return r}function c(e){var t=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(e.version).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[a.pki.distinguishedNameToAsn1({attributes:e.issuer}),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,a.util.hexToBytes(e.serialNumber))]),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.digestAlgorithm).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")])]);if(e.authenticatedAttributesAsn1&&t.value.push(e.authenticatedAttributesAsn1),t.value.push(n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.signatureAlgorithm).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")])),t.value.push(n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,e.signature)),e.unauthenticatedAttributes.length>0){for(var r=n.create(n.Class.CONTEXT_SPECIFIC,1,!0,[]),i=0;i<e.unauthenticatedAttributes.length;++i){var s=e.unauthenticatedAttributes[i];r.values.push(u(s))}t.value.push(r)}return t}function u(e){var t;if(e.type===a.pki.oids.contentType)t=n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.value).getBytes());else if(e.type===a.pki.oids.messageDigest)t=n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,e.value.bytes());else if(e.type===a.pki.oids.signingTime){var r=new Date("1950-01-01T00:00:00Z"),i=new Date("2050-01-01T00:00:00Z"),s=e.value;if("string"==typeof s){var o=Date.parse(s);s=isNaN(o)?13===s.length?n.utcTimeToDate(s):n.generalizedTimeToDate(s):new Date(o)}t=s>=r&&s<i?n.create(n.Class.UNIVERSAL,n.Type.UTCTIME,!1,n.dateToUtcTime(s)):n.create(n.Class.UNIVERSAL,n.Type.GENERALIZEDTIME,!1,n.dateToGeneralizedTime(s))}return n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.type).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SET,!0,[t])])}function l(e,t,r){var i={};if(!n.validate(t,r,i,[])){var s=new Error("Cannot read PKCS#7 message. ASN.1 object is not a supported PKCS#7 message.");throw s.errors=s,s}if(n.derToOid(i.contentType)!==a.pki.oids.data)throw new Error("Unsupported PKCS#7 message. Only wrapped ContentType Data supported.");if(i.encryptedContent){var o="";if(a.util.isArray(i.encryptedContent))for(var c=0;c<i.encryptedContent.length;++c){if(i.encryptedContent[c].type!==n.Type.OCTETSTRING)throw new Error("Malformed PKCS#7 message, expecting encrypted content constructed of only OCTET STRING objects.");o+=i.encryptedContent[c].value}else o=i.encryptedContent;e.encryptedContent={algorithm:n.derToOid(i.encAlgorithm),parameter:a.util.createBuffer(i.encParameter.value),content:a.util.createBuffer(o)}}if(i.content){o="";if(a.util.isArray(i.content))for(c=0;c<i.content.length;++c){if(i.content[c].type!==n.Type.OCTETSTRING)throw new Error("Malformed PKCS#7 message, expecting content constructed of only OCTET STRING objects.");o+=i.content[c].value}else o=i.content;e.content=a.util.createBuffer(o)}return e.version=i.version.charCodeAt(0),e.rawCapture=i,i}function p(e){if(void 0===e.encryptedContent.key)throw new Error("Symmetric key not available.");if(void 0===e.content){var t;switch(e.encryptedContent.algorithm){case a.pki.oids["aes128-CBC"]:case a.pki.oids["aes192-CBC"]:case a.pki.oids["aes256-CBC"]:t=a.aes.createDecryptionCipher(e.encryptedContent.key);break;case a.pki.oids.desCBC:case a.pki.oids["des-EDE3-CBC"]:t=a.des.createDecryptionCipher(e.encryptedContent.key);break;default:throw new Error("Unsupported symmetric cipher, OID "+e.encryptedContent.algorithm)}if(t.start(e.encryptedContent.parameter),t.update(e.encryptedContent.content),!t.finish())throw new Error("Symmetric decryption failed.");e.content=t.output}}i.messageFromPem=function(e){var t=a.pem.decode(e)[0];if("PKCS7"!==t.type){var r=new Error('Could not convert PKCS#7 message from PEM; PEM header type is not "PKCS#7".');throw r.headerType=t.type,r}if(t.procType&&"ENCRYPTED"===t.procType.type)throw new Error("Could not convert PKCS#7 message from PEM; PEM is encrypted.");var s=n.fromDer(t.body);return i.messageFromAsn1(s)},i.messageToPem=function(e,t){var r={type:"PKCS7",body:n.toDer(e.toAsn1()).getBytes()};return a.pem.encode(r,{maxline:t})},i.messageFromAsn1=function(e){var t={},r=[];if(!n.validate(e,i.asn1.contentInfoValidator,t,r)){var s=new Error("Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 ContentInfo.");throw s.errors=r,s}var o,c=n.derToOid(t.contentType);switch(c){case a.pki.oids.envelopedData:o=i.createEnvelopedData();break;case a.pki.oids.encryptedData:o=i.createEncryptedData();break;case a.pki.oids.signedData:o=i.createSignedData();break;default:throw new Error("Cannot read PKCS#7 message. ContentType with OID "+c+" is not (yet) supported.")}return o.fromAsn1(t.content.value[0]),o},i.createSignedData=function(){var e=null;return e={type:a.pki.oids.signedData,version:1,certificates:[],crls:[],signers:[],digestAlgorithmIdentifiers:[],contentInfo:null,signerInfos:[],fromAsn1:function(t){if(l(e,t,i.asn1.signedDataValidator),e.certificates=[],e.crls=[],e.digestAlgorithmIdentifiers=[],e.contentInfo=null,e.signerInfos=[],e.rawCapture.certificates)for(var r=e.rawCapture.certificates.value,n=0;n<r.length;++n)e.certificates.push(a.pki.certificateFromAsn1(r[n]))},toAsn1:function(){e.contentInfo||e.sign();for(var t=[],r=0;r<e.certificates.length;++r)t.push(a.pki.certificateToAsn1(e.certificates[r]));var i=[],s=n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(e.version).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SET,!0,e.digestAlgorithmIdentifiers),e.contentInfo])]);return t.length>0&&s.value[0].value.push(n.create(n.Class.CONTEXT_SPECIFIC,0,!0,t)),i.length>0&&s.value[0].value.push(n.create(n.Class.CONTEXT_SPECIFIC,1,!0,i)),s.value[0].value.push(n.create(n.Class.UNIVERSAL,n.Type.SET,!0,e.signerInfos)),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.type).getBytes()),s])},addSigner:function(t){var r=t.issuer,n=t.serialNumber;if(t.certificate){var i=t.certificate;"string"==typeof i&&(i=a.pki.certificateFromPem(i)),r=i.issuer.attributes,n=i.serialNumber}var s=t.key;if(!s)throw new Error("Could not add PKCS#7 signer; no private key specified.");"string"==typeof s&&(s=a.pki.privateKeyFromPem(s));var o=t.digestAlgorithm||a.pki.oids.sha1;switch(o){case a.pki.oids.sha1:case a.pki.oids.sha256:case a.pki.oids.sha384:case a.pki.oids.sha512:case a.pki.oids.md5:break;default:throw new Error("Could not add PKCS#7 signer; unknown message digest algorithm: "+o)}var c=t.authenticatedAttributes||[];if(c.length>0){for(var u=!1,l=!1,p=0;p<c.length;++p){var f=c[p];if(u||f.type!==a.pki.oids.contentType){if(l||f.type!==a.pki.oids.messageDigest);else if(l=!0,u)break}else if(u=!0,l)break}if(!u||!l)throw new Error("Invalid signer.authenticatedAttributes. If signer.authenticatedAttributes is specified, then it must contain at least two attributes, PKCS #9 content-type and PKCS #9 message-digest.")}e.signers.push({key:s,version:1,issuer:r,serialNumber:n,digestAlgorithm:o,signatureAlgorithm:a.pki.oids.rsaEncryption,signature:null,authenticatedAttributes:c,unauthenticatedAttributes:[]})},sign:function(t){var r;(t=t||{},"object"!=typeof e.content||null===e.contentInfo)&&(e.contentInfo=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(a.pki.oids.data).getBytes())]),"content"in e&&(e.content instanceof a.util.ByteBuffer?r=e.content.bytes():"string"==typeof e.content&&(r=a.util.encodeUtf8(e.content)),t.detached?e.detachedContent=n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,r):e.contentInfo.value.push(n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,r)]))));0!==e.signers.length&&function(t){var r;r=e.detachedContent?e.detachedContent:(r=e.contentInfo.value[1]).value[0];if(!r)throw new Error("Could not sign PKCS#7 message; there is no content to sign.");var i=n.derToOid(e.contentInfo.value[0].value),s=n.toDer(r);for(var o in s.getByte(),n.getBerValueLength(s),s=s.getBytes(),t)t[o].start().update(s);for(var l=new Date,p=0;p<e.signers.length;++p){var f=e.signers[p];if(0===f.authenticatedAttributes.length){if(i!==a.pki.oids.data)throw new Error("Invalid signer; authenticatedAttributes must be present when the ContentInfo content type is not PKCS#7 Data.")}else{f.authenticatedAttributesAsn1=n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[]);for(var h=n.create(n.Class.UNIVERSAL,n.Type.SET,!0,[]),d=0;d<f.authenticatedAttributes.length;++d){var y=f.authenticatedAttributes[d];y.type===a.pki.oids.messageDigest?y.value=t[f.digestAlgorithm].digest():y.type===a.pki.oids.signingTime&&(y.value||(y.value=l)),h.value.push(u(y)),f.authenticatedAttributesAsn1.value.push(u(y))}s=n.toDer(h).getBytes(),f.md.start().update(s)}f.signature=f.key.sign(f.md,"RSASSA-PKCS1-V1_5")}e.signerInfos=function(e){for(var t=[],r=0;r<e.length;++r)t.push(c(e[r]));return t}(e.signers)}(function(){for(var t={},r=0;r<e.signers.length;++r){var i=e.signers[r];(s=i.digestAlgorithm)in t||(t[s]=a.md[a.pki.oids[s]].create()),0===i.authenticatedAttributes.length?i.md=t[s]:i.md=a.md[a.pki.oids[s]].create()}for(var s in e.digestAlgorithmIdentifiers=[],t)e.digestAlgorithmIdentifiers.push(n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(s).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")]));return t}())},verify:function(){throw new Error("PKCS#7 signature verification not yet implemented.")},addCertificate:function(t){"string"==typeof t&&(t=a.pki.certificateFromPem(t)),e.certificates.push(t)},addCertificateRevokationList:function(e){throw new Error("PKCS#7 CRL support not yet implemented.")}}},i.createEncryptedData=function(){var e=null;return e={type:a.pki.oids.encryptedData,version:0,encryptedContent:{algorithm:a.pki.oids["aes256-CBC"]},fromAsn1:function(t){l(e,t,i.asn1.encryptedDataValidator)},decrypt:function(t){void 0!==t&&(e.encryptedContent.key=t),p(e)}}},i.createEnvelopedData=function(){var e=null;return e={type:a.pki.oids.envelopedData,version:0,recipients:[],encryptedContent:{algorithm:a.pki.oids["aes256-CBC"]},fromAsn1:function(t){var r=l(e,t,i.asn1.envelopedDataValidator);e.recipients=function(e){for(var t=[],r=0;r<e.length;++r)t.push(s(e[r]));return t}(r.recipientInfos.value)},toAsn1:function(){return n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.type).getBytes()),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(e.version).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SET,!0,o(e.recipients)),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,(t=e.encryptedContent,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(a.pki.oids.data).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(t.algorithm).getBytes()),t.parameter?n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,t.parameter.getBytes()):void 0]),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,t.content.getBytes())])]))])])]);var t},findRecipient:function(t){for(var r=t.issuer.attributes,a=0;a<e.recipients.length;++a){var n=e.recipients[a],i=n.issuer;if(n.serialNumber===t.serialNumber&&i.length===r.length){for(var s=!0,o=0;o<r.length;++o)if(i[o].type!==r[o].type||i[o].value!==r[o].value){s=!1;break}if(s)return n}}return null},decrypt:function(t,r){if(void 0===e.encryptedContent.key&&void 0!==t&&void 0!==r)switch(t.encryptedContent.algorithm){case a.pki.oids.rsaEncryption:case a.pki.oids.desCBC:var n=r.decrypt(t.encryptedContent.content);e.encryptedContent.key=a.util.createBuffer(n);break;default:throw new Error("Unsupported asymmetric cipher, OID "+t.encryptedContent.algorithm)}p(e)},addRecipient:function(t){e.recipients.push({version:0,issuer:t.issuer.attributes,serialNumber:t.serialNumber,encryptedContent:{algorithm:a.pki.oids.rsaEncryption,key:t.publicKey}})},encrypt:function(t,r){if(void 0===e.encryptedContent.content){var n,i,s;switch(r=r||e.encryptedContent.algorithm,t=t||e.encryptedContent.key,r){case a.pki.oids["aes128-CBC"]:n=16,i=16,s=a.aes.createEncryptionCipher;break;case a.pki.oids["aes192-CBC"]:n=24,i=16,s=a.aes.createEncryptionCipher;break;case a.pki.oids["aes256-CBC"]:n=32,i=16,s=a.aes.createEncryptionCipher;break;case a.pki.oids["des-EDE3-CBC"]:n=24,i=8,s=a.des.createEncryptionCipher;break;default:throw new Error("Unsupported symmetric cipher, OID "+r)}if(void 0===t)t=a.util.createBuffer(a.random.getBytes(n));else if(t.length()!=n)throw new Error("Symmetric key has wrong length; got "+t.length()+" bytes, expected "+n+".");e.encryptedContent.algorithm=r,e.encryptedContent.key=t,e.encryptedContent.parameter=a.util.createBuffer(a.random.getBytes(i));var o=s(t);if(o.start(e.encryptedContent.parameter.copy()),o.update(e.content),!o.finish())throw new Error("Symmetric encryption failed.");e.encryptedContent.content=o.output}for(var c=0;c<e.recipients.length;++c){var u=e.recipients[c];if(void 0===u.encryptedContent.content)switch(u.encryptedContent.algorithm){case a.pki.oids.rsaEncryption:u.encryptedContent.content=u.encryptedContent.key.encrypt(e.encryptedContent.key.data);break;default:throw new Error("Unsupported asymmetric cipher, OID "+u.encryptedContent.algorithm)}}}}}},function(e,t,r){var a=r(0);r(5),r(8),r(14),r(9),r(1);var n=e.exports=a.ssh=a.ssh||{};function i(e,t){var r=t.toString(16);r[0]>="8"&&(r="00"+r);var n=a.util.hexToBytes(r);e.putInt32(n.length),e.putBytes(n)}function s(e,t){e.putInt32(t.length),e.putString(t)}function o(){for(var e=a.md.sha1.create(),t=arguments.length,r=0;r<t;++r)e.update(arguments[r]);return e.digest()}n.privateKeyToPutty=function(e,t,r){var n=""===(t=t||"")?"none":"aes256-cbc",c="PuTTY-User-Key-File-2: ssh-rsa\r\n";c+="Encryption: "+n+"\r\n",c+="Comment: "+(r=r||"")+"\r\n";var u=a.util.createBuffer();s(u,"ssh-rsa"),i(u,e.e),i(u,e.n);var l=a.util.encode64(u.bytes(),64),p=Math.floor(l.length/66)+1;c+="Public-Lines: "+p+"\r\n",c+=l;var f,h=a.util.createBuffer();if(i(h,e.d),i(h,e.p),i(h,e.q),i(h,e.qInv),t){var d=h.length()+16-1;d-=d%16;var y=o(h.bytes());y.truncate(y.length()-d+h.length()),h.putBuffer(y);var g=a.util.createBuffer();g.putBuffer(o("\0\0\0\0",t)),g.putBuffer(o("\0\0\0",t));var v=a.aes.createEncryptionCipher(g.truncate(8),"CBC");v.start(a.util.createBuffer().fillWithByte(0,16)),v.update(h.copy()),v.finish();var m=v.output;m.truncate(16),f=a.util.encode64(m.bytes(),64)}else f=a.util.encode64(h.bytes(),64);c+="\r\nPrivate-Lines: "+(p=Math.floor(f.length/66)+1)+"\r\n",c+=f;var C=o("putty-private-key-file-mac-key",t),E=a.util.createBuffer();s(E,"ssh-rsa"),s(E,n),s(E,r),E.putInt32(u.length()),E.putBuffer(u),E.putInt32(h.length()),E.putBuffer(h);var S=a.hmac.create();return S.start("sha1",C),S.update(E.bytes()),c+="\r\nPrivate-MAC: "+S.digest().toHex()+"\r\n"},n.publicKeyToOpenSSH=function(e,t){t=t||"";var r=a.util.createBuffer();return s(r,"ssh-rsa"),i(r,e.e),i(r,e.n),"ssh-rsa "+a.util.encode64(r.bytes())+" "+t},n.privateKeyToOpenSSH=function(e,t){return t?a.pki.encryptRsaPrivateKey(e,t,{legacy:!0,algorithm:"aes128"}):a.pki.privateKeyToPem(e)},n.getPublicKeyFingerprint=function(e,t){var r=(t=t||{}).md||a.md.md5.create(),n=a.util.createBuffer();s(n,"ssh-rsa"),i(n,e.e),i(n,e.n),r.start(),r.update(n.getBytes());var o=r.digest();if("hex"===t.encoding){var c=o.toHex();return t.delimiter?c.match(/.{2}/g).join(t.delimiter):c}if("binary"===t.encoding)return o.getBytes();if(t.encoding)throw new Error('Unknown encoding "'+t.encoding+'".');return o}}])}));
//# sourceMappingURL=forge.min.js.map
;


;
// Original plugin 3: assets/scripts/plugin/gsap.min.js
// SHA256: 28033e449a31ebcc396e5be8b13b63152bf03094288fb5867034321927bce087
/*!
 * GSAP 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t){return"string"==typeof t}function s(t){return"function"==typeof t}function t(t){return"number"==typeof t}function u(t){return void 0===t}function v(t){return"object"==typeof t}function w(t){return!1!==t}function x(){return"undefined"!=typeof window}function y(t){return s(t)||r(t)}function P(t){return(i=yt(t,ot))&&ze}function Q(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function R(t,e){return!e&&console.warn(t)}function S(t,e){return t&&(ot[t]=e)&&i&&(i[t]=e)||ot}function T(){return 0}function ea(t){var e,r,i=t[0];if(v(i)||s(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=gt.length;r--&&!gt[r].targetTest(i););e=gt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Vt(t[r],e)))||t.splice(r,1);return t}function fa(t){return t._gsap||ea(Mt(t))[0]._gsap}function ga(t,e,r){return(r=t[e])&&s(r)?t[e]():u(r)&&t.getAttribute&&t.getAttribute(e)||r}function ha(t,e){return(t=t.split(",")).forEach(e)||t}function ia(t){return Math.round(1e5*t)/1e5||0}function ja(t){return Math.round(1e7*t)/1e7||0}function ka(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+i:"-"===r?t-i:"*"===r?t*i:t/i}function la(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ma(){var t,e,r=dt.length,i=dt.slice(0);for(ct={},t=dt.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function na(t,e,r,i){dt.length&&!L&&ma(),t.render(e,r,i||L&&e<0&&(t._initted||t._startAt)),dt.length&&!L&&ma()}function oa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:r(t)?t.trim():t}function pa(t){return t}function qa(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ta(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=v(e[r])?ta(t[r]||(t[r]={}),e[r]):e[r]);return t}function ua(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function va(t){var e=t.parent||I,r=t.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}(Z(t.keyframes)):qa;if(w(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function xa(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e}function ya(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function za(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0}function Aa(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function Ca(t,e,r,i){return t._startAt&&(L?t._startAt.revert(ht):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))}function Ea(t){return t._repeat?Tt(t._tTime,t=t.duration()+t._rDelay)*t:0}function Ga(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function Ha(t){return t._end=ja(t._start+(t._tDur/Math.abs(t._ts||t._rts||X)||0))}function Ia(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ja(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ha(t),r._dirty||Aa(r,t)),t}function Ja(t,e){var r;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(r=Ga(t.rawTime(),e),(!e._dur||Ot(0,e.totalDuration(),r)-e._tTime>X)&&e.render(r,!0)),Aa(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-X}}function Ka(e,r,i,n){return r.parent&&za(r),r._start=ja((t(i)?i:i||e!==I?xt(e,i,r):e._time)+r._delay),r._end=ja(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),xa(e,r,"_first","_last",e._sort?"_start":0),bt(r)||(e._recent=r),n||Ja(e,r),e._ts<0&&Ia(e,e._tTime),e}function La(t,e){return(ot.ScrollTrigger||Q("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ma(t,e,r,i,n){return Qt(t,e,n),t._initted?!r&&t._pt&&!L&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Rt.frame?(dt.push(t),t._lazy=[n,i],1):void 0:1}function Ra(t,e,r,i){var n=t._repeat,a=ja(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ja(a*(n+1)+t._rDelay*n):a,0<s&&!i&&Ia(t,t._tTime=t._tDur*s),t.parent&&Ha(t),r||Aa(t.parent,t),t}function Sa(t){return t instanceof Xt?Aa(t):Ra(t,t._dur)}function Va(e,r,i){var n,a,s=t(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=w(a.vars.inherit)&&a.parent;u.immediateRender=w(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new $t(r[0],u,r[1+o])}function Wa(t,e){return t||0===t?e(t):e}function Ya(t,e){return r(t)&&(e=st.exec(t))?e[1]:""}function _a(t,e){return t&&v(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&v(t[0]))&&!t.nodeType&&t!==h}function cb(r){return r=Mt(r)[0]||R("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return Mt(t,e.querySelectorAll?e:e===r?R("Invalid scope")||a.createElement("div"):r)}}function db(t){return t.sort(function(){return.5-Math.random()})}function eb(t){if(s(t))return t;var p=v(t)?t:{each:t},_=jt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,y={},e=0<m&&m<1,T=isNaN(m)||e,b=p.axis,w=m,x=m;return r(m)?w=x={center:.5,edges:.5,end:1}[m]||0:!e&&T&&(w=m[0],x=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||p).length,c=y[d];if(!c){if(!(f="auto"===p.grid?0:(p.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f<d&&f--}for(c=y[d]=[],i=T?Math.min(f,d)*w-.5:m%f,n=f===U?0:T?d*x/f-.5:m/f|0,l=U,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=b?Math.abs("y"===b?s:a):K(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&db(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(p.amount)||parseFloat(p.each)*(d<f?d-1:b?"y"===b?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),c.b=d<0?g-d:g,c.u=Ya(p.amount||p.each)||0,_=_&&d<0?Yt(_):_}return d=(c[t]-c.min)/c.max||0,ja(c.b+(_?_(d):d)*c.v)+c.u}}function fb(i){var n=Math.pow(10,((i+"").split(".")[1]||"").length);return function(e){var r=ja(Math.round(parseFloat(e)/i)*i*n);return(r-r%1)/n+(t(e)?0:Ya(e))}}function gb(h,e){var l,f,r=Z(h);return!r&&v(h)&&(l=r=h.radius||U,h.values?(h=Mt(h.values),(f=!t(h[0]))&&(l*=l)):h=fb(h.increment)),Wa(e,r?s(h)?function(t){return f=h(t),Math.abs(f-t)<=l?f:t}:function(e){for(var r,i,n=parseFloat(f?e.x:e),a=parseFloat(f?e.y:0),s=U,o=0,u=h.length;u--;)(r=f?(r=h[u].x-n)*r+(i=h[u].y-a)*i:Math.abs(h[u]-n))<s&&(s=r,o=u);return o=!l||s<=l?h[o]:e,f||o===e||t(e)?o:o+Ya(e)}:fb(h))}function hb(t,e,r,i){return Wa(Z(t)?!e:!0===r?!!(r=0):!i,function(){return Z(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function lb(e,r,t){return Wa(t,function(t){return e[~~r(t)]})}function ob(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+hb(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function rb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function tb(t){return za(t),t.scrollTrigger&&t.scrollTrigger.kill(!!L),t.progress()<1&&Ct(t,"onInterrupt"),t}function wb(t){if(t)if(t=!t.name&&t.default||t,x()||t.headless){var e=t.name,r=s(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:T,render:he,add:Wt,kill:ce,modifier:fe,rawVars:0},a={targetTest:0,get:0,getSetter:ne,aliases:{},register:0};if(Ft(),t!==i){if(pt[e])return;qa(i,qa(ua(t,n),a)),yt(i.prototype,yt(n,ua(t,a))),pt[i.prop=e]=i,t.targetTest&&(gt.push(i),ft[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}S(e,i),t.register&&t.register(ze,i,_e)}else At.push(t)}function zb(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*St+.5|0}function Ab(e,r,i){var n,a,s,o,u,h,l,f,d,c,p=e?t(e)?[e>>16,e>>8&St,e&St]:0:zt.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),zt[e])p=zt[e];else if("#"===e.charAt(0)){if(e.length<6&&(e="#"+(n=e.charAt(1))+n+(a=e.charAt(2))+a+(s=e.charAt(3))+s+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&St,p&St,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&St,e&St]}else if("hsl"===e.substr(0,3))if(p=c=e.match(tt),r){if(~e.indexOf("="))return p=e.match(et),i&&p.length<4&&(p[3]=1),p}else o=+p[0]%360/360,u=p[1]/100,n=2*(h=p[2]/100)-(a=h<=.5?h*(u+1):h+u-h*u),3<p.length&&(p[3]*=1),p[0]=zb(o+1/3,n,a),p[1]=zb(o,n,a),p[2]=zb(o-1/3,n,a);else p=e.match(tt)||zt.transparent;p=p.map(Number)}return r&&!c&&(n=p[0]/St,a=p[1]/St,s=p[2]/St,h=((l=Math.max(n,a,s))+(f=Math.min(n,a,s)))/2,l===f?o=u=0:(d=l-f,u=.5<h?d/(2-l-f):d/(l+f),o=l===n?(a-s)/d+(a<s?6:0):l===a?(s-n)/d+2:(n-a)/d+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*u+.5),p[2]=~~(100*h+.5)),i&&p.length<4&&(p[3]=1),p}function Bb(t){var r=[],i=[],n=-1;return t.split(Et).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function Cb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Et),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=Ab(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=Bb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Et,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Et)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function Fb(t){var e,r=t.join(" ");if(Et.lastIndex=0,Et.test(r))return e=Dt.test(r),t[1]=Cb(t[1],e),t[0]=Cb(t[0],e,Bb(t[1])),!0}function Ob(t){var e=(t+"").split("("),r=Lt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Bt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(oa)):Lt._CE&&It.test(t)?Lt._CE("",t):r}function Qb(t,e){for(var r,i=t._first;i;)i instanceof Xt?Qb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Qb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Sb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ha(t,function(t){for(var e in Lt[t]=ot[t]=a,Lt[n=t.toLowerCase()]=r,a)Lt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Lt[t+"."+e]=a[e]}),a}function Tb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Ub(r,t,e){function Jm(t){return 1===t?1:i*Math.pow(2,-10*t)*H((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/N*(Math.asin(1/i)||0),s="out"===r?Jm:"in"===r?function(t){return 1-Jm(1-t)}:Tb(Jm);return n=N/n,s.config=function(t,e){return Ub(r,t,e)},s}function Vb(e,r){function Rm(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Rm:"in"===e?function(t){return 1-Rm(1-t)}:Tb(Rm);return t.config=function(t){return Vb(e,t)},t}var F,L,l,I,h,n,a,i,o,f,d,c,p,_,m,g,b,O,k,M,C,A,z,E,D,B,Y,j,q={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},V={duration:.5,overwrite:!1,delay:0},U=1e8,X=1/U,N=2*Math.PI,G=N/4,W=0,K=Math.sqrt,J=Math.cos,H=Math.sin,$="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},Z=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot={},ut={suppressEvents:!0,isStart:!0,kill:!1},ht={suppressEvents:!0,kill:!1},lt={suppressEvents:!0},ft={},dt=[],ct={},pt={},_t={},mt=30,gt=[],vt="",yt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},Tt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},bt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},wt={_start:0,endTime:T,totalDuration:T},xt=function _parsePosition(t,e,i){var n,a,s,o=t.labels,u=t._recent||wt,h=t.duration()>=U?u.endTime(!1):t._dur;return r(e)&&(isNaN(e)||e in o)?(a=e.charAt(0),s="%"===e.substr(-1),n=e.indexOf("="),"<"===a||">"===a?(0<=n&&(e=e.replace(/=/,"")),("<"===a?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(s?(n<0?u:i).totalDuration()/100:1)):n<0?(e in o||(o[e]=h),o[e]):(a=parseFloat(e.charAt(n-1)+e.substr(n+1)),s&&i&&(a=a/100*(Z(i)?i[0]:i).totalDuration()),1<n?_parsePosition(t,e.substr(0,n-1),i)+a:h+a)):null==e?h:+e},Ot=function _clamp(t,e,r){return r<t?t:e<r?e:r},kt=[].slice,Mt=function toArray(t,e,i){return l&&!e&&l.selector?l.selector(t):!r(t)||i||!n&&Ft()?Z(t)?function _flatten(t,e,i){return void 0===i&&(i=[]),t.forEach(function(t){return r(t)&&!e||_a(t,1)?i.push.apply(i,Mt(t)):i.push(t)})||i}(t,i):_a(t)?kt.call(t,0):t?[t]:[]:kt.call((e||a).querySelectorAll(t),0)},Pt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Wa(n,function(t){return r+((t-e)/a*s||0)})},Ct=function _callback(t,e,r){var i,n,a,s=t.vars,o=s[e],u=l,h=t._ctx;if(o)return i=s[e+"Params"],n=s.callbackScope||t,r&&dt.length&&ma(),h&&(l=h),a=i?o.apply(n,i):o.call(n),l=u,a},At=[],St=255,zt={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Et=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in zt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Dt=/hsl[a]?\(/,Rt=(k=Date.now,M=500,C=33,A=k(),z=A,D=E=1e3/240,g={time:0,frame:0,tick:function tick(){yl(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){o&&(!n&&x()&&(h=n=window,a=h.document||{},ot.gsap=ze,(h.gsapVersions||(h.gsapVersions=[])).push(ze.version),P(i||h.GreenSockGlobals||!h.gsap&&h||{}),At.forEach(wb)),m="undefined"!=typeof requestAnimationFrame&&requestAnimationFrame,p&&g.sleep(),_=m||function(t){return setTimeout(t,D-1e3*g.time+1|0)},c=1,yl(2))},sleep:function sleep(){(m?cancelAnimationFrame:clearTimeout)(p),c=0,_=T},lagSmoothing:function lagSmoothing(t,e){M=t||1/0,C=Math.min(e||33,M)},fps:function fps(t){E=1e3/(t||240),D=1e3*g.time+E},add:function add(n,t,e){var a=t?function(t,e,r,i){n(t,e,r,i),g.remove(a)}:n;return g.remove(n),B[e?"unshift":"push"](a),Ft(),a},remove:function remove(t,e){~(e=B.indexOf(t))&&B.splice(e,1)&&e<=O&&O--},_listeners:B=[]}),Ft=function _wake(){return!c&&Rt.wake()},Lt={},It=/^[\d.\-M][\d.\-,\s]/,Bt=/["']/g,Yt=function _invertEase(e){return function(t){return 1-e(1-t)}},jt=function _parseEase(t,e){return t&&(s(t)?t:Lt[t]||Ob(t))||e};function yl(t){var e,r,i,n,a=k()-z,s=!0===t;if((M<a||a<0)&&(A+=a-C),(0<(e=(i=(z+=a)-A)-D)||s)&&(n=++g.frame,b=i-1e3*g.time,g.time=i/=1e3,D+=e+(E<=e?4:E-e),r=1),s||(p=_(yl)),r)for(O=0;O<B.length;O++)B[O](i,b,n,t)}function gn(t){return t<j?Y*t*t:t<.7272727272727273?Y*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?Y*(t-=2.25/2.75)*t+.9375:Y*Math.pow(t-2.625/2.75,2)+.984375}ha("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Sb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Lt.Linear.easeNone=Lt.none=Lt.Linear.easeIn,Sb("Elastic",Ub("in"),Ub("out"),Ub()),Y=7.5625,j=1/2.75,Sb("Bounce",function(t){return 1-gn(1-t)},gn),Sb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Sb("Circ",function(t){return-(K(1-t*t)-1)}),Sb("Sine",function(t){return 1===t?1:1-J(t*G)}),Sb("Back",Vb("in"),Vb("out"),Vb()),Lt.SteppedEase=Lt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*Ot(0,.99999999,t)|0)+n)*r}}},V.ease=Lt["quad.out"],ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return vt+=t+","+t+"Params,"});var qt,Vt=function GSCache(t,e){this.id=W++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:ga,this.set=e?e.getSetter:ne},Ut=((qt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},qt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},qt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},qt.totalTime=function totalTime(t,e){if(Ft(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ia(this,t),!r._dp||r.parent||Ja(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ka(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===X||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),na(this,t,e)),this},qt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Ea(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},qt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):0<this.rawTime()?1:0},qt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Ea(this),e):this.duration()?Math.min(1,this._time/this._dur):0<this.rawTime()?1:0},qt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?Tt(this._tTime,r)+1:1},qt.timeScale=function timeScale(t,e){if(!arguments.length)return this._rts===-X?0:this._rts;if(this._rts===t)return this;var r=this.parent&&this._ts?Ga(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-X?0:this._rts,this.totalTime(Ot(-Math.abs(this._delay),this._tDur,r),!1!==e),Ha(this),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this)},qt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ft(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==X&&(this._tTime-=X)))),this):this._ps},qt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ka(e,this,t-this._delay),this}return this._start},qt.endTime=function endTime(t){return this._start+(w(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},qt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ga(e.rawTime(t),this):this._tTime:this._tTime},qt.revert=function revert(t){void 0===t&&(t=lt);var e=L;return L=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),L=e,this},qt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(Math.abs(e._ts)||1),e=e._dp;return!this.parent&&this._sat?this._sat.globalTime(t):r},qt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Sa(this)):-2===this._repeat?1/0:this._repeat},qt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Sa(this),e?this.time(e):this}return this._rDelay},qt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},qt.seek=function seek(t,e){return this.totalTime(xt(this,t),w(e))},qt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,w(e))},qt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},qt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},qt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},qt.resume=function resume(){return this.paused(!1)},qt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-X:0)),this):this._rts<0},qt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-X,this},qt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-X))},qt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},qt.then=function then(t){var i=this;return new Promise(function(e){function Co(){var t=i.then;i.then=null,s(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=s(t)?t:pa;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Co():i._prom=Co})},qt.kill=function kill(){tb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ra(this,+t.duration,1,1),this.data=t.data,l&&(this._ctx=l).data.push(this),c||Rt.wake()}qa(Ut.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-X,_prom:0,_ps:!1,_rts:1});var Xt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=w(t.sortChildren),I&&Ka(t.parent||I,_assertThisInitialized(r),e),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&La(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var e=Timeline.prototype;return e.to=function to(t,e,r){return Va(0,arguments,this),this},e.from=function from(t,e,r){return Va(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Va(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,va(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new $t(t,e,xt(this,r),1),this},e.call=function call(t,e,r){return Ka(this,$t.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new $t(t,r,xt(this,n)),this},e.staggerFrom=function staggerFrom(t,e,r,i,n,a,s){return r.runBackwards=1,va(r).immediateRender=w(r.immediateRender),this.staggerTo(t,e,r,i,n,a,s)},e.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,s,o){return i.startAt=r,va(i).immediateRender=w(i.immediateRender),this.staggerTo(t,e,i,n,a,s,o)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:ja(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==I&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(c=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ja(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=Tt(this._tTime,o),!_&&this._tTime&&d!==s&&this._tTime-d*o-this._dur<=0&&(d=s),c&&1&s&&(i=g-i,p=1),s!==d&&!this._lock){var T=c&&1&d,b=T===(c&&1&s);if(s<d&&(T=!T),_=T?0:v%g?g:v,this._lock=1,this.render(_||(p?0:ja(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Ct(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,_=T?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Qb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ja(_),ja(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&!s&&(Ct(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-X);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r||L&&(n._initted||n._startAt)),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-X:X);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-X)._zTime=_<=i?1:-1,this._ts))return this._start=f,Ha(this),this.render(t,e,r);this._onUpdate&&!e&&Ct(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||za(this,1),e||t<0&&!_||!v&&!_&&m||(Ct(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(e,i){var n=this;if(t(i)||(i=xt(this,i,e)),!(e instanceof Ut)){if(Z(e))return e.forEach(function(t){return n.add(t,i)}),this;if(r(e))return this.addLabel(e,i);if(!s(e))return this;e=$t.delayedCall(0,e)}return this!==e?Ka(this,e,i):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof $t?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return r(t)?this.removeLabel(t):s(t)?this.killTweensOf(t):(ya(this,t),t===this._recent&&(this._recent=this._last),Aa(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ja(Rt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=xt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=$t.delayedCall(0,e||T,r);return i.data="isPause",this._hasPause=1,Ka(this,i,xt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=xt(this,t);e;)e._start===t&&"isPause"===e.data&&za(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Nt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(e,r){for(var i,n=[],a=Mt(e),s=this._first,o=t(r);s;)s instanceof $t?la(s._targets,a)&&(o?(!Nt||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&n.push(s):(i=s.getTweensOf(a,r)).length&&n.push.apply(n,i),s=s._next;return n},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=xt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=$t.to(i,qa({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||X,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ra(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,qa({startAt:{time:xt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+X)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return Aa(this)},e.invalidate=function invalidate(t){var e=this._first;for(this._lock=0;e;)e.invalidate(t),e=e._next;return i.prototype.invalidate.call(this,t)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),Aa(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ka(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ra(a,a===I&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(I._ts&&(na(I,Ga(t,I)),f=Rt.frame),Rt.frame>=mt){mt+=q.autoSleep||120;var e=I._first;if((!e||!e._ts)&&q.autoSleep&&Rt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Rt.sleep()}}},Timeline}(Ut);qa(Xt.prototype,{_lock:0,_hasPause:0,_forcing:0});function ac(t,e,i,n,a,o){var u,h,l,f;if(pt[t]&&!1!==(u=new pt[t]).init(a,u.rawVars?e[t]:function _processVars(t,e,i,n,a){if(s(t)&&(t=Kt(t,a,e,i,n)),!v(t)||t.style&&t.nodeType||Z(t)||$(t))return r(t)?Kt(t,a,e,i,n):t;var o,u={};for(o in t)u[o]=Kt(t[o],a,e,i,n);return u}(e[t],n,a,o,i),i,n,o)&&(i._pt=h=new _e(i._pt,a,t,0,1,u.render,u,0,u.priority),i!==d))for(l=i._ptLookup[i._targets.indexOf(a)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function gc(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if(Z(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Nt,Gt,Wt=function _addPropTween(t,e,i,n,a,o,u,h,l,f){s(n)&&(n=n(a||0,t,o));var d,c=t[e],p="get"!==i?i:s(c)?l?t[e.indexOf("set")||!s(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():c,_=s(c)?l?re:te:Zt;if(r(n)&&(~n.indexOf("random(")&&(n=ob(n)),"="===n.charAt(1)&&(!(d=ka(p,n)+(Ya(p)||0))&&0!==d||(n=d))),!f||p!==n||Gt)return isNaN(p*n)||""===n?(c||e in t||Q(e,n),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new _e(this._pt,t,e,0,1,ue,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=ob(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?ka(d,l)-d:parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,p,n,_,h||q.stringFilter,l)):(d=new _e(this._pt,t,e,+p||0,n-(p||0),"boolean"==typeof c?se:ae,0,_),l&&(d.fp=l),u&&d.modifier(u,this,t),this._pt=d)},Qt=function _initTween(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_,m=t.vars,g=m.ease,v=m.startAt,y=m.immediateRender,T=m.lazy,b=m.onUpdate,x=m.runBackwards,O=m.yoyoEase,k=m.keyframes,M=m.autoRevert,P=t._dur,C=t._startAt,A=t._targets,S=t.parent,z=S&&"nested"===S.data?S.vars.targets:A,E="auto"===t._overwrite&&!F,D=t.timeline;if(!D||k&&g||(g="none"),t._ease=jt(g,V.ease),t._yEase=O?Yt(jt(!0===O?g:O,V.ease)):0,O&&t._yoyo&&!t._repeat&&(O=t._yEase,t._yEase=t._ease,t._ease=O),t._from=!D&&!!m.runBackwards,!D||k&&!m.stagger){if(p=(l=A[0]?fa(A[0]).harness:0)&&m[l.prop],i=ua(m,ft),C&&(C._zTime<0&&C.progress(1),e<0&&x&&y&&!M?C.render(-1,!0):C.revert(x&&P?ht:ut),C._lazy=0),v){if(za(t._startAt=$t.set(A,qa({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!C&&w(T),startAt:null,delay:0,onUpdate:b&&function(){return Ct(t,"onUpdate")},stagger:0},v))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L||!y&&!M)&&t._startAt.revert(ht),y&&P&&e<=0&&r<=0)return void(e&&(t._zTime=e))}else if(x&&P&&!C)if(e&&(y=!1),a=qa({overwrite:!1,data:"isFromStart",lazy:y&&!C&&w(T),immediateRender:y,stagger:0,parent:S},i),p&&(a[l.prop]=p),za(t._startAt=$t.set(A,a)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L?t._startAt.revert(ht):t._startAt.render(-1,!0)),t._zTime=e,y){if(!e)return}else _initTween(t._startAt,X,X);for(t._pt=t._ptCache=0,T=P&&w(T)||T&&!P,n=0;n<A.length;n++){if(h=(o=A[n])._gsap||ea(A)[n]._gsap,t._ptLookup[n]=d={},ct[h.id]&&dt.length&&ma(),c=z===A?n:z.indexOf(o),l&&!1!==(f=new l).init(o,p||i,t,c,z)&&(t._pt=s=new _e(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)pt[a]&&(f=ac(a,i,t,c,o,z))?f.priority&&(u=1):d[a]=s=Wt.call(t,o,a,"get",i[a],c,z,0,m.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),E&&t._pt&&(Nt=t,I.killTweensOf(o,d,t.globalTime(e)),_=!t.parent,Nt=0),t._pt&&T&&(ct[h.id]=1)}u&&pe(t),t._onInit&&t._onInit(t)}t._onUpdate=b,t._initted=(!t._op||t._pt)&&!_,k&&e<=0&&D.render(U,!0,!0)},Kt=function _parseFuncOrString(t,e,i,n,a){return s(t)?t.call(e,i,n,a):r(t)&&~t.indexOf("random(")?ob(t):t},Jt=vt+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ht={};ha(Jt+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Ht[t]=1});var $t=function(D){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var s,o,u,h,l,f,d,c,p=(a=D.call(this,n?r:va(r))||this).vars,_=p.duration,m=p.delay,g=p.immediateRender,T=p.stagger,b=p.overwrite,x=p.keyframes,O=p.defaults,k=p.scrollTrigger,M=p.yoyoEase,P=r.parent||I,C=(Z(e)||$(e)?t(e[0]):"length"in r)?[e]:Mt(e);if(a._targets=C.length?ea(C):R("GSAP target "+e+" not found. https://gsap.com",!q.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,x||T||y(_)||y(m)){if(r=a.vars,(s=a.timeline=new Xt({data:"nested",defaults:O||{},targets:P&&"nested"===P.data?P.vars.targets:C})).kill(),s.parent=s._dp=_assertThisInitialized(a),s._start=0,T||y(_)||y(m)){if(h=C.length,d=T&&eb(T),v(T))for(l in T)~Jt.indexOf(l)&&((c=c||{})[l]=T[l]);for(o=0;o<h;o++)(u=ua(r,Ht)).stagger=0,M&&(u.yoyoEase=M),c&&yt(u,c),f=C[o],u.duration=+Kt(_,_assertThisInitialized(a),o,f,C),u.delay=(+Kt(m,_assertThisInitialized(a),o,f,C)||0)-a._delay,!T&&1===h&&u.delay&&(a._delay=m=u.delay,a._start+=m,u.delay=0),s.to(f,u,d?d(o,f,C):0),s._ease=Lt.none;s.duration()?_=m=0:a.timeline=0}else if(x){va(qa(s.vars.defaults,{ease:"none"})),s._ease=jt(x.ease||r.ease||"none");var A,S,z,E=0;if(Z(x))x.forEach(function(t){return s.to(C,t,">")}),s.duration();else{for(l in u={},x)"ease"===l||"easeEach"===l||gc(l,x[l],u,x.easeEach);for(l in u)for(A=u[l].sort(function(t,e){return t.t-e.t}),o=E=0;o<A.length;o++)(z={ease:(S=A[o]).e,duration:(S.t-(o?A[o-1].t:0))/100*_})[l]=S.v,s.to(C,z,E),E+=z.duration;s.duration()<_&&s.to({},{duration:_-s.duration()})}}_||a.duration(_=s.duration())}else a.timeline=0;return!0!==b||F||(Nt=_assertThisInitialized(a),I.killTweensOf(C),Nt=0),Ka(P,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(g||!_&&!x&&a._start===ja(P._time)&&w(g)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==P.data)&&(a._tTime=-X,a.render(Math.max(0,-m)||0)),k&&La(_assertThisInitialized(a),k),a}_inheritsLoose(Tween,D);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=t<0,m=c-X<t&&!_?c:t<X?0:t;if(p){if(m!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=_){if(i=m,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(100*s+t,e,r);if(i=ja(m%s),m===c?(a=this._repeat,i=p):((a=~~(m/s))&&a===ja(m/s)&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=Tt(this._tTime,s),i===d&&!r&&this._initted&&a===o)return this._tTime=m,this;a!==o&&(l&&this._yEase&&Qb(l,u),this.vars.repeatRefresh&&!u&&!this._lock&&this._time!==s&&this._initted&&(this._lock=r=1,this.render(ja(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ma(this,_?t:i,r,e,m))return this._tTime=0,this;if(!(d===this._time||r&&this.vars.repeatRefresh&&a!==o))return this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=m,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!d&&!e&&!a&&(Ct(this,"onStart"),this._tTime!==m))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(_&&Ca(this,t,0,r),Ct(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Ct(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(_&&!this._onUpdate&&Ca(this,t,0,!0),!t&&p||!(m===this._tDur&&0<this._ts||!m&&this._ts<0)||za(this,1),e||_&&!d||!(m||d||u)||(Ct(this,m===c?"onComplete":"onReverseComplete",!0),!this._prom||m<c&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!bt(t))||(t._ts<0||t._dp._ts<0)&&!bt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=Ot(0,t._tDur,e),a=Tt(l,h),t._yoyo&&1&a&&(u=1-u),a!==Tt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||L||i||t._zTime===X||!e&&t._zTime){if(!t._initted&&Ma(t,e,i,r,l))return;for(s=t._zTime,t._zTime=e||(r?X:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;e<0&&Ca(t,e,0,!0),t._onUpdate&&!r&&Ct(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Ct(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&za(t,1),r||L||(Ct(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),D.prototype.invalidate.call(this,t)},e.resetTo=function resetTo(t,e,r,i,n){c||Rt.wake(),this._ts||this.play();var a,s=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||Qt(this,s),a=this._ease(s/this._dur),function _updatePropTweens(t,e,r,i,n,a,s,o){var u,h,l,f,d=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!d)for(d=t._ptCache[e]=[],l=t._ptLookup,f=t._targets.length;f--;){if((u=l[f][e])&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Gt=1,t.vars[e]="+=0",Qt(t,s),Gt=0,o?R(e+" not eligible for reset"):1;d.push(u)}for(f=d.length;f--;)(u=(h=d[f])._pt||h).s=!i&&0!==i||n?u.s+(i||0)+a*u.c:i,u.c=r-u.s,h.e&&(h.e=ia(r)+Ya(h.e)),h.b&&(h.b=u.s+Ya(h.b))}(this,t,e,r,i,a,s,n)?this.resetTo(t,e,r,i,1):(Ia(this,0),this.parent||xa(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?tb(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Nt&&!0!==Nt.vars.overwrite)._first||tb(this),this.parent&&i!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/i,0,1),this}var n,a,s,o,u,h,l,f=this._targets,d=t?Mt(t):f,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),tb(this);for(n=this._op=this._op||[],"all"!==e&&(r(e)&&(u={},ha(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?fa(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=yt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in a=c[l],"all"===e?(n[l]=e,o=a,s={}):(s=n[l]=n[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ya(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&p&&tb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Va(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Va(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return I.killTweensOf(t,e,r)},Tween}(Ut);qa($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ha("staggerTo,staggerFrom,staggerFromTo",function(r){$t[r]=function(){var t=new Xt,e=kt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function oc(t,e,r){return t.setAttribute(e,r)}function wc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Zt=function _setterPlain(t,e,r){return t[e]=r},te=function _setterFunc(t,e,r){return t[e](r)},re=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},ne=function _getSetter(t,e){return s(t[e])?te:u(t[e])&&t.setAttribute?oc:Zt},ae=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},se=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ue=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},he=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},fe=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ce=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ya(this,i,"_pt"):i.dep||(e=1),i=r;return!e},pe=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},_e=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=wc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||ae,this.d=s||this,this.set=o||Zt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ha(vt+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ft[t]=1}),ot.TweenMax=ot.TweenLite=$t,ot.TimelineLite=ot.TimelineMax=Xt,I=new Xt({sortChildren:!1,defaults:V,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),q.stringFilter=Fb;function Ec(t){return(ye[t]||Te).map(function(t){return t()})}function Fc(){var t=Date.now(),o=[];2<t-Oe&&(Ec("matchMediaInit"),ge.forEach(function(t){var e,r,i,n,a=t.queries,s=t.conditions;for(r in a)(e=h.matchMedia(a[r]).matches)&&(i=1),e!==s[r]&&(s[r]=e,n=1);n&&(t.revert(),i&&o.push(t))}),Ec("matchMediaRevert"),o.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Oe=t,Ec("matchMedia"))}var me,ge=[],ye={},Te=[],Oe=0,Me=0,Pe=((me=Context.prototype).add=function add(t,i,n){function Gw(){var t,e=l,r=a.selector;return e&&e!==a&&e.data.push(a),n&&(a.selector=cb(n)),l=a,t=i.apply(a,arguments),s(t)&&a._r.push(t),l=e,a.selector=r,a.isReverted=!1,t}s(t)&&(n=i,i=t,t=s);var a=this;return a.last=Gw,t===s?Gw(a,function(t){return a.add(null,t)}):t?a[t]=Gw:Gw},me.ignore=function ignore(t){var e=l;l=null,t(this),l=e},me.getTweens=function getTweens(){var e=[];return this.data.forEach(function(t){return t instanceof Context?e.push.apply(e,t.getTweens()):t instanceof $t&&!(t.parent&&"nested"===t.parent.data)&&e.push(t)}),e},me.clear=function clear(){this._r.length=this.data.length=0},me.kill=function kill(i,t){var n=this;if(i?function(){for(var t,e=n.getTweens(),r=n.data.length;r--;)"isFlip"===(t=n.data[r]).data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(t){return e.splice(e.indexOf(t),1)}));for(e.map(function(t){return{g:t._dur||t._delay||t._sat&&!t._sat.vars.immediateRender?t.globalTime(0):-1/0,t:t}}).sort(function(t,e){return e.g-t.g||-1/0}).forEach(function(t){return t.t.revert(i)}),r=n.data.length;r--;)(t=n.data[r])instanceof Xt?"nested"!==t.data&&(t.scrollTrigger&&t.scrollTrigger.revert(),t.kill()):t instanceof $t||!t.revert||t.revert(i);n._r.forEach(function(t){return t(i,n)}),n.isReverted=!0}():this.data.forEach(function(t){return t.kill&&t.kill()}),this.clear(),t)for(var e=ge.length;e--;)ge[e].id===this.id&&ge.splice(e,1)},me.revert=function revert(t){this.kill(t||{})},Context);function Context(t,e){this.selector=e&&cb(e),this.data=[],this._r=[],this.isReverted=!1,this.id=Me++,t&&this.add(t)}var Ce,Ae=((Ce=MatchMedia.prototype).add=function add(t,e,r){v(t)||(t={matches:t});var i,n,a,s=new Pe(0,r||this.scope),o=s.conditions={};for(n in l&&!s.selector&&(s.selector=l.selector),this.contexts.push(s),e=s.add("onMatch",e),s.queries=t)"all"===n?a=1:(i=h.matchMedia(t[n]))&&(ge.indexOf(s)<0&&ge.push(s),(o[n]=i.matches)&&(a=1),i.addListener?i.addListener(Fc):i.addEventListener("change",Fc));return a&&e(s,function(t){return s.add(null,t)}),this},Ce.revert=function revert(t){this.kill(t||{})},Ce.kill=function kill(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},MatchMedia);function MatchMedia(t){this.contexts=[],this.scope=t,l&&l.data.push(this)}var Se={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return wb(t)})},timeline:function timeline(t){return new Xt(t)},getTweensOf:function getTweensOf(t,e){return I.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,n){r(i)&&(i=Mt(i)[0]);var a=fa(i||{}).get,s=e?pa:oa;return"native"===e&&(e=""),i?t?s((pt[t]&&pt[t].get||a)(i,t,e,n)):function(t,e,r){return s((pt[t]&&pt[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Mt(r)).length){var n=r.map(function(t){return ze.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=pt[e],o=fa(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&he(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},quickTo:function quickTo(t,i,e){function $x(t,e,r){return n.resetTo(i,t,e,r)}var r,n=ze.to(t,yt(((r={})[i]="+=0.1",r.paused=!0,r),e||{}));return $x.tween=n,$x},isTweening:function isTweening(t){return 0<I.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=jt(t.ease,V.ease)),ta(V,t||{})},config:function config(t){return ta(q,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!pt[t]&&!ot[t]&&R(i+" effect requires "+t+" plugin.")}),_t[i]=function(t,e,r){return n(Mt(t),qa(e||{},a),r)},r&&(Xt.prototype[i]=function(t,e,r){return this.add(_t[i](t,v(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){Lt[t]=jt(e)},parseEase:function parseEase(t,e){return arguments.length?jt(t,e):Lt},getById:function getById(t){return I.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Xt(t);for(n.smoothChildTiming=w(t.smoothChildTiming),I.remove(n),n._dp=0,n._time=n._tTime=I._time,r=I._first;r;)i=r._next,!e&&!r._dur&&r instanceof $t&&r.vars.onComplete===r._targets[0]||Ka(n,r,r._start-r._delay),r=i;return Ka(I,n,0),n},context:function context(t,e){return t?new Pe(t,e):l},matchMedia:function matchMedia(t){return new Ae(t)},matchMediaRefresh:function matchMediaRefresh(){return ge.forEach(function(t){var e,r,i=t.conditions;for(r in i)i[r]&&(i[r]=!1,e=1);e&&t.revert()})||Fc()},addEventListener:function addEventListener(t,e){var r=ye[t]||(ye[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function removeEventListener(t,e){var r=ye[t],i=r&&r.indexOf(e);0<=i&&r.splice(i,1)},utils:{wrap:function wrap(e,t,r){var i=t-e;return Z(e)?lb(e,wrap(0,e.length),t):Wa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return Z(e)?lb(e,wrapYoyo(0,e.length-1),t):Wa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:eb,random:hb,snap:gb,normalize:function normalize(t,e,r){return Pt(t,e,0,1,r)},getUnit:Ya,clamp:function clamp(e,r,t){return Wa(t,function(t){return Ot(e,r,t)})},splitColor:Ab,toArray:Mt,selector:cb,mapRange:Pt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ya(t))}},interpolate:function interpolate(e,i,t,n){var a=isNaN(e+i)?0:function(t){return(1-t)*e+t*i};if(!a){var s,o,u,h,l,f=r(e),d={};if(!0===t&&(n=1)&&(t=null),f)e={p:e},i={p:i};else if(Z(e)&&!Z(i)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=i}else n||(e=yt(Z(e)?[]:{},e));if(!u){for(s in i)Wt.call(d,e,s,"get",i[s]);a=function func(t){return he(t,d)||(f?e.p:e)}}}return Wa(t,a)},shuffle:db},install:P,effects:_t,ticker:Rt,updateRoot:Xt.updateRoot,plugins:pt,globalTimeline:I,core:{PropTween:_e,globals:S,Tween:$t,Timeline:Xt,Animation:Ut,getCache:fa,_removeLinkedListItem:ya,reverting:function reverting(){return L},context:function context(t){return t&&l&&(l.data.push(t),t._ctx=l),l},suppressOverwrites:function suppressOverwrites(t){return F=t}}};ha("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Se[t]=$t[t]}),Rt.add(Xt.updateRoot),d=Se.to({},{duration:0});function Jc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function Lc(t,a){return{name:t,rawVars:1,init:function init(t,n,e){e._onInit=function(t){var e,i;if(r(n)&&(e={},ha(n,function(t){return e[t]=1}),n=e),a){for(i in e={},n)e[i]=a(n[i]);n=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=Jc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,n)}}}}var ze=Se.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s,o;for(a in this.tween=r,e)o=t.getAttribute(a)||"",(s=this.add(t,"setAttribute",(o||0)+"",e[a],i,n,0,0,a)).op=a,s.b=o,this._props.push(a)},render:function render(t,e){for(var r=e._pt;r;)L?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},Lc("roundProps",fb),Lc("modifiers"),Lc("snap",gb))||Se;$t.version=Xt.version=ze.version="3.12.5",o=1,x()&&Ft();function vd(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function wd(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function xd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function yd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function zd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Ad(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Bd(t,e,r){return t.style[e]=r}function Cd(t,e,r){return t.style.setProperty(e,r)}function Dd(t,e,r){return t._gsap[e]=r}function Ed(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Fd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function Gd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function Jd(t,e){var r=this,i=this.target,n=i.style,a=i._gsap;if(t in ar&&n){if(this.tfm=this.tfm||{},"transform"===t)return dr.transform.split(",").forEach(function(t){return Jd.call(r,t,e)});if(~(t=dr[t]||t).indexOf(",")?t.split(",").forEach(function(t){return r.tfm[t]=yr(i,t)}):this.tfm[t]=a.x?a[t]:yr(i,t),t===pr&&(this.tfm.zOrigin=a.zOrigin),0<=this.props.indexOf(cr))return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pr,e,"")),t=cr}(n||e)&&this.props.push(t,e,n[t])}function Kd(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))}function Ld(){var t,e,r=this.props,i=this.target,n=i.style,a=i._gsap;for(t=0;t<r.length;t+=3)r[t+1]?i[r[t]]=r[t+2]:r[t+2]?n[r[t]]=r[t+2]:n.removeProperty("--"===r[t].substr(0,2)?r[t]:r[t].replace(hr,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)a[e]=this.tfm[e];a.svg&&(a.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),(t=Be())&&t.isStart||n[cr]||(Kd(n),a.zOrigin&&n[pr]&&(n[pr]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}}function Md(t,e){var r={target:t,props:[],revert:Ld,save:Jd};return t._gsap||ze.core.getCache(t),e&&e.split(",").forEach(function(t){return r.save(t)}),r}function Od(t,e){var r=De.createElementNS?De.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):De.createElement(t);return r&&r.style?r:De.createElement(t)}function Pd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(hr,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&Pd(t,mr(e)||e,1)||""}function Sd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(Ee=window,De=Ee.document,Re=De.documentElement,Le=Od("div")||{style:{}},Od("div"),cr=mr(cr),pr=cr+"Origin",Le.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ye=!!mr("perspective"),Be=ze.core.reverting,Fe=1)}function Td(t){var e,r=Od("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(Re.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Td}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),Re.removeChild(r),this.style.cssText=a,e}function Ud(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function Vd(e){var r;try{r=e.getBBox()}catch(t){r=Td.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===Td||(r=Td.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+Ud(e,["x","cx","x1"])||0,y:+Ud(e,["y","cy","y1"])||0,width:0,height:0}}function Wd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Vd(t))}function Xd(t,e){if(e){var r,i=t.style;e in ar&&e!==pr&&(e=cr),i.removeProperty?("ms"!==(r=e.substr(0,2))&&"webkit"!==e.substr(0,6)||(e="-"+e),i.removeProperty("--"===r?e:e.replace(hr,"-$1").toLowerCase())):i.removeAttribute(e)}}function Yd(t,e,r,i,n,a){var s=new _e(t._pt,e,r,0,1,a?Ad:zd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function _d(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=Le.style,f=lr.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;if(i===h||!u||gr[i]||gr[h])return u;if("px"===h||p||(u=_d(t,e,r,"px")),o=t.getCTM&&Wd(t),(_||"%"===h)&&(ar[e]||~e.indexOf("adius")))return n=o?t.getBBox()[f?"width":"height"]:t[c],ia(_?u/n*100:u/100*n);if(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==De&&a.appendChild||(a=De.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Rt.time&&!s.uncache)return ia(u/s.width*100);if(!_||"height"!==e&&"width"!==e)!_&&"%"!==h||vr[Pd(a,"display")]||(l.position=Pd(t,"position")),a===t&&(l.position="static"),a.appendChild(Le),n=Le[c],a.removeChild(Le),l.position="absolute";else{var m=t.style[e];t.style[e]=100+i,n=t[c],m?t.style[e]=m:Xd(t,e)}return f&&_&&((s=fa(a)).time=Rt.time,s.width=a[c]),ia(p?n*u/100:n&&u?100/n*u:0)}function be(t,e,r,i){if(!r||"none"===r){var n=mr(e,t,1),a=n&&Pd(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=Pd(t,"borderTopColor"))}var s,o,u,h,l,f,d,c,p,_,m,g=new _e(this._pt,t.style,e,0,1,ue),v=0,y=0;if(g.b=r,g.e=i,r+="","auto"===(i+="")&&(f=t.style[e],t.style[e]=i,i=Pd(t,e)||i,f?t.style[e]=f:Xd(t,e)),Fb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],p=i.substring(v,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[y++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),"="===d.charAt(1)&&(d=ka(h,d)+m),c=parseFloat(d),_=d.substr((c+"").length),v=rt.lastIndex-_.length,_||(_=_||q.units[e]||m,v===i.length&&(i+=_,g.e+=_)),m!==_&&(h=_d(t,e,f,_)||0),g._pt={_next:g._pt,p:p||1===y?p:",",s:h,c:c-h,m:l&&l<4||"zIndex"===e?Math.round:0});g.c=v<i.length?i.substring(v,i.length):""}else g.r="display"===e&&"none"===i?Ad:zd;return nt.test(i)&&(g.e=0),this._pt=g}function de(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Tr[r]||r,e[1]=Tr[i]||i,e.join(" ")}function ee(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],ar[r]&&(i=1,r="transformOrigin"===r?pr:cr),Xd(a,r);i&&(Xd(a,cr),u&&(u.svg&&a.removeAttribute("transform"),Or(a,1),u.uncache=1,Kd(s)))}}function ie(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function je(t){var e=Pd(t,cr);return ie(e)?wr:e.substr(7).match(et).map(ia)}function ke(t,e){var r,i,n,a,s=t._gsap||fa(t),o=t.style,u=je(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?wr:u:(u!==wr||t.offsetParent||t===Re||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextElementSibling,Re.appendChild(t)),u=je(t),n?o.display=n:Xd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):Re.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function le(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||ke(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==wr&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=Vd(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-d,h.xOffset=c+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[pr]="0px 0px",a&&(Yd(a,h,"xOrigin",f,w),Yd(a,h,"yOrigin",d,x),Yd(a,h,"xOffset",c,h.xOffset),Yd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function oe(t,e,r){var i=Ya(e);return ia(parseFloat(e)+parseFloat(_d(t,"x",r+"px",i)))+i}function ve(t,e,i,n,a){var s,o,u=360,h=r(a),l=parseFloat(a)*(h&&~a.indexOf("rad")?sr:1)-n,f=n+l+"deg";return h&&("short"===(s=a.split("_")[1])&&(l%=u)!==l%180&&(l+=l<0?u:-u),"cw"===s&&l<0?l=(l+36e9)%u-~~(l/u)*u:"ccw"===s&&0<l&&(l=(l-36e9)%u-~~(l/u)*u)),t._pt=o=new _e(t._pt,e,i,n,l,wd),o.e=f,o.u="deg",t._props.push(i),o}function we(t,e){for(var r in e)t[r]=e[r];return t}function xe(t,e,r){var i,n,a,s,o,u,h,l=we({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[cr]=e,i=Or(r,1),Xd(r,cr),r.setAttribute("transform",a)):(a=getComputedStyle(r)[cr],f[cr]=e,i=Or(r,1),f[cr]=a),ar)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ya(a)!==(h=Ya(s))?_d(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new _e(t._pt,i,n,o,u-o,vd),t._pt.u=h||0,t._props.push(n));we(i,l)}var Ee,De,Re,Fe,Le,Ie,Be,Ye,qe=Lt.Power0,Ve=Lt.Power1,Ue=Lt.Power2,Xe=Lt.Power3,Ne=Lt.Power4,Ge=Lt.Linear,We=Lt.Quad,Qe=Lt.Cubic,Ke=Lt.Quart,Je=Lt.Quint,He=Lt.Strong,$e=Lt.Elastic,Ze=Lt.Back,tr=Lt.SteppedEase,er=Lt.Bounce,rr=Lt.Sine,ir=Lt.Expo,nr=Lt.Circ,ar={},sr=180/Math.PI,or=Math.PI/180,ur=Math.atan2,hr=/([A-Z])/g,lr=/(left|right|width|margin|padding|x)/i,fr=/[\s,\(]\S/,dr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cr="transform",pr=cr+"Origin",_r="O,Moz,ms,Ms,Webkit".split(","),mr=function _checkPropPrefix(t,e,r){var i=(e||Le).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(_r[n]+t in i););return n<0?null:(3===n?"ms":0<=n?_r[n]:"")+t},gr={deg:1,rad:1,turn:1},vr={grid:1,flex:1},yr=function _get(t,e,r,i){var n;return Fe||Sd(),e in dr&&"transform"!==e&&~(e=dr[e]).indexOf(",")&&(e=e.split(",")[0]),ar[e]&&"transform"!==e?(n=Or(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:kr(Pd(t,pr))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=br[e]&&br[e](t,e,r)||Pd(t,e)||ga(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?_d(t,e,n,r)+r:n},Tr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},br={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new _e(t._pt,e,r,0,0,ee);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},wr=[1,0,0,1,0,0],xr={},Or=function _parseTransform(t,e){var r=t._gsap||new Vt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w,x,O,k,M,P,C,A,S,z,E,D,R,F=t.style,L=r.scaleX<0,I="deg",B=getComputedStyle(t),Y=Pd(t,pr)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!Wd(t)),B.translate&&("none"===B.translate&&"none"===B.scale&&"none"===B.rotate||(F[cr]=("none"!==B.translate?"translate3d("+(B.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==B.rotate?"rotate("+B.rotate+") ":"")+("none"!==B.scale?"scale("+B.scale.split(" ").join(",")+") ":"")+("none"!==B[cr]?B[cr]:"")),F.scale=F.rotate=F.translate="none"),m=ke(t,r.svg),r.svg&&(M=r.uncache?(P=t.getBBox(),Y=r.xOrigin-P.x+"px "+(r.yOrigin-P.y)+"px",""):!e&&t.getAttribute("data-svg-origin"),le(t,M||Y,!!M||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==wr&&(T=m[0],b=m[1],w=m[2],x=m[3],i=O=m[4],n=k=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?ur(b,T)*sr:0,(f=w||x?ur(w,x)*sr+u:0)&&(o*=Math.abs(Math.cos(f*or))),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(R=m[6],E=m[7],A=m[8],S=m[9],z=m[10],D=m[11],i=m[12],n=m[13],a=m[14],h=(g=ur(R,z))*sr,g&&(M=O*(v=Math.cos(-g))+A*(y=Math.sin(-g)),P=k*v+S*y,C=R*v+z*y,A=O*-y+A*v,S=k*-y+S*v,z=R*-y+z*v,D=E*-y+D*v,O=M,k=P,R=C),l=(g=ur(-w,z))*sr,g&&(v=Math.cos(-g),D=x*(y=Math.sin(-g))+D*v,T=M=T*v-A*y,b=P=b*v-S*y,w=C=w*v-z*y),u=(g=ur(b,T))*sr,g&&(M=T*(v=Math.cos(g))+b*(y=Math.sin(g)),P=O*v+k*y,b=b*v-T*y,k=k*v-O*y,T=M,O=P),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ia(Math.sqrt(T*T+b*b+w*w)),o=ia(Math.sqrt(k*k+R*R)),g=ur(O,k),f=2e-4<Math.abs(g)?g*sr:0,c=D?1/(D<0?-D:D):0),r.svg&&(M=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!ie(Pd(t,cr)),M&&t.setAttribute("transform",M))),90<Math.abs(f)&&Math.abs(f)<270&&(L?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),e=e||r.uncache,r.x=i-((r.xPercent=i&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ia(s),r.scaleY=ia(o),r.rotation=ia(u)+I,r.rotationX=ia(h)+I,r.rotationY=ia(l)+I,r.skewX=f+I,r.skewY=d+I,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(Y.split(" ")[2])||!e&&r.zOrigin||0)&&(F[pr]=kr(Y)),r.xOffset=r.yOffset=0,r.force3D=q.force3D,r.renderTransform=r.svg?zr:Ye?Sr:Mr,r.uncache=0,r},kr=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},Mr=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Sr(t,e)},Pr="0deg",Cr="0px",Ar=") ",Sr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Pr||h!==Pr)){var b,w=parseFloat(h)*or,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*or,b=Math.cos(w),a=oe(g,a,x*b*-v),s=oe(g,s,-Math.sin(w)*-v),o=oe(g,o,O*b*-v+v)}_!==Cr&&(y+="perspective("+_+Ar),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Cr&&s===Cr&&o===Cr||(y+=o!==Cr||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Ar),u!==Pr&&(y+="rotate("+u+Ar),h!==Pr&&(y+="rotateY("+h+Ar),l!==Pr&&(y+="rotateX("+l+Ar),f===Pr&&d===Pr||(y+="skew("+f+", "+d+Ar),1===c&&1===p||(y+="scale("+c+", "+p+Ar),g.style[cr]=y||"translate(0, 0)"},zr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=or,c*=or,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=or,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ia(r),i=ia(i),n=ia(n),a=ia(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=_d(g,"x",l,"px"),O=_d(g,"y",f,"px")),(v||y||T||b)&&(x=ia(x+v-(v*r+y*n)+T),O=ia(O+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=ia(x+u/100*s.width),O=ia(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[cr]=s)};ha("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});br[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return yr(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var Er,Dr,Rr,Fr={name:"css",register:Sd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,i,n,a){var s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w=this._props,x=t.style,O=i.vars.startAt;for(d in Fe||Sd(),this.styles=this.styles||Md(t),b=this.styles.props,this.tween=i,e)if("autoRound"!==d&&(o=e[d],!pt[d]||!ac(d,e,i,n,t,a)))if(l=typeof o,f=br[d],"function"===l&&(l=typeof(o=o.call(i,n,t,a))),"string"===l&&~o.indexOf("random(")&&(o=ob(o)),f)f(this,t,d,o,i)&&(T=1);else if("--"===d.substr(0,2))s=(getComputedStyle(t).getPropertyValue(d)+"").trim(),o+="",Et.lastIndex=0,Et.test(s)||(c=Ya(s),p=Ya(o)),p?c!==p&&(s=_d(t,d,s,p)+p):c&&(o+=c),this.add(x,"setProperty",s,o,n,a,0,0,d),w.push(d),b.push(d,0,x[d]);else if("undefined"!==l){if(O&&d in O?(s="function"==typeof O[d]?O[d].call(i,n,t,a):O[d],r(s)&&~s.indexOf("random(")&&(s=ob(s)),Ya(s+"")||"auto"===s||(s+=q.units[d]||Ya(yr(t,d))||""),"="===(s+"").charAt(1)&&(s=yr(t,d))):s=yr(t,d),h=parseFloat(s),(_="string"===l&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),u=parseFloat(o),d in dr&&("autoAlpha"===d&&(1===h&&"hidden"===yr(t,"visibility")&&u&&(h=0),b.push("visibility",0,x.visibility),Yd(this,x,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==d&&"transform"!==d&&~(d=dr[d]).indexOf(",")&&(d=d.split(",")[0])),m=d in ar)if(this.styles.save(d),g||((v=t._gsap).renderTransform&&!e.parseTransform||Or(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new _e(this._pt,x,cr,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===d)this._pt=new _e(this._pt,v,"scaleY",v.scaleY,(_?ka(v.scaleY,_+u):u)-v.scaleY||0,vd),this._pt.u=0,w.push("scaleY",d),d+="X";else{if("transformOrigin"===d){b.push(pr,0,x[pr]),o=de(o),v.svg?le(t,o,0,y,0,this):((p=parseFloat(o.split(" ")[2])||0)!==v.zOrigin&&Yd(this,v,"zOrigin",v.zOrigin,p),Yd(this,x,d,kr(s),kr(o)));continue}if("svgOrigin"===d){le(t,o,1,y,0,this);continue}if(d in xr){ve(this,v,d,h,_?ka(h,_+o):o);continue}if("smoothOrigin"===d){Yd(this,v,"smooth",v.smooth,o);continue}if("force3D"===d){v[d]=o;continue}if("transform"===d){xe(this,o,t);continue}}else d in x||(d=mr(d)||d);if(m||(u||0===u)&&(h||0===h)&&!fr.test(o)&&d in x)u=u||0,(c=(s+"").substr((h+"").length))!==(p=Ya(o)||(d in q.units?q.units[d]:c))&&(h=_d(t,d,s,p)),this._pt=new _e(this._pt,m?v:x,d,h,(_?ka(h,_+u):u)-h,m||"px"!==p&&"zIndex"!==d||!1===e.autoRound?vd:yd),this._pt.u=p||0,c!==p&&"%"!==p&&(this._pt.b=s,this._pt.r=xd);else if(d in x)be.call(this,t,d,s,_?_+o:o);else if(d in t)this.add(t,d,s||t[d],_?_+o:o,n,a);else if("parseTransform"!==d){Q(d,o);continue}m||(d in x?b.push(d,0,x[d]):b.push(d,1,s||t[d])),w.push(d)}T&&pe(this)},render:function render(t,e){if(e.tween._time||!Be())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:yr,aliases:dr,getSetter:function getSetter(t,e,r){var i=dr[e];return i&&i.indexOf(",")<0&&(e=i),e in ar&&e!==pr&&(t._gsap.x||yr(t,"x"))?r&&Ie===r?"scale"===e?Ed:Dd:(Ie=r||{})&&("scale"===e?Fd:Gd):t.style&&!u(t.style[e])?Bd:~e.indexOf("-")?Cd:ne(t,e)},core:{_removeProperty:Xd,_getMatrix:ke}};ze.utils.checkPrefix=mr,ze.core.getStyleSaver=Md,Rr=ha((Er="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(Dr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){ar[t]=1}),ha(Dr,function(t){q.units[t]="deg",xr[t]=1}),dr[Rr[13]]=Er+","+Dr,ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");dr[e[1]]=Rr[e[0]]}),ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){q.units[t]="px"}),ze.registerPlugin(Fr);var Lr=ze.registerPlugin(Fr)||ze,Ir=Lr.core.Tween;e.Back=Ze,e.Bounce=er,e.CSSPlugin=Fr,e.Circ=nr,e.Cubic=Qe,e.Elastic=$e,e.Expo=ir,e.Linear=Ge,e.Power0=qe,e.Power1=Ve,e.Power2=Ue,e.Power3=Xe,e.Power4=Ne,e.Quad=We,e.Quart=Ke,e.Quint=Je,e.Sine=rr,e.SteppedEase=tr,e.Strong=He,e.TimelineLite=Xt,e.TimelineMax=Xt,e.TweenLite=$t,e.TweenMax=Ir,e.default=Lr,e.gsap=Lr;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


;


;
// Original plugin 4: assets/scripts/plugin/mobile-detect.min.js
// SHA256: 6aaaf41e7fbaca1be0bfc9e35cb4bda7c2340ef786b65f802b4d6bab476e7661
/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
!function(a,b){a(function(){"use strict";function a(a,b){return null!=a&&null!=b&&a.toLowerCase()===b.toLowerCase()}function c(a,b){var c,d,e=a.length;if(!e||!b)return!1;for(c=b.toLowerCase(),d=0;d<e;++d)if(c===a[d].toLowerCase())return!0;return!1}function d(a){for(var b in a)i.call(a,b)&&(a[b]=new RegExp(a[b],"i"))}function e(a){return(a||"").substr(0,500)}function f(a,b){this.ua=e(a),this._cache={},this.maxPhoneWidth=b||600}var g={};g.mobileDetectRules={phones:{iPhone:"\\biPhone\\b|\\biPod\\b",BlackBerry:"BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",Pixel:"; \\bPixel\\b",HTC:"HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",Nexus:"Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 5X|Nexus 6",Dell:"Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",Motorola:"Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",Samsung:"\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F|SM-G610F|SM-G981B|SM-G892A|SM-A530F",LG:"\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",Sony:"SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533|SOV34|601SO|F8332",Asus:"Asus.*Galaxy|PadFone.*Mobile",Xiaomi:"^(?!.*\\bx11\\b).*xiaomi.*$|POCOPHONE F1|MI 8|Redmi Note 9S|Redmi Note 5A Prime|N2G47H|M2001J2G|M2001J2I|M1805E10A|M2004J11G|M1902F1G|M2002J9G|M2004J19G|M2003J6A1G",NokiaLumia:"Lumia [0-9]{3,4}",Micromax:"Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",Palm:"PalmSource|Palm",Vertu:"Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",Pantech:"PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",Fly:"IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",Wiko:"KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",iMobile:"i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",SimValley:"\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",Wolfgang:"AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",Alcatel:"Alcatel",Nintendo:"Nintendo (3DS|Switch)",Amoi:"Amoi",INQ:"INQ",OnePlus:"ONEPLUS",GenericPhone:"Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"},tablets:{iPad:"iPad|iPad.*Mobile",NexusTablet:"Android.*Nexus[\\s]+(7|9|10)",GoogleTablet:"Android.*Pixel C",SamsungTablet:"SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V|SM-P610|SM-T290|SM-T515|SM-T590|SM-T595|SM-T725|SM-T817P|SM-P585N0|SM-T395|SM-T295|SM-T865|SM-P610N|SM-P615|SM-T970|SM-T380|SM-T5950|SM-T905|SM-T231|SM-T500|SM-T860",Kindle:"Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",SurfaceTablet:"Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",HPTablet:"HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",AsusTablet:"^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",BlackBerryTablet:"PlayBook|RIM Tablet",HTCtablet:"HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",MotorolaTablet:"xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",NookTablet:"Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",AcerTablet:"Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30|A3-A40",ToshibaTablet:"Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",LGTablet:"\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",FujitsuTablet:"Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",PrestigioTablet:"PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",LenovoTablet:"Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X|TB-X704F|TB-X104F|TB3-X70F|TB-X705F|TB-8504F|TB3-X70L|TB3-710F|TB-X704L",DellTablet:"Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",YarvikTablet:"Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",MedionTablet:"Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",ArnovaTablet:"97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",IntensoTablet:"INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",IRUTablet:"M702pro",MegafonTablet:"MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",EbodaTablet:"E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",AllViewTablet:"Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",ArchosTablet:"\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",AinolTablet:"NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",NokiaLumiaTablet:"Lumia 2520",SonyTablet:"Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",PhilipsTablet:"\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",CubeTablet:"Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",CobyTablet:"MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",MIDTablet:"M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",MSITablet:"MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",SMiTTablet:"Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",RockChipTablet:"Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",FlyTablet:"IQ310|Fly Vision",bqTablet:"Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",HuaweiTablet:"MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",NecTablet:"\\bN-06D|\\bN-08D",PantechTablet:"Pantech.*P4100",BronchoTablet:"Broncho.*(N701|N708|N802|a710)",VersusTablet:"TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",ZyncTablet:"z1000|Z99 2G|z930|z990|z909|Z919|z900",PositivoTablet:"TB07STA|TB10STA|TB07FTA|TB10FTA",NabiTablet:"Android.*\\bNabi",KoboTablet:"Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",DanewTablet:"DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",TexetTablet:"NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",PlaystationTablet:"Playstation.*(Portable|Vita)",TrekstorTablet:"ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",PyleAudioTablet:"\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",AdvanTablet:"Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",DanyTechTablet:"Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",GalapadTablet:"Android [0-9.]+; [a-z-]+; \\bG1\\b",MicromaxTablet:"Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",KarbonnTablet:"Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",AllFineTablet:"Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",PROSCANTablet:"\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",YONESTablet:"BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",ChangJiaTablet:"TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",GUTablet:"TX-A1301|TX-M9002|Q702|kf026",PointOfViewTablet:"TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",OvermaxTablet:"OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",HCLTablet:"HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",DPSTablet:"DPS Dream 9|DPS Dual 7",VistureTablet:"V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",CrestaTablet:"CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",MediatekTablet:"\\bMT8125|MT8389|MT8135|MT8377\\b",ConcordeTablet:"Concorde([ ]+)?Tab|ConCorde ReadMan",GoCleverTablet:"GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",ModecomTablet:"FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",VoninoTablet:"\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",ECSTablet:"V07OT2|TM105A|S10OT1|TR10CS1",StorexTablet:"eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",VodafoneTablet:"SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",EssentielBTablet:"Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",RossMoorTablet:"RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",iMobileTablet:"i-mobile i-note",TolinoTablet:"tolino tab [0-9.]+|tolino shine",AudioSonicTablet:"\\bC-22Q|T7-QC|T-17B|T-17P\\b",AMPETablet:"Android.* A78 ",SkkTablet:"Android.* (SKYPAD|PHOENIX|CYCLOPS)",TecnoTablet:"TECNO P9|TECNO DP8D",JXDTablet:"Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",iJoyTablet:"Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",FX2Tablet:"FX2 PAD7|FX2 PAD10",XoroTablet:"KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",ViewsonicTablet:"ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",VerizonTablet:"QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",OdysTablet:"LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",CaptivaTablet:"CAPTIVA PAD",IconbitTablet:"NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",TeclastTablet:"T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",OndaTablet:"\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",JaytechTablet:"TPC-PA762",BlaupunktTablet:"Endeavour 800NG|Endeavour 1010",DigmaTablet:"\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",EvolioTablet:"ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",LavaTablet:"QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",AocTablet:"MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",MpmanTablet:"MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",CelkonTablet:"CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",WolderTablet:"miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",MediacomTablet:"M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",MiTablet:"\\bMI PAD\\b|\\bHM NOTE 1W\\b",NibiruTablet:"Nibiru M1|Nibiru Jupiter One",NexoTablet:"NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",LeaderTablet:"TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",UbislateTablet:"UbiSlate[\\s]?7C",PocketBookTablet:"Pocketbook",KocasoTablet:"\\b(TB-1207)\\b",HisenseTablet:"\\b(F5281|E2371)\\b",Hudl:"Hudl HT7S3|Hudl 2",TelstraTablet:"T-Hub2",GenericTablet:"Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"},oss:{AndroidOS:"Android",BlackBerryOS:"blackberry|\\bBB10\\b|rim tablet os",PalmOS:"PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",SymbianOS:"Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",WindowsMobileOS:"Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",WindowsPhoneOS:"Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",iOS:"\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",iPadOS:"CPU OS 13",SailfishOS:"Sailfish",MeeGoOS:"MeeGo",MaemoOS:"Maemo",JavaOS:"J2ME/|\\bMIDP\\b|\\bCLDC\\b",webOS:"webOS|hpwOS",badaOS:"\\bBada\\b",BREWOS:"BREW"},uas:{Chrome:"\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",Dolfin:"\\bDolfin\\b",Opera:"Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",Skyfire:"Skyfire",Edge:"\\bEdgiOS\\b|Mobile Safari/[.0-9]* Edge",IE:"IEMobile|MSIEMobile",Firefox:"fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",Bolt:"bolt",TeaShark:"teashark",Blazer:"Blazer",Safari:"Version((?!\\bEdgiOS\\b).)*Mobile.*Safari|Safari.*Mobile|MobileSafari",WeChat:"\\bMicroMessenger\\b",UCBrowser:"UC.*Browser|UCWEB",baiduboxapp:"baiduboxapp",baidubrowser:"baidubrowser",DiigoBrowser:"DiigoBrowser",Mercury:"\\bMercury\\b",ObigoBrowser:"Obigo",NetFront:"NF-Browser",GenericBrowser:"NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",PaleMoon:"Android.*PaleMoon|Mobile.*PaleMoon"},props:{Mobile:"Mobile/[VER]",Build:"Build/[VER]",Version:"Version/[VER]",VendorID:"VendorID/[VER]",iPad:"iPad.*CPU[a-z ]+[VER]",iPhone:"iPhone.*CPU[a-z ]+[VER]",iPod:"iPod.*CPU[a-z ]+[VER]",Kindle:"Kindle/[VER]",Chrome:["Chrome/[VER]","CriOS/[VER]","CrMo/[VER]"],Coast:["Coast/[VER]"],Dolfin:"Dolfin/[VER]",Firefox:["Firefox/[VER]","FxiOS/[VER]"],Fennec:"Fennec/[VER]",Edge:"Edge/[VER]",IE:["IEMobile/[VER];","IEMobile [VER]","MSIE [VER];","Trident/[0-9.]+;.*rv:[VER]"],NetFront:"NetFront/[VER]",NokiaBrowser:"NokiaBrowser/[VER]",Opera:[" OPR/[VER]","Opera Mini/[VER]","Version/[VER]"],"Opera Mini":"Opera Mini/[VER]","Opera Mobi":"Version/[VER]",UCBrowser:["UCWEB[VER]","UC.*Browser/[VER]"],MQQBrowser:"MQQBrowser/[VER]",MicroMessenger:"MicroMessenger/[VER]",baiduboxapp:"baiduboxapp/[VER]",baidubrowser:"baidubrowser/[VER]",SamsungBrowser:"SamsungBrowser/[VER]",Iron:"Iron/[VER]",Safari:["Version/[VER]","Safari/[VER]"],Skyfire:"Skyfire/[VER]",Tizen:"Tizen/[VER]",Webkit:"webkit[ /][VER]",PaleMoon:"PaleMoon/[VER]",SailfishBrowser:"SailfishBrowser/[VER]",Gecko:"Gecko/[VER]",Trident:"Trident/[VER]",Presto:"Presto/[VER]",Goanna:"Goanna/[VER]",iOS:" \\bi?OS\\b [VER][ ;]{1}",Android:"Android [VER]",Sailfish:"Sailfish [VER]",BlackBerry:["BlackBerry[\\w]+/[VER]","BlackBerry.*Version/[VER]","Version/[VER]"],BREW:"BREW [VER]",Java:"Java/[VER]","Windows Phone OS":["Windows Phone OS [VER]","Windows Phone [VER]"],"Windows Phone":"Windows Phone [VER]","Windows CE":"Windows CE/[VER]","Windows NT":"Windows NT [VER]",Symbian:["SymbianOS/[VER]","Symbian/[VER]"],webOS:["webOS/[VER]","hpwOS/[VER];"]},utils:{Bot:"Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp|AspiegelBot",MobileBot:"Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",DesktopMode:"WPDesktop",TV:"SonyDTV|HbbTV",WebKit:"(webkit)[ /]([\\w.]+)",Console:"\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",Watch:"SM-V700"}},g.detectMobileBrowsers={fullPattern:/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
shortPattern:/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,tabletPattern:/android|ipad|playbook|silk/i};var h,i=Object.prototype.hasOwnProperty;return g.FALLBACK_PHONE="UnknownPhone",g.FALLBACK_TABLET="UnknownTablet",g.FALLBACK_MOBILE="UnknownMobile",h="isArray"in Array?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},function(){var a,b,c,e,f,j,k=g.mobileDetectRules;for(a in k.props)if(i.call(k.props,a)){for(b=k.props[a],h(b)||(b=[b]),f=b.length,e=0;e<f;++e)c=b[e],j=c.indexOf("[VER]"),j>=0&&(c=c.substring(0,j)+"([\\w._\\+]+)"+c.substring(j+5)),b[e]=new RegExp(c,"i");k.props[a]=b}d(k.oss),d(k.phones),d(k.tablets),d(k.uas),d(k.utils),k.oss0={WindowsPhoneOS:k.oss.WindowsPhoneOS,WindowsMobileOS:k.oss.WindowsMobileOS}}(),g.findMatch=function(a,b){for(var c in a)if(i.call(a,c)&&a[c].test(b))return c;return null},g.findMatches=function(a,b){var c=[];for(var d in a)i.call(a,d)&&a[d].test(b)&&c.push(d);return c},g.getVersionStr=function(a,b){var c,d,e,f,h=g.mobileDetectRules.props;if(i.call(h,a))for(c=h[a],e=c.length,d=0;d<e;++d)if(f=c[d].exec(b),null!==f)return f[1];return null},g.getVersion=function(a,b){var c=g.getVersionStr(a,b);return c?g.prepareVersionNo(c):NaN},g.prepareVersionNo=function(a){var b;return b=a.split(/[a-z._ \/\-]/i),1===b.length&&(a=b[0]),b.length>1&&(a=b[0]+".",b.shift(),a+=b.join("")),Number(a)},g.isMobileFallback=function(a){return g.detectMobileBrowsers.fullPattern.test(a)||g.detectMobileBrowsers.shortPattern.test(a.substr(0,4))},g.isTabletFallback=function(a){return g.detectMobileBrowsers.tabletPattern.test(a)},g.prepareDetectionCache=function(a,c,d){if(a.mobile===b){var e,h,i;return(h=g.findMatch(g.mobileDetectRules.tablets,c))?(a.mobile=a.tablet=h,void(a.phone=null)):(e=g.findMatch(g.mobileDetectRules.phones,c))?(a.mobile=a.phone=e,void(a.tablet=null)):void(g.isMobileFallback(c)?(i=f.isPhoneSized(d),i===b?(a.mobile=g.FALLBACK_MOBILE,a.tablet=a.phone=null):i?(a.mobile=a.phone=g.FALLBACK_PHONE,a.tablet=null):(a.mobile=a.tablet=g.FALLBACK_TABLET,a.phone=null)):g.isTabletFallback(c)?(a.mobile=a.tablet=g.FALLBACK_TABLET,a.phone=null):a.mobile=a.tablet=a.phone=null)}},g.mobileGrade=function(a){var b=null!==a.mobile();return a.os("iOS")&&a.version("iPad")>=4.3||a.os("iOS")&&a.version("iPhone")>=3.1||a.os("iOS")&&a.version("iPod")>=3.1||a.version("Android")>2.1&&a.is("Webkit")||a.version("Windows Phone OS")>=7||a.is("BlackBerry")&&a.version("BlackBerry")>=6||a.match("Playbook.*Tablet")||a.version("webOS")>=1.4&&a.match("Palm|Pre|Pixi")||a.match("hp.*TouchPad")||a.is("Firefox")&&a.version("Firefox")>=12||a.is("Chrome")&&a.is("AndroidOS")&&a.version("Android")>=4||a.is("Skyfire")&&a.version("Skyfire")>=4.1&&a.is("AndroidOS")&&a.version("Android")>=2.3||a.is("Opera")&&a.version("Opera Mobi")>11&&a.is("AndroidOS")||a.is("MeeGoOS")||a.is("Tizen")||a.is("Dolfin")&&a.version("Bada")>=2||(a.is("UC Browser")||a.is("Dolfin"))&&a.version("Android")>=2.3||a.match("Kindle Fire")||a.is("Kindle")&&a.version("Kindle")>=3||a.is("AndroidOS")&&a.is("NookTablet")||a.version("Chrome")>=11&&!b||a.version("Safari")>=5&&!b||a.version("Firefox")>=4&&!b||a.version("MSIE")>=7&&!b||a.version("Opera")>=10&&!b?"A":a.os("iOS")&&a.version("iPad")<4.3||a.os("iOS")&&a.version("iPhone")<3.1||a.os("iOS")&&a.version("iPod")<3.1||a.is("Blackberry")&&a.version("BlackBerry")>=5&&a.version("BlackBerry")<6||a.version("Opera Mini")>=5&&a.version("Opera Mini")<=6.5&&(a.version("Android")>=2.3||a.is("iOS"))||a.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3")||a.version("Opera Mobi")>=11&&a.is("SymbianOS")?"B":(a.version("BlackBerry")<5||a.match("MSIEMobile|Windows CE.*Mobile")||a.version("Windows Mobile")<=5.2,"C")},g.detectOS=function(a){return g.findMatch(g.mobileDetectRules.oss0,a)||g.findMatch(g.mobileDetectRules.oss,a)},g.getDeviceSmallerSide=function(){return window.screen.width<window.screen.height?window.screen.width:window.screen.height},f.prototype={constructor:f,mobile:function(){return g.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.mobile},phone:function(){return g.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.phone},tablet:function(){return g.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.tablet},userAgent:function(){return this._cache.userAgent===b&&(this._cache.userAgent=g.findMatch(g.mobileDetectRules.uas,this.ua)),this._cache.userAgent},userAgents:function(){return this._cache.userAgents===b&&(this._cache.userAgents=g.findMatches(g.mobileDetectRules.uas,this.ua)),this._cache.userAgents},os:function(){return this._cache.os===b&&(this._cache.os=g.detectOS(this.ua)),this._cache.os},version:function(a){return g.getVersion(a,this.ua)},versionStr:function(a){return g.getVersionStr(a,this.ua)},is:function(b){return c(this.userAgents(),b)||a(b,this.os())||a(b,this.phone())||a(b,this.tablet())||c(g.findMatches(g.mobileDetectRules.utils,this.ua),b)},match:function(a){return a instanceof RegExp||(a=new RegExp(a,"i")),a.test(this.ua)},isPhoneSized:function(a){return f.isPhoneSized(a||this.maxPhoneWidth)},mobileGrade:function(){return this._cache.grade===b&&(this._cache.grade=g.mobileGrade(this)),this._cache.grade}},"undefined"!=typeof window&&window.screen?f.isPhoneSized=function(a){return a<0?b:g.getDeviceSmallerSide()<=a}:f.isPhoneSized=function(){},f._impl=g,f.version="1.4.5 2021-03-13",f})}(function(a){if("undefined"!=typeof module&&module.exports)return function(a){module.exports=a()};if("function"==typeof define&&define.amd)return define;if("undefined"!=typeof window)return function(a){window.MobileDetect=a()};throw new Error("unknown environment")}());
;


;
// Original plugin 5: assets/scripts/plugin/pako.min.js
// SHA256: ede2693a4a6a5126b9d35669062b358ecab6ae7b9b86a1cf302feb45a8514907
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).pako={})}(this,(function(t){"use strict";function e(t){let e=t.length;for(;--e>=0;)t[e]=0}const a=256,i=286,n=30,s=15,r=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),o=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),l=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),h=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),d=new Array(576);e(d);const _=new Array(60);e(_);const f=new Array(512);e(f);const c=new Array(256);e(c);const u=new Array(29);e(u);const w=new Array(n);function m(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let b,g,p;function k(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}e(w);const v=t=>t<256?f[t]:f[256+(t>>>7)],y=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},x=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,y(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},z=(t,e,a)=>{x(t,a[2*e],a[2*e+1])},A=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},E=(t,e,a)=>{const i=new Array(16);let n,r,o=0;for(n=1;n<=s;n++)o=o+a[n-1]<<1,i[n]=o;for(r=0;r<=e;r++){let e=t[2*r+1];0!==e&&(t[2*r]=A(i[e]++,e))}},R=t=>{let e;for(e=0;e<i;e++)t.dyn_ltree[2*e]=0;for(e=0;e<n;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},Z=t=>{t.bi_valid>8?y(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},U=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},S=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&U(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!U(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},D=(t,e,i)=>{let n,s,l,h,d=0;if(0!==t.sym_next)do{n=255&t.pending_buf[t.sym_buf+d++],n+=(255&t.pending_buf[t.sym_buf+d++])<<8,s=t.pending_buf[t.sym_buf+d++],0===n?z(t,s,e):(l=c[s],z(t,l+a+1,e),h=r[l],0!==h&&(s-=u[l],x(t,s,h)),n--,l=v(n),z(t,l,i),h=o[l],0!==h&&(n-=w[l],x(t,n,h)))}while(d<t.sym_next);z(t,256,e)},T=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,r=e.stat_desc.elems;let o,l,h,d=-1;for(t.heap_len=0,t.heap_max=573,o=0;o<r;o++)0!==a[2*o]?(t.heap[++t.heap_len]=d=o,t.depth[o]=0):a[2*o+1]=0;for(;t.heap_len<2;)h=t.heap[++t.heap_len]=d<2?++d:0,a[2*h]=1,t.depth[h]=0,t.opt_len--,n&&(t.static_len-=i[2*h+1]);for(e.max_code=d,o=t.heap_len>>1;o>=1;o--)S(t,a,o);h=r;do{o=t.heap[1],t.heap[1]=t.heap[t.heap_len--],S(t,a,1),l=t.heap[1],t.heap[--t.heap_max]=o,t.heap[--t.heap_max]=l,a[2*h]=a[2*o]+a[2*l],t.depth[h]=(t.depth[o]>=t.depth[l]?t.depth[o]:t.depth[l])+1,a[2*o+1]=a[2*l+1]=h,t.heap[1]=h++,S(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,r=e.stat_desc.has_stree,o=e.stat_desc.extra_bits,l=e.stat_desc.extra_base,h=e.stat_desc.max_length;let d,_,f,c,u,w,m=0;for(c=0;c<=s;c++)t.bl_count[c]=0;for(a[2*t.heap[t.heap_max]+1]=0,d=t.heap_max+1;d<573;d++)_=t.heap[d],c=a[2*a[2*_+1]+1]+1,c>h&&(c=h,m++),a[2*_+1]=c,_>i||(t.bl_count[c]++,u=0,_>=l&&(u=o[_-l]),w=a[2*_],t.opt_len+=w*(c+u),r&&(t.static_len+=w*(n[2*_+1]+u)));if(0!==m){do{for(c=h-1;0===t.bl_count[c];)c--;t.bl_count[c]--,t.bl_count[c+1]+=2,t.bl_count[h]--,m-=2}while(m>0);for(c=h;0!==c;c--)for(_=t.bl_count[c];0!==_;)f=t.heap[--d],f>i||(a[2*f+1]!==c&&(t.opt_len+=(c-a[2*f+1])*a[2*f],a[2*f+1]=c),_--)}})(t,e),E(a,d,t.bl_count)},O=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},I=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{z(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(z(t,n,t.bl_tree),o--),z(t,16,t.bl_tree),x(t,o-3,2)):o<=10?(z(t,17,t.bl_tree),x(t,o-3,3)):(z(t,18,t.bl_tree),x(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let F=!1;const L=(t,e,a,i)=>{x(t,0+(i?1:0),3),Z(t),y(t,a),y(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var N=(t,e,i,n)=>{let s,r,o=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,i=4093624447;for(e=0;e<=31;e++,i>>>=1)if(1&i&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<a;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),T(t,t.l_desc),T(t,t.d_desc),o=(t=>{let e;for(O(t,t.dyn_ltree,t.l_desc.max_code),O(t,t.dyn_dtree,t.d_desc.max_code),T(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*h[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),s=t.opt_len+3+7>>>3,r=t.static_len+3+7>>>3,r<=s&&(s=r)):s=r=i+5,i+4<=s&&-1!==e?L(t,e,i,n):4===t.strategy||r===s?(x(t,2+(n?1:0),3),D(t,d,_)):(x(t,4+(n?1:0),3),((t,e,a,i)=>{let n;for(x(t,e-257,5),x(t,a-1,5),x(t,i-4,4),n=0;n<i;n++)x(t,t.bl_tree[2*h[n]+1],3);I(t,t.dyn_ltree,e-1),I(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,o+1),D(t,t.dyn_ltree,t.dyn_dtree)),R(t),n&&Z(t)},B={_tr_init:t=>{F||((()=>{let t,e,a,h,k;const v=new Array(16);for(a=0,h=0;h<28;h++)for(u[h]=a,t=0;t<1<<r[h];t++)c[a++]=h;for(c[a-1]=h,k=0,h=0;h<16;h++)for(w[h]=k,t=0;t<1<<o[h];t++)f[k++]=h;for(k>>=7;h<n;h++)for(w[h]=k<<7,t=0;t<1<<o[h]-7;t++)f[256+k++]=h;for(e=0;e<=s;e++)v[e]=0;for(t=0;t<=143;)d[2*t+1]=8,t++,v[8]++;for(;t<=255;)d[2*t+1]=9,t++,v[9]++;for(;t<=279;)d[2*t+1]=7,t++,v[7]++;for(;t<=287;)d[2*t+1]=8,t++,v[8]++;for(E(d,287,v),t=0;t<n;t++)_[2*t+1]=5,_[2*t]=A(t,5);b=new m(d,r,257,i,s),g=new m(_,o,0,n,s),p=new m(new Array(0),l,0,19,7)})(),F=!0),t.l_desc=new k(t.dyn_ltree,b),t.d_desc=new k(t.dyn_dtree,g),t.bl_desc=new k(t.bl_tree,p),t.bi_buf=0,t.bi_valid=0,R(t)},_tr_stored_block:L,_tr_flush_block:N,_tr_tally:(t,e,i)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=i,0===e?t.dyn_ltree[2*i]++:(t.matches++,e--,t.dyn_ltree[2*(c[i]+a+1)]++,t.dyn_dtree[2*v(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{x(t,2,3),z(t,256,d),(t=>{16===t.bi_valid?(y(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var C=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const M=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var H=(t,e,a,i)=>{const n=M,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},j={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},K={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:P,_tr_stored_block:Y,_tr_flush_block:G,_tr_tally:X,_tr_align:W}=B,{Z_NO_FLUSH:q,Z_PARTIAL_FLUSH:J,Z_FULL_FLUSH:Q,Z_FINISH:V,Z_BLOCK:$,Z_OK:tt,Z_STREAM_END:et,Z_STREAM_ERROR:at,Z_DATA_ERROR:it,Z_BUF_ERROR:nt,Z_DEFAULT_COMPRESSION:st,Z_FILTERED:rt,Z_HUFFMAN_ONLY:ot,Z_RLE:lt,Z_FIXED:ht,Z_DEFAULT_STRATEGY:dt,Z_UNKNOWN:_t,Z_DEFLATED:ft}=K,ct=258,ut=262,wt=42,mt=113,bt=666,gt=(t,e)=>(t.msg=j[e],e),pt=t=>2*t-(t>4?9:0),kt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},vt=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let yt=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const xt=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},zt=(t,e)=>{G(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,xt(t.strm)},At=(t,e)=>{t.pending_buf[t.pending++]=e},Et=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},Rt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=C(t.adler,e,n,a):2===t.state.wrap&&(t.adler=H(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},Zt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-ut?t.strstart-(t.w_size-ut):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+ct;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=ct-(f-s),s=f-ct,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},Ut=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-ut)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),vt(t),i+=e),0===t.strm.avail_in)break;if(a=Rt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=yt(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=yt(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<ut&&0!==t.strm.avail_in)},St=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==V||e===q||a!==i+t.strm.avail_in))break;r=e===V&&a===i+t.strm.avail_in?1:0,Y(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,xt(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(Rt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==q&&e!==V&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(Rt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===V)&&e!==q&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===V&&0===t.strm.avail_in&&a===i?1:0,Y(t,t.block_start,a,r),t.block_start+=a,xt(t.strm)),r?3:1)},Dt=(t,e)=>{let a,i;for(;;){if(t.lookahead<ut){if(Ut(t),t.lookahead<ut&&e===q)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=yt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-ut&&(t.match_length=Zt(t,a)),t.match_length>=3)if(i=X(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=yt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=yt(t,t.ins_h,t.window[t.strstart+1]);else i=X(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(zt(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(zt(t,!1),0===t.strm.avail_out)?1:2},Tt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<ut){if(Ut(t),t.lookahead<ut&&e===q)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=yt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-ut&&(t.match_length=Zt(t,a),t.match_length<=5&&(t.strategy===rt||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=X(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=yt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(zt(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=X(t,0,t.window[t.strstart-1]),i&&zt(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=X(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(zt(t,!1),0===t.strm.avail_out)?1:2};function Ot(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const It=[new Ot(0,0,0,0,St),new Ot(4,4,8,4,Dt),new Ot(4,5,16,8,Dt),new Ot(4,6,32,32,Dt),new Ot(4,4,16,16,Tt),new Ot(8,16,32,32,Tt),new Ot(8,16,128,128,Tt),new Ot(8,32,128,256,Tt),new Ot(32,128,258,1024,Tt),new Ot(32,258,258,4096,Tt)];function Ft(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ft,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),kt(this.dyn_ltree),kt(this.dyn_dtree),kt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),kt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),kt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Lt=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.status!==wt&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&e.status!==mt&&e.status!==bt?1:0},Nt=t=>{if(Lt(t))return gt(t,at);t.total_in=t.total_out=0,t.data_type=_t;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?wt:mt,t.adler=2===e.wrap?0:1,e.last_flush=-2,P(e),tt},Bt=t=>{const e=Nt(t);var a;return e===tt&&((a=t.state).window_size=2*a.w_size,kt(a.head),a.max_lazy_match=It[a.level].max_lazy,a.good_match=It[a.level].good_length,a.nice_match=It[a.level].nice_length,a.max_chain_length=It[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ct=(t,e,a,i,n,s)=>{if(!t)return at;let r=1;if(e===st&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ft||i<8||i>15||e<0||e>9||s<0||s>ht||8===i&&1!==r)return gt(t,at);8===i&&(i=9);const o=new Ft;return t.state=o,o.strm=t,o.status=wt,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Bt(t)};var Mt={deflateInit:(t,e)=>Ct(t,e,ft,15,8,dt),deflateInit2:Ct,deflateReset:Bt,deflateResetKeep:Nt,deflateSetHeader:(t,e)=>Lt(t)||2!==t.state.wrap?at:(t.state.gzhead=e,tt),deflate:(t,e)=>{if(Lt(t)||e>$||e<0)return t?gt(t,at):at;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||a.status===bt&&e!==V)return gt(t,0===t.avail_out?nt:at);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(xt(t),0===t.avail_out)return a.last_flush=-1,tt}else if(0===t.avail_in&&pt(e)<=pt(i)&&e!==V)return gt(t,nt);if(a.status===bt&&0!==t.avail_in)return gt(t,nt);if(a.status===wt&&0===a.wrap&&(a.status=mt),a.status===wt){let e=ft+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=ot||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,Et(a,e),0!==a.strstart&&(Et(a,t.adler>>>16),Et(a,65535&t.adler)),t.adler=1,a.status=mt,xt(t),0!==a.pending)return a.last_flush=-1,tt}if(57===a.status)if(t.adler=0,At(a,31),At(a,139),At(a,8),a.gzhead)At(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),At(a,255&a.gzhead.time),At(a,a.gzhead.time>>8&255),At(a,a.gzhead.time>>16&255),At(a,a.gzhead.time>>24&255),At(a,9===a.level?2:a.strategy>=ot||a.level<2?4:0),At(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(At(a,255&a.gzhead.extra.length),At(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=H(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(At(a,0),At(a,0),At(a,0),At(a,0),At(a,0),At(a,9===a.level?2:a.strategy>=ot||a.level<2?4:0),At(a,3),a.status=mt,xt(t),0!==a.pending)return a.last_flush=-1,tt;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=H(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,xt(t),0!==a.pending)return a.last_flush=-1,tt;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=H(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=H(t.adler,a.pending_buf,a.pending-i,i)),xt(t),0!==a.pending)return a.last_flush=-1,tt;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,At(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=H(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=H(t.adler,a.pending_buf,a.pending-i,i)),xt(t),0!==a.pending)return a.last_flush=-1,tt;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,At(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=H(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(xt(t),0!==a.pending))return a.last_flush=-1,tt;At(a,255&t.adler),At(a,t.adler>>8&255),t.adler=0}if(a.status=mt,xt(t),0!==a.pending)return a.last_flush=-1,tt}if(0!==t.avail_in||0!==a.lookahead||e!==q&&a.status!==bt){let i=0===a.level?St(a,e):a.strategy===ot?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(Ut(t),0===t.lookahead)){if(e===q)return 1;break}if(t.match_length=0,a=X(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(zt(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(zt(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===lt?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=ct){if(Ut(t),t.lookahead<=ct&&e===q)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+ct;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=ct-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=X(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=X(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(zt(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(zt(t,!1),0===t.strm.avail_out)?1:2})(a,e):It[a.level].func(a,e);if(3!==i&&4!==i||(a.status=bt),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),tt;if(2===i&&(e===J?W(a):e!==$&&(Y(a,0,0,!1),e===Q&&(kt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),xt(t),0===t.avail_out))return a.last_flush=-1,tt}return e!==V?tt:a.wrap<=0?et:(2===a.wrap?(At(a,255&t.adler),At(a,t.adler>>8&255),At(a,t.adler>>16&255),At(a,t.adler>>24&255),At(a,255&t.total_in),At(a,t.total_in>>8&255),At(a,t.total_in>>16&255),At(a,t.total_in>>24&255)):(Et(a,t.adler>>>16),Et(a,65535&t.adler)),xt(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?tt:et)},deflateEnd:t=>{if(Lt(t))return at;const e=t.state.status;return t.state=null,e===mt?gt(t,it):tt},deflateSetDictionary:(t,e)=>{let a=e.length;if(Lt(t))return at;const i=t.state,n=i.wrap;if(2===n||1===n&&i.status!==wt||i.lookahead)return at;if(1===n&&(t.adler=C(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(kt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,Ut(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=yt(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,Ut(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,tt},deflateInfo:"pako deflate (from Nodeca project)"};const Ht=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var jt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Ht(a,e)&&(t[e]=a[e])}}return t},Kt=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Pt=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Pt=!1}const Yt=new Uint8Array(256);for(let t=0;t<256;t++)Yt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Yt[254]=Yt[254]=1;var Gt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},Xt=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Yt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Pt)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Wt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Yt[t[a]]>e?a:e};var qt=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Jt=Object.prototype.toString,{Z_NO_FLUSH:Qt,Z_SYNC_FLUSH:Vt,Z_FULL_FLUSH:$t,Z_FINISH:te,Z_OK:ee,Z_STREAM_END:ae,Z_DEFAULT_COMPRESSION:ie,Z_DEFAULT_STRATEGY:ne,Z_DEFLATED:se}=K;function re(t){this.options=jt({level:ie,method:se,chunkSize:16384,windowBits:15,memLevel:8,strategy:ne},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new qt,this.strm.avail_out=0;let a=Mt.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==ee)throw new Error(j[a]);if(e.header&&Mt.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Gt(e.dictionary):"[object ArrayBuffer]"===Jt.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=Mt.deflateSetDictionary(this.strm,t),a!==ee)throw new Error(j[a]);this._dict_set=!0}}function oe(t,e){const a=new re(e);if(a.push(t,!0),a.err)throw a.msg||j[a.err];return a.result}re.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?te:Qt,"string"==typeof t?a.input=Gt(t):"[object ArrayBuffer]"===Jt.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===Vt||s===$t)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=Mt.deflate(a,s),n===ae)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=Mt.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===ee;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},re.prototype.onData=function(t){this.chunks.push(t)},re.prototype.onEnd=function(t){t===ee&&(this.result=Kt(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var le={Deflate:re,deflate:oe,deflateRaw:function(t,e){return(e=e||{}).raw=!0,oe(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,oe(t,e)},constants:K};const he=16209;var de=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=he;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=he;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=he;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=he;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const _e=15,fe=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ce=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ue=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),we=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var me=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=_e;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=_e;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=_e;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<_e;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=fe,D=ce,u=257):(A=ue,D=we,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:be,Z_BLOCK:ge,Z_TREES:pe,Z_OK:ke,Z_STREAM_END:ve,Z_NEED_DICT:ye,Z_STREAM_ERROR:xe,Z_DATA_ERROR:ze,Z_MEM_ERROR:Ae,Z_BUF_ERROR:Ee,Z_DEFLATED:Re}=K,Ze=16180,Ue=16190,Se=16191,De=16192,Te=16194,Oe=16199,Ie=16200,Fe=16206,Le=16209,Ne=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function Be(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const Ce=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<Ze||e.mode>16211?1:0},Me=t=>{if(Ce(t))return xe;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=Ze,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,ke},He=t=>{if(Ce(t))return xe;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,Me(t)},je=(t,e)=>{let a;if(Ce(t))return xe;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?xe:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,He(t))},Ke=(t,e)=>{if(!t)return xe;const a=new Be;t.state=a,a.strm=t,a.window=null,a.mode=Ze;const i=je(t,e);return i!==ke&&(t.state=null),i};let Pe,Ye,Ge=!0;const Xe=t=>{if(Ge){Pe=new Int32Array(512),Ye=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(me(1,t.lens,0,288,Pe,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;me(2,t.lens,0,32,Ye,0,t.work,{bits:5}),Ge=!1}t.lencode=Pe,t.lenbits=9,t.distcode=Ye,t.distbits=5},We=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var qe={inflateReset:He,inflateReset2:je,inflateResetKeep:Me,inflateInit:t=>Ke(t,15),inflateInit2:Ke,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(Ce(t)||!t.output||!t.input&&0!==t.avail_in)return xe;a=t.state,a.mode===Se&&(a.mode=De),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=ke;t:for(;;)switch(a.mode){case Ze:if(0===a.wrap){a.mode=De;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=H(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=Le;break}if((15&h)!==Re){t.msg="unknown compression method",a.mode=Le;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=Le;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:Se,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==Re){t.msg="unknown compression method",a.mode=Le;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=Le;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=H(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=H(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=H(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=H(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=H(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=H(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=H(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=Le;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=Se;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=Ne(h),h=0,d=0,a.mode=Ue;case Ue:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,ye;t.adler=a.check=1,a.mode=Se;case Se:if(e===ge||e===pe)break t;case De:if(a.last){h>>>=7&d,d-=7&d,a.mode=Fe;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Xe(a),a.mode=Oe,e===pe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=Le}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=Le;break}if(a.length=65535&h,h=0,d=0,a.mode=Te,e===pe)break t;case Te:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=Se;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=Le;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=me(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=Le;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=Le;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=Le;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===Le)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=Le;break}if(a.lenbits=9,E={bits:a.lenbits},x=me(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=Le;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=me(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=Le;break}if(a.mode=Oe,e===pe)break t;case Oe:a.mode=Ie;case Ie:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,a.mode===Se&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=Se;break}if(64&b){t.msg="invalid literal/length code",a.mode=Le;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=Le;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=Le;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=Le;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=Ie);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=Ie;break;case Fe:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?H(a.check,n,f,r-f):C(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:Ne(h))!==a.check){t.msg="incorrect data check",a.mode=Le;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=Le;break}h=0,d=0}a.mode=16208;case 16208:x=ve;break t;case Le:x=ze;break t;case 16210:return Ae;default:return xe}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<Le&&(a.mode<Fe||e!==be))&&We(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?H(a.check,n,f,t.next_out-f):C(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(a.mode===Se?128:0)+(a.mode===Oe||a.mode===Te?256:0),(0===_&&0===f||e===be)&&x===ke&&(x=Ee),x},inflateEnd:t=>{if(Ce(t))return xe;let e=t.state;return e.window&&(e.window=null),t.state=null,ke},inflateGetHeader:(t,e)=>{if(Ce(t))return xe;const a=t.state;return 0==(2&a.wrap)?xe:(a.head=e,e.done=!1,ke)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return Ce(t)?xe:(i=t.state,0!==i.wrap&&i.mode!==Ue?xe:i.mode===Ue&&(n=1,n=C(n,e,a,0),n!==i.check)?ze:(s=We(t,e,a,a),s?(i.mode=16210,Ae):(i.havedict=1,ke)))},inflateInfo:"pako inflate (from Nodeca project)"};var Je=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const Qe=Object.prototype.toString,{Z_NO_FLUSH:Ve,Z_FINISH:$e,Z_OK:ta,Z_STREAM_END:ea,Z_NEED_DICT:aa,Z_STREAM_ERROR:ia,Z_DATA_ERROR:na,Z_MEM_ERROR:sa}=K;function ra(t){this.options=jt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new qt,this.strm.avail_out=0;let a=qe.inflateInit2(this.strm,e.windowBits);if(a!==ta)throw new Error(j[a]);if(this.header=new Je,qe.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Gt(e.dictionary):"[object ArrayBuffer]"===Qe.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=qe.inflateSetDictionary(this.strm,e.dictionary),a!==ta)))throw new Error(j[a])}function oa(t,e){const a=new ra(e);if(a.push(t),a.err)throw a.msg||j[a.err];return a.result}ra.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?$e:Ve,"[object ArrayBuffer]"===Qe.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=qe.inflate(a,r),s===aa&&n&&(s=qe.inflateSetDictionary(a,n),s===ta?s=qe.inflate(a,r):s===na&&(s=aa));a.avail_in>0&&s===ea&&a.state.wrap>0&&0!==t[a.next_in];)qe.inflateReset(a),s=qe.inflate(a,r);switch(s){case ia:case na:case aa:case sa:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===ea))if("string"===this.options.to){let t=Wt(a.output,a.next_out),e=a.next_out-t,n=Xt(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==ta||0!==o){if(s===ea)return s=qe.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},ra.prototype.onData=function(t){this.chunks.push(t)},ra.prototype.onEnd=function(t){t===ta&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Kt(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var la={Inflate:ra,inflate:oa,inflateRaw:function(t,e){return(e=e||{}).raw=!0,oa(t,e)},ungzip:oa,constants:K};const{Deflate:ha,deflate:da,deflateRaw:_a,gzip:fa}=le,{Inflate:ca,inflate:ua,inflateRaw:wa,ungzip:ma}=la;var ba=ha,ga=da,pa=_a,ka=fa,va=ca,ya=ua,xa=wa,za=ma,Aa=K,Ea={Deflate:ba,deflate:ga,deflateRaw:pa,gzip:ka,Inflate:va,inflate:ya,inflateRaw:xa,ungzip:za,constants:Aa};t.Deflate=ba,t.Inflate=va,t.constants=Aa,t.default=Ea,t.deflate=ga,t.deflateRaw=pa,t.gzip=ka,t.inflate=ya,t.inflateRaw=xa,t.ungzip=za,Object.defineProperty(t,"__esModule",{value:!0})}));

;


;
// Original plugin 6: assets/scripts/plugin/protobuf.min.js
// SHA256: 30faa874d593e3f81f2acd9387f89b36c1acdcf9f32282725d0c860b11e38f11
/*!
 * protobuf.js v7.2.3 (c) 2016, daniel wirtz
 * compiled mon, 27 mar 2023 18:08:22 utc
 * licensed under the bsd-3-clause license
 * see: https://github.com/dcodeio/protobuf.js for details
 */
!function(nt){"use strict";!function(r,e,t){var i=function t(i){var n=e[i];return n||r[i][0].call(n=e[i]={exports:{}},t,n,n.exports),n.exports}(t[0]);i.util.global.protobuf=i,"function"==typeof define&&define.amd&&define(["long"],function(t){return t&&t.isLong&&(i.util.Long=t,i.configure()),i}),"object"==typeof module&&module&&module.exports&&(module.exports=i)}({1:[function(t,i,n){i.exports=function(t,i){var n=Array(arguments.length-1),s=0,r=2,o=!0;for(;r<arguments.length;)n[s++]=arguments[r++];return new Promise(function(r,e){n[s]=function(t){if(o)if(o=!1,t)e(t);else{for(var i=Array(arguments.length-1),n=0;n<i.length;)i[n++]=arguments[n];r.apply(null,i)}};try{t.apply(i||null,n)}catch(t){o&&(o=!1,e(t))}})}},{}],2:[function(t,i,n){n.length=function(t){var i=t.length;if(!i)return 0;for(var n=0;1<--i%4&&"="==(t[0|i]||"");)++n;return Math.ceil(3*t.length)/4-n};for(var h=Array(64),f=Array(123),r=0;r<64;)f[h[r]=r<26?r+65:r<52?r+71:r<62?r-4:r-59|43]=r++;n.encode=function(t,i,n){for(var r,e=null,s=[],o=0,u=0;i<n;){var f=t[i++];switch(u){case 0:s[o++]=h[f>>2],r=(3&f)<<4,u=1;break;case 1:s[o++]=h[r|f>>4],r=(15&f)<<2,u=2;break;case 2:s[o++]=h[r|f>>6],s[o++]=h[63&f],u=0}8191<o&&((e=e||[]).push(String.fromCharCode.apply(String,s)),o=0)}return u&&(s[o++]=h[r],s[o++]=61,1===u&&(s[o++]=61)),e?(o&&e.push(String.fromCharCode.apply(String,s.slice(0,o))),e.join("")):String.fromCharCode.apply(String,s.slice(0,o))};var a="invalid encoding";n.decode=function(t,i,n){for(var r,e=n,s=0,o=0;o<t.length;){var u=t.charCodeAt(o++);if(61==u&&1<s)break;if((u=f[u])===nt)throw Error(a);switch(s){case 0:r=u,s=1;break;case 1:i[n++]=r<<2|(48&u)>>4,r=u,s=2;break;case 2:i[n++]=(15&r)<<4|(60&u)>>2,r=u,s=3;break;case 3:i[n++]=(3&r)<<6|u,s=0}}if(1===s)throw Error(a);return n-e},n.test=function(t){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)}},{}],3:[function(t,i,n){function c(i,n){"string"==typeof i&&(n=i,i=nt);var f=[];function h(t){if("string"!=typeof t){var i=a();if(c.verbose&&console.log("codegen: "+i),i="return "+i,t){for(var n=Object.keys(t),r=Array(n.length+1),e=Array(n.length),s=0;s<n.length;)r[s]=n[s],e[s]=t[n[s++]];return r[s]=i,Function.apply(null,r).apply(null,e)}return Function(i)()}for(var o=Array(arguments.length-1),u=0;u<o.length;)o[u]=arguments[++u];if(u=0,t=t.replace(/%([%dfijs])/g,function(t,i){var n=o[u++];switch(i){case"d":case"f":return""+ +(""+n);case"i":return""+Math.floor(n);case"j":return JSON.stringify(n);case"s":return""+n}return"%"}),u!==o.length)throw Error("parameter count mismatch");return f.push(t),h}function a(t){return"function "+(t||n||"")+"("+(i&&i.join(",")||"")+"){\n  "+f.join("\n  ")+"\n}"}return h.toString=a,h}(i.exports=c).verbose=!1},{}],4:[function(t,i,n){function r(){this.i={}}(i.exports=r).prototype.on=function(t,i,n){return(this.i[t]||(this.i[t]=[])).push({fn:i,ctx:n||this}),this},r.prototype.off=function(t,i){if(t===nt)this.i={};else if(i===nt)this.i[t]=[];else for(var n=this.i[t],r=0;r<n.length;)n[r].fn===i?n.splice(r,1):++r;return this},r.prototype.emit=function(t){var i=this.i[t];if(i){for(var n=[],r=1;r<arguments.length;)n.push(arguments[r++]);for(r=0;r<i.length;)i[r].fn.apply(i[r++].ctx,n)}return this}},{}],5:[function(t,i,n){i.exports=u;var s=t(1),o=t(7)("fs");function u(n,r,e){return r="function"==typeof r?(e=r,{}):r||{},e?!r.xhr&&o&&o.readFile?o.readFile(n,function(t,i){return t&&"undefined"!=typeof XMLHttpRequest?u.xhr(n,r,e):t?e(t):e(null,r.binary?i:i.toString("utf8"))}):u.xhr(n,r,e):s(u,this,n,r)}u.xhr=function(t,n,r){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4!==e.readyState)return nt;if(0!==e.status&&200!==e.status)return r(Error("status "+e.status));if(n.binary){if(!(t=e.response))for(var t=[],i=0;i<e.responseText.length;++i)t.push(255&e.responseText.charCodeAt(i));return r(null,"undefined"!=typeof Uint8Array?new Uint8Array(t):t)}return r(null,e.responseText)},n.binary&&("overrideMimeType"in e&&e.overrideMimeType("text/plain; charset=x-user-defined"),e.responseType="arraybuffer"),e.open("GET",t),e.send()}},{1:1,7:7}],6:[function(t,i,n){function r(t){function i(t,i,n,r){var e=i<0?1:0;t(0===(i=e?-i:i)?0<1/i?0:2147483648:isNaN(i)?2143289344:34028234663852886e22<i?(e<<31|2139095040)>>>0:i<11754943508222875e-54?(e<<31|Math.round(i/1401298464324817e-60))>>>0:(e<<31|127+(t=Math.floor(Math.log(i)/Math.LN2))<<23|8388607&Math.round(i*Math.pow(2,-t)*8388608))>>>0,n,r)}function n(t,i,n){t=t(i,n),i=2*(t>>31)+1,n=t>>>23&255,t&=8388607;return 255==n?t?NaN:1/0*i:0==n?1401298464324817e-60*i*t:i*Math.pow(2,n-150)*(8388608+t)}function r(t,i,n){u[0]=t,i[n]=f[0],i[n+1]=f[1],i[n+2]=f[2],i[n+3]=f[3]}function e(t,i,n){u[0]=t,i[n]=f[3],i[n+1]=f[2],i[n+2]=f[1],i[n+3]=f[0]}function s(t,i){return f[0]=t[i],f[1]=t[i+1],f[2]=t[i+2],f[3]=t[i+3],u[0]}function o(t,i){return f[3]=t[i],f[2]=t[i+1],f[1]=t[i+2],f[0]=t[i+3],u[0]}var u,f,h,a,c;function l(t,i,n,r,e,s){var o,u=r<0?1:0;0===(r=u?-r:r)?(t(0,e,s+i),t(0<1/r?0:2147483648,e,s+n)):isNaN(r)?(t(0,e,s+i),t(2146959360,e,s+n)):17976931348623157e292<r?(t(0,e,s+i),t((u<<31|2146435072)>>>0,e,s+n)):r<22250738585072014e-324?(t((o=r/5e-324)>>>0,e,s+i),t((u<<31|o/4294967296)>>>0,e,s+n)):(t(4503599627370496*(o=r*Math.pow(2,-(r=1024===(r=Math.floor(Math.log(r)/Math.LN2))?1023:r)))>>>0,e,s+i),t((u<<31|r+1023<<20|1048576*o&1048575)>>>0,e,s+n))}function d(t,i,n,r,e){i=t(r,e+i),t=t(r,e+n),r=2*(t>>31)+1,e=t>>>20&2047,n=4294967296*(1048575&t)+i;return 2047==e?n?NaN:1/0*r:0==e?5e-324*r*n:r*Math.pow(2,e-1075)*(n+4503599627370496)}function p(t,i,n){h[0]=t,i[n]=a[0],i[n+1]=a[1],i[n+2]=a[2],i[n+3]=a[3],i[n+4]=a[4],i[n+5]=a[5],i[n+6]=a[6],i[n+7]=a[7]}function v(t,i,n){h[0]=t,i[n]=a[7],i[n+1]=a[6],i[n+2]=a[5],i[n+3]=a[4],i[n+4]=a[3],i[n+5]=a[2],i[n+6]=a[1],i[n+7]=a[0]}function b(t,i){return a[0]=t[i],a[1]=t[i+1],a[2]=t[i+2],a[3]=t[i+3],a[4]=t[i+4],a[5]=t[i+5],a[6]=t[i+6],a[7]=t[i+7],h[0]}function y(t,i){return a[7]=t[i],a[6]=t[i+1],a[5]=t[i+2],a[4]=t[i+3],a[3]=t[i+4],a[2]=t[i+5],a[1]=t[i+6],a[0]=t[i+7],h[0]}return"undefined"!=typeof Float32Array?(u=new Float32Array([-0]),f=new Uint8Array(u.buffer),c=128===f[3],t.writeFloatLE=c?r:e,t.writeFloatBE=c?e:r,t.readFloatLE=c?s:o,t.readFloatBE=c?o:s):(t.writeFloatLE=i.bind(null,w),t.writeFloatBE=i.bind(null,m),t.readFloatLE=n.bind(null,g),t.readFloatBE=n.bind(null,j)),"undefined"!=typeof Float64Array?(h=new Float64Array([-0]),a=new Uint8Array(h.buffer),c=128===a[7],t.writeDoubleLE=c?p:v,t.writeDoubleBE=c?v:p,t.readDoubleLE=c?b:y,t.readDoubleBE=c?y:b):(t.writeDoubleLE=l.bind(null,w,0,4),t.writeDoubleBE=l.bind(null,m,4,0),t.readDoubleLE=d.bind(null,g,0,4),t.readDoubleBE=d.bind(null,j,4,0)),t}function w(t,i,n){i[n]=255&t,i[n+1]=t>>>8&255,i[n+2]=t>>>16&255,i[n+3]=t>>>24}function m(t,i,n){i[n]=t>>>24,i[n+1]=t>>>16&255,i[n+2]=t>>>8&255,i[n+3]=255&t}function g(t,i){return(t[i]|t[i+1]<<8|t[i+2]<<16|t[i+3]<<24)>>>0}function j(t,i){return(t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3])>>>0}i.exports=r(r)},{}],7:[function(t,i,n){function r(t){try{var i=eval("require")(t);if(i&&(i.length||Object.keys(i).length))return i}catch(t){}return null}i.exports=r},{}],8:[function(t,i,n){var e=n.isAbsolute=function(t){return/^(?:\/|\w+:)/.test(t)},r=n.normalize=function(t){var i=(t=t.replace(/\\/g,"/").replace(/\/{2,}/g,"/")).split("/"),n=e(t),t="";n&&(t=i.shift()+"/");for(var r=0;r<i.length;)".."===i[r]?0<r&&".."!==i[r-1]?i.splice(--r,2):n?i.splice(r,1):++r:"."===i[r]?i.splice(r,1):++r;return t+i.join("/")};n.resolve=function(t,i,n){return n||(i=r(i)),!e(i)&&(t=(t=n?t:r(t)).replace(/(?:\/|^)[^/]+$/,"")).length?r(t+"/"+i):i}},{}],9:[function(t,i,n){i.exports=function(i,n,t){var r=t||8192,e=r>>>1,s=null,o=r;return function(t){if(t<1||e<t)return i(t);r<o+t&&(s=i(r),o=0);t=n.call(s,o,o+=t);return 7&o&&(o=1+(7|o)),t}}},{}],10:[function(t,i,n){n.length=function(t){for(var i,n=0,r=0;r<t.length;++r)(i=t.charCodeAt(r))<128?n+=1:i<2048?n+=2:55296==(64512&i)&&56320==(64512&t.charCodeAt(r+1))?(++r,n+=4):n+=3;return n},n.read=function(t,i,n){if(n-i<1)return"";for(var r,e=null,s=[],o=0;i<n;)(r=t[i++])<128?s[o++]=r:191<r&&r<224?s[o++]=(31&r)<<6|63&t[i++]:239<r&&r<365?(r=((7&r)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536,s[o++]=55296+(r>>10),s[o++]=56320+(1023&r)):s[o++]=(15&r)<<12|(63&t[i++])<<6|63&t[i++],8191<o&&((e=e||[]).push(String.fromCharCode.apply(String,s)),o=0);return e?(o&&e.push(String.fromCharCode.apply(String,s.slice(0,o))),e.join("")):String.fromCharCode.apply(String,s.slice(0,o))},n.write=function(t,i,n){for(var r,e,s=n,o=0;o<t.length;++o)(r=t.charCodeAt(o))<128?i[n++]=r:(r<2048?i[n++]=r>>6|192:(55296==(64512&r)&&56320==(64512&(e=t.charCodeAt(o+1)))?(++o,i[n++]=(r=65536+((1023&r)<<10)+(1023&e))>>18|240,i[n++]=r>>12&63|128):i[n++]=r>>12|224,i[n++]=r>>6&63|128),i[n++]=63&r|128);return n-s}},{}],11:[function(t,i,n){i.exports=e;var r=/\/|\./;function e(t,i){r.test(t)||(t="google/protobuf/"+t+".proto",i={nested:{google:{nested:{protobuf:{nested:i}}}}}),e[t]=i}e("any",{Any:{fields:{type_url:{type:"string",id:1},value:{type:"bytes",id:2}}}}),e("duration",{Duration:i={fields:{seconds:{type:"int64",id:1},nanos:{type:"int32",id:2}}}}),e("timestamp",{Timestamp:i}),e("empty",{Empty:{fields:{}}}),e("struct",{Struct:{fields:{fields:{keyType:"string",type:"Value",id:1}}},Value:{oneofs:{kind:{oneof:["nullValue","numberValue","stringValue","boolValue","structValue","listValue"]}},fields:{nullValue:{type:"NullValue",id:1},numberValue:{type:"double",id:2},stringValue:{type:"string",id:3},boolValue:{type:"bool",id:4},structValue:{type:"Struct",id:5},listValue:{type:"ListValue",id:6}}},NullValue:{values:{NULL_VALUE:0}},ListValue:{fields:{values:{rule:"repeated",type:"Value",id:1}}}}),e("wrappers",{DoubleValue:{fields:{value:{type:"double",id:1}}},FloatValue:{fields:{value:{type:"float",id:1}}},Int64Value:{fields:{value:{type:"int64",id:1}}},UInt64Value:{fields:{value:{type:"uint64",id:1}}},Int32Value:{fields:{value:{type:"int32",id:1}}},UInt32Value:{fields:{value:{type:"uint32",id:1}}},BoolValue:{fields:{value:{type:"bool",id:1}}},StringValue:{fields:{value:{type:"string",id:1}}},BytesValue:{fields:{value:{type:"bytes",id:1}}}}),e("field_mask",{FieldMask:{fields:{paths:{rule:"repeated",type:"string",id:1}}}}),e.get=function(t){return e[t]||null}},{}],12:[function(t,i,n){var l=t(15),d=t(37);function o(t,i,n,r){var e=!1;if(i.resolvedType)if(i.resolvedType instanceof l){t("switch(d%s){",r);for(var s=i.resolvedType.values,o=Object.keys(s),u=0;u<o.length;++u)s[o[u]]!==i.typeDefault||e||(t("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}',r,r,r),i.repeated||t("break"),e=!0),t("case%j:",o[u])("case %i:",s[o[u]])("m%s=%j",r,s[o[u]])("break");t("}")}else t('if(typeof d%s!=="object")',r)("throw TypeError(%j)",i.fullName+": object expected")("m%s=types[%i].fromObject(d%s)",r,n,r);else{var f=!1;switch(i.type){case"double":case"float":t("m%s=Number(d%s)",r,r);break;case"uint32":case"fixed32":t("m%s=d%s>>>0",r,r);break;case"int32":case"sint32":case"sfixed32":t("m%s=d%s|0",r,r);break;case"uint64":f=!0;case"int64":case"sint64":case"fixed64":case"sfixed64":t("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j",r,r,f)('else if(typeof d%s==="string")',r)("m%s=parseInt(d%s,10)",r,r)('else if(typeof d%s==="number")',r)("m%s=d%s",r,r)('else if(typeof d%s==="object")',r)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)",r,r,r,f?"true":"");break;case"bytes":t('if(typeof d%s==="string")',r)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)",r,r,r)("else if(d%s.length >= 0)",r)("m%s=d%s",r,r);break;case"string":t("m%s=String(d%s)",r,r);break;case"bool":t("m%s=Boolean(d%s)",r,r)}}return t}function p(t,i,n,r){if(i.resolvedType)i.resolvedType instanceof l?t("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s",r,n,r,r,n,r,r):t("d%s=types[%i].toObject(m%s,o)",r,n,r);else{var e=!1;switch(i.type){case"double":case"float":t("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s",r,r,r,r);break;case"uint64":e=!0;case"int64":case"sint64":case"fixed64":case"sfixed64":t('if(typeof m%s==="number")',r)("d%s=o.longs===String?String(m%s):m%s",r,r,r)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s",r,r,r,r,e?"true":"",r);break;case"bytes":t("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s",r,r,r,r,r);break;default:t("d%s=m%s",r,r)}}return t}n.fromObject=function(t){var i=t.fieldsArray,n=d.codegen(["d"],t.name+"$fromObject")("if(d instanceof this.ctor)")("return d");if(!i.length)return n("return new this.ctor");n("var m=new this.ctor");for(var r=0;r<i.length;++r){var e=i[r].resolve(),s=d.safeProp(e.name);e.map?(n("if(d%s){",s)('if(typeof d%s!=="object")',s)("throw TypeError(%j)",e.fullName+": object expected")("m%s={}",s)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){",s),o(n,e,r,s+"[ks[i]]")("}")("}")):e.repeated?(n("if(d%s){",s)("if(!Array.isArray(d%s))",s)("throw TypeError(%j)",e.fullName+": array expected")("m%s=[]",s)("for(var i=0;i<d%s.length;++i){",s),o(n,e,r,s+"[i]")("}")("}")):(e.resolvedType instanceof l||n("if(d%s!=null){",s),o(n,e,r,s),e.resolvedType instanceof l||n("}"))}return n("return m")},n.toObject=function(t){var i=t.fieldsArray.slice().sort(d.compareFieldsById);if(!i.length)return d.codegen()("return {}");for(var n=d.codegen(["m","o"],t.name+"$toObject")("if(!o)")("o={}")("var d={}"),r=[],e=[],s=[],o=0;o<i.length;++o)i[o].partOf||(i[o].resolve().repeated?r:i[o].map?e:s).push(i[o]);if(r.length){for(n("if(o.arrays||o.defaults){"),o=0;o<r.length;++o)n("d%s=[]",d.safeProp(r[o].name));n("}")}if(e.length){for(n("if(o.objects||o.defaults){"),o=0;o<e.length;++o)n("d%s={}",d.safeProp(e[o].name));n("}")}if(s.length){for(n("if(o.defaults){"),o=0;o<s.length;++o){var u,f=s[o],h=d.safeProp(f.name);f.resolvedType instanceof l?n("d%s=o.enums===String?%j:%j",h,f.resolvedType.valuesById[f.typeDefault],f.typeDefault):f.long?n("if(util.Long){")("var n=new util.Long(%i,%i,%j)",f.typeDefault.low,f.typeDefault.high,f.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n",h)("}else")("d%s=o.longs===String?%j:%i",h,f.typeDefault.toString(),f.typeDefault.toNumber()):f.bytes?(u="["+Array.prototype.slice.call(f.typeDefault).join(",")+"]",n("if(o.bytes===String)d%s=%j",h,String.fromCharCode.apply(String,f.typeDefault))("else{")("d%s=%s",h,u)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)",h,h)("}")):n("d%s=%j",h,f.typeDefault)}n("}")}for(var a=!1,o=0;o<i.length;++o){var f=i[o],c=t.e.indexOf(f),h=d.safeProp(f.name);f.map?(a||(a=!0,n("var ks2")),n("if(m%s&&(ks2=Object.keys(m%s)).length){",h,h)("d%s={}",h)("for(var j=0;j<ks2.length;++j){"),p(n,f,c,h+"[ks2[j]]")("}")):f.repeated?(n("if(m%s&&m%s.length){",h,h)("d%s=[]",h)("for(var j=0;j<m%s.length;++j){",h),p(n,f,c,h+"[j]")("}")):(n("if(m%s!=null&&m.hasOwnProperty(%j)){",h,f.name),p(n,f,c,h),f.partOf&&n("if(o.oneofs)")("d%s=%j",d.safeProp(f.partOf.name),f.name)),n("}")}return n("return d")}},{15:15,37:37}],13:[function(t,i,n){i.exports=function(t){var i=h.codegen(["r","l"],t.name+"$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor"+(t.fieldsArray.filter(function(t){return t.map}).length?",k,value":""))("while(r.pos<c){")("var t=r.uint32()");t.group&&i("if((t&7)===4)")("break");i("switch(t>>>3){");for(var n=0;n<t.fieldsArray.length;++n){var r=t.e[n].resolve(),e=r.resolvedType instanceof u?"int32":r.type,s="m"+h.safeProp(r.name);i("case %i: {",r.id),r.map?(i("if(%s===util.emptyObject)",s)("%s={}",s)("var c2 = r.uint32()+r.pos"),f.defaults[r.keyType]!==nt?i("k=%j",f.defaults[r.keyType]):i("k=null"),f.defaults[e]!==nt?i("value=%j",f.defaults[e]):i("value=null"),i("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break",r.keyType)("case 2:"),f.basic[e]===nt?i("value=types[%i].decode(r,r.uint32())",n):i("value=r.%s()",e),i("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"),f.long[r.keyType]!==nt?i('%s[typeof k==="object"?util.longToHash(k):k]=value',s):i("%s[k]=value",s)):r.repeated?(i("if(!(%s&&%s.length))",s,s)("%s=[]",s),f.packed[e]!==nt&&i("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())",s,e)("}else"),f.basic[e]===nt?i(r.resolvedType.group?"%s.push(types[%i].decode(r))":"%s.push(types[%i].decode(r,r.uint32()))",s,n):i("%s.push(r.%s())",s,e)):f.basic[e]===nt?i(r.resolvedType.group?"%s=types[%i].decode(r)":"%s=types[%i].decode(r,r.uint32())",s,n):i("%s=r.%s()",s,e),i("break")("}")}for(i("default:")("r.skipType(t&7)")("break")("}")("}"),n=0;n<t.e.length;++n){var o=t.e[n];o.required&&i("if(!m.hasOwnProperty(%j))",o.name)("throw util.ProtocolError(%j,{instance:m})","missing required '"+o.name+"'")}return i("return m")};var u=t(15),f=t(36),h=t(37)},{15:15,36:36,37:37}],14:[function(t,i,n){i.exports=function(t){for(var i,n=c.codegen(["m","w"],t.name+"$encode")("if(!w)")("w=Writer.create()"),r=t.fieldsArray.slice().sort(c.compareFieldsById),e=0;e<r.length;++e){var s=r[e].resolve(),o=t.e.indexOf(s),u=s.resolvedType instanceof h?"int32":s.type,f=a.basic[u];i="m"+c.safeProp(s.name),s.map?(n("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){",i,s.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){",i)("w.uint32(%i).fork().uint32(%i).%s(ks[i])",(s.id<<3|2)>>>0,8|a.mapKey[s.keyType],s.keyType),f===nt?n("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()",o,i):n(".uint32(%i).%s(%s[ks[i]]).ldelim()",16|f,u,i),n("}")("}")):s.repeated?(n("if(%s!=null&&%s.length){",i,i),s.packed&&a.packed[u]!==nt?n("w.uint32(%i).fork()",(s.id<<3|2)>>>0)("for(var i=0;i<%s.length;++i)",i)("w.%s(%s[i])",u,i)("w.ldelim()"):(n("for(var i=0;i<%s.length;++i)",i),f===nt?l(n,s,o,i+"[i]"):n("w.uint32(%i).%s(%s[i])",(s.id<<3|f)>>>0,u,i)),n("}")):(s.optional&&n("if(%s!=null&&Object.hasOwnProperty.call(m,%j))",i,s.name),f===nt?l(n,s,o,i):n("w.uint32(%i).%s(%s)",(s.id<<3|f)>>>0,u,i))}return n("return w")};var h=t(15),a=t(36),c=t(37);function l(t,i,n,r){i.resolvedType.group?t("types[%i].encode(%s,w.uint32(%i)).uint32(%i)",n,r,(i.id<<3|3)>>>0,(i.id<<3|4)>>>0):t("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()",n,r,(i.id<<3|2)>>>0)}},{15:15,36:36,37:37}],15:[function(t,i,n){i.exports=s;var f=t(24),r=(((s.prototype=Object.create(f.prototype)).constructor=s).className="Enum",t(23)),e=t(37);function s(t,i,n,r,e,s){if(f.call(this,t,n),i&&"object"!=typeof i)throw TypeError("values must be an object");if(this.valuesById={},this.values=Object.create(this.valuesById),this.comment=r,this.comments=e||{},this.valuesOptions=s,this.reserved=nt,i)for(var o=Object.keys(i),u=0;u<o.length;++u)"number"==typeof i[o[u]]&&(this.valuesById[this.values[o[u]]=i[o[u]]]=o[u])}s.fromJSON=function(t,i){t=new s(t,i.values,i.options,i.comment,i.comments);return t.reserved=i.reserved,t},s.prototype.toJSON=function(t){t=!!t&&!!t.keepComments;return e.toObject(["options",this.options,"valuesOptions",this.valuesOptions,"values",this.values,"reserved",this.reserved&&this.reserved.length?this.reserved:nt,"comment",t?this.comment:nt,"comments",t?this.comments:nt])},s.prototype.add=function(t,i,n,r){if(!e.isString(t))throw TypeError("name must be a string");if(!e.isInteger(i))throw TypeError("id must be an integer");if(this.values[t]!==nt)throw Error("duplicate name '"+t+"' in "+this);if(this.isReservedId(i))throw Error("id "+i+" is reserved in "+this);if(this.isReservedName(t))throw Error("name '"+t+"' is reserved in "+this);if(this.valuesById[i]!==nt){if(!this.options||!this.options.allow_alias)throw Error("duplicate id "+i+" in "+this);this.values[t]=i}else this.valuesById[this.values[t]=i]=t;return r&&(this.valuesOptions===nt&&(this.valuesOptions={}),this.valuesOptions[t]=r||null),this.comments[t]=n||null,this},s.prototype.remove=function(t){if(!e.isString(t))throw TypeError("name must be a string");var i=this.values[t];if(null==i)throw Error("name '"+t+"' does not exist in "+this);return delete this.valuesById[i],delete this.values[t],delete this.comments[t],this.valuesOptions&&delete this.valuesOptions[t],this},s.prototype.isReservedId=function(t){return r.isReservedId(this.reserved,t)},s.prototype.isReservedName=function(t){return r.isReservedName(this.reserved,t)}},{23:23,24:24,37:37}],16:[function(t,i,n){i.exports=o;var r,u=t(24),e=(((o.prototype=Object.create(u.prototype)).constructor=o).className="Field",t(15)),f=t(36),h=t(37),a=/^required|optional|repeated$/;function o(t,i,n,r,e,s,o){if(h.isObject(r)?(o=e,s=r,r=e=nt):h.isObject(e)&&(o=s,s=e,e=nt),u.call(this,t,s),!h.isInteger(i)||i<0)throw TypeError("id must be a non-negative integer");if(!h.isString(n))throw TypeError("type must be a string");if(r!==nt&&!a.test(r=r.toString().toLowerCase()))throw TypeError("rule must be a string rule");if(e!==nt&&!h.isString(e))throw TypeError("extend must be a string");this.rule=(r="proto3_optional"===r?"optional":r)&&"optional"!==r?r:nt,this.type=n,this.id=i,this.extend=e||nt,this.required="required"===r,this.optional=!this.required,this.repeated="repeated"===r,this.map=!1,this.message=null,this.partOf=null,this.typeDefault=null,this.defaultValue=null,this.long=!!h.Long&&f.long[n]!==nt,this.bytes="bytes"===n,this.resolvedType=null,this.extensionField=null,this.declaringField=null,this.o=null,this.comment=o}o.fromJSON=function(t,i){return new o(t,i.id,i.type,i.rule,i.extend,i.options,i.comment)},Object.defineProperty(o.prototype,"packed",{get:function(){return null===this.o&&(this.o=!1!==this.getOption("packed")),this.o}}),o.prototype.setOption=function(t,i,n){return"packed"===t&&(this.o=null),u.prototype.setOption.call(this,t,i,n)},o.prototype.toJSON=function(t){t=!!t&&!!t.keepComments;return h.toObject(["rule","optional"!==this.rule&&this.rule||nt,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",t?this.comment:nt])},o.prototype.resolve=function(){var t;return this.resolved?this:((this.typeDefault=f.defaults[this.type])===nt?(this.resolvedType=(this.declaringField||this).parent.lookupTypeOrEnum(this.type),this.resolvedType instanceof r?this.typeDefault=null:this.typeDefault=this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]):this.options&&this.options.proto3_optional&&(this.typeDefault=null),this.options&&null!=this.options.default&&(this.typeDefault=this.options.default,this.resolvedType instanceof e&&"string"==typeof this.typeDefault&&(this.typeDefault=this.resolvedType.values[this.typeDefault])),this.options&&(!0!==this.options.packed&&(this.options.packed===nt||!this.resolvedType||this.resolvedType instanceof e)||delete this.options.packed,Object.keys(this.options).length||(this.options=nt)),this.long?(this.typeDefault=h.Long.fromNumber(this.typeDefault,"u"==(this.type[0]||"")),Object.freeze&&Object.freeze(this.typeDefault)):this.bytes&&"string"==typeof this.typeDefault&&(h.base64.test(this.typeDefault)?h.base64.decode(this.typeDefault,t=h.newBuffer(h.base64.length(this.typeDefault)),0):h.utf8.write(this.typeDefault,t=h.newBuffer(h.utf8.length(this.typeDefault)),0),this.typeDefault=t),this.map?this.defaultValue=h.emptyObject:this.repeated?this.defaultValue=h.emptyArray:this.defaultValue=this.typeDefault,this.parent instanceof r&&(this.parent.ctor.prototype[this.name]=this.defaultValue),u.prototype.resolve.call(this))},o.d=function(n,r,e,s){return"function"==typeof r?r=h.decorateType(r).name:r&&"object"==typeof r&&(r=h.decorateEnum(r).name),function(t,i){h.decorateType(t.constructor).add(new o(i,n,r,e,{default:s}))}},o.u=function(t){r=t}},{15:15,24:24,36:36,37:37}],17:[function(t,i,n){var r=i.exports=t(18);r.build="light",r.load=function(t,i,n){return(i="function"==typeof i?(n=i,new r.Root):i||new r.Root).load(t,n)},r.loadSync=function(t,i){return(i=i||new r.Root).loadSync(t)},r.encoder=t(14),r.decoder=t(13),r.verifier=t(40),r.converter=t(12),r.ReflectionObject=t(24),r.Namespace=t(23),r.Root=t(29),r.Enum=t(15),r.Type=t(35),r.Field=t(16),r.OneOf=t(25),r.MapField=t(20),r.Service=t(33),r.Method=t(22),r.Message=t(21),r.wrappers=t(41),r.types=t(36),r.util=t(37),r.ReflectionObject.u(r.Root),r.Namespace.u(r.Type,r.Service,r.Enum),r.Root.u(r.Type),r.Field.u(r.Type)},{12:12,13:13,14:14,15:15,16:16,18:18,20:20,21:21,22:22,23:23,24:24,25:25,29:29,33:33,35:35,36:36,37:37,40:40,41:41}],18:[function(t,i,n){var r=n;function e(){r.util.u(),r.Writer.u(r.BufferWriter),r.Reader.u(r.BufferReader)}r.build="minimal",r.Writer=t(42),r.BufferWriter=t(43),r.Reader=t(27),r.BufferReader=t(28),r.util=t(39),r.rpc=t(31),r.roots=t(30),r.configure=e,e()},{27:27,28:28,30:30,31:31,39:39,42:42,43:43}],19:[function(t,i,n){i=i.exports=t(17);i.build="full",i.tokenize=t(34),i.parse=t(26),i.common=t(11),i.Root.u(i.Type,i.parse,i.common)},{11:11,17:17,26:26,34:34}],20:[function(t,i,n){i.exports=s;var o=t(16),r=(((s.prototype=Object.create(o.prototype)).constructor=s).className="MapField",t(36)),u=t(37);function s(t,i,n,r,e,s){if(o.call(this,t,i,r,nt,nt,e,s),!u.isString(n))throw TypeError("keyType must be a string");this.keyType=n,this.resolvedKeyType=null,this.map=!0}s.fromJSON=function(t,i){return new s(t,i.id,i.keyType,i.type,i.options,i.comment)},s.prototype.toJSON=function(t){t=!!t&&!!t.keepComments;return u.toObject(["keyType",this.keyType,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",t?this.comment:nt])},s.prototype.resolve=function(){if(this.resolved)return this;if(r.mapKey[this.keyType]===nt)throw Error("invalid key type: "+this.keyType);return o.prototype.resolve.call(this)},s.d=function(n,r,e){return"function"==typeof e?e=u.decorateType(e).name:e&&"object"==typeof e&&(e=u.decorateEnum(e).name),function(t,i){u.decorateType(t.constructor).add(new s(i,n,r,e))}}},{16:16,36:36,37:37}],21:[function(t,i,n){i.exports=e;var r=t(39);function e(t){if(t)for(var i=Object.keys(t),n=0;n<i.length;++n)this[i[n]]=t[i[n]]}e.create=function(t){return this.$type.create(t)},e.encode=function(t,i){return this.$type.encode(t,i)},e.encodeDelimited=function(t,i){return this.$type.encodeDelimited(t,i)},e.decode=function(t){return this.$type.decode(t)},e.decodeDelimited=function(t){return this.$type.decodeDelimited(t)},e.verify=function(t){return this.$type.verify(t)},e.fromObject=function(t){return this.$type.fromObject(t)},e.toObject=function(t,i){return this.$type.toObject(t,i)},e.prototype.toJSON=function(){return this.$type.toObject(this,r.toJSONOptions)}},{39:39}],22:[function(t,i,n){i.exports=r;var h=t(24),a=(((r.prototype=Object.create(h.prototype)).constructor=r).className="Method",t(37));function r(t,i,n,r,e,s,o,u,f){if(a.isObject(e)?(o=e,e=s=nt):a.isObject(s)&&(o=s,s=nt),i!==nt&&!a.isString(i))throw TypeError("type must be a string");if(!a.isString(n))throw TypeError("requestType must be a string");if(!a.isString(r))throw TypeError("responseType must be a string");h.call(this,t,o),this.type=i||"rpc",this.requestType=n,this.requestStream=!!e||nt,this.responseType=r,this.responseStream=!!s||nt,this.resolvedRequestType=null,this.resolvedResponseType=null,this.comment=u,this.parsedOptions=f}r.fromJSON=function(t,i){return new r(t,i.type,i.requestType,i.responseType,i.requestStream,i.responseStream,i.options,i.comment,i.parsedOptions)},r.prototype.toJSON=function(t){t=!!t&&!!t.keepComments;return a.toObject(["type","rpc"!==this.type&&this.type||nt,"requestType",this.requestType,"requestStream",this.requestStream,"responseType",this.responseType,"responseStream",this.responseStream,"options",this.options,"comment",t?this.comment:nt,"parsedOptions",this.parsedOptions])},r.prototype.resolve=function(){return this.resolved?this:(this.resolvedRequestType=this.parent.lookupType(this.requestType),this.resolvedResponseType=this.parent.lookupType(this.responseType),h.prototype.resolve.call(this))}},{24:24,37:37}],23:[function(t,i,n){i.exports=c;var e,s,o,r=t(24),u=(((c.prototype=Object.create(r.prototype)).constructor=c).className="Namespace",t(16)),f=t(37),h=t(25);function a(t,i){if(!t||!t.length)return nt;for(var n={},r=0;r<t.length;++r)n[t[r].name]=t[r].toJSON(i);return n}function c(t,i){r.call(this,t,i),this.nested=nt,this.f=null}function l(t){return t.f=null,t}c.fromJSON=function(t,i){return new c(t,i.options).addJSON(i.nested)},c.arrayToJSON=a,c.isReservedId=function(t,i){if(t)for(var n=0;n<t.length;++n)if("string"!=typeof t[n]&&t[n][0]<=i&&t[n][1]>i)return!0;return!1},c.isReservedName=function(t,i){if(t)for(var n=0;n<t.length;++n)if(t[n]===i)return!0;return!1},Object.defineProperty(c.prototype,"nestedArray",{get:function(){return this.f||(this.f=f.toArray(this.nested))}}),c.prototype.toJSON=function(t){return f.toObject(["options",this.options,"nested",a(this.nestedArray,t)])},c.prototype.addJSON=function(t){if(t)for(var i,n=Object.keys(t),r=0;r<n.length;++r)i=t[n[r]],this.add((i.fields!==nt?e:i.values!==nt?o:i.methods!==nt?s:i.id!==nt?u:c).fromJSON(n[r],i));return this},c.prototype.get=function(t){return this.nested&&this.nested[t]||null},c.prototype.getEnum=function(t){if(this.nested&&this.nested[t]instanceof o)return this.nested[t].values;throw Error("no such enum: "+t)},c.prototype.add=function(t){if(!(t instanceof u&&t.extend!==nt||t instanceof e||t instanceof h||t instanceof o||t instanceof s||t instanceof c))throw TypeError("object must be a valid nested object");if(this.nested){var i=this.get(t.name);if(i){if(!(i instanceof c&&t instanceof c)||i instanceof e||i instanceof s)throw Error("duplicate name '"+t.name+"' in "+this);for(var n=i.nestedArray,r=0;r<n.length;++r)t.add(n[r]);this.remove(i),this.nested||(this.nested={}),t.setOptions(i.options,!0)}}else this.nested={};return(this.nested[t.name]=t).onAdd(this),l(this)},c.prototype.remove=function(t){if(!(t instanceof r))throw TypeError("object must be a ReflectionObject");if(t.parent!==this)throw Error(t+" is not a member of "+this);return delete this.nested[t.name],Object.keys(this.nested).length||(this.nested=nt),t.onRemove(this),l(this)},c.prototype.define=function(t,i){if(f.isString(t))t=t.split(".");else if(!Array.isArray(t))throw TypeError("illegal path");if(t&&t.length&&""===t[0])throw Error("path must be relative");for(var n=this;0<t.length;){var r=t.shift();if(n.nested&&n.nested[r]){if(!((n=n.nested[r])instanceof c))throw Error("path conflicts with non-namespace objects")}else n.add(n=new c(r))}return i&&n.addJSON(i),n},c.prototype.resolveAll=function(){for(var t=this.nestedArray,i=0;i<t.length;)t[i]instanceof c?t[i++].resolveAll():t[i++].resolve();return this.resolve()},c.prototype.lookup=function(t,i,n){if("boolean"==typeof i?(n=i,i=nt):i&&!Array.isArray(i)&&(i=[i]),f.isString(t)&&t.length){if("."===t)return this.root;t=t.split(".")}else if(!t.length)return this;if(""===t[0])return this.root.lookup(t.slice(1),i);var r=this.get(t[0]);if(r){if(1===t.length){if(!i||~i.indexOf(r.constructor))return r}else if(r instanceof c&&(r=r.lookup(t.slice(1),i,!0)))return r}else for(var e=0;e<this.nestedArray.length;++e)if(this.f[e]instanceof c&&(r=this.f[e].lookup(t,i,!0)))return r;return null===this.parent||n?null:this.parent.lookup(t,i)},c.prototype.lookupType=function(t){var i=this.lookup(t,[e]);if(i)return i;throw Error("no such type: "+t)},c.prototype.lookupEnum=function(t){var i=this.lookup(t,[o]);if(i)return i;throw Error("no such Enum '"+t+"' in "+this)},c.prototype.lookupTypeOrEnum=function(t){var i=this.lookup(t,[e,o]);if(i)return i;throw Error("no such Type or Enum '"+t+"' in "+this)},c.prototype.lookupService=function(t){var i=this.lookup(t,[s]);if(i)return i;throw Error("no such Service '"+t+"' in "+this)},c.u=function(t,i,n){e=t,s=i,o=n}},{16:16,24:24,25:25,37:37}],24:[function(t,i,n){(i.exports=e).className="ReflectionObject";var r,o=t(37);function e(t,i){if(!o.isString(t))throw TypeError("name must be a string");if(i&&!o.isObject(i))throw TypeError("options must be an object");this.options=i,this.parsedOptions=null,this.name=t,this.parent=null,this.resolved=!1,this.comment=null,this.filename=null}Object.defineProperties(e.prototype,{root:{get:function(){for(var t=this;null!==t.parent;)t=t.parent;return t}},fullName:{get:function(){for(var t=[this.name],i=this.parent;i;)t.unshift(i.name),i=i.parent;return t.join(".")}}}),e.prototype.toJSON=function(){throw Error()},e.prototype.onAdd=function(t){this.parent&&this.parent!==t&&this.parent.remove(this),this.parent=t,this.resolved=!1;t=t.root;t instanceof r&&t.h(this)},e.prototype.onRemove=function(t){t=t.root;t instanceof r&&t.a(this),this.parent=null,this.resolved=!1},e.prototype.resolve=function(){return this.resolved||this.root instanceof r&&(this.resolved=!0),this},e.prototype.getOption=function(t){return this.options?this.options[t]:nt},e.prototype.setOption=function(t,i,n){return n&&this.options&&this.options[t]!==nt||((this.options||(this.options={}))[t]=i),this},e.prototype.setParsedOption=function(i,t,n){this.parsedOptions||(this.parsedOptions=[]);var r,e,s=this.parsedOptions;return n?(r=s.find(function(t){return Object.prototype.hasOwnProperty.call(t,i)}))?(e=r[i],o.setProperty(e,n,t)):((r={})[i]=o.setProperty({},n,t),s.push(r)):((e={})[i]=t,s.push(e)),this},e.prototype.setOptions=function(t,i){if(t)for(var n=Object.keys(t),r=0;r<n.length;++r)this.setOption(n[r],t[n[r]],i);return this},e.prototype.toString=function(){var t=this.constructor.className,i=this.fullName;return i.length?t+" "+i:t},e.u=function(t){r=t}},{37:37}],25:[function(t,i,n){i.exports=o;var e=t(24),r=(((o.prototype=Object.create(e.prototype)).constructor=o).className="OneOf",t(16)),s=t(37);function o(t,i,n,r){if(Array.isArray(i)||(n=i,i=nt),e.call(this,t,n),i!==nt&&!Array.isArray(i))throw TypeError("fieldNames must be an Array");this.oneof=i||[],this.fieldsArray=[],this.comment=r}function u(t){if(t.parent)for(var i=0;i<t.fieldsArray.length;++i)t.fieldsArray[i].parent||t.parent.add(t.fieldsArray[i])}o.fromJSON=function(t,i){return new o(t,i.oneof,i.options,i.comment)},o.prototype.toJSON=function(t){t=!!t&&!!t.keepComments;return s.toObject(["options",this.options,"oneof",this.oneof,"comment",t?this.comment:nt])},o.prototype.add=function(t){if(t instanceof r)return t.parent&&t.parent!==this.parent&&t.parent.remove(t),this.oneof.push(t.name),this.fieldsArray.push(t),u(t.partOf=this),this;throw TypeError("field must be a Field")},o.prototype.remove=function(t){if(!(t instanceof r))throw TypeError("field must be a Field");var i=this.fieldsArray.indexOf(t);if(i<0)throw Error(t+" is not a member of "+this);return this.fieldsArray.splice(i,1),-1<(i=this.oneof.indexOf(t.name))&&this.oneof.splice(i,1),t.partOf=null,this},o.prototype.onAdd=function(t){e.prototype.onAdd.call(this,t);for(var i=0;i<this.oneof.length;++i){var n=t.get(this.oneof[i]);n&&!n.partOf&&(n.partOf=this).fieldsArray.push(n)}u(this)},o.prototype.onRemove=function(t){for(var i,n=0;n<this.fieldsArray.length;++n)(i=this.fieldsArray[n]).parent&&i.parent.remove(i);e.prototype.onRemove.call(this,t)},o.d=function(){for(var n=Array(arguments.length),t=0;t<arguments.length;)n[t]=arguments[t++];return function(t,i){s.decorateType(t.constructor).add(new o(i,n)),Object.defineProperty(t,i,{get:s.oneOfGetter(n),set:s.oneOfSetter(n)})}}},{16:16,24:24,37:37}],26:[function(t,i,n){(i.exports=it).filename=null,it.defaults={keepCase:!1};var I=t(34),F=t(29),L=t(35),U=t(16),q=t(20),R=t(25),z=t(15),Z=t(33),B=t(22),P=t(36),H=t(37),X=/^[1-9][0-9]*$/,C=/^-?[1-9][0-9]*$/,D=/^0[x][0-9a-fA-F]+$/,J=/^-?0[x][0-9a-fA-F]+$/,W=/^0[0-7]+$/,G=/^-?0[0-7]+$/,K=/^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,Q=/^[a-zA-Z_][a-zA-Z_0-9]*$/,Y=/^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,tt=/^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;function it(t,i,n){i instanceof F||(n=i,i=new F);var r,e,s,o,h,u,f,a=(n=n||it.defaults).preferTrailingComment||!1,c=I(t,n.alternateCommentMode||!1),l=c.next,d=c.push,p=c.peek,v=c.skip,b=c.cmnt,y=!0,w=!1,m=i,g=n.keepCase?function(t){return t}:H.camelCase;function j(t,i,n){var r=it.filename;return n||(it.filename=null),Error("illegal "+(i||"token")+" '"+t+"' ("+(r?r+", ":"")+"line "+c.line+")")}function k(){var t,i=[];do{if('"'!==(t=l())&&"'"!==t)throw j(t)}while(i.push(l()),v(t),'"'===(t=p())||"'"===t);return i.join("")}function O(i){var n=l();switch(n){case"'":case'"':return d(n),k();case"true":case"TRUE":return!0;case"false":case"FALSE":return!1}try{var t=n,r=!0,e=1;switch("-"==(t[0]||"")&&(e=-1,t=t.substring(1)),t){case"inf":case"INF":case"Inf":return e*(1/0);case"nan":case"NAN":case"Nan":case"NaN":return NaN;case"0":return 0}if(X.test(t))return e*parseInt(t,10);if(D.test(t))return e*parseInt(t,16);if(W.test(t))return e*parseInt(t,8);if(K.test(t))return e*parseFloat(t);throw j(t,"number",r)}catch(t){if(i&&Y.test(n))return n;throw j(n,"value")}}function E(t,i){for(var n;!i||'"'!==(n=p())&&"'"!==n?t.push([n=A(l()),v("to",!0)?A(l()):n]):t.push(k()),v(",",!0););v(";")}function A(t,i){switch(t){case"max":case"MAX":case"Max":return 536870911;case"0":return 0}if(i||"-"!=(t[0]||"")){if(C.test(t))return parseInt(t,10);if(J.test(t))return parseInt(t,16);if(G.test(t))return parseInt(t,8)}throw j(t,"id")}function x(t,i){switch(i){case"option":return $(t,i),v(";"),1;case"message":return T(t),1;case"enum":return V(t),1;case"service":var h,n=t,r=i;if(Q.test(r=l()))return S(h=new Z(r),function(t){if(!x(h,t)){if("rpc"!==t)throw j(t);var i=h,n=b(),r=t;if(!Q.test(t=l()))throw j(t,"name");var e,s,o,u=t;if(v("("),v("stream",!0)&&(s=!0),!Y.test(t=l()))throw j(t);if(e=t,v(")"),v("returns"),v("("),v("stream",!0)&&(o=!0),!Y.test(t=l()))throw j(t);t=t,v(")");var f=new B(u,r,e,t,s,o);f.comment=n,S(f,function(t){if("option"!==t)throw j(t);$(f,t),v(";")}),i.add(f)}}),n.add(h),1;throw j(r,"service name");case"extend":var e,s=t,n=i;if(Y.test(n=l()))return e=n,S(null,function(t){switch(t){case"required":case"repeated":N(s,t,e);break;case"optional":N(s,w?"proto3_optional":"optional",e);break;default:if(!w||!Y.test(t))throw j(t);d(t),N(s,"optional",e)}}),1;throw j(n,"reference")}}function S(t,i,n){var r,e=c.line;if(t&&("string"!=typeof t.comment&&(t.comment=b()),t.filename=it.filename),v("{",!0)){for(;"}"!==(r=l());)i(r);v(";",!0)}else n&&n(),v(";"),t&&("string"!=typeof t.comment||a)&&(t.comment=b(e)||t.comment)}function T(t,i){if(!Q.test(i=l()))throw j(i,"type name");var u=new L(i);S(u,function(t){if(!x(u,t))switch(t){case"map":var i=u,n=(v("<"),l());if(P.mapKey[n]===nt)throw j(n,"type");v(",");var r=l();if(!Y.test(r))throw j(r,"type");v(">");var e=l();if(!Q.test(e))throw j(e,"name");v("=");var s=new q(g(e),A(l()),n,r);S(s,function(t){if("option"!==t)throw j(t);$(s,t),v(";")},function(){M(s)}),i.add(s);break;case"required":case"repeated":N(u,t);break;case"optional":N(u,w?"proto3_optional":"optional");break;case"oneof":e=u,n=t;if(!Q.test(n=l()))throw j(n,"name");var o=new R(g(n));S(o,function(t){"option"===t?($(o,t),v(";")):(d(t),N(o,"optional"))}),e.add(o);break;case"extensions":E(u.extensions||(u.extensions=[]));break;case"reserved":E(u.reserved||(u.reserved=[]),!0);break;default:if(!w||!Y.test(t))throw j(t);d(t),N(u,"optional")}}),t.add(u)}function N(t,i,n){var r=l();if("group"===r){var e,s,o=t,u=i,f=l();if(Q.test(f))return s=H.lcFirst(f),f===s&&(f=H.ucFirst(f)),v("="),h=A(l()),(e=new L(f)).group=!0,(s=new U(s,h,f,u)).filename=it.filename,S(e,function(t){switch(t){case"option":$(e,t),v(";");break;case"required":case"repeated":N(e,t);break;case"optional":N(e,w?"proto3_optional":"optional");break;case"message":T(e);break;case"enum":V(e);break;default:throw j(t)}}),void o.add(e).add(s);throw j(f,"name")}for(;r.endsWith(".")||p().startsWith(".");)r+=l();if(!Y.test(r))throw j(r,"type");var h=l();if(!Q.test(h))throw j(h,"name");h=g(h),v("=");var a=new U(h,A(l()),r,i,n);S(a,function(t){if("option"!==t)throw j(t);$(a,t),v(";")},function(){M(a)}),"proto3_optional"===i?(u=new R("_"+h),a.setOption("proto3_optional",!0),u.add(a),t.add(u)):t.add(a),w||!a.repeated||P.packed[r]===nt&&P.basic[r]!==nt||a.setOption("packed",!1,!0)}function V(t,i){if(!Q.test(i=l()))throw j(i,"name");var s=new z(i);S(s,function(t){switch(t){case"option":$(s,t),v(";");break;case"reserved":E(s.reserved||(s.reserved=[]),!0);break;default:var i=s,n=t;if(!Q.test(n))throw j(n,"name");v("=");var r=A(l(),!0),e={options:nt,setOption:function(t,i){this.options===nt&&(this.options={}),this.options[t]=i}};return S(e,function(t){if("option"!==t)throw j(t);$(e,t),v(";")},function(){M(e)}),void i.add(n,r,e.comment,e.options)}}),t.add(s)}function $(t,i){var n=v("(",!0);if(!Y.test(i=l()))throw j(i,"name");var r,e=i,s=e,n=(n&&(v(")"),s=e="("+e+")",i=p(),tt.test(i)&&(r=i.slice(1),e+=i,l())),v("="),function t(i,n){if(v("{",!0)){for(var r={};!v("}",!0);){if(!Q.test(h=l()))throw j(h,"name");var e,s,o=h;if(v(":",!0),"{"===p())e=t(i,n+"."+h);else if("["===p()){if(e=[],v("[",!0)){for(;s=O(!0),e.push(s),v(",",!0););v("]"),void 0!==s&&_(i,n+"."+h,s)}}else e=O(!0),_(i,n+"."+h,e);var u=r[o];u&&(e=[].concat(u).concat(e)),r[o]=e,v(",",!0),v(";",!0)}return r}var f=O(!0);_(i,n,f);return f}(t,e));i=s,e=n,s=r,(n=t).setParsedOption&&n.setParsedOption(i,e,s)}function _(t,i,n){t.setOption&&t.setOption(i,n)}function M(t){if(v("[",!0)){for(;$(t,"option"),v(",",!0););v("]")}}for(;null!==(h=l());)switch(h){case"package":if(!y)throw j(h);if(r!==nt)throw j("package");if(r=l(),!Y.test(r))throw j(r,"name");m=m.define(r),v(";");break;case"import":if(!y)throw j(h);switch(f=u=void 0,p()){case"weak":f=s=s||[],l();break;case"public":l();default:f=e=e||[]}u=k(),v(";"),f.push(u);break;case"syntax":if(!y)throw j(h);if(v("="),o=k(),!(w="proto3"===o)&&"proto2"!==o)throw j(o,"syntax");v(";");break;case"option":$(m,h),v(";");break;default:if(x(m,h)){y=!1;continue}throw j(h)}return it.filename=null,{package:r,imports:e,weakImports:s,syntax:o,root:i}}},{15:15,16:16,20:20,22:22,25:25,29:29,33:33,34:34,35:35,36:36,37:37}],27:[function(t,i,n){i.exports=f;var r,e=t(39),s=e.LongBits,o=e.utf8;function u(t,i){return RangeError("index out of range: "+t.pos+" + "+(i||1)+" > "+t.len)}function f(t){this.buf=t,this.pos=0,this.len=t.length}function h(){return e.Buffer?function(t){return(f.create=function(t){return e.Buffer.isBuffer(t)?new r(t):c(t)})(t)}:c}var a,c="undefined"!=typeof Uint8Array?function(t){if(t instanceof Uint8Array||Array.isArray(t))return new f(t);throw Error("illegal buffer")}:function(t){if(Array.isArray(t))return new f(t);throw Error("illegal buffer")};function l(){var t=new s(0,0),i=0;if(!(4<this.len-this.pos)){for(;i<3;++i){if(this.pos>=this.len)throw u(this);if(t.lo=(t.lo|(127&this.buf[this.pos])<<7*i)>>>0,this.buf[this.pos++]<128)return t}return t.lo=(t.lo|(127&this.buf[this.pos++])<<7*i)>>>0,t}for(;i<4;++i)if(t.lo=(t.lo|(127&this.buf[this.pos])<<7*i)>>>0,this.buf[this.pos++]<128)return t;if(t.lo=(t.lo|(127&this.buf[this.pos])<<28)>>>0,t.hi=(t.hi|(127&this.buf[this.pos])>>4)>>>0,this.buf[this.pos++]<128)return t;if(i=0,4<this.len-this.pos){for(;i<5;++i)if(t.hi=(t.hi|(127&this.buf[this.pos])<<7*i+3)>>>0,this.buf[this.pos++]<128)return t}else for(;i<5;++i){if(this.pos>=this.len)throw u(this);if(t.hi=(t.hi|(127&this.buf[this.pos])<<7*i+3)>>>0,this.buf[this.pos++]<128)return t}throw Error("invalid varint encoding")}function d(t,i){return(t[i-4]|t[i-3]<<8|t[i-2]<<16|t[i-1]<<24)>>>0}function p(){if(this.pos+8>this.len)throw u(this,8);return new s(d(this.buf,this.pos+=4),d(this.buf,this.pos+=4))}f.create=h(),f.prototype.c=e.Array.prototype.subarray||e.Array.prototype.slice,f.prototype.uint32=(a=4294967295,function(){if(a=(127&this.buf[this.pos])>>>0,this.buf[this.pos++]<128||(a=(a|(127&this.buf[this.pos])<<7)>>>0,this.buf[this.pos++]<128||(a=(a|(127&this.buf[this.pos])<<14)>>>0,this.buf[this.pos++]<128||(a=(a|(127&this.buf[this.pos])<<21)>>>0,this.buf[this.pos++]<128||(a=(a|(15&this.buf[this.pos])<<28)>>>0,this.buf[this.pos++]<128||!((this.pos+=5)>this.len))))))return a;throw this.pos=this.len,u(this,10)}),f.prototype.int32=function(){return 0|this.uint32()},f.prototype.sint32=function(){var t=this.uint32();return t>>>1^-(1&t)|0},f.prototype.bool=function(){return 0!==this.uint32()},f.prototype.fixed32=function(){if(this.pos+4>this.len)throw u(this,4);return d(this.buf,this.pos+=4)},f.prototype.sfixed32=function(){if(this.pos+4>this.len)throw u(this,4);return 0|d(this.buf,this.pos+=4)},f.prototype.float=function(){if(this.pos+4>this.len)throw u(this,4);var t=e.float.readFloatLE(this.buf,this.pos);return this.pos+=4,t},f.prototype.double=function(){if(this.pos+8>this.len)throw u(this,4);var t=e.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,t},f.prototype.bytes=function(){var t=this.uint32(),i=this.pos,n=this.pos+t;if(n>this.len)throw u(this,t);return this.pos+=t,Array.isArray(this.buf)?this.buf.slice(i,n):i===n?new this.buf.constructor(0):this.c.call(this.buf,i,n)},f.prototype.string=function(){var t=this.bytes();return o.read(t,0,t.length)},f.prototype.skip=function(t){if("number"==typeof t){if(this.pos+t>this.len)throw u(this,t);this.pos+=t}else do{if(this.pos>=this.len)throw u(this)}while(128&this.buf[this.pos++]);return this},f.prototype.skipType=function(t){switch(t){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;4!=(t=7&this.uint32());)this.skipType(t);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+t+" at offset "+this.pos)}return this},f.u=function(t){r=t,f.create=h(),r.u();var i=e.Long?"toLong":"toNumber";e.merge(f.prototype,{int64:function(){return l.call(this)[i](!1)},uint64:function(){return l.call(this)[i](!0)},sint64:function(){return l.call(this).zzDecode()[i](!1)},fixed64:function(){return p.call(this)[i](!0)},sfixed64:function(){return p.call(this)[i](!1)}})}},{39:39}],28:[function(t,i,n){i.exports=s;var r=t(27),e=((s.prototype=Object.create(r.prototype)).constructor=s,t(39));function s(t){r.call(this,t)}s.u=function(){e.Buffer&&(s.prototype.c=e.Buffer.prototype.slice)},s.prototype.string=function(){var t=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+t,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+t,this.len))},s.u()},{27:27,39:39}],29:[function(t,i,n){i.exports=f;var r,d,p,e=t(23),s=(((f.prototype=Object.create(e.prototype)).constructor=f).className="Root",t(16)),o=t(15),u=t(25),v=t(37);function f(t){e.call(this,"",t),this.deferred=[],this.files=[]}function b(){}f.fromJSON=function(t,i){return i=i||new f,t.options&&i.setOptions(t.options),i.addJSON(t.nested)},f.prototype.resolvePath=v.path.resolve,f.prototype.fetch=v.fetch,f.prototype.load=function t(i,s,e){"function"==typeof s&&(e=s,s=nt);var o=this;if(!e)return v.asPromise(t,o,i,s);var u=e===b;function f(t,i){if(e){var n=e;if(e=null,u)throw t;n(t,i)}}function h(t){var i=t.lastIndexOf("google/protobuf/");if(-1<i){t=t.substring(i);if(t in p)return t}return null}function a(t,i){try{if(v.isString(i)&&"{"==(i[0]||"")&&(i=JSON.parse(i)),v.isString(i)){d.filename=t;var n,r=d(i,o,s),e=0;if(r.imports)for(;e<r.imports.length;++e)(n=h(r.imports[e])||o.resolvePath(t,r.imports[e]))&&c(n);if(r.weakImports)for(e=0;e<r.weakImports.length;++e)(n=h(r.weakImports[e])||o.resolvePath(t,r.weakImports[e]))&&c(n,!0)}else o.setOptions(i.options).addJSON(i.nested)}catch(t){f(t)}u||l||f(null,o)}function c(n,r){if(n=h(n)||n,!~o.files.indexOf(n))if(o.files.push(n),n in p)u?a(n,p[n]):(++l,setTimeout(function(){--l,a(n,p[n])}));else if(u){var t;try{t=v.fs.readFileSync(n).toString("utf8")}catch(t){return void(r||f(t))}a(n,t)}else++l,o.fetch(n,function(t,i){--l,e&&(t?r?l||f(null,o):f(t):a(n,i))})}var l=0;v.isString(i)&&(i=[i]);for(var n,r=0;r<i.length;++r)(n=o.resolvePath("",i[r]))&&c(n);return u?o:(l||f(null,o),nt)},f.prototype.loadSync=function(t,i){if(v.isNode)return this.load(t,i,b);throw Error("not supported")},f.prototype.resolveAll=function(){if(this.deferred.length)throw Error("unresolvable extensions: "+this.deferred.map(function(t){return"'extend "+t.extend+"' in "+t.parent.fullName}).join(", "));return e.prototype.resolveAll.call(this)};var h=/^[A-Z]/;function a(t,i){var n,r=i.parent.lookup(i.extend);if(r)return n=new s(i.fullName,i.id,i.type,i.rule,nt,i.options),r.get(n.name)||((n.declaringField=i).extensionField=n,r.add(n)),1}f.prototype.h=function(t){if(t instanceof s)t.extend===nt||t.extensionField||a(0,t)||this.deferred.push(t);else if(t instanceof o)h.test(t.name)&&(t.parent[t.name]=t.values);else if(!(t instanceof u)){if(t instanceof r)for(var i=0;i<this.deferred.length;)a(0,this.deferred[i])?this.deferred.splice(i,1):++i;for(var n=0;n<t.nestedArray.length;++n)this.h(t.f[n]);h.test(t.name)&&(t.parent[t.name]=t)}},f.prototype.a=function(t){var i;if(t instanceof s)t.extend!==nt&&(t.extensionField?(t.extensionField.parent.remove(t.extensionField),t.extensionField=null):-1<(i=this.deferred.indexOf(t))&&this.deferred.splice(i,1));else if(t instanceof o)h.test(t.name)&&delete t.parent[t.name];else if(t instanceof e){for(var n=0;n<t.nestedArray.length;++n)this.a(t.f[n]);h.test(t.name)&&delete t.parent[t.name]}},f.u=function(t,i,n){r=t,d=i,p=n}},{15:15,16:16,23:23,25:25,37:37}],30:[function(t,i,n){i.exports={}},{}],31:[function(t,i,n){n.Service=t(32)},{32:32}],32:[function(t,i,n){i.exports=r;var u=t(39);function r(t,i,n){if("function"!=typeof t)throw TypeError("rpcImpl must be a function");u.EventEmitter.call(this),this.rpcImpl=t,this.requestDelimited=!!i,this.responseDelimited=!!n}((r.prototype=Object.create(u.EventEmitter.prototype)).constructor=r).prototype.rpcCall=function t(n,i,r,e,s){if(!e)throw TypeError("request must be specified");var o=this;if(!s)return u.asPromise(t,o,n,i,r,e);if(!o.rpcImpl)return setTimeout(function(){s(Error("already ended"))},0),nt;try{return o.rpcImpl(n,i[o.requestDelimited?"encodeDelimited":"encode"](e).finish(),function(t,i){if(t)return o.emit("error",t,n),s(t);if(null===i)return o.end(!0),nt;if(!(i instanceof r))try{i=r[o.responseDelimited?"decodeDelimited":"decode"](i)}catch(t){return o.emit("error",t,n),s(t)}return o.emit("data",i,n),s(null,i)})}catch(t){return o.emit("error",t,n),setTimeout(function(){s(t)},0),nt}},r.prototype.end=function(t){return this.rpcImpl&&(t||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}},{39:39}],33:[function(t,i,n){i.exports=o;var r=t(23),s=(((o.prototype=Object.create(r.prototype)).constructor=o).className="Service",t(22)),u=t(37),f=t(31);function o(t,i){r.call(this,t,i),this.methods={},this.l=null}function e(t){return t.l=null,t}o.fromJSON=function(t,i){var n=new o(t,i.options);if(i.methods)for(var r=Object.keys(i.methods),e=0;e<r.length;++e)n.add(s.fromJSON(r[e],i.methods[r[e]]));return i.nested&&n.addJSON(i.nested),n.comment=i.comment,n},o.prototype.toJSON=function(t){var i=r.prototype.toJSON.call(this,t),n=!!t&&!!t.keepComments;return u.toObject(["options",i&&i.options||nt,"methods",r.arrayToJSON(this.methodsArray,t)||{},"nested",i&&i.nested||nt,"comment",n?this.comment:nt])},Object.defineProperty(o.prototype,"methodsArray",{get:function(){return this.l||(this.l=u.toArray(this.methods))}}),o.prototype.get=function(t){return this.methods[t]||r.prototype.get.call(this,t)},o.prototype.resolveAll=function(){for(var t=this.methodsArray,i=0;i<t.length;++i)t[i].resolve();return r.prototype.resolve.call(this)},o.prototype.add=function(t){if(this.get(t.name))throw Error("duplicate name '"+t.name+"' in "+this);return t instanceof s?e((this.methods[t.name]=t).parent=this):r.prototype.add.call(this,t)},o.prototype.remove=function(t){if(t instanceof s){if(this.methods[t.name]!==t)throw Error(t+" is not a member of "+this);return delete this.methods[t.name],t.parent=null,e(this)}return r.prototype.remove.call(this,t)},o.prototype.create=function(t,i,n){for(var r,e=new f.Service(t,i,n),s=0;s<this.methodsArray.length;++s){var o=u.lcFirst((r=this.l[s]).resolve().name).replace(/[^$\w_]/g,"");e[o]=u.codegen(["r","c"],u.isReserved(o)?o+"_":o)("return this.rpcCall(m,q,s,r,c)")({m:r,q:r.resolvedRequestType.ctor,s:r.resolvedResponseType.ctor})}return e}},{22:22,23:23,31:31,37:37}],34:[function(t,i,n){i.exports=s;var O=/[\s{}=;:[\],'"()<>]/g,E=/(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,A=/(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,x=/^ *[*/]+ */,S=/^\s*\*?\/*/,T=/\n/g,N=/\s/,r=/\\(.?)/g,e={0:"\0",r:"\r",n:"\n",t:"\t"};function V(t){return t.replace(r,function(t,i){switch(i){case"\\":case"":return i;default:return e[i]||""}})}function s(h,a){h=h.toString();var c=0,l=h.length,d=1,f=0,p={},v=[],b=null;function y(t){return Error("illegal "+t+" (line "+d+")")}function w(t){return h[0|t]||""}function m(t,i,n){var r,e={type:h[0|t++]||"",lineEmpty:!1,leading:n},n=a?2:3,s=t-n;do{if(--s<0||"\n"==(r=h[0|s]||"")){e.lineEmpty=!0;break}}while(" "===r||"\t"===r);for(var o=h.substring(t,i).split(T),u=0;u<o.length;++u)o[u]=o[u].replace(a?S:x,"").trim();e.text=o.join("\n").trim(),p[d]=e,f=d}function g(t){var i=j(t),t=h.substring(t,i);return/^\s*\/{1,2}/.test(t)}function j(t){for(var i=t;i<l&&"\n"!==w(i);)i++;return i}function r(){if(0<v.length)return v.shift();if(b){var t="'"===b?A:E,i=(t.lastIndex=c-1,t.exec(h));if(i)return c=t.lastIndex,k(b),b=null,V(i[1]);throw y("string")}var n,r,e,s,o,u=0===c;do{if(c===l)return null;for(n=!1;N.test(e=w(c));)if("\n"===e&&(u=!0,++d),++c===l)return null;if("/"===w(c)){if(++c===l)throw y("comment");if("/"===w(c))if(a){if(o=!1,g(s=c))for(o=!0;(c=j(c))!==l&&(c++,u&&g(c)););else c=Math.min(l,j(c)+1);o&&(m(s,c,u),u=!0),d++}else{for(o="/"===w(s=c+1);"\n"!==w(++c);)if(c===l)return null;++c,o&&(m(s,c-1,u),u=!0),++d}else{if("*"!==(e=w(c)))return"/";s=c+1,o=a||"*"===w(s);do{if("\n"===e&&++d,++c===l)throw y("comment")}while(r=e,e=w(c),"*"!==r||"/"!==e);++c,o&&(m(s,c-2,u),u=!0)}n=!0}}while(n);var f=c;if(O.lastIndex=0,!O.test(w(f++)))for(;f<l&&!O.test(w(f));)++f;t=h.substring(c,c=f);return'"'!=t&&"'"!=t||(b=t),t}function k(t){v.push(t)}function e(){if(!v.length){var t=r();if(null===t)return null;k(t)}return v[0]}return Object.defineProperty({next:r,peek:e,push:k,skip:function(t,i){var n=e();if(n===t)return r(),!0;if(i)return!1;throw y("token '"+n+"', '"+t+"' expected")},cmnt:function(t){var i,n=null;return t===nt?(i=p[d-1],delete p[d-1],i&&(a||"*"===i.type||i.lineEmpty)&&(n=i.leading?i.text:null)):(f<t&&e(),i=p[t],delete p[t],!i||i.lineEmpty||!a&&"/"!==i.type||(n=i.leading?null:i.text)),n}},"line",{get:function(){return d}})}s.unescape=V},{}],35:[function(t,i,n){i.exports=m;var o=t(23),u=(((m.prototype=Object.create(o.prototype)).constructor=m).className="Type",t(15)),f=t(25),h=t(16),a=t(20),c=t(33),e=t(21),s=t(27),l=t(42),d=t(37),p=t(14),v=t(13),b=t(40),y=t(12),w=t(41);function m(t,i){o.call(this,t,i),this.fields={},this.oneofs=nt,this.extensions=nt,this.reserved=nt,this.group=nt,this.p=null,this.e=null,this.v=null,this.b=null}function r(t){return t.p=t.e=t.v=null,delete t.encode,delete t.decode,delete t.verify,t}Object.defineProperties(m.prototype,{fieldsById:{get:function(){if(!this.p){this.p={};for(var t=Object.keys(this.fields),i=0;i<t.length;++i){var n=this.fields[t[i]],r=n.id;if(this.p[r])throw Error("duplicate id "+r+" in "+this);this.p[r]=n}}return this.p}},fieldsArray:{get:function(){return this.e||(this.e=d.toArray(this.fields))}},oneofsArray:{get:function(){return this.v||(this.v=d.toArray(this.oneofs))}},ctor:{get:function(){return this.b||(this.ctor=m.generateConstructor(this)())},set:function(t){for(var i=t.prototype,n=(i instanceof e||((t.prototype=new e).constructor=t,d.merge(t.prototype,i)),t.$type=t.prototype.$type=this,d.merge(t,e,!0),this.b=t,0);n<this.fieldsArray.length;++n)this.e[n].resolve();for(var r={},n=0;n<this.oneofsArray.length;++n)r[this.v[n].resolve().name]={get:d.oneOfGetter(this.v[n].oneof),set:d.oneOfSetter(this.v[n].oneof)};n&&Object.defineProperties(t.prototype,r)}}}),m.generateConstructor=function(t){for(var i,n=d.codegen(["p"],t.name),r=0;r<t.fieldsArray.length;++r)(i=t.e[r]).map?n("this%s={}",d.safeProp(i.name)):i.repeated&&n("this%s=[]",d.safeProp(i.name));return n("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")},m.fromJSON=function(t,i){for(var n=new m(t,i.options),r=(n.extensions=i.extensions,n.reserved=i.reserved,Object.keys(i.fields)),e=0;e<r.length;++e)n.add((void 0!==i.fields[r[e]].keyType?a:h).fromJSON(r[e],i.fields[r[e]]));if(i.oneofs)for(r=Object.keys(i.oneofs),e=0;e<r.length;++e)n.add(f.fromJSON(r[e],i.oneofs[r[e]]));if(i.nested)for(r=Object.keys(i.nested),e=0;e<r.length;++e){var s=i.nested[r[e]];n.add((s.id!==nt?h:s.fields!==nt?m:s.values!==nt?u:s.methods!==nt?c:o).fromJSON(r[e],s))}return i.extensions&&i.extensions.length&&(n.extensions=i.extensions),i.reserved&&i.reserved.length&&(n.reserved=i.reserved),i.group&&(n.group=!0),i.comment&&(n.comment=i.comment),n},m.prototype.toJSON=function(t){var i=o.prototype.toJSON.call(this,t),n=!!t&&!!t.keepComments;return d.toObject(["options",i&&i.options||nt,"oneofs",o.arrayToJSON(this.oneofsArray,t),"fields",o.arrayToJSON(this.fieldsArray.filter(function(t){return!t.declaringField}),t)||{},"extensions",this.extensions&&this.extensions.length?this.extensions:nt,"reserved",this.reserved&&this.reserved.length?this.reserved:nt,"group",this.group||nt,"nested",i&&i.nested||nt,"comment",n?this.comment:nt])},m.prototype.resolveAll=function(){for(var t=this.fieldsArray,i=0;i<t.length;)t[i++].resolve();for(var n=this.oneofsArray,i=0;i<n.length;)n[i++].resolve();return o.prototype.resolveAll.call(this)},m.prototype.get=function(t){return this.fields[t]||this.oneofs&&this.oneofs[t]||this.nested&&this.nested[t]||null},m.prototype.add=function(t){if(this.get(t.name))throw Error("duplicate name '"+t.name+"' in "+this);if(t instanceof h&&t.extend===nt){if((this.p||this.fieldsById)[t.id])throw Error("duplicate id "+t.id+" in "+this);if(this.isReservedId(t.id))throw Error("id "+t.id+" is reserved in "+this);if(this.isReservedName(t.name))throw Error("name '"+t.name+"' is reserved in "+this);return t.parent&&t.parent.remove(t),(this.fields[t.name]=t).message=this,t.onAdd(this),r(this)}return t instanceof f?(this.oneofs||(this.oneofs={}),(this.oneofs[t.name]=t).onAdd(this),r(this)):o.prototype.add.call(this,t)},m.prototype.remove=function(t){if(t instanceof h&&t.extend===nt){if(this.fields&&this.fields[t.name]===t)return delete this.fields[t.name],t.parent=null,t.onRemove(this),r(this);throw Error(t+" is not a member of "+this)}if(t instanceof f){if(this.oneofs&&this.oneofs[t.name]===t)return delete this.oneofs[t.name],t.parent=null,t.onRemove(this),r(this);throw Error(t+" is not a member of "+this)}return o.prototype.remove.call(this,t)},m.prototype.isReservedId=function(t){return o.isReservedId(this.reserved,t)},m.prototype.isReservedName=function(t){return o.isReservedName(this.reserved,t)},m.prototype.create=function(t){return new this.ctor(t)},m.prototype.setup=function(){for(var t=this.fullName,i=[],n=0;n<this.fieldsArray.length;++n)i.push(this.e[n].resolve().resolvedType);this.encode=p(this)({Writer:l,types:i,util:d}),this.decode=v(this)({Reader:s,types:i,util:d}),this.verify=b(this)({types:i,util:d}),this.fromObject=y.fromObject(this)({types:i,util:d}),this.toObject=y.toObject(this)({types:i,util:d});var r,t=w[t];return t&&((r=Object.create(this)).fromObject=this.fromObject,this.fromObject=t.fromObject.bind(r),r.toObject=this.toObject,this.toObject=t.toObject.bind(r)),this},m.prototype.encode=function(t,i){return this.setup().encode(t,i)},m.prototype.encodeDelimited=function(t,i){return this.encode(t,i&&i.len?i.fork():i).ldelim()},m.prototype.decode=function(t,i){return this.setup().decode(t,i)},m.prototype.decodeDelimited=function(t){return t instanceof s||(t=s.create(t)),this.decode(t,t.uint32())},m.prototype.verify=function(t){return this.setup().verify(t)},m.prototype.fromObject=function(t){return this.setup().fromObject(t)},m.prototype.toObject=function(t,i){return this.setup().toObject(t,i)},m.d=function(i){return function(t){d.decorateType(t,i)}}},{12:12,13:13,14:14,15:15,16:16,20:20,21:21,23:23,25:25,27:27,33:33,37:37,40:40,41:41,42:42}],36:[function(t,i,n){var t=t(37),e=["double","float","int32","uint32","sint32","fixed32","sfixed32","int64","uint64","sint64","fixed64","sfixed64","bool","string","bytes"];function r(t,i){var n=0,r={};for(i|=0;n<t.length;)r[e[n+i]]=t[n++];return r}n.basic=r([1,5,0,0,0,5,5,0,0,0,1,1,0,2,2]),n.defaults=r([0,0,0,0,0,0,0,0,0,0,0,0,!1,"",t.emptyArray,null]),n.long=r([0,0,0,1,1],7),n.mapKey=r([0,0,0,5,5,0,0,0,1,1,0,2],2),n.packed=r([1,5,0,0,0,5,5,0,0,0,1,1,0])},{37:37}],37:[function(n,t,i){var r,e,s=t.exports=n(39),o=n(30),u=(s.codegen=n(3),s.fetch=n(5),s.path=n(8),s.fs=s.inquire("fs"),s.toArray=function(t){if(t){for(var i=Object.keys(t),n=Array(i.length),r=0;r<i.length;)n[r]=t[i[r++]];return n}return[]},s.toObject=function(t){for(var i={},n=0;n<t.length;){var r=t[n++],e=t[n++];e!==nt&&(i[r]=e)}return i},/\\/g),f=/"/g,h=(s.isReserved=function(t){return/^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)},s.safeProp=function(t){return!/^[$\w_]+$/.test(t)||s.isReserved(t)?'["'+t.replace(u,"\\\\").replace(f,'\\"')+'"]':"."+t},s.ucFirst=function(t){return(t[0]||"").toUpperCase()+t.substring(1)},/_([a-z])/g),a=(s.camelCase=function(t){return t.substring(0,1)+t.substring(1).replace(h,function(t,i){return i.toUpperCase()})},s.compareFieldsById=function(t,i){return t.id-i.id},s.decorateType=function(t,i){return t.$type?(i&&t.$type.name!==i&&(s.decorateRoot.remove(t.$type),t.$type.name=i,s.decorateRoot.add(t.$type)),t.$type):(i=new(r=r||n(35))(i||t.name),s.decorateRoot.add(i),i.ctor=t,Object.defineProperty(t,"$type",{value:i,enumerable:!1}),Object.defineProperty(t.prototype,"$type",{value:i,enumerable:!1}),i)},0);s.decorateEnum=function(t){var i;return t.$type||(i=new(e=e||n(15))("Enum"+a++,t),s.decorateRoot.add(i),Object.defineProperty(t,"$type",{value:i,enumerable:!1}),i)},s.setProperty=function(t,i,n){if("object"!=typeof t)throw TypeError("dst must be an object");if(i)return function t(i,n,r){var e=n.shift();return"__proto__"!==e&&(0<n.length?i[e]=t(i[e]||{},n,r):((n=i[e])&&(r=[].concat(n).concat(r)),i[e]=r)),i}(t,i=i.split("."),n);throw TypeError("path must be specified")},Object.defineProperty(s,"decorateRoot",{get:function(){return o.decorated||(o.decorated=new(n(29)))}})},{15:15,29:29,3:3,30:30,35:35,39:39,5:5,8:8}],38:[function(t,i,n){i.exports=e;var r=t(39);function e(t,i){this.lo=t>>>0,this.hi=i>>>0}var s=e.zero=new e(0,0),o=(s.toNumber=function(){return 0},s.zzEncode=s.zzDecode=function(){return this},s.length=function(){return 1},e.zeroHash="\0\0\0\0\0\0\0\0",e.fromNumber=function(t){var i,n;return 0===t?s:(n=(t=(i=t<0)?-t:t)>>>0,t=(t-n)/4294967296>>>0,i&&(t=~t>>>0,n=~n>>>0,4294967295<++n&&(n=0,4294967295<++t&&(t=0))),new e(n,t))},e.from=function(t){if("number"==typeof t)return e.fromNumber(t);if(r.isString(t)){if(!r.Long)return e.fromNumber(parseInt(t,10));t=r.Long.fromString(t)}return t.low||t.high?new e(t.low>>>0,t.high>>>0):s},e.prototype.toNumber=function(t){var i;return!t&&this.hi>>>31?(t=1+~this.lo>>>0,i=~this.hi>>>0,-(t+4294967296*(i=t?i:i+1>>>0))):this.lo+4294967296*this.hi},e.prototype.toLong=function(t){return r.Long?new r.Long(0|this.lo,0|this.hi,!!t):{low:0|this.lo,high:0|this.hi,unsigned:!!t}},String.prototype.charCodeAt);e.fromHash=function(t){return"\0\0\0\0\0\0\0\0"===t?s:new e((o.call(t,0)|o.call(t,1)<<8|o.call(t,2)<<16|o.call(t,3)<<24)>>>0,(o.call(t,4)|o.call(t,5)<<8|o.call(t,6)<<16|o.call(t,7)<<24)>>>0)},e.prototype.toHash=function(){return String.fromCharCode(255&this.lo,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,255&this.hi,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},e.prototype.zzEncode=function(){var t=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^t)>>>0,this.lo=(this.lo<<1^t)>>>0,this},e.prototype.zzDecode=function(){var t=-(1&this.lo);return this.lo=((this.lo>>>1|this.hi<<31)^t)>>>0,this.hi=(this.hi>>>1^t)>>>0,this},e.prototype.length=function(){var t=this.lo,i=(this.lo>>>28|this.hi<<4)>>>0,n=this.hi>>>24;return 0==n?0==i?t<16384?t<128?1:2:t<2097152?3:4:i<16384?i<128?5:6:i<2097152?7:8:n<128?9:10}},{39:39}],39:[function(t,i,n){var r=n;function e(t,i,n){for(var r=Object.keys(i),e=0;e<r.length;++e)t[r[e]]!==nt&&n||(t[r[e]]=i[r[e]]);return t}function s(t){function n(t,i){if(!(this instanceof n))return new n(t,i);Object.defineProperty(this,"message",{get:function(){return t}}),Error.captureStackTrace?Error.captureStackTrace(this,n):Object.defineProperty(this,"stack",{value:Error().stack||""}),i&&e(this,i)}return n.prototype=Object.create(Error.prototype,{constructor:{value:n,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return t},set:nt,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),n}r.asPromise=t(1),r.base64=t(2),r.EventEmitter=t(4),r.float=t(6),r.inquire=t(7),r.utf8=t(10),r.pool=t(9),r.LongBits=t(38),r.isNode=!!("undefined"!=typeof global&&global&&global.process&&global.process.versions&&global.process.versions.node),r.global=r.isNode&&global||"undefined"!=typeof window&&window||"undefined"!=typeof self&&self||this,r.emptyArray=Object.freeze?Object.freeze([]):[],r.emptyObject=Object.freeze?Object.freeze({}):{},r.isInteger=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t},r.isString=function(t){return"string"==typeof t||t instanceof String},r.isObject=function(t){return t&&"object"==typeof t},r.isset=r.isSet=function(t,i){var n=t[i];return null!=n&&t.hasOwnProperty(i)&&("object"!=typeof n||0<(Array.isArray(n)?n:Object.keys(n)).length)},r.Buffer=function(){try{var t=r.inquire("buffer").Buffer;return t.prototype.utf8Write?t:null}catch(t){return null}}(),r.y=null,r.w=null,r.newBuffer=function(t){return"number"==typeof t?r.Buffer?r.w(t):new r.Array(t):r.Buffer?r.y(t):"undefined"==typeof Uint8Array?t:new Uint8Array(t)},r.Array="undefined"!=typeof Uint8Array?Uint8Array:Array,r.Long=r.global.dcodeIO&&r.global.dcodeIO.Long||r.global.Long||r.inquire("long"),r.key2Re=/^true|false|0|1$/,r.key32Re=/^-?(?:0|[1-9][0-9]*)$/,r.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,r.longToHash=function(t){return t?r.LongBits.from(t).toHash():r.LongBits.zeroHash},r.longFromHash=function(t,i){t=r.LongBits.fromHash(t);return r.Long?r.Long.fromBits(t.lo,t.hi,i):t.toNumber(!!i)},r.merge=e,r.lcFirst=function(t){return(t[0]||"").toLowerCase()+t.substring(1)},r.newError=s,r.ProtocolError=s("ProtocolError"),r.oneOfGetter=function(t){for(var n={},i=0;i<t.length;++i)n[t[i]]=1;return function(){for(var t=Object.keys(this),i=t.length-1;-1<i;--i)if(1===n[t[i]]&&this[t[i]]!==nt&&null!==this[t[i]])return t[i]}},r.oneOfSetter=function(n){return function(t){for(var i=0;i<n.length;++i)n[i]!==t&&delete this[n[i]]}},r.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},r.u=function(){var n=r.Buffer;n?(r.y=n.from!==Uint8Array.from&&n.from||function(t,i){return new n(t,i)},r.w=n.allocUnsafe||function(t){return new n(t)}):r.y=r.w=null}},{1:1,10:10,2:2,38:38,4:4,6:6,7:7,9:9}],40:[function(t,i,n){i.exports=function(t){var i=f.codegen(["m"],t.name+"$verify")('if(typeof m!=="object"||m===null)')("return%j","object expected"),n=t.oneofsArray,r={};n.length&&i("var p={}");for(var e=0;e<t.fieldsArray.length;++e){var s,o=t.e[e].resolve(),u="m"+f.safeProp(o.name);o.optional&&i("if(%s!=null&&m.hasOwnProperty(%j)){",u,o.name),o.map?(i("if(!util.isObject(%s))",u)("return%j",h(o,"object"))("var k=Object.keys(%s)",u)("for(var i=0;i<k.length;++i){"),function(t,i,n){switch(i.keyType){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":t("if(!util.key32Re.test(%s))",n)("return%j",h(i,"integer key"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":t("if(!util.key64Re.test(%s))",n)("return%j",h(i,"integer|Long key"));break;case"bool":t("if(!util.key2Re.test(%s))",n)("return%j",h(i,"boolean key"))}}(i,o,"k[i]"),a(i,o,e,u+"[k[i]]")("}")):o.repeated?(i("if(!Array.isArray(%s))",u)("return%j",h(o,"array"))("for(var i=0;i<%s.length;++i){",u),a(i,o,e,u+"[i]")("}")):(o.partOf&&(s=f.safeProp(o.partOf.name),1===r[o.partOf.name]&&i("if(p%s===1)",s)("return%j",o.partOf.name+": multiple values"),r[o.partOf.name]=1,i("p%s=1",s)),a(i,o,e,u)),o.optional&&i("}")}return i("return null")};var o=t(15),f=t(37);function h(t,i){return t.name+": "+i+(t.repeated&&"array"!==i?"[]":t.map&&"object"!==i?"{k:"+t.keyType+"}":"")+" expected"}function a(t,i,n,r){if(i.resolvedType)if(i.resolvedType instanceof o){t("switch(%s){",r)("default:")("return%j",h(i,"enum value"));for(var e=Object.keys(i.resolvedType.values),s=0;s<e.length;++s)t("case %i:",i.resolvedType.values[e[s]]);t("break")("}")}else t("{")("var e=types[%i].verify(%s);",n,r)("if(e)")("return%j+e",i.name+".")("}");else switch(i.type){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":t("if(!util.isInteger(%s))",r)("return%j",h(i,"integer"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":t("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))",r,r,r,r)("return%j",h(i,"integer|Long"));break;case"float":case"double":t('if(typeof %s!=="number")',r)("return%j",h(i,"number"));break;case"bool":t('if(typeof %s!=="boolean")',r)("return%j",h(i,"boolean"));break;case"string":t("if(!util.isString(%s))",r)("return%j",h(i,"string"));break;case"bytes":t('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',r,r,r)("return%j",h(i,"buffer"))}return t}},{15:15,37:37}],41:[function(t,i,n){var o=t(21);n[".google.protobuf.Any"]={fromObject:function(t){if(t&&t["@type"]){var i,n=t["@type"].substring(1+t["@type"].lastIndexOf("/")),n=this.lookup(n);if(n)return~(i="."==(t["@type"][0]||"")?t["@type"].slice(1):t["@type"]).indexOf("/")||(i="/"+i),this.create({type_url:i,value:n.encode(n.fromObject(t)).finish()})}return this.fromObject(t)},toObject:function(t,i){var n,r,e="",s="";return i&&i.json&&t.type_url&&t.value&&(s=t.type_url.substring(1+t.type_url.lastIndexOf("/")),e=t.type_url.substring(0,1+t.type_url.lastIndexOf("/")),(n=this.lookup(s))&&(t=n.decode(t.value))),!(t instanceof this.ctor)&&t instanceof o?(n=t.$type.toObject(t,i),r="."===t.$type.fullName[0]?t.$type.fullName.slice(1):t.$type.fullName,n["@type"]=s=(e=""===e?"type.googleapis.com/":e)+r,n):this.toObject(t,i)}}},{21:21}],42:[function(t,i,n){i.exports=c;var r,e=t(39),s=e.LongBits,o=e.base64,u=e.utf8;function f(t,i,n){this.fn=t,this.len=i,this.next=nt,this.val=n}function h(){}function a(t){this.head=t.head,this.tail=t.tail,this.len=t.len,this.next=t.states}function c(){this.len=0,this.head=new f(h,0,0),this.tail=this.head,this.states=null}function l(){return e.Buffer?function(){return(c.create=function(){return new r})()}:function(){return new c}}function d(t,i,n){i[n]=255&t}function p(t,i){this.len=t,this.next=nt,this.val=i}function v(t,i,n){for(;t.hi;)i[n++]=127&t.lo|128,t.lo=(t.lo>>>7|t.hi<<25)>>>0,t.hi>>>=7;for(;127<t.lo;)i[n++]=127&t.lo|128,t.lo=t.lo>>>7;i[n++]=t.lo}function b(t,i,n){i[n]=255&t,i[n+1]=t>>>8&255,i[n+2]=t>>>16&255,i[n+3]=t>>>24}c.create=l(),c.alloc=function(t){return new e.Array(t)},e.Array!==Array&&(c.alloc=e.pool(c.alloc,e.Array.prototype.subarray)),c.prototype.g=function(t,i,n){return this.tail=this.tail.next=new f(t,i,n),this.len+=i,this},(p.prototype=Object.create(f.prototype)).fn=function(t,i,n){for(;127<t;)i[n++]=127&t|128,t>>>=7;i[n]=t},c.prototype.uint32=function(t){return this.len+=(this.tail=this.tail.next=new p((t>>>=0)<128?1:t<16384?2:t<2097152?3:t<268435456?4:5,t)).len,this},c.prototype.int32=function(t){return t<0?this.g(v,10,s.fromNumber(t)):this.uint32(t)},c.prototype.sint32=function(t){return this.uint32((t<<1^t>>31)>>>0)},c.prototype.int64=c.prototype.uint64=function(t){t=s.from(t);return this.g(v,t.length(),t)},c.prototype.sint64=function(t){t=s.from(t).zzEncode();return this.g(v,t.length(),t)},c.prototype.bool=function(t){return this.g(d,1,t?1:0)},c.prototype.sfixed32=c.prototype.fixed32=function(t){return this.g(b,4,t>>>0)},c.prototype.sfixed64=c.prototype.fixed64=function(t){t=s.from(t);return this.g(b,4,t.lo).g(b,4,t.hi)},c.prototype.float=function(t){return this.g(e.float.writeFloatLE,4,t)},c.prototype.double=function(t){return this.g(e.float.writeDoubleLE,8,t)};var y=e.Array.prototype.set?function(t,i,n){i.set(t,n)}:function(t,i,n){for(var r=0;r<t.length;++r)i[n+r]=t[r]};c.prototype.bytes=function(t){var i,n=t.length>>>0;return n?(e.isString(t)&&(i=c.alloc(n=o.length(t)),o.decode(t,i,0),t=i),this.uint32(n).g(y,n,t)):this.g(d,1,0)},c.prototype.string=function(t){var i=u.length(t);return i?this.uint32(i).g(u.write,i,t):this.g(d,1,0)},c.prototype.fork=function(){return this.states=new a(this),this.head=this.tail=new f(h,0,0),this.len=0,this},c.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new f(h,0,0),this.len=0),this},c.prototype.ldelim=function(){var t=this.head,i=this.tail,n=this.len;return this.reset().uint32(n),n&&(this.tail.next=t.next,this.tail=i,this.len+=n),this},c.prototype.finish=function(){for(var t=this.head.next,i=this.constructor.alloc(this.len),n=0;t;)t.fn(t.val,i,n),n+=t.len,t=t.next;return i},c.u=function(t){r=t,c.create=l(),r.u()}},{39:39}],43:[function(t,i,n){i.exports=s;var r=t(42),e=((s.prototype=Object.create(r.prototype)).constructor=s,t(39));function s(){r.call(this)}function o(t,i,n){t.length<40?e.utf8.write(t,i,n):i.utf8Write?i.utf8Write(t,n):i.write(t,n)}s.u=function(){s.alloc=e.w,s.writeBytesBuffer=e.Buffer&&e.Buffer.prototype instanceof Uint8Array&&"set"===e.Buffer.prototype.set.name?function(t,i,n){i.set(t,n)}:function(t,i,n){if(t.copy)t.copy(i,n,0,t.length);else for(var r=0;r<t.length;)i[n++]=t[r++]}},s.prototype.bytes=function(t){var i=(t=e.isString(t)?e.y(t,"base64"):t).length>>>0;return this.uint32(i),i&&this.g(s.writeBytesBuffer,i,t),this},s.prototype.string=function(t){var i=e.Buffer.byteLength(t);return this.uint32(i),i&&this.g(o,i,t),this},s.u()},{39:39,42:42}]},{},[19])}();

;


;
// Original plugin 7: assets/scripts/framework/plugin/Extentions.js
// SHA256: e83b07781d02b142b089af06a8fe4818fbcef34c28e2bb75ac2d9dd251c51d75
(function(root){var exports=undefined,module=undefined,require=undefined;var define=undefined;var self=root,window=root,global=root,globalThis=root;(function(){/**
 * @description 全局函数扩展 
 */window.md5=function md5(data){return CryptoJS.MD5(data);};Date.prototype.format=function(format){let self=this;let date={"M+":self.getMonth()+1,"d+":self.getDate(),"h+":self.getHours(),"m+":self.getMinutes(),"s+":self.getSeconds(),"q+":Math.floor((self.getMonth()+3)/3),"S+":self.getMilliseconds()};let replaceYear=function(){return self.getFullYear().toString();};format=format.replace(/(y+)/i,replaceYear);let replace=function(){let $2=arguments[2];let value=date[arguments[0]];let str=$2.length==1?`${value}`:`00${value}`.substring(value.toString().length);return str;};for(let k in date){format=format.replace(new RegExp(`(${k})`),replace.bind(null,k));}return format;};/**@description 返回当前时间的秒数 */Date.timeNow=function(){return Math.floor(Date.now()/1000);};/**@description 返回当前时间格式化后的字符串 */Date.format=function(format,date){if(date){return date.format(format);}else{let now=new Date();return now.format(format);}};String.format=function(){var param=[];for(var i=0,l=arguments.length;i<l;i++){param.push(arguments[i]);}var statment=param[0];// get the first element(the original statement)
if(typeof statment!="string"){if(!EDITOR)console.error(`String.format error,first param is not a string`);return"";}param.shift();// remove the first element from array
if(Array.isArray(param[0])&&param.length==1){param=param[0];}return statment.replace(/\{(\d+)\}/g,function(m,n){return param[n];});};window.Log=console;window.Log.e=console.error;window.Log.d=console.log;window.Log.w=console.warn;window.Log.dump=console.debug;}).call(root);})(// The environment-specific global.
function(){if(typeof globalThis!=='undefined')return globalThis;if(typeof self!=='undefined')return self;if(typeof window!=='undefined')return window;if(typeof global!=='undefined')return global;if(typeof this!=='undefined')return this;return{};}.call(this));
;


;
// Original plugin 8: assets/bundles/slotFramework/assets/vendor/mpg123-decoder.min.js
// SHA256: 328aba976334474c772940f25ac962fd29b21e23c5bb96fdaa724335004d6978
/* Copyright 2021-2026 Ethan Halsall. This file is part of wasm-audio-decoders. https://github.com/eshaz/wasm-audio-decoders */
var i,t;i=this,t=function(i,t){const H=(i,t=4294967295,H=79764919)=>{const e=new Int32Array(256);let r,s,h,n=t;for(r=0;r<256;r++){for(h=r<<24,s=8;s>0;--s)h=2147483648&h?h<<1^H:h<<1;e[r]=h}for(r=0;r<i.length;r++)n=n<<8^e[255&(n>>24^i[r])];return n},e=(i,t=H)=>{const e=i=>new Uint8Array(i.length/2).map((t,H)=>parseInt(i.substring(2*H,2*(H+1)),16)),r=i=>e(i)[0],s=new Map;[,8364,,8218,402,8222,8230,8224,8225,710,8240,352,8249,338,,381,,,8216,8217,8220,8221,8226,8211,8212,732,8482,353,8250,339,,382,376].forEach((i,t)=>s.set(i,t));const h=new Uint8Array(i.length);let n,o,M,c=!1,a=0,I=42,l=i.length>13&&"dynEncode"===i.substring(0,9),d=0;l&&(d=11,o=r(i.substring(9,d)),o<=1&&(d+=2,I=r(i.substring(11,d))),1===o&&(d+=8,M=(i=>new DataView(e(i).buffer).getInt32(0,!0))(i.substring(13,d))));const m=256-I;for(let H=d;H<i.length;H++)if(n=i.charCodeAt(H),61!==n||c){if(92===n&&H<i.length-5&&l){const t=i.charCodeAt(H+1);117!==t&&85!==t||(n=parseInt(i.substring(H+2,H+6),16),H+=5)}if(n>255){const i=s.get(n);i&&(n=i+127)}c&&(c=!1,n-=64),h[a++]=n<I&&n>0?n+m:n-I}else c=!0;const f=h.subarray(0,a);if(l&&1===o){const i=t(f);if(i!==M){const t="Decode failed crc32 validation";throw console.error("`simple-yenc`\n",t+"\n","Expected: "+M+"; Got: "+i+"\n","Visit https://github.com/eshaz/simple-yenc for more information"),Error(t)}}return f};function r(){const i=Uint8Array,t=Float32Array;r.H||Object.defineProperties(r,{H:{value:new WeakMap},o:{value(i,t){r.H.set(i,Promise.resolve(t))}},M:{value(i,t){let H=r.H.get(i);return H||(t?H=WebAssembly.compile(e(t)):(t=i.I,H=r.J(t).then(i=>WebAssembly.compile(i))),r.H.set(i,H)),H}},u:{value(i,H){let e=new t(H),r=0,s=0;for(;r<i.length;)e.set(i[r],s),s+=i[r++].length;return e}},R:{value:(i,t,H,e,r)=>({V:i,channelData:t,samplesDecoded:H,sampleRate:e,bitDepth:r})},L:{value(i,t,H,e,s,h){let n,o,M=[];for(n=0;n<H;n++){const i=[];for(o=0;o<t.length;)i.push(t[o++][n]||[]);M.push(r.u(i,e))}return r.R(i,M,e,s,h)}},J:{value(t){return t=e(t),new Promise(H=>{const e=String.raw`dynEncode012804c7886d()((()>+*§§)§,§§§§)§+§§§)§+.-()(*)-+)(.7*§)i¸¸,3§(i¸¸,3/G+.¡*(,(,3+)2å:-),§H(P*DI*H(P*@I++hH)H*r,hH(H(P*<J,i)^*<H,H(P*4U((I-H(H*i0J,^*DH+H-H*I+H,I*4)33H(H*H)^*DH(H+H)^*@H+i§H)i§3æ*).§K(iHI/+§H,iHn,§H+i(H+i(rCJ0I,H*I-+hH,,hH(H-V)(i)J.H.W)(i)c)(H,i)I,H-i*I-4)33i(I.*hH(V)(H+n5(H(i*I-i(I,i)I.+hH,i*J+iHn,hi(I-i*I,+hH,H/H-c)(H,iFn,hi(I,+hH,H0n5-H*V)(J(,hH/H(i)J(H(V)(J(i)c)(H)H(i)H,c)(3H*i*I*H,i)I,4(3(-H(H,W)(H-I-H,i*I,4)3(3(3H,H-I1H+I,H.i)H1V)(J.i(v5(33H.-H(H,i(c)(H,i*I,4)333)-§i*I*+§H*iHn,hi73H,H(i)8(H+J+H)P*(H*V)(J-r,§H)P*,H.i)H+H,i)V)(-H*i*I*H+i)I+H-H.I.H,H-i)I,4)333Ã+)-§iø7i(^*(iü7I,*h+hH+iDn,h*hilI+i)I,+hH+,hH+iô7H,c)(i)H+i´8W)(H,I,H+i*I+4)-+hH(H)8*J-i(p5.*h*h*hH-i')u,hH(P*(J+,hH(P*0J,H(P*,n50H+H,H-b((3H(P*0i)I.4)3H-i¨*n5*H-iÅ*s,hi73H-i)J+V)&+I,H(H+V)æ,8(I.H(H*8*J-i(p51H-i)J+i¸7V)(H(H+iø7V)(8(J/H(P*0J+s,hi73H+H,H.J,I.H(P*(m5(H.H(P*,s5.+hH,m5*H(P*(J.H+H.H+H/U((b((H(H(P*0i)J+^*0H,i)I,4(3(3H(H.^*03H-i¨*o5)33i(73(3(3-H,H+i)c)(H,i*I,H+i)I+4)33i)I-3H-3!2)0§K(i2J,L(H,H(^*(H,H*^*4H,i(^*0H,i(^*DH,j(_*<H,H)P*(^*,H,H+P*(^*8*h*h+hH,i)8(I3i§I**h*h*h*h*h*h*hH,i*8(6+(),03H,j(_*@i*I-H,P*<J.i,J(H,P*8J/s50H,H.i+J0^*<i¦I*H.H,P*4J1J.U(*H.U((J2i')o5/H.U()I.H,H(^*<H0H1U((H.i0J.i§i0i')o5/H/H.H2J*H(J.q50H,P*0J/H*I-H,P*(J0,hH,P*,H-q,hi)I-423+hH*m5+H/H0H(H1U((b((H/i)I/H(i)I(H*i)I*4(3(3H,H.^*<H,H-^*04*3iØ1U((5+i(I(i¨7i1^*(i$6iè1^*(i°7iè6^*(i¬7iÈ6^*(+hH(iÈ*n,hiÈ*I(+hH(i¨,n,hi¨,I(+hH(iØ,n,hiØ,I(+hH(iè,o,hH,i-H(i0c)(H(i*I(4)33iè1i1H,i-iÈ*8)Bi(I(+hH(ido,hH,i-H(i-c)(H(i*I(4)33iÈ6iè6H,i-iF8)BiØ1i)b((41-H,i-H(i/c)(H(i*I(4)3(3(-H,i-H(i1c)(H(i*I(4)3(3(-H,i-H(i0c)(H(i*I(4)3(3(3H,H/^*0H,H(^*<3i(I*4*3H,H,i¸)^*TH,H,iø-^*PH,H,iX^*LH,H,i(^*HH,i-8(I(H,i-8(I-i¥I*H,i,8(I.H(iErH-iEr5)H(i©*I1H-i)I0i(i;H.i,J(i(H(i(rCJ(J*H*i;sCI*i¨1I-H(I/+hH/,hH,i-H-V)(i)H,i+8(c)(H/i)I/H-i*I-H*i)I*4)-H(i)i¨1I/+hH(H*o,hH,i-H/V)(i)i(c)(H/i*I/H(i)I(4)33i¤I*H,iø-H,i¸)H,i-i;8)5+H0H1I2i(I-+hH-H2p,hH,H,iP8*J*i(p5-H*i7u,hH,i-H-i)H*c)(H-i)I-4*3i(I/i+I.i+I(*h*h*hH*i86*(*)3H-m,hi£I*403H-i)H,W)-I/i*I(4)3i3I.i/I(3H2H,H(8(H.J(H-J.p,hi¢I*4.3H,i-H-i)I*+hH(,hH*H/c)(H*i*I*H(i)I(4)-H.I-4+3(3(33H,W)1m,hiI*4,3H,iø-H,i¸)H,i-H18)J(,hi¡I*H(i(p5,H1H,V)ú-H,V)ø-o5,3H,i(H,iXH,i-H1i)H08)J(,hi I*H(i(p5,H0H,V)H,V)o5,3H,H,iPH,iH8+I*4+3(3(3H,i$6i¬78+I*3H*H3m5(3i)I-H*i(r5)3H)H,P*0^*(H+H,P*<^*(H*I-3H,i2L(H-33Á)+(i¨03b+(,(-(.(/(0(1(2(3(5(7(9(;(?(C(G(K(S([(c(k({(((«(Ë(ë((*)(iø03O)()()()(*(*(*(*(+(+(+(+(,(,(,(,(-(-(-(-(i¨13M8(9(:(((0(/(1(.(2(-(3(,(4(+(5(*(6()(7(T7*S7US0U `;r.M(r,e).then(i=>WebAssembly.instantiate(i,{})).then(({exports:e})=>{const r=new Map(Object.entries(e)),s=r.get("puff"),h=r.get("memory").buffer,n=new i(h),o=new DataView(h);let M=r.get("__heap_base");const c=t.length,a=M;M+=4,o.setInt32(a,c,!0);const I=M;M+=c,n.set(t,I);const l=M;M+=4,o.setInt32(l,n.byteLength-M,!0),s(M,l,I,a),H(n.slice(M,M+o.getInt32(l,!0)))})})}}}),Object.defineProperty(this,"I",{enumerable:!0,get:()=>this.W}),this.$=(i,t,H)=>{let e=[],r=0;for(;r<t;)e.push(i.slice(r*H,r++*H+H));return e},this.P=(i,t,H=!0)=>{const e=this.W.B(t.BYTES_PER_ELEMENT*i);return H&&this.A.add(e),{D:e,O:i,v:new t(this.W.T,e,i)}},this.free=()=>{this.A.forEach(i=>{this.W.free(i)}),this.A.clear()},this.F=i=>{const t=[],H=new Uint8Array(this.W.T);for(let e=H[i];0!==e;e=H[++i])t.push(e);return String.fromCharCode.apply(null,t)},this._=(i,t,H,e,r,s)=>{i.push({message:t,frameLength:H,frameNumber:e,inputBytes:r,outputSamples:s})},this.instantiate=(i,t)=>(t&&r.o(i,t),this.W=new i(r).instantiate(),this.A=new Set,this.W.ready.then(()=>this))}class s extends((()=>globalThis.Worker||t)()){constructor(i,t,H,e){r.H||new r;let s=r.H.get(H);if(!s){let i,t="text/javascript",h=`'use strict';(${""+((i,t,H)=>{let e,r,s=new Promise(i=>{r=i});self.onmessage=({data:{id:h,command:n,data:o}})=>{let M,c=s,a={id:h};"init"===n?(Object.defineProperties(i,{X:{value:t},Y:{value:H},module:{value:o.module},U:{value:!0}}),e=new i(o.options),r()):"free"===n?e.free():"ready"===n?c=c.then(()=>e.ready):"reset"===n?c=c.then(()=>e.reset()):(Object.assign(a,e[n](Array.isArray(o)?o.map(i=>new Uint8Array(i)):new Uint8Array(o))),M=a.channelData?a.channelData.map(i=>i.buffer):[]),c.then(()=>self.postMessage(a,M))}})})(${H}, ${r}, ${e})`;try{i=void 0!==process.versions.node}catch{}s=i?`data:${t};base64,${Buffer.from(h).toString("base64")}`:URL.createObjectURL(new Blob([h],{type:t})),r.H.set(H,s)}super(s,{name:t}),this.N=Number.MIN_SAFE_INTEGER,this.S=new Map,this.onmessage=({data:i})=>{const{id:t,...H}=i;this.S.get(t)(H),this.S.delete(t)},new e(r).M().then(t=>{this.G("init",{module:t,options:i})})}async G(i,t){return new Promise(H=>{this.postMessage({command:i,id:this.N,data:t}),this.S.set(this.N++,H)})}get ready(){return this.G("ready")}async free(){await this.G("free").finally(()=>{this.terminate()})}async reset(){await this.G("reset")}}const h=(i,t)=>{Object.defineProperty(i,"name",{value:t})};function n(i){var t,H,e,r=i=>console.log(i),s=i=>console.error(i);function h(){}function o(i){throw i}function M(){o("missing function: INT123_compat_close")}M.C=!0;for(var c={},a=[null,[],[]],I=new TextDecoder,l=(i,t)=>{var H=a[i];0===t||10===t?((1===i?r:s)(((i,t=0,H=NaN)=>{for(var e=t+H,r=t;i[r]&&!(r>=e);)++r;return I.decode(i.buffer?i.subarray(t,r):new Uint8Array(i.slice(t,r)))})(H)),H.length=0):H.push(t)},d=new Uint8Array(123),m=25;m>=0;--m)d[48+m]=52+m,d[65+m]=m,d[97+m]=26+m;d[43]=62,d[47]=63;var f,J,u,w,g,R,y,b={j:M,c:()=>o(""),b(){},d(i,t){if(c[i]&&(clearTimeout(c[i].id),delete c[i]),!t)return 0;var H=setTimeout(()=>{delete c[i],y(i,performance.now())},t);return c[i]={id:H,K:t},0},e:i=>(t.length,!1),g:i=>52,h:(i,t,H,e)=>52,i:(i,t,H,e)=>70,f(i,e,r,s){for(var h=0,n=0;n<r;n++){var o=H[e>>2],M=H[e+4>>2];e+=8;for(var c=0;c<M;c++)l(i,t[o+c]);h+=M}return H[s>>2]=h,0},a(i){throw`exit(${i})`}};n.I||Object.defineProperty(n,"I",{get:()=>String.raw`dynEncode01dd21c54d17j¢>¡-é!Dt 9&W U§®}»/6|ºì,ÜÐ*ÝÙÂ:C#ÈEÅõkµÄqÁ¹BCdq$GPPxÚý¾ý­B{jð=M¸ìOÑ-Ia,¢áÅ	Ó®µôEù= *f®Ø"þèÒ ËøÓÉÄàó«¤¡ù|þ«ôñ«´ÁÜú¤«ìe«p±§W6(¶¢ÏÑIZ»¥'T28òÞ6<±*h²ëHñ'q­©ññ+9LÏ8n'!ò©åP.Þot__¹§ü 0J]ío Zï óÚºM´õjÈ¿n)å½ðN\]óÐÖ]±<¿_>»5Ûÿ-'2[HÕo×m}&­xÎÿú&ôì¯ /ý§iÂÐÈRB÷¸M°G÷;;T8kB7Ã¯QûzL´¨ÛÍD9$EnA¶¸ûÃv4òCûã¨¾YcÐ>t2çZéÂ{¬½«K­ØB6cvpR=}vªã4ÀP¿Ø»ä4ûwÑ½®üªä~Ô±CÇJÓª±.NÉ\*±8jècª= |_VÃK×ã2)§}¼gb/!ôÀV~:0-ÈÀu²Ì/@LO*ÃL1?çRM ljÀw
K<î	¼G$ýÂ¿¸É´g¢ô°rTªS¨Ð²éfªm½y
|~¦À?Ä;Ä¡gmjê'IhÅüO0b¢¹1ÜÎhj÷ÓÚ:rþ^KÓYÙºÊ¹«IÚ
Ú©»WõªÁÞ\vvw+Ô^¤hÄ|´Dl*6¹2ÌðPF¼)\HQcQu%Ê,Jd¾7«Ô=Mº®nø½ÞÈö6×­Á?ì EôQÞ¡éRÝ¡W*muú®¨ ñsÊWÂÌ5Î= v[x¨}\¦Æã£Q>wÀBÁ×(~;Þcí¹«
µËMµ;×ý¢¬²ùä#ÎöúëÆê<|Z,ªq1ldõtpNnÑL³k?Ü=M ¡Eõ¢ñVYÏ þH_Bî)/¦'aP= Ôæ|vWh ÎKQºP¬l¾ß®mñ9ÊA¥»-BN*´.bÎ)SÚ!AY?b=}Ù/ii·J9+cRòô
Î¤íÐäsÊsùH43í~¢±_r¦Îrýâ~d8c¨ÇMéBaJ-geÔz
 õPðð¿ç§d'´1; {ÑÄÐßëvïuøOªf2ð¿áâ9ú¢)=M2Î=Mí}YíUbia½øy9Ø'{Rud Éß$Ïi=Ma±n·ìæ(®¤ûÑz9k+íB©ÀòÑ¿ÕÇ*®ò[.¤íûF~¾~PËX¤7ãÚTE­N=}¡?½E«Â(c#§	åq4gQzx÷±[
hë¡eYÌ9] ÀGû¯¦õ0DÖmC=MF³XpÈ¾XéÔÏRØïwµð¨ÉrH~ô8ÂêxéÆ«g+oQXÌËïvòpØ=M)/"T'48!QòÑ¾ré½òR=MPx®5Ë»ó= à?k$?Vª= ¸Iæ§gY;ÈQ®q¹¼"t¹§;	ÛKÖ= VtéjÃ(ÖaM9Ú3°ËTÃ3ë=M¼ÉâÐ8V¥«Ðë¬|òX3¯ÐâIËzb}h&~ÏÙÄ§dÃMBL¢W= vÁÇ&ÏNÉ	1²_èÆðÔ£.%3¹ùÞ^9]i^5ß{¢3{2¡Î;pmþænû?Uï:Zs0£	o7âëü2µhý9f×I]>bd ÃY6Ù$ªâ8L=M/´ôÔ~XMºM:@ÚçW?× ÁóË]Ð\ÜæÑF¥7. EXU? ÝxØ²ËïËªÐÈó¸3y!Q¸*H¼ð¨·cèâÉ´ 8bÛW<Ó6§ÈgòñÌ& ä;;ÌÄ9 ×³þ(\,zþj}zS6}µlkñ4þpêñ?0¹´zõíoÜL¹n¿ÜäÕL×[MZ>ÁKæµIØ¥pÀù¦Ï ¼ºòÏ«ð¯öþÞ$-
nm;hÄzEL´9¼Ìû ÅµºÎ¥½Â©»~>µzt[¼É	NèUÈ­fØÔn£Ç]e?¬ogM¸»ïM.}:ßñÄðã¥½á<$KÝ¾×^ý¹¤ÐMètÌZ þÏcX= m­Éqâ%ãa°d×
ZÌA*¼L|àýw,ØnÑ&+"]ìÂÏ(/Ñÿ	
ü£#bÊî´[?Ñ'¼ É>L¶yÏwÔBTNÚÔ]÷V»v7	Ã_^çwhshÊ= N´¯ØõxJ Ø½ÊØi
Æ?èÇ"X¥¾ð§Z<0îA¶õXXËÒûÞÆ[=}õ
Ç5ÙUùLìÿÙ¦*LáôöÚ·éXö@,ØF¨JY¹(õßOû~÷LÒkjU @]%«Ì= .ý ½8¶ÉØúlqü5ðWÿë@ÌOöS¥¦q
D¸DX$Ðý-D¥®Ç0ëjÌ4F)%¥µ/kçj­E1Î¾È·Òr÷ë½CÔ-h&ðÅ:?¿;A?elB¢ë' õãwZwüI÷Ã&çêh<xYñÒÿÐ©=}>Á¸L°8u¥÷S'º(ND½ú2YYü÷4AYÓ»Y¥©ß°½xuæJS½c´pbiucb©Ç^­¤cÙ#¥û~X9éÓnI/óøæ!OcÇLëSqg¬7®úkê¬ù~ã+¶MEö£i>Ýh	4h6ª(¢¿+ûÒùYÉù³B<\ùèÜBO¢wUo³up	£x/¢ñaÊ¶nÿv>^èÃ2Oüª®o[ù?PN%Ã¿¥úýü0¦M§HÍ)¡ÈÊ>ueÞêJ<ø­RÐLº]ÆÝàãcï¢
ô_äéË*v;ªñ±Ú"é[= [^.]OÀ%·° 5lÁr6;À3<IÄLÄôÔÓö yùÐzßH·U´= ]| @CãÌ¬¤IåÀPÔZ²w²§dã*.42ÔQTR4ªÁ×WÔÓNâ&«À®(jâø(´r0Iíc_µ,ªñsÈ["Æ. ?­Bj7#êTÚKÎ8ÜT7HUØ,Û o= ªs®=}Y¿<<uXJHÕrü×£Öô9ÍAáªÃD¿Pq÷ÒwÕ03]ò5 Ø´Ôê²ü^pkÈÚÆjðôâñêzwÜè»sÿ|xX¿Ëµ÷ëÁ¬L´Î¤wàÇä­4x½(3:0ÂËU¤ûê÷{öáÀH®<QÙx¾ÇôèBÌÔ4´#mÞÕ­Û¤ òch¨d¬\¹æ)õªC>Ó*ed]§níö¸?lJóC^fwÅí¡§~ä<T@¸§ZTû[grÖptòÅîñO¼|WØ©æ=M,,ïx?^À7ÔúYPó@ì 75«JFhÜèMáTWeÆò=}3e¤xÇeú1Y«ùÑ½'$ÑuüDû±tJfþvHV	´ëê=}À¡~Ñ´kíå|W#¬ÊÙ¾=}ùß<Pà
V±aæA¡¯}ä#w×A¶´SxûëívÉàSXãë)êq9S9¼~ê'lÖPÂ2Ê±oàý¡±où ÂMç.ôÞ1os¯N°ò¼1£¢8Õu:+doOÈ°iÖê9LTüh®=}Êà22>¢ÿøIáê (xU_>÷À¾½ÏéÙ¹Â²é´ÄòJ4Nºo20ÎUkgNì%Ô&GSyf*ÃµàÓäÍ´rò#6Të½Ê= k½Oñt5ê;mÓÝ[¯g'N'v]dC²R­+*f¸ôw1´¶sµÿÉGnËGnâ·9DMÓË¶X@{¿'iÛ]T®ÐÕP+f= ë´¨nu»Àôï½ü(¦&ý[|çAbiD¬ÏÓSP¼5ù]×1Ì-Î©94ÓKÞÔ¡E0Uy2O,Ó/!sÛË4J#ï®Äd;´Ä·ÿsg=}]ØÊ¨èl'³x>×¾~^øë¿¬H¯¥gÁ'	ù±"hRSR5Í-ý°{.<l~Lí¢ý7ôgÊCâNùü
±ñy 
y¥_¿SXtRðNK{2î8RwãÕ9h¹=}ç5û½½o´kºÑECì¹jÜ Ã¼S eNô-¯³^dgR b²ÈÁuE×<®mù)xK6ó¬ ¼ÊÕÖô;hSÃü\ÖÕd|ÐÏiM ¼Â\5Ím|Ñcâ<Ü= Hx}d½IZ¤x,©Ù,M»Î¿öôù7È |ê»¦qðð¬.e»ËM%Pè:ÓÔ@Ïùûð ÎWååß¢îôIýQ<|ê ³SJþÝÛLõf¤ # ÓûúlT¥ÕöÎ0,£,, ÄüÌ+É!1üAÝû×¥nî>â å÷%{iæýÊ¬	ö²YP¤3ïÞ»hå·xµ'¿Å*)Ru´Î¼æ>ïQYõb/c2þßgY²?2pÎ1T¤0GEºTìAñº=}©Ò¢qý*æ!ÈÇýà^#XT¢ÊY<,SØ3]¶z_nPÈ³Õ= ÏG!V³µvx
~3IìüàS7ªC¿ÉQs¶Cò§0ô¶;kw*4Ñÿ,$Ê¶öòJEDÐ¸¶À%A¤èSüChò:Í±:¥$AÄ´I<"DfáÂ6=}Ãªy÷Ï¨h\ÖgûãJv2)½&=}Wj:ÅÅÝ÷x;þ©ÅÞïuM6ç2õ¨n6ËHãläþè©9þ©Å[þ©èHóG¿g{êvæPËÌlÅ·Ô(ìªÚ±à¤dM_¬àMoÇ^"K¬äáW}¼Ú­óøJC>H+Å°MN^v>gÔ,x¸(G}ÇË,v´(HSv«jX>l c»4Pê,=MêùaIºúÍaO ²É§w
Ì¯¤ ö<¢I^Âô±Yº¦m[cùÄvFõ7àzÐÞÒ±êqö¨cXgætÅ¨øù0JáVí@ÿ0K(uc.Õ2ÑUsé¯kô·ÎÒ¥©À|¢Eý¬v?>D±Oã®C×]tÇ³w¢Qk\SAÐuäã:¤ñ«NC±)ÍFÕ|¶ùJ:²½Á²#môàÆdô³AÇ '¯,4=}åJn­óncoý§oÿWz¸6>kx[Õ³ä'KØG-¥©u¥ÖjjÇd<ýÑ±Çó,ßILMOG ¥Ð^ñ¢[Ê5.y¯fQ¿µ~
 
ó¤s³*çè¹	 6	GOïù¦xpÈ5Ci¬à±¢Í=}H2?Õ¶CTö{
#C°%'E%¨óbGµÞ©fuGF	ò,´É	§kÀÝaáõ%!m¤'p/í2âgí·]­ã%¨BçôzÁÂ÷Éq%j]µÖUÅÍÁ!(k7%å·Q	wçü¬ú@gÃÈV*ÖIý¶ª6®oózE; ÒBæøéa|x0$ÐÈV:ÖQý.tÃ%!±ïªÈak{5svrñ;E{K§0Yfwdðªø^á:wà®ï±ï% ÷¿öÊ5ßÿá_íÖ®þùcfªCÅ¾iI½ÎßNßHgè·ú#³ZXrè´XJÜPe"aÅÓ¨çg®y(¾¤EÍÕÜdñüü¸?ÑÀ°_ýKqè¾£Mn£oH%8hôÎ¶x*Åñl::§2Î/OÎ<ßYÌ) ;Õ?ù÷ð¥¿r9T/Û!Òm4Jý^I è½ïÏ]2Ì=}òhD0&'9oñ'gâ«r~eb= ô]Gök\ÅPVîòç+¤5í?°í?êT9îÿý¾qYM¾ÿmrh*(5òBå¬!z1pF]èUßjYw=Mw)ð+w-þ*%&ðm*ö²3ÂéÏ¢¢¸©^vâÅµ?2§ôµ ×¼â2Ü2CL¥mTþÈ Àj©
çÄo¿>E-müíÎmF¼]RäÃ K·çÉ0à¿b÷çÎwªÏ'Æ©°¦äÊ¸%½á:¸E(Í7Ù¹ yåû§Ï
æqÀæ1½åæX-¬Ó-nÔ^×NZÐmö±£ ¤ìÇÀE-Ï­#õãÒìêéÇÞì2ãR¢ HãØñÿµ®ö¯X#;RV=Mµq àOÞØfàôJwM¡ ´ÜÎ5ç+êqdÑ^Ó-UGíS8&- £Y =}(£ÛÒQz¤²g<ñÔs Õs,õ±ªñÌ×[~+É= î	âfÛNÚEyÐ´ERrHÄV$q²seYFÊÒkqÍÙ·ÚÓå©dJ
oanÉkªoÑ=M÷$IIñDOl(ÐW?°+ÊÁ1ª?È½*øTEtÆoÞãû5@¸¹	¤î//b[»Â$9Ì+¦j ¬Y*Eo"·^Elor~ßµÉv+TN?Å&æÊp¬FRiaRëhçY²y©ä¦9öëRdò+Tú!³Õ>£hPÞ¼ÿëý×?pèý%êoEá^i \á²Ê^lël= 
ûygöjUÂÔ(1¯I°Ì1Èð*.ÉLPJ¼
7/M§,ú)â+è£ªá¾CLû^#Êù±¼rNÂ?ÑÚú@ÙºñEçº&¼àîKZ¾þ2aìjSzL	®¬)ó~ñdlB¯æÕÎÍ ¤]¤å>= ôS@¯j$½£QÉCYàÑuÝxÓKü¼¡ÔÉâÓ?^f[]m´@JÕ¡ÀÅg?:hÉìÊ#}"ßÃX.8<¹s]FÈ()×[ZI2-}LA0òÏÔöMæY3/q-ãþþúGareOR/&{X\?[òzÎÍÕéÌH°ã}Â:ûä«8æ= S°wîEjj»fLa,¤ý»R0õÈj÷a0ÖæXÍØ^epÿÏ?Gºåï#Zòl41bïA÷me§z	d¤+ 8|ük½¤ÀÝïÕ5ùe<kX´ìMÑë©
<$àrÑú­ ËP<âmNÊ¹ÒIí²ë7«_¹ýpvß÷c9JÐö?ÎÕ¯à%J¶Ç'ò)²ª¯+ÀÛêTUÄQÄ/^ùKQx(c½(ó¤X r¨NoïyW:Rj1©= ¶©Isg0ï¢þm	òÎ= gA¨0#Xµzù¾¶r6ÆC½KtÀûrAøÖw&4®¿	ôùüZú±|Àoy&â.V\KÃWÃ±Õ }×VÜ° Çé¶/¯zzªèÚÏmo´weRý»rÉX½íM2vDI#xÑ.ÓwÒjü?x@´oÅQ©bòMÄb¼Rä·Ä¿ìAQA,%p"Yô= þÓ¶+ý©cÁí·óN3NµK¯ibmg^ Çï,Wüy1ôís[ÌÂ4µZ;>@gÜdÓ=}8·¦TÍIøz½Ù)vñòiú;¹°#)kü.ÕËâWï¬òF·<ÊNHg7Y|µÜK¬/Jüð3QIÔ«¨f$rjÁ#ü·ªR%@ÆÓù¥P%ZrÂ+jã²¾TfW«.]º$oõÓ:ÝþãÕ]l ýÀ0£	ü°öÏ²Ñå ¨ìyìíée0Q^¶Åÿ^Fùg5¿íB¤	»ö
U²ÏBà­Y%´¦Î>¸Å4d|(7©kµm³Í@Yô÷u*" &jr ®xá¹¡>2Å~£ªwu¯sç¾v2@3@Ñ?þÇ7M±²ÿlsÊ9»^¾Õm2À'#R¥UJU÷Ù;/È]cÔPÚC\>*¦/¾Ã= 6rÇj´è8hÌeadMYyè¿]øÜhWÙ~Ó=M÷+ÞwGñÙ¡ £ê,¥ÝË|îâïuñvæ=MY{æ<øþLÍkÌ%"®uû24@Ï6#Ý³.¶j¼*zg·(«Ú;Ô»Âoôw±Ì¨6ÀMÉ¯cÇÍ®õ}ñÒGðu}ß¥öÛWD1ê@dEáÞe#ÁuMJf5\ýE­=MAL6ðóRç¤sI	gK4P¡ pº¨ñr#+'ñö8ýXJRh|É=}_õ
/Å\Á/³Iã=M¹N8÷æp«~ýÉB-jVáaíÔßÔ8/Ãª¡Å¥B<Öÿ¼ÕÜÇ¯=ME*ówófsYrûk¹Ñl7²HÛL$ÐòÐlùIwi¦7½ºÚbÔ;ÊÜÌÞÌ\Û§£êP[ûö(ÁøÃÙBJèÇ<Ä²­ÌÕIð\i×?¨Â¡HdSèÎ®fÝü²¥~Ì~¬8Ô¿E:IQj4¾§piz½êi=}·Îft=}3+Fdb@wñ­¡ÚÑ,Þº4ºZß·Q°¿·O¸JºOò/pÉ3¨¹sz×2f¦Y¶Ó´
ùó¦ºÔd}gÁá/ðDQEÂêä8|¾x¬£|{Djb»yª)DþDKtÉ¹¾H×3Ì~f§xæÑ¼*q*ñïP%xR3ð¥h;µÔ_,ò«Ö'FÄÚäYuÐ{$~Ä3Û¶ôT¯	VÜ-âòaÙ7føB$¦·/Ô-S:²v½ÄÛØ»ZÇsrÑAØ¹håßtA>i½#ß¸ªlÞ°æ*,¯F³p¯= aÍ3(ÿå-¹f¡&bÊkz¡ËæÿÀÿm¡z!>êÆf¯ÖP,p!6þfpõuÌ¸Ø¹ØK2¶ïAöF²ÄT|ZÓ¶Ä\ÌZôzHq¬ê"tBMA#UØ0eßjÁ½öOØ>%l Ná)ÖÏ=Mâ+$k }ÍÜÚr[í¹	ä²ë/ß
ÔPOþ³äàÑkñÆãËgòOî7Dú)LOÖ3FeÐDÖ!#Q¹5a,öÖ ßt>ä9)^ Ãì¥×Q¦Re!îb¹Ñ¶ãEnÈ;ñÄ¥Ì7DcàåpëÃâÚÞn>æøtK-©"W^fÇG©3Ö~ÉÄsÚ"«¬^?«Rgm¨ÿìÝ½.®NþâE!Á.EMù&B$* Ð2Ô@Þ3Ð»,ðDùaB±QxeLÅ3gIQF	­3Ó¹ÔîÌQ½<ìW|ÕE®ì¸hlf%ö>bñs:ÚK¯¸ÎsD×å§óMÔ#ÿóØKO$=MRÃíor:+!óòâHH!«ÊÖÞvo|sè®§ é¿íñ~~«*wâxÞt¨¥{và}åÝÑR4­_Hpà¶Pq§>µL,Ä¨=}ãökRVS´DòëwvÈ2cÒÉ3á±Qî1pG"= }²²%Q¡A	äÐ¼ÁàN?ëïR"k~qèë¨¼îj©p)tç0Ø¡þðdvìRC.²ulê;P(ÒZI&ªPþ8rÓðHr(gq*'ë¶õ)r	Ö+ØQØ&¬sºkÉÔÖ»hÆjéý!¯ µ.øgÖ+¯><Fë^ñÂLÏ>6{­SÄRÆ*[ÝM³?¶i9_AìÐù©"¡?_3(æ(A:Ò á(-ý°,ý©õ þbÝWª.¦C°íbuUgQ-Nèûè<l!A¸mþC=MGì]Áü[¸¬eÕê;Ýà@vñpáéÝ¯ uÚRÉûjôt^Æ ¬rT|NtiÈPqûxÓ!ºQ= Ð²»1eFÎÀ9TÎSÆtÎ­ÞÔïöë?öê=}c¨¡ü|+¯bç/ÞGÝ¡ä«çwZØñTlËøi¶X\>òÆÞCØ«ÛOêV¤ä¨ûër6Ò\¿/B×ÃN«Ö°­Ð×{èþKlÓk![øûK|ÊXt:;YÄTþFî(ß­½ª +¼RSD«¹Vúîú!÷¡Ôû¡3w]Ø{%q,§Ì Nv7¹Do¿HX·§¥vã°Ø§«Of0ìwÆ¯Ô2DâOvôOÎ3VgtÔ4SÞ7{©ÙCSc¨ÌlOf#>B	+©ªí??åM.íhâ=M-Y+9Ë= 3%«Õ°RµOö= Òã_rÖÅªS¹Ø¤Ò¨,¡Àle?¬à-ªö½ßíyPåHÑý¿T}· È~²?éùu»)£"_FSVËó³"· \úEúÂ8÷Fln3_AÍí¨Õ¯nÐiÄÐ<òÍ«×¤ÈÅt¨Ùç|tkMÌ¼áõà
GöÞ9"ÄØSWJ·ÒUæTñ;ë0ÔrpXk£êg7H¥wipy¼à8*a5=}ÙÀê6DoUVýQö0cÔFaüP¾Åã5hDå£Ýà}âì­Óýõoñø¬º ÂøôræË*ziÉ¨óÑ^<FÌä=}íRÆ¨wN©¯Õ»>NÄIÛÂ¡öqD=MU³5ÓAàÌWc wóÒ¦FÅ¢¬N±H­hLôÚèrÁäpÎÆï|¯V¨{*2KÍÊ¡ìGrÕI
rÕSµ5´½® }rëý|"kß,Ãê1ÖZµ§V³à|rÀRk\ÚÄ1k\¹óZ[4É÷wÎBÌ¦<LJz#2Ë~z¾ü¼°årmÜÕt[½_?M©~°÷Ê3!9ÙµîglâÖñÙÉåV¥ûøäÐë= ^Ô/dxk0±:ÿ·6|ÁöÃ¦¹ïY«%«j¬V»9mÐIÄ0«|P{=MÄÆS«¤D°RË°oX|3·%" ßÊáo.xp'øG§öÅ¢p	cWÎ êIæså³]ÆÑ](h©Î«Og(iþhD(_ì)êÉØpXrß'È×£·©I82= VDÅªÅÊ.Û.²ÙLô» u0aÄCÎèºY³PgFùTÐ$h6¡W
¿¤_¨~È °f\¹ªû¢S·ä­iÎo?éµéµß#Ücc¬½cpð= Æ^¨yx½ºåa¨±#*=MZ¹åg>øgé%jßÿâ¹öÞý~¸ëB¡ö¦MqCãWKBÅ}4øuîEî]}ÅAÊYëé¹óêºó$&øìÝÉî3ûm[g6¬<Lö^]5¹*÷~Èi:W= «²CLÓËÐyñY¾ú¤¡"FUiçM³i+z1¼Õ'es[(áíY¨ºßÆúßÆÊBcqîo¡=Mß}B÷%5D=M/àæE¶ Ñ¢­_­/®p42©ü6YJÿë²¢)h&¸çq2º$L6^ehêk¯ÏÉÂ0Qoé7!Q<¤|újd@+Ttöñ7©L¦u§â¹-o@N8Fà~!7D»k SH÷nÁLù_,­¹E=}=M¯Ögbþp<#±f»ÿ3îA{©ò¯Amk§°ïåõêñL¶é±ó 6¨X¢¸	ó¾·Ç®ÂvÅßRxÒQPÝKDÂyê×zM(ª£wê:L¿¬xoGð±Õ=MÁ
Ù>fE2@ÙLÆÏ³0fÏö¶ö¯j8ßcåsHýÇ£÷.DÊMôEU¹£ýWW¥@Bü<£Mt:ôP=}CG?RÿTÕm¹me*ìa¡,7gFÉçÃq¦0ç	3	 ¶óv0Øë³h©¶#Aë«¨yÚ´BÿP& D¤ÿPóÿPii|±2n8¸Tý= ¥yÒÓútæá·Q '¿?R
	7¸mM2|S2+ñ%û¨áD÷¶ Òî¦ä§N_-ð)oÅ6ço¥2Er!Ó
2õ*'ò_<{r!no}+âujèxgéÞóoëL­sóF´Ð2)¾+LûÃýØ´Þ¶´ ð= ¤ÙOîPUìR-Òøb,rÚ!kÈ²µ½}¿êç« ;ÐzW÷· ¡= ÑaÂ1W=Màh	0¸.¦[-Âi-úNd1¨(¯þ+?'Þ&DV%[øèycÇ?3* se=}ä^oùFÛ¨èæpp_&+ÿ°âä÷+2úîç´'7êÉðÄØ6kâ!­Ãò=M[+çrÒÕgÎsÎ¬¢4<V¿ÃQª4v@¨A|&IõO\AA\Â¬:&Ã8L½½G°"ÌUÌqÍ= óÿt]Ö8b2ë{Õ¨Ý!Ô8B·«â«®F¬¨ÄÍ§QÆKÐÅ&èæè_&ð©xL2®æÀõæºGï!taCE1ÍÌ1Í.¸±$ªÒ5ôac)[ÏÖ±g¬Úk{ëÙÛÀÊy®F 4(!=}jITqº8$ó,yTê¤¨<·©5¤Jl9µÀ1#­-#4D¥b=Mw¾yõ=}vÒë @ñ©'¡çF­HYögfQpÍ9ÎäÔzÿ¾é.	â5XOÊ®qÓ4_wÜ
\»Õúmq:õó&ßg^_Gÿ¹ä±¥w²RÒóEÆíâlë¨L¹õ|¶É41Ó.>ï5ÐN3sÊë4,7H"c´#u= ¸XÊ%«±|üü &5 ¾Êñ~éRåÙ¾Qøô]¡~ù»Øà¯= ëß !R1ïõÃ@9RV=}Àu[ÿ%Þ9ZRþ¾s¾[ÃÑpÈ¬6¦´Ãø´Ìï©>äÈMkM= $1[ÏUî¦½?W¼[OÚ×þd!ë¶æÀg8"×¢^wWû±äár<¨óÏ+k£ñÿzsm\´wm´E1óúîß}L\ö§ïcÅÚÑäò¨º¾WÏÿX©#wD~é2Yú|ê·Êî%!Þ b¨ßJÄ}_OFHãId''>ý+ªÿIõÝ5ö4#C{§úoaàËßBo÷ïÐ
¨Éh0;ê1Sð²ö= ÆºjûîF= ÿ1 Ù¬)EMÐì×@OÆ<ªº¤z¢1¡a|L[tîWW·Ho/õ"ðÙ¬jê+nR}ñ= Fè=M²¬Ùè1r	L¨¶'8h!7Ô¯ìê¿ïì×5¿ûU7ú<ýÎ½úÉÎvÃCh"6!4!ÊRM7RÓ¾é²v öPë«µOåñ¬¸¯ º+©u§Ew-ðØW.ÔH{7-ZÅº:
÷jBSì²2Xòæ¸³3=M+¸ñãîî3ÜpÛ4Z*½ô0Ofú´§wºX]ÈfSÿ1ê·MºXRw×_ØT4¬S±ÞSè
ú÷ÖSúhæz÷j~à08ÁIX8æ
OH¶âäI%Ë²¸£wï³<&K÷¡æúËä·	V*±¾Ó/L2:¾agf-Åd·¥±å1e¸ùAi^¸·ýý¶¯}Kæ©=M2¿?mK_a§r±Ýâ®ºéøÞáø%¸Q%2vÐf+Û!­Ñ;«þw UþøA)<?±´øðu^·ðñC©q»u¡éy³³»ê$&½¡¬R×¶ºZ+æýAB²ûmÓ¿[êG¿^y±ä²
2ô3F,ìd¾xþñ2B¡e¾'VãnÍ'Ô²LrÒ0­ZwQ$Ê½-ò¹yÕU0ìÆi{O¥ Ñ©ÉÆË2Gg8à¿À÷v%K2<R+§Åº:Óª
rúI[ÓØúðÑÞ= g×©z2ez,O
âB¬.îLm×±¤¾êØÕX)¯×í\.ú3É7ßç¨ôÅ½QT3ùãýzÙ>R°àÃ1%ÓØÝhÿí\tÔcÇÆî¾ ö£XðW¨ë±AY¦|ÎRâ<½Í¿-Ò~cO{K,¦§mçB°Äj HÀ8órãè=}6nß\ßàÈ+Ùqð­21QènÁñoÑì.p¨±ÛîðÊ¬a9-gUpüjâQ8zõÏs»Ä_=}pþ3=}ÚT2\ØLæX	¬ ð ôW1ÿ·ìîû6
~~IÌ.þ{?À7³³¨­¶¡	F#3­ªxedat\'EññzúIµåäxü4ëä¾Að±×â¹±{Øè¤üb¯ôVJ^º:â¸EúÅçZÆl¯}PXz&ñY5= <f-_d5·~Ç3Ú#ê¯éöGêzoç2Möè#ÏWíÓìÃS#jÅ=}^k=}ÁÉâáÆl$áÈ¯ïJº»ß¬Ñ4ÌúËÄo
Â({¹C
·@¬Â¾·Gþì¯%ù¯ÍcGì-vç´Dàwq¦Ø.ÝýÌ7O9A#¾àèË?ÕE.= 'óÙ09$ ?iÅNQ ÝoÓòùºà%eñÍÑ± 5I2ÏÎª ü«¿³ê ©ç7CÅM¦©{6 ´ù0lìkú9L51¨iÑðe+Ú3OFRì%¥À{T
~Õ®­{a/¨CY|TèÐ?5®_"5ÑÍBôõ½¢7øÅ¹õj*ñû*9\¡KG¹Ë=Mî®Ú9&[¾´_î¾TÓuVò3hB;}à9ñÏ>îýcbH°dó9k¬!Aêo%dFaoDf4êÇÉÞ¯È%â÷õ£Îë.= ¿fÝ©"Ùuh²ÆU¡2c0"më¤¤e¹Õ]º:Xõøh±Jóâ ªyÂ¬Ùî÷Õ=Mrµûº9ó"'4/AÙ]U(qù¢Yµ]é¼ÛÃ©
= {ë®A¹Rk¥['(y÷%16bJTJª÷+fprP+mÙã_ÞÍq·ÝÈ >C]8!*VýAÍQât¯çñ|$tbá3Ïµ2¸éâÒ444gQ~x÷¬ó¸¢¨"UT
¿:-Lü{$ÚÂ­"1Öohu\íÈÀÿÝ\évg¢l!8ª"±@¯û !Nª6ô±|VQÿ§ëoéWÓ½Ój¹ö1P >²öí@ÃüÚ_áHÓiÆ¦{®x{Z.@Ëö°ô°ðQqþM+@â/«2°.Sr
¨zTxûx<´¤¹AÃÇ´±@Ë6È¾Ê«ªÏýÔ%Ònä	F;;Sté	XqM,©?vÀïªìÉÐ)Ó_y PÔ]yØ1¤Ô10Døª(årMã=Mú£Ç,\ÕT2D*7R³}2~rª3ðfb%ïû	CÕv¾Âköv¨ÿÂ[-iQÔ7UÔµz*cvmÃÉú«>CB{ËÚ
»"vÍ¸|¦ã§÷H÷+v²zØdw5lQ9ÿli·p¸]ÅÏ ~å¹!ÏJýJ ÝÁ½ÃvnÊó{QÄ¬ô&ÿ= !ÄqÂ*)#¼m9dÙCýªË$N½³ËÛÊoBsàÒç,IV?À"ÎaKúÊW äÈÝÞTwì Ý£u°x!^[TNÀÐÃ¤yªHixR©ö¥#úæFÈ¢kw4\%ºó¯_q}é¥6hûÛ¾x*l»wÑÅl»W5ân:þ³÷[°:HÕÂg/H¯7´þ1DÓ¹¸4|#¹*I-²dw^Ì3 
êX|pÞz?åß¢Ás­ËVÅ)­,Ù®Pó- ôæ;ý!ù3[õ(Ìî·²@p¦% ó+6X¤zBs]¨á ÆÞ4=MÅÍpû¢âÌQd!VzwUQ¸= ®= = y Òc ë~å²;Eó·}õj2@ç)3÷W?%óf8=M@!Ü¹RQlÒr¯Ä+dÂFó7ÈïöºÌÉ/[§5Þ÷ä$=Mô4:}ôR5ìM¹G22¸¯çR¦ÛF²TÅÑ³!Ô¹ÅÑ{ðúS,u*èZHW7$û×à¸æ±Kõ^p½kÕvÐãõgkì|/ÿý!Ñ=}r]ÛÎ[¨¸?¬nMæ^÷»´DgF¡Tn"l½T0õK¶ïÆfPXµL!/4FÆjÖ(BêôUOI±6ð´Õ9HÀ'19teÈy¤R­£ûL¸H9 RNê¤Óñ4;<c@9X¬jHLê9²Õ+ÚÜâ´ü¡ÿzÚ0÷Ù0ù/DÁïæÛ	Ø­AÛ<#mÆ+Z÷fÇ±VþéÂýC÷tßW{Iô» hÃÃìetø¸=}!Í¹Dß®¼
?ï}[ÛaäKè.0¯à= ëj««¯½Àáùÿtêw²WÈ+¦_&Æ¥uÀ4¯RËFï¯Wýyuj§¯ö²q{7kþJQÅ°Eï¸;1¤ÎØ·&9¡g= ¼õhLëh¿OíOæ/+9 æuEG9
C¶Ðjþí«c.Py)©1^CØ¬£U7Íú.Æ¬ÀÜ ­e;ó3±¥(²n°ÌðiÎQ±NcdØMGúù=M´¢ ê2¸ïNsmÎt=}²Û½dÔÎ¤àW(ÒQ|Yí<[Û»yÚF54Ç*DS·/a@(Xî½4 Ë0P^.yQ¯KèØ= ÆYCëjeÚöÌg×9á/ú\w[×¡ý¼þã*B25¸-ºeÇ¨òsR=M-mÚ[ýÈùÿÅ_Úf­cÿJò=}Ôu.ë÷2¨]Âù'Ú+3JIB%Z"Ëµp4¬Î'±Ý¦ý¯µBb¢±­ä?ÄÑþ;³Ð>xVpë²èA!Jõp/©vàrÃ/uÖÞZ¦­Zi &ö²þÒ¯TÌ>Hxä(?ØÃWß×¾ÞDîý¬[æýîÌ+¡Oóï¿É â[1¹evnA@)t¡¦Þ5Ò(èî=}ÿ¬Æºþ$=}ãOÎ<i©Ñ¢H®®ë¥e=Mã1<é0£+ç²=MEi:Ýí¯Þq3y]Óì¨eÕ.p>¬8¨ÀïèM:a"9@.¥ôÙ¢¤¶\æJÿOÉDE£,¼Ý$#ÙÆ*G5>ò{ |ÆBÌz1xJªì ¨ë0B¬}iÕcÄÍ¾ Y¡I
ÕWÀ£ d¾üY5C²Íå+
û*®ÅJ{÷NYÕg¦ä[9Ögø%½nX
À^ËazoBY= °~BªQ¼{ìÌÜukL££Î*@ù¼eNÙH¶@}TJí®R2=MÒ§ýBÎýjh3n=Mû®_]B$@«é²ï ÁV> ëJ A>d1W³ry= b!ï²,È1~ Iô$#uð¾«ÙV.¶0Gb­vAÚGdmD¼ÿv8»Ü5'Úl9tñÿ±Yr¦<*©òïUr³õ¢U/?i¬TêüIm)r&×ìP5Ý;@ÒÒÂÓvíÕ#³HüóJl¼ã°n¬ï1fè.æç]ë%^VLË6ZslU¡À'¨Îvà9'j.gì?AqE|P5_MÃô'RZÝÃÍm5ùð£ëò£PXF<$ç8×ÊøG¨\JýVØ§èÕípÈëÞ¾êî³,:0G_*[Bp×]CÉ÷@ñf¯'Kû+(WÃ¨x«åòvyzóÁ¼ sO"q'K­ëº<ßÇg3ý	æ®-8+"®ü/²Î1"öíÐps¾ÈÓMeñ~°ohFfó~Í-d!b¿c´Ö×G\rrÝU3¢8®)&óLXb_[×@ïo]15ÍÊ ®ÇøS7èÿVq&tøæìQ-Âîx[ öoü~÷¾NXx:Q£Þr¸¾Äû ¨D8AFâ|ø Î5¶o
"G¹É$ÿ%0GH#AjN#/û
ðíQÙAÁ¨!øN56~Ûá"
7Ê^ÀÅû)HCV®×Â"ðÂ¶è¨ÊÏGVzI,R=M$j <&öôÍFº¬xîâ*´7öpZ®.X¹û"=M/³lº4ç¯µ9å±Ã_unH6ßðVèÁ2·:EÑMÔ/HÄj^¡]ÒãðöRê369åJG-[ÛÎm|¥p,Á.0ëexì±åÙÔ»qT?­',¾ã( ês+{çÌàö,Új·?< !kÏ^,3øÐ¿ñ0êz£1= *­-= R±­~~ãK>²- B~~.çêi# e®ù)EIö&ÙbÓö_ãk7¹ìÊixBy8
=Ma}O1êiêoízãk3ðÓõoãÔÉ®É®xc¤r7VâfBB;#+0Póifâ%¨ÆúcHõ4q1J%	»ÊÑT½ÁZZ9üo|¶).
¡£kc¯8t³n¯I0wáÅ8B7QÛþ§°Çî	Ûå Âð=}ê|}0°ÄáJ^GÍ3$®ËòIbuVùçêZ~Êïóm±_{úó­ÝAhÈIw@9Øu %L1Àõð!ãkæ¦*¿Lün¦Ita%tî:Â±)«cVÃaå"Q3g$,= ÿáïÅ°¤ñ
dáÿ¶©ekÅíÉm¹¢x\kÛñÛÒ¬°ü½ÃQø = ã³w;±noÐR«³2(¦ÁBéÛý05Ó/BÃHµT60F/*°t6Ã·òG÷
´¯P\¨O= tgÍ=}ÈKòÁ"ôñ3G¬ß¤/®,væÞ1åv%ÌÇ¬Çå©;åIT½¤þ= °múçÛì¢äk*.MB!94XîÌÓ·ý»H±Þèÿ9#!ôÌ±)}¡ÔÏÄÊoTëQCÑ¹.f#Âe'ÇTG1.îò´.Ø¯ñ..úÒëjçGäÇëj÷l8$$i#:d0$rÓ#õcÙ?yÜÑöÕo6"¦HÌÊû#ª¡Çe$#þ{R±HZò¬·².äZ¢G^»Ã¦.¸%¦çóa¥Q<<A¡xªEâ¤GßýÜ¿¦^Ö¶¤Ro\¸¦ÌÁCMÀi{Ü
MÊ«1¶Æ)ûÑahu3Þófi(T§²ÿ4VtÖªÀü3xÄÒÆÞà}mñãOi¦= ûêkÂ¼´Opné
DÉ¤Óö"°È÷ÓsxÜi\õaFûÛdP£daDÚ®Çæ­Îî#®Î!¾É'** ZóK£­ÚíË6÷º¤K[ËÚìÙqTµXÇ¿sî_³°é1°¶RÊu;(Úõ«´ísá¦á·Èí)= §F×¢;J5>
xD´ÆJ}WàÇµ= ÞYµ^¤\DbüÜûßøCLë_eúz¶@3üEø±,cAò«®5¦³4ëÇ¥òJ8[ùù9©zú^7Â3³ÇÈ¼q4+ÖÂØ¼Á%Ðç´PíCóÖÃfK\·=};ÂÌ´ÑXÙãsqÜÌ=}+bàÝ[£ÇÔû@ÆÙ¿î°|ÕcöFÆ´ºâPGªe·é¸×r miÒÈJ»J¸á¦Ø÷ÊÛgK¾ß9Óv­£'1îÖs{ÜÇTêiIVGÿX½tr/1üßÖºV@îX£ÕbÏÎgà²LÒ#Xäúµ@Î,ÙÕ¬ÜNeûîÃhËÈÕ%[mÎñ9pÒ»}L_ºå©éþÑo7]!«º¤vÙlÏÛÚ×ÙlØªxåìØ?Þß9²°Tß¡´V©¤í.#;¤UûñVts®ÿ®×Y,êÊ@DC~>­³È»Srá£·iÁÙWG¬¯Î¬iT§Wä
õA$ê¡Ó/£Ô¯¤|J/¢§üF.= S·à*Ë¼ø|W=}s®8+É0sq¯Ð¿É#éÞSnF
w4XÒÝïéfIKp®ÑP½%&éìñ2BNdc6ü=}wM²ø=MZà
= En£9ýUÎáäõUç©[Ò\h9)lx@ÏÙi)·EÒ²ÒWÂTÕUäc6ZeÄ&zùf½b6 0ù"z@Àþo¼«é»?Ü*= Î8VE#Ü{zP#ë¡¨W2ø²çÏxNzlñm»ç:<=}nÒøë\Ð¡Öù¤qèÛÝ5¼÷5µd·Þ>ÅîèÛfdS>8| 	-ñy\ékôÕFµàÈì Î;ÕÚX'+ö<cÀ"ý¶Ó.Î>'SÔû"ÒàR9¤â5üË7>©eCÄØ/M§¶Êôêl1Ðã>yÈÎqÐ¬Ü(Ó;×À0î®ÏæðËp>ÆüS´\Õ®5ãký=MuWé·â$7ÉJ²ÌÒÛØðÊÄwS]»«	hgãÁüw&Ú¨{êCPN0b_ñN­'©Ð*ÝCÖB K%ÌÈc¹6»rØW´¢{p÷U¬bæ(ÿËªÌéO.ÛÏ/jmøÜK8&ñ²,á$p©öZ´!$ôÈJýÐ*ñÇ%ö¸5cTC=}Ç1kcxé=}:ÝÙÍØÌ@Èd,Mú3ZÞHÀ_$dØô¡ÚÇv=}Ò#tåv¸{#zi(ÕGÝrò
ßÍÊ¤Àô[Å°J¡Q7JòA:ÕL ¢Ç°Ù~<fÖ¶ùøñÀARS×;Ê#í@ý¦gÞÃæ= S¼M/6.u ?\ebÈÄ¢Gõp:£ôÑ§	áâhßIGâ»¢>qM_.=M'®rcä^_´£vWéö!53Ó¦Y©uVÏb¬
6c_ b>«N?Î/@²:µ= ÁNý([Âö¦W^æ ÖD©Ô·À,Ð~÷wþÖ¦>üæ·7¡0pÞ´MÝ<Z
ýÃ3"éWTîEÀÇ¡"zÉÕ¾U­º+	Í­UWA=Mé|ü2þÚ®F\ñn{T2(Ôd÷¡?tÏíÛKQ£KW4£Q78ÊBG{ÒÏ  þF·Í¾RLÍ¡(ÆlÇ¡òä:¦$ R_8ZJª39ºWN2"oHÆÞ. uÇ¢Q³ R¤Fø:(<Ð±T'Õ²÷,c&ºI÷äæ6jWSGñ±[tn¬­rCÖWGëÖgo§¡õÇ>YÁYöËUE-ÆÒ3ÿöÖ´Ou=} ¡åb=M,ão×9Mð×ß*ÒD°3\9 Ç¬Æ!L­Üú%°=MVFÛa+QAL¦Ëò¨PrL0@ÍÀÌ¯]2;q:z³&´2ñÈ±= áeBXMúÛìÛ¿ÑUÐ%}øªV´¦
¥£¬ûädg¦£:ØQÖl#
ù¼Ô$$h:Õªç»6ËWö<x¯Yl°þø@ç/Úá.HýE ,NÎ;wK¸XÓ)ó#=}"Ä?gÞn¥²ü_ëàéÌ¯#ò±ùõííï¥ØDéNå.@4þ_}ÿBäýDöóÔµ= ã4ÂÏ÷¾gªý gV&.Ô= o3Ô(e1táê½îmÿµ´è= ]qT]bFÉb?Ü£
5ÎàÍyMCü?½Ïµ]«¤Æi¡ÖQºkÒÅS´í'-©~®;_ÌÙª Ûñ<dméÊ±õ[ËVÏIR$&ÎºËW¢³Ç^åÖ	h2PÙïóBlÑ÷ÕähÀT¾³bzÊ×bÀ]°-¢üÓ,ÿQ2%k){ç*¸Ksêr²êrÒøXc§ÇëJßÝÞJ4³8Ûî®mÎèäûS>gÔù7á}{,§dgµh´d}xã³Bm1t]?tS8m¬ë}ÅWíb'®)±vúLùBúÅÖ¼2¥ô³²bÝ÷Ob^ LEp9ý%>{mÀ¬Óx÷  Ku?Ä¿gÍ-1îm(Pbôï{¸»e"ü>:.¸iµ¦õöä³×;èÔÚþ Ô´1c	R:p¹Lz ÎÙF}ÈÒN0¶DÿÀH#/)¢¢¢08ñ­= ÕQM=}Çò.ôÜh\>4ÛfÏ<£Ï<í¢:æ nóâýÿêPÝ\}áñã ëë6ðY+ÝE_mKK¶ÈtÛùã^ð±ç3uÀ-íTd:e¹ÂQÒr½#îÃ|ÃaîÎØäu
éÏOÖ=};	?]Sø¹­= «\Ù»b	[¹¦»K~²6lY:.,3Ú&BnAvªÕìYúö@5Y~a$6s}ç°IS±é#.XÐnÇÒÒ%Ùñ ÄßæÎªÍç¼«= ÕÃÕx£¼	ÙÎÔ?Ù:j{_Û.
(þbà[UÎ©Lõ.¹c{ÔË
t­ÝþøýI÷]Éïàl,ºù p¬£¤eï³ 'uÇéÜ_ ÒL ¦b;;ëó¢ÿ!cØ[wLÀèý)ç³á¤âv<å6}qbNãû]dûU÷îÕÙ§EÞ½ë«é8|jÃ÷ú£/ÒÜ÷=}8dë[po8"éÃe/F&ÿðL¨ägâF<¸CRåGRÓBáÜ÷Ò×ú:z¿Ý}Õ[ÝVÆäæ)ìÍdjKC[YÝ|ä¾gü^ÂËð_º¾/8nd·èÙ?´¦1AêISê0ÊÝ²Ø &Dµ ÇÙfÙØHfïÍ£Ðå¤F)ùô8ýuWo	¤r#åþbÊôz2ã_¢-(ÑDá+KÂ³ð I\Í|%ò©t_ÏNý!¾èä>¢h¢t¶¦©,Í@¿Xgz»Í.¥ G[u©E 3Ý+kðF^Õ³ 9áÄóg:Õ½]x·t¼ÁAdJHÄ= El ô§mç>¸EK ´îÖã¹¥µÊùøÊÙjSSU:¯êá\Àl<©¬kOÆ©ÖÌOPNb£U¦_Á¹O÷\úûg½²hóÔÝ°¼£|ñéÇ*Ì[âgõ OXe®SpÊ³GGôäÀYiKºÒo«b ¸@ÕðrL?¾L¿Äúi/ïq»öh©Êá;Â«ZÆxÿÎ@crÐÿCYÜ^¾âËÀ¥¶BÞ¨B!0z<ðT7Ìþ7ºdÎB¬[Ý,õùNJäû>õjÛ¹SÁng5·×qn3:ÙZå?ÛWÅé _*M'ï¹X>ß~åyõ×LÃ KÃ¼@f¾eêCLuÄéGKé¯±_6åtöçWþ_©í¶i¨ÕeñC-ýº_=}ôpyçèAÞ	FdÀr æ¹ß·Ãï]Ê
lzLwòpÝ.´-¦§aEë3Áag°ÄÉnà¾=MSÄ Þ
Í´Ö«·¿¢I1DÖØqÙF®.Û:,¸¿G[¬¸µb¡%iÃ;º°}Âx]Ö­þ1ù¦+8Æ©ÿíü¯°ïS£_à«Po¹×+á¡d¡°·Å3GbC3EÄVJÐq-e¬ôi*(G=}§z»=}Rxa%CaÑLª¼ÿÍ¹Îñ@yq1HuM"¨Ha+C©§_W¢%6P<¡öpNWQ4ÎP ìü/ÃëÚ¹v/C;{À´²g5©M@ZÏÆzQNUZÐÖ[{&ÈVÑVCÚgP{@-eq¨WO>Áì2r!ßÿþ·­¤¸(BáÓðy<Þøím'RÔFkB©zs¬ê¹¦Åed[o2¬)Ð=}U³ÊYmâ=}²hß, ,É!P0¥::ïùLo|%UË»¥º÷ c¢ñâÙÒ.ZøFÖz|¼Úî0©Ctñó¸¼]<dýÌ;6 qàÔãPÀZÒ^É¤'ÝÀ²×¡TaÀ.n©yN.·ú
.÷ï÷ìÅ}$A±zÙ=Mhâ¶ÔRVÅâùF²X(RÖÈa8ËùoýyDÏê;íÿ9¢÷ý/àÙNÙ¶~æÐç4Iïh,©êîÄb¥6wf¼«|T)ëÙqX=}¡JÙÀ_5«µ/±;
'b,qR§±BNwfªÍÔ»fûNÃ@¡o!|yi£Ábpbn²qéÃ´O½ÿ.kx1o1R+Y¢³û¿?§_~îQöqxºËøâÓ'j$J1F]B¨gýØÙ{s¼cµO{2Qt¸äÑgJ>¸Í«X·5~jò5þaëòÀÐ|Òc/¸,Ðzt|s¼PÏØñÙÐØ¤À	ÎÝkúa2qG¥Ô-dêÍw,:ÅVÊyJ5 ³¹£¦h]Ýß«çM"k³ñXb¶2ç6~mòç6~mÒñ{ó
÷êT×B³WÄqøL¨ÓËÛj_{§ÄQÖëÝIc¢Bù¦YÛA7Ä\ÙË¶§¨<ÓÏÔØ)ªN;èPt[â°BËÏ\0?O¤RG
<ñ}©«êÕ&K1£­CäE¼nÀ6ã=}tü½ìó6kùuåÜùSOD5_(æ-ñ­¡hT¤AåB)zãÅÊUð·ÌòO,ÆxÃXÓÜJa^·;)ff	ýä«ÃóÏey±w¡ÉEVêÓ:Ó^ÈWæQ;ñ
]m?W¬Ú$l@ý E|¦Àýèíñî= ûúÙ
¹îKù¯dÃÿQ±ïøír©õr{]fÿ"éd:vìÇé¤Âæ|ßÖL)èRò$+	|ïþs-*®fÄY'nß%Z÷À¨ðg;ãÖÐKBÝBÓ(4årq¸°¡°·¥ºk¤Pí¨0ÃýC²gÄ-JV=}Zp zWOI\Â\ÞvñE-bf¼reI'9:kòÎ¥
×f,Ùü¬¢õ¡õ¥Ì/ÿ= %oÄ¯T@ÊOÄ¿?~bD©DÀÀYÆÃßÁ¦¬5ÞÆ¦û¡'iâ¶óhbwlÉsÿ¾S]\Ó+cBk.úL®OzR4­t/ÝÒÚ°:NDNVÅ_è  ?®¿ ºðE295ÿô ·$4zÅpæ×Ý= î8Z>|¡§·Bd=MþÁw³Èj)1µRyG¼1»·;Ã 9ihB¡KÊî[¼9Óåùä@ú¡@ö¡@¤ÝäõØâë\Nx·§ëÇj Ø2'Ô5w
«<ÓkwÍÂ9mTÂ¬Dp KðÍÄ FÓ¥RÁxS7Ög£Ùim²y¢°¬Ú|öw¿ýö?¦]HHv| =M%CÄÖ9%;¶Âd/[Å¨ìèæôóè5Úã= «ÁâÇìGGzjaÊY2ûlñ±'}mUF= y[ñËt³gRû¿¯õ¿%·¡ Æþ!ú,ý«[ocÑ¶üÏ¶tnz£Ûy×­sïÞ» ã!Z,Ø&#7JÅHèæC~ð^Éf.õbIZOß«[¢³õªØYbo39RëNbðzÊÔYýéí¹%zç&
C¿cq@%8d|=}éj4êº++Z§µ¦°Pò®²·OÁTp¦v{¬øESpeùLùêeJ=Më¿¸$>Ò{¢ûpYBaÐq¬1ç½Ø{«È[ms«LåÄR u@ õ\¢-½òK¼)ùS³h\øpâI(,În¯36ÂvØËµøä0Kà!9|åuü{{êÆQ¢Æ¾ÇÂ	,6¢Ù÷MúÉ¹L÷ÇÑh|Hªh? ÑWw3ÜôxN³¹!>±À[¨ÅrÊÈ G·ìÙ´]T|aMð¤'/»V"ÍWïÂ{Y>Wå_¿e= ¾Òí¸6õ¢KcH}öfåá·'À]ý¿CU%0õJ²äÊOõrF|'þqIU@ÃK»%9ÿà;ÒÍ.¨Ê¯9M¡[ÂÄæOK«^¾áAÖË¨ÙOØ]|4¬RÖH­æµ@ÏxÁÂ(L*P¿«(¥Ó|ûÁlVíØNÄø¹bsH=}}{úuÍnÁÄîÉs2¾bE*«1íï\¹+¹+Éð0= O~åMx$µNîÔ\óýú;É¡?µ"+áçV}B¥ 6\ßEî
hu'_/¦ß§:Øó¼\ä´b{
BéyuS)[Q­1ÔÛRåË¹9Ë¯xl9rk6Fq;¤¬ ¢²ß¤òj,[°,­ØÄàór9ÕãÁ¬º²õØóÁ²ù¹J;HÖ=}ò¼æ@è²\×ê³C32³g¤NOÓxý/«Ý²·¤RÊð<ØÕR<QEkpÂ+dªïbÝyM¿8V©wøxÌmf>UMÎ@&pj8g³qL.£Iº&é"DìtèÌTè¤Q2oêRÂÃÙìþ¾$TÚ5bãóýíf)_{mÝ«hørï»9ØèY^Í­« 3í8+ô.L°9°%¡ÖºÆ4<EDÂR°­ÔºÛ2 $oe©ÒÝ%UH¦Æ¨~Ô3(Ì:¡Ýo01hnÒ.ÿá¡ìô¥KþÏ[@fÃfÇÝ»ÏïRID( ¾BT,èÛ8°ºAÄÕvdÑè­Oqø±lPIVÕL ßWà¶:­rÐD{RÑ¥fO¾0ÇÉÑ±¶RñªWÞRH!ÌG®û~/è/_séë·é ×)Ä*XÙ_Zw**øZÝ4ô´ÀºÄ:ñ· © IDª<ÑXHJÛÌgÁñ= * HáHh.Ì 9,û!Ä|0¿BãÅÈJj"ê.]q°f¥»ô±!pr=} @+#³ÒÀ*ù¼¡!^JhÇo÷ÉîCj3¯êF+)¯#ì³´}ê®ýJSCAÝã<%[ÈÃ#gôk¼ä´eQ}¿¾Ä¢5o=M4¥!¯ Â©-±cçOøEwö<{NU^ï¶ZÇÇAÈME§¹µiò-8cÛë]n²Àr2ÚÖhp@d?'Ù¿ºÄÃÍíSåå  ¥q@= À28¼9R¥~ozÌÿOiò´¦kÍâç¯ª·ù%|#¸
ôqþÌN/ÀG®¨xfê68»ç¸££Ü6"p×é²½<1YNö yMy^eÔ0Ì2?]8£ÒðoÿÞ)üZ¡36¶íÁúÌi§ÂwkÎ¹¡i¡ðÕåøAGË<Ù¹%áíjy DÇ?"ò»JòmóK>Ê×á'áB]iéuLîD#¯áú:#«^Ó°¼.i= uÐÑøº©>=MFª~/zÉéIÒ*RL÷V8·PWÌØÙ"ðúyÃ´óXÊ½'5OÃÃ"!/OmNPÖJ§äÉ~héÉÐU:¡U,ö[¨¡KÔÿ|º?²	2b¹f¹>­[É¯Í×Tã¶r¢vô./Èt,ðì³±Q®^¾YeF/¨Wz	r%T= çDª= mxZâ¥®ê¾bQùÞð/ÿÍ¥ú'*;Ý+1Zq·£,4æ:¬YÁhµÀ3o¨qU¯4©ªO= Doñ:âÂmá®5=}÷*¥°HBÁé|XÒLÎ¡ÐÄ|Ô~þXi^ð<ÏÐÔ-ªz_ºóRp@ånOf´Jç2Ó³;"~ÌmJ{q3aLÍ
ÖC¸>g&+nÁÏ³Ì-²Wù[e*åTÂ.³7aÐ[HQY<íXY	»~HÿoÖ5ÏxfC¨
yy\
ü1,n,BÑøjjO«cR´³à6E8òJQÙÈñ°Qð7Z6([äòa±¼cHÆß+RÿºTÅxAþÏ:6aU%ó\ÐV5Ò>¾p÷áÖØGªì§|F+62÷A¶ÊÙÁÚDó§çj²÷5nÓ­G&kóLrê:8¯=MÕ
à^Ç@©zç}IªR20Ø´É1òud%~âï¯#ÎÞ~:;ø1)¸Ì²~gñòÛ÷ÑgUÒOéD÷.}÷f´f·-]9.¸3Ç;ö*p-§?g8XfúÆòtmIßwo<²X)
)ªß=M7M6©Ahr.-^ý#½ìvö^hL îJ¦-C×»JÁtðXA¶løV$o6JÑ
%~8tE"í_+<Q­·6j?Þ>þ8/
»lmh$´DÎ¸Wm®¨R
=MÑC[#ªfQèìÛ"÷À}êºµöL@§G¥ÔÝÃ	r,¡µ*å¤DA÷"-âÛ?»>Â= ôÞñ½ ØyZé³ô= ?±ñ4;þÝ»xc¸B/ãNÜ@ï¢rCKµû->¿N%¢eÃáÆR¹è	®"=}ì±í	 ûòÈv]Ã<LöÙ?l3å?ÅHÄævdk}æpÍø£¡¬1îtiÆ¶G?ðp.¸mQw§nEñ®Sö¾(= ÏÒÀ¢=}Côs*üñÏ-:F½iïhêá ¿Ød¶Üñ*yágÈ×Ó$åâkNß[Eõ.a*2îç7 à÷;ÒèäÂ4tjò×Q*vq4®0¯®=}~SCÇ¤2JvÃ7³ó,¼ë MKkÇ2Ø÷)=}1:º¥I61pÙòoµ o_7c"3ïè8Î&Ò+g¸?"Å©Ú9ÏzXÌP¦sÆÚ¬µÑásOî/ûk*Ø:W¼æí½-<OúÃBôNþ.DWÄ{ØY®|!32¿­Vù¸Ø;î´äFz>vàé<¶,è=Mp£HA&ysf4¶VÐóo-¼NÎaSÅs	¼gÄæá³AÏ©ºõìÎi«¼[Ä­¯ Òàz4èôhþÜt3MôÒ±¹Ôg´Ø>ÓßÊÞÃÉþ¿ÒÅñA¼J©?h*õgÂGBO. t6N&ÙG}bÎ@î}>r:è÷= É:HËlEúµ®Gµ_[ö­7N=M3ù³gà7;©l®«Éü÷LDÔÁt)»º·ÇTùªõ·QúM?Èr%µ§}2íéç#£àÚ©È²F	LrbÚ>¿«5Aù¨Ûò-Ãé>2Dí+¥gMz#7$7ÊÂûõÙ­Ýð­WD¯Hy6,Þ¸ÙØîgÒRYi7÷æFF»eÊkîíËÿ*Jj¶øÞ~î"2Òä:»}9·±|2 rÁc­V7GwÚ¼~¢ùYyZ
HÌ
&= Szö;¨a÷	^æÙ	zó}sRN³~FôZÅ-!ðnãÃÓÞ8NFné-1¯wÂbÜ^
¹±öbÇ°¿þÍ.áÛWMÀm´Ehå?®^ñ=MÁCQ»²Öz|pIªÙïÆÙo¦*(¡¦Où6®	ðè3jrJ~$¼³	òÊ¨|J®.ÈJRÓ¶¦¶;ÊV= ÎáNyØ&= >[;9T/ñS'ê¶È£(B2¸W÷LZü³é}ì¶ÖdÂ´= r5§údi59=Msf§ùfÿpÉ	= «ÉÄTwì[ êÝ¨µ@Å^6aw!Ééae)ë ú(eX1*¦6$è= ýW_Ùjá ,v%ñðÍcO)n=}Ë Aá(oÓÝªë'®äÉz¬QËPT­ yk+«VÄ¢v°vhòDDý«e«Å{\q{ZÌvD«X®ªX°ºXóÅ6Í{HÅ£XÄ×XËÃR»kDN7,JÉ¿ö35ÓâÜÌ2Ò$Ò¼õrçvi]æfº7ßèU:,ä-ÿ ãºjìk<æ¦Z¥*¥yì¶ºa©ØmbAxì¶®aüæ~hþæ¶¾ þèAæ¶Ê ÃwmHY%»a9Ä ×*¥Ò -HêîÊ¦Æ^ÁøL»%ø0RGÀØ	ÊÃ.¥¤k»\ÃhCsd­}«	¢9,é²ñ´øOÚ+HòMüÂªÜå»øÐljÓÍXQµÐ|2­­Çh yHÉø¸Êh±9Î'ØGå!ìøR³Î>:ñÐëüó7©B[®Ãësõ$ð­ËT7ÒV°£0Dl qKë_O½ î4YU3:8)ïôýUMQmÝ½óÆ"¬Ê;I¾äÍÂ3M?ïÌtøA§» RøÑ*«bÃÍru¬ÙÎÙôû3.Çêù6>+¦¶áÂ½Ög4áIKIÄN!wH?Õ#ÒHþ8µ)HW ß)cq= þø¨ü'j%ÝfúOÅ÷sÆº1(axÃZ	;÷ÂcÑÃïàÜ%$¥ÒFê¦àû·Çi~ï#¶ó¢cáØ^Ì÷ócÖ7.13ãpñ}ÄcÇ^¥hª+µÅiÈ=}RÓr;~¦K ìO´'¬ÜÅK'Y(â|.¶¾]à.N9Ñt½Ìì)½V -eÆ:ü³×µ0±W5³à²n*
þp,ÌVó¹¨0,.%ú$²%Odð= Vü²ê^&ü~bèÀN½ JrÒMbíø¢=M×÷.þÛ3îìãLô:ë¹épõ	9@µF0Þõ×	9úÍù:|ÑÈ¯9ÞG ¹Ñ%QJ·³Ù¤é8¡ð6ÍR*Õ.xOWó·­KWÏ¦¾*ºfç8°ðk¹oa¥ÝÇ S¹%¾õèëÈ_@ôú4á\%5¥º¾2+Àb×:æÂaöd=}ï?:-Î4²Mc]?¼Rdñy(gY°*qñ*ôsEÀsBwåG:¦×/p?Fx<ÕEv= º¦À¾V\0èl~q¥³u= ÒF¾îÿËm}ãTßÆÞ§ ´¾Ø¥gli£)ÁäSÒ×HàJi=}ÑÃ
;Ü]xÆ ÷¹pÈÉØ.; L\v+A¾¦ûì!¤×­¤O´ú»å®>1ó&
ðê¾§ÿD]·þûÔm¦XrE¹ ÿm=}2:ÊûOuËjÉD%'gqzóD3Æè&'=}ð¶dA k2N~ÈÏÄç+#9TU1sðÝ¦AUÁTDW0vS°¨-XgÇoq®ñ Zæ!:~óÄe"ç×ç0 ³Cé.ÐF§*ÊëÆÞGfËÔc[,$Í¶ã9äªÖ khc ÙrÄÀ#Éî2§Î4ÎúÍ/LÝgÄ¾èz§Ò<<I¤Ô µëÂÕë¬ôô¢TÝ÷s[ýh0º@ÞPõËç¨!:ä¹ÆUÈìQÎ%±#ûd@ô¤ÐRÝÕñû=}pYW­ý\BÃì¬î³ ºóDÏ4=MiÍûÈUý?ºÐR´_{µªX¥Ñ- ¢H©-Ê=}dÈÎK©ò«Þ	ÿ·K,Å6¡À¡@òGÜn¹ÆS.]
QÌ-9ÆÿTâû²ÍtèGü>èT°²7EÍwÎ@a>Zä»p«>äPõ[ÙÒ¶Ú'Êºö0Çxqò®J94=MMiÃ\£mïÀ&§nIø§nIüsMT\r9+È×S$Åê%Ñìô'sªG4aú°rÉk´%×Vy¯¸)x$Ú_¨y°,ÃæÀGgÏ"'~ôzË'Zàº_ÔMÁ<¼.ç;¥A¼=}ÈLTQ®uÒL0y·ï³@?:uÍ^Ó= bÝþékttå"VaJ÷	=MepÕkº^<Az_­îÒ$a<ÁCqY³(1Ávy½¯CBÇoI&
H}§1hFãCoÍþþ
 7¥äJa&aï÷>÷¾#/_.è>0 I¦0":xÁÒBÿî
aÊ;ÅÀj4F>Y¾ºÉi¤>Ê{7ÀíëÑÓ±Ó=}F³Y= ±HÙãærN\1EI=}²]òÐMÍÀô:$%HyR­4uR°Ñ_"¤ÿâ¤77_«å2Òeáí¤îA ¤"d×¾ã®/Su0¾µ"©ãhWÒÔÓaèH ^y²g	.á¥ê¯3©¸E"ÞÒ¥lM¬}Øü'Aõ«§J=M:1;£òòJãÿEë¬-N~p§ô!øEy±Ù@þ²§à.^êï[d¨oÎ×»iQ¿­µOµ@B)³0 úlº_#þf{j|>0õÎðÖDYSi3ûYL}ýn®ÞTW´BO]ÝÑ.¬ýÚýÝä|JYîYø$= ~gC:¤ß¬í>ó»«¥L¡¼GÖÀeÞe±= ö2ä	õ²±Ãy[ÝÀ}ÑwÙóPzèCÂ.<©RÙ÷sbw¹!^°fybÙ&Àöy¨ì»ñ¢¿zr+*óË< hO^¼K¥v)|ÈQ&CFh._Sìè®ÑïJ¹Ó@GWÉêVAÃ!3´Ôý'V°É= sì÷¢³é $JtB°1æ.Ê@$Öù-±Q£bÿüFÈ±ùxë£(MÿR®^ íâÜ^ðÌü»äEu{­2.%üÚe=Mb§i¡k¯yO	©YÐy#Óï°Êj´ e¤õ°ªÒÛÿÇæHfOÛgN¸§¥<ªò;+J°¨V½Pâ¡ÁIZetE
Wå£Ñ$V9#ÛïGÑ]Q $3Im@ØþxUnã
xô²añ¦ýû-leýð¨Î,$lÕ°8(I­i$å  V¤stÝ	<"kæ£¸ä1 .N:{ÇÇ¡(Þ7K½üååAú+¸G3ç6-AJÐAj(ÉDÄÊBhnµc±wð­ÿrð$§ä¿¥ãôq#«ú¨}Â}ÅòïÏÜþ2b0WâLâÒÁ6Vâ ÀVÙ #_tà¶¾ìQn{Ç±^a%EÞ ² Íés"M÷E=MïË$>ZR·bö/\Cwkó/Qùn'OwÍÚå×KgçÀ!ã8B}òÎ>ÆPÄ¼B=M3ÄÚ5®ZÊ»&PîÇbç©S!ëV$Ò¤ç	ßÅãólÌWßhÑÍÞq(Ýq_ÚkÂÂÍªÿøiK0c«=M6g?I4%êÁñóEv¡r ÷ôþñ'ñ#,x1¯47RÕrÞ¸ßï= ã-È§îi{ÓÑÕílõnÒOû}¦^ 4§ÿ¾ÐÕ£ì©O÷Å¦6ÿÄC3>¢«oc[	«9d¼k|T&Ø3ê=MñwZêùÚBÑÉÀ÷ØÅ¶l7µ¤lw= ì?Ì«Ü»,ñ®W1ä{Å½÷µ «&¼¿!"µátÛbê¶v®Øc¢c²AXs¢¯dæø/¶ó%BH/R÷ýU?3_ Úw5Æ?Þ-l¡ý3­Û~ÐM(¦$J.p8ÊÐ+£õL6Îj@ÛÚàHÎ9Çïó!IjåùÈó´;h&m&qn-ýÑWHVÆâ8<M7t,PaC¹{Õv$>Ì¶Ìb«¦ xÕ¢=}1çÕ¢ÏBè¥Ä)R´Ìâ¯·¸FY$¹ÝïMÙ³\À1¶5)L×zÇ×VqÔYEeéÓ«?8ºáèÎqHi,f[C4±º#Ûþ<	^ZÃ[²Kó¦º¶ë¨PsÝá¹B±ìù3{ÄeEeÂC8T!ZqªPà$,¶4DÐclN6ÀÍqHÿIl § Ä#«û!t¼þÐé&õObì¶¡mùqAïM«s½-:ó
Sÿ9aRëi: 5>È÷Q$gôM+öj]5+ÈÊWjáêv NÙSè¯)!'Sªeªdze=}rÊbî²ÅFþlÄRÅFtSªªjH(À÷h){WüòÕNÆîÂe_AÁ³C h[_Æß®¨3yâ?¥<Ô~ø§Njgq³t¥¬oÎ<×MªEJ·réæ,+îÊ÷èb·ãÊÚÜÿ'§ËjJ«ÞíTöiéæÕÑP8:$Ñ»ª±ËüÁrv²:HM/X)iÒLì©¬éÀbvz¾òlnnA2å¯ë=}Ih6°fï
À	j	(Ü/¨C¨ñl¢ª=}ö
lDúèyEJ®ÓÉ,ÿH°NT øbvôjÄ²Øu~QÈ§òl¸²¨|o Ñ¬JÏl&gm×""E-íz¯ØöJ§ÆÚ%³[¡Üò¦n6Chõ zD?! ]®ä0^ØíseÍ¤°Lx<Æ¢Ô ó Þ5âBämQ36£éDa³ÔuôfÀöVã×ràû©^;>Õ0
\sJ7nX
ªAdb;%keüCeTÑ@ýü¡ÄÏ ¶sà1o{G¿üÕÁ«T%4ÎäEÝò=}ó)í3o¾Âëú¬YnÐä#ìÞ9Y(PQ
\¦	ä:ä$©= î·Óïëß~¸eH§8M¥1ø£¥ %(1è¾Ìj/ÃÀ¬&¼1Ó" kÁ+¨ëÌ7»VÝûÓùKó;ZA²æé¥ dÏ¿n>íÀ@®R¨ëv ^4÷
´"Jp¿ç®Ãsë6³ÁòÞðdpf òÿµV_JÁ]6_Õ½/=}ÃlÐ8ÃÏÎÉÈ½CÔþ¤ØÓÊÕæt{ÆL¼ ÖãÅÑØÓ-ÝcÆà½{dxÆõÀATÝRÏá2b6?7tÅ×zyèCÒ$?d{xþ¾%I&ûë-V:ìgAÞàé¼Í°@Ê¤'E'Ü'z(VÚ" ¹ö-:|&1ÈG3<x<a©VÇû!«R«ü6Ka¤Z5AýAÀø¦ü´mö_ìY<Ø[uâë8¶Ø× XýÖ@­­ûy>»À¤¨¶wnÊ m<tö[ÓïÉI¸MuñØS'´nP{mê9gqs÷>uû%Kñ§ùÆxcêR¸ª æÇûÝòå/(W×ìÿ¡)piAUYK O ÊÏxB#&Û¯nB²$âoÃÉZµ[3àdTÏëùqþôP07¯a¨Hsï;}66çRÈnâ= d-êÙßÝcÎ:òHAûþ×ÙzÜA'
G
ýyÀ|@Eã+±r³(ì({aÃ·@zÜÍî¬ÐïXWÞ7+R¿Px#+{uÖ2õwî=}Ríèx^löà§ÇmwO3¶!×ß$>cxÔ7¦-¡.¼-3yRî)N(ö$1áSõ gzÒöAªÆwÐ»'I¿VW,[5,ïÆáCéZÃ RE±ç&xûCuß¢x25äÓOõôdNµ}= *ÖäeÊÇÛåþÉ½g+Íf¥²pÉ\®!Xª¾¼Ç¸+R¤:¯3WºM-3ø!yZl0&(Yv\ê¨[ÅÖ¾ÝDlÓE.Ð2Ä¬J_§ÛN¾:ÐOÇÉ|µmHÿ7|t= Û!7%Lo-#4ÏU-Ê>¯¥RÕ[¢»ü§<ÃÌFÎúM	ê·4W©¼£´p@²èô§H{ù®¸ïäGº= ")Qúl3ª2{¼¦1EOè"U$ «««+_MR¢Bµ%s± i®ì×4ZáÅßÛ³ÏzâVèfíÆ$3ÑÒït~´Á¸ÝLz9ßo>´¤=MQdQ/V¸ÚQYÍûU¢v´©ÌYªÊ\<QÔ»ÄbXTÉÜ®YÀdµ7vãðð®û¨¼eÂÈUÑ\ÚT¿æ¬¤[Ï4Û;TÐ¢lÛ×<Ù8W+ÐÒ$,ÚzUË^ÄT¬y´AÔÐv<ÙoulÐ\Ü\(l³iäå7äC;4°²~Ñ!ÒøºSEv¡¸kjH,ÿV?B·/;¬CZ}¥|üÃfÎå÷:ja$½%m}øx«¾ÿæßtûb,®§B|êOaó&Ú²ÁËJ©Ã7àn¿DË=}RgY²½ï_òAð¢bgp¡@9ïôíÐG¦jlOÄ³U)¾= Å<<èî¿ÍBæËOSBYòB¡ý#667iè$êçå;pÈ3ä+=Má®lpÆ[ÎRÚG(CZ¿Øgk(»[2G±eä¸±®b{è±ÇÀ7Ò8®É T·û«z^$RO¡y°/-ÿ){ K¼UèÈQ{ï¾êN$c4÷È¦T.0Y;àx=}ÒÂçÚ,ÅTcÚÿ]¾8Ôjià9¶Öo{à¿­*ó¼è5¯uN¹ÄÛÅ­²î¯ÃéEP{>OFÐö§LUê°®i4~vwMúr"H(fL+ïÙ{é]¼ü[ðÂK±O Jgkÿ¤?xÿñ³wñKûò-òJoÐwÓ ôÏ»»hD°óßò
²|G<@´T¹Ç0d#äVh¸FÀRP§í±µu ù¬iª±7©å¯ç¹-Ô÷rY/ó|· F2lÇÑDüÌ®ÙB"KlNÝñ®úÁ6M-­ÛòyÖßùoOÓñ§]Í²Ï W7:ÛlMÄ»Zw¾|WªLOÎØÛlÂã/Ù@)öûjö8º\= "[ã6IRÛH-7 +À°a
ÜHdz°°ÕEµÕÎK;)"^£C²ö)h(µ²§aVÃDÇ\Íè<ô¬°eæ¡^-×%[ßKÌ=M¿wÔö¾ºûKï5:Â¢ÐÓG}yÛÏóT.ÎÜÁà\ôon
¾î?@âo3[vi[ÄZ<añåCGÛ@<6¼ Ü¸Àô.¼¼ª4#¸}SF·"YÎì+[:¡ÌZÂÔ(î|;UÑIEùÈóBLÊ5åïøY·*¼^°ÿoÌõ´r>§^ÈíMI½çúµqPjZsB=}³CsXÜ@#F¯¢P@IB)ðË= Î±0ô§­%Ô3sTÜÇ:X°4®Ø±ÏDQ>P<h,æÕfýÑ¬[¹´ü´LöÝ1YÍ\O¨Ù8\jEJ9	å×ÇÖÊ\è	MSêy¼±ÌÐzWÅ¯ÏªüûtRà¤ì#ÈoÌ}âÈ³ÒæÛ0ÂºÉÆ
A"°Ñ¸*M
I2&&Ü0ôóÎÉÍ¨FJ«ákKJM9"\Ïbaô0eÒb)30¿ÕÛ'òu£»n­Z\Ø¦$Bû5#Cvó9Ë8T"ÊÏ)ZË[èßÚÙ\ÓD[C,=MÎÎót½ò}¼65÷½XuÒZ?'u[+ó¡!±VÕÐõø¹¹Ïõºö¹	ÈÎðZHþ *TB!jÀ /z fÚ)FF7­Øþ²cvÿû¡fí{k&ñ¬Ôöÿ¤Ú³<à=M_ã ¿)Çª¶lY%  Ü4èåºo#÷æ6oé¾ÏtvËÞ²tSYõËwÐ¬ :#osdX;¬ãüYOVâ;¶ÚÀ1Oß6$ÞÐÿâÛTã.ÂëV~d¹]\3JHÁj·c"8Z¨3¹¡ 2r{;Ò¾Ê®ÙMmïcñ|üjín¹ÇY8:Aêñ.üÎ>¿Ö[%ÑØ]2¿ÂF£W1ì¼pÐÀ:|8çÖB»c¿ÓûÅµüaCªLôpÉ±|EÇ{ìþÜvÛèLe°¿BBkäµ1h+#ò>¶Ò»ãÓÂÆoº¤}ÞÅxnå² D,·Y,´é¥bÑOó2<i *ú+ÖôÁ¿p^-z3áÇA(ª57èg;3mHàþ|¼A	7n= = 'L	ä´9®"½O3ýñcGgò±ÌO:nø¼k=Mr´åWA}³øúÍlïÝ$âLxDrP:!ÏÏR:SVÜ­£5FUS1½ÿ0þæ¡-S,g§ç9jënÿL ¼1(hE½ÝãÇ>vdçè­1»cì¦mXïÂ«sé	;H½)Û¬U~ ¶¥Ò' ²gáX{tÕ1÷i§º-RÄSº3º¿nÇ:S¿¡s*2·F3ºK¦ï¢Rº½½KÉïhøô³|ëk¥8¨Ù¾@¨Ç[A±+³E¿Á¶w¤p*É¸ ï®ÜÔ%m%®Á_>lR.ç4[OþXi2þðÇÁH\#°?mAÊoï¼¦Ë9¢öÆr,wO ¯çÿË¦:\ÁB¦¬ÕÒ&w¡õ%kÆò* J:L¹Ê~èþu´N'Ño'®ð.8w±ÇkÖ¸óX(ô3ÉÏß©þÎ³ÓH5öi5S:aÞ M­Àã$ºêxlý}ÆíJJÓc%yqhàèHnG®F!¿/> Ë÷¿b_6Ô®62ª¾x°_çk$JP¶áBæB4q¨&!¤Û%ÈÝ«æ[S»±BÙwBªJZ7ò´ØOvü.ý´Ôn,}FïWþãÄª0'gáy/*½×ë±HC.ã0øñ~sùA'.Ã)5gß±§í1tWññü_RÕ#­V B)ºÝM(Â"¹e±ê%êåÐB±x¶.z­f{"âÞQà¦y?«0î]j¹y	×4¤äíç§¬»é(W<"ÅCæP_ê¬mnsRê×Ájíhñ£üçëÇOØ7K¨íÊÏ^véU%èrÎÑ§G"¢ûñ¶óWrP^§fnª¥ìj{G7H$³¸¤¥*RMüHÀ"ë¦ØÊ8®õ¼91û±Ó6H]QChçª7Û¤ÇÞËR1(öò~¿jqÚ¡BèB´qß>ª6Bª-uK2jø;1ÆUm>*À$Pb¯5H.%Ñ?§vOíIÅ¶µ[ @;q­31hK#Õ)GÍ*ËGÒ#^yiæ´±zIlæôÒát²Ï°n³ÆÞy²cZ¥R )ún]?ß²ËÙÇ6ÓÄ|ìöy ¶ëÑºhÀLæ\¨Õ8¾+|ay³íLíLíLíLíl|ÒVTÐ¥¦ ª VÄåDfÂSÌk(ª¬O¬:Ë|ÔQ¨ÊB*¾©Îlh>2ÜìDÓÝ86ó]NÙ±K°#J¸J²5¸5¸øiJ¸J|Ö´ÕÈÀYèi*Û¯WíIÆ\NL¬è¾7&÷+ñ¯lÛâ/»&ål¤àûÔõñI9lÀÎq|Ô"P#,(Ht$Â¹¯²ÂÉúÅKVI=M­u)*³iôk@:±cíM­_é~è0uù"l?°/³uwy°×&|[¾T))© ?¤CÉ¡þy9¢*Eøå>á áæEVÙ»Cw·lòàðóú¾ e®ºµ__Gîs;µØÁ¥À¤!'´@w'"x¨í,"$ã!chq¯ß.u.1øù
²ÑaÄórfÎ£Ì/¢ÕV,LrÏþðt±©Ó½éÖÝ²¹!÷¥IÝÝÞVàm´ÞVê4ÞVâtNæôNûÄMãNï¤NádüXð¸öÈ÷¨åPàpÎÛ¡¬Õó<¾@h4Îùû$qEògn= 1¡ ïÍ= 9¾áäµà¯Þ«M= ì_îjñ~ÞUö<½L	£[m)¾kIÑ¿H	¡âUo²YiÂ=M½Âék¢=M®¾hí<?¦P$,eYYcJMÿqÕÞ> õèÎÿÛ7y^î<ôSÍ]ôy>^h8= Ì}] s0,ôÒÞ^+·;#<I®ü~¼0V¡7¦a@5$ïe¬å!>Íédå´áþÚ_q$æxDQ 7{oÜÂå ½jk'ÖÀ>ÃÓíÌú}ép5,'8NWqøT&omI¸ãëÕmE¾p±ìø5þá,Àõ»¿VöÌó-Ë§L}{Ó/W0Êq¯»15*_Å0ÚXxw­Ô"iBwAéitª»sZ>ÙÌ*KLW°Ô/PÂ|÷¬§Î´µÓ6inkJ¸vSI¸Ê¦y»T»wÑ¶©6ºÚëÓTPÊìÙM(¹vâ¼Â «bÍPöQÒdxdè²m¼ádÚìcäaðS]º$ÈáÅyëÄTÀØÉýçCzåt|Þyì\:ãv´Ë=}ºà»ì¤ãD¾¥t¾¾ªÔþ×)×÷»ÕÞ¯\= Áõ!*>]
IÊôãâaEÍ$sÍFM-^ÍM-I-ù7	)	î.ó	Ê¶A,¦243RHº½¡£ ëøÊ= øçJ@Q³T#ì$ÇÉíR#ý/Uÿõ±ýnÇå1Ö¡£:Ç¨ì.Bj¼1PÉuw@¼lÉ#rL1µáýõÝmw#WãABppHÁ>ß;äM=Mi1Ó«þRH¤Ñ·XîJÊÀ7¤ªåj{®ZÉ³ÊJp£køG×µ­±&°ÔI¥Nê=};H´&ò}9yÈU¤Ê+~ÝènjhÐQD§¬¦^V)j\Û ¦T·ÀÓYÄ}ÝhÝì½¢¡Á¬ud<@;j6ø(¿»u*D©d¡onùÁìÏ(çÏ*üÁz%TÝfÙÔÜ|§´¤¿ÓÃÐðYPþÙ!ØgL¿·ty5ÜÕfÒ,Zr\s>Z§Å	®@6ÖÃÿÕXX¿Ô8¸t>ZÆ+= z,<= »ÊfÏ¨Ì¥åA ÃçÐ-O/Ð^ý=}à[»|ÀÆÂ?¨|kÌ=}ÝõV=M
´£d}KîQK¬ ÈÛüJBt${¶íºÖØËÔÈÏX_t*ØZ7ÌÞq¾´åûI2çmë'Å¬M÷¶múv«~9¥àY"%rè¶Í¦I¶ü¥¥÷÷»Õ9Ípu= Ö?Ê¦¶¡ü§Æw>ÌF6ÇÖ2qW³DXð.©ünþø'+dü%¨õõëT¤J*¯ªÑtÄ6'
mnÔÌÖ£ó3
ö¬ÛyªZg4þ08§iµ¹­_BàÜÒÕ»Ê¬Y#yâ£yµqT;.rVÍp³(FP#¯«®9« Y"^I$¨osxITâ~^ ÈÜ8ø#b6|nÉ¬Âÿ·BÅÒ&¨è2
-r mØÕa	¶5k1Gâ²¯Ïq7ÎÜøtÙ0{ÖcG:¤8+ÜÏk
;Ê!¢e4è3ÂGW[¯PÚ1ëÃYÖaùOþ>·Çj#¢Ò¦2õ9ºÎk#,_ùãÓ1«Ãò¯Ì¥$ÏbYªcJ¸\fÏ¨àéäUÞðÍÝßµÇSsüD¨ÈÒ7»°&c1}JXÎ¦L^÷ë[|¬ÇÈÔ>7(²Ô*à2^ÂÔ63wÇÊÃäM)î.=M*°ÀéðBÜ1ûõÝk²U£DÇSÑWgCjîj^/ª°)@£çjrØøÝáb ­EGÑE·÷p¡ØjÝ#(@o#8," Þ]vQi°tÞÙË;ß("åÝ]·¹ÛVªýêRf= íçrô
¬+ÛÒÚßß·Ïå«Æ= »lZùØÓJÉ4Êi?ca{YOú)n8'-ri~öÄ¨oeÜ£{ÖóÀÎ·J¸J¸ÃµJ¤£hÌºVÇÑ8ÜN6rRÿßrG3ÈçVXFÓþLÌN¿Ð¨ùdqj=}XdãEoÃE3G$hm«ÁéCùF¨úztQ÷/wÿzgQá*ÿ"Mx ú£~¡%õ»1ýVÀUÒ%\ò,ìÒ/j®	¤ÂµgXXÌ+/ö|wOa¼{'ðSå|lë {M/s¸²ÓªÛý2ýÌ,Õ¾ùfØdÑ¯í*­ùrGBÏÂwþz¾ù2OÌ© |þzÃÉù¾éÂò7§k±¡;AV	Øö/U|t(	<,Åö|%°1Âî¨9= QÄÜ:9ªpnâºÌëkÏ¦ò%Pîtçÿ:kql­VÉlhr¼c±yz"fÉ´À(#+¨7>Ùòn?+QE7úü·´ÇÌ´ØW"¼|£F{óô#¬:ûhh9d°¦O½Õ°Ùü¢v;¼D¯Êà!q¬û4û¬ÿ°·¹ZSÒIVö{Z¼äMÉ	j)W§¤c$j²ÊjÅè´À(×%ú£®øÒîÜºk=Mà4¾µF^Ä{µOX$»×;¬ªµÏÀ§1ÿhÏÏñ@ê	{^´Þô(ã$Aáà#ÿCëh49û'ËS^EPãßÁÂS©ºmHp8zHHÑo[¯mÇ?kêIñþ
Cceî%°Æî55¬M%-aÑ°eiGú Åk1:(/ÐçHmcÿÚ©¤«¨¨%lÍ=MÚöÆ·Wåbn~b9_Ñîp¹oâ%¯bò[uÖ	$áÆ/ï¼ºxBKvìðû¡¢Ù½ì^pðä{= nþZÔ%8qÿ
stýRC{ÊÃÏÿ¯*©ÌnÓ¯3©'[¬ÁÿNEhÞyaÑßúN£Ï¯T¹e±|= uo¤ÍÝXÿjC(l¼ÞÆ×VyÔ|F¾ú+=}q8GïÆV*²Á!×ÿºXà¶ WP^ÊUk
õÿÐ±èÆ:GÿÒ!G¨Ònlàm·ý¨ÖS$×gÈm!tDÉÄxAµx³J@[ ³½4?¼|m«À
ºÕy.g¶G¡D«Y÷ûªN¾ôÆf¼r´Ú N(XÍá¯üÙkÍþÖZ;"sz"v¦kÃ'SWyã)­17Ònî\ó2Ü8FkQâ$V¶æÆÏÝlþ2Â®¹;v(&g Díl'õÚC09ÜµÞ´>w\çÅZÜ#Êñ§*O$Á§ªút±£2ýG}¡?ù¥JA!Õ^Æ%Ñý y¼B÷m~¶0æ ©å|Uªô¿	ÃëÈÿû7ª,Kz)48©åRùH=}¼íÆïç±i]ü@Ãä°¢ÌÎïÕKâöÏtnöç«®YÓ#7#cÛËr¾6×m¾.£à^Ç=}àÆAÃU;Aý¯¹ÁÓÎ©QçÈ©î¶§èn?ù@ýB×ãýz¡èAtÏ[imÍlc®f,Ôó8ÿälçÆÀü¬·Î
ÿÒÂãÔ¦-Û{îYýZÿ,ÔÐê¯´#RêÑ(XMÞ= $î·â¯PÈõXNÞÛì½·Âú{"·NHP@¼m[Â¤AyxôË²AEìl¨=}íÊ|O
Hð·FÂu»=M1 tõccVúÆQg8iÉ1¸²o½aEºb¤n÷Í5¼&2$¸pÇþ¿PÂìúUx6ÒLkXuä©ßKyWCL£érGß=MÓ×$ÂÔ°Z*@ Ó´Ã1AR/.ØðÛÉ3/\\³.ÜxÁÂ»°ñª(Puù/«ÌåýÒ=}PKac4$5JFz;'+þ ¼Oc!jaFÿê¤'i/a1©½x/'ÙjËéÐR0Õ³³-^¦[Ü=M2ËduK	ÀhÍ=}LÇ¯/#E1ÇlnélY¡_eèþ*ÁCÖY%ÚDVÝÍ5ðMZcÛì%÷R¿XC\Ä©]±^n©fL}mâ·F)öû[NÛ¦RsÊ:¨jÆðº¯{Ø=MFrè×ú²×:Ë 1å8Ë÷ð÷?qZÝ u
N6 Ç@[µ ©­kÁ0Ð¥æX{FðM<ö×øÀIÈ9¾ºÐ»#{NL= MªÄSÀðê­é	Ç
êëUwXUkÀù¾PØºåÐ ±Ü_æçÈÜº1~XcÑ¤×Êp¹bÎ,&×»²ÁÎÌ³@pãX	R2ÂLÇëdÛfÚûvß|Ñ½J5æÍ´ùý"ÊlîÚL]\ÉÞÈ/föO³Ü3àqÜfâ¯^çÙ8ÚÔ_£F\ÛHØ,=MËð£<þþ|³ºQgì>3·ûBRÐïóEUîg?=M %º= Þc²}³ò!äÈã[WþdÍ¯­ãpoíRRx·E)¡ø'þSáÈðH{K°ß¯¢QkVw$£âìþ*=}~ÞYvVUðÀnÃÍÞã~á¹6\ÚDoÛTl-ÝÉöÓfÇÌ³.9Õ§Üû³ÔÖSY<$/pà@a¹lÑ*ö²Ì'¬Ý*0$Nª¤òüD ÷¾ÝÔÜrÇÏI¢ÕÔ¸ØU¤´,¦HÅ=}ø{Ò)ô£À2Mz2Ützk@áÌÝ­à>Öö´?xõÒÑ/§yÎÌ×üµ\úHØ\Ûív×è±ÜU¡[}[ÉËÌýSÝ¹+Y¸ØaßØÔüW¤L²üÖãe)0Ù¼¯6èëh\¾ü~ÑÄDÐ5n\ÎÔ {Ù¤aÛ_Ü<P§ÙÒú7±ëê0fG~2uBH×/òý";d·vJÑRG1j¥-¶1é3ÌÜìÝ¸±
¤ÖÀ°Ù\I0\±¬üêÏ$ ÙØWÖ ÜÙ\÷ýÇh_ºS´(³aìãºÞ§7QóÒ=M»''J­ºF´Í8¸ýöÀ[Ð¼vkX¬éØc >Ã|øÓûÐ'¯©ÑË[l_-7)¾Ã"ÑÍ	ba$ó;7ñqjùÉ9q<®úyä0#-Uðñ¸+=}ßH\)^R»cãpÏæÙ= ]È~½ÉáÛ³·:n]ä$Ê/ñ^|\Ëþ=}Ü²þq]tÑÄPP æ©¦¼ÌÌú*})CH0ï^DVF'ìåå·ÿ:b,æÅÛ[XIö^ÁopÛ~áSÆêSkïåÉ.ôe_]³1½ò5ÍâÚÐÏ-ó!"#.µ +¸m_±l±2#¬æ|ëEÁDÁ Ö¾F8´Ü4»¿§ºL´Ã|Ò×¬WÈ\²ë¨ªÒã#T©-.êÞ°¯°\9ßâ¢Ös{^m}] fcâb.ÃD<Û«¨Ñ\¼¸ L,:$°ªÀ;´g&³&mÎøùéY4Þ
/0D^:£r¢d1ànÙ=}7ìâº·§}ãDþ´&½èbÿ6WßÉÎ:ÈãçPW©òìôØþÃ¡äUÚHÖËLÈçcxêìÓ÷}t^ëèT}½<ÿºõKz¬<Ü$ÓxK)ê¡5§íúó
¤ «"&ñg_YX{kÿg'Á!/uGÍ3õHbtqiwâ/unÃÍ®Hu=M«= [q^PBJ°Z©ÌXÃrí8ô|ï½'þrÐ~ahV®L-µ
kÛLæôs4¬F8¤|×Ô8.¥äÙZn x0|jÙÎV@-²R9«Úzâ= êÇ<ßí@®§{L98ÕU6²­GjàñÃ¡I¼O§ärØö:.º&¾¿£Î9QÓMì-m¡¢éÐ £ðËÌ5ÄbýÃÓ~Y6çú
KTN.ºbìµñÑz^ÐìÀ¨£ºÌ¼Û#NÊØ;4¡U­£¢^±}Í¼bñË+vS³2¦ô*ú¸õÀ\pÌ
wHdkK-l,z#¾[?·ÞdàKeÎÚÓ&üWÿ¶§Ú ÉÊ®Ú<úüj«FeJ{¯ðdgÑ|Òí­µtØRåû¨8LùLxÏbÎfWH®ö¹ø·-°=}»oÙhóÖÀÈ÷åµËtfºúÇ^õ,ÔÙ¨¢]£(&ÀS1ð­Ó;xüXù¨Ì:yo]Ã^H½øN÷2º"áCBøY»cõc}ð1x:$¤sZºÏw@ ¼Ä·~qR¿^jvøò×ogvùßF,Ïâke>óT7|°tf®Ñ>Ü¸uÝÏiq_al@´ã»[!=},»èLe,<VC×ÐWD©=M/l«Ö6{U%ÔR±
ßg¾bÀò¢×¬XxSïõüÅ¾ªÐEÕ¢j/3^¦7(óýc¦<¾ÎÞµVÄlUßgvÉCæ·V»5ß~kÛcXøÚÍÁ7¤$Ìæ¡ú}¬ÁÚ=M ]ü¶»«$¹Î§y9bznáküÇ9t£Ã$í=M6Qfx=MÈõôqð+½²WöÑkõ©Æ×%vBb>ïLØmwøÀêh*®Ê-ßw4»F²O!Ü¿9}[Ïo¦çD©=MK·"¼©¡ð¸<k»úÍêØPs¨
Ï¡©ûÚÙêtq+³Xð}8\¥iÅàlGÂ«@cªc%m9³#Æ¼=M¤ÎÚD0AQ=}0Dá^âTè_6h²Ûiÿ}}·[¼/iöc<%¢:lhp<¶s]ºr÷ïÙ2k]q¬éJÐAÞÏÐWn½Ëêìÿ#ö#8{âö¹¢[¸Ìªt(:Ða8¬V¦F{\§
ßKG¨@4)óÀÄ·¼òEjÌ U:©§f$_èÚHIÍ© ¼I\)ý~HÒJÿN±z{6bªHìÙU¿È°ÊváÛ©ôd/¬ý#f{yxÏ;µó6°¥ÕÞÀ²#¤Ð*ÄªOæq¦[EÍ9ÇhÁ´ÊÚï5%=}»ð9/Ñ!eöâsßQÙ«£þ2áËyDÄKÆkcÜ¾5´ðø©nÔ³òQsA5íÍo\ O7ÉdõÂø·¨CÔÛníUy/Xd= äÄúWõ®&=}P,i·iÞ3®QÒIÞâNO4âCñ0®ÄÒäÿ¡XaL)ø,þ+\'¢«·5j¯*®=}í,;;~zªMD7Ç£ñPe.7¦Mk9àìñkÇÙ3Ü¡ÁÿÛTÅµ×ÓuywDiË)mµK}=}%A³·ùç:Y´J~ìôìÁÅOßb0à}x©¤ôË:h{UäÂqÆß¹¾Zo´þçð²?ÿÊîÉ4L;öÿQ¢º;ªL=M}m§°¦ ûO@x
És+~¿kéË'T$>b×ºf§9ðîw(ÒniÛXË+,ç41é£º$½¸;¾©¶=}ª¬¹m¸Ûô= wÞñ·aY3ün¡"ØüK9¢ÊÃR0)7vâÄÍ­|ê¦o¤ñÁ¤Ä%µËÅ£@HÓç¡%»¡äî¥´ã²£¤'Ô}Á¾÷çVà»+/íOb_TsÎ$-Øöp_±ÜÆèÍ]À ¥þð Ãc8X,ôTv¸
¾Ë/yVh¬¹Fd °j"wç5¹¶°Hº ¥L¦ÄjÓ[þÕª·îÑ«$=}[E	ç]|O¹µÕLý÷½+ÛWÍ±¾ÕOfÐ=MýÏHlÉtá;ðd¿(øK@N=}üDÏfg¸5ç£''lV|Å3ä¸fgò}= ús
²ÀÀ«Èì)ËI1þâ×¶XÈ¦W|þ¬UÿdlQt¸ÒDë°ÌeK¸-&±_Q@5ò¨lx ´j÷ÃX]ýÚÞ}$IÎH ÚxIUÚËÔdY-çQ5Q 7	·[(~_ýàB¢X0ûê²¿Ê¿H®þ:jãr£§XWÖ6rã¼Òm¹>rh."èÊN¨­õê#Ï8Ä8rÛh/Ã1%}¨LZøÅ(Ì,QÈïG§ º3Ô#ÄÊ
M Ü§y°úFmÅnÀ¤ D-µMA lkúFdÅ0<¿÷.UWEüâ$9q!2}éA®Ø²V= ÔH¼©GG1ö{2Ò¶z:bG«ØZ£¢»cùp©uQbnPùº8Ö¦¤_wN°ý:-® pcx¨Æ
Fô9FmKßãlsÊÁ³´^xãÆ_£«Oë^¸#r;n;SÃQ¯ârñZ'kXK§i÷Ò§u0×úQð>÷»hÁt¾èNºÁ@yiß2]¡@'»r¿ÆoøE§u¨Y-ç1Û@+Ä/9pÁ¾±Õ'pÃ1)&kX|ó~á´Â$Võ2!}G»¶?IÚÒxòÆ_¯Ò@kô¾½îðô'ûÙ2öP§ :æÉ¶Ï\èÎÑD¶ØDÂ¯ârù{ÌÔÈ÷Ë«Ðlië\.§y¯­ârDTcp	NlV#2^'g¨CXkÙÂÂRíu1>+B}ñàÌØ_ÈÅ
¨öËf!}ck|É§¤3âèùÙïMpºÊgYÒûôÏÍËÚSkä¡\.bòo!WÊúò[ü3JTjiÂnËë3Æäº=MÊ¹\&4Ko}¶·XôXÃ8õWWå)= à2µ	¦ä«ÚFXK§}¯z-ú®\«Ó¨Õ552[:â2u0öâÈSXÍ²h­TØÇs\.£yg&Tô©3@lÌÇ.¯DlèB¯âÂ#sJ¬¾}¥&>Òç)'v0þÆ_¯JT¼öUãFÖÂ×Ú%QöÂnUÜx»°ñµW\¯¯¥²p.r|ªF	*É ¡Ø§u0·Ýº}+èûÚ[ùlw\YÂcS\.b2^/}Ëü= ôü£LGXëÖË@+BôÑÄöØÎ|ü±Üyg·L{þð;·"É>öñnG$L¶Ó¯û¹Ì­´úÛæK#ò_CGÜ:[!ra°ëFËÍ¤a÷¥ .¸6ûÑÙUöWÃ¾ÓqÜ#èóÈ <§¶-bzÌ¤	FJ#2{Æ¦gIÂÞ'0>â_àVïÖÑNµ Ìï­I3Ê(¹ë¼hWêÊ[6ÃÝµ15öð-c»>2SÒpÖãlË±Ñà¥ÊdO¦ÿXç*= Ðn¶Çµ« Ej(W´ççý×Å£ð¥¯ÊË­·¹Ïj2ºG+~2à'£ÛC´¹ÑH3ö-®íGûâ'ªEóõ®Ëªà*Drë\-{T£õ6©ºòÿ-âI¬Å­ÇP Øå[ÀEËub}ñ£#HNÞR\z[~ .è¯âòc!!ÓaËì2ÓìÈ©êÀòQ½+ñ¬_§Vg
ß2]çPÇâL¨·ð~b±m-çqD<.ä4yk/VP$â§]¯ì×&=M×>pÓS¬ÆC_K%Q¥ s»tÂëÅt­âQ;ÈV	ìÒ)ËÎ=Mêöâ»¯Qïrl«xz»?-ã1¯7ÛZ·2ñMAÄ bY-i2VljßFÞ7[ÛdÜgj¹Ðq$!;q; "H¨WMÈH}èGø|í
Ô¾X¢ºØËÝBÄfH>!,z°§ðÉÇ«h²N= ¡ñ~#\%Ä¸+ØãäªC²¼¨°¢eÏÃÁãæÞÙÑ=MáªØèSÁ{VçØ@ÖTqEÄN\	ÁËP÷Ø52dâºÊ3ck~40ò}Ñ]8²BÅYèÜm_n»#r^/}cLÐ jÄËHè<!"}é!ôK};Ï³|[VMd)Ø>¸§<ª»![Ìäg98ÁÐfÏ6\Ñ¿Ádx¥Î§³«á
%ór|vºÖóÏX¯Ñ268K¥2mâêû
Çj@;¸%Ø©)ä5ò*w¾:}#²YØ$4ËÝ2]3$~Sc= 0wPnåqßÚY	Yób³¸üÙQ ËàjQ@ç:-ëúÜ×-º(hQìWÖyÃÏm¨l·õraÁ¾G ãLK¡´ìK"}ñ%ØqF"ôÖ«·r¬ðàBJPt«u"¢¨õÖjS¹gd5ÒÈIóbø|Ôü½E1îÆ_3Æ|R¯~Q7ÏÔèK"è7ý>^ë
 ×Ô :-dé!dë¹Fø ÐâÆûC2³´Ï1çw[[ì»çÅ_h[7$LbîL;|É¥ôq?Áf/$ìúÏE?Ù NÝ^-éb>Ñàÿß]mÝíÞ1ýøéãl]Ýâmýýÿåþí!½Þ]Þm[ùDÃþÅ*]t±éãWÌ~4ãDìBº³º­+,Ñ9¤ÝTì = súñÒþ°= ¦$+ã¨Ýä*ÓM®èPMq	Ïm2Äë/Ïí°ª% !¼Ü¶ýpÉåí];P¨´å¢û3¹ÜñvuAÖTÔC$SA¥ø;$3pðsOËkÒ´F)*zV6×^áþ*= qáÅÝv3DsóßsÇè©´i =}î6s¥gØÇÆ8Ùø>NJý ¡×W|BÕr2±sZ=}J26ñ^¿^mï<ì]ÁÀ#±ÖHbÝNu_Ò§È-@×ë©%Ë{gUy«KWªæ~ôâQMg#5­3íF¿úU Ñ¹	P»V$;®u~Ð5¶nA¥x9½d6ÑjPëéßÜàÅèBìªCTè¸¯7(08;²ñCÁC¡BQêöÐsª6ÊDYJÕóV+\D­Ë ÜÙºÙTÉÜÞiÜÜxòÝÜ²4×4óáÿl>mRâû¯zBÒvssa²øs¬Û¢rßUr>÷^$³æýÏ.xîÎìÖÏôÇ$Í»dÓ¸ª^ì{ó-,{Ê>Kaæä·)eÎ¹^7Ô#x®m_1Ý¼í:õ ÅÝËd÷ÿ/gÚèù7B^³$,KÁª)ì×fíÎPÆÒÜ¥Å°{åX¡~¡j}XôÕÃÇZé¸¯Vro;ØîûÛszFÿÌ&yì¾àÛ¾_}}ûòKç¹ªÚ= }t(Îlf'à²»eL=}aãx'¦ûniÊ¦#1¹üoB]]­Ýã~ó¹³\,ÇaÅFWæÙNHæ0$xïÓ_ü#ïL	[ð_V÷µ= ³Cñ©I<+f§g'LÆ?bû!cµÐGzóöÂÆõ	= ¿$ñÄ=}Á×qÄÃúùt3£B0üëGÓVÞ¨= µS§úbT¹QO É6
iv=MoD®x6Li¡ì®¾¹HÃ»Ý#ÖnÃË">à~>i8VÞÚÔ.qL²ñ ¿æg*¬vL³!0#l£~óÖ{tÐ:­$Õrÿ
þrºÙz³n	8Kçî¨eMù!Ø{"ñzç@±d|¸ýÊÚuÙ£÷+U7ÀÄRì.)ûò uÚp¢x [ßFfÛ@è@ôÃÖt°SoÆsòS1±÷sØe¸;N¥»º©­&Ï¥·D-}q§INüq7V?0a°ø×|' Ò#3Ó»4Á©¸ÖÙ yÌ'°#_ÿ³v
Oó3S¨û}=})í·ÄëÀí\xýZú¡:à5|ìÜT®)C38<¯³ù¢Ø¡ñ;ºw;çÕÀÆF¥r[&ù°hÎ«9ªÒ³¡VÅP5¾ÿ4¼eín«êÅçiYíaZ­ÙüdÙZIUuH¬­öo*}ÀWë[@,?¢ØUTÔ"\²]Óö~y6Ë sû µöòcÈùRi3¹}#÷Z$ZóÚnvÈ{=}ín8EØÿÇäÎõ×¢CÒY¹1£KyÙ õWvA<R§ço|¤t[ÉjPÚÌéª«C~!7R´|ü´ÂÇð7p¯õNhñIïØnei"¬fUp= j"Æaxª-=Mw©¿Í 	é,7ûÔë&ÚéiÔ&Vð¨ñÍz(%8;À®¬~J1Â°ÖëÇ¤:1|&eµaevÞof uJw¬¥ÀÖÂáh¦ïM¸âJäÆsíhå!T=M¶sÝ)gbíü*¦ÿ·À(w©g	OiVxD%Yÿj³	L?0ÉY?Ã­4L¡fâÅÎÔã¿RM6¢ô^è±¢ºÊãëàÕR<?ÀÒ3±ïwå´B2Iä òÅö%ÊÈn)xfØÍõ3h=M°×àO´õ\kÌÖ ut$ím?®sG£TLÿC.'È¬{¨wtYØáö«ÐÛ¨I\|d= $O×dóF·)@úzû$ìLÍëj|°5Yrä*ÞÉ÷j×Ðù|Eç°wxVÔ~Hò q~ùÂ(ï½g÷9­Ä*.Òe»¬È*î©È Y
àòÅ¼]wí;»ãE$¿OÊ D¼zALý&»Åº5¡kÄkÅO$¨cf;0Óûrô|)kþ×èøl=MSjà¨AüNFÎë³W¾Ì³·yÙËG¡ô=MÕ.g9}û¶z¤¥ù²!Õü,P	XZ<öÎþ¾¡6G×å@¯XÉûñT8 04&¥ÒäA±¼Æ÷ò¤Û!µL·'¿'uÙT;å"ÿ_AS:L<àÜfÄægw_Èºal¼	yOv2í<u'¸z9¿õ@w*Ïóæ+G©ý³#OÆsÀ/cÛ¡{Á©ªä©SRA1&È(E£*¨åá®?4¢)Òû{2Ù¢Ø3_4nc·ÈWAqVÛðY<rÎ+k¨°4¤Rlðõ<+~äo<õ>Kj4Æ±ØÍË6À_5\
Bél ­Ì×¨&í"¤ãÙh«-úUíÐÒq¨Õ®VìÒwTÔôuª¨ïI^þ(¶-ðja_\hðnÇgù»fÛÛÈ¶Z±m¬O¡9!F'üWÙå	þ©mw9gP¬N'ï¶
³,°
gXUÃïÛ(Ï´]iDòÚ?«EÈBl6Ý ÖÍAäZ¢VYØ×íÊT®ÎU
 HÜ¿¬.WzÚ­ö. ¹¿ú©)hB»9ø6ÛérAceL¯ç
9g¢ya¦%®S+c§S9²×XÛ§Xl÷t	¢X,ãÎã¼QîÖöM§ÉeOG©F9Äe³e#+üBè7|0
r ÐKä»I± ih£¾z­]ÈØY,¿:ã&*»P&Yâù6VÃ>PµÚ8çºìêöø\s}Ê«»ühÂ¾ã÷ù9VñÌ,³Ùµ©o{áVDOMøú¤uX3t:6í©5j%)ùÿeWÒsd{½±H¦]¸ä#%2-ýw¡{¦2c1¶ZÇô{~	oz¨õøFcÃ³!S~Î8í¾w þ¨Ë&Øµ
g¹¯´ì±Ñp·¯Æúj!Ùê3û|©Ña°9èó PSàj¨ÎZ®%WçÇ&Õ¹0 Á(d¤=M_¸tð÷û(×ÁÌ»Êú@\åPË}ãH:¥/vªËß ®è" \Ð=Mî¤kÛ(ÝN¸µ[ì\Ú¢µ_<U¡C×·9öbsR¾5rqêïðÙd@Ý
¸êÃUZ´=}ÆÉ
CU¡ÍÌ]Âuf¸i^ÍN¸<ößiIÒzWHÈDkòPë­Kã.í»+{J¸V0¸J¸J¸Ã³J#Ä8+KÉA¥NAú¬Í)ôÂ¼¡%°|ù(JPsS±E¯j=M-2Þ[6+Ïû¿²h$É³0= êL,§D1ÌJÈBrÚ YÏxSòRFx¤ÚK+ÐÃ:&öôêGº´;ÌúÏà7Ðr´Í6I)ó÷~~àrOy­E\ÔfËøª¬ÓFÜ§ìpQ¯{¨EO:.ÆÔEÊm¢Ä¹#{±
r÷|ú
*ÔàñT' 8KpLjúwù@Q(HÎj{¥¦SÙ01TÀ7F<â<$êÐÉSLVa·ËEk´&[[Ê×zôEtF@Ë9KV©ÇEÙK¬)G4WÛWv3ýn§ÁçÂxârjz= phxdtl|\=}-M¥ìÉÜ\¾Ù%Á?vq³¾Ãð6æøÇ]\C"3ú¹ï 5ÞÞçpXç)z²^Rû÷üoõ{µ(âw]WT½Ïm§Cö4&t]Ât[bìÓ®\%óêëÌÔfìW´@¨ÁÚ_ª÷n xV½é9]MàËàUßÍ/»äµÝ<½äÙÝåáýõaY¿DÅìZÀìØüÛ£üÞÿÍ$Z-×8Ò\ Üb½RLhuñ®äâøþsBV_»ë»Um3
½ÇaztÅò¬¼Åâ`});var p={a:b};this.o=t=>{i.o(n,t)},this.M=()=>i.M(n),this.instantiate=()=>(this.M().then(i=>WebAssembly.instantiate(i,p)).then(i=>{const r=i.exports;var s;(i=>{f=i.m,J=i.n,u=i.p,w=i.q,g=i.r,R=i.s,y=i.t})(r),s=(e=r.k).buffer,t=new Uint8Array(s),H=new Uint32Array(s),new BigInt64Array(s),new BigUint64Array(s),(i=>{i.l()})(r),h()}),this.ready=new Promise(i=>{h=i}).then(()=>{this.T=e.buffer,this.B=f,this.free=J,this.Z=w,this.ii=g,this.ti=u,this.Hi=R}),this)}function o(i={}){return this.ei=()=>(new this.ri).instantiate(this.si,this.hi).then(t=>{this.ni=t,this.oi=0,this.Mi=0,this.ci=0,this.ai=0,this.Ii=this.ni.P(this.li,Uint8Array),this.di=this.ni.P(this.mi,Float32Array);const H=this.ni.P(1,Uint32Array);this.fi=this.ni.P(1,Uint32Array),this.Ji=this.ni.P(1,Uint32Array),this.ui=this.ni.P(1,Uint32Array);const e=this.ni.I.ti(H.D,!1===i.enableGapless?0:1);if(e)throw Error(this.wi(e));this.gi=H.v[0]}),Object.defineProperty(this,"ready",{enumerable:!0,get:()=>this.Ri}),this.wi=i=>i+" "+this.ni.F(this.ui.v[0]),this.reset=()=>(this.free(),this.ei()),this.free=()=>{this.ni.I.Hi(this.gi),this.ni.I.free(this.gi),this.ni.free()},this.decode=i=>{let t=[],H=[],e=0;if(!(i instanceof Uint8Array))throw Error("Data to decode must be Uint8Array. Instead got "+typeof i);i:for(let r=0,s=0;r<i.length;r+=s){const h=i.subarray(r,this.Ii.O+r);s=h.length,this.Mi+=s,this.Ii.v.set(h);let n=this.ni.I.Z(this.gi,this.Ii.D,s);if(-10!==n)for(;;){this.fi.v[0]=0,n=this.ni.I.ii(this.gi,this.di.D,this.di.O,this.fi.D,this.Ji.D,this.ui.D);const i=this.fi.v[0];if(this.ci+=i,i&&(e+=i,t.push([this.di.v.slice(0,i),this.di.v.slice(i,2*i)])),-11!=n){if(-10===n)continue i;if(n){const i=this.wi(n);console.error("mpg123-decoder: "+i),this.ni._(H,i,0,this.ai,this.Mi,this.ci)}}}}return this.ri.L(H,t,2,e,this.Ji.v[0])},this.decodeFrame=i=>{const t=this.decode(i);return this.ai++,t},this.decodeFrames=i=>{let t=[],H=[],e=0,r=0;for(;r<i.length;){const s=this.decodeFrame(i[r++]);t.push(s.channelData),H=H.concat(s.V),e+=s.samplesDecoded}return this.ri.L(H,t,2,e,this.Ji.v[0])},this.yi=o.U,this.ri=o.X||r,this.si=o.Y||n,this.hi=o.module,this.li=65536,this.mi=92448,this.Ri=this.ei(),this}class M extends s{constructor(i){super(i,"mpg123-decoder",o,n)}async decode(i){return this.G("decode",i)}async decodeFrame(i){return this.G("decodeFrame",i)}async decodeFrames(i){return this.G("decodeFrames",i)}}h(o,"MPEGDecoder"),h(M,"MPEGDecoderWebWorker"),i.MPEGDecoder=o,i.MPEGDecoderWebWorker=M},"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@eshaz/web-worker")):"function"==typeof define&&define.amd?define(["exports","@eshaz/web-worker"],t):t((i="undefined"!=typeof globalThis?globalThis:i||self)["mpg123-decoder"]={},i.Worker);
//# sourceMappingURL=mpg123-decoder.min.js.map
;


;
// Original plugin 9: assets/scripts/framework/core/net/socketIO/socket.io.js
// SHA256: da8317307ee69e29677fa1c3fee338ea82672f560c4c24057ec1657861e672bb
/*!
 * Socket.IO v2.5.0
 * (c) 2014-2021 Guillermo Rauch
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["io"] = factory();
	else
		root["io"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var url = __webpack_require__(1);
	var parser = __webpack_require__(7);
	var Manager = __webpack_require__(12);
	var debug = __webpack_require__(3)('socket.io-client');
	
	/**
	 * Module exports.
	 */
	
	module.exports = exports = lookup;
	
	/**
	 * Managers cache.
	 */
	
	var cache = exports.managers = {};
	
	/**
	 * Looks up an existing `Manager` for multiplexing.
	 * If the user summons:
	 *
	 *   `io('http://localhost/a');`
	 *   `io('http://localhost/b');`
	 *
	 * We reuse the existing instance based on same scheme/port/host,
	 * and we initialize sockets for each namespace.
	 *
	 * @api public
	 */
	
	function lookup (uri, opts) {
	  if (typeof uri === 'object') {
	    opts = uri;
	    uri = undefined;
	  }
	
	  opts = opts || {};
	
	  var parsed = url(uri);
	  var source = parsed.source;
	  var id = parsed.id;
	  var path = parsed.path;
	  var sameNamespace = cache[id] && path in cache[id].nsps;
	  var newConnection = opts.forceNew || opts['force new connection'] ||
	                      false === opts.multiplex || sameNamespace;
	
	  var io;
	
	  if (newConnection) {
	    debug('ignoring socket cache for %s', source);
	    io = Manager(source, opts);
	  } else {
	    if (!cache[id]) {
	      debug('new io instance for %s', source);
	      cache[id] = Manager(source, opts);
	    }
	    io = cache[id];
	  }
	  if (parsed.query && !opts.query) {
	    opts.query = parsed.query;
	  }
	  return io.socket(parsed.path, opts);
	}
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	exports.protocol = parser.protocol;
	
	/**
	 * `connect`.
	 *
	 * @param {String} uri
	 * @api public
	 */
	
	exports.connect = lookup;
	
	/**
	 * Expose constructors for standalone build.
	 *
	 * @api public
	 */
	
	exports.Manager = __webpack_require__(12);
	exports.Socket = __webpack_require__(37);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var parseuri = __webpack_require__(2);
	var debug = __webpack_require__(3)('socket.io-client:url');
	
	/**
	 * Module exports.
	 */
	
	module.exports = url;
	
	/**
	 * URL parser.
	 *
	 * @param {String} url
	 * @param {Object} An object meant to mimic window.location.
	 *                 Defaults to window.location.
	 * @api public
	 */
	
	function url (uri, loc) {
	  var obj = uri;
	
	  // default to window.location
	  loc = loc || (typeof location !== 'undefined' && location);
	  if (null == uri) uri = loc.protocol + '//' + loc.host;
	
	  // relative path support
	  if ('string' === typeof uri) {
	    if ('/' === uri.charAt(0)) {
	      if ('/' === uri.charAt(1)) {
	        uri = loc.protocol + uri;
	      } else {
	        uri = loc.host + uri;
	      }
	    }
	
	    if (!/^(https?|wss?):\/\//.test(uri)) {
	      debug('protocol-less url %s', uri);
	      if ('undefined' !== typeof loc) {
	        uri = loc.protocol + '//' + uri;
	      } else {
	        uri = 'https://' + uri;
	      }
	    }
	
	    // parse
	    debug('parse %s', uri);
	    obj = parseuri(uri);
	  }
	
	  // make sure we treat `localhost:80` and `localhost` equally
	  if (!obj.port) {
	    if (/^(http|ws)$/.test(obj.protocol)) {
	      obj.port = '80';
	    } else if (/^(http|ws)s$/.test(obj.protocol)) {
	      obj.port = '443';
	    }
	  }
	
	  obj.path = obj.path || '/';
	
	  var ipv6 = obj.host.indexOf(':') !== -1;
	  var host = ipv6 ? '[' + obj.host + ']' : obj.host;
	
	  // define unique id
	  obj.id = obj.protocol + '://' + host + ':' + obj.port;
	  // define href
	  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));
	
	  return obj;
	}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */
	
	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
	
	var parts = [
	    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
	];
	
	module.exports = function parseuri(str) {
	    var src = str,
	        b = str.indexOf('['),
	        e = str.indexOf(']');
	
	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }
	
	    var m = re.exec(str || ''),
	        uri = {},
	        i = 14;
	
	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }
	
	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }
	
	    uri.pathNames = pathNames(uri, uri['path']);
	    uri.queryKey = queryKey(uri, uri['query']);
	
	    return uri;
	};
	
	function pathNames(obj, path) {
	    var regx = /\/{2,9}/g,
	        names = path.replace(regx, "/").split("/");
	
	    if (path.substr(0, 1) == '/' || path.length === 0) {
	        names.splice(0, 1);
	    }
	    if (path.substr(path.length - 1, 1) == '/') {
	        names.splice(names.length - 1, 1);
	    }
	
	    return names;
	}
	
	function queryKey(uri, query) {
	    var data = {};
	
	    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
	        if ($1) {
	            data[$1] = $2;
	        }
	    });
	
	    return data;
	}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(5);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
	    return true;
	  }
	
	  // Internet Explorer and Edge do not support colors.
	  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
	    return false;
	  }
	
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
	  // is firebug? http://stackoverflow.com/a/398120/376773
	  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
	  // is firefox >= v31?
	  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
	  // double check webkit in userAgent just in case we are in a worker
	  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function (v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs(args) {
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return;
	
	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit');
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function (match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch (e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch (e) {}
	
	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (!r && typeof process !== 'undefined' && 'env' in process) {
	    r = process.env.DEBUG;
	  }
	
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(6);
	
	/**
	 * Active `debug` instances.
	 */
	exports.instances = [];
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */
	
	exports.formatters = {};
	
	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor(namespace) {
	  var hash = 0,
	      i;
	
	  for (i in namespace) {
	    hash = (hash << 5) - hash + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }
	
	  return exports.colors[Math.abs(hash) % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function createDebug(namespace) {
	
	  var prevTime;
	
	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;
	
	    var self = debug;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // turn the `arguments` into a proper Array
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);
	
	    var logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	
	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);
	  debug.destroy = destroy;
	
	  // env-specific initialization logic for debug instances
	  if ('function' === typeof exports.init) {
	    exports.init(debug);
	  }
	
	  exports.instances.push(debug);
	
	  return debug;
	}
	
	function destroy() {
	  var index = exports.instances.indexOf(this);
	  if (index !== -1) {
	    exports.instances.splice(index, 1);
	    return true;
	  } else {
	    return false;
	  }
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  exports.names = [];
	  exports.skips = [];
	
	  var i;
	  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	
	  for (i = 0; i < exports.instances.length; i++) {
	    var instance = exports.instances[i];
	    instance.enabled = exports.enabled(instance.namespace);
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  if (name[name.length - 1] === '*') {
	    return true;
	  }
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) {
	    return;
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name;
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var debug = __webpack_require__(3)('socket.io-parser');
	var Emitter = __webpack_require__(8);
	var binary = __webpack_require__(9);
	var isArray = __webpack_require__(10);
	var isBuf = __webpack_require__(11);
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	exports.protocol = 4;
	
	/**
	 * Packet types.
	 *
	 * @api public
	 */
	
	exports.types = [
	  'CONNECT',
	  'DISCONNECT',
	  'EVENT',
	  'ACK',
	  'ERROR',
	  'BINARY_EVENT',
	  'BINARY_ACK'
	];
	
	/**
	 * Packet type `connect`.
	 *
	 * @api public
	 */
	
	exports.CONNECT = 0;
	
	/**
	 * Packet type `disconnect`.
	 *
	 * @api public
	 */
	
	exports.DISCONNECT = 1;
	
	/**
	 * Packet type `event`.
	 *
	 * @api public
	 */
	
	exports.EVENT = 2;
	
	/**
	 * Packet type `ack`.
	 *
	 * @api public
	 */
	
	exports.ACK = 3;
	
	/**
	 * Packet type `error`.
	 *
	 * @api public
	 */
	
	exports.ERROR = 4;
	
	/**
	 * Packet type 'binary event'
	 *
	 * @api public
	 */
	
	exports.BINARY_EVENT = 5;
	
	/**
	 * Packet type `binary ack`. For acks with binary arguments.
	 *
	 * @api public
	 */
	
	exports.BINARY_ACK = 6;
	
	/**
	 * Encoder constructor.
	 *
	 * @api public
	 */
	
	exports.Encoder = Encoder;
	
	/**
	 * Decoder constructor.
	 *
	 * @api public
	 */
	
	exports.Decoder = Decoder;
	
	/**
	 * A socket.io Encoder instance
	 *
	 * @api public
	 */
	
	function Encoder() {}
	
	var ERROR_PACKET = exports.ERROR + '"encode error"';
	
	/**
	 * Encode a packet as a single string if non-binary, or as a
	 * buffer sequence, depending on packet type.
	 *
	 * @param {Object} obj - packet object
	 * @param {Function} callback - function to handle encodings (likely engine.write)
	 * @return Calls callback with Array of encodings
	 * @api public
	 */
	
	Encoder.prototype.encode = function(obj, callback){
	  debug('encoding packet %j', obj);
	
	  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
	    encodeAsBinary(obj, callback);
	  } else {
	    var encoding = encodeAsString(obj);
	    callback([encoding]);
	  }
	};
	
	/**
	 * Encode packet as string.
	 *
	 * @param {Object} packet
	 * @return {String} encoded
	 * @api private
	 */
	
	function encodeAsString(obj) {
	
	  // first is type
	  var str = '' + obj.type;
	
	  // attachments if we have them
	  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
	    str += obj.attachments + '-';
	  }
	
	  // if we have a namespace other than `/`
	  // we append it followed by a comma `,`
	  if (obj.nsp && '/' !== obj.nsp) {
	    str += obj.nsp + ',';
	  }
	
	  // immediately followed by the id
	  if (null != obj.id) {
	    str += obj.id;
	  }
	
	  // json data
	  if (null != obj.data) {
	    var payload = tryStringify(obj.data);
	    if (payload !== false) {
	      str += payload;
	    } else {
	      return ERROR_PACKET;
	    }
	  }
	
	  debug('encoded %j as %s', obj, str);
	  return str;
	}
	
	function tryStringify(str) {
	  try {
	    return JSON.stringify(str);
	  } catch(e){
	    return false;
	  }
	}
	
	/**
	 * Encode packet as 'buffer sequence' by removing blobs, and
	 * deconstructing packet into object with placeholders and
	 * a list of buffers.
	 *
	 * @param {Object} packet
	 * @return {Buffer} encoded
	 * @api private
	 */
	
	function encodeAsBinary(obj, callback) {
	
	  function writeEncoding(bloblessData) {
	    var deconstruction = binary.deconstructPacket(bloblessData);
	    var pack = encodeAsString(deconstruction.packet);
	    var buffers = deconstruction.buffers;
	
	    buffers.unshift(pack); // add packet info to beginning of data list
	    callback(buffers); // write all the buffers
	  }
	
	  binary.removeBlobs(obj, writeEncoding);
	}
	
	/**
	 * A socket.io Decoder instance
	 *
	 * @return {Object} decoder
	 * @api public
	 */
	
	function Decoder() {
	  this.reconstructor = null;
	}
	
	/**
	 * Mix in `Emitter` with Decoder.
	 */
	
	Emitter(Decoder.prototype);
	
	/**
	 * Decodes an encoded packet string into packet JSON.
	 *
	 * @param {String} obj - encoded packet
	 * @return {Object} packet
	 * @api public
	 */
	
	Decoder.prototype.add = function(obj) {
	  var packet;
	  if (typeof obj === 'string') {
	    packet = decodeString(obj);
	    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) { // binary packet's json
	      this.reconstructor = new BinaryReconstructor(packet);
	
	      // no attachments, labeled binary but no binary data to follow
	      if (this.reconstructor.reconPack.attachments === 0) {
	        this.emit('decoded', packet);
	      }
	    } else { // non-binary full packet
	      this.emit('decoded', packet);
	    }
	  } else if (isBuf(obj) || obj.base64) { // raw binary data
	    if (!this.reconstructor) {
	      throw new Error('got binary data when not reconstructing a packet');
	    } else {
	      packet = this.reconstructor.takeBinaryData(obj);
	      if (packet) { // received final buffer
	        this.reconstructor = null;
	        this.emit('decoded', packet);
	      }
	    }
	  } else {
	    throw new Error('Unknown type: ' + obj);
	  }
	};
	
	/**
	 * Decode a packet String (JSON data)
	 *
	 * @param {String} str
	 * @return {Object} packet
	 * @api private
	 */
	
	function decodeString(str) {
	  var i = 0;
	  // look up type
	  var p = {
	    type: Number(str.charAt(0))
	  };
	
	  if (null == exports.types[p.type]) {
	    return error('unknown packet type ' + p.type);
	  }
	
	  // look up attachments if type binary
	  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
	    var buf = '';
	    while (str.charAt(++i) !== '-') {
	      buf += str.charAt(i);
	      if (i == str.length) break;
	    }
	    if (buf != Number(buf) || str.charAt(i) !== '-') {
	      throw new Error('Illegal attachments');
	    }
	    p.attachments = Number(buf);
	  }
	
	  // look up namespace (if any)
	  if ('/' === str.charAt(i + 1)) {
	    p.nsp = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (',' === c) break;
	      p.nsp += c;
	      if (i === str.length) break;
	    }
	  } else {
	    p.nsp = '/';
	  }
	
	  // look up id
	  var next = str.charAt(i + 1);
	  if ('' !== next && Number(next) == next) {
	    p.id = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (null == c || Number(c) != c) {
	        --i;
	        break;
	      }
	      p.id += str.charAt(i);
	      if (i === str.length) break;
	    }
	    p.id = Number(p.id);
	  }
	
	  // look up json data
	  if (str.charAt(++i)) {
	    var payload = tryParse(str.substr(i));
	    var isPayloadValid = payload !== false && (p.type === exports.ERROR || isArray(payload));
	    if (isPayloadValid) {
	      p.data = payload;
	    } else {
	      return error('invalid payload');
	    }
	  }
	
	  debug('decoded %s as %j', str, p);
	  return p;
	}
	
	function tryParse(str) {
	  try {
	    return JSON.parse(str);
	  } catch(e){
	    return false;
	  }
	}
	
	/**
	 * Deallocates a parser's resources
	 *
	 * @api public
	 */
	
	Decoder.prototype.destroy = function() {
	  if (this.reconstructor) {
	    this.reconstructor.finishedReconstruction();
	  }
	};
	
	/**
	 * A manager of a binary event's 'buffer sequence'. Should
	 * be constructed whenever a packet of type BINARY_EVENT is
	 * decoded.
	 *
	 * @param {Object} packet
	 * @return {BinaryReconstructor} initialized reconstructor
	 * @api private
	 */
	
	function BinaryReconstructor(packet) {
	  this.reconPack = packet;
	  this.buffers = [];
	}
	
	/**
	 * Method to be called when binary data received from connection
	 * after a BINARY_EVENT packet.
	 *
	 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
	 * @return {null | Object} returns null if more binary data is expected or
	 *   a reconstructed packet object if all buffers have been received.
	 * @api private
	 */
	
	BinaryReconstructor.prototype.takeBinaryData = function(binData) {
	  this.buffers.push(binData);
	  if (this.buffers.length === this.reconPack.attachments) { // done with buffer list
	    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
	    this.finishedReconstruction();
	    return packet;
	  }
	  return null;
	};
	
	/**
	 * Cleans up binary packet reconstruction variables.
	 *
	 * @api private
	 */
	
	BinaryReconstructor.prototype.finishedReconstruction = function() {
	  this.reconPack = null;
	  this.buffers = [];
	};
	
	function error(msg) {
	  return {
	    type: exports.ERROR,
	    data: 'parser error: ' + msg
	  };
	}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	if (true) {
	  module.exports = Emitter;
	}
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	
	  // Remove event specific arrays for event types that no
	  // one is subscribed for to avoid memory leak.
	  if (callbacks.length === 0) {
	    delete this._callbacks['$' + event];
	  }
	
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	
	  var args = new Array(arguments.length - 1)
	    , callbacks = this._callbacks['$' + event];
	
	  for (var i = 1; i < arguments.length; i++) {
	    args[i - 1] = arguments[i];
	  }
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/*global Blob,File*/
	
	/**
	 * Module requirements
	 */
	
	var isArray = __webpack_require__(10);
	var isBuf = __webpack_require__(11);
	var toString = Object.prototype.toString;
	var withNativeBlob = typeof Blob === 'function' || (typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]');
	var withNativeFile = typeof File === 'function' || (typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]');
	
	/**
	 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
	 * Anything with blobs or files should be fed through removeBlobs before coming
	 * here.
	 *
	 * @param {Object} packet - socket.io event packet
	 * @return {Object} with deconstructed packet and list of buffers
	 * @api public
	 */
	
	exports.deconstructPacket = function(packet) {
	  var buffers = [];
	  var packetData = packet.data;
	  var pack = packet;
	  pack.data = _deconstructPacket(packetData, buffers);
	  pack.attachments = buffers.length; // number of binary 'attachments'
	  return {packet: pack, buffers: buffers};
	};
	
	function _deconstructPacket(data, buffers) {
	  if (!data) return data;
	
	  if (isBuf(data)) {
	    var placeholder = { _placeholder: true, num: buffers.length };
	    buffers.push(data);
	    return placeholder;
	  } else if (isArray(data)) {
	    var newData = new Array(data.length);
	    for (var i = 0; i < data.length; i++) {
	      newData[i] = _deconstructPacket(data[i], buffers);
	    }
	    return newData;
	  } else if (typeof data === 'object' && !(data instanceof Date)) {
	    var newData = {};
	    for (var key in data) {
	      newData[key] = _deconstructPacket(data[key], buffers);
	    }
	    return newData;
	  }
	  return data;
	}
	
	/**
	 * Reconstructs a binary packet from its placeholder packet and buffers
	 *
	 * @param {Object} packet - event packet with placeholders
	 * @param {Array} buffers - binary buffers to put in placeholder positions
	 * @return {Object} reconstructed packet
	 * @api public
	 */
	
	exports.reconstructPacket = function(packet, buffers) {
	  packet.data = _reconstructPacket(packet.data, buffers);
	  packet.attachments = undefined; // no longer useful
	  return packet;
	};
	
	function _reconstructPacket(data, buffers) {
	  if (!data) return data;
	
	  if (data && data._placeholder) {
	    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
	  } else if (isArray(data)) {
	    for (var i = 0; i < data.length; i++) {
	      data[i] = _reconstructPacket(data[i], buffers);
	    }
	  } else if (typeof data === 'object') {
	    for (var key in data) {
	      data[key] = _reconstructPacket(data[key], buffers);
	    }
	  }
	
	  return data;
	}
	
	/**
	 * Asynchronously removes Blobs or Files from data via
	 * FileReader's readAsArrayBuffer method. Used before encoding
	 * data as msgpack. Calls callback with the blobless data.
	 *
	 * @param {Object} data
	 * @param {Function} callback
	 * @api private
	 */
	
	exports.removeBlobs = function(data, callback) {
	  function _removeBlobs(obj, curKey, containingObject) {
	    if (!obj) return obj;
	
	    // convert any blob
	    if ((withNativeBlob && obj instanceof Blob) ||
	        (withNativeFile && obj instanceof File)) {
	      pendingBlobs++;
	
	      // async filereader
	      var fileReader = new FileReader();
	      fileReader.onload = function() { // this.result == arraybuffer
	        if (containingObject) {
	          containingObject[curKey] = this.result;
	        }
	        else {
	          bloblessData = this.result;
	        }
	
	        // if nothing pending its callback time
	        if(! --pendingBlobs) {
	          callback(bloblessData);
	        }
	      };
	
	      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
	    } else if (isArray(obj)) { // handle array
	      for (var i = 0; i < obj.length; i++) {
	        _removeBlobs(obj[i], i, obj);
	      }
	    } else if (typeof obj === 'object' && !isBuf(obj)) { // and object
	      for (var key in obj) {
	        _removeBlobs(obj[key], key, obj);
	      }
	    }
	  }
	
	  var pendingBlobs = 0;
	  var bloblessData = data;
	  _removeBlobs(bloblessData);
	  if (!pendingBlobs) {
	    callback(bloblessData);
	  }
	};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	
	module.exports = isBuf;
	
	var withNativeBuffer = typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function';
	var withNativeArrayBuffer = typeof ArrayBuffer === 'function';
	
	var isView = function (obj) {
	  return typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(obj) : (obj.buffer instanceof ArrayBuffer);
	};
	
	/**
	 * Returns true if obj is a buffer or an arraybuffer.
	 *
	 * @api private
	 */
	
	function isBuf(obj) {
	  return (withNativeBuffer && Buffer.isBuffer(obj)) ||
	          (withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)));
	}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var eio = __webpack_require__(13);
	var Socket = __webpack_require__(37);
	var Emitter = __webpack_require__(8);
	var parser = __webpack_require__(7);
	var on = __webpack_require__(39);
	var bind = __webpack_require__(40);
	var debug = __webpack_require__(3)('socket.io-client:manager');
	var indexOf = __webpack_require__(36);
	var Backoff = __webpack_require__(41);
	
	/**
	 * IE6+ hasOwnProperty
	 */
	
	var has = Object.prototype.hasOwnProperty;
	
	/**
	 * Module exports
	 */
	
	module.exports = Manager;
	
	/**
	 * `Manager` constructor.
	 *
	 * @param {String} engine instance or engine uri/opts
	 * @param {Object} options
	 * @api public
	 */
	
	function Manager (uri, opts) {
	  if (!(this instanceof Manager)) return new Manager(uri, opts);
	  if (uri && ('object' === typeof uri)) {
	    opts = uri;
	    uri = undefined;
	  }
	  opts = opts || {};
	
	  opts.path = opts.path || '/socket.io';
	  this.nsps = {};
	  this.subs = [];
	  this.opts = opts;
	  this.reconnection(opts.reconnection !== false);
	  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
	  this.reconnectionDelay(opts.reconnectionDelay || 1000);
	  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
	  this.randomizationFactor(opts.randomizationFactor || 0.5);
	  this.backoff = new Backoff({
	    min: this.reconnectionDelay(),
	    max: this.reconnectionDelayMax(),
	    jitter: this.randomizationFactor()
	  });
	  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
	  this.readyState = 'closed';
	  this.uri = uri;
	  this.connecting = [];
	  this.lastPing = null;
	  this.encoding = false;
	  this.packetBuffer = [];
	  var _parser = opts.parser || parser;
	  this.encoder = new _parser.Encoder();
	  this.decoder = new _parser.Decoder();
	  this.autoConnect = opts.autoConnect !== false;
	  if (this.autoConnect) this.open();
	}
	
	/**
	 * Propagate given event to sockets and emit on `this`
	 *
	 * @api private
	 */
	
	Manager.prototype.emitAll = function () {
	  this.emit.apply(this, arguments);
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
	    }
	  }
	};
	
	/**
	 * Update `socket.id` of all sockets
	 *
	 * @api private
	 */
	
	Manager.prototype.updateSocketIds = function () {
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].id = this.generateId(nsp);
	    }
	  }
	};
	
	/**
	 * generate `socket.id` for the given `nsp`
	 *
	 * @param {String} nsp
	 * @return {String}
	 * @api private
	 */
	
	Manager.prototype.generateId = function (nsp) {
	  return (nsp === '/' ? '' : (nsp + '#')) + this.engine.id;
	};
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Manager.prototype);
	
	/**
	 * Sets the `reconnection` config.
	 *
	 * @param {Boolean} true/false if it should automatically reconnect
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnection = function (v) {
	  if (!arguments.length) return this._reconnection;
	  this._reconnection = !!v;
	  return this;
	};
	
	/**
	 * Sets the reconnection attempts config.
	 *
	 * @param {Number} max reconnection attempts before giving up
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionAttempts = function (v) {
	  if (!arguments.length) return this._reconnectionAttempts;
	  this._reconnectionAttempts = v;
	  return this;
	};
	
	/**
	 * Sets the delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionDelay = function (v) {
	  if (!arguments.length) return this._reconnectionDelay;
	  this._reconnectionDelay = v;
	  this.backoff && this.backoff.setMin(v);
	  return this;
	};
	
	Manager.prototype.randomizationFactor = function (v) {
	  if (!arguments.length) return this._randomizationFactor;
	  this._randomizationFactor = v;
	  this.backoff && this.backoff.setJitter(v);
	  return this;
	};
	
	/**
	 * Sets the maximum delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionDelayMax = function (v) {
	  if (!arguments.length) return this._reconnectionDelayMax;
	  this._reconnectionDelayMax = v;
	  this.backoff && this.backoff.setMax(v);
	  return this;
	};
	
	/**
	 * Sets the connection timeout. `false` to disable
	 *
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.timeout = function (v) {
	  if (!arguments.length) return this._timeout;
	  this._timeout = v;
	  return this;
	};
	
	/**
	 * Starts trying to reconnect if reconnection is enabled and we have not
	 * started reconnecting yet
	 *
	 * @api private
	 */
	
	Manager.prototype.maybeReconnectOnOpen = function () {
	  // Only try to reconnect if it's the first time we're connecting
	  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
	    // keeps reconnection from firing twice for the same reconnection loop
	    this.reconnect();
	  }
	};
	
	/**
	 * Sets the current transport `socket`.
	 *
	 * @param {Function} optional, callback
	 * @return {Manager} self
	 * @api public
	 */
	
	Manager.prototype.open =
	Manager.prototype.connect = function (fn, opts) {
	  debug('readyState %s', this.readyState);
	  if (~this.readyState.indexOf('open')) return this;
	
	  debug('opening %s', this.uri);
	  this.engine = eio(this.uri, this.opts);
	  var socket = this.engine;
	  var self = this;
	  this.readyState = 'opening';
	  this.skipReconnect = false;
	
	  // emit `open`
	  var openSub = on(socket, 'open', function () {
	    self.onopen();
	    fn && fn();
	  });
	
	  // emit `connect_error`
	  var errorSub = on(socket, 'error', function (data) {
	    debug('connect_error');
	    self.cleanup();
	    self.readyState = 'closed';
	    self.emitAll('connect_error', data);
	    if (fn) {
	      var err = new Error('Connection error');
	      err.data = data;
	      fn(err);
	    } else {
	      // Only do this if there is no fn to handle the error
	      self.maybeReconnectOnOpen();
	    }
	  });
	
	  // emit `connect_timeout`
	  if (false !== this._timeout) {
	    var timeout = this._timeout;
	    debug('connect attempt will timeout after %d', timeout);
	
	    if (timeout === 0) {
	      openSub.destroy(); // prevents a race condition with the 'open' event
	    }
	
	    // set timer
	    var timer = setTimeout(function () {
	      debug('connect attempt timed out after %d', timeout);
	      openSub.destroy();
	      socket.close();
	      socket.emit('error', 'timeout');
	      self.emitAll('connect_timeout', timeout);
	    }, timeout);
	
	    this.subs.push({
	      destroy: function () {
	        clearTimeout(timer);
	      }
	    });
	  }
	
	  this.subs.push(openSub);
	  this.subs.push(errorSub);
	
	  return this;
	};
	
	/**
	 * Called upon transport open.
	 *
	 * @api private
	 */
	
	Manager.prototype.onopen = function () {
	  debug('open');
	
	  // clear old subs
	  this.cleanup();
	
	  // mark as open
	  this.readyState = 'open';
	  this.emit('open');
	
	  // add new subs
	  var socket = this.engine;
	  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
	  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
	  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
	  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
	  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
	  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
	};
	
	/**
	 * Called upon a ping.
	 *
	 * @api private
	 */
	
	Manager.prototype.onping = function () {
	  this.lastPing = new Date();
	  this.emitAll('ping');
	};
	
	/**
	 * Called upon a packet.
	 *
	 * @api private
	 */
	
	Manager.prototype.onpong = function () {
	  this.emitAll('pong', new Date() - this.lastPing);
	};
	
	/**
	 * Called with data.
	 *
	 * @api private
	 */
	
	Manager.prototype.ondata = function (data) {
	  this.decoder.add(data);
	};
	
	/**
	 * Called when parser fully decodes a packet.
	 *
	 * @api private
	 */
	
	Manager.prototype.ondecoded = function (packet) {
	  this.emit('packet', packet);
	};
	
	/**
	 * Called upon socket error.
	 *
	 * @api private
	 */
	
	Manager.prototype.onerror = function (err) {
	  debug('error', err);
	  this.emitAll('error', err);
	};
	
	/**
	 * Creates a new socket for the given `nsp`.
	 *
	 * @return {Socket}
	 * @api public
	 */
	
	Manager.prototype.socket = function (nsp, opts) {
	  var socket = this.nsps[nsp];
	  if (!socket) {
	    socket = new Socket(this, nsp, opts);
	    this.nsps[nsp] = socket;
	    var self = this;
	    socket.on('connecting', onConnecting);
	    socket.on('connect', function () {
	      socket.id = self.generateId(nsp);
	    });
	
	    if (this.autoConnect) {
	      // manually call here since connecting event is fired before listening
	      onConnecting();
	    }
	  }
	
	  function onConnecting () {
	    if (!~indexOf(self.connecting, socket)) {
	      self.connecting.push(socket);
	    }
	  }
	
	  return socket;
	};
	
	/**
	 * Called upon a socket close.
	 *
	 * @param {Socket} socket
	 */
	
	Manager.prototype.destroy = function (socket) {
	  var index = indexOf(this.connecting, socket);
	  if (~index) this.connecting.splice(index, 1);
	  if (this.connecting.length) return;
	
	  this.close();
	};
	
	/**
	 * Writes a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Manager.prototype.packet = function (packet) {
	  debug('writing packet %j', packet);
	  var self = this;
	  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;
	
	  if (!self.encoding) {
	    // encode, then write to engine with result
	    self.encoding = true;
	    this.encoder.encode(packet, function (encodedPackets) {
	      for (var i = 0; i < encodedPackets.length; i++) {
	        self.engine.write(encodedPackets[i], packet.options);
	      }
	      self.encoding = false;
	      self.processPacketQueue();
	    });
	  } else { // add packet to the queue
	    self.packetBuffer.push(packet);
	  }
	};
	
	/**
	 * If packet buffer is non-empty, begins encoding the
	 * next packet in line.
	 *
	 * @api private
	 */
	
	Manager.prototype.processPacketQueue = function () {
	  if (this.packetBuffer.length > 0 && !this.encoding) {
	    var pack = this.packetBuffer.shift();
	    this.packet(pack);
	  }
	};
	
	/**
	 * Clean up transport subscriptions and packet buffer.
	 *
	 * @api private
	 */
	
	Manager.prototype.cleanup = function () {
	  debug('cleanup');
	
	  var subsLength = this.subs.length;
	  for (var i = 0; i < subsLength; i++) {
	    var sub = this.subs.shift();
	    sub.destroy();
	  }
	
	  this.packetBuffer = [];
	  this.encoding = false;
	  this.lastPing = null;
	
	  this.decoder.destroy();
	};
	
	/**
	 * Close the current socket.
	 *
	 * @api private
	 */
	
	Manager.prototype.close =
	Manager.prototype.disconnect = function () {
	  debug('disconnect');
	  this.skipReconnect = true;
	  this.reconnecting = false;
	  if ('opening' === this.readyState) {
	    // `onclose` will not fire because
	    // an open event never happened
	    this.cleanup();
	  }
	  this.backoff.reset();
	  this.readyState = 'closed';
	  if (this.engine) this.engine.close();
	};
	
	/**
	 * Called upon engine close.
	 *
	 * @api private
	 */
	
	Manager.prototype.onclose = function (reason) {
	  debug('onclose');
	
	  this.cleanup();
	  this.backoff.reset();
	  this.readyState = 'closed';
	  this.emit('close', reason);
	
	  if (this._reconnection && !this.skipReconnect) {
	    this.reconnect();
	  }
	};
	
	/**
	 * Attempt a reconnection.
	 *
	 * @api private
	 */
	
	Manager.prototype.reconnect = function () {
	  if (this.reconnecting || this.skipReconnect) return this;
	
	  var self = this;
	
	  if (this.backoff.attempts >= this._reconnectionAttempts) {
	    debug('reconnect failed');
	    this.backoff.reset();
	    this.emitAll('reconnect_failed');
	    this.reconnecting = false;
	  } else {
	    var delay = this.backoff.duration();
	    debug('will wait %dms before reconnect attempt', delay);
	
	    this.reconnecting = true;
	    var timer = setTimeout(function () {
	      if (self.skipReconnect) return;
	
	      debug('attempting reconnect');
	      self.emitAll('reconnect_attempt', self.backoff.attempts);
	      self.emitAll('reconnecting', self.backoff.attempts);
	
	      // check again for the case socket closed in above events
	      if (self.skipReconnect) return;
	
	      self.open(function (err) {
	        if (err) {
	          debug('reconnect attempt error');
	          self.reconnecting = false;
	          self.reconnect();
	          self.emitAll('reconnect_error', err.data);
	        } else {
	          debug('reconnect success');
	          self.onreconnect();
	        }
	      });
	    }, delay);
	
	    this.subs.push({
	      destroy: function () {
	        clearTimeout(timer);
	      }
	    });
	  }
	};
	
	/**
	 * Called upon successful reconnect.
	 *
	 * @api private
	 */
	
	Manager.prototype.onreconnect = function () {
	  var attempt = this.backoff.attempts;
	  this.reconnecting = false;
	  this.backoff.reset();
	  this.updateSocketIds();
	  this.emitAll('reconnect', attempt);
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(14);
	
	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(22);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var transports = __webpack_require__(15);
	var Emitter = __webpack_require__(8);
	var debug = __webpack_require__(3)('engine.io-client:socket');
	var index = __webpack_require__(36);
	var parser = __webpack_require__(22);
	var parseuri = __webpack_require__(2);
	var parseqs = __webpack_require__(30);
	
	/**
	 * Module exports.
	 */
	
	module.exports = Socket;
	
	/**
	 * Socket constructor.
	 *
	 * @param {String|Object} uri or options
	 * @param {Object} options
	 * @api public
	 */
	
	function Socket (uri, opts) {
	  if (!(this instanceof Socket)) return new Socket(uri, opts);
	
	  opts = opts || {};
	
	  if (uri && 'object' === typeof uri) {
	    opts = uri;
	    uri = null;
	  }
	
	  if (uri) {
	    uri = parseuri(uri);
	    opts.hostname = uri.host;
	    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
	    opts.port = uri.port;
	    if (uri.query) opts.query = uri.query;
	  } else if (opts.host) {
	    opts.hostname = parseuri(opts.host).host;
	  }
	
	  this.secure = null != opts.secure ? opts.secure
	    : (typeof location !== 'undefined' && 'https:' === location.protocol);
	
	  if (opts.hostname && !opts.port) {
	    // if no port is specified manually, use the protocol default
	    opts.port = this.secure ? '443' : '80';
	  }
	
	  this.agent = opts.agent || false;
	  this.hostname = opts.hostname ||
	    (typeof location !== 'undefined' ? location.hostname : 'localhost');
	  this.port = opts.port || (typeof location !== 'undefined' && location.port
	      ? location.port
	      : (this.secure ? 443 : 80));
	  this.query = opts.query || {};
	  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
	  this.upgrade = false !== opts.upgrade;
	  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
	  this.forceJSONP = !!opts.forceJSONP;
	  this.jsonp = false !== opts.jsonp;
	  this.forceBase64 = !!opts.forceBase64;
	  this.enablesXDR = !!opts.enablesXDR;
	  this.withCredentials = false !== opts.withCredentials;
	  this.timestampParam = opts.timestampParam || 't';
	  this.timestampRequests = opts.timestampRequests;
	  this.transports = opts.transports || ['polling', 'websocket'];
	  this.transportOptions = opts.transportOptions || {};
	  this.readyState = '';
	  this.writeBuffer = [];
	  this.prevBufferLen = 0;
	  this.policyPort = opts.policyPort || 843;
	  this.rememberUpgrade = opts.rememberUpgrade || false;
	  this.binaryType = null;
	  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
	  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;
	
	  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
	  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
	    this.perMessageDeflate.threshold = 1024;
	  }
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx || null;
	  this.key = opts.key || null;
	  this.passphrase = opts.passphrase || null;
	  this.cert = opts.cert || null;
	  this.ca = opts.ca || null;
	  this.ciphers = opts.ciphers || null;
	  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
	  this.forceNode = !!opts.forceNode;
	
	  // detect ReactNative environment
	  this.isReactNative = (typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative');
	
	  // other options for Node.js or ReactNative client
	  if (typeof self === 'undefined' || this.isReactNative) {
	    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
	      this.extraHeaders = opts.extraHeaders;
	    }
	
	    if (opts.localAddress) {
	      this.localAddress = opts.localAddress;
	    }
	  }
	
	  // set on handshake
	  this.id = null;
	  this.upgrades = null;
	  this.pingInterval = null;
	  this.pingTimeout = null;
	
	  // set on heartbeat
	  this.pingIntervalTimer = null;
	  this.pingTimeoutTimer = null;
	
	  this.open();
	}
	
	Socket.priorWebsocketSuccess = false;
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Socket.prototype);
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	Socket.protocol = parser.protocol; // this is an int
	
	/**
	 * Expose deps for legacy compatibility
	 * and standalone browser access.
	 */
	
	Socket.Socket = Socket;
	Socket.Transport = __webpack_require__(21);
	Socket.transports = __webpack_require__(15);
	Socket.parser = __webpack_require__(22);
	
	/**
	 * Creates transport of the given type.
	 *
	 * @param {String} transport name
	 * @return {Transport}
	 * @api private
	 */
	
	Socket.prototype.createTransport = function (name) {
	  debug('creating transport "%s"', name);
	  var query = clone(this.query);
	
	  // append engine.io protocol identifier
	  query.EIO = parser.protocol;
	
	  // transport name
	  query.transport = name;
	
	  // per-transport options
	  var options = this.transportOptions[name] || {};
	
	  // session id if we already have one
	  if (this.id) query.sid = this.id;
	
	  var transport = new transports[name]({
	    query: query,
	    socket: this,
	    agent: options.agent || this.agent,
	    hostname: options.hostname || this.hostname,
	    port: options.port || this.port,
	    secure: options.secure || this.secure,
	    path: options.path || this.path,
	    forceJSONP: options.forceJSONP || this.forceJSONP,
	    jsonp: options.jsonp || this.jsonp,
	    forceBase64: options.forceBase64 || this.forceBase64,
	    enablesXDR: options.enablesXDR || this.enablesXDR,
	    withCredentials: options.withCredentials || this.withCredentials,
	    timestampRequests: options.timestampRequests || this.timestampRequests,
	    timestampParam: options.timestampParam || this.timestampParam,
	    policyPort: options.policyPort || this.policyPort,
	    pfx: options.pfx || this.pfx,
	    key: options.key || this.key,
	    passphrase: options.passphrase || this.passphrase,
	    cert: options.cert || this.cert,
	    ca: options.ca || this.ca,
	    ciphers: options.ciphers || this.ciphers,
	    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
	    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
	    extraHeaders: options.extraHeaders || this.extraHeaders,
	    forceNode: options.forceNode || this.forceNode,
	    localAddress: options.localAddress || this.localAddress,
	    requestTimeout: options.requestTimeout || this.requestTimeout,
	    protocols: options.protocols || void (0),
	    isReactNative: this.isReactNative
	  });
	
	  return transport;
	};
	
	function clone (obj) {
	  var o = {};
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      o[i] = obj[i];
	    }
	  }
	  return o;
	}
	
	/**
	 * Initializes transport to use and starts probe.
	 *
	 * @api private
	 */
	Socket.prototype.open = function () {
	  var transport;
	  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
	    transport = 'websocket';
	  } else if (0 === this.transports.length) {
	    // Emit error on next tick so it can be listened to
	    var self = this;
	    setTimeout(function () {
	      self.emit('error', 'No transports available');
	    }, 0);
	    return;
	  } else {
	    transport = this.transports[0];
	  }
	  this.readyState = 'opening';
	
	  // Retry with the next transport if the transport is disabled (jsonp: false)
	  try {
	    transport = this.createTransport(transport);
	  } catch (e) {
	    this.transports.shift();
	    this.open();
	    return;
	  }
	
	  transport.open();
	  this.setTransport(transport);
	};
	
	/**
	 * Sets the current transport. Disables the existing one (if any).
	 *
	 * @api private
	 */
	
	Socket.prototype.setTransport = function (transport) {
	  debug('setting transport %s', transport.name);
	  var self = this;
	
	  if (this.transport) {
	    debug('clearing existing transport %s', this.transport.name);
	    this.transport.removeAllListeners();
	  }
	
	  // set up transport
	  this.transport = transport;
	
	  // set up transport listeners
	  transport
	  .on('drain', function () {
	    self.onDrain();
	  })
	  .on('packet', function (packet) {
	    self.onPacket(packet);
	  })
	  .on('error', function (e) {
	    self.onError(e);
	  })
	  .on('close', function () {
	    self.onClose('transport close');
	  });
	};
	
	/**
	 * Probes a transport.
	 *
	 * @param {String} transport name
	 * @api private
	 */
	
	Socket.prototype.probe = function (name) {
	  debug('probing transport "%s"', name);
	  var transport = this.createTransport(name, { probe: 1 });
	  var failed = false;
	  var self = this;
	
	  Socket.priorWebsocketSuccess = false;
	
	  function onTransportOpen () {
	    if (self.onlyBinaryUpgrades) {
	      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
	      failed = failed || upgradeLosesBinary;
	    }
	    if (failed) return;
	
	    debug('probe transport "%s" opened', name);
	    transport.send([{ type: 'ping', data: 'probe' }]);
	    transport.once('packet', function (msg) {
	      if (failed) return;
	      if ('pong' === msg.type && 'probe' === msg.data) {
	        debug('probe transport "%s" pong', name);
	        self.upgrading = true;
	        self.emit('upgrading', transport);
	        if (!transport) return;
	        Socket.priorWebsocketSuccess = 'websocket' === transport.name;
	
	        debug('pausing current transport "%s"', self.transport.name);
	        self.transport.pause(function () {
	          if (failed) return;
	          if ('closed' === self.readyState) return;
	          debug('changing transport and sending upgrade packet');
	
	          cleanup();
	
	          self.setTransport(transport);
	          transport.send([{ type: 'upgrade' }]);
	          self.emit('upgrade', transport);
	          transport = null;
	          self.upgrading = false;
	          self.flush();
	        });
	      } else {
	        debug('probe transport "%s" failed', name);
	        var err = new Error('probe error');
	        err.transport = transport.name;
	        self.emit('upgradeError', err);
	      }
	    });
	  }
	
	  function freezeTransport () {
	    if (failed) return;
	
	    // Any callback called by transport should be ignored since now
	    failed = true;
	
	    cleanup();
	
	    transport.close();
	    transport = null;
	  }
	
	  // Handle any error that happens while probing
	  function onerror (err) {
	    var error = new Error('probe error: ' + err);
	    error.transport = transport.name;
	
	    freezeTransport();
	
	    debug('probe transport "%s" failed because of error: %s', name, err);
	
	    self.emit('upgradeError', error);
	  }
	
	  function onTransportClose () {
	    onerror('transport closed');
	  }
	
	  // When the socket is closed while we're probing
	  function onclose () {
	    onerror('socket closed');
	  }
	
	  // When the socket is upgraded while we're probing
	  function onupgrade (to) {
	    if (transport && to.name !== transport.name) {
	      debug('"%s" works - aborting "%s"', to.name, transport.name);
	      freezeTransport();
	    }
	  }
	
	  // Remove all listeners on the transport and on self
	  function cleanup () {
	    transport.removeListener('open', onTransportOpen);
	    transport.removeListener('error', onerror);
	    transport.removeListener('close', onTransportClose);
	    self.removeListener('close', onclose);
	    self.removeListener('upgrading', onupgrade);
	  }
	
	  transport.once('open', onTransportOpen);
	  transport.once('error', onerror);
	  transport.once('close', onTransportClose);
	
	  this.once('close', onclose);
	  this.once('upgrading', onupgrade);
	
	  transport.open();
	};
	
	/**
	 * Called when connection is deemed open.
	 *
	 * @api public
	 */
	
	Socket.prototype.onOpen = function () {
	  debug('socket open');
	  this.readyState = 'open';
	  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
	  this.emit('open');
	  this.flush();
	
	  // we check for `readyState` in case an `open`
	  // listener already closed the socket
	  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
	    debug('starting upgrade probes');
	    for (var i = 0, l = this.upgrades.length; i < l; i++) {
	      this.probe(this.upgrades[i]);
	    }
	  }
	};
	
	/**
	 * Handles a packet.
	 *
	 * @api private
	 */
	
	Socket.prototype.onPacket = function (packet) {
	  if ('opening' === this.readyState || 'open' === this.readyState ||
	      'closing' === this.readyState) {
	    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
	
	    this.emit('packet', packet);
	
	    // Socket is live - any packet counts
	    this.emit('heartbeat');
	
	    switch (packet.type) {
	      case 'open':
	        this.onHandshake(JSON.parse(packet.data));
	        break;
	
	      case 'pong':
	        this.setPing();
	        this.emit('pong');
	        break;
	
	      case 'error':
	        var err = new Error('server error');
	        err.code = packet.data;
	        this.onError(err);
	        break;
	
	      case 'message':
	        this.emit('data', packet.data);
	        this.emit('message', packet.data);
	        break;
	    }
	  } else {
	    debug('packet received with socket readyState "%s"', this.readyState);
	  }
	};
	
	/**
	 * Called upon handshake completion.
	 *
	 * @param {Object} handshake obj
	 * @api private
	 */
	
	Socket.prototype.onHandshake = function (data) {
	  this.emit('handshake', data);
	  this.id = data.sid;
	  this.transport.query.sid = data.sid;
	  this.upgrades = this.filterUpgrades(data.upgrades);
	  this.pingInterval = data.pingInterval;
	  this.pingTimeout = data.pingTimeout;
	  this.onOpen();
	  // In case open handler closes socket
	  if ('closed' === this.readyState) return;
	  this.setPing();
	
	  // Prolong liveness of socket on heartbeat
	  this.removeListener('heartbeat', this.onHeartbeat);
	  this.on('heartbeat', this.onHeartbeat);
	};
	
	/**
	 * Resets ping timeout.
	 *
	 * @api private
	 */
	
	Socket.prototype.onHeartbeat = function (timeout) {
	  clearTimeout(this.pingTimeoutTimer);
	  var self = this;
	  self.pingTimeoutTimer = setTimeout(function () {
	    if ('closed' === self.readyState) return;
	    self.onClose('ping timeout');
	  }, timeout || (self.pingInterval + self.pingTimeout));
	};
	
	/**
	 * Pings server every `this.pingInterval` and expects response
	 * within `this.pingTimeout` or closes connection.
	 *
	 * @api private
	 */
	
	Socket.prototype.setPing = function () {
	  var self = this;
	  clearTimeout(self.pingIntervalTimer);
	  self.pingIntervalTimer = setTimeout(function () {
	    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
	    self.ping();
	    self.onHeartbeat(self.pingTimeout);
	  }, self.pingInterval);
	};
	
	/**
	* Sends a ping packet.
	*
	* @api private
	*/
	
	Socket.prototype.ping = function () {
	  var self = this;
	  this.sendPacket('ping', function () {
	    self.emit('ping');
	  });
	};
	
	/**
	 * Called on `drain` event
	 *
	 * @api private
	 */
	
	Socket.prototype.onDrain = function () {
	  this.writeBuffer.splice(0, this.prevBufferLen);
	
	  // setting prevBufferLen = 0 is very important
	  // for example, when upgrading, upgrade packet is sent over,
	  // and a nonzero prevBufferLen could cause problems on `drain`
	  this.prevBufferLen = 0;
	
	  if (0 === this.writeBuffer.length) {
	    this.emit('drain');
	  } else {
	    this.flush();
	  }
	};
	
	/**
	 * Flush write buffers.
	 *
	 * @api private
	 */
	
	Socket.prototype.flush = function () {
	  if ('closed' !== this.readyState && this.transport.writable &&
	    !this.upgrading && this.writeBuffer.length) {
	    debug('flushing %d packets in socket', this.writeBuffer.length);
	    this.transport.send(this.writeBuffer);
	    // keep track of current length of writeBuffer
	    // splice writeBuffer and callbackBuffer on `drain`
	    this.prevBufferLen = this.writeBuffer.length;
	    this.emit('flush');
	  }
	};
	
	/**
	 * Sends a message.
	 *
	 * @param {String} message.
	 * @param {Function} callback function.
	 * @param {Object} options.
	 * @return {Socket} for chaining.
	 * @api public
	 */
	
	Socket.prototype.write =
	Socket.prototype.send = function (msg, options, fn) {
	  this.sendPacket('message', msg, options, fn);
	  return this;
	};
	
	/**
	 * Sends a packet.
	 *
	 * @param {String} packet type.
	 * @param {String} data.
	 * @param {Object} options.
	 * @param {Function} callback function.
	 * @api private
	 */
	
	Socket.prototype.sendPacket = function (type, data, options, fn) {
	  if ('function' === typeof data) {
	    fn = data;
	    data = undefined;
	  }
	
	  if ('function' === typeof options) {
	    fn = options;
	    options = null;
	  }
	
	  if ('closing' === this.readyState || 'closed' === this.readyState) {
	    return;
	  }
	
	  options = options || {};
	  options.compress = false !== options.compress;
	
	  var packet = {
	    type: type,
	    data: data,
	    options: options
	  };
	  this.emit('packetCreate', packet);
	  this.writeBuffer.push(packet);
	  if (fn) this.once('flush', fn);
	  this.flush();
	};
	
	/**
	 * Closes the connection.
	 *
	 * @api private
	 */
	
	Socket.prototype.close = function () {
	  if ('opening' === this.readyState || 'open' === this.readyState) {
	    this.readyState = 'closing';
	
	    var self = this;
	
	    if (this.writeBuffer.length) {
	      this.once('drain', function () {
	        if (this.upgrading) {
	          waitForUpgrade();
	        } else {
	          close();
	        }
	      });
	    } else if (this.upgrading) {
	      waitForUpgrade();
	    } else {
	      close();
	    }
	  }
	
	  function close () {
	    self.onClose('forced close');
	    debug('socket closing - telling transport to close');
	    self.transport.close();
	  }
	
	  function cleanupAndClose () {
	    self.removeListener('upgrade', cleanupAndClose);
	    self.removeListener('upgradeError', cleanupAndClose);
	    close();
	  }
	
	  function waitForUpgrade () {
	    // wait for upgrade to finish since we can't send packets while pausing a transport
	    self.once('upgrade', cleanupAndClose);
	    self.once('upgradeError', cleanupAndClose);
	  }
	
	  return this;
	};
	
	/**
	 * Called upon transport error
	 *
	 * @api private
	 */
	
	Socket.prototype.onError = function (err) {
	  debug('socket error %j', err);
	  Socket.priorWebsocketSuccess = false;
	  this.emit('error', err);
	  this.onClose('transport error', err);
	};
	
	/**
	 * Called upon transport close.
	 *
	 * @api private
	 */
	
	Socket.prototype.onClose = function (reason, desc) {
	  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
	    debug('socket close with reason: "%s"', reason);
	    var self = this;
	
	    // clear timers
	    clearTimeout(this.pingIntervalTimer);
	    clearTimeout(this.pingTimeoutTimer);
	
	    // stop event from firing again for transport
	    this.transport.removeAllListeners('close');
	
	    // ensure transport won't stay open
	    this.transport.close();
	
	    // ignore further transport communication
	    this.transport.removeAllListeners();
	
	    // set ready state
	    this.readyState = 'closed';
	
	    // clear session id
	    this.id = null;
	
	    // emit close event
	    this.emit('close', reason, desc);
	
	    // clean buffers after, so users can still
	    // grab the buffers on `close` event
	    self.writeBuffer = [];
	    self.prevBufferLen = 0;
	  }
	};
	
	/**
	 * Filters upgrades, returning only those matching client transports.
	 *
	 * @param {Array} server upgrades
	 * @api private
	 *
	 */
	
	Socket.prototype.filterUpgrades = function (upgrades) {
	  var filteredUpgrades = [];
	  for (var i = 0, j = upgrades.length; i < j; i++) {
	    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
	  }
	  return filteredUpgrades;
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */
	
	var XMLHttpRequest = __webpack_require__(16);
	var XHR = __webpack_require__(19);
	var JSONP = __webpack_require__(33);
	var websocket = __webpack_require__(34);
	
	/**
	 * Export transports.
	 */
	
	exports.polling = polling;
	exports.websocket = websocket;
	
	/**
	 * Polling transport polymorphic constructor.
	 * Decides on xhr vs jsonp based on feature detection.
	 *
	 * @api private
	 */
	
	function polling (opts) {
	  var xhr;
	  var xd = false;
	  var xs = false;
	  var jsonp = false !== opts.jsonp;
	
	  if (typeof location !== 'undefined') {
	    var isSSL = 'https:' === location.protocol;
	    var port = location.port;
	
	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }
	
	    xd = opts.hostname !== location.hostname || port !== opts.port;
	    xs = opts.secure !== isSSL;
	  }
	
	  opts.xdomain = xd;
	  opts.xscheme = xs;
	  xhr = new XMLHttpRequest(opts);
	
	  if ('open' in xhr && !opts.forceJSONP) {
	    return new XHR(opts);
	  } else {
	    if (!jsonp) throw new Error('JSONP disabled');
	    return new JSONP(opts);
	  }
	}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	// browser shim for xmlhttprequest module
	
	var hasCORS = __webpack_require__(17);
	var globalThis = __webpack_require__(18);
	
	module.exports = function (opts) {
	  var xdomain = opts.xdomain;
	
	  // scheme must be same when usign XDomainRequest
	  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
	  var xscheme = opts.xscheme;
	
	  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
	  // https://github.com/Automattic/engine.io-client/pull/217
	  var enablesXDR = opts.enablesXDR;
	
	  // XMLHttpRequest can be disabled on IE
	  try {
	    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
	      return new XMLHttpRequest();
	    }
	  } catch (e) { }
	
	  // Use XDomainRequest for IE8 if enablesXDR is true
	  // because loading bar keeps flashing when using jsonp-polling
	  // https://github.com/yujiosaka/socke.io-ie8-loading-example
	  try {
	    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
	      return new XDomainRequest();
	    }
	  } catch (e) { }
	
	  if (!xdomain) {
	    try {
	      return new globalThis[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
	    } catch (e) { }
	  }
	};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	
	/**
	 * Module exports.
	 *
	 * Logic borrowed from Modernizr:
	 *
	 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
	 */
	
	try {
	  module.exports = typeof XMLHttpRequest !== 'undefined' &&
	    'withCredentials' in new XMLHttpRequest();
	} catch (err) {
	  // if XMLHttp support is disabled in IE then it will throw
	  // when trying to create
	  module.exports = false;
	}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = (function () {
	  if (typeof self !== 'undefined') {
	    return self;
	  } else if (typeof window !== 'undefined') {
	    return window;
	  } else {
	    return Function('return this')(); // eslint-disable-line no-new-func
	  }
	})();


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	/* global attachEvent */
	
	/**
	 * Module requirements.
	 */
	
	var XMLHttpRequest = __webpack_require__(16);
	var Polling = __webpack_require__(20);
	var Emitter = __webpack_require__(8);
	var inherit = __webpack_require__(31);
	var debug = __webpack_require__(3)('engine.io-client:polling-xhr');
	var globalThis = __webpack_require__(18);
	
	/**
	 * Module exports.
	 */
	
	module.exports = XHR;
	module.exports.Request = Request;
	
	/**
	 * Empty function
	 */
	
	function empty () {}
	
	/**
	 * XHR Polling constructor.
	 *
	 * @param {Object} opts
	 * @api public
	 */
	
	function XHR (opts) {
	  Polling.call(this, opts);
	  this.requestTimeout = opts.requestTimeout;
	  this.extraHeaders = opts.extraHeaders;
	
	  if (typeof location !== 'undefined') {
	    var isSSL = 'https:' === location.protocol;
	    var port = location.port;
	
	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }
	
	    this.xd = (typeof location !== 'undefined' && opts.hostname !== location.hostname) ||
	      port !== opts.port;
	    this.xs = opts.secure !== isSSL;
	  }
	}
	
	/**
	 * Inherits from Polling.
	 */
	
	inherit(XHR, Polling);
	
	/**
	 * XHR supports binary
	 */
	
	XHR.prototype.supportsBinary = true;
	
	/**
	 * Creates a request.
	 *
	 * @param {String} method
	 * @api private
	 */
	
	XHR.prototype.request = function (opts) {
	  opts = opts || {};
	  opts.uri = this.uri();
	  opts.xd = this.xd;
	  opts.xs = this.xs;
	  opts.agent = this.agent || false;
	  opts.supportsBinary = this.supportsBinary;
	  opts.enablesXDR = this.enablesXDR;
	  opts.withCredentials = this.withCredentials;
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  opts.requestTimeout = this.requestTimeout;
	
	  // other options for Node.js client
	  opts.extraHeaders = this.extraHeaders;
	
	  return new Request(opts);
	};
	
	/**
	 * Sends data.
	 *
	 * @param {String} data to send.
	 * @param {Function} called upon flush.
	 * @api private
	 */
	
	XHR.prototype.doWrite = function (data, fn) {
	  var isBinary = typeof data !== 'string' && data !== undefined;
	  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
	  var self = this;
	  req.on('success', fn);
	  req.on('error', function (err) {
	    self.onError('xhr post error', err);
	  });
	  this.sendXhr = req;
	};
	
	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */
	
	XHR.prototype.doPoll = function () {
	  debug('xhr poll');
	  var req = this.request();
	  var self = this;
	  req.on('data', function (data) {
	    self.onData(data);
	  });
	  req.on('error', function (err) {
	    self.onError('xhr poll error', err);
	  });
	  this.pollXhr = req;
	};
	
	/**
	 * Request constructor
	 *
	 * @param {Object} options
	 * @api public
	 */
	
	function Request (opts) {
	  this.method = opts.method || 'GET';
	  this.uri = opts.uri;
	  this.xd = !!opts.xd;
	  this.xs = !!opts.xs;
	  this.async = false !== opts.async;
	  this.data = undefined !== opts.data ? opts.data : null;
	  this.agent = opts.agent;
	  this.isBinary = opts.isBinary;
	  this.supportsBinary = opts.supportsBinary;
	  this.enablesXDR = opts.enablesXDR;
	  this.withCredentials = opts.withCredentials;
	  this.requestTimeout = opts.requestTimeout;
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	
	  this.create();
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Request.prototype);
	
	/**
	 * Creates the XHR object and sends the request.
	 *
	 * @api private
	 */
	
	Request.prototype.create = function () {
	  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	
	  var xhr = this.xhr = new XMLHttpRequest(opts);
	  var self = this;
	
	  try {
	    debug('xhr open %s: %s', this.method, this.uri);
	    xhr.open(this.method, this.uri, this.async);
	    try {
	      if (this.extraHeaders) {
	        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
	        for (var i in this.extraHeaders) {
	          if (this.extraHeaders.hasOwnProperty(i)) {
	            xhr.setRequestHeader(i, this.extraHeaders[i]);
	          }
	        }
	      }
	    } catch (e) {}
	
	    if ('POST' === this.method) {
	      try {
	        if (this.isBinary) {
	          xhr.setRequestHeader('Content-type', 'application/octet-stream');
	        } else {
	          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
	        }
	      } catch (e) {}
	    }
	
	    try {
	      xhr.setRequestHeader('Accept', '*/*');
	    } catch (e) {}
	
	    // ie6 check
	    if ('withCredentials' in xhr) {
	      xhr.withCredentials = this.withCredentials;
	    }
	
	    if (this.requestTimeout) {
	      xhr.timeout = this.requestTimeout;
	    }
	
	    if (this.hasXDR()) {
	      xhr.onload = function () {
	        self.onLoad();
	      };
	      xhr.onerror = function () {
	        self.onError(xhr.responseText);
	      };
	    } else {
	      xhr.onreadystatechange = function () {
	        if (xhr.readyState === 2) {
	          try {
	            var contentType = xhr.getResponseHeader('Content-Type');
	            if (self.supportsBinary && contentType === 'application/octet-stream' || contentType === 'application/octet-stream; charset=UTF-8') {
	              xhr.responseType = 'arraybuffer';
	            }
	          } catch (e) {}
	        }
	        if (4 !== xhr.readyState) return;
	        if (200 === xhr.status || 1223 === xhr.status) {
	          self.onLoad();
	        } else {
	          // make sure the `error` event handler that's user-set
	          // does not throw in the same tick and gets caught here
	          setTimeout(function () {
	            self.onError(typeof xhr.status === 'number' ? xhr.status : 0);
	          }, 0);
	        }
	      };
	    }
	
	    debug('xhr data %s', this.data);
	    xhr.send(this.data);
	  } catch (e) {
	    // Need to defer since .create() is called directly fhrom the constructor
	    // and thus the 'error' event can only be only bound *after* this exception
	    // occurs.  Therefore, also, we cannot throw here at all.
	    setTimeout(function () {
	      self.onError(e);
	    }, 0);
	    return;
	  }
	
	  if (typeof document !== 'undefined') {
	    this.index = Request.requestsCount++;
	    Request.requests[this.index] = this;
	  }
	};
	
	/**
	 * Called upon successful response.
	 *
	 * @api private
	 */
	
	Request.prototype.onSuccess = function () {
	  this.emit('success');
	  this.cleanup();
	};
	
	/**
	 * Called if we have data.
	 *
	 * @api private
	 */
	
	Request.prototype.onData = function (data) {
	  this.emit('data', data);
	  this.onSuccess();
	};
	
	/**
	 * Called upon error.
	 *
	 * @api private
	 */
	
	Request.prototype.onError = function (err) {
	  this.emit('error', err);
	  this.cleanup(true);
	};
	
	/**
	 * Cleans up house.
	 *
	 * @api private
	 */
	
	Request.prototype.cleanup = function (fromError) {
	  if ('undefined' === typeof this.xhr || null === this.xhr) {
	    return;
	  }
	  // xmlhttprequest
	  if (this.hasXDR()) {
	    this.xhr.onload = this.xhr.onerror = empty;
	  } else {
	    this.xhr.onreadystatechange = empty;
	  }
	
	  if (fromError) {
	    try {
	      this.xhr.abort();
	    } catch (e) {}
	  }
	
	  if (typeof document !== 'undefined') {
	    delete Request.requests[this.index];
	  }
	
	  this.xhr = null;
	};
	
	/**
	 * Called upon load.
	 *
	 * @api private
	 */
	
	Request.prototype.onLoad = function () {
	  var data;
	  try {
	    var contentType;
	    try {
	      contentType = this.xhr.getResponseHeader('Content-Type');
	    } catch (e) {}
	    if (contentType === 'application/octet-stream' || contentType === 'application/octet-stream; charset=UTF-8') {
	      data = this.xhr.response || this.xhr.responseText;
	    } else {
	      data = this.xhr.responseText;
	    }
	  } catch (e) {
	    this.onError(e);
	  }
	  if (null != data) {
	    this.onData(data);
	  }
	};
	
	/**
	 * Check if it has XDomainRequest.
	 *
	 * @api private
	 */
	
	Request.prototype.hasXDR = function () {
	  return typeof XDomainRequest !== 'undefined' && !this.xs && this.enablesXDR;
	};
	
	/**
	 * Aborts the request.
	 *
	 * @api public
	 */
	
	Request.prototype.abort = function () {
	  this.cleanup();
	};
	
	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */
	
	Request.requestsCount = 0;
	Request.requests = {};
	
	if (typeof document !== 'undefined') {
	  if (typeof attachEvent === 'function') {
	    attachEvent('onunload', unloadHandler);
	  } else if (typeof addEventListener === 'function') {
	    var terminationEvent = 'onpagehide' in globalThis ? 'pagehide' : 'unload';
	    addEventListener(terminationEvent, unloadHandler, false);
	  }
	}
	
	function unloadHandler () {
	  for (var i in Request.requests) {
	    if (Request.requests.hasOwnProperty(i)) {
	      Request.requests[i].abort();
	    }
	  }
	}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Transport = __webpack_require__(21);
	var parseqs = __webpack_require__(30);
	var parser = __webpack_require__(22);
	var inherit = __webpack_require__(31);
	var yeast = __webpack_require__(32);
	var debug = __webpack_require__(3)('engine.io-client:polling');
	
	/**
	 * Module exports.
	 */
	
	module.exports = Polling;
	
	/**
	 * Is XHR2 supported?
	 */
	
	var hasXHR2 = (function () {
	  var XMLHttpRequest = __webpack_require__(16);
	  var xhr = new XMLHttpRequest({ xdomain: false });
	  return null != xhr.responseType;
	})();
	
	/**
	 * Polling interface.
	 *
	 * @param {Object} opts
	 * @api private
	 */
	
	function Polling (opts) {
	  var forceBase64 = (opts && opts.forceBase64);
	  if (!hasXHR2 || forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}
	
	/**
	 * Inherits from Transport.
	 */
	
	inherit(Polling, Transport);
	
	/**
	 * Transport name.
	 */
	
	Polling.prototype.name = 'polling';
	
	/**
	 * Opens the socket (triggers polling). We write a PING message to determine
	 * when the transport is open.
	 *
	 * @api private
	 */
	
	Polling.prototype.doOpen = function () {
	  this.poll();
	};
	
	/**
	 * Pauses polling.
	 *
	 * @param {Function} callback upon buffers are flushed and transport is paused
	 * @api private
	 */
	
	Polling.prototype.pause = function (onPause) {
	  var self = this;
	
	  this.readyState = 'pausing';
	
	  function pause () {
	    debug('paused');
	    self.readyState = 'paused';
	    onPause();
	  }
	
	  if (this.polling || !this.writable) {
	    var total = 0;
	
	    if (this.polling) {
	      debug('we are currently polling - waiting to pause');
	      total++;
	      this.once('pollComplete', function () {
	        debug('pre-pause polling complete');
	        --total || pause();
	      });
	    }
	
	    if (!this.writable) {
	      debug('we are currently writing - waiting to pause');
	      total++;
	      this.once('drain', function () {
	        debug('pre-pause writing complete');
	        --total || pause();
	      });
	    }
	  } else {
	    pause();
	  }
	};
	
	/**
	 * Starts polling cycle.
	 *
	 * @api public
	 */
	
	Polling.prototype.poll = function () {
	  debug('polling');
	  this.polling = true;
	  this.doPoll();
	  this.emit('poll');
	};
	
	/**
	 * Overloads onData to detect payloads.
	 *
	 * @api private
	 */
	
	Polling.prototype.onData = function (data) {
	  var self = this;
	  debug('polling got data %s', data);
	  var callback = function (packet, index, total) {
	    // if its the first message we consider the transport open
	    if ('opening' === self.readyState && packet.type === 'open') {
	      self.onOpen();
	    }
	
	    // if its a close packet, we close the ongoing requests
	    if ('close' === packet.type) {
	      self.onClose();
	      return false;
	    }
	
	    // otherwise bypass onData and handle the message
	    self.onPacket(packet);
	  };
	
	  // decode payload
	  parser.decodePayload(data, this.socket.binaryType, callback);
	
	  // if an event did not trigger closing
	  if ('closed' !== this.readyState) {
	    // if we got data we're not polling
	    this.polling = false;
	    this.emit('pollComplete');
	
	    if ('open' === this.readyState) {
	      this.poll();
	    } else {
	      debug('ignoring poll - transport state "%s"', this.readyState);
	    }
	  }
	};
	
	/**
	 * For polling, send a close packet.
	 *
	 * @api private
	 */
	
	Polling.prototype.doClose = function () {
	  var self = this;
	
	  function close () {
	    debug('writing close packet');
	    self.write([{ type: 'close' }]);
	  }
	
	  if ('open' === this.readyState) {
	    debug('transport open - closing');
	    close();
	  } else {
	    // in case we're trying to close while
	    // handshaking is in progress (GH-164)
	    debug('transport not open - deferring close');
	    this.once('open', close);
	  }
	};
	
	/**
	 * Writes a packets payload.
	 *
	 * @param {Array} data packets
	 * @param {Function} drain callback
	 * @api private
	 */
	
	Polling.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;
	  var callbackfn = function () {
	    self.writable = true;
	    self.emit('drain');
	  };
	
	  parser.encodePayload(packets, this.supportsBinary, function (data) {
	    self.doWrite(data, callbackfn);
	  });
	};
	
	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */
	
	Polling.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'https' : 'http';
	  var port = '';
	
	  // cache busting is forced
	  if (false !== this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }
	
	  if (!this.supportsBinary && !query.sid) {
	    query.b64 = 1;
	  }
	
	  query = parseqs.encode(query);
	
	  // avoid port if default for schema
	  if (this.port && (('https' === schema && Number(this.port) !== 443) ||
	     ('http' === schema && Number(this.port) !== 80))) {
	    port = ':' + this.port;
	  }
	
	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }
	
	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var parser = __webpack_require__(22);
	var Emitter = __webpack_require__(8);
	
	/**
	 * Module exports.
	 */
	
	module.exports = Transport;
	
	/**
	 * Transport abstract constructor.
	 *
	 * @param {Object} options.
	 * @api private
	 */
	
	function Transport (opts) {
	  this.path = opts.path;
	  this.hostname = opts.hostname;
	  this.port = opts.port;
	  this.secure = opts.secure;
	  this.query = opts.query;
	  this.timestampParam = opts.timestampParam;
	  this.timestampRequests = opts.timestampRequests;
	  this.readyState = '';
	  this.agent = opts.agent || false;
	  this.socket = opts.socket;
	  this.enablesXDR = opts.enablesXDR;
	  this.withCredentials = opts.withCredentials;
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	  this.forceNode = opts.forceNode;
	
	  // results of ReactNative environment detection
	  this.isReactNative = opts.isReactNative;
	
	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	  this.localAddress = opts.localAddress;
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Transport.prototype);
	
	/**
	 * Emits an error.
	 *
	 * @param {String} str
	 * @return {Transport} for chaining
	 * @api public
	 */
	
	Transport.prototype.onError = function (msg, desc) {
	  var err = new Error(msg);
	  err.type = 'TransportError';
	  err.description = desc;
	  this.emit('error', err);
	  return this;
	};
	
	/**
	 * Opens the transport.
	 *
	 * @api public
	 */
	
	Transport.prototype.open = function () {
	  if ('closed' === this.readyState || '' === this.readyState) {
	    this.readyState = 'opening';
	    this.doOpen();
	  }
	
	  return this;
	};
	
	/**
	 * Closes the transport.
	 *
	 * @api private
	 */
	
	Transport.prototype.close = function () {
	  if ('opening' === this.readyState || 'open' === this.readyState) {
	    this.doClose();
	    this.onClose();
	  }
	
	  return this;
	};
	
	/**
	 * Sends multiple packets.
	 *
	 * @param {Array} packets
	 * @api private
	 */
	
	Transport.prototype.send = function (packets) {
	  if ('open' === this.readyState) {
	    this.write(packets);
	  } else {
	    throw new Error('Transport not open');
	  }
	};
	
	/**
	 * Called upon open
	 *
	 * @api private
	 */
	
	Transport.prototype.onOpen = function () {
	  this.readyState = 'open';
	  this.writable = true;
	  this.emit('open');
	};
	
	/**
	 * Called with data.
	 *
	 * @param {String} data
	 * @api private
	 */
	
	Transport.prototype.onData = function (data) {
	  var packet = parser.decodePacket(data, this.socket.binaryType);
	  this.onPacket(packet);
	};
	
	/**
	 * Called with a decoded packet.
	 */
	
	Transport.prototype.onPacket = function (packet) {
	  this.emit('packet', packet);
	};
	
	/**
	 * Called upon close.
	 *
	 * @api private
	 */
	
	Transport.prototype.onClose = function () {
	  this.readyState = 'closed';
	  this.emit('close');
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var keys = __webpack_require__(23);
	var hasBinary = __webpack_require__(24);
	var sliceBuffer = __webpack_require__(25);
	var after = __webpack_require__(26);
	var utf8 = __webpack_require__(27);
	
	var base64encoder;
	if (typeof ArrayBuffer !== 'undefined') {
	  base64encoder = __webpack_require__(28);
	}
	
	/**
	 * Check if we are running an android browser. That requires us to use
	 * ArrayBuffer with polling transports...
	 *
	 * http://ghinda.net/jpeg-blob-ajax-android/
	 */
	
	var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
	
	/**
	 * Check if we are running in PhantomJS.
	 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
	 * https://github.com/ariya/phantomjs/issues/11395
	 * @type boolean
	 */
	var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);
	
	/**
	 * When true, avoids using Blobs to encode payloads.
	 * @type boolean
	 */
	var dontSendBlobs = isAndroid || isPhantomJS;
	
	/**
	 * Current protocol version.
	 */
	
	exports.protocol = 3;
	
	/**
	 * Packet types.
	 */
	
	var packets = exports.packets = {
	    open:     0    // non-ws
	  , close:    1    // non-ws
	  , ping:     2
	  , pong:     3
	  , message:  4
	  , upgrade:  5
	  , noop:     6
	};
	
	var packetslist = keys(packets);
	
	/**
	 * Premade error packet.
	 */
	
	var err = { type: 'error', data: 'parser error' };
	
	/**
	 * Create a blob api even for blob builder when vendor prefixes exist
	 */
	
	var Blob = __webpack_require__(29);
	
	/**
	 * Encodes a packet.
	 *
	 *     <packet type id> [ <data> ]
	 *
	 * Example:
	 *
	 *     5hello world
	 *     3
	 *     4
	 *
	 * Binary is encoded in an identical principle
	 *
	 * @api private
	 */
	
	exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
	  if (typeof supportsBinary === 'function') {
	    callback = supportsBinary;
	    supportsBinary = false;
	  }
	
	  if (typeof utf8encode === 'function') {
	    callback = utf8encode;
	    utf8encode = null;
	  }
	
	  var data = (packet.data === undefined)
	    ? undefined
	    : packet.data.buffer || packet.data;
	
	  if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
	    return encodeArrayBuffer(packet, supportsBinary, callback);
	  } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
	    return encodeBlob(packet, supportsBinary, callback);
	  }
	
	  // might be an object with { base64: true, data: dataAsBase64String }
	  if (data && data.base64) {
	    return encodeBase64Object(packet, callback);
	  }
	
	  // Sending data as a utf-8 string
	  var encoded = packets[packet.type];
	
	  // data fragment is optional
	  if (undefined !== packet.data) {
	    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
	  }
	
	  return callback('' + encoded);
	
	};
	
	function encodeBase64Object(packet, callback) {
	  // packet data is an object { base64: true, data: dataAsBase64String }
	  var message = 'b' + exports.packets[packet.type] + packet.data.data;
	  return callback(message);
	}
	
	/**
	 * Encode packet helpers for binary types
	 */
	
	function encodeArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  var data = packet.data;
	  var contentArray = new Uint8Array(data);
	  var resultBuffer = new Uint8Array(1 + data.byteLength);
	
	  resultBuffer[0] = packets[packet.type];
	  for (var i = 0; i < contentArray.length; i++) {
	    resultBuffer[i+1] = contentArray[i];
	  }
	
	  return callback(resultBuffer.buffer);
	}
	
	function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  var fr = new FileReader();
	  fr.onload = function() {
	    exports.encodePacket({ type: packet.type, data: fr.result }, supportsBinary, true, callback);
	  };
	  return fr.readAsArrayBuffer(packet.data);
	}
	
	function encodeBlob(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  if (dontSendBlobs) {
	    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
	  }
	
	  var length = new Uint8Array(1);
	  length[0] = packets[packet.type];
	  var blob = new Blob([length.buffer, packet.data]);
	
	  return callback(blob);
	}
	
	/**
	 * Encodes a packet with binary data in a base64 string
	 *
	 * @param {Object} packet, has `type` and `data`
	 * @return {String} base64 encoded message
	 */
	
	exports.encodeBase64Packet = function(packet, callback) {
	  var message = 'b' + exports.packets[packet.type];
	  if (typeof Blob !== 'undefined' && packet.data instanceof Blob) {
	    var fr = new FileReader();
	    fr.onload = function() {
	      var b64 = fr.result.split(',')[1];
	      callback(message + b64);
	    };
	    return fr.readAsDataURL(packet.data);
	  }
	
	  var b64data;
	  try {
	    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
	  } catch (e) {
	    // iPhone Safari doesn't let you apply with typed arrays
	    var typed = new Uint8Array(packet.data);
	    var basic = new Array(typed.length);
	    for (var i = 0; i < typed.length; i++) {
	      basic[i] = typed[i];
	    }
	    b64data = String.fromCharCode.apply(null, basic);
	  }
	  message += btoa(b64data);
	  return callback(message);
	};
	
	/**
	 * Decodes a packet. Changes format to Blob if requested.
	 *
	 * @return {Object} with `type` and `data` (if any)
	 * @api private
	 */
	
	exports.decodePacket = function (data, binaryType, utf8decode) {
	  if (data === undefined) {
	    return err;
	  }
	  // String data
	  if (typeof data === 'string') {
	    if (data.charAt(0) === 'b') {
	      return exports.decodeBase64Packet(data.substr(1), binaryType);
	    }
	
	    if (utf8decode) {
	      data = tryDecode(data);
	      if (data === false) {
	        return err;
	      }
	    }
	    var type = data.charAt(0);
	
	    if (Number(type) != type || !packetslist[type]) {
	      return err;
	    }
	
	    if (data.length > 1) {
	      return { type: packetslist[type], data: data.substring(1) };
	    } else {
	      return { type: packetslist[type] };
	    }
	  }
	
	  var asArray = new Uint8Array(data);
	  var type = asArray[0];
	  var rest = sliceBuffer(data, 1);
	  if (Blob && binaryType === 'blob') {
	    rest = new Blob([rest]);
	  }
	  return { type: packetslist[type], data: rest };
	};
	
	function tryDecode(data) {
	  try {
	    data = utf8.decode(data, { strict: false });
	  } catch (e) {
	    return false;
	  }
	  return data;
	}
	
	/**
	 * Decodes a packet encoded in a base64 string
	 *
	 * @param {String} base64 encoded message
	 * @return {Object} with `type` and `data` (if any)
	 */
	
	exports.decodeBase64Packet = function(msg, binaryType) {
	  var type = packetslist[msg.charAt(0)];
	  if (!base64encoder) {
	    return { type: type, data: { base64: true, data: msg.substr(1) } };
	  }
	
	  var data = base64encoder.decode(msg.substr(1));
	
	  if (binaryType === 'blob' && Blob) {
	    data = new Blob([data]);
	  }
	
	  return { type: type, data: data };
	};
	
	/**
	 * Encodes multiple messages (payload).
	 *
	 *     <length>:data
	 *
	 * Example:
	 *
	 *     11:hello world2:hi
	 *
	 * If any contents are binary, they will be encoded as base64 strings. Base64
	 * encoded strings are marked with a b before the length specifier
	 *
	 * @param {Array} packets
	 * @api private
	 */
	
	exports.encodePayload = function (packets, supportsBinary, callback) {
	  if (typeof supportsBinary === 'function') {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }
	
	  var isBinary = hasBinary(packets);
	
	  if (supportsBinary && isBinary) {
	    if (Blob && !dontSendBlobs) {
	      return exports.encodePayloadAsBlob(packets, callback);
	    }
	
	    return exports.encodePayloadAsArrayBuffer(packets, callback);
	  }
	
	  if (!packets.length) {
	    return callback('0:');
	  }
	
	  function setLengthHeader(message) {
	    return message.length + ':' + message;
	  }
	
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
	      doneCallback(null, setLengthHeader(message));
	    });
	  }
	
	  map(packets, encodeOne, function(err, results) {
	    return callback(results.join(''));
	  });
	};
	
	/**
	 * Async array map using after
	 */
	
	function map(ary, each, done) {
	  var result = new Array(ary.length);
	  var next = after(ary.length, done);
	
	  var eachWithIndex = function(i, el, cb) {
	    each(el, function(error, msg) {
	      result[i] = msg;
	      cb(error, result);
	    });
	  };
	
	  for (var i = 0; i < ary.length; i++) {
	    eachWithIndex(i, ary[i], next);
	  }
	}
	
	/*
	 * Decodes data when a payload is maybe expected. Possible binary contents are
	 * decoded from their base64 representation
	 *
	 * @param {String} data, callback method
	 * @api public
	 */
	
	exports.decodePayload = function (data, binaryType, callback) {
	  if (typeof data !== 'string') {
	    return exports.decodePayloadAsBinary(data, binaryType, callback);
	  }
	
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }
	
	  var packet;
	  if (data === '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }
	
	  var length = '', n, msg;
	
	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);
	
	    if (chr !== ':') {
	      length += chr;
	      continue;
	    }
	
	    if (length === '' || (length != (n = Number(length)))) {
	      // parser error - ignoring payload
	      return callback(err, 0, 1);
	    }
	
	    msg = data.substr(i + 1, n);
	
	    if (length != msg.length) {
	      // parser error - ignoring payload
	      return callback(err, 0, 1);
	    }
	
	    if (msg.length) {
	      packet = exports.decodePacket(msg, binaryType, false);
	
	      if (err.type === packet.type && err.data === packet.data) {
	        // parser error in individual packet - ignoring payload
	        return callback(err, 0, 1);
	      }
	
	      var ret = callback(packet, i + n, l);
	      if (false === ret) return;
	    }
	
	    // advance cursor
	    i += n;
	    length = '';
	  }
	
	  if (length !== '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }
	
	};
	
	/**
	 * Encodes multiple messages (payload) as binary.
	 *
	 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
	 * 255><data>
	 *
	 * Example:
	 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
	 *
	 * @param {Array} packets
	 * @return {ArrayBuffer} encoded payload
	 * @api private
	 */
	
	exports.encodePayloadAsArrayBuffer = function(packets, callback) {
	  if (!packets.length) {
	    return callback(new ArrayBuffer(0));
	  }
	
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(data) {
	      return doneCallback(null, data);
	    });
	  }
	
	  map(packets, encodeOne, function(err, encodedPackets) {
	    var totalLength = encodedPackets.reduce(function(acc, p) {
	      var len;
	      if (typeof p === 'string'){
	        len = p.length;
	      } else {
	        len = p.byteLength;
	      }
	      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
	    }, 0);
	
	    var resultArray = new Uint8Array(totalLength);
	
	    var bufferIndex = 0;
	    encodedPackets.forEach(function(p) {
	      var isString = typeof p === 'string';
	      var ab = p;
	      if (isString) {
	        var view = new Uint8Array(p.length);
	        for (var i = 0; i < p.length; i++) {
	          view[i] = p.charCodeAt(i);
	        }
	        ab = view.buffer;
	      }
	
	      if (isString) { // not true binary
	        resultArray[bufferIndex++] = 0;
	      } else { // true binary
	        resultArray[bufferIndex++] = 1;
	      }
	
	      var lenStr = ab.byteLength.toString();
	      for (var i = 0; i < lenStr.length; i++) {
	        resultArray[bufferIndex++] = parseInt(lenStr[i]);
	      }
	      resultArray[bufferIndex++] = 255;
	
	      var view = new Uint8Array(ab);
	      for (var i = 0; i < view.length; i++) {
	        resultArray[bufferIndex++] = view[i];
	      }
	    });
	
	    return callback(resultArray.buffer);
	  });
	};
	
	/**
	 * Encode as Blob
	 */
	
	exports.encodePayloadAsBlob = function(packets, callback) {
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(encoded) {
	      var binaryIdentifier = new Uint8Array(1);
	      binaryIdentifier[0] = 1;
	      if (typeof encoded === 'string') {
	        var view = new Uint8Array(encoded.length);
	        for (var i = 0; i < encoded.length; i++) {
	          view[i] = encoded.charCodeAt(i);
	        }
	        encoded = view.buffer;
	        binaryIdentifier[0] = 0;
	      }
	
	      var len = (encoded instanceof ArrayBuffer)
	        ? encoded.byteLength
	        : encoded.size;
	
	      var lenStr = len.toString();
	      var lengthAry = new Uint8Array(lenStr.length + 1);
	      for (var i = 0; i < lenStr.length; i++) {
	        lengthAry[i] = parseInt(lenStr[i]);
	      }
	      lengthAry[lenStr.length] = 255;
	
	      if (Blob) {
	        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
	        doneCallback(null, blob);
	      }
	    });
	  }
	
	  map(packets, encodeOne, function(err, results) {
	    return callback(new Blob(results));
	  });
	};
	
	/*
	 * Decodes data when a payload is maybe expected. Strings are decoded by
	 * interpreting each byte as a key code for entries marked to start with 0. See
	 * description of encodePayloadAsBinary
	 *
	 * @param {ArrayBuffer} data, callback method
	 * @api public
	 */
	
	exports.decodePayloadAsBinary = function (data, binaryType, callback) {
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }
	
	  var bufferTail = data;
	  var buffers = [];
	
	  while (bufferTail.byteLength > 0) {
	    var tailArray = new Uint8Array(bufferTail);
	    var isString = tailArray[0] === 0;
	    var msgLength = '';
	
	    for (var i = 1; ; i++) {
	      if (tailArray[i] === 255) break;
	
	      // 310 = char length of Number.MAX_VALUE
	      if (msgLength.length > 310) {
	        return callback(err, 0, 1);
	      }
	
	      msgLength += tailArray[i];
	    }
	
	    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
	    msgLength = parseInt(msgLength);
	
	    var msg = sliceBuffer(bufferTail, 0, msgLength);
	    if (isString) {
	      try {
	        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
	      } catch (e) {
	        // iPhone Safari doesn't let you apply to typed arrays
	        var typed = new Uint8Array(msg);
	        msg = '';
	        for (var i = 0; i < typed.length; i++) {
	          msg += String.fromCharCode(typed[i]);
	        }
	      }
	    }
	
	    buffers.push(msg);
	    bufferTail = sliceBuffer(bufferTail, msgLength);
	  }
	
	  var total = buffers.length;
	  buffers.forEach(function(buffer, i) {
	    callback(exports.decodePacket(buffer, binaryType, true), i, total);
	  });
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	
	/**
	 * Gets the keys for an object.
	 *
	 * @return {Array} keys
	 * @api private
	 */
	
	module.exports = Object.keys || function keys (obj){
	  var arr = [];
	  var has = Object.prototype.hasOwnProperty;
	
	  for (var i in obj) {
	    if (has.call(obj, i)) {
	      arr.push(i);
	    }
	  }
	  return arr;
	};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	/* global Blob File */
	
	/*
	 * Module requirements.
	 */
	
	var isArray = __webpack_require__(10);
	
	var toString = Object.prototype.toString;
	var withNativeBlob = typeof Blob === 'function' ||
	                        typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
	var withNativeFile = typeof File === 'function' ||
	                        typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';
	
	/**
	 * Module exports.
	 */
	
	module.exports = hasBinary;
	
	/**
	 * Checks for binary data.
	 *
	 * Supports Buffer, ArrayBuffer, Blob and File.
	 *
	 * @param {Object} anything
	 * @api public
	 */
	
	function hasBinary (obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }
	
	  if (isArray(obj)) {
	    for (var i = 0, l = obj.length; i < l; i++) {
	      if (hasBinary(obj[i])) {
	        return true;
	      }
	    }
	    return false;
	  }
	
	  if ((typeof Buffer === 'function' && Buffer.isBuffer && Buffer.isBuffer(obj)) ||
	    (typeof ArrayBuffer === 'function' && obj instanceof ArrayBuffer) ||
	    (withNativeBlob && obj instanceof Blob) ||
	    (withNativeFile && obj instanceof File)
	  ) {
	    return true;
	  }
	
	  // see: https://github.com/Automattic/has-binary/pull/4
	  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
	    return hasBinary(obj.toJSON(), true);
	  }
	
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
	      return true;
	    }
	  }
	
	  return false;
	}


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	/**
	 * An abstraction for slicing an arraybuffer even when
	 * ArrayBuffer.prototype.slice is not supported
	 *
	 * @api public
	 */
	
	module.exports = function(arraybuffer, start, end) {
	  var bytes = arraybuffer.byteLength;
	  start = start || 0;
	  end = end || bytes;
	
	  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }
	
	  if (start < 0) { start += bytes; }
	  if (end < 0) { end += bytes; }
	  if (end > bytes) { end = bytes; }
	
	  if (start >= bytes || start >= end || bytes === 0) {
	    return new ArrayBuffer(0);
	  }
	
	  var abv = new Uint8Array(arraybuffer);
	  var result = new Uint8Array(end - start);
	  for (var i = start, ii = 0; i < end; i++, ii++) {
	    result[ii] = abv[i];
	  }
	  return result.buffer;
	};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = after
	
	function after(count, callback, err_cb) {
	    var bail = false
	    err_cb = err_cb || noop
	    proxy.count = count
	
	    return (count === 0) ? callback() : proxy
	
	    function proxy(err, result) {
	        if (proxy.count <= 0) {
	            throw new Error('after called too many times')
	        }
	        --proxy.count
	
	        // after first error, rest are passed to err_cb
	        if (err) {
	            bail = true
	            callback(err)
	            // future error callbacks will go to error handler
	            callback = err_cb
	        } else if (proxy.count === 0 && !bail) {
	            callback(null, result)
	        }
	    }
	}
	
	function noop() {}


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	/*! https://mths.be/utf8js v2.1.2 by @mathias */
	
	var stringFromCharCode = String.fromCharCode;
	
	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}
	
	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}
	
	function checkScalarValue(codePoint, strict) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			if (strict) {
				throw Error(
					'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
					' is not a scalar value'
				);
			}
			return false;
		}
		return true;
	}
	/*--------------------------------------------------------------------------*/
	
	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}
	
	function encodeCodePoint(codePoint, strict) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			if (!checkScalarValue(codePoint, strict)) {
				codePoint = 0xFFFD;
			}
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}
	
	function utf8encode(string, opts) {
		opts = opts || {};
		var strict = false !== opts.strict;
	
		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint, strict);
		}
		return byteString;
	}
	
	/*--------------------------------------------------------------------------*/
	
	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}
	
		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;
	
		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}
	
		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}
	
	function decodeSymbol(strict) {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;
	
		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}
	
		if (byteIndex == byteCount) {
			return false;
		}
	
		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;
	
		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}
	
		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}
	
		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
			} else {
				throw Error('Invalid continuation byte');
			}
		}
	
		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}
	
		throw Error('Invalid UTF-8 detected');
	}
	
	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString, opts) {
		opts = opts || {};
		var strict = false !== opts.strict;
	
		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol(strict)) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}
	
	module.exports = {
		version: '2.1.2',
		encode: utf8encode,
		decode: utf8decode
	};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function(chars){
	  "use strict";
	
	  exports.encode = function(arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	    i, len = bytes.length, base64 = "";
	
	    for (i = 0; i < len; i+=3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
	      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
	      base64 += chars[bytes[i + 2] & 63];
	    }
	
	    if ((len % 3) === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }
	
	    return base64;
	  };
	
	  exports.decode =  function(base64) {
	    var bufferLength = base64.length * 0.75,
	    len = base64.length, i, p = 0,
	    encoded1, encoded2, encoded3, encoded4;
	
	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }
	
	    var arraybuffer = new ArrayBuffer(bufferLength),
	    bytes = new Uint8Array(arraybuffer);
	
	    for (i = 0; i < len; i+=4) {
	      encoded1 = chars.indexOf(base64[i]);
	      encoded2 = chars.indexOf(base64[i+1]);
	      encoded3 = chars.indexOf(base64[i+2]);
	      encoded4 = chars.indexOf(base64[i+3]);
	
	      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
	      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
	      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
	    }
	
	    return arraybuffer;
	  };
	})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	/**
	 * Create a blob builder even when vendor prefixes exist
	 */
	
	var BlobBuilder = typeof BlobBuilder !== 'undefined' ? BlobBuilder :
	  typeof WebKitBlobBuilder !== 'undefined' ? WebKitBlobBuilder :
	  typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder :
	  typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : 
	  false;
	
	/**
	 * Check if Blob constructor is supported
	 */
	
	var blobSupported = (function() {
	  try {
	    var a = new Blob(['hi']);
	    return a.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();
	
	/**
	 * Check if Blob constructor supports ArrayBufferViews
	 * Fails in Safari 6, so we need to map to ArrayBuffers there.
	 */
	
	var blobSupportsArrayBufferView = blobSupported && (function() {
	  try {
	    var b = new Blob([new Uint8Array([1,2])]);
	    return b.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();
	
	/**
	 * Check if BlobBuilder is supported
	 */
	
	var blobBuilderSupported = BlobBuilder
	  && BlobBuilder.prototype.append
	  && BlobBuilder.prototype.getBlob;
	
	/**
	 * Helper function that maps ArrayBufferViews to ArrayBuffers
	 * Used by BlobBuilder constructor and old browsers that didn't
	 * support it in the Blob constructor.
	 */
	
	function mapArrayBufferViews(ary) {
	  return ary.map(function(chunk) {
	    if (chunk.buffer instanceof ArrayBuffer) {
	      var buf = chunk.buffer;
	
	      // if this is a subarray, make a copy so we only
	      // include the subarray region from the underlying buffer
	      if (chunk.byteLength !== buf.byteLength) {
	        var copy = new Uint8Array(chunk.byteLength);
	        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
	        buf = copy.buffer;
	      }
	
	      return buf;
	    }
	
	    return chunk;
	  });
	}
	
	function BlobBuilderConstructor(ary, options) {
	  options = options || {};
	
	  var bb = new BlobBuilder();
	  mapArrayBufferViews(ary).forEach(function(part) {
	    bb.append(part);
	  });
	
	  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
	};
	
	function BlobConstructor(ary, options) {
	  return new Blob(mapArrayBufferViews(ary), options || {});
	};
	
	if (typeof Blob !== 'undefined') {
	  BlobBuilderConstructor.prototype = Blob.prototype;
	  BlobConstructor.prototype = Blob.prototype;
	}
	
	module.exports = (function() {
	  if (blobSupported) {
	    return blobSupportsArrayBufferView ? Blob : BlobConstructor;
	  } else if (blobBuilderSupported) {
	    return BlobBuilderConstructor;
	  } else {
	    return undefined;
	  }
	})();


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */
	
	exports.encode = function (obj) {
	  var str = '';
	
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      if (str.length) str += '&';
	      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	    }
	  }
	
	  return str;
	};
	
	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */
	
	exports.decode = function(qs){
	  var qry = {};
	  var pairs = qs.split('&');
	  for (var i = 0, l = pairs.length; i < l; i++) {
	    var pair = pairs[i].split('=');
	    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	  return qry;
	};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	
	module.exports = function(a, b){
	  var fn = function(){};
	  fn.prototype = b.prototype;
	  a.prototype = new fn;
	  a.prototype.constructor = a;
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';
	
	var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
	  , length = 64
	  , map = {}
	  , seed = 0
	  , i = 0
	  , prev;
	
	/**
	 * Return a string representing the specified number.
	 *
	 * @param {Number} num The number to convert.
	 * @returns {String} The string representation of the number.
	 * @api public
	 */
	function encode(num) {
	  var encoded = '';
	
	  do {
	    encoded = alphabet[num % length] + encoded;
	    num = Math.floor(num / length);
	  } while (num > 0);
	
	  return encoded;
	}
	
	/**
	 * Return the integer value specified by the given string.
	 *
	 * @param {String} str The string to convert.
	 * @returns {Number} The integer value represented by the string.
	 * @api public
	 */
	function decode(str) {
	  var decoded = 0;
	
	  for (i = 0; i < str.length; i++) {
	    decoded = decoded * length + map[str.charAt(i)];
	  }
	
	  return decoded;
	}
	
	/**
	 * Yeast: A tiny growing id generator.
	 *
	 * @returns {String} A unique id.
	 * @api public
	 */
	function yeast() {
	  var now = encode(+new Date());
	
	  if (now !== prev) return seed = 0, prev = now;
	  return now +'.'+ encode(seed++);
	}
	
	//
	// Map each character to its index.
	//
	for (; i < length; i++) map[alphabet[i]] = i;
	
	//
	// Expose the `yeast`, `encode` and `decode` functions.
	//
	yeast.encode = encode;
	yeast.decode = decode;
	module.exports = yeast;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module requirements.
	 */
	
	var Polling = __webpack_require__(20);
	var inherit = __webpack_require__(31);
	var globalThis = __webpack_require__(18);
	
	/**
	 * Module exports.
	 */
	
	module.exports = JSONPPolling;
	
	/**
	 * Cached regular expressions.
	 */
	
	var rNewline = /\n/g;
	var rEscapedNewline = /\\n/g;
	
	/**
	 * Global JSONP callbacks.
	 */
	
	var callbacks;
	
	/**
	 * Noop.
	 */
	
	function empty () { }
	
	/**
	 * JSONP Polling constructor.
	 *
	 * @param {Object} opts.
	 * @api public
	 */
	
	function JSONPPolling (opts) {
	  Polling.call(this, opts);
	
	  this.query = this.query || {};
	
	  // define global callbacks array if not present
	  // we do this here (lazily) to avoid unneeded global pollution
	  if (!callbacks) {
	    // we need to consider multiple engines in the same page
	    callbacks = globalThis.___eio = (globalThis.___eio || []);
	  }
	
	  // callback identifier
	  this.index = callbacks.length;
	
	  // add callback to jsonp global
	  var self = this;
	  callbacks.push(function (msg) {
	    self.onData(msg);
	  });
	
	  // append to query string
	  this.query.j = this.index;
	
	  // prevent spurious errors from being emitted when the window is unloaded
	  if (typeof addEventListener === 'function') {
	    addEventListener('beforeunload', function () {
	      if (self.script) self.script.onerror = empty;
	    }, false);
	  }
	}
	
	/**
	 * Inherits from Polling.
	 */
	
	inherit(JSONPPolling, Polling);
	
	/*
	 * JSONP only supports binary as base64 encoded strings
	 */
	
	JSONPPolling.prototype.supportsBinary = false;
	
	/**
	 * Closes the socket.
	 *
	 * @api private
	 */
	
	JSONPPolling.prototype.doClose = function () {
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }
	
	  if (this.form) {
	    this.form.parentNode.removeChild(this.form);
	    this.form = null;
	    this.iframe = null;
	  }
	
	  Polling.prototype.doClose.call(this);
	};
	
	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */
	
	JSONPPolling.prototype.doPoll = function () {
	  var self = this;
	  var script = document.createElement('script');
	
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }
	
	  script.async = true;
	  script.src = this.uri();
	  script.onerror = function (e) {
	    self.onError('jsonp poll error', e);
	  };
	
	  var insertAt = document.getElementsByTagName('script')[0];
	  if (insertAt) {
	    insertAt.parentNode.insertBefore(script, insertAt);
	  } else {
	    (document.head || document.body).appendChild(script);
	  }
	  this.script = script;
	
	  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);
	
	  if (isUAgecko) {
	    setTimeout(function () {
	      var iframe = document.createElement('iframe');
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	    }, 100);
	  }
	};
	
	/**
	 * Writes with a hidden iframe.
	 *
	 * @param {String} data to send
	 * @param {Function} called upon flush.
	 * @api private
	 */
	
	JSONPPolling.prototype.doWrite = function (data, fn) {
	  var self = this;
	
	  if (!this.form) {
	    var form = document.createElement('form');
	    var area = document.createElement('textarea');
	    var id = this.iframeId = 'eio_iframe_' + this.index;
	    var iframe;
	
	    form.className = 'socketio';
	    form.style.position = 'absolute';
	    form.style.top = '-1000px';
	    form.style.left = '-1000px';
	    form.target = id;
	    form.method = 'POST';
	    form.setAttribute('accept-charset', 'utf-8');
	    area.name = 'd';
	    form.appendChild(area);
	    document.body.appendChild(form);
	
	    this.form = form;
	    this.area = area;
	  }
	
	  this.form.action = this.uri();
	
	  function complete () {
	    initIframe();
	    fn();
	  }
	
	  function initIframe () {
	    if (self.iframe) {
	      try {
	        self.form.removeChild(self.iframe);
	      } catch (e) {
	        self.onError('jsonp polling iframe removal error', e);
	      }
	    }
	
	    try {
	      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
	      iframe = document.createElement(html);
	    } catch (e) {
	      iframe = document.createElement('iframe');
	      iframe.name = self.iframeId;
	      iframe.src = 'javascript:0';
	    }
	
	    iframe.id = self.iframeId;
	
	    self.form.appendChild(iframe);
	    self.iframe = iframe;
	  }
	
	  initIframe();
	
	  // escape \n to prevent it from being converted into \r\n by some UAs
	  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
	  data = data.replace(rEscapedNewline, '\\\n');
	  this.area.value = data.replace(rNewline, '\\n');
	
	  try {
	    this.form.submit();
	  } catch (e) {}
	
	  if (this.iframe.attachEvent) {
	    this.iframe.onreadystatechange = function () {
	      if (self.iframe.readyState === 'complete') {
	        complete();
	      }
	    };
	  } else {
	    this.iframe.onload = complete;
	  }
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Transport = __webpack_require__(21);
	var parser = __webpack_require__(22);
	var parseqs = __webpack_require__(30);
	var inherit = __webpack_require__(31);
	var yeast = __webpack_require__(32);
	var debug = __webpack_require__(3)('engine.io-client:websocket');
	
	var BrowserWebSocket, NodeWebSocket;
	
	if (typeof WebSocket !== 'undefined') {
	  BrowserWebSocket = WebSocket;
	} else if (typeof self !== 'undefined') {
	  BrowserWebSocket = self.WebSocket || self.MozWebSocket;
	}
	
	if (typeof window === 'undefined') {
	  try {
	    NodeWebSocket = __webpack_require__(35);
	  } catch (e) { }
	}
	
	/**
	 * Get either the `WebSocket` or `MozWebSocket` globals
	 * in the browser or try to resolve WebSocket-compatible
	 * interface exposed by `ws` for Node-like environment.
	 */
	
	var WebSocketImpl = BrowserWebSocket || NodeWebSocket;
	
	/**
	 * Module exports.
	 */
	
	module.exports = WS;
	
	/**
	 * WebSocket transport constructor.
	 *
	 * @api {Object} connection options
	 * @api public
	 */
	
	function WS (opts) {
	  var forceBase64 = (opts && opts.forceBase64);
	  if (forceBase64) {
	    this.supportsBinary = false;
	  }
	  this.perMessageDeflate = opts.perMessageDeflate;
	  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
	  this.protocols = opts.protocols;
	  if (!this.usingBrowserWebSocket) {
	    WebSocketImpl = NodeWebSocket;
	  }
	  Transport.call(this, opts);
	}
	
	/**
	 * Inherits from Transport.
	 */
	
	inherit(WS, Transport);
	
	/**
	 * Transport name.
	 *
	 * @api public
	 */
	
	WS.prototype.name = 'websocket';
	
	/*
	 * WebSockets support binary
	 */
	
	WS.prototype.supportsBinary = true;
	
	/**
	 * Opens socket.
	 *
	 * @api private
	 */
	
	WS.prototype.doOpen = function () {
	  if (!this.check()) {
	    // let probe timeout
	    return;
	  }
	
	  var uri = this.uri();
	  var protocols = this.protocols;
	
	  var opts = {};
	
	  if (!this.isReactNative) {
	    opts.agent = this.agent;
	    opts.perMessageDeflate = this.perMessageDeflate;
	
	    // SSL options for Node.js client
	    opts.pfx = this.pfx;
	    opts.key = this.key;
	    opts.passphrase = this.passphrase;
	    opts.cert = this.cert;
	    opts.ca = this.ca;
	    opts.ciphers = this.ciphers;
	    opts.rejectUnauthorized = this.rejectUnauthorized;
	  }
	
	  if (this.extraHeaders) {
	    opts.headers = this.extraHeaders;
	  }
	  if (this.localAddress) {
	    opts.localAddress = this.localAddress;
	  }
	
	  try {
	    this.ws =
	      this.usingBrowserWebSocket && !this.isReactNative
	        ? protocols
	          ? new WebSocketImpl(uri, protocols)
	          : new WebSocketImpl(uri)
	        : new WebSocketImpl(uri, protocols, opts);
	  } catch (err) {
	    return this.emit('error', err);
	  }
	
	  if (this.ws.binaryType === undefined) {
	    this.supportsBinary = false;
	  }
	
	  if (this.ws.supports && this.ws.supports.binary) {
	    this.supportsBinary = true;
	    this.ws.binaryType = 'nodebuffer';
	  } else {
	    this.ws.binaryType = 'arraybuffer';
	  }
	
	  this.addEventListeners();
	};
	
	/**
	 * Adds event listeners to the socket
	 *
	 * @api private
	 */
	
	WS.prototype.addEventListeners = function () {
	  var self = this;
	
	  this.ws.onopen = function () {
	    self.onOpen();
	  };
	  this.ws.onclose = function () {
	    self.onClose();
	  };
	  this.ws.onmessage = function (ev) {
	    self.onData(ev.data);
	  };
	  this.ws.onerror = function (e) {
	    self.onError('websocket error', e);
	  };
	};
	
	/**
	 * Writes data to socket.
	 *
	 * @param {Array} array of packets.
	 * @api private
	 */
	
	WS.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;
	
	  // encodePacket efficient as it uses WS framing
	  // no need for encodePayload
	  var total = packets.length;
	  for (var i = 0, l = total; i < l; i++) {
	    (function (packet) {
	      parser.encodePacket(packet, self.supportsBinary, function (data) {
	        if (!self.usingBrowserWebSocket) {
	          // always create a new object (GH-437)
	          var opts = {};
	          if (packet.options) {
	            opts.compress = packet.options.compress;
	          }
	
	          if (self.perMessageDeflate) {
	            var len = 'string' === typeof data ? Buffer.byteLength(data) : data.length;
	            if (len < self.perMessageDeflate.threshold) {
	              opts.compress = false;
	            }
	          }
	        }
	
	        // Sometimes the websocket has already been closed but the browser didn't
	        // have a chance of informing us about it yet, in that case send will
	        // throw an error
	        try {
	          if (self.usingBrowserWebSocket) {
	            // TypeError is thrown when passing the second argument on Safari
	            self.ws.send(data);
	          } else {
	            self.ws.send(data, opts);
	          }
	        } catch (e) {
	          debug('websocket closed before onclose event');
	        }
	
	        --total || done();
	      });
	    })(packets[i]);
	  }
	
	  function done () {
	    self.emit('flush');
	
	    // fake drain
	    // defer to next tick to allow Socket to clear writeBuffer
	    setTimeout(function () {
	      self.writable = true;
	      self.emit('drain');
	    }, 0);
	  }
	};
	
	/**
	 * Called upon close
	 *
	 * @api private
	 */
	
	WS.prototype.onClose = function () {
	  Transport.prototype.onClose.call(this);
	};
	
	/**
	 * Closes socket.
	 *
	 * @api private
	 */
	
	WS.prototype.doClose = function () {
	  if (typeof this.ws !== 'undefined') {
	    this.ws.close();
	  }
	};
	
	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */
	
	WS.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'wss' : 'ws';
	  var port = '';
	
	  // avoid port if default for schema
	  if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
	    ('ws' === schema && Number(this.port) !== 80))) {
	    port = ':' + this.port;
	  }
	
	  // append timestamp to URI
	  if (this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }
	
	  // communicate binary support capabilities
	  if (!this.supportsBinary) {
	    query.b64 = 1;
	  }
	
	  query = parseqs.encode(query);
	
	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }
	
	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};
	
	/**
	 * Feature detection for WebSocket.
	 *
	 * @return {Boolean} whether this transport is available.
	 * @api public
	 */
	
	WS.prototype.check = function () {
	  return !!WebSocketImpl && !('__initialize' in WebSocketImpl && this.name === WS.prototype.name);
	};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	/* (ignored) */

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	
	var indexOf = [].indexOf;
	
	module.exports = function(arr, obj){
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var parser = __webpack_require__(7);
	var Emitter = __webpack_require__(8);
	var toArray = __webpack_require__(38);
	var on = __webpack_require__(39);
	var bind = __webpack_require__(40);
	var debug = __webpack_require__(3)('socket.io-client:socket');
	var parseqs = __webpack_require__(30);
	var hasBin = __webpack_require__(24);
	
	/**
	 * Module exports.
	 */
	
	module.exports = exports = Socket;
	
	/**
	 * Internal events (blacklisted).
	 * These events can't be emitted by the user.
	 *
	 * @api private
	 */
	
	var events = {
	  connect: 1,
	  connect_error: 1,
	  connect_timeout: 1,
	  connecting: 1,
	  disconnect: 1,
	  error: 1,
	  reconnect: 1,
	  reconnect_attempt: 1,
	  reconnect_failed: 1,
	  reconnect_error: 1,
	  reconnecting: 1,
	  ping: 1,
	  pong: 1
	};
	
	/**
	 * Shortcut to `Emitter#emit`.
	 */
	
	var emit = Emitter.prototype.emit;
	
	/**
	 * `Socket` constructor.
	 *
	 * @api public
	 */
	
	function Socket (io, nsp, opts) {
	  this.io = io;
	  this.nsp = nsp;
	  this.json = this; // compat
	  this.ids = 0;
	  this.acks = {};
	  this.receiveBuffer = [];
	  this.sendBuffer = [];
	  this.connected = false;
	  this.disconnected = true;
	  this.flags = {};
	  if (opts && opts.query) {
	    this.query = opts.query;
	  }
	  if (this.io.autoConnect) this.open();
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Socket.prototype);
	
	/**
	 * Subscribe to open, close and packet events
	 *
	 * @api private
	 */
	
	Socket.prototype.subEvents = function () {
	  if (this.subs) return;
	
	  var io = this.io;
	  this.subs = [
	    on(io, 'open', bind(this, 'onopen')),
	    on(io, 'packet', bind(this, 'onpacket')),
	    on(io, 'close', bind(this, 'onclose'))
	  ];
	};
	
	/**
	 * "Opens" the socket.
	 *
	 * @api public
	 */
	
	Socket.prototype.open =
	Socket.prototype.connect = function () {
	  if (this.connected) return this;
	
	  this.subEvents();
	  if (!this.io.reconnecting) this.io.open(); // ensure open
	  if ('open' === this.io.readyState) this.onopen();
	  this.emit('connecting');
	  return this;
	};
	
	/**
	 * Sends a `message` event.
	 *
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.send = function () {
	  var args = toArray(arguments);
	  args.unshift('message');
	  this.emit.apply(this, args);
	  return this;
	};
	
	/**
	 * Override `emit`.
	 * If the event is in `events`, it's emitted normally.
	 *
	 * @param {String} event name
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.emit = function (ev) {
	  if (events.hasOwnProperty(ev)) {
	    emit.apply(this, arguments);
	    return this;
	  }
	
	  var args = toArray(arguments);
	  var packet = {
	    type: (this.flags.binary !== undefined ? this.flags.binary : hasBin(args)) ? parser.BINARY_EVENT : parser.EVENT,
	    data: args
	  };
	
	  packet.options = {};
	  packet.options.compress = !this.flags || false !== this.flags.compress;
	
	  // event ack callback
	  if ('function' === typeof args[args.length - 1]) {
	    debug('emitting packet with ack id %d', this.ids);
	    this.acks[this.ids] = args.pop();
	    packet.id = this.ids++;
	  }
	
	  if (this.connected) {
	    this.packet(packet);
	  } else {
	    this.sendBuffer.push(packet);
	  }
	
	  this.flags = {};
	
	  return this;
	};
	
	/**
	 * Sends a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.packet = function (packet) {
	  packet.nsp = this.nsp;
	  this.io.packet(packet);
	};
	
	/**
	 * Called upon engine `open`.
	 *
	 * @api private
	 */
	
	Socket.prototype.onopen = function () {
	  debug('transport is open - connecting');
	
	  // write connect packet if necessary
	  if ('/' !== this.nsp) {
	    if (this.query) {
	      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
	      debug('sending connect packet with query %s', query);
	      this.packet({type: parser.CONNECT, query: query});
	    } else {
	      this.packet({type: parser.CONNECT});
	    }
	  }
	};
	
	/**
	 * Called upon engine `close`.
	 *
	 * @param {String} reason
	 * @api private
	 */
	
	Socket.prototype.onclose = function (reason) {
	  debug('close (%s)', reason);
	  this.connected = false;
	  this.disconnected = true;
	  delete this.id;
	  this.emit('disconnect', reason);
	};
	
	/**
	 * Called with socket packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onpacket = function (packet) {
	  var sameNamespace = packet.nsp === this.nsp;
	  var rootNamespaceError = packet.type === parser.ERROR && packet.nsp === '/';
	
	  if (!sameNamespace && !rootNamespaceError) return;
	
	  switch (packet.type) {
	    case parser.CONNECT:
	      this.onconnect();
	      break;
	
	    case parser.EVENT:
	      this.onevent(packet);
	      break;
	
	    case parser.BINARY_EVENT:
	      this.onevent(packet);
	      break;
	
	    case parser.ACK:
	      this.onack(packet);
	      break;
	
	    case parser.BINARY_ACK:
	      this.onack(packet);
	      break;
	
	    case parser.DISCONNECT:
	      this.ondisconnect();
	      break;
	
	    case parser.ERROR:
	      this.emit('error', packet.data);
	      break;
	  }
	};
	
	/**
	 * Called upon a server event.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onevent = function (packet) {
	  var args = packet.data || [];
	  debug('emitting event %j', args);
	
	  if (null != packet.id) {
	    debug('attaching ack callback to event');
	    args.push(this.ack(packet.id));
	  }
	
	  if (this.connected) {
	    emit.apply(this, args);
	  } else {
	    this.receiveBuffer.push(args);
	  }
	};
	
	/**
	 * Produces an ack callback to emit with an event.
	 *
	 * @api private
	 */
	
	Socket.prototype.ack = function (id) {
	  var self = this;
	  var sent = false;
	  return function () {
	    // prevent double callbacks
	    if (sent) return;
	    sent = true;
	    var args = toArray(arguments);
	    debug('sending ack %j', args);
	
	    self.packet({
	      type: hasBin(args) ? parser.BINARY_ACK : parser.ACK,
	      id: id,
	      data: args
	    });
	  };
	};
	
	/**
	 * Called upon a server acknowlegement.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onack = function (packet) {
	  var ack = this.acks[packet.id];
	  if ('function' === typeof ack) {
	    debug('calling ack %s with %j', packet.id, packet.data);
	    ack.apply(this, packet.data);
	    delete this.acks[packet.id];
	  } else {
	    debug('bad ack %s', packet.id);
	  }
	};
	
	/**
	 * Called upon server connect.
	 *
	 * @api private
	 */
	
	Socket.prototype.onconnect = function () {
	  this.connected = true;
	  this.disconnected = false;
	  this.emitBuffered();
	  this.emit('connect');
	};
	
	/**
	 * Emit buffered events (received and emitted).
	 *
	 * @api private
	 */
	
	Socket.prototype.emitBuffered = function () {
	  var i;
	  for (i = 0; i < this.receiveBuffer.length; i++) {
	    emit.apply(this, this.receiveBuffer[i]);
	  }
	  this.receiveBuffer = [];
	
	  for (i = 0; i < this.sendBuffer.length; i++) {
	    this.packet(this.sendBuffer[i]);
	  }
	  this.sendBuffer = [];
	};
	
	/**
	 * Called upon server disconnect.
	 *
	 * @api private
	 */
	
	Socket.prototype.ondisconnect = function () {
	  debug('server disconnect (%s)', this.nsp);
	  this.destroy();
	  this.onclose('io server disconnect');
	};
	
	/**
	 * Called upon forced client/server side disconnections,
	 * this method ensures the manager stops tracking us and
	 * that reconnections don't get triggered for this.
	 *
	 * @api private.
	 */
	
	Socket.prototype.destroy = function () {
	  if (this.subs) {
	    // clean subscriptions to avoid reconnections
	    for (var i = 0; i < this.subs.length; i++) {
	      this.subs[i].destroy();
	    }
	    this.subs = null;
	  }
	
	  this.io.destroy(this);
	};
	
	/**
	 * Disconnects the socket manually.
	 *
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.close =
	Socket.prototype.disconnect = function () {
	  if (this.connected) {
	    debug('performing disconnect (%s)', this.nsp);
	    this.packet({ type: parser.DISCONNECT });
	  }
	
	  // remove socket from pool
	  this.destroy();
	
	  if (this.connected) {
	    // fire events
	    this.onclose('io client disconnect');
	  }
	  return this;
	};
	
	/**
	 * Sets the compress flag.
	 *
	 * @param {Boolean} if `true`, compresses the sending data
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.compress = function (compress) {
	  this.flags.compress = compress;
	  return this;
	};
	
	/**
	 * Sets the binary flag
	 *
	 * @param {Boolean} whether the emitted data contains binary
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.binary = function (binary) {
	  this.flags.binary = binary;
	  return this;
	};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = toArray
	
	function toArray(list, index) {
	    var array = []
	
	    index = index || 0
	
	    for (var i = index || 0; i < list.length; i++) {
	        array[i - index] = list[i]
	    }
	
	    return array
	}


/***/ }),
/* 39 */
/***/ (function(module, exports) {

	
	/**
	 * Module exports.
	 */
	
	module.exports = on;
	
	/**
	 * Helper for subscriptions.
	 *
	 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
	 * @param {String} event name
	 * @param {Function} callback
	 * @api public
	 */
	
	function on (obj, ev, fn) {
	  obj.on(ev, fn);
	  return {
	    destroy: function () {
	      obj.removeListener(ev, fn);
	    }
	  };
	}


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	/**
	 * Slice reference.
	 */
	
	var slice = [].slice;
	
	/**
	 * Bind `obj` to `fn`.
	 *
	 * @param {Object} obj
	 * @param {Function|String} fn or string
	 * @return {Function}
	 * @api public
	 */
	
	module.exports = function(obj, fn){
	  if ('string' == typeof fn) fn = obj[fn];
	  if ('function' != typeof fn) throw new Error('bind() requires a function');
	  var args = slice.call(arguments, 2);
	  return function(){
	    return fn.apply(obj, args.concat(slice.call(arguments)));
	  }
	};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	
	/**
	 * Expose `Backoff`.
	 */
	
	module.exports = Backoff;
	
	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */
	
	function Backoff(opts) {
	  opts = opts || {};
	  this.ms = opts.min || 100;
	  this.max = opts.max || 10000;
	  this.factor = opts.factor || 2;
	  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	  this.attempts = 0;
	}
	
	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */
	
	Backoff.prototype.duration = function(){
	  var ms = this.ms * Math.pow(this.factor, this.attempts++);
	  if (this.jitter) {
	    var rand =  Math.random();
	    var deviation = Math.floor(rand * this.jitter * ms);
	    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
	  }
	  return Math.min(ms, this.max) | 0;
	};
	
	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */
	
	Backoff.prototype.reset = function(){
	  this.attempts = 0;
	};
	
	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */
	
	Backoff.prototype.setMin = function(min){
	  this.ms = min;
	};
	
	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */
	
	Backoff.prototype.setMax = function(max){
	  this.max = max;
	};
	
	/**
	 * Set the jitter
	 *
	 * @api public
	 */
	
	Backoff.prototype.setJitter = function(jitter){
	  this.jitter = jitter;
	};
	


/***/ })
/******/ ])
});
;
//# sourceMappingURL=socket.io.dev.js.map
;


}).call(typeof window!=='undefined'?window:globalThis, typeof window!=='undefined'?window:globalThis);
