{
    const obj = {
        name: 'joon',
    }
    obj.name; // joon
    obj['name']; // joon 타입도 인덱스를 기반으로 타입을 정할 수 있음

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    };

    type Name = Animal['name'] // string 타입으로 사용 가능
    const text: Name = 'hello';

    type Gender = Animal['gender']; //'male' | 'female'

    type Keys = keyof Animal // 'name' | 'age' | 'gender' union type으로 할당됨
    const key: Keys = 'gender';

    type Person = {
        name: string;
        gender: Animal['gender'];
    };

    const person: Person = {
        name: 'ellie',
        gender: 'female',
    }

}