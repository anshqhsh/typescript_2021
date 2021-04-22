console.log(this);//브라우저에서 윈도우가 글로벌 객체

function simpleFunc(){
    console.log(this);
}
simpleFunc(); //window
console.clear();

class Counter {
    count = 0;
    increase = () => {
        console.log(this);//Counter
    }
}

const counter = new Counter();
counter.increase();

//카운터에 있는 increase는 counter를 this를 받고 있었으나 const로 지정을 해서 this를 잃게됨(window엔 const가 지정되어 있지 않음ㅁ)
//bind(counter)로 counter를 this로 받을 수 있게한다
const caller = counter.increase.bind(counter);
caller();

class Bob {

}
const bob = new Bob(); //인스턴스를 생성
bob.run = counter.increase;
bob.run();