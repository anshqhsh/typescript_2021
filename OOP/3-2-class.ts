{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    //class 내부에 변수를 작성시 let, const, function의 변수는 사용하지 않음 
    class CoffeMaker{
        static BEANS_GRAMM_PER_SHOT: number = 7 //멤버변수 커피 한잔당 7g의 커피빈이 필요, class level로 지정 클래스에 한번 정의만 되면 static을 사용해서 메모리 낭비를 막음 
        coffeBeans: number = 0; // instance(object) level
        
        //constructor(생성자)는 클래스를 가지고 오브젝트 인스턴스를 만들때 호출되는 함수 
        constructor(coffeBeans: number){
            this.coffeBeans = coffeBeans;
        }
        //constructor 대신 함수로 사용 
        static makerMachine(coffeeBeans: number): CoffeMaker{
            return new CoffeMaker(coffeeBeans);
        }

        makeCoffee(shots : number): CoffeeCup {
            //내부의 변수에 접근을 위해 this. 추가 
            if(this.coffeBeans < shots * CoffeMaker.BEANS_GRAMM_PER_SHOT){//class level로 지정한 변수는 클래스. 을 사용하여 지정해야함 
                throw new Error('Not enough coffee beans!');
            }
            this.coffeBeans -= shots * CoffeMaker.BEANS_GRAMM_PER_SHOT;
            return{
                shots: shots,//키와 벨류가 동일하면 생략가능 -> shots,
                hasMilk: false,
            }
        }
        
    }     
    const maker = new CoffeMaker(32); //constructor에서 원하는 양의 coffeeBeans를 전달 maker안에는 커피콩이 32개 들어 있는 것  
    const maker2 = new CoffeMaker(14)
    console.log(maker); //{ BEANS_GRAMM_PER_SHOT: 7, coffeBeans: 32 }
    console.log(maker2);// { BEANS_GRAMM_PER_SHOT: 7, coffeBeans: 32 }동일한 값을 갖는 변수는 오브젝트를 만들때마다 메모리의 낭비가 될 수 있음 
    
    const maker3 = CoffeMaker.makerMachine(3);
    console.log(maker3);
}