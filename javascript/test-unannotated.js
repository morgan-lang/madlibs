var static_words1 = "My fellow ";
var static_words2 = " - ask not what your ";
var static_words3 = " can do for ";
var static_words4 = ". Ask what ";
var static_words5 = " can do for your ";

var button = document.getElementById("submit");

button.addEventListener("click", onClick, false);

function onClick(evt) {
  evt.preventDefault(evt);
  
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5);
}


























