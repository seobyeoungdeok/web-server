const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Docker + Express 서버가 정상 동작합니다!');
});

app.listen(port, () => {
  console.log('서버가 ${port}번 포트에서 실행 중...');
});