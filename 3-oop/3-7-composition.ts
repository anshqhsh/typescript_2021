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
        
        //전달받은 MilkFrother, SugarProvider에 따라 커피머신을 작동 
        public constructor(
            coffeBeans: number, 
            private milk: MilkFrother, 
            private sugar: SugarProvider){
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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }
    } 

    //interface를 이용해 일종의 규약처럼 사용 
    //우유를 넣는 인터페이스
    interface MilkFrother{
        makeMilk(cup: CoffeeCup): CoffeeCup;
        
    }
    interface SugarProvider{
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

        //싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrother{
        private steamMilk(): void{
            console.log('Steaming some Milk...');
        };//내부 우유 스팀 동작 
        makeMilk(cup: CoffeeCup): CoffeeCup{//외부에서 사용할 동작 커피컵을 받아 커피컵을 리턴 
            this.steamMilk();
            return{
                ...cup,
                hasMilk: true
            }
        }
    }

    class FancyMilkSteamer implements MilkFrother{
        private steamMilk(): void{
            console.log('Fancy Steaming some Milk...');
        };//내부 우유 스팀 동작 
        makeMilk(cup: CoffeeCup): CoffeeCup{//외부에서 사용할 동작 커피컵을 받아 커피컵을 리턴 
            this.steamMilk();
            return{
                ...cup,
                hasMilk: true
            }
        }
    }

    class ColdMilkSteamer implements MilkFrother{
        private steamMilk(): void{
            console.log('Cold Steaming some Milk...');
        };//내부 우유 스팀 동작 
        makeMilk(cup: CoffeeCup): CoffeeCup{//외부에서 사용할 동작 커피컵을 받아 커피컵을 리턴 
            this.steamMilk();
            return{
                ...cup,
                hasMilk: true
            }
        }
    }

    class NonMilk implements MilkFrother{
        makeMilk(cup: CoffeeCup):CoffeeCup{
            return cup;
        }
    }

    //설탕 제조기
    class CandySugarMixer implements SugarProvider{
        private getSugar(){
            console.log('Getting some sugar from candy 🍬');
            return true;
        }
        addSugar(cup: CoffeeCup): CoffeeCup{
            const sugar = this.getSugar();
            return{
                ...cup,
                hasSugar: sugar,
            }
        }
    }

    class SugarMixer implements SugarProvider{
        private getSugar(){
            console.log('Getting some sugae from jar!!!!!!');
            return true;
        }
        addSugar(cup: CoffeeCup): CoffeeCup{
            const sugar = this.getSugar();
            return{
                ...cup,
                hasSugar: sugar,
            }
        }
    }
    class NoSugar implements SugarProvider{
        addSugar(cup: CoffeeCup):CoffeeCup{
            return cup;
        }
    }



    //Milk
    const cheapMilMAker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NonMilk();
    

    //Sugar
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();
    
    //
    const sweetcandyMachine = new CoffeeMachine(12, noMilk, candySugar);
    const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

    const latteMachine = new CoffeeMachine(12, cheapMilMAker, noSugar);
    const coldlatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
    const sweetCaffeLatteMachine = new CoffeeMachine(
        12,
        cheapMilMAker,
        candySugar
    );


}