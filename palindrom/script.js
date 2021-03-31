'use strict!'

const check = document.querySelector('.btn-check');
let returnMessage = document.querySelector('.alert');
let message ;
let checkWord = function(){
    const inputText = document.querySelector('.input').value;
    
    for(i = 0; i < inputText.length; i++){
        if(inputText.charAt(i) === inputText.charAt((inputText.length - 1) - i)){
            message = `${inputText} is a palindrome!`;
        }else{
            message = `${inputText} is not a palindrome!`;
            break
        };
    };
    returnMessage.textContent = message;
};


check.addEventListener('click', checkWord)

document.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        checkWord();
    }
})