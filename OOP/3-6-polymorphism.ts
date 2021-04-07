{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean; // ?: optional 
    };
    
    //인터페이스 : 기존의 자바스크립트에서는 인터페이스라는 개념은 없었음
    //예를 들어 인터페이스는 어떠한 두개의 시스템 사이에 상호작용을 할 수 있게 해주는 
    //일종의 조건, 규약 같은것 
    interface CoffeeMaker{
        makeCoffee(shot: number): CoffeeCup;
    }

    //implements 인터페이스를 구현 할 때 
    //커피메이커를 구현하는 클래스 
    class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT: number = 7 
        private coffeBeans: number = 0; 
        

        public constructor(coffeBeans: number){
            this.coffeBeans = coffeBeans;
        }

        static makerMachine(coffeeBeans: number): CoffeeMachine{
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans<0){
                throw new Error('value for bean should be greater than 0')
            }
            this.coffeBeans += beans
        }

        clean(){
            console.log('clean the machine...');
            
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
            hasSugar: false,
            };
        }
        makeCoffee(shots : number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    } 
    //커피머신을 상속하는 클래스
    //다른 클래스를 상속할려면 extends를 써준다.
    //private로 설정한 컨스트럭터는 public으로 바꿔주거나 상속된클래스에서 사용할 수 있는 protected로 변경해 주어야 한다. 
    class CaffeLatteMachine extends CoffeeMachine{
        constructor(beans: number, public readonly serialNumber: string){//자식클래스에서 생성자를 통해 또다른데이터를 받아오려면 super를 통해 부모클래스에서 필요한 데이터도 받아와야함 
            super(beans);//부모의 데이터를 Super를 통해 입력
        };
        private steamMilk(): void{
            console.log('Steaming some Milk...');
        };
        makeCoffee(shots: number): CoffeeCup{//overwriting - 자식클래스에서 부모클래스 함수를 덮어 쓸 수 있음
            const coffee = super.makeCoffee(shots);//상속하는 부모의 함수를 호출 가능
            this.steamMilk();
            return{
                ...coffee,
                hasMilk: true,
            };
        }
    }
    class SweetCoffeeMaker extends CoffeeMachine{
        //부모 클래스의 함수 makeCoffee를 오버라이팅
        makeCoffee(shots: number): CoffeeCup{
            const coffee = super.makeCoffee(shots); // 커피를 만듦
            return{
                ...coffee,
                hasSugar: true,
            };
        }
    }

    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
    ];
    //다형성의 장점 forEach(돌면서 머신을 받아옴 )
    //내부적으로 구현된 다양한 클래스가 한가지 인터페이스를 구현하거나 동일한 부모클래스를 상속했을때 
    //동일한 함수를 클래스에 구분 없이 공통 api를 호출 할 수 있는 장점을 가짐
    machines.forEach(machine =>{
        console.log('_____________________')
        machine.makeCoffee(1);//인터페이스 CoffeeMaker의 함수만 작동
    });
}