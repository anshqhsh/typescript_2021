const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);//x, y가 동일한 proto를 상속하기 때문 

const array = [];
console.log(array); 

function CoffeMachine(beans) {
    this.beans = beans;//전달받은 beans
    //shots을 받는 함수
    /**
    //이 함수는 만들어지는 인스턴스(오브젝트) 마다 포함이 되어서 Instance member level
    this.makeCoffee = (shots) =>{
        console.log('making....');
    }
    */
}
//prototype member level로 변경
CoffeMachine.prototype.makeCoffee = (shots) => {}//한번만 정의할 수 있음
const machine1 = new CoffeMachine(10); //beans라는 프로퍼티(필드), makeCoffe함수를 가지고 있음
const machine2 = new CoffeMachine(20);

console.log(machine1);
console.log(machine2);

function LatteMachine(milk){
    this.milk = milk;
}
//prototype을 이용 하여 커피머신의 프로토타입을 이용 할 수 있다.
LatteMachine.prototype = Object.create(CoffeMachine.prototype)
const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee // 함수를 이용 가능 