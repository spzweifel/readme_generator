// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// generates an image and I need to generate a link to that image
function renderLicenseBadge(license) {
  if (license === "none") {
    return ""
  }
  return`![license](https://img.shields.io/badge/license-${license}-green)`
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// one sentence statement saying "this readme is done under blank license"
function renderLicenseSection(license) {
  if (license === "none") {
    return "no license chosen"
  }
  else if (license === "mit") {
    return "a permissive software license that places few restrictions of reuse"
  }
  else if (license === "apache") {
    return "a free and open source software (FOSS) licensing agreement from the Apache Software Foundation (ASF)"
  }
  else if (license === "gpl") {
    return "a free software license that allows software to be modified or redistributed without any restrictions or compulsory payments for the licensed code"
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, guidelines, instructions, license}) {
  return `# ${title} ${renderLicenseBadge(license)}

# Description 
${description}

# Table of Contents
1. [installation](#installation)
2. [usage](#usage)
3. [guidelines](#guidelines)
4. [instructions](#instructions)
5. [license](#license)

# Installation
${installation}

# Usage 
${usage}

# Guidelines 
${guidelines}

# Instructions 
${instructions}

# license
  ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
