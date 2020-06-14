#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const argv = require("yargs").argv;

const lang = argv.lang || "en";

const options = {
  padding: 2,
  borderStyle: "double",
  borderColor: "#50b697",
};

const data = {
  logo: chalk.white(`<vaporwavie>`),
  name: chalk.white("Luiz Nickel"),
  pronoun: {
    en: chalk.white("(he/him/his)"),
    pt: chalk.white("(ele/dele)"),
  },
  work: {
    en: chalk.white("   Front-end Lead @ Sizebay"),
    pt: chalk.white("   Front-end Lead / Sizebay"),
  },
  resume: chalk.hex("#50b697")(" https://github.com/vaporwavie/resume"),
  twitter: chalk.hex("#50b697")("https://twitter.com/vaporwavie"),
  github: chalk.hex("#50b697")(" https://github.com/vaporwavie"),
};

const defaultLabel = {
  en: {
    work: chalk.white.bold("Work:"),
    resume: chalk.white.bold("Resume:"),
    twitter: chalk.white.bold("Twitter:"),
    github: chalk.white.bold("GitHub:"),
  },
};

const label = {
  ...defaultLabel,
  pt: {
    ...defaultLabel.en,
    work: chalk.white.bold("Trabalho:"),
  },
};

const output = `
${data.name} ${data.logo} ${data.pronoun[lang]}

${label[lang].work}  ${data.work[lang]}

${label[lang].twitter}  ${data.twitter}
${label[lang].github}  ${data.github}
${label[lang].resume}  ${data.resume}
`;

console.clear();
console.log(`
`);

console.log(boxen(output, options));
