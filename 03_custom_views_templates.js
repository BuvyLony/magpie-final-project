// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information

// custom function to build screen for issue-selection
// (so far only gun control and feminism implemented!)
const custom_choose_issue = function(config) {
    const view = {
      name: config.name,
      CT:0,
      trials: config.trials,
      render: function(CT, magpie) {
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
  
      // js code
  
      // button 1 - on click
      (function clickHandler1() {
        const button1 = document.getElementById("Button1");
        button1.addEventListener("click", event=> {
          // set flag here
          console.log("gun is here");
          flagToSet = "gun control";
          set_issue();
  
          let trial_data = {
            trial_name: 'issue',
            trial_number: CT + 1,
            flag: flagToSet,
          };
  
          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();
  
      // button 2 - on click
      (function clickHandler2() {
        const button2 = document.getElementById("Button2");
        button2.addEventListener("click", event=> {
          // set flag here
          flagToSet = "feminism";
          set_issue();

          let trial_data = {
            trial_name: 'issue',
            trial_number: CT + 1,
            flag: flagToSet,
          };
  
          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();
  
      // button 3 - on click
      (function clickHandler3() {
        const button3 = document.getElementById("Button3");
        button3.addEventListener("click", event=> {
          // set flag here
          flagToSet = "3";
  
          let trial_data = {
            trial_name: 'issue',
            trial_number: CT + 1,
            flag: flagToSet,
          };
  
          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

    // button 4 - on click
    (function clickHandler4() {
        const button4 = document.getElementById("Button4");
        button4.addEventListener("click", event=> {
            // set flag here
            flagToSet = "4";
    
            let trial_data = {
            trial_name: 'issue',
            trial_number: CT + 1,
            flag: flagToSet,
            };
    
            // push data to csv
            magpie.trial_data.push(trial_data);
            magpie.findNextView();
        });
        })();
        
      // button 5 - on click
      (function clickHandler5() {
        const button5 = document.getElementById("Button5");
        button5.addEventListener("click", event=> {
          // set flag here
          flagToSet = "5";
  
          let trial_data = {
            trial_name: 'issue',
            trial_number: CT + 1,
            flag: flagToSet,
          };
  
          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();
  
      // button 6 - on click
      (function clickHandler6() {
        const button6 = document.getElementById("Button6");
        button6.addEventListener("click", event=> {
          // set flag here
          flagToSet = "6";
  
          let trial_data = {
            trial_name: 'issue',
            trial_number: CT + 1,
            flag: flagToSet,
          };
  
          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 7 - on click
      (function clickHandler7() {
        const button7 = document.getElementById("Button7");
        button7.addEventListener("click", event=> {
          // set flag here
          flagToSet = "7";
  
          let trial_data = {
            trial_name: 'issue',
            trial_number: CT + 1,
            flag: flagToSet,
          };
  
          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 8 - on click
      (function clickHandler8() {
        const button8 = document.getElementById("Button8");
        button8.addEventListener("click", event=> {
          // set flag here
          flagToSet = "8";
  
          let trial_data = {
            trial_name: 'issue',
            trial_number: CT + 1,
            flag: flagToSet,
          };
  
          // push data to csv
          magpie.trial_data.push(trial_data);
          magpie.findNextView();
        });
      })();

      // button 9 - on click
      (function clickHandler9() {
        const button9 = document.getElementById("Button9");
        button9.addEventListener("click", event=> {
          // set flag here
          flagToSet = "4";
  
          let trial_data = {
            trial_name: 'issue',
            trial_number: CT + 1,
            flag: flagToSet,
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