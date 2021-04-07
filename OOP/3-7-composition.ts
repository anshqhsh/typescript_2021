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

    //설탕 제조기
    class CandySugarMixer{
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

    class SugarMixer{
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

    //defendency injection : 외부로부터 필요한 것을 주입 받아 가져올것
    class CaffeLatteMachine extends CoffeeMachine{
        constructor(beans: number, public readonly serialNumber: string, private milkFrother: MilkFrother){//자식클래스에서 생성자를 통해 또다른데이터를 받아오려면 super를 통해 부모클래스에서 필요한 데이터도 받아와야함 
            super(beans);//부모의 데이터를 Super를 통해 입력
        };
        
        
        makeCoffee(shots: number): CoffeeCup{//overwriting - 자식클래스에서 부모클래스 함수를 덮어 쓸 수 있음
            const coffee = super.makeCoffee(shots);//상속하는 부모의 함수를 호출 가능
            return this.milkFrother.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine{
        constructor(beans: number ,private sugar: SugarProvider){
            super(beans);//상속한 자식에서는 부모의 값을 super로 받아옴 
        }
        getSugar(){
            console.log('Getting some sugar');
        }
        //부모 클래스의 함수 makeCoffee를 오버라이팅
        makeCoffee(shots: number): CoffeeCup{
            const coffee = super.makeCoffee(shots); // 커피를 만듦
            //설탕을 얻어올수 있는 컴포지션을 받아와서 설탕을 넣어 주게 작동시킴 
            return this.sugar.addSugar(coffee);
        }
    }

    class SweetCaffeLatteMachine extends CoffeeMachine{
        constructor(private beans: number, 
            private milk: MilkFrother, 
            private sugar: SugarProvider
        ) {
            super(beans);
        }
        //오버라이팅
        makeCoffee(shots: number): CoffeeCup{
            const coffee = super.makeCoffee(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }
    }

    //Milk
    const cheapMilMAker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    
    //Sugar
    const candySuger = new CandySugarMixer();
    const sugar = new SugarMixer();
    
    //
    const sweetcandyMachine = new SweetCoffeeMaker(12, candySuger);
    const sweetMachine = new SweetCoffeeMaker(12, sugar);

    const latteMachine = new CaffeLatteMachine(12, 'SS', cheapMilMAker);
    const coldlatteMachine = new CaffeLatteMachine(12, 'SS', coldMilkMaker);
    const sweetCaffeLatteMachine = new SweetCaffeLatteMachine(
        12,
        cheapMilMAker,
        candySuger
    );


}