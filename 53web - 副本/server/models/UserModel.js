let SqlBase = require("./SqlBase");
class UserModel extends SqlBase {
    constructor() {
        super();
    }
    select(name,callback) {//`select * from job`
    let sql = `select * from company left join job on job.company_id=company.id where job_name like '%${name}%'`;
    
        this.connection.query(sql, function (error, data) {
            if (error) {
                // console.log(111)
                throw error;
            } else {
                callback(data)
            }
        })
    }

    //tags寻找.....selecttags tag_manager
    selecttags(id,callback) {
    let sql = `select * from tags left join tag_manager on tag_manager.tag_id=tags.id where tag_manager.job_id = ${id} `;
    
        this.connection.query(sql, function (error, data) {
            if (error) {
                console.log(111)
                throw error;
            } else {
                callback(data)
            }
        })
    }

    insertregistercompany(name,type,number,information,address,password, callback) {
        let sql = `insert into company(company_name,type,people_number,information,company_address,company_password) values('${name}','${type}','${number}','${information}','${address}','${password}')`;
        this.connection.query(sql, function (error, data) {
            if (error) {
                throw error;
            } else {
                callback(data)
            }
        })
    }
    //登录查询
    companylogin(name, callback) {//`select * from job left join company on job.company_id=company.id where company_name = '${name}'`
        let sql = `select * from company where company_name = '${name}'`;
        this.connection.query(sql, function (error, data) {
            if (error) {
                throw error;
            } else {
                callback(data)
            }
        })
    }

    //职位插入
    
    insertregisterjob(name,address,experience,demand,company_id,description, callback) {
        let sql = `insert into job(job_name,job_address,experience,demand,company_id,description) values('${name}','${address}','${experience}','${demand}','${company_id}','${description}')`;
        this.connection.query(sql, function (error, data) {
            if (error) {
                throw error;
            } else {
                callback(data)
            }
        })
    }

}
module.exports = UserModel;