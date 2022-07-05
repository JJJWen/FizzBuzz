const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var finished = false;

readline.question("Enter maximum value: ", upper_num => {
    readline.question("For the numbers [3, 5, 7, 11, 13, 17] type Y or N for each one (e.g. YNYNYN): ", combination => {
        if (combination.length != 6){
            console.error("Invalid number of entrie: Need 6 entries!")
            process.exit()
        }
        
        for (let k = 0; k < combination.length; k++){
            if (combination[k] != 'Y' && combination[k] != 'N'){
                console.error("Invalid entry registered: Make sure entries are capitalised!")
                process.exit()
            }
        }


        let num_array = [];
        let addon = []



        for (let i = 1; i < upper_num; i++){
            addon.length = 0
            if (i % 3 === 0 && combination[0] === 'Y'){
                addon.push('Fizz')
            }
            if (i % 5 === 0 && combination[1] === 'Y'){
                addon.push('Buzz')
            }
            if (i % 7 === 0 && combination[2] === 'Y'){
                addon.push('Bang')
            }
            if (i % 11 === 0 && combination[3] === 'Y'){
                addon = ['Bong']
            }
            let found = false
            if (i % 13 === 0 && addon.length != 0 && combination[4] === 'Y'){
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
            if (i % 13 == 0 && found == false && combination[4] === 'Y'){
                addon.push("Fezz") 
            }
            if (i % 17 === 0 && combination[5] === 'Y'){
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
    readline.close();
    });
});


