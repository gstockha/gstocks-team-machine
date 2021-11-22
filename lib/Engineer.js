const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name="",id=0,email="",github=""){
        super(name,id,email);
        this.github = 'https://github.com/' + github + '?tab=repositories';
    }
    getGitHub(){
        return this.github;
    }
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;