const Employee = require('../lib/Employee');

describe('Employee traits', ()=>{
    it('Should return all the relevant traits of an Employee',()=>{
        const employee = new Employee('Bob',4,'stinky@poopy.com');
        let name = employee.getName();
        let id = employee.getID();
        let email = employee.getEmail();

        expect(name).toBe('Bob');
        expect(id).toBe(4);
        expect(email).toBe('stinky@poopy.com');
    });
});