module.exports = [
  {
    url: '/about-element/example/ad',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: config
      }
    }
  }
]
