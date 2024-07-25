function isPalindrome(str){
    let rts = ''
    for(let i = 0; i<str.length;i++){
        //reversed string assigned to rts
        rts = rts + str[(str.length-1) - i]
    }
    //Converts to Lowercase to catch capitalization(A vs a)
    //.split(" ") and .join("")removes white spaces
    //compares input str and reversed inpu str
    if (rts.toLowerCase().split(" ").join("") == str.toLowerCase().split(" ").join("")) {
        console.log(str + " is a palindrome!")
        return true
        }    
    else {
        console.log(str + " is not a palindrome!")
        return false
    }
}

isPalindrome("Race Car")
isPalindrome("racecar")
isPalindrome("Not A Palindrome")
isPalindrome("uwU")
isPalindrome("l ol o l")