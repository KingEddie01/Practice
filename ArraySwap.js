function arraySwap(score){
    let temp = score[0];
    score[0] = score[score.length-1];
    score[score.length-1] = temp;

  console.log(score);
}
const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    arraySwap(items);
const word = ['hi','hello','good'] ;
  arraySwap(word);   