function reverse(word){
    let drow = ''
    let last = word.length - 1
    for(let i = 0; i<word.length;i++){
        //appends each character to drow in reverse order
        drow = drow + word[last - i]
    }
    return drow
}

console.log(reverse("word")) // drow

const word = 'hello'
const reverseword = reverse(word)
console.log(reverseword) // 'olleh'