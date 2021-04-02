{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    
    interface CoffeeMaker{
        makeCoffee(shot: number): CoffeeCup;
    }


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
            };
        }
        makeCoffee(shots : number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    } 

    //다른 클래스를 상속할려면 extends를 써준다.
    //private로 설정한 컨스트럭터는 public으로 바꿔주거나 상속된클래스에서 사용할 수 있는 protected로 변경해 주어야 한다. 
    class CaffeLatteMachine extends CoffeeMachine{

    }

    const machine = new CoffeeMachine(23);
    const latteeMachine = new CoffeeMachine(23);
    const coffee = latteeMachine.makeCoffee(1);
    console.log(coffee);
    

}