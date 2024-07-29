function convertToVowels(str){
    let vowels = ''
    for (let i = 0; i < str.length; i++){
        //iterates all characters and appends to var vowel if current char is a vowel
        //.toLowerCase used to catch capital letters
        if (str.toLowerCase()[i] == 'a' ||
            str.toLowerCase()[i] == 'e' ||
            str.toLowerCase()[i] == 'i' ||
            str.toLowerCase()[i] == 'o' ||
            str.toLowerCase()[i] == 'u'
        ) {
                vowels = vowels + str[i]
        }
    }

    return vowels

}

console.log(convertToVowels("ASDFGHIOU"))
console.log(convertToVowels("thisissomeword"))
console.log(convertToVowels("thIs is A tEsT sEntencE"))