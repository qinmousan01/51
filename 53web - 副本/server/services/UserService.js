let UserModel = require('../models/UserModel');
class UserService {
    constructor() {
        this.userModel = new UserModel();
    }

    check(name,callback) {
        this.userModel.select(name,function (data) {
            callback(data);
            
        });
    }
    tags(id,callback) {
        this.userModel.selecttags(id,function (data) {
            console.log('tag')
            callback(data);
        });
    }

   
    registercompany(name,type,number,information,address,password,callback){
        this.userModel.insertregistercompany(name,type,number,information,address,password,function (data) {
            callback(data);
        });
    }

 
    companylogin(name,callback){
        this.userModel.companylogin(name,function (data) {
            callback(data);
        });
    }
    
    jobregister(name,address,experience,demand,company_id,description,callback){
        this.userModel.insertregisterjob(name,address,experience,demand,company_id,description,function (data) {
            callback(data);
        });
    }
}
module.exports = UserService;