{
interface Stack<T> { 
    readonly size: number
    push(value: T): void;//push하면 T타입을 전달
    pop(): T;//pop을 하면 T타입을 리턴
}

type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>; //next : StackNode|undefined;
}

//언어 자체에서 제공하는 array를 안쓰고 만들어보기 
//단일 연결리스트를 이용 각각을 노드로 이루어 져있고 head를 통해 데이터를 찾음
class StackImpl<T> implements Stack<T>{
    constructor(private capacity : number){}
    private _size: number = 0;//사이즈를 내부에서 읽을 수 있게 네이밍은 _을 붙여 내부에 size가 있다는 것을 암시 
    private head?: StackNode<T>;
    //내부의 사이즈를 읽을 수 있도록 getter를 생성 
    get size() {
        return this._size;
    }
    push(value: T){
        if(this.size === this.capacity){
            throw new Error('stack is full!')
        }
        const node = {value: value, next: this.head} //새로들어온 아이템, head가 가르키고 있는것을 가르킴 
        this.head = node;
        this._size++;
    }
    //head가 가르키고 있는 값을 뽑아야함 헤드가 가르키고 있던 노드를 가리키면 됨 
    pop(): T{ // null == undefined, null !== undefined 
        if(this.head == null){
            throw new Error('stack is empty!');
        }
        const node = this.head //제거할 노드
        this.head = node.next;
        this._size--;
        return node.value;
    }
}

const stack2 = new StackImpl<number>(10);
stack2.push(22222);
stack2.push(3333);
stack2.push(555555);
//while문 true 조건의 반복문
while(stack2.size !== 0){
    console.log(stack2.pop());
    
}



}