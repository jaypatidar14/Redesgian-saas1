// next.config.js
module.exports = {
  webpack(config, { isServer }) {
    // Ensure that `cobe` works in the client-side bundle
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,  // Prevent errors related to the fs module (if needed)
        path: false,  // Prevent issues related to path module (if needed)
      };
    }
    return config;
  },
};
