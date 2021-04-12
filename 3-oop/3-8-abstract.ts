{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean; // ?: optional 
    };
    

    interface CoffeeMaker{
        makeCoffee(shot: number): CoffeeCup;
    }
    //abstract를 붙여주면 이 클래스 자체로 오브젝트를 생성 할 수 없음 
    //부모클래스로서 필요한것을 정의 할 뿐 
    //
    abstract class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT: number = 7 
        private coffeBeans: number = 0; 
        

        public constructor(coffeBeans: number){
            this.coffeBeans = coffeBeans;
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
        
        //abstract클래스로서 자식 클래스에서 protect로 불러 와야함
        //구현사항을 적지 않음 
        protected abstract extract(shots: number): CoffeeCup;

        makeCoffee(shots : number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    } 
    class CaffeLatteMachine extends CoffeeMachine{
        constructor(beans: number, public readonly serialNumber: string){//자식클래스에서 생성자를 통해 또다른데이터를 받아오려면 super를 통해 부모클래스에서 필요한 데이터도 받아와야함 
            super(beans);//부모의 데이터를 Super를 통해 입력
        };
        private steamMilk(): void{
            console.log('Steaming some Milk...');
        };
        protected extract(shots: number): CoffeeCup{
            this.steamMilk();
            return{
                shots,
                hasMilk: true,
            }
        }
        /*
         *기존의 makeCoffe함수를 overWriting 할 필요가 없음 
        makeCoffee(shots: number): CoffeeCup{//overwriting - 자식클래스에서 부모클래스 함수를 덮어 쓸 수 있음
            const coffee = super.makeCoffee(shots);//상속하는 부모의 함수를 호출 가능
            this.steamMilk();
            return{
                ...coffee,
                hasMilk: true,
            };
        }
        */
    }
    class SweetCoffeeMaker extends CoffeeMachine{
        protected extract(shots: number): CoffeeCup{
            return{
                shots,
                hasSugar: true,
            };
        }
        }

    const machines: CoffeeMaker[] = [
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
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