/*
--Toronto-Psycholinguistics-Experiments--

Template that gives examples of everything Ibex can do for experiments
*/

var shuffleSequence = seq("intro", shuffle(randomize("image")));


var defaults = [
    "Separator", {
        transfer: 1000, //wait for 1000ms
          //other options: "keypress", "click"
        normalMessage: "Please wait for the next sentence.", //message to be displayed
        errorMessage: "Wrong. Please wait for the next sentence." //message to be displayed in red
    },

    "Message", {
        //"html" option is obligatory
        hideProgressBar: false,
        transfer: "keypress"
    },

    "DashedSentence", {
        //"s" option is obligatory
        mode: "self-paced reading"
          //other option: "speeded acceptability"
    },

    "Question", {
        //"as" option is obligatory
        hasCorrect: true
          //if a question has a correct answer,
            //keep it as the first element of the "as" option
    },

    "AcceptabilityJudgment", {
        //"s" option is obligatory
        //"q" option is obligatory
        //"as" option is obligatory
        as: ["1", "2", "3", "4", "5", "6", "7"],
        //writing the "as" option here means that this is the default for
        //all AcceptabilityJudgment items
        presentAsScale: true, //presents the "as" option as a scale
        instructions: "Use number keys or click boxes to answer.", //instruction text
        leftComment: "(Bad)", //displayed on the left side of the scale
        rightComment: "(Good)" //displayed on the right side of the scale
    },

    "DashedAcceptabilityJudgment", {
        //combination of AcceptabilityJudgment and DashedSentence
        //"s" option is obligatory
        //"q" option is obligatory
        //"as" option is obligatory
        hasCorrect: false
    },

    "Form", {
        //"html" option is obligatory
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [

    /*
    ===================
    SEPARATOR
    The pause needed between each item of the experiment
    ===================
    */

    //ends after timer (1000ms)
    // ["sep", "Separator", {transfer: 1000, normalMessage: "Please wait for the next sentence."}],

    //ends when key is press
    // ["sep", "Separator", {transfer: "keypress", normalMessage: "Please press any key to continue."}],


    /*
    ===================
    INTRODUCTION
    Can include files for Questionnaires, consent forms etc...
    ===================
    */

    //name of controller
    ["intro",
      //type
      "Form",
      //obligatory option that includes a HTML file that is a questionnaire
      {html: { include: "example_intro.html" },
      //fields that need to have the right format when taking input from user
      validators: {
        //age has to be a number
        age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],


    /*
    ===================
    IMAGE
    Controllers that work with Images and Questions
    ===================
    */

      //Form for images. Copy-Paste this section to adapt
     ["image", 
        "Form", {html: ' \
        <table style="text-align:center;"> \
        <tr> \
          <td colspan="2"> <img src = "https://raw.githubusercontent.com/JorgeOrozcoP/Toronto-Psycholinguistics-Experiments/image/img/149038850760.jpg" /> </td> \
        </tr> \
        <tr> \
          <td colspan="2"> what is the dog thinking? </td> \
        </tr> \
        <tr> \
          <td> Cookies </td> \
          <td> Homework </td> \
        </tr> \
        <tr> \
          <td> <input type="radio" name="dog" value="opt1"> </td> \
          <td> <input type="radio" name="dog" value="opt2"> </td> \
        </tr>'}],
		
		      //Form for images. Copy-Paste this section to adapt
     ["image", 
        "Form", {html: ' \
        <table style="text-align:center;"> \
        <tr> \
          <td colspan="3"> <img src = "https://raw.githubusercontent.com/JorgeOrozcoP/Toronto-Psycholinguistics-Experiments/image/img/149038850760.jpg" /> </td> \
        </tr> \
        <tr> \
          <td colspan="3"> what is the dog thinking? </td> \
        </tr> \
        <tr> \
          <td> Cookies </td> \
          <td> Homework </td> \
		  <td> sleeping </td> \
        </tr> \
        <tr> \
          <td> <input type="radio" name="dog" value="opt1"> </td> \
          <td> <input type="radio" name="dog" value="opt2"> </td> \
		  <td> <input type="radio" name="dog" value="opt3"> </td> \
        </tr>'}],
		
		
	// Other image type questions 
		
//   //image that needs to be clicked
//   //["image", "Message", {html:'<img src = "https://raw.githubusercontent.com/JorgeOrozcoP/Toronto-Psycholinguistics-Experiments/image/img/149038850760.jpg" />', transfer: "click"}],


//    //image with keypress, was a question that has a correct answer
//    //let hasCorrect: false, if optinion based question
//    ["image", "Message", {html:'<img src = "https://raw.githubusercontent.com/JorgeOrozcoP/Toronto-Psycholinguistics-Experiments/image/img/149038850760.jpg" />', transfer: "keypress"},
//             "Question", {q: "Whats is the dog thinking?", //the answer to this is "Knowlege"
//                           as: ["cookies", "sleeping", "homework", "eating"]}],		

         //Multiple choice question with image options
//     ["image","PictureAccept", {s: "The sentence you want to show",
//                            //specify to press key "A" for image 1 in the as list, etc...
//                            as: [["A","http://s7.postimg.org/sxksy19y3/EDL_Logo1.jpg"],
//                                 ["B","http://s7.postimg.org/sxksy19y3/EDL_Logo1.jpg"],
//                                 ["C","http://s7.postimg.org/sxksy19y3/EDL_Logo1.jpg"],
//                                 ["D","http://s7.postimg.org/sxksy19y3/EDL_Logo1.jpg"]]}]
//

];