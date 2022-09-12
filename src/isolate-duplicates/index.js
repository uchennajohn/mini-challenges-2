function isolateDuplicates(text) {
    let result = [];
    let status = false;
    let count = 0
    for(let i=0; i<text.length;i++){
        if(result[result.length-1] === result[result.length-2] && text[i] === result[result.length-1] && status === false){
            result.push('[');
            status = true;
        }
        result.push(text[i])
        if(status && text[i] !== text[i+1]){
            result.push(']');
            count++
            status = false
        }
       
    }

    let output =[]
    output.push(result.join(''),count)
    return output




}

module.exports = isolateDuplicates;
