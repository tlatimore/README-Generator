// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None'){
    return `![Github license] (https://img.shields.io/badge/license-${license.replace(' ', '_')}-blue.svg)`;
  }
  return '';
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    return '\n* [license](#license)\n';
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None'){
    return `## License\nThis project is licensed by the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.license)}

  ## Description:
  ${data.projectDescription}

  ## Table of Contents:

  * [Installation](#installation)

  * [Usage](#usage)

  * [Contribution](#contribution)

  * [Tests](#tests)

  * [Questions](#questions)

  ${renderLicenseLink(data.license)}

  ## Installation

  Run the following command(s) to install the necessary dependencies:
  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## Tests

  Run the following command(s) to run tests:

  ${data.projectTests}

  ## Questions

  For any questions, please contact me using the information below:
  GitHub: [${data.username}](https://gitgub.com/${data.username})
  Email: ${data.email}

  ${renderLicenseSection(data.license)}
`;
}

export default generateMarkdown;
