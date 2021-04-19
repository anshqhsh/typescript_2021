//condition Type 조건이 맞으면 어떤 타입으로 만든다. 

// T라는 타입을 받아와서 T타입이 string 이면 boolean, 아니면 number타입으로 받아온다.
type Check<T> = T extends string? boolean : number;
type Type = Check<string>; //boolean

type TypeName<T> = T extends string
? 'string'
: T extends number    
? 'number'
: T extends boolean    
? 'boolean'
: T extends undefined    
? 'undefined'
: T extends Function    
? 'function'
: 'object';

type T0 = TypeName<string>; 'string'
type T1 = TypeName<'a'>; 'string'
type T2 = TypeName<typeof AAA>; 'function'

function AAA() {
}