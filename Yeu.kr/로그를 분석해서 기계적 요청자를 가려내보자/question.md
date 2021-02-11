## 로그를 분석해서 기계적 요청자를 가려내보자

JS의 solution 함수의 인자로써 아래의 내용이 주어집니다   
타입은 문자열이며 내용은 어떤 웹서버의 가상의 로그기록입니다   

이 웹서버에는 여러 사람들이 접속을 하며 접속할때마다 로그가 아래와 같이 남지요   
그런데 접속중에는 기계적 방법을 이용해서 접속하는 건들이 있습니다   
기계적 접속의 특징은 일정한 간격을 두고 접속하며, 접속할 때 마다 같은 경로를 요청합니다   

이 기계적으로 접속하는 봇의 IP주소들을 다음과 같이 배열로 리턴하도록 solution 함수를 만들어주세요   

리턴의 모습   

>["192.168.0.159","192.168.0.188","192.168.0.236","192.168.0.101","192.168.0.166"]   

인자의 모습

> 192.168.0.174 - - [Sun Sep 13 2020 21:27:26 GMT+0900] "GET /sms/index.php HTTP/1.1" 200   
192.168.0.176 - - [Sun Sep 13 2020 21:28:24 GMT+0900] "GET /resource/wall.jpg HTTP/1.1" 200   
192.168.0.158 - - [Sun Sep 13 2020 21:29:16 GMT+0900] "GET /resource/icon.png HTTP/1.1" 200   
192.168.0.194 - - [Sun Sep 13 2020 21:29:23 GMT+0900] "GET /resource/wall.jpg HTTP/1.1" 200   
192.168.0.175 - - [Sun Sep 13 2020 21:30:27 GMT+0900] "GET /resource/wall.jpg HTTP/1.1" 200   
192.168.0.158 - - [Sun Sep 13 2020 21:31:37 GMT+0900] "GET /admin/setup HTTP/1.1" 200   
192.168.0.123 - - [Sun Sep 13 2020 21:32:28 GMT+0900] "GET /robots.txt HTTP/1.1" 200   
192.168.0.208 - - [Sun Sep 13 2020 21:32:28 GMT+0900] "GET /robots.txt HTTP/1.1" 200   
192.168.0.190 - - [Sun Sep 13 2020 21:32:32 GMT+0900] "GET /robots.txt HTTP/1.1" 200   
192.168.0.189 - - [Sun Sep 13 2020 21:34:09 GMT+0900] "GET /admin/setup HTTP/1.1" 200   
192.168.0.164 - - [Sun Sep 13 2020 21:34:45 GMT+0900] "GET /sms/index.php HTTP/1.1" 200   
192.168.0.196 - - [Sun Sep 13 2020 21:34:45 GMT+0900] "GET /admin/setup HTTP/1.1" 200   
192.168.0.125 - - [Sun Sep 13 2020 21:36:23 GMT+0900] "GET /cgi-bin/index.cgi HTTP/1.1" 200   
192.168.0.247 - - [Sun Sep 13 2020 21:37:32 GMT+0900] "GET /cgi-bin/index.cgi HTTP/1.1" 200   
192.168.0.116 - - [Sun Sep 13 2020 21:37:48 GMT+0900] "GET /js/jmin.js HTTP/1.1" 200   
192.168.0.151 - - [Sun Sep 13 2020 21:38:16 GMT+0900] "GET /resource/photo.jpg HTTP/1.1" 200   
192.168.0.163 - - [Sun Sep 13 2020 21:39:07 GMT+0900] "GET /resource/photo.jpg HTTP/1.1" 200   
192.168.0.175 - - [Sun Sep 13 2020 21:39:45 GMT+0900] "GET /js/jmin.js HTTP/1.1" 200   
192.168.0.143 - - [Sun Sep 13 2020 21:40:30 GMT+0900] "GET /resource/bg.jpg HTTP/1.1" 200   
192.168.0.130 - - [Sun Sep 13 2020 21:41:18 GMT+0900] "GET /admin HTTP/1.1" 200...   
...   
...   
이하생략   


