// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// generates an image and I need to generate a link to that image
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// one sentence statement saying "this readme is done under blank license"
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, guidelines, instructions}) {
  return `# ${title}

# Description 
${description}

# Installation
${installation}

# Usage 
${usage}

# Guidelines 
${guidelines}

# Instructions 
${instructions}
`;
}

module.exports = generateMarkdown;
