module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/404.html': { page: '_error' },
    }
  },
}
