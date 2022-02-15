const profileDataArgs = process.argv.slice(2, process.argv.length);
const name = profileDataArgs[0];
const github = profileDataArgs [1];
console.log(generatePage(name, github));



const generatePage = (userName, githubName) => {
    return`
    Name: ${userName} 
    Github: ${githubName}
    `;
};

console.log(generatePage('Ash', 'Ashhub'));












// const printProfileData = profileDataArr => {
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

//   printProfileData(profileDataArgs);
  