const capitalizeFirstLetterOfWord = (word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const capitalizeFirstLetterOfSentences = (sentence)=>{
    const words = sentence.split(" ")
    let response = ""
    words.map(word=>response+=`${capitalizeFirstLetterOfWord(word)} `)
    return response
}

console.log(capitalizeFirstLetterOfSentences("DENEME DENEME DENEME"))