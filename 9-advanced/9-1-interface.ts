type PositionType = {
    x: number;
    y: number;
};

interface PositionInterface {
    x: number;
    y: number;
}

//object 형태로 만들수 있음 
const obj1: PositionType = {
    x: 1,
    y: 2,
};

const obj2: PositionType = {
    x: 1,
    y: 2,
};

//class 형태로도 만들 수 가있음 
class Pos1 implements PositionType {
    x: number;
    y: number;
}

class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number; //interface에서 추가로 z를 추가 해 줬기때문에 z도 추가
}

// Extends 상속을 통해 확장을 할 수 있음 
interface ZPositionInterface extends PositionInterface {
    z: number;
}

//intersaction을 이용하여 타입도 묶을 수 있음 
type ZPositionType = PositionType & { z: number };

//only interfaces can be merged.

interface PositionInterface {
    z: number;
}

///xxxx 안됨 
/*
type PositionType{
}
*/

// Type aliases can use computed properties
type Person = {
    name: string,
    age: number,
}
type Name = Person['name']; // string

type Direction = 'left' | 'right'; // interface에선 union type을 생성할 수 없음 
