const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');
const port = process.env.PORT || '3000';

app.use( express.static(publicPath) );

app.listen(port, () => {
    console.log(`Server is runnig in the Port : ${port}`);
})

app.get('/',(req,res)=>{
    res.render(path.join(__dirname,'./views/index.ejs'))
})
  app.get("/register", (req, res) => {
    res.render(path.join(__dirname, "./views/register.ejs"));
  });
  app.get("/login", (req, res) => {
    res.render(path.join(__dirname, "./views/login.ejs"));
  });
  app.set('view engine', 'ejs')



// app.listen(3001,()=>{

// console.log(`Server is runnig in the Port : 3001`);
// })