let greet = (name)=>{
    console.log(`Good morning ${name}`)
}

let reverseString = (str)=>{
    let temp = '';
    return str
    // for(let i=str.length-1; i>=0; i--){
    //     temp += str.charAt(i);
    // }
    // return temp;
}

module.exports={greet,reverseString};