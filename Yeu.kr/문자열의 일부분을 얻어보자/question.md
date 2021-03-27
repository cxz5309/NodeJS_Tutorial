## 문자열의 일부분을 얻어보자

solution 함수의 string인자로 랜덤한 문자열이 인자로 주어집니다.

start, length 로는 각각 숫자가 주어지게 되는데


예를 들어

>> sting 에 "hello world",
>> start 에 3,
>> length 에 6 이 주어지게 된다면

solution함수는 "lo wor" 세번째 위치부터 여섯 글자를 리턴하도록 만들어주세요

또 예를 들어

>> sting 에 "hello world",
>> start 에 3,
>> length 에 600 이 주어지게 된다면

solution함수는 "lo world" 를 리턴하면 됩니다

start가 string의 길이와 같거나 크거나 length가 0과 같거나 작다면 ""를 리턴해주세요

start값으로써 음수가 주어지지는 않습니다

정규표현식 혹은 trim등을 비롯한 String관련, 그리고 Array관련 자바스크립트 기본 함수들은 사용할 수 없습니다