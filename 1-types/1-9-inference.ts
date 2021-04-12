/**
 * Type Inference
 * 자동으로 타입이 결정 나는 것
 * 원시타입에서는 써도 되나 함수에서는 오류가 날 수 있음 
 */
let text = 'hello';
text = 'joonhyuk' // string 으로 타입을 유추(inference)
function print(message = 'hello') {//...경고 메세지 
  console.log(message);
}
print('hello');

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);

console.log(result); //3 
