'use strict';
var AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || '3BUGQeUL1cXOsj86LZNfFYrR-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'i4pCPVqv8j1PDWwc8nkq2YpU',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'xeYDrJlx8u2WgsIFSGr2G1vE'
});

// 如果不希望使用 masterKey 权限，可以将下面一行删除
AV.Cloud.useMasterKey(true);

var app = require('./app');

// 端口一定要从环境变量 `LEANCLOUD_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
var PORT = parseInt(process.env.LEANCLOUD_APP_PORT || 3000);
app.listen(PORT, function () {
  console.log('Node app servers is running,, port:', PORT);
});
