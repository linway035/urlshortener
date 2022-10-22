// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引入 home 模組程式碼
const home = require('./modules/home')
router.use('/', home)

// 匯出路由器
module.exports = router // 語法 : module.exports = 任何資料型別
