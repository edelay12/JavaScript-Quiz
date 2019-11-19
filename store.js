const STORE = {
  questions: [
    //1
    {
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Adobe", "Google", "ECMA"],
      answer: "Netscape"
    },
    //2
    {
      question: "What does NaN stand for?",
      options: ["Null", "Not a Numeric", "Not a Number", "New add Number"],
      answer: "Not a Number"
    },
    //3
    {
      question:
        "Which built-in method combines the text of two strings and returns a new string?",
      options: ["append()", "concat()", "attach()", "None of the above"],
      answer: "concat()"
    },
    //4
    {
      question:
        "The external JavaScript file must contain 'script' tag. True or False?",
      options: ["True", "False"],
      answer: "False"
    },
    //5
    {
      question:
        "Which of the following is not a valid JavaScript variable name?",
      options: [
        "2names",
        "_first_and_last_names",
        "FirstAndLast",
        "None of the above"
      ],
      answer: "2names"
    },
    //6
    {
      question: "What would be the result of 2+5+”3″?",
      options: ["Error", "73", "7 '3'", "10"],
      answer: "73"
    },
    {
      question: "How do you empty an Array in JavaScript?",
      options: [
        "arrayList = []",
        "arrayList.length = 0;",
        "arrayList.splice(0, arrayList.length);",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "Which of the following is not a data type in JavaScript?",
      options: ["Object", "Number", "Symbol", "Defined"],
      answer: "Defined"
    },
    {
      question: "Which of the following is not a reserved word in JavaScript?",
      options: ["interface", "throws", "program", "short"],
      answer: "program"
    },
    {
      question:
        "Which built-in method returns the characters in a string beginning at the specified location?",
      options: ["substr()", "getSubstring()", "slice()", "None of the above"],
      answer: "substr()"
    },
    {
      question:
        "Which of the following function of String object returns the primitive value of the specified object.",
      options: [
        "toLocaleUpperCase()",
        "toUpperCase()",
        "toString()",
        "valueOf()"
      ],
      answer: "valueOf()"
    },
    {
      question:
        "Which of the following function of Array object sorts the elements of an array?",
      options: ["toSource()", "sort()", "toString()", "unshift()"],
      answer: "sort()"
    },
    {
      question: "Javascript is a _________ language?",
      options: ["Scripting", "Application", "Programming", "None of the above"],
      answer: "Scripting"
    },
    {
      question: "JavaScript is designed for which of the following purpose?",
      options: [
        "Style HTML Pages",
        "Execute Query Related to DB on Server",
        "Perform Server Side Scripting Opertion",
        "Add interactivity to HTML Pages"
      ],
      answer: "Add interactivity to HTML Pages"
    },
    {
      question:
        "Which of the following is the correct syntax to display “message” in an alert box using JavaScript?",
      options: [
        "alertbox('message')",
        "msg('message')",
        "msgbox('message')",
        "alert('message')"
      ],
      answer: "alert('message')"
    }
  ]
};
let curQuestion = 0;
let score = 0;

let questionHTMLform = `
<form id=quizForm>
        <fieldset class="mainQarea">
            <div class= "qHTML"> </div>
            <div class="answerHTML"></div>
            <button type="submit" class="submitButton" value="Submit">Submit</button>
            <button type="button" class="nextButton"  id="nextButton" value="Submit">Next</button>       
        </fieldset>      
</form>
`;
