const getLicense = require("license");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (license === "Apache-2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  } else if (license === "GPL-3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  } else if (license === "LGPL-3.0") {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]`;
  } else if (license === "BSD-3-Clause") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
  } else if (license === "GPL-2.0") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]`;
  } else {
    return ``;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === "MIT") {
    return `(https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache-2.0") {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GPL-3.0") {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "LGPL-3.0") {
    return `(https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (license === "BSD-3-Clause") {
    return `(https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === "GPL-2.0") {
    return `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else {
    return ``;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license, author) => {
  if (!license) {
    return ``;
  } else {
    return `## 🎫 License
    ${getLicense.getLicense(license, {
      author: author,
      year: new Date().getFullYear(),
    })}
    `;
  }
};

const descriptor = (str) => {
  if (str.includes(" ")) {
    const newStr = str.replace(/ /g, "-");
    return newStr.toLowerCase();
  } else {
    return str.toLowerCase();
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  const {
    title,
    description,
    installation,
    usage,
    screenshot,
    license,
    contributing,
    tests,
    credits,
    ...questions
  } = data;

  return `# ${title}

  ${renderLicenseBadge(license)}${renderLicenseLink(license)}

  ## 📖 Description
  ${description}

  ## 📚 Table of Contents
  - [${title}](#${descriptor(title)})
    - [📖 Description](#-description)
    - [📚 Table of Contents](#-table-of-contents)
    - [🛠️ Installation](#-installation)
    - [👨‍🏫 Usage](#-usage)
    - [🎫 License](#-license)
    - [👋 Contributing](#-contributing)
    - [🧪 Tests](#-tests)
    - [🥂 Credits](#-credits)
    - [🤖 Questions](#-questions)

  ## 🛠️ Installation
  ${installation}

  ## 👨‍🏫 Usage
  ${usage}

  ${renderLicenseSection(license, questions.fullName)}

  ## 👋 Contributing
  ${contributing}

  ## 🧪 Tests
  ${tests}

  ## 🥂 Credits
  ${credits}

  ## 🤖 Questions
  Any questions related to this project can be sent directly to me via GitHub or email.

  GitHub: [${questions.github}](http://github.com/${questions.github})

  Email: [${questions.email}](mailto:${questions.email})
`;
};

module.exports = generateMarkdown;
