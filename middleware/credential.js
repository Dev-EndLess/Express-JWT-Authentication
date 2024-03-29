const allowedOrigins = require('./allowedOrigins')

const credentials = (req, res, next) => {
  const origin = req.headers.origin
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-ALlow-Credentials', true)
  }
  next()
}

module.exports = credentials