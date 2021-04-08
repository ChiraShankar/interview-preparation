function palindrome(str) {
var r = str.replace(/[^A-Za-z0-9]/g, '').toLocaleLowerCase().split("").reverse().join('');
  if(str.replace(/[^A-Za-z0-9]/g, '').toLocaleLowerCase() == r){
  
  return true;
}  
else{
      return false;
  }
}

palindrome("eye");