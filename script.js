var d=document;
var submitButton = d.getElementById("submission");
var students = d.getElementById("students");
var results = d.getElementById("results");
var clicked = 0;

//submit event registration
submitButton.onclick = function () {
  if (clicked == 0) {
    results.className = "hidden";
    results.innerHTML = "";
    var studentArray = inputsToArray(students.children);
    var pairs = randomPairs(studentArray);
    displayResults(pairs);
    results.className = "visible";
  }
  clicked += 1;
  if (clicked == 2) {
    var nope = document.createElement('p')
    nope.innerHTML = "What? You don't like your partner?";
    results.insertBefore(nope, results.firstChild);
  }
}

function inputsToArray (inputs) {
  var arr = [];
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked)
      arr.push(inputs[i].value);
  }
  return arr;
}

function randomPairs (studentsToBePaired) {
  var listOfPairs = [];
  var listOfstudents = studentsToBePaired;
  while (listOfstudents.length > 0) {
    var pair = []
    for (var i = 0; i < 2; i++) {
      var randomNumber = Math.floor((Math.random() * listOfstudents.length));
      var student = listOfstudents[randomNumber];
      pair.push(student);
      listOfstudents.splice(randomNumber, 1)
    }
    listOfPairs.push(pair);
  }
  return listOfPairs;
}

function displayResults(pairsArray) {
  for (var i = 0; i < pairsArray.length; i++) {
    var pair = pairsArray[i];
    if (pair[1] !== undefined){
      var pairHtml = '<p>' + pair[0] + '<br>' + pair[1] + '</p>';
      results.innerHTML += '<div class="pair"> <p>Pair:</p>' + pairHtml + '</div>'; 
    } else {
      var pairHtml = '<p>' + pair[0] + '</p>';
      results.innerHTML += '<div class="pair"> <p>No pairing for you:</p>' + pairHtml + '</div>'; 
      };  
  }
}