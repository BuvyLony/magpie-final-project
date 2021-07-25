// In this file you can instantiate your views

// Intro view informing the participant about a fictious previous study 
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `We are following up on a previously published paper that looked at how people feel about moral dilemmas.
            <br />
            <br />
            In the previous paper, a moral dilemma was described that involved two possible courses of actions. 
            Participants chose which action they preferred and had to rate how they would feel about performing that action.
            <br />
            <br />
            In this study, you will be presented with a scenario describing a moral dilemma. 
            You will choose which action you would take and then provide a rating of how good or bad you imagine you would feel after taking that action`,
  buttonText: 'Begin the experiment'
});


// Pre questionnaire only containing age question, gender question and a textfield for further comments
const pre_test_customized = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test_customized',
  title: 'Additional information',
  text: 'Before we can start, we would like you to provide us with some additional information.',

  // Change gender selection
  gender_other: 'non-binary',
  gender_undefined: 'Prefer not to say',
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
                            <option value="${quest.gender.undefined}">${"Prefer not to say"}</option>
                        </select>
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

// For most tasks, you need instructions views TODO: do we need this?
/* const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `This is a sample instructions view.
            <br />
            <br />
            Tell your participants what they are to do here.`,
  buttonText: 'next'
}); */

// Instantiation of customized view for social issue selection
const issue_selection = custom_selection({
  trials: 1,
  name: 'issue_selection',
  data: 'issues',
}); 

// Instantiation of customized view for statement rating
const statement_rating = custom_slider_rating({
  trials: 1,
  name: 'statement_rating',
})

// Instantiation of the moral dilemma view
const moral_dilemma_view = moral_dilemma({
  trials: 1,
  name: "moral_dilemma_view",
});

// Instantiation of the rating of the behavior choice view
const rating_choice_view = rating_choice({
  trials: 1,
  name: "rating_choice_view",
});

// Instantiation of iterative dropdown choice view for understanding check
const iterative_dropdown_choice = magpieViews.view_generator("dropdown_choice", {
  trials: 4,
  name: "iterative_dropdown_choice",
  data: understanding_trials.questions,
});

// Instantiation of the single item social identification measure
const identification_measure = single_item_social_identification({
  trials: 2,
  name: "identification_measure",
});