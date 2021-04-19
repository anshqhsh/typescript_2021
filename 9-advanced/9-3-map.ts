{
//map Type : 기존의 타입을 이용하면서 다른형태로 바꾸는 것 
type Video = {
    title: string;
    author: string;
    description: string;//타입을 추가 해 주면 VideoOptional에도 선언을 해줘야한다!?
};

[1, 2].map(item => item * item); // [1,4]

//제네릭 : 어떤 타입이든 받아올 수 있음 받아오는 타입을 통해 map을 적용시킬 것 
type Optional<T> = {
    //P라는 것은 T의 모든 키중 하나, P키는 T
    [P in keyof T]?: T[P]; // for...in과 동일 : 오브젝트의 모든 키를 빙글빙글 도는 연산자 
}//기존의 T 오브젝트를 빙글빙글 돌면서 T타입에는 그 키에 해당하는 벨류를 줄수 있음

type ReadOnly<T> = {
    readonly[P in keyof T]: T[P];
}

//Video의 키들을 빙글빙글 돌면서 타이틀을 옵셔널로 만들고 타이틀의 벨류는 스트링 (T[P]])
type VideoOptional =Optional<Video>;

type Animal = {
    name: string;
    age: number;
};
const animal: Optional<Animal> = {
    name: 'dog',
}
animal.name = 'joon';

const video: ReadOnly<Video> = {
    title: 'dd',
    author: 'ss',
    description: 'd'
}

//널이 가능하도록 만드는 타입 
type Nullable<T> = {
    [P in keyof T]: T[P]|null
};
const obj: Nullable<Video> = {
    title: 'hi',
    author: null,
    description: null,
}
//타입에 타입을 입히는 것 
type Proxy<T> = {
    get(): T;
    set(value: T): void;
};
type Proxy<T> = {
    [P in keyof T]: Proxy<T[P]>;
};

// //각 타입이 있어도 없어도 되는 타입을 선언 
// type VideoOptional = { 
//     title?: string;
//     author?: string;
//     description?: string;
// };

// type VideoReadOnly = {
//     readonly title: string;
//     readonly author: string;
//     readonly description: string;
// };
//타입을 변경할때 새로운 인자를 추가 할 때 모든 타입에 변경을 해줘야한다? 너무 불편

}