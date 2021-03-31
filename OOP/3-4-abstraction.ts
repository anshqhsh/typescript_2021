{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    
    //interface는 일종의 규약서 같은 것 -> 어떤 행동을 할것이라 계약해놓는 것 
    //구현하는 클래스에서는 interface에서 사용하는 모든 함수를 구현해 줘야한다.
    interface CoffeeMaker{
        makeCoffee(shot: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT: number = 7 //멤버변수 커피 한잔당 7g의 커피빈이 필요, class level로 지정 클래스에 한번 정의만 되면 static을 사용해서 메모리 낭비를 막음 
        private coffeBeans: number = 0; // instance(object) level
        
        //constructor(생성자)는 클래스를 가지고 오브젝트 인스턴스를 만들때 호출되는 함수 
        private constructor(coffeBeans: number){
            this.coffeBeans = coffeBeans;
        }
        //constructor 대신 함수로 사용 
        static makerMachine(coffeeBeans: number): CoffeeMachine{
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans<0){
                throw new Error('value for bean should be greater than 0')
            }
            this.coffeBeans += beans
        }

        private grindBeans(shots: number){
            console.log(`grinding beans for ${shots}`);
            
            if(this.coffeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT){//class level로 지정한 변수는 클래스. 을 사용하여 지정해야함 
                throw new Error('Not enough coffee beans!');
            }
            this.coffeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(){
            console.log('heeting up...');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shoots...`);
            return{
            shots,            
            hasMilk: false,
            };
        }
        makeCoffee(shots : number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    } 

    const maker: CoffeeMachine = CoffeeMachine.makerMachine(32); //constructor에서 원하는 양의 coffeeBeans를 전달 maker안에는 커피콩이 32개 들어 있는 것  
    maker.fillCoffeeBeans(32);
    
    //추상화는 인터페이스를 사용자들이 헷갈리지 않도록 간단하게 만들어 사용하도록 하는 것 
    //추상화방법(encapsulation) -> interface, 외에 도 다양한 방법이 있음
    //호출하면 안되는 함수앞에 private를 쓰면 된다. -> 필요한 함수만 노출 하는 것.
    maker.fillCoffeeBeans(43);
    maker.makeCoffee(2);

    const maker2: CoffeeMaker = CoffeeMachine.makerMachine(32); //constructor에서 원하는 양의 coffeeBeans를 전달 maker안에는 커피콩이 32개 들어 있는 것  
    //maker2.fillCoffeeBeans(32);//인터페이스에 없는 함수는 사용할 수 없다.
    maker2.makeCoffee(2);
}