var inquirer = require("inquirer");

var questionsArr = [{
    type: "input",
    message: "what's your name",
    name: "name",
    default: "Stranger"
  },

  {
    type: "list",
    message: "Choose your weapon!",
    choices: ["sword", "bow", "spear"],
    name: "weapon"
  },

  {
    type: "list",
    message: "Why have you come to this land? Why have you come to Zoldor?",
    choices: ["Fortune", "Revenge", "Love"],
    name: "motive"
  },

  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true
  }

];

inquirer.prompt(questionsArr).then(answers => {

  if (answers.motive === "Fortune") {
    console.log("Yes, many have come in search of their fortunes here. Some have found gold in the northern mountains.");
  }

  if (answers.motive === "Revenge") {
    console.log("If revenge be the case, may this " + answers.weapon + " be of help.");
  }

  if (answers.motive === "Love") {
    console.log("Well, even if you're not here for revenge, you may still need this " + answers.weapon + " ha ha ha ha....");
  }
  inquirer.prompt(questionsArr2).then(answers => {
    console.log(JSON.stringify(answers, null, 2));
  });

}); //end inquierer.prompt

var questionsArr2 = [{
    type: "input",
    message: "what's your sign",
    name: "sign",
    default: "Virgo"
  }

];
