function reverseString(str){
    let splitString= str.split("");
    let reverseArray= splitString.reverse();
    let joinArray= reverseArray.join("");
    return joinArray;
}

function palindromeCheck(){
    let msg= document.getElementById("msg").value;
    let ans= document.getElementById("answer");
    if(msg==""){
        alert("Please enter my string");
    }
    else{
        msg=msg.toLowerCase();
        if(msg==reverseString(msg)){
            ans.innerHTML= "It is Palindrome";
        }
        else{
            ans.innerHTML= "It is not Palindrome";
        }
    }
}
