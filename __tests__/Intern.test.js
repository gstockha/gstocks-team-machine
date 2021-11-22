const Intern = require('../lib/Intern');

describe('Intern traits', ()=>{
    it('Should return all the relevant traits of an Intern',()=>{
        const intern = new Intern('Will',66,'dipsy@poopy.com','Toilet University');
        let name = intern.getName();
        let id = intern.getID();
        let email = intern.getEmail();
        let school = intern.getSchool();

        expect(name).toBe('Will');
        expect(id).toBe(66);
        expect(email).toBe('dipsy@poopy.com');
        expect(school).toBe('Toilet University');
    });
});