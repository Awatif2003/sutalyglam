// Small CommonJS shim to add crypto.hash when running on older Node versions.
// This file is intentionally CommonJS so it can be preloaded with --require
// and run before Vite's ESM entrypoint. It's a temporary compatibility shim
// so you can run the dev server without upgrading Node. Prefer upgrading Node
// to >=20.19.0 as a permanent fix.
const crypto = require('crypto');

if (typeof crypto.hash !== 'function') {
  // crypto.hash in newer Node returns a string in many usages; Vite calls
  // .substring on the result, so return a hex string to match that.
  crypto.hash = function (algorithm, data) {
    try {
      const hash = crypto.createHash(algorithm);
      // If data is iterable (like an array of chunks), update each chunk
      if (data && typeof data[Symbol.iterator] === 'function' && typeof data !== 'string' && !Buffer.isBuffer(data)) {
        for (const chunk of data) {
          hash.update(chunk);
        }
      } else {
        hash.update(data || '');
      }
      // return hex string (compatible with code expecting string methods)
      return hash.digest('hex');
    } catch (e) {
      // If something goes wrong, fallback to throwing the original error
      throw e;
    }
  };

  // Also try to patch the global `crypto` if code uses `globalThis.crypto`.
  try {
    if (globalThis && globalThis.crypto && typeof globalThis.crypto.hash !== 'function') {
      globalThis.crypto.hash = crypto.hash;
    }
  } catch (e) {
    // ignore
  }
}

module.exports = {};
