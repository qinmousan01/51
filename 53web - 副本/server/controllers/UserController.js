let UserService = require('../services/UserService');
//职位搜索
module.exports.check = function (req, res) {
    let userService = new UserService();
    let name = req.body.name;

    userService.check(name,function (data) {
        res.json(data)
    })
}

//tags请求
module.exports.tags = function (req, res) {
    let userService = new UserService();
    let id = req.body.id;
   
    userService.tags(id,function (data) {

        console.log(data)
        res.json(data)
       
    })
}



//公司注册
module.exports.registercompany = function (req, res) {
    let userService = new UserService();
    let name = req.body.name;
    let type = req.body.type;
    let number = req.body.number;
    let information = req.body.information;
    let address = req.body.address;
    let password = req.body.password;

    let ob={
        code:1,
        msg:'注册成功'
    }
    userService.registercompany(name,type,number,information,address, password,function (data) {
        console.log(data)
        if(data.length!=0){
            res.json(ob)
        }   
    })
}
//公司登录
module.exports.companylogin = function (req, res) {
    let userService = new UserService();
    let name = req.body.name;
   
    userService.companylogin(name,function (data) {

        console.log(data)
        res.json(data)
       
    })
}

//职位发布
module.exports.jobregister = function (req, res) {
    let userService = new UserService();
    let name = req.body.name;
    let address = req.body.address;
    let demand = req.body.demand;
    let description = req.body.description;
    let company_id = req.body.company_id;
    let experience = req.body.experience;

    let ob={
        code:1,
        msg:'注册成功'
    }
    userService.jobregister(name,address,experience,demand,company_id,description, function (data) {
        console.log(data)
        if(data.length!=0){
            res.json(ob)
        }   
    })
}














//注册
module.exports.register = function (req, res) {
    let userService = new UserService();
    let name = req.body.name;
    let password = req.body.password;
    let ob = {
        code: 1,
        msg: "合法用户"
    }
    //注册前查看是否重复
    userService.checkname(name, function (data) {
        if (data.length = 0) {
            userService.register(name, password, function (data) {
                ob.code = 3,
                ob.msg = '已注册'
                res.json(ob)
            })
        } else {
            ob.code = 2,
            ob.msg = '用户名已被抢先注册,请更换'
            res.json(ob)
        }
    })


    /*  userService.checkname(name, function (data) {
 
         console.log(password)
         console.log(data[0])
         // res.json(ob)
         if (data[0].passwd == password) {
             console.log(password)
             console.log(data[0].passwd)
             res.json(ob)
         } else {
             // console.log(password)
             ob.code = -1,
                 ob.msg = "密码错误"
             res.json(ob)
         }
 
     }) */
}


