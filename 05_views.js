// In this file you can instantiate your views

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `We are following up on a previously published paper that looked at how people feel about moral dilemmas.
            <br />
            <br />
            In the previous paper, a moral dilemma was described that involved two possible courses of actions. 
            Participants chose which action they preferred and had to rate how they would feel about performing that action.
            You are in the <strong>${coin}</strong> group.
            <br />
            <br />
            In this study, you will be presented with a scenario describing a moral dilemma. 
            You will choose which action you would take and then provide a rating of how good or bad you imagine you would feel after taking that action`,
  buttonText: 'Begin the experiment'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test_customized = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test_customized',
  title: 'Additional information',
  text: 'Before we can start, we would like you to provide us with some additional information.',

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  gender_other: 'non-binary',
  gender_undefined: 'Prefer not to say',
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
                            <option value="${quest.gender.undefined}">${"Prefer not to say"}</option>
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

// instantiation of customized view for issue selection
const issue_selection = custom_selection({
  trials: 1,
  name: 'issue_selection',
  data: 'issues',
}); 

// instantiation of customized view for statement rating
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