// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const randomEnNum = require('../../utilities/randomEnNum')
const UrlSchema = require('../../models/UrlSchema')

// 首頁
router.get('/', (req, res) => {
  return UrlSchema.find()
    .lean()
    .sort({ _id: 'desc' })
    .then((urls) => res.render('index', { urls })) // 也會代入到main.hbs
    .catch((err) => console.log(err))
})

// post表單
router.post('/', (req, res) => {
  const originalURL = req.body.postURL.trim()
  const origin = req.headers.host // headers.host: 'localhost:3000' ； headers.referer: 'http://localhost:3000'
  // console.log(URL.findOne({ originalURL }).lean());
  UrlSchema.findOne({ originalURL })
    .lean()
    .then((data) =>
      data || UrlSchema.create({ originalURL, shortURL: randomEnNum(5) })
    )
    .then((data) =>
      res.render('index', {
        originalURL,
        shortURL: data.shortURL,
        origin
      })
    )
    .catch((err) => console.log(err))
})

// 開啟縮網址
router.get('/:shorts', (req, res) => {
  const shorts = req.params.shorts
  console.log(req.params)
  UrlSchema.findOne({ shortURL: shorts })
    .lean()
    .then((data) => {
      if (!data) {
        return res.sendStatus(404)
      } else {
        console.log(data.clicks)
        data.clicks++
        // console.log(data);
        // data.save();
        res.redirect(data.originalURL)
      }
    })
    .catch((err) => console.log(err))
})

// 匯出路由模組
module.exports = router
