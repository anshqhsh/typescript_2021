{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    const BEANS_GRAMM_PER_SHOT: number = 7 // 커피 한잔당 7g의 커피빈이 필요 

    let coffeBeans: number = 0;
    function makeCoffee(shots : number): CoffeeCup {
        if(coffeBeans < shots * BEANS_GRAMM_PER_SHOT){
            throw new Error('Not enough coffee beans!');
        }
        coffeBeans -= shots * BEANS_GRAMM_PER_SHOT;
        return{
            shots: shots,//키와 벨류가 동일하면 생략가능 -> shots,
            hasMilk: false,
        }
    }
    
    coffeBeans += 3 * BEANS_GRAMM_PER_SHOT;

    const coffee = makeCoffee(2);
    console.log(coffee);
    
}