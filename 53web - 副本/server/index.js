let express = require('express');
let app = express();
//处理跨越问题
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", " 3.2.1");
    next();
  });
//引入body-parser模块
let bodyParser = require("body-parser");
//创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({
  extended: false
});

//引入用户控制器
let userController = require("./controllers/UserController");


//清单列表
// app.get("/check", userController.check);
app.post("/check",urlencodedParser,userController.check);

app.post("/registercompany",urlencodedParser,userController.registercompany);
app.post("/companylogin",urlencodedParser,userController.companylogin);
app.post("/jobregister",urlencodedParser,userController.jobregister);
app.post("/tags",urlencodedParser,userController.tags);






app.listen(8888)