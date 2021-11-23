function generateMembers(memberList){
    return `
    <section id="employees">
        ${memberList.filter(({officeNumber}) => officeNumber !== undefined) //managers
            .map((obj) =>{
                return `
                <h3>${obj.getName()} ${obj.getID()} ${obj.getEmail()} ${obj.getOfficeNumber()}</h3>
                `;
            })
        .join('')}
        ${memberList.filter(({github}) => github !== undefined) //engineers
            .map((obj) =>{
                return `
                <h3>${obj.getName()} ${obj.getID()} ${obj.getEmail()} ${obj.getGitHub()}</h3>
                `;
            })
        .join('')}
        ${memberList.filter(({school}) => school !== undefined) //interns
            .map((obj) =>{
                return `
                <h3>${obj.getName()} ${obj.getID()} ${obj.getEmail()} ${obj.getSchool()}</h3>
                `;
            })
        .join('')}
    </section>
  `;
}

module.exports = memberList =>{
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="../src/style.css">
      </head>
      <body>
        ${generateMembers(memberList)}
      </body>
    </html>
    `
}