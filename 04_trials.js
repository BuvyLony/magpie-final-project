// In this file you can specify the trial data for your experiment

const statements = {
  forced_choice: [
    {
      question: "Which issue do you care about the most?",
      option1: "Gun Control",
      option2: "Feminism",
      option3: "Joe Biden",
      option4: "Immigration",
      option5: "Transgender Rights",
      option6: "Drug legalization",
      option7: "Colin Kaepernik kneeling during the national anthem",
      option8: "Buying and wearing fur",
      option9: "Taxing religious organizations",
    }
  ]
};


const statement_trials = {
  rate_statement_gun: [
    {
      question: "Adults should have the right to carry a concealed handgun",
      optionLeft: "agree",
      optionRight: "disagree"
    }
  ],
  rate_statement_feminism: [
    {
      question: "Feminism is important and beneficial to modern society",
      optionLeft: "agree",
      optionRight: "disagree"
    }
  ],
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
      QUD: "Imagine you have witnessed a man rob a bank. However, you then saw him do something unexpected with the money. He donated it all to a run-down orphanage that would benefit greatly from the money. You must decide whether to call the police and report the robber or do nothing and leave the robber alone.",
      question: "approximately 60% of participants who agreed with you about [social issue 2] chose to [behavior option]",
      option1: "I choose to [behavior option 1]",
      option2: "I choose to [behavior option 2]",
    },
  ]
};
