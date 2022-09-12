

//   { "1": ["C"], "2": ["A", "B", "D"] }

function removeDuplicates(obj) {
    let objKeys = Object.keys(obj)
    console.log('OBJKEYS',objKeys)
    let sortKeys = objKeys.sort((a,b) => b-a);
    let removeDuplicatesObj = {};
    let letterChecker = {};
    //This loop through the input object
    for(let i =0; i < sortKeys.length; i++) {
        let letterArr = [];
        // This loops through the value of the object i.e arrays
        for(let j=0; j < obj[sortKeys[i]].length; j++) {
            if(!letterChecker[obj[sortKeys[i]][j]]){
                letterChecker[obj[sortKeys[i]][j]] = true;
                letterArr.push(obj[sortKeys[i]][j])
            }
        }
        removeDuplicatesObj[sortKeys[i]] = letterArr;
    }

    return removeDuplicatesObj;

}



module.exports = removeDuplicates;
