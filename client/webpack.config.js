module.exports = {
    // остальные настройки
    resolve: {
      fallback: {
        "buffer": require.resolve("buffer/"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert/"),
        "util": require.resolve("util/"),
        "path": require.resolve("path-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "constants": require.resolve("constants-browserify")
      }
    },
    // остальные настройки
  };