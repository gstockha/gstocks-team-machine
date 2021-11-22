const Manager = require('../lib/Manager');

describe('Manager traits', ()=>{
    it('Should return all the relevant traits of a Manager',()=>{
        const manager = new Manager('Billy Bob William Smith',1,'BBWS@poopy.com',447);
        let name = manager.getName();
        let id = manager.getID();
        let email = manager.getEmail();
        let office = manager.getOfficeNumber();

        expect(name).toBe('Billy Bob William Smith');
        expect(id).toBe(1);
        expect(email).toBe('BBWS@poopy.com');
        expect(office).toBe(447);
    });
});