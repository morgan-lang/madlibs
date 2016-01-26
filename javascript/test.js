//My quote. Note that the words marked by asterisks (*) are the variables the user will be changing

//"My fellow *Americans*, ask not what your *country* can do for *you* —ask what *you* can do for your *country*." -John F. Kennedy

//Here are the static parts of the quote. We're explicitly defining the stuff that isn't going to change in this list. Note the inclusion of spaces and punctuation.

var static_words1 = "My fellow ";
var static_words2 = " - ask not what your ";
var static_words3 = " can do for ";
var static_words4 = ". Ask what ";
var static_words5 = " can do for your ";

//Below, we've made a variable that is used as a reference to your form button
//we use the unique ID attribute to do this
//This is the "DOM method", or "accessing the DOM." Recall that DOM = Document Object Model. From Wikipedia: "The Document Object Model (DOM) is a cross-platform and language-independent convention for representing and interacting with objects in HTML, XHTML, and XML documents. The nodes of every document are organized in a tree structure, called the DOM tree."

var button = document.getElementById("submit");

//Because, as it says above, we're getting the element by it's id name, we  know that it's working with the id="submit" input in the html document.

//Now we'll reference the button we just created ("var button") and link that button to a scripted action that we want to occur when someone clicks on it. This event listener does just that: waits for the specified event to occur and then performs the scripted action.

button.addEventListener("click", onClick, false);

//Note that word onClick above is a "function" which we will subsequently define and then script below:

function onClick(evt)
{
  evt.preventDefault(evt);
  //The above line prevents the form from submitting in the default manner by explicitly preventing it.
  
  //Dealing with the form. What we're doing here on each line is defining variables (element1, element 2, etc.) by pointing to the entire form ("form1") first, then reching into that form and grabbing values that come from item elements of that form. These items are the drop-down lists in sequential order. So element 1 = item 0 within that form, which is the value the script gets from that drop-down menu.
  
  //Then we concatenate everything together and show it in the console by using console.log + static + variables + static + variables, etc.
  
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5);
  //document.getElementById("form1").elements.item(0).value;
  //return false;
}


























