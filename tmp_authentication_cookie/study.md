# 그냥 정리
### 강의출처 : https://opentutorials.org/course/3400/21836
### express-session : https://www.npmjs.com/package/express-session
## session옵션
- secret 옵션 : 세션 암호화, 암호키는 숨겨놓기
- ressavd 옵션 : false / 세션 데이터가 바뀌기 전까지는 저장소에 저장하지 않는다(false)/항상 저장한다
- saveUninitialized 옵션 : true / 세션이 필요하기 전까지는 세션에 구동시키지 않는다(true)
- store 옵션 : new FileStore() / 세션값을 저장하는 장소, Compatible Session Stores에서 필요한 저장소 패키지를 다운하여 사용. 현재는 session-file-store(파일로 저장)

## session 미들웨어 기능
- req 객체의 프로퍼티로 session을 추가해준다

### 사용자의 페이지뷰를 확인해주는 방법
  
```
app.get('/', function (req, res, next) {
    console.log(req.session);
    if(req.session.num === undefined){
        req.session.num = 1;
    } else {
        req.session.num =  req.session.num + 1;
    }
    res.send(`Views : ${req.session.num}`);
})
```

__아무 설정도 하지 않았을 경우__  
session은 메모리에 저장된다  
: 서버를 껐을 때 모든 사용자가 로그아웃된다  

### Compatible Session Stores
세션값을 저장하는 방법

