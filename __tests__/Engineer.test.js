const Engineer = require('../lib/Engineer');

describe('Engineer traits', ()=>{
    it('Should return all the relevant traits of an Engineer',()=>{
        const engineer = new Engineer('Bill',3,'oopsies@poopy.com','oopsies');
        let name = engineer.getName();
        let id = engineer.getID();
        let email = engineer.getEmail();
        let github = engineer.getGitHub();

        expect(name).toBe('Bill');
        expect(id).toBe(3);
        expect(email).toBe('oopsies@poopy.com');
        expect(github).toBe('https://github.com/oopsies?tab=repositories');
    });
});