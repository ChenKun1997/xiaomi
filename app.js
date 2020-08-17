let userData = {};//空对象用于存放用户数据
const express = require('express')
const app = express()
app.use(express.static('./dist/'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/register',(req,res)=>{
  let account = req.query.account;
  let password = req.query.password;
  if(userData[account]){
    res.json({
      err:0,
      msg:'账户已存在',
    })
    return false;
  }
  userData[account] = password;
  
  res.json({
    err:1,
    msg:'注册成功',
    account:account,
    password:password
  })
})
app.get('/login',(req,res)=>{
  let account = req.query.account;
  let password = req.query.password;
  if(userData[account] === password){
    res.json({
      err:1,
      msg:'登陆成功',
      account:account,
      password:password
    })
  }else{
    res.json({
      err:0,
      msg:'账号或密码错误'
    })
  }

})




app.listen(3002, () => console.log(`Example app listening on port 3002!`))