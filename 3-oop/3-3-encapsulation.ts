{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    // 정보를 은닉하기 위해서 
    //public, private, protected(상속한 메소드에서는 접근 가능)를 사용 할 수 있다. 
    //따로 작성을 하지 않으면 기본적으로 public으로 되어 있음 
    class CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT: number = 7 //멤버변수 커피 한잔당 7g의 커피빈이 필요, class level로 지정 클래스에 한번 정의만 되면 static을 사용해서 메모리 낭비를 막음 
        private coffeeBeans: number = 0; // instance(object) level
        
        //constructor(생성자)는 클래스를 가지고 오브젝트 인스턴스를 만들때 호출되는 함수 
        private constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }
        //constructor 대신 함수로 사용 
        static makerMachine(coffeeBeans: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans<0){
                throw new Error('value for bean should be greater than 0')
            }
            this.coffeeBeans += beans
        }

        makeCoffee(shots : number): CoffeeCup {
            //내부의 변수에 접근을 위해 this. 추가 
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){//class level로 지정한 변수는 클래스. 을 사용하여 지정해야함 
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return{
                shots: shots,//키와 벨류가 동일하면 생략가능 -> shots,
                hasMilk: false,
            }
        }
    }     
    const maker = CoffeeMaker.makerMachine(32); //constructor에서 원하는 양의 coffeeBeans를 전달 maker안에는 커피콩이 32개 들어 있는 것  
    maker.fillCoffeeBeans(32);
    //maker.coffeBeans = -35 // invalid

    //getter&setter
    class User {
        get fullName(): string {
        
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        get age(): number {
        
            return this.internalAge;
        }
        set age(num: number){
            if(num < 0){
                
            }
            this.internalAge = num;
        } 
        //컨스트럭터를 통해 이름을 받아옴
        constructor(private firstName: string, public lastName: string){
        }
    }
    const user = new User('Steve', 'Jobs');
    user.age = 6;
    console.log(user.fullName);//멤버변수처럼 접근해야함 
}