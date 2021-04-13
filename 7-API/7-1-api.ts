Array; // interface로 정의 되어 있는 Array 안에 있는 함수를 사용 할 수 있음
const arr = [1,4].map

type Student = {
    passed: boolean;
}

//Array에서 사용가능한 Api인 every는 배열의 모든값이 true일때 true를 리턴 하나라도 false이면 false리턴 
const student: Student[] = [{passed: true}, {passed: true}, {passed: false}];
const result = student.every(student => {
    return student.passed;
});

console.log(result);

class Animal {}
class Cat extends Animal{
    isCat: boolean = true;
}
class Dog extends Animal{
    isDog: boolean = false;
}

//전부다 켓인지 확인
const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
function isCat(animal: Animal): animal is Cat{
    return (animal as Cat).isCat !==undefined; // isCat이 있다면 ->Cat이라는 의미 
}
console.log(animals.every<Cat>(isCat));
