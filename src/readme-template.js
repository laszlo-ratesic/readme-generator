const getLicense = require("license");

module.exports = (templateData) => {
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
  } = templateData;

  const descriptor = (str) => {
    if (str.includes(" ")) {
      const newStr = str.replace(/ /g, "-");
      return newStr.toLowerCase();
    } else {
      return str.toLowerCase();
    }
  };

  const generateLicense = (license, author) => {
    return getLicense.getLicense(license, {
      author: author,
      year: new Date().getFullYear(),
    });
  };

  const generateBadge = (license) => {
    if (license === "MIT") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license === "Apache-2.0") {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === "GPL-3.0") {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license === "LGPL-3.0") {
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    } else if (license === "BSD-3-Clause") {
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    } else if (license === "GPL-2.0") {
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    } else {
      return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
    }
  };

  return `# ${title}

${generateBadge(license)}

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

## 🎫 License
${generateLicense(license, questions.fullName)}

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
