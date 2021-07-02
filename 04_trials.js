// In this file you can specify the trial data for your experiment

const statement_trials = {
  forced_choice: [
    {
      question: "Adults should have the right to carry a concealed handgun",
      option1: "agree",
      option2: "disagree"
    },
    {
      question: "Feminism is important and beneficial to modern society",
      option1: "agree",
      option2: "disagree"
    }
  ]
};

const dilemma_trials = {
  forced_choice: [
    {
      QUD: "Imagine you have witnessed a man rob a bank. However, you then saw him do something unexpected with the money. He donated it all to a run-down orphanage that would benefit greatly from the money. You must decide whether to call the police and report the robber or do nothing and leave the robber alone.",
      question: "approximately 60% of participants who agreed with you about [social issue 1] chose to [behavior option]",
      option1: "I choose to [behavior option 1]",
      option2: "I choose to [behavior option 2]",
    },
    {
      question: "approximately 60% of participants who agreed with you about [social issue 2] chose to [behavior option]",
      option1: "I choose to [behavior option 1]",
      option2: "I choose to [behavior option 2]",
    },
  ]
};
