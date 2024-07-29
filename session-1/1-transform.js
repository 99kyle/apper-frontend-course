function transform(nums){
    //returns sorted and squared array
    return nums.sort().map(num => num*num)
}

const nums = [4,9,5,3,8]
console.log(transform(nums))