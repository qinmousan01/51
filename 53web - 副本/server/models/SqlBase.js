//引入mysql框架
let mysql = require("mysql");
class SqlBase {
  constructor() {
    this.connection = mysql.createConnection({
      host: "cdb-a9y1iffo.cd.tencentcdb.com", //主机 ip
      user: "root", //MySQL认证用户名
      password: "cdhq1234", //MySQL认证用户密码
      port: "10055", //端口号
      database: "pow" //数据库里面的数据
    });
   
    // this.connection.connect();
  }
}

module.exports = SqlBase;