{
    //null체크하는 펑션을 다 만들순 없음 
    function checkNotNullBad(arg: number | null): number{
        if(arg == null){
            throw new Error('not vaild number!');
        }
        return arg;
    }

    //any 타입을 쓰먄 타입이 정해지지 않아 좋지 않음
    function checkNotNullAnyBad (arg: any | null): any{
        if(arg == null){
            throw new Error('not vaild number!');
        }
        return arg;
    }

    const result = checkNotNull(123);

    //GENERIC - 함수를 호출하는 순간 타입이 결정됨 T를 이용해서 이용 
    function checkNotNull<T>(arg: T | null ):T{
        if(arg == null){
            throw new Error('not vaild number!');
        }
        return arg;
    }
    
    //받는 순간 타입이 결정이 되며 인자에 타입을 정해주면 더욱 명확하게 사용 가능 
    const number = checkNotNull(123);
    const number1 = checkNotNull('123');
    const boal: boolean = checkNotNull(true);
    console.log(result);
    checkNotNull(null);
}