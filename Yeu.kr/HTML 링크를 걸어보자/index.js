function solution(article) {
    const art = article.toString();
    const re = /\w\.\w/;
    const split = article.split(" ");
    const sText = `<a href="`;
    const eText = `">클릭</a>`;
    split.forEach((element, index) => {
        if(re.test(element)){
            split[index] = sText + element + eText;
        }
    });
    const result = split.join(" ");
    console.log( result);
 }
 solution(`ษฬ รขมขปษณ หนฃญงฮอ ฑณฃลลงคนซค ชฟวน ฆผฉรค https://rurzkvvar.eyz/jhb/iocc ผทฏพฃพ ท คฮภจฟตผค ฉฐกพบฟฏท กฑธฟพดฅฏฎฃ ย ฃตตฐสป https://gaziqysvv.uvb/dch/tj/ndb วฐปชดยป หมดณฒฉ พศวฟหฌวลฆ ฌงฆฆตฐจนก พถฮฑยห`);
