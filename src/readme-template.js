const generateLicense = (license) => {
    return ``
}

const generateBadge = (badge) => {
    
}

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
      if (str.includes(' ')) {
          const newStr = str.replace(/ /g, '-');
          return newStr.toLowerCase();
      } else {
          return str.toLowerCase();
      }
  }

  const titleHeading = descriptor(title);

  return `# ${title}

## 📖 Description
${description}

## 📚 Table of Contents
- [${title}](#${titleHeading})
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
${license}

## 👋 Contributing
${contributing}

## 🧪 Tests
${tests}

## 🥂 Credits
${credits}

## 🤖 Questions
${questions.github}

${questions.email}
`;
};
