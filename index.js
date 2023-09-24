


export default function solution(content){

//1
    const rows = content.split('\n');
  const data = rows.slice(1).map((row) => 
  row.split(',').slice(0, 33).map(el => el.trim())
)
data.splice(-1 , 1)
console.log(`Count: ${data.length}`); 
//2
const probegEpta = data.map(data => data[4])

let probegSumm = 0;

for (let i = 0; i < probegEpta.length; i++) {
  probegSumm += Number(probegEpta[i]);
  
}
let averageProbegEpta = probegSumm / probegEpta.length
console.log(`Средний пробег: ${averageProbegEpta}`)
//3
const cost = data.map(data => Number(data[7]))
const maxCost = Math.max(...cost)
console.log(`Стоимость самой дорогой машины: ${maxCost}`)





}

