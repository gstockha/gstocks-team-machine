function generateMembers(memberList){
    return `
    <section id="employees">
        ${memberList.filter(({officeNumber}) => officeNumber !== undefined) //managers
            .map((obj) =>{
                return `<div class="card">
                <div class="card-header">
                <h2>${obj.getName()}</h2> <h3>${obj.getRole()}</h3></div> 
                <div class="card-body">
                <ul>
                    <li>ID: ${obj.getID()}</li> 
                    <li><a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
                    <li>Office Number: ${obj.getOfficeNumber()}</li>
                </ul>
                </div>
                </div>
                `;
            })
        .join('')}
        ${memberList.filter(({github}) => github !== undefined) //engineers
            .map((obj) =>{
                return `<div class="card">
                <div class="card-header">
                <h2>${obj.getName()}</h2> <h3>${obj.getRole()}</h3></div>
                <div class="card-body">
                <ul>
                    <li>ID: ${obj.getID()}</li> 
                    <li><a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
                    <li><a href=${obj.getGitHub()} target="_blank">GitHub</a></li>
                </ul>
                </div>
                </div>
                `;
            })
        .join('')}
        ${memberList.filter(({school}) => school !== undefined) //interns
            .map((obj) =>{
                return `<div class="card">
                <div class="card-header">
                <h2>${obj.getName()}</h2> <h3>${obj.getRole()}</h3></div>
                <div class="card-body">
                <ul>
                    <li>ID: ${obj.getID()}</li> 
                    <li><a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
                    <li>School: ${obj.getSchool()}</li>
                </ul>
                </div>
                </div>
                `;
            })
        .join('')}
    </section>
  `;
}

module.exports = memberList =>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link href="https://fonts.googleapis.com/css?family=Bungee+Inline|Bungee+Shade&display=swap" rel="stylesheet">
    <style>
        body {
            background-color: rgb(253, 253, 253);
            font-family: Arial, Helvetica, sans-serif; 
        }
        .header {
            background-color: rgb(142, 251, 233);
            border: solid rgba(0, 0, 0, 0.267);
            text-align: center;
            font-size: 30px;
        }
        .container {
            display: flex;
            justify-content: space-evenly;
        }
        .card {
            background-color:rgb(255, 251, 251);
            margin-top: 4%;
            border: solid rgba(0, 0, 0, 0.472);
            font-size: x-large;
            box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.185);
            border-radius: 10px;
            min-width: 500px;
        }
        #employees {
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        flex: wrap;
        }
        .card-header{
            margin: 10%;
            text-align: center;
        }
        .card-body{
            margin: 10%;
        }
        .card ul{
            list-style: none;
            font-size: 24px;
        }
        a{
            color: black;
        }
    </style>
    </head>
    <body>
    <div class=header>
        <h1>My Team</h1>
    </div>
    <div class="container">
    ${generateMembers(memberList)}
    </div>      
    </body>
    </html>`
}