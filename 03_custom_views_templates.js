// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information

// custom function to build screen for issue selection
const custom_selection = function(config) {
    const view = {
      name: config.name,
      CT:0,
      trials: config.trials,
      render: function(CT, magpie) {
        /* html code
        Builds 9 buttons which each represent a social issue to choose. */
        $("main").html(`<div class='magpie-view'>
        <center>
        <p id="p1" style="margin-top: 1cm;">Which of these issues do you care about the most?</p>
        </center>
        <center>
        <div style="padding: 20px; width: 600px; display: inline-block;"> <button id="Button1">Gun control</button> </div>
        <div style="padding: 20px; width: 600px; display: inline-block;"> <button id="Button2">Feminism</button> </div>
        <div style="padding: 20px; width: 600px; display: inline-block;"> <button id="Button3">Joe Biden</button> </div>
        <div style="padding: 20px; width: 800px; display: inline-block;"> <button id="Button4">Immigration and Dreamers</button> </div>
        <div style="padding: 20px; width: 700px; display: inline-block;"> <button id="Button5">Transgender rights</button> </div>
        <div style="padding: 20px; width: 700px; display: inline-block;"> <button id="Button6">Drug legalization</button> </div>
        <div style="padding: 20px; width: 1000px; display: inline-block;"> <button id="Button7">Colin Kaepernick kneeling during the national anthem</button> </div>
        <div style="padding: 20px; width: 800px; display: inline-block;"> <button id="Button8">Buying and wearing fur</button> </div>
        <div style="padding: 20px; width: 800px; display: inline-block;"> <button id="Button9">Taxing religious organizations</button> </div>
        </center>
        `);
  
      /* js code 
        Repsonse handler for when rating is clicked on screen. For each button, the variable issueFlag is set to indicate 
        selected issue, trial name and chosen issue are saved to the trial_data, trial counter is incremented by 1 and the next view is toggled. */
  
      // button 1 click 
      (function clickHandler1() {
        const button1 = document.getElementById("Button1");
        button1.addEventListener("click", event=> {
          // set to represent selected issue, used in subsequent tasks
          issueFlag = "Gun control";
  
          let trial_data = {
            trial_name: 'selected issue',
            trial_number: CT + 1,
            flag: issueFlag,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();
  
      // button 2 click
      (function clickHandler2() {
        const button2 = document.getElementById("Button2");
        button2.addEventListener("click", event=> {
          // set flag here
          issueFlag = "Feminism";
          //set_issue();

          let trial_data = {
            trial_name: 'issue',
            trial_number: CT + 1,
            flag: issueFlag,
          };
  
          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();
  
      // button 3 click
      (function clickHandler3() {
        const button3 = document.getElementById("Button3");
        button3.addEventListener("click", event=> {
          // set flag here
          issueFlag = "Joe Biden";
  
          let trial_data = {
            trial_name: 'issue',
            trial_number: CT + 1,
            flag: issueFlag,
          };
  
          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

    // button 4 click
    (function clickHandler4() {
        const button4 = document.getElementById("Button4");
        button4.addEventListener("click", event=> {
            // set flag here
            issueFlag = "Immigration and Dreamers";
    
            let trial_data = {
            trial_name: 'issue',
            trial_number: CT + 1,
            flag: issueFlag,
            };
    
            // push data to csv
            magpie.trial_data.push(trial_data);
            magpie.findNextView();
        });
        })();
        
      // button 5 click
      (function clickHandler5() {
        const button5 = document.getElementById("Button5");
        button5.addEventListener("click", event=> {
          // set flag here
          issueFlag = "Transgender rights";
  
          let trial_data = {
            trial_name: 'issue',
            trial_number: CT + 1,
            flag: issueFlag,
          };
  
          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();
  
      // button 6 click
      (function clickHandler6() {
        const button6 = document.getElementById("Button6");
        button6.addEventListener("click", event=> {
          // set flag here
          issueFlag = "Drug legalization";
  
          let trial_data = {
            trial_name: 'issue',
            trial_number: CT + 1,
            flag: issueFlag,
          };
  
          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 7 click
      (function clickHandler7() {
        const button7 = document.getElementById("Button7");
        button7.addEventListener("click", event=> {
          // set flag here
          issueFlag = "Colin Kaepernick kneeling during the national anthem";
  
          let trial_data = {
            trial_name: 'issue',
            trial_number: CT + 1,
            flag: issueFlag,
          };
  
          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 8 click
      (function clickHandler8() {
        const button8 = document.getElementById("Button8");
        button8.addEventListener("click", event=> {
          // set flag here
          issueFlag = "Buying and wearing fur";
  
          let trial_data = {
            trial_name: 'issue',
            trial_number: CT + 1,
            flag: issueFlag,
          };
  
          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 9  click
      (function clickHandler9() {
        const button9 = document.getElementById("Button9");
        button9.addEventListener("click", event=> {
          // set flag here
          issueFlag = "Taxing religious organizations";
  
          let trial_data = {
            trial_name: 'issue',
            trial_number: CT + 1,
            flag: issueFlag,
          };
  
          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      }
    };
    return view;
  };


// custom function to build screen for statement rating
const custom_slider_rating = function(config) {
  const view = { 
    name: config.name,
    CT:0,
    trials: config.trials,
    render: function(CT, magpie) {
      /* html code
      Builds a 7 point likert scale ranging from "Do not agree" to "Totally agree" TODO these might need changing
      In the title, a statement is displayed, which depends on the previously chosen social issue. */
      $("main").html(`<div class='magpie-view' style="float:center;">
      <center>
      <p id="p1" style="margin-top: 8cm;">Hello!</p>
      </center>
      <center>
      <p style="display:inline-block;">Strongly disagree</p>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button1">-5</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button2">-4</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button3">-3</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button4">-2</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button5">-1</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button6">0</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button7">1</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button8">2</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button9">3</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button10">4</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button11">5</button> </div>
      <p style="display:inline-block">Strongly agree</p>
      </center>
      `);

      /* Read out which social issue was previously chosen in order to display statement.
      TODO: include all statements */
      if(issueFlag === "Gun control"){
        document.getElementById("p1").innerHTML = "Adults should have the right to carry a concealed handgun";
      } else if(issueFlag === "Feminism"){
        document.getElementById("p1").innerHTML = "Feminism is important and beneficial to modern society";
      } else if (issueFlag === "Joe Biden") {
        document.getElementById("p1").innerHTML = "Joe Biden being president is good for the United States at this time";
      } else if(issueFlag === "Immigration and Dreamers"){
        document.getElementById("p1").innerHTML = "Dreamers (undocumented immigrants who came to the US as children) should be allowed to stay in the United States";
      } else if(issueFlag === "Transgender rights"){
        document.getElementById("p1").innerHTML = "Transgender people should be allowed to use the bathrooms of the gender they identify as";
      } else if (issueFlag === "Drug legalization") {
        document.getElementById("p1").innerHTML = "Possession of drugs should be legalized";
      } else if (issueFlag === "Colin Kaepernick kneeling during the national anthem") {
        document.getElementById("p1").innerHTML = "Colin Kaepernick was wrong to kneel during the national anthem";
      } else if (issueFlag === "Buying and wearing fur") {
        document.getElementById("p1").innerHTML = "Buying and wearing fur is wrong";
      } else if (issueFlag === "Taxing religious organizations") {
        document.getElementById("p1").innerHTML = "Religious organizations should be taxed";
      } else {
        throw new ReferenceError("Variable issueFlag seems to have a no or a faulty value.");
      }
    

      /* js code 
      Response handler for when rating is clicked on screen. For each button, the name of the trial, the statement and response are 
      saved to the trial_data, trial counter is incremented by 1 and the next view is toggled. */ 
      // button 1 - on click
      (function clickHandler1() {
        const button1 = document.getElementById("button1");
        button1.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "statement rating",
            trial_number: CT + 1,
            statement: document.getElementById("p1").innerHTML,
            response: "-5",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 2 - on click
      (function clickHandler2() {
        const button2 = document.getElementById("button2");
        button2.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "statement rating",
            trial_number: CT + 1,
            statement: document.getElementById("p1").innerHTML,
            response: "-4",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 3 - on click
      (function clickHandler3() {
        const button3 = document.getElementById("button3");
        button3.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "statement rating",
            trial_number: CT + 1,
            statement: document.getElementById("p1").innerHTML,
            response: "-3",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 4 - on click
      (function clickHandler4() {
        const button4 = document.getElementById("button4");
        button4.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "statement rating",
            trial_number: CT + 1,
            statement: document.getElementById("p1").innerHTML,
            response: "-2",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 5 - on click
      (function clickHandler5() {
        const button5 = document.getElementById("button5");
        button5.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "statement rating",
            trial_number: CT + 1,
            statement: document.getElementById("p1").innerHTML,
            response: "-1",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 6 - on click
      (function clickHandler6() {
        const button6 = document.getElementById("button6");
        button6.addEventListener("click", event=> {
          let trial_data = {
            trial_name: "statement rating",
            trial_number: CT + 1,
            statement: document.getElementById("p1").innerHTML,
            response: "0",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 7 - on click
      (function clickHandler7() {
        const button7 = document.getElementById("button7");
        button7.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "statement rating",
            trial_number: CT + 1,
            statement: document.getElementById("p1").innerHTML,
            response: "1",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 8 - on click
      (function clickHandler8() {
        const button8 = document.getElementById("button8");
        button8.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "statement rating",
            trial_number: CT + 1,
            statement: document.getElementById("p1").innerHTML,
            response: "2",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 9 - on click
      (function clickHandler9() {
        const button9 = document.getElementById("button9");
        button9.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "statement rating",
            trial_number: CT + 1,
            statement: document.getElementById("p1").innerHTML,
            response: "3",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 10 - on click
      (function clickHandler10() {
        const button10 = document.getElementById("button10");
        button10.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "statement rating",
            trial_number: CT + 1,
            statement: document.getElementById("p1").innerHTML,
            response: "4",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();
      
      // button 11 - on click
      (function clickHandler11() {
        const button11 = document.getElementById("button11");
        button11.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "statement rating",
            trial_number: CT + 1,
            statement: document.getElementById("p1").innerHTML,
            response: "5",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();
    }
  };
  return view;
};

// Custom function to build screen for moral dilemma 
const moral_dilemma = function(config) {
  const view = { 
    name: config.name,
    CT:0,
    trials: config.trials,
    render: function(CT, magpie) {
      /* html code
      Displays the moral dilemma and either both ingroup and outgroup norm or only ingroup norm. If both, the order is randomized. Whether ingroup or outgroup
      chose a certain behavior is also randomized.
      TODO: randomization
      include all issues
      change scale to "Would you: look at example script
      set behaviorChoiceFlag flag according to choice*/
      $("main").html(`<div class='magpie-view' style="float:center;">
      <center>
      <p id="p1" style="margin-top: 1cm;" >Imagine you have witnessed a man rob a bank. However, you then saw him do something unexpected with the money. 
      He donated it all to a run-down orphanage that would benefit greatly from the money. 
      You must decide whether to call the police and report the robber or do nothing and leave the robber alone.</p>
      </center>

      <p id="ingroup_norm" style="margin-top: 1cm;" >Test</p>
      <p id="outgroup_norm" style="margin-top: 1cm;" >Test</p>
      `);

      /* Read out which social issue was previously chosen in order to display norm(s). */
      if(issueFlag === "Gun control"){
        document.getElementById("ingroup_norm").innerHTML = "Approximately 60% of participants who agreed with you about gun restrictions chose to (do nothing and leave the robber alone / call the polive and report the robber).";
        document.getElementById("outgroup_norm").innerHTML = "Approximately 85% of participants who did not agree with you about gun restrictions chose to (do nothing and leave the robber alone / call the polive and report the robber).";
      } else if(issueFlag === "Feminism"){
        document.getElementById("p1").innerHTML = "Feminism is important and beneficial to modern society";
      } else if (issueFlag === "Joe Biden") {
        document.getElementById("p1").innerHTML = "Joe Biden being president is good for the United States at this time";
      } else if(issueFlag === "Immigration and Dreamers"){
        document.getElementById("p1").innerHTML = "Dreamers (undocumented immigrants who came to the US as children) should be allowed to stay in the United States";
      } else if(issueFlag === "Transgender rights"){
        document.getElementById("p1").innerHTML = "Transgender people should be allowed to use the bathrooms of the gender they identify as";
      } else if (issueFlag === "Drug legalization") {
        document.getElementById("p1").innerHTML = "Possession of drugs should be legalized";
      } else if (issueFlag === "Colin Kaepernick kneeling during the national anthem") {
        document.getElementById("p1").innerHTML = "Colin Kaepernick was wrong to kneel during the national anthem";
      } else if (issueFlag === "Buying and wearing fur") {
        document.getElementById("p1").innerHTML = "Buying and wearing fur is wrong";
      } else if (issueFlag === "Taxing religious organizations") {
        document.getElementById("p1").innerHTML = "Religious organizations should be taxed";
      } else {
        throw new ReferenceError("Variable issueFlag seems to have a no or a faulty value.");
      }
    

      /* js code 
      Response handler for when rating is clicked on screen. For each button, the name of the trial, the statement and response are 
      saved to the trial_data, trial counter is incremented by 1 and the next view is toggled. */ 
      // button 1 - on click
      (function clickHandler1() {
        const button1 = document.getElementById("button1");
        button1.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "statement rating",
            trial_number: CT + 1,
            statement: document.getElementById("p1").innerHTML,
            response: "-5",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();
    }
  };
  return view;
};

// Custom function to build screen for moral dilemma
const rating_choice = function(config) {
  const view = { 
    name: config.name,
    CT:0,
    trials: config.trials,
    render: function(CT, magpie) {
      /* html code
      Displays the chosen behavior and a 7 point likert scale asking to rate how this made them feel.
      TODO: build pretty likert scale with statements and also change in statement rating view */
       $("main").html(`<div class='magpie-view' style="float:center;">
      <center>
      <p id="chosen_behavior" style="margin-top: 1cm;" >Test</p>

      <center>
      <div style="padding: 40px; width: 20px; display: inline-block;"> <button id="button1">Very good</button> </div>
      <div style="padding: 40px; width: 20px; display: inline-block;"> <button id="button2">Moderately good</button> </div>
      <div style="padding: 40px; width: 20px; display: inline-block;"> <button id="button3">Slightly good</button> </div>
      <div style="padding: 40px; width: 20px; display: inline-block;"> <button id="button4">Neither good nor bad</button> </div>
      <div style="padding: 40px; width: 20px; display: inline-block;"> <button id="button5">Slightly bad</button> </div>
      <div style="padding: 40px; width: 20px; display: inline-block;"> <button id="button5">Moderately bad</button> </div>
      <div style="padding: 40px; width: 20px; display: inline-block;"> <button id="button5">Very bad</button> </div>
      </center>
      `);

      /* Read out which social issue was previously chosen in order to display text. */
      if(behaviorChoiceFlag === "do nothing"){
        document.getElementById("chosen_behavior").innerHTML = "You chose to do nothing and leave the robber alone. If you did do nothing and leave the robber alone, how yould you expect to feel:";
      } else if(behaviorChoiceFlag === "call police"){
        document.getElementById("chosen_behavior").innerHTML = "You chose to call the police and report the robber. If you did call the police and report the robber, how yould you expect to feel:";
      } else {
        throw new ReferenceError("Variable behaviorChoiceFlag seems to have a no or a faulty value.");
      };
    

      /* js code 
      Response handler for when rating is clicked on screen. For each button, the name of the trial, the statement and response are 
      saved to the trial_data, trial counter is incremented by 1 and the next view is toggled. */ 
      // button 1 - on click
      (function clickHandler1() {
        const button1 = document.getElementById("button1");
        button1.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "behavior rating",
            trial_number: CT + 1,
            response: "Very good",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 2 - on click
      (function clickHandler2() {
        const button2 = document.getElementById("button2");
        button1.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "behavior rating",
            trial_number: CT + 1,
            response: "Moderately good",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 3 - on click
      (function clickHandler3() {
        const button3 = document.getElementById("button3");
        button1.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "behavior rating",
            trial_number: CT + 1,
            response: "Slightly good",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 4 - on click
      (function clickHandler4() {
        const button4 = document.getElementById("button4");
        button1.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "behavior rating",
            trial_number: CT + 1,
            response: "Neither good nor bad",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 5 - on click
      (function clickHandler5() {
        const button5 = document.getElementById("button5");
        button1.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "behavior rating",
            trial_number: CT + 1,
            response: "Slightly bad",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 6 - on click
      (function clickHandler6() {
        const button6 = document.getElementById("button6");
        button1.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "behavior rating",
            trial_number: CT + 1,
            response: "Moderately bad bad",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 7 - on click
      (function clickHandler7() {
        const button7 = document.getElementById("button7");
        button1.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "behavior rating",
            trial_number: CT + 1,
            response: "Very bad",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();
    }
  };
  return view;
};