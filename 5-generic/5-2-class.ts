// either: a or b
interface Either<L, R> {
    left: () => L;
    right: () => R;
}

//L, R - 제네릭은 타입을 길게 쓰지 않음 
class SimpleEither<L, R> implements Either<L, R>{
    //left, rightValue를 받음
    constructor(private leftValue: L, private rightValue: R){

    }
    left(): L{
        return this.leftValue
    };
    right(): R{
        return this.rightValue
    };
}
const either: Either<number, number> = new SimpleEither(4,5);
const tmp1 = either.left(); //4
const tmp2 = either.right(); // 5

//object를 받기도 함  
const best = new SimpleEither({name: '???'},'?sd');

console.log(tmp1+";;;;"+tmp2);

//숫자이외에도 특정의 유연한 타입을 받기위해서는 제네릭을 사용해주면 된다. 