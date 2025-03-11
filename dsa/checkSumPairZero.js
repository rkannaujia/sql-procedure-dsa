 let checkSumPairZero = (array)=>{
    let sortedArr = array.sort();
  let set = new Set();
  for( let arr of sortedArr){
      if(set.has(-arr)){
        return [-arr,arr]
      }else{
        set.add(arr)
      }
  }
  return -1;
 }
 let arr = [-5,-4,-3,-2,0,2,4,6,8];
//  console.log(checkSumPairZero(arr));

let checkThreeSumZero = (array)=>{
    let sortedArr = array.sort();
  let set = new Set();
  for( let arr of sortedArr){
      if(set.has(-arr)){
        return [-arr,arr]
      }else{
        set.add(arr)
      }
  }
  return -1;
 }
 