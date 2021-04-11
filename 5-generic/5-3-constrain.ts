interface Employee{
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay(){
        console.log(`full time!!`);
    }
    workFullTime(){

    }
}

class PartTimeEmployee implements Employee{
    pay(){
        console.log(`part time!!`);
    }
    workPartTime(){
            
    }
}

//세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 좋지않음
function payBad(employee: Employee): Employee{
    employee.pay();
    return employee;
}

//제네릭에 constrains를 달아줄 수 있다 - 제한적인 범위내에서 제네릭을 이용 할 수 있음 
function pay<T extends Employee>(employee: T): T{
    employee.pay
    return employee;
}

const joon = new FullTimeEmployee();
const hyuk = new PartTimeEmployee();

joon.workFullTime();
hyuk.workPartTime();

const joonAfterPay = pay(joon);//그냥 employ정보만 존재 fulltimeEmploy였던 정보를 잃게 되어있음, as를 이용하여 무조건적으로 캐스팅하여 할당을 해야 내부함수 이용이 가능함 -> 좋지않아 제네릭을 사용 
const hyukAfterPay = pay(hyuk);

const obj = {
    name: 'lee',
    age: 32
};

const obj2 = {
    animal: 'animal',
};

console.log(getValue(obj, 'name')); // lee
console.log(getValue(obj, 'age')); // 32
console.log(getValue(obj2, 'animal'));

//keyof X(type) X안에 있는 키를 의미
//오브젝트의 어떤 타입을 받아서 T안의 K키를 받아 T가 가르키는 벨류 타입을 의미
function getValue<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key];
}
