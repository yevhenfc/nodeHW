class Users {
    constructor(firstName, lastName, email, login, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.login = login;
        this.password = password
    }    
    
    newUser (firstName = this.firstName, lastName = this.lastName, email = this.email, login = this.login, password = this.password) {
        function curDate() {
            let curDate = new Date();
            return curDate.getDay() + "/" + curDate.getMonth() + "/" + curDate.getFullYear() + " " + curDate.getHours() + ":" + curDate.getMinutes() + ":" + curDate.getSeconds();
        }
        const saltRounds = 10;
        return {
            firstName: firstName, lastName: lastName, email: email, login: login, password: password, 
            passwordHash: bcrypt.hashSync(password, saltRounds),
            created: curDate(),
            updated: curDate()
        }    
    }
};

const bcrypt = require('bcrypt');
const users = [];

for (let i = 1; i < 11; i++) {
    let user = new Users('firstName' + i, 'lastName' + i,  'email' + i + '@mail.com', 'login' + i, 'password' + i);
    users[i-1] = user.newUser();
}

module.exports = users;