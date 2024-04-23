export const main = (): string => 'Hello World';
function solution(P,Q){
  let length = P.length

let letterMap = {}
  for(let i=0; i<length; i++){
      letterMap[i]= [P[i], Q[i]]
  }

  let numOfDistinct = [];
  backtrack([],0)

  return numOfDistinct.sort((a,b) => a-b)[0]

  function backtrack(arr, index){
      if(arr.length === length){
          let set = new Set(arr)
          numOfDistinct.push(set.size)
          return
      }
      for(let letter of letterMap[index]){
          arr.push(letter)
          backtrack(arr, index + 1)
          arr.pop()
      }
  }

}

solution('abd','sdsds');
console.log(main());
