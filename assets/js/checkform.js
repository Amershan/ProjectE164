/**
 * Created by die on 2015.07.08..
 */
function checkForm () {
var returnValue = true;

//reset error messages
document.getElementById('phoneError').innerHTML='';


checkNumber(document.forms["addUser"]["phoneNumber"].value , function (phoneError) {

  if (!!phoneError) {
    //put error message above the input field
    document.getElementById('phoneError').innerHTML=phoneError;
    returnValue = false;
  }

});
return returnValue;
}

function checkNumber(number, callback) {
  var regex = /^\+?[1-9]\d{1,14}$/;
  var nameError = '';
  if(!!number) {

    if (regex.test(number)){
      return callback()
    }
    nameError = 'Not a valid Phone number';
    return callback(nameError)
  }
  return callback(nameError)
}
