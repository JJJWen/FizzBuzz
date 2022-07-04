let num_array = [];
var addon = ''

for (let i = 1; i < 101; i++){
    addon = ''
    if (i % 3 == 0){
        addon += 'Fizz'
    }
    if (i % 5 == 0){
        addon += 'Buzz'
    }
    if (addon == ''){
        addon = i
    }
    num_array.push(addon)
};

console.log(num_array)