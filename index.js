function stringLength(string){
    if( string.length >= 1 && string.length <= 10)
    return string.length;
    else 
    throw new Error('the string is longer than 10 or it is empty')
}

function reverseString(string) {
    return string.split('').reverse().join('');
}


export {stringLength, reverseString};