let num_array = [];
let addon = []

for (let i = 1; i < 196; i++){
    addon.length = 0
    if (i % 3 === 0){
        addon.push('Fizz')
    }
    if (i % 5 === 0){
        addon.push('Buzz')
    }
    if (i % 7 === 0){
        addon.push('Bang')
    }
    if (i % 11 === 0){
        addon = ['Bong']
    }
    if (i % 13 === 0 && addon.length != 0){
        addon = addon.map(element => element.charAt(0) === 'B' ? 'Fezz' + element : element)
    } else if (i % 13 === 0 && addon.length === 0){
        addon = ['Fezz']
    }
    if (i % 17 === 0){
        addon.reverse()
    }
    //console.log(addon)
    if (addon.length === 0){
        addon = [i.toString()]
        //console.log('Hello')
    }
    num_array.push(addon.join(''))
};

console.log(num_array)
