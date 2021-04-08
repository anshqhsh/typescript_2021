//자료구조
//stack의 규격을 결정
interface Stack { 
    readonly size: number
    push(value: string): void;
    pop(): string;
}

type StackNode = {
    readonly value: string;
    readonly next?: StackNode; //next : StackNode|undefined;
}

//언어 자체에서 제공하는 array를 안쓰고 만들어보기 
//단일 연결리스트를 이용 각각을 노드로 이루어 져있고 head를 통해 데이터를 찾음
class StackImpl implements Stack{
    constructor(private capacity : number){}
    private _size: number = 0;//사이즈를 내부에서 읽을 수 있게 네이밍은 _을 붙여 내부에 size가 있다는 것을 암시 
    private head?: StackNode;
    //내부의 사이즈를 읽을 수 있도록 getter를 생성 
    get size() {
        return this._size;
    }
    push(value: string){
        if(this.size === this.capacity){
            throw new Error('stack is full!')
        }
        const node: StackNode = {value: value, next: this.head} //새로들어온 아이템, head가 가르키고 있는것을 가르킴 
        this.head = node;
        this._size++;
    }
    //head가 가르키고 있는 값을 뽑아야함 헤드가 가르키고 있던 노드를 가리키면 됨 
    pop(): string{ // null == undefined, null !== undefined 
        if(this.head == null){
            throw new Error('stack is empty!');
        }
        const node = this.head //제거할 노드
        this.head = node.next;
        this._size--;
        return node.value;
    }
}

const stack = new StackImpl(10);
stack.push('lee 1');
stack.push('joon 2');
stack.push('hyuk 3');
//while문 true 조건의 반복문
while(stack.size !== 0){
    console.log(stack.pop());
    
}



