// TODO: Include packages needed for this application
// the inquirer package can allow us to ask questions of the user
const inquirer = require('inquirer')
// fs writes to the file system
const fs = require ("fs")
const genMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// questions: "what is your project title?"
// "describe your project"
// "how to install?"
// "how to use?"
// "what are the contribution guidelines?"
// "please, enter the test instructions"
const questions = () => { //finish this function. This is finished
        return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please, describe your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How is this installed?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is your application used?',
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'What are the contribution guidelines?',
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Please, enter the test instructions.',
        },
        {// prompt for the license
            type: 'list',
            name: 'license',
            message: 'What license are you using?',
            choices: ["mit", "apache", "gpl", "none" ]
        } 
    ])
    .then((answers) => {
        console.log(answers)
        const readMeString = genMarkdown(answers)  
        writeToFile(`readMe.md`, readMeString)    
    }) 
}
// TODO: Create a function to write README file
// write out the readme file and where the user input goes, replace it with ${}. remember to enclose the entire thing in back ticks
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log('your readMe has been generated')
    })
}

// TODO: Create a function to initialize app
// i think here, you call the questions function that i declared up above so that when init is called, the questions are prompted to the user
// function init() {}

// // Function call to initialize app
// init();
questions()
