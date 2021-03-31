// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)]`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://opensource.org/licenses/${license}`
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `https://choosealicense.com/licenses/${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  #${data.project}

  ## Description

  This project was created in order to ${data.solution}. The reason behind this application is to ${data.purpose}, and ${data.motivation}. Throughout my time creating this application, I learned ${data.learn}.

  -[Installation] (#installation)
  -[Usage] (#usage)
  -[Credits] (#credits)
  -[License] (#license)

  ## Installation

  In order to install and use this application please fork and clone the repo onto your local machine.
  Once the repo is cloned you may use any IDE of your choice.
  Make sure you have Node installed on your machine, please refer to this website to get it installed and running in your IDE/terminal: https://nodejs.org/en/ 
  Install the proper packages needed for this application listed below:
      npm install inquirer
      npm install util
  
  Please contact me at ${data.contact} if you need further assistance with this application.

  ## Usage

  This application is to be run using node.js, if you do not have Node installed please refer to the Installation section. 
  Using your preferred terminal (gitbash, terminal, console, ect...) please run node index.js
  Answer the given prompts on the command line and once the program finishes your newely generated README file should be created. 

  ## Credits

  Tutorials on creating professional READMEs: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

  ## License

  ${renderLicenseBadge(data.license)}
  
  ${renderLicenseLink(data.license)}
  
  ${renderLicenseSection(data.license)}

  For additional licensing information please refer to: https://choosealicense.com/licenses
  `;
}

module.exports = generateMarkdown;
