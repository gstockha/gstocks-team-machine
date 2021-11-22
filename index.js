const inq = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const memberList = [];

function promptTeam(){
  inq
    .prompt({
        type: 'list',
        name: 'type',
        message: 'Would you like to add an Engineer or an Intern to this project?',
        choices: ['Engineer','Intern']
    })
    .then((answer)=>{
        if (answer.type === 'Engineer'){
            promptEngineer()
            .then((object)=>{
                let {name,ID,email,github} = object;
                memberList.push(new Engineer(name,ID,email,github));
                return finishPrompt();
            });
        }
        else{
            promptIntern()
            .then((object)=>{
                let {name,ID,email,school} = object;
                memberList.push(new Intern(name,ID,email,school));
                return finishPrompt();
            });
        }
    })
}

function finishPrompt(){
  inq
    .prompt({
        type: 'confirm',
        name: 'addMember',
        message: 'Would you like to include another member?',
        default: false
    })
    .then((answer)=>{
        if (answer.addMember) return promptTeam();
        else{
            console.log(memberList);
        }
    })
}

function promptEngineer(){
  return inq
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'ID',
            message: "What is the engineer's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github username?"
        }
    ])
}

function promptIntern(){
    return inq
      .prompt([
          {
              type: 'input',
              name: 'name',
              message: "What is the intern's name?"
          },
          {
              type: 'input',
              name: 'ID',
              message: "What is the intern's ID?"
          },
          {
              type: 'input',
              name: 'email',
              message: "What is the intern's email?"
          },
          {
              type: 'input',
              name: 'school',
              message: "Where did the intern graduate?"
          }
      ])
}

function promptManager(){
  return inq
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Welcome. What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'ID',
            message: "What is the Manager's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office room number?"
        }
    ])
}

promptManager()
    .then((object)=>{
        let {name,ID,email,office} = object;
        memberList.push(new Manager(name,ID,email,office));
        promptTeam();
    })
    .catch( err => console.log(err));