const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var finished = false;

readline.question("Enter maximum value: ", upper_num => {


    let num_array = [];
    let addon = []



    for (let i = 1; i < upper_num; i++){
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
        let found = false
        if (i % 13 === 0 && addon.length != 0){
            for (let j = 0; j < addon.length; j++){
                found = false
                if (addon[j].charAt(0) === 'B'){
                    found = true
                    addon[j] = "Fezz" + addon[j]
                }
                if (found === true){
                    break
                }
            }
        }
        if (i % 13 == 0 && found == false){
            addon.push("Fezz") 
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
/*    console.log(num_array[194])
    console.log(num_array[254])
    console.log(num_array[142])*/
    finished = true

    readline.close();

    if (finished === true){
        process.exit()
    };
});


