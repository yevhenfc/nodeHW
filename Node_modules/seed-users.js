class Users {
    constructor(firstName, lastName, email, login, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.login = login
        this.passwordHash = '';
        this.created = '';
        this.updated = ''
    }
      
      passwordHash () {
        const bcrypt = require('bcrypt');
        const saltRounds = 10 /*this.firstName+this.lastName*/;
        this.passwordHash = bcrypt.hash(this._password, saltRounds, (err, hash) => {return hash})
      }
      
    //   #curDate = () => {
    //     var currentdate = new Date();
    //     return currentdate.getDay() + "/" + currentdate.getMonth() + "/" + currentdate.getFullYear() + " " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    //   };

    //   created () {this.created = this.#curDate()}
      
    //   updated () {this.updated = this.#curDate()}
     
    };

const users = [];

curDate = () => {
    var currentdate = new Date();
    return currentdate.getDay() + "/" + currentdate.getMonth() + "/" + currentdate.getFullYear() + " " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
};

passwordHash = (password) => {
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds)
};  

for (var i = 1; i < 11; i++) {
    users[i-1] = new Users('firstName'+`${i}`, 'lastName'+`${i}`,  'email'+`${i}`+'@mail.com', 'login'+`${i}`);
    users[i-1].created = curDate();
    users[i-1].updated = curDate();
    users[i-1].passwordHash = passwordHash('password1'+`${i}`);
}

module.exports = users;