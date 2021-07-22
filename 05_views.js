// In this file you can instantiate your views

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `We are following up on a previously published paper that looked at how people feel about moral dilemmas.
            <br />
            <br />
            In the previous paper, a moral dilemma was described that involved two possible courses of actions. Participants chose which action they preferred and had to rate how they would feel about performing that action.
            You are in the <strong>${coin}</strong> group.
            <br />
            <br />
            In this study, you will be presented with a scenario describing a moral dilemma. You will choose which action you would take and then provide a rating of how good or bad you imagine you would feel after taking that action`,
  buttonText: 'begin the experiment'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `This is a sample instructions view.
            <br />
            <br />
            Tell your participants what they are to do here.`,
  buttonText: 'next'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test_customized = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test_customized',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.',

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  gender_other: 'non-binary',
  gender_blabla: 'not'
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'

},
                                                        
{
    answer_container_generator: function (config, CT) {
        const quest = magpieUtils.view.fill_defaults_post_test(config);
        return `<form>
                    <p class='magpie-view-text'>
                        <label for="age">${quest.age.title}:</label>
                        <input type="number" name="age" min="18" max="110" id="age" />
                    </p>
                    <p class='magpie-view-text'>
                        <label for="gender">${quest.gender.title}:</label>
                        <select id="gender" name="gender">
                            <option></option>
                            <option value="${quest.gender.male}">${quest.gender.male}</option>
                            <option value="${quest.gender.female}">${quest.gender.female}</option>
                            <option value="${quest.gender.other}">${quest.gender.other}</option>
                            <option value="${quest.gender.blabla}">${quest.gender.blabla}</option>
                        </select>
                    </p>
                    <p class='magpie-view-text'>
                        <label for="education">${quest.edu.title}:</label>
                        <select id="education" name="education">
                            <option></option>
                            <option value="${quest.edu.graduated_high_school}">${quest.edu.graduated_high_school}</option>
                            <option value="${quest.edu.graduated_college}">${quest.edu.graduated_college}</option>
                            <option value="${quest.edu.higher_degree}">${quest.edu.higher_degree}</option>
                        </select>
                    </p>
                    <p class='magpie-view-text'>
                        <label for="languages" name="languages">${quest.langs.title}:<br /><span>${quest.langs.text}</</span></label>
                        <input type="text" id="languages"/>
                    </p>
                    <p class="magpie-view-text">
                        <label for="comments">${quest.comments.title}</label>
                        <textarea name="comments" id="comments" rows="6" cols="40"></textarea>
                    </p>
                    <button id="next" class='magpie-view-button'>${config.button}</button>
            </form>`
    }
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

const moral_dilemma = magpieViews.view_generator("forced_choice", {
  trials: dilemma_trials.forced_choice.length,
  name: "moral_dilemma",
  data: dilemma_trials.forced_choice,
});


const choose_statement = magpieViews.view_generator(
    "forced_choice",
    {
        trials: statements.forced_choice.length,
        name: 'choose_statement',
        data: statements.forced_choice
    },
    {
      answer_container_generator: function (config, CT) {
       return `<div class='magpie-view-answer-container'>
               <p class='magpie-view-question'>${config.data[CT].question}</p>
               <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
               <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
               <label for='o2' class='magpie-response-buttons'>${config.data[CT].option2}</label>
               <input type='radio' name='answer' id='o2' value=${config.data[CT].option2} />
               <label for='o3' class='magpie-response-buttons'>${config.data[CT].option3}</label>
               <input type='radio' name='answer' id='o3' value=${config.data[CT].option3} />
               <label for='o4' class='magpie-response-buttons'>${config.data[CT].option4}</label>
               <input type='radio' name='answer' id='o4' value=${config.data[CT].option4} />
               <label for='o5' class='magpie-response-buttons'>${config.data[CT].option5}</label>
               <input type='radio' name='answer' id='o5' value=${config.data[CT].option5} />
               <label for='o6' class='magpie-response-buttons'>${config.data[CT].option6}</label>
               <input type='radio' name='answer' id='o6' value=${config.data[CT].option6} />
               <label for='o7' class='magpie-response-buttons'>${config.data[CT].option7}</label>
               <input type='radio' name='answer' id='o7' value=${config.data[CT].option7} />
               <label for='o8' class='magpie-response-buttons'>${config.data[CT].option8}</label>
               <input type='radio' name='answer' id='o8' value=${config.data[CT].option8} />
               <label for='o9' class='magpie-response-buttons'>${config.data[CT].option9}</label>
               <input type='radio' name='answer' id='o9' value=${config.data[CT].option9} />
               </div>`;
    }
  }
);

// set value of data according to flag-variable
if (issueFlag === "gun control") {
  rate_data = statement_trials.rate_statement_gun;
} else if (issueFlag === "feminism") {
  rate_data = statement_trials.rate_statement_feminism;
  rate_statement.data = rate_data;
} else {
  console.log("else");
  rate_data = statement_trials.rate_statement_gun;
}

// set data to data-variable in order to use previously chosen issue
// PROBLEM: does not refresh dynamically, is only initiated once in the beginning! -> build custom function
const rate_statement = magpieViews.view_generator(
  "rating_scale",
  {
    trials: 1,
    name: "rate_statement",
    data: rate_data,
  },
  {
    rating_scale: function(config, CT) {
        return `<p class='magpie-view-question'>${config.data[CT].question}</p>
                <div class='magpie-view-answer-container'>
                    <strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
                    <label for="1" class='magpie-response-rating'>1</label>
                    <input type="radio" name="answer" id="1" value="1" />
                    <label for="2" class='magpie-response-rating'>2</label>
                    <input type="radio" name="answer" id="2" value="2" />
                    <label for="3" class='magpie-response-rating'>3</label>
                    <input type="radio" name="answer" id="3" value="3" />
                    <label for="4" class='magpie-response-rating'>4</label>
                    <input type="radio" name="answer" id="4" value="4" />
                    <label for="5" class='magpie-response-rating'>5</label>
                    <input type="radio" name="answer" id="5" value="5" />
                    <label for="6" class='magpie-response-rating'>6</label>
                    <input type="radio" name="answer" id="6" value="8" />
                    <strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
                </div>`;
    }
  }
);

// instantiation of customized view for statement rating
const custom_slider_rating_A2 = custom_slider_rating({
  trials: 1,
  name: 'custom_slider_rating_A2',
})

// instantiation of customized view for issue selection
const custom_choose_issue_view = custom_choose_issue({
  trials: 1,
  name: 'custom_choose_issue_view',
  data: 'issues',
}); 

