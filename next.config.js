module.exports = {
  target: 'serverless',
  exportPathMap: async function exportPathMap() {
    return {
      '/': { page: '/' }
    }
  }
}
