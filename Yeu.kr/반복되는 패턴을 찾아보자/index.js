function solution(str) {
    var slide = str[0].toString();
    str = str.toString();
    for(let i=1;i<str.length;i++){
        if(slide[0] == str[i]){
            if(verify(slide, str, i)){
                return slide;
            }
            else{
                slide = slide + str[i];
                continue;
            }
        }
        else{
            slide = slide + str[i];
        }
    }
    return str;
}

function verify(slide, str, startIndex){
    const slideLen = slide.length;
    const lastIndex = startIndex + slideLen;
    const strLen = str.length;
    console.log("0: "+slide);
    console.log("1: "+slideLen);
    console.log("2: "+startIndex);
    console.log("3: "+strLen);
    if(startIndex == strLen){
        console.log("최종")
        return true;
    }
    sub = str.substring(startIndex, startIndex + slideLen)
    if(slide == sub){
        console.log("재귀");
        if(verify(slide, str, lastIndex) == true){
            return true;
        }
    }
    return false;
}
console.log(solution("ABCDoABCDoABCDo"));