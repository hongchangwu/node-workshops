var nums = process.argv.slice(2)
var sum = nums.reduce(function(s, a) {
    return s + Number(a)
}, 0)
console.log(sum)
