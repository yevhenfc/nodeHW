class Users {
    constructor(firstName, lastName, email, login) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.login = login
        this.passwordHash = '';
        this.created = '';
        this.updated = ''
    }
};

const bcrypt = require('bcrypt');
const users = [];

curDate = () => {
    let curDate = new Date();
    return curDate.getDay() + "/" + curDate.getMonth() + "/" + curDate.getFullYear() + " " + curDate.getHours() + ":" + curDate.getMinutes() + ":" + curDate.getSeconds();
};

passwordHash = (password) => {
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds)
};  

for (let i = 1; i < 11; i++) {
    users[i-1] = new Users('firstName'+`${i}`, 'lastName'+`${i}`,  'email'+`${i}`+'@mail.com', 'login'+`${i}`);
    users[i-1].created = curDate();
    users[i-1].updated = curDate();
    users[i-1].passwordHash = passwordHash('password'+`${i}`);
}

module.exports = users;