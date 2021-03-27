//다시 풀 것
function solution(string, start, length) {
    if (start >= string.length || length <= 0) return ""
 
    const end = start + length
    const limit = end >= string.length ? string.length : end
    
    let answer = "";
 
    for (let i = start; i < limit; i++) {
       answer += string[i]
    }
 
    return answer;
 }