function calc() {
  var array = [];
  var sum = 0;
  var int = 0;
  var nDigits = getByIdNumber('digit');
  var counter = getByIdNumber('digit');
  var even = [];
  var odd = [];
  var oddSum = 0;
  var evenSum = 0;

  //Load Varibles into the Array
  for (var i = 0; i < nDigits; i++) {
    int = prompt("Enter an Integer to load into the Array! " + counter + " integers left!");
    parseInt(int, [10]);
    array.push(int);
    //Sums the Total of all Varibles in the Array
    sum += parseInt(array[i])
    counter--;
  }

  //Seperates even and odd varibles in the Array
  for (var p = 0; p < array.length; p++) {
    //Seperates Odd Integers
    if ((p + 2) % 2 == 0) {
      odd.push(array[p]);
      //Adds All Odd Intgers
      oddSum += parseInt(array[p])
    }
    //Seperates Even Integers
    else {
      even.push(array[p]);
      //Adds Even Integers
      evenSum += parseInt(array[p])
    }
  }
  //Print out Results and Data
  print('output0', 'The content of the Array are: ' + array.join(", "));
  print('even', 'All the even contents in the Array are ' + even.join(", "));
  print('odd', 'All the odd contents in the Array are ' + odd.join(", "));
  print('output', sum);
  print('output1', evenSum);
  print('output2', oddSum);
}

//Reset Screen
function resetV() {
  print('output0', '');
  print('output1', '');
  print('output2', '');
  print('output', '');
  print('even', '');
  print('odd', '');
  getById('digit').value = '';
}

//Gets elements ID from HTML
function getById(x) {
  return document.getElementById(x);
}

//Gets Number Value from Input
function getByIdNumber(x) {
  return parseFloat(document.getElementById(x).value, 10);
}

//Prints
function print(x, message) {
  getById(x).innerHTML = message;
}




//--TODO:
//
//Add Active jQuery so the 'Calculate' Button does not need to be pressed.  Results will be displayed 'live'
//
//Add Basic CSS styling
