
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
        <h2 id="question" style="margin-top: 1cm;">Social Issues</h2>

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
            response: issueFlag,
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
            response: issueFlag,
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
            response: issueFlag,
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
            response: issueFlag,
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
            response: issueFlag,
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
            response: issueFlag,
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
            response: issueFlag,
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
            response: issueFlag,
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
            response: issueFlag,
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
      Builds a 7 point likert scale ranging from "Do not agree" to "Totally agree" 
      In the title, a statement is displayed, which depends on the previously chosen social issue. */
      $("main").html(`<div class='magpie-view' style="float:center;">
      <center>
      <h2 id="question" style="margin-top: 1cm;">How much do you agree with this statement?</h2>
      <p id="p1" style="margin-top: 2cm;">Hello!</p>
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

      /* $("main").html(`<div class='magpie-view' style="float:center;">
      <table id="likert">
      <tr>
         <td><label>Strongly disagree<input id="button1" type="radio" name="strongly_agree" value="1" /></label></td>
         <td><label>Moderately agree<input type="radio" name="Guilty" value="2" /></label></td>
         <td><label><input type="radio" name="Guilty" value="3" /></label></td>
         <td><label><input type="radio" name="Guilty" value="4" /></label></td>
         <td><label><input id="radGuiltyEnd" type="radio" name="Guilty" value="5" />Very Guilty</label></td>
      </tr>

     `);
 */
      /* js code
      Read out which social issue was previously chosen in order to display statement.*/
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
        throw new ReferenceError("Variable issueFlag seems to have no or a faulty value.");
      }
    

      /* 
      Response handler for when rating is clicked on screen. For each button, the name of the trial, the statement and response are 
      saved to the trial_data, trial counter is incremented by 1 and the next view is toggled. */ 
      // button 1 - on click
      (function clickHandler1() {
        const button1 = document.getElementById("button1");
        button1.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "statement rating",
            trial_number: CT + 1,
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
      chose a certain behavior is also randomized.*/
      $("main").html(`<div class='magpie-view' style="float:center;">
      <center>
      <h2 id="question" style="margin-top: 1cm;">Moral Dilemma</h2>

      <p id="header" style="margin-top: 1cm;" >Imagine you have witnessed a man rob a bank. However, you then saw him do something unexpected with the money. 
      He donated it all to a run-down orphanage that would benefit greatly from the money. 
      You must decide whether to call the police and report the robber or do nothing and leave the robber alone.</p>
      </center>

      <center>
      <p id="first_norm" style="margin-top: 1cm;" >Test</p>
      <p id="second_norm" style="margin-top: 1cm;" > nope</p>
      </center>

      <center>
      <p id="question" style="margin-top: 1cm;" >Would you:</p>
   
      <p style="display:inline-block;"> </p>
      <div style="padding: 20px; width: 100px; display: inline-block;"> <button id="buttonA">Definitely call the police and report the robber</button> </div>
      <div style="padding: 20px; width: 100px; display: inline-block;"> <button id="buttonB">Very likely call the police and report the robber</button> </div>
      <div style="padding: 20px; width: 100px; display: inline-block;"> <button id="buttonC">Probably call the police and report the robber</button> </div>
      <div style="padding: 20px; width: 100px; display: inline-block;"> <button id="buttonD">Probably do nothing and the leave the robber alone</button> </div>
      <div style="padding: 20px; width: 100px; display: inline-block;"> <button id="buttonE">Very likely do nothing and the leave the robber alone</button> </div>
      <div style="padding: 20px; width: 100px; display: inline-block;"> <button id="buttonF">Definitely do nothing and leave the robber alone</button> </div>
      <p style="display:inline-block"> </p>
      </center>

      `);
      
      /* js code */

      // Determine with randomization:
      // Whether both norms are shown 
      bothNorms = _.sample([0, 1]);
      // In which order they are shown 
      normsOrder = _.sample([0, 1]);
      // Which behavior is allocated to which group
      if (_.sample([0, 1]) === 1) {
        ingroupNorm = "Approximately 60% of participants who agreed with you about ".concat(issueFlag, " chose to do nothing and leave the robber alone.");
        outgroupNorm = "Approximately 85% of participants who did not agree with you about ".concat(issueFlag, " chose to call the police and report the robber.");
      } else {
        ingroupNorm = "Approximately 60% of participants who agreed with you about ".concat(issueFlag, " chose to call the police and report the robber.");
        outgroupNorm = "Approximately 85% of participants who did not agree with you about ".concat(issueFlag, " chose to do nothing and leave the robber alone.");
      }

      /* 
      Read out which social issue was previously chosen in order to display norm(s). */
      if (bothNorms === 0) {
        document.getElementById("first_norm").innerHTML = ingroupNorm;  
        document.getElementById("second_norm").innerHTML = " ";       
      } else if (bothNorms === 1) {
        if(normsOrder === 1){
          document.getElementById("first_norm").innerHTML = ingroupNorm;    
          document.getElementById("second_norm").innerHTML = outgroupNorm;          
        } else {
          document.getElementById("first_norm").innerHTML = outgroupNorm;          
          document.getElementById("second_norm").innerHTML = ingroupNorm;         
        }
      }

      /* 
      Response handler for when rating is clicked on screen. For each button, the name of the trial, the displayed norms, whether both norms were shown, 
      the order of the shown norms and the response are saved to the trial_data, trial counter is incremented by 1 and the next view is toggled.  */ 
      // button 1 - on click
      (function clickHandler1() {
        const button1 = document.getElementById("buttonA");
        button1.addEventListener("click", event=> {
          behaviorChoiceFlag = document.getElementById("buttonA").innerHTML;

          let trial_data = {
            trial_name: "moral dilemma",
            trial_number: CT + 1,
            ingroup_norm: ingroupNorm,
            outgroup_norm: outgroupNorm,
            both_norms_shown: bothNorms,
            norm_first_shown: document.getElementById("first_norm").innerHTML,
            norm_second_shown: document.getElementById("second_norm").innerHTML,
            response: document.getElementById("buttonA").innerHTML,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 2 - on click
      (function clickHandler2() {
        const button1 = document.getElementById("buttonB");
        button1.addEventListener("click", event=> {
          behaviorChoiceFlag = document.getElementById("buttonB").innerHTML;

          let trial_data = {
            trial_name: "moral dilemma",
            trial_number: CT + 1,
            ingroup_norm: ingroupNorm,
            outgroup_norm: outgroupNorm,
            both_norms_shown: bothNorms,
            norm_first_shown: document.getElementById("first_norm").innerHTML,
            norm_second_shown: document.getElementById("second_norm").innerHTML,
            response: document.getElementById("buttonB").innerHTML,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 3 - on click
      (function clickHandler3() {
        const button1 = document.getElementById("buttonC");
        button1.addEventListener("click", event=> {
          behaviorChoiceFlag = document.getElementById("buttonC").innerHTML;

          let trial_data = {
            trial_name: "moral dilemma",
            trial_number: CT + 1,
            ingroup_norm: ingroupNorm,
            outgroup_norm: outgroupNorm,
            both_norms_shown: bothNorms,
            norm_first_shown: document.getElementById("first_norm").innerHTML,
            norm_second_shown: document.getElementById("second_norm").innerHTML,
            response: document.getElementById("buttonC").innerHTML,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 4 - on click
      (function clickHandler4() {
        const button1 = document.getElementById("buttonD");
        button1.addEventListener("click", event=> {
          behaviorChoiceFlag = document.getElementById("buttonD").innerHTML;

          let trial_data = {
            trial_name: "moral dilemma",
            trial_number: CT + 1,
            ingroup_norm: ingroupNorm,
            outgroup_norm: outgroupNorm,
            both_norms_shown: bothNorms,
            norm_first_shown: document.getElementById("first_norm").innerHTML,
            norm_second_shown: document.getElementById("second_norm").innerHTML,
            response: document.getElementById("buttonD").innerHTML,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 5 - on click
      (function clickHandler5() {
        const button1 = document.getElementById("buttonE");
        button1.addEventListener("click", event=> {
          behaviorChoiceFlag = document.getElementById("buttonE").innerHTML;

          let trial_data = {
            trial_name: "moral dilemma",
            trial_number: CT + 1,
            ingroup_norm: ingroupNorm,
            outgroup_norm: outgroupNorm,
            both_norms_shown: bothNorms,
            norm_first_shown: document.getElementById("first_norm").innerHTML,
            norm_second_shown: document.getElementById("second_norm").innerHTML,
            response: document.getElementById("buttonE").innerHTML,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 6 - on click
      (function clickHandler6() {
        const button1 = document.getElementById("buttonF");
        button1.addEventListener("click", event=> {
          behaviorChoiceFlag = document.getElementById("buttonF").innerHTML;

          let trial_data = {
            trial_name: "moral dilemma",
            trial_number: CT + 1,
            ingroup_norm: ingroupNorm,
            outgroup_norm: outgroupNorm,
            both_norms_shown: bothNorms,
            norm_first_shown: document.getElementById("first_norm").innerHTML,
            norm_second_shown: document.getElementById("second_norm").innerHTML,
            response: document.getElementById("buttonF").innerHTML,
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

// Custom function to build screen to rate how the choice of behavior would make participant feel
const rating_choice = function(config) {
  const view = { 
    name: config.name,
    CT:0,
    trials: config.trials,
    render: function(CT, magpie) {
      /* html code
      Displays the chosen behavior and a 7 point likert scale asking to rate how this made them feel. */
       $("main").html(`<div class='magpie-view'">
      <center>
      <h2 id="question" style="margin-top: 1cm;">Behavior choice</h2>
      <p id="chosen_behavior" style="margin-top: 1cm;" >Test</p>

      <center>
      <div style="padding: 40px; width: 20px; display: inline-block;"> <button id="buttona">Very good</button> </div>
      <div style="padding: 40px; width: 20px; display: inline-block;"> <button id="buttonb">Moderately good</button> </div>
      <div style="padding: 40px; width: 20px; display: inline-block;"> <button id="buttonc">Slightly good</button> </div>
      <div style="padding: 40px; width: 20px; display: inline-block;"> <button id="buttond">Neither good nor bad</button> </div>
      <div style="padding: 40px; width: 20px; display: inline-block;"> <button id="buttone">Slightly bad</button> </div>
      <div style="padding: 40px; width: 20px; display: inline-block;"> <button id="buttonf">Moderately bad</button> </div>
      <div style="padding: 40px; width: 20px; display: inline-block;"> <button id="buttong">Very bad</button> </div>
      </center>
      `);

      /* Read out which social issue was previously chosen in order to display text. */
      if(behaviorChoiceFlag === "Definitely call the police and report the robber"){
        document.getElementById("chosen_behavior").innerHTML = "You chose to definitely call the police and report the robber. If you did call the police and report the robber, how yould you expect to feel:";
      } else if(behaviorChoiceFlag === "Very likely call the police and report the robber"){
        document.getElementById("chosen_behavior").innerHTML = "You chose to very likely call the police and report the robber. If you did call the police and report the robber, how yould you expect to feel:";
      } else if(behaviorChoiceFlag === "Probably call the police and report the robber"){
        document.getElementById("chosen_behavior").innerHTML = "You chose to probably call the police and report the robber. If you did call the police and report the robber, how yould you expect to feel:";
      } else if(behaviorChoiceFlag === "Probably do nothing and the leave the robber alone"){
        document.getElementById("chosen_behavior").innerHTML = "You chose to probably do nothing and the leave the robber alone. If you did do nothing and the leave the robber alone, how yould you expect to feel:";
      } else if(behaviorChoiceFlag === "Very likely do nothing and the leave the robber alone"){
        document.getElementById("chosen_behavior").innerHTML = "You chose to very likely do nothing and the leave the robber alone. If you did do nothing and the leave the robber alone, how yould you expect to feel:";
      } else if(behaviorChoiceFlag === "Definitely do nothing and leave the robber alone"){
        document.getElementById("chosen_behavior").innerHTML = "You chose to definitely do nothing and the leave the robber alone. If you did do nothing and the leave the robber alone, how yould you expect to feel:";
      } else {
        throw new ReferenceError("Variable behaviorChoiceFlag seems to have no or a faulty value.");
      };
    

      /* js code 
      Response handler for when rating is clicked on screen. For each button, the name of the trial and response are 
      saved to the trial_data, trial counter is incremented by 1 and the next view is toggled.  */ 
      // button 1 - on click
      (function clickHandler1() {
        const button1 = document.getElementById("buttona");
        button1.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "behavior rating",
            trial_number: CT + 1,
            response: document.getElementById("buttona").innerHTML,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 2 - on click
      (function clickHandler2() {
        const button2 = document.getElementById("buttonb");
        button2.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "behavior rating",
            trial_number: CT + 1,
            response: document.getElementById("buttonb").innerHTML,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 3 - on click
      (function clickHandler3() {
        const button3 = document.getElementById("buttonc");
        button3.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "behavior rating",
            trial_number: CT + 1,
            response: document.getElementById("buttonc").innerHTML,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 4 - on click
      (function clickHandler4() {
        const button4 = document.getElementById("buttond");
        button4.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "behavior rating",
            trial_number: CT + 1,
            response: document.getElementById("buttond").innerHTML,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 5 - on click
      (function clickHandler5() {
        const button5 = document.getElementById("buttone");
        button5.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "behavior rating",
            trial_number: CT + 1,
            response: document.getElementById("buttone").innerHTML,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 6 - on click
      (function clickHandler6() {
        const button6 = document.getElementById("buttonf");
        button6.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "behavior rating",
            trial_number: CT + 1,
            response: document.getElementById("buttonf").innerHTML,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 7 - on click
      (function clickHandler7() {
        const button7 = document.getElementById("buttong");
        button7.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "behavior rating",
            trial_number: CT + 1,
            response: document.getElementById("buttong").innerHTML,
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

// Custom function to build screen for understanding check
const four_question_forced_choice = function(config) {
  const view = { 
    name: config.name,
    CT:0,
    trials: config.trials,
    render: function(CT, magpie) {
      /* html code
      Builds a title and 4 statements with a choice between 'true' or 'false' button for each. 
      Additionally, a button at the bottom of the page leads to the next page. */
      $("main").html(`<div class='magpie-view' style="float:center;">
      <center>
      <h2 id="question" style="margin-top: 1cm;">Is this true about the previous study described in the introdution?</h2>
      </center>
      <form>
        <center>
        <p id="claim1" style="margin-top: 2cm;">Participants chose which action they prefered.</p>      
        <input type="radio" id="true1" name="question1" value="true"> <label for="true1">true</label>
        <input type="radio" id="false1" name="question1" value="false"> <label for="false1">false</label>

        <p id="claim2" style="margin-top: 1cm;">Due to a computer error, participants were not allocated equally to imagine performing the different actions.</p>
        <input type="radio" id="true2" name="question2" value="true"> <label for="true2">true</label>
        <input type="radio" id="false2" name="question2" value="false"> <label for="false2">false</label>
        
        <p id="claim3" style="margin-top: 1cm;">No data was saved during the experiment.</p>
        <input type="radio" id="true3" name="question3" value="true"> <label for="true3">true</label>
        <input type="radio" id="false3" name="question3" value="false"> <label for="false3">false</label>
        
        <p id="claim4" style="margin-top: 1cm;">The participants completed the experiment with their eyes closed.</p>
        <input type="radio" id="true4" name="question4" value="true"> <label for="true4">true</label>
        <input type="radio" id="false4" name="question4" value="false"> <label for="false4">false</label>
        </center>

        <center>
        <button type="submit" id="Next" style="margin-top: 2cm;" >Next</button>
        </center>
      </form>
      `);     

      /* 
      Response handler for when 'Next' button is clicked on screen. The responses for each of the 4 statements is read 
      from the html data and saved in the magpie object. */ 
      (function clickHandlerNext() {
        const buttonNext = document.getElementById("Next");
        var form = document.querySelector("form");

        buttonNext.addEventListener("click", event=> {
          var data = new FormData(form);
          const responses = []; 

          for (const entry of data) {
              responses.push(entry[1])
          };          
          event.preventDefault();

          let trial_data = {
            trial_name: "custom understanding check",
            trial_number: CT + 1,
            response_claim1: responses[0],
            expected_claim1: "true",
            response_claim2: responses[1],
            expected_claim2: "false",
            response_claim3: responses[2],
            expected_claim3: "false",
            response_claim4: responses[3],            
            expected_claim4: "false",
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

// Custom function to build screen for single item social identification measure
const single_item_social_identification = function(config) {
  const view = { 
    name: config.name,
    CT:0,
    trials: config.trials,

    render: function(CT, magpie) {
      /* html code
      Displays a statement and a 7 point Likert scale ranging from "Fully disagree" to "Fully agree". */
      $("main").html(`<div class='magpie-view' style="float:center;">
      <center>
      <h2 id="question" style="margin-top: 1cm;">How much do you agree with this statement?</h2>
      <p id="statement" style="margin-top: 1cm;"> </p>
      </center>
      <center>
      <p style="display:inline-block;">Fully disagree</p>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="buttonl">1</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="buttonm">2</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="buttonn">3</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="buttono">4</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="buttonp">5</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="buttonq">6</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="buttonv">7</button> </div>
      <p style="display:inline-block">Fully agree</p>
      </center>
      `);

      /* js code */

      // Determine which groups we need
      if(issueFlag === "Gun control"){
        pro_name = "pro-gun enthusiasts.";
        anti_name = "anti-gun advocates";
      } else if(issueFlag === "Feminism"){
        pro_name = "pro-feminism enthusiasts.";
        anti_name = "anti-feminism advocates";      
      } else if (issueFlag === "Joe Biden") {
        pro_name = "pro-Biden enthusiasts.";
        anti_name = "anti-Biden advocates";
      } else if(issueFlag === "Immigration and Dreamers"){
        pro_name = "pro-dreamers enthusiasts.";
        anti_name = "anti-dreamers advocates";
      } else if(issueFlag === "Transgender rights"){
        pro_name = "pro-trans rights enthusiasts.";
        anti_name = "anti-trans rights advocates";
      } else if (issueFlag === "Drug legalization") {
        pro_name = "pro-drug legalization enthusiasts.";
        anti_name = "anti-drug legalization advocates";
      } else if (issueFlag === "Colin Kaepernick kneeling during the national anthem") {
        pro_name = "pro Colin Kaepernick enthusiasts.";
        anti_name = "anti Colin Kaepernick advocates";
      } else if (issueFlag === "Buying and wearing fur") {
        pro_name = "pro-fur enthusiasts.";
        anti_name = "anti-fur advocates";
      } else if (issueFlag === "Taxing religious organizations") {
        pro_name = "pro-taxing of religious organizations enthusiasts.";
        anti_name = "anti-taxing of religious organizations advocates";
      } else {
        throw new ReferenceError("Variable issueFlag seems to have no or a faulty value.");
      };

      // Change the statement in each trial
      trial_name = null;
      if (CT === 0) {
        document.getElementById("statement").innerHTML = "I identify with  ".concat(pro_name);   
        trial_name = "identification_pro";   
      } else if (CT === 1) {
        document.getElementById("statement").innerHTML = "I identify with  ".concat(anti_name);
        trial_name = "identification_anti";
      }

      /* 
      Response handler for when rating is clicked on screen. For each button, the name of the trial and response are 
      saved to the trial_data, trial counter is incremented by 1 and the next view is toggled. */ 
      // Button 1 - on click
      (function clickHandler1() {
        const button1 = document.getElementById("buttonl");
        button1.addEventListener("click", event=> {

          let trial_data = {
            trial_name: trial_name,
            trial_number: CT + 1,
            response: document.getElementById("buttonl").innerHTML,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
        })();

          // Button 2 - on click
      (function clickHandler2() {
        const button2 = document.getElementById("buttonm");
        button2.addEventListener("click", event=> {

          let trial_data = {
            trial_name: trial_name,
            trial_number: CT + 1,
            response: document.getElementById("buttonm").innerHTML,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
        })();

      // Button 3 - on click
      (function clickHandler3() {
        const button3 = document.getElementById("buttonn");
        button3.addEventListener("click", event=> {

          let trial_data = {
            trial_name: trial_name,
            trial_number: CT + 1,
            response: document.getElementById("buttonn").innerHTML,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
        })();

      // Button 4 - on click
      (function clickHandler4() {
        const button4 = document.getElementById("buttono");
        button4.addEventListener("click", event=> {

          let trial_data = {
            trial_name: trial_name,
            trial_number: CT + 1,
            response: document.getElementById("buttono").innerHTML,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
        })();

      // Button 5 - on click
      (function clickHandler5() {
        const button5 = document.getElementById("buttonp");
        button5.addEventListener("click", event=> {

          let trial_data = {
            trial_name: trial_name,
            trial_number: CT + 1,
            response: document.getElementById("buttonp").innerHTML,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
        })();

      // Button 6 - on click
      (function clickHandler6() {
        const button6 = document.getElementById("buttonq");
        button6.addEventListener("click", event=> {

          let trial_data = {
            trial_name: trial_name,
            trial_number: CT + 1,
            response: document.getElementById("buttonq").innerHTML,
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
        })();

        // Button 7 - on click
      (function clickHandler7() {
        const button7 = document.getElementById("buttonv");
        button7.addEventListener("click", event=> {

          let trial_data = {
            trial_name: trial_name,
            trial_number: CT + 1,
            response: document.getElementById("buttonv").innerHTML,
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


