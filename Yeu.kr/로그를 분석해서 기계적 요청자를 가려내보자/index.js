// function solution(weblog) {
//    const weblogArr = weblog.split("\n");
//    var logs = [];
//    weblogArr.forEach((val, index)=>{
//       var logString = val.split(' ');
//       logs[index] = {
//          ip: logString[0],
//          date: Date.parse(val.substring(val.indexOf('[') + 1, val.indexOf(']'))),
//          url: logString[10]
//       }
//    })
//    // console.log(logs[0])
//    // console.log(logs[1])
//    // console.log(logs[2])
//    //아직 하는 중 - 현재 전체 로그 오브젝트로 분리하는것까지 종료, 앞으로 ip, url이 동일한 로그끼리 date분석해서 타임라인의 차가 모두 같으면 리턴해야함
//    console.log(logs);
//    var timeCut = new Map;
//    logs.forEach((val, i)=>{
//       if(!timeCut.has(val.ip)){
//          timeCut.set(val.ip, {
//             nowURL:val.url,
//             nowDate:val.date,
//             cut:0
//          });
//       }
//       else{
//          if(timeCut.get(val.ip).nowURL !== val.url){
//             return;
//          }
//          timecut = val.date - timeCut.get(val.ip).nowDate;
//          console.log("timecut"+ timecut);
//          if(timeCut.get(val.ip).cut!=0){
//             if(timecut != timeCut.get(val.ip).cut){
//                return;
//             }
//          }
//          var nowVal = {
//             nowURL:val.url,
//             nowDate:val.date,
//             cut:timecut
//          }
         
//          timeCut.set(val.ip, nowVal)
//       }
//    })
//    console.log(timeCut.size)
//    timeCut.forEach((val,key)=>{
//       if(val.cut == 0){
//          timeCut.delete(key);
//       }
//    })
//    console.log(timeCut.size)
//    let keys = Array.from( timeCut.keys() );
//    return keys;
// }



//일단 답인데 나중에 해석할것

function solution(weblog) {

   const logs = weblog
   .split('\n')
   .map(str => str.match(/(^[^ ]+)|(\[.+(?=]))|([^"]+(?=" \d))/g)) // /(^[^ ]+)|(\[.+(?=]))|(\/.+(?=HTTP))/g
   .reduce((acc, [ip, time, uri]) => {
      time = +new Date(time.replace('[', ''));
      if (acc[ip]) {
         acc[ip].push({ time, uri });
      } else {
         acc[ip] = [{ time, uri }];
      }

      return acc;
   }, {});

   console.log(logs);

   const result = Object
   .entries(logs)
   .filter(([, uris]) => uris.length > 2)
   .filter(([, uris]) => {
      return uris.filter(({ uri }) => uris[0].uri !== uri).length === 0;
   })
   .filter(([, uris]) => {
      const times = uris.map(e => e.time).sort((a, b) => a - b);

      const diff = times[1] - times[0];
      for (let i = 2; i < times.length; i++) {
         if (times[i] - times[i - 1] !== diff) {
            return false;
         }
      }

      return true;
   })
   .map(([ip]) => ip);

   console.log(result);

   return result;
}

