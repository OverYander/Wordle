// import data from "./words.json" with { type: "json" };

// const {words} = data;
// console.log(words[0]);
// console.log(words[1]);

import fs from 'fs'

fs.readFile('words.json', 'utf8', (err, data) => {
    if(err) {
        console.log('read file error')
        return;
    }

    const allWords = JSON.parse(data).words; 
    // console.log(typeof allWords)
    // console.log(allWords.length)

    
})

/*
node script.mjs
*/