// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information

// custom function to build screen for issue selection
const custom_choose_issue = function(config) {
    const view = {
      name: config.name,
      CT:0,
      trials: config.trials,
      render: function(CT, magpie) {
        /* html code
        Builds 9 buttons which each represent a social issue to choose.
        TODO: include all labels and prettify layout by adjusting padding. */
        $("main").html(`<div class='magpie-view'>
        <div style="padding: 50px; width: 400px; display: inline-block;"> <button id="Button1">Gun control</button> </div>
        <div style="padding: 50px; width: 100px; display: inline-block;"> <button id="Button2">Feminism</button> </div>
        <div style="padding: 50px; width: 400px; display: inline-block;"> <button id="Button3">3</button> </div>
        <div style="padding: 50px; width: 100px; display: inline-block;"> <button id="Button4">4</button> </div>
        <div style="padding: 50px; width: 400px; display: inline-block;"> <button id="Button5">5</button> </div>
        <div style="padding: 50px; width: 100px; display: inline-block;"> <button id="Button6">6</button> </div>
        <div style="padding: 50px; width: 100px; display: inline-block;"> <button id="Button7">7</button> </div>
        <div style="padding: 50px; width: 400px; display: inline-block;"> <button id="Button8">8</button> </div>
        <div style="padding: 50px; width: 100px; display: inline-block;"> <button id="Button9">9</button> </div>
      `);
  
      /* js code 
        Repsonse handler for when rating is clicked on screen. For each button, the variable issueFlag is set to indicate 
        selected issue, trial name and chosen issue are saved to the trial_data, trial counter is incremented by 1 and the next view is toggled. */
  
      // button 1 click 
      (function clickHandler1() {
        const button1 = document.getElementById("Button1");
        button1.addEventListener("click", event=> {
          // set to represent selected issue, used in subsequent tasks
          issueFlag = "gun control";
  
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
          issueFlag = "feminism";
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
          issueFlag = "3";
  
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
            issueFlag = "4";
    
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
          issueFlag = "5";
  
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
          issueFlag = "6";
  
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
          issueFlag = "7";
  
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
          issueFlag = "8";
  
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
          issueFlag = "4";
  
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
      <p style="display:inline-block;">Do not agreee</p>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button1">1</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button2">2</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button3">3</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button4">4</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button5">5</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button6">6</button> </div>
      <div style="padding: 20px; width: 4px; display: inline-block;"> <button id="button7">7</button> </div>
      <p style="display:inline-block">  Totally agree</p>
      </center>
      `);

      /* Read out which social issue was previously chosen in order to display statement.
      TODO: include all statements */
      if(issueFlag == "gun control"){
        document.getElementById("p1").innerHTML = "Gun control issue";
      } else if(issueFlag == "feminism"){
        document.getElementById("p1").innerHTML = "Feminism issue";
      } else {
        document.getElementById("p1").innerHTML = "other issue";
      }

      /* js code 
      Repsonse handler for when rating is clicked on screen. For each button, the name of the trial, the statement and response are 
      saved to the trial_data, trial counter is incremented by 1 and the next view is toggled. */ 
      // button 1 - on click
      (function clickHandler1() {
        const button1 = document.getElementById("button1");
        button1.addEventListener("click", event=> {

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

      // button 2 - on click
      (function clickHandler1() {
        const button2 = document.getElementById("button2");
        button2.addEventListener("click", event=> {

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

      // button 3 - on click
      (function clickHandler1() {
        const button3 = document.getElementById("button3");
        button3.addEventListener("click", event=> {

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

      // button 4 - on click
      (function clickHandler1() {
        const button4 = document.getElementById("button4");
        button4.addEventListener("click", event=> {

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

      // button 5 - on click
      (function clickHandler1() {
        const button5 = document.getElementById("button5");
        button5.addEventListener("click", event=> {

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

      // button 6 - on click
      (function clickHandler1() {
        const button6 = document.getElementById("button6");
        button6.addEventListener("click", event=> {
          let trial_data = {
            trial_name: "statement rating",
            trial_number: CT + 1,
            statement: document.getElementById("p1").innerHTML,
            response: "6",
          };

          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 7 - on click
      (function clickHandler1() {
        const button7 = document.getElementById("button7");
        button7.addEventListener("click", event=> {

          let trial_data = {
            trial_name: "statement rating",
            trial_number: CT + 1,
            statement: document.getElementById("p1").innerHTML,
            response: "7",
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