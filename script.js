var result = document.getElementById('result')

var checkstring = function () {
    var myString = document.getElementById('textInput').value;
    console.log("text:", myString)

    //regex 
    var condensedString = 
    myString.replace(/[^a-z0-9]/g,'')
    .replace(/[.,\/#!$%\^&\*;:{}=\-–_`~()]/g,'')
    .toLowerCase();
    console.log("no spaces:", condensedString)

 //split, reverse, join
   var reversedString = myString.split('').reverse().join('');


  if (reversedString == condensedString) {
      result.innerHTML = "It's a palidrome!"
  }
else {
    result.innerHTML = "It's not a palidrome!"
}
};