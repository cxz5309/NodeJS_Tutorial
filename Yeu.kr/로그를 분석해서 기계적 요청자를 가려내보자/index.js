function solution(weblog) {
   const weblogArr = weblog.split("\n");
   var logs = [];
   weblogArr.forEach((val, index)=>{
   var logString = val.split(' ');
   logs[index] = {
      ip: logString[0],
      date: Date.parse(val.substring(val.indexOf('[') + 1, val.indexOf(']'))),
      url: logString[10]
   }
   })
   // console.log(logs[0])
   // console.log(logs[1])
   // console.log(logs[2])
   //아직 하는 중 - 현재 전체 로그 오브젝트로 분리하는것까지 종료, 앞으로 ip, url이 동일한 로그끼리 date분석해서 타임라인의 차가 모두 같으면 리턴해야함
   var obj = new Map;
   console.log("conloglen : " + logs.length);
   logs.reduce((acc, curr) => {
      if(!obj.has(curr.ip)){
         obj.set(curr.ip,[curr.url, curr.date, 0]);
        // console.log("없을경우:" + obj.get(curr.ip));
      }
      else{
         if(obj.get(curr.ip)[0]!= curr.url){
            obj.delete(curr.ip);
         }
         else{
            const timeCut = (obj.get(curr.ip)[1] - curr.date)

            if(obj.get(curr.ip)[2] == 0){
               const tmp = obj.get(curr.ip);
               tmp[2] = timeCut;
               obj.set(tmp);
            }
            else{
               if(timeCut != obj.get(curr.ip[2])){
                  cons
                  obj.delete(curr.ip);
               }
            }
         }
      }
   })
   console.log(obj.size);
   

   return [];
}