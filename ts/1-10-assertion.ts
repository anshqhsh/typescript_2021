{
  /**
   * Type Assertions 💩
   * 타입을 강요
   */
  //불가피하게 사용해야하는 경우 자바스크립트에서 스트링에 대한 함수 
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();//any 타입이라, 문자열 타입에 사용하는 API를 사용 할 수 없다
  console.log((result as string).length); //type assertion 강제로 문자열로 사용할 수 있음 
  console.log((<string>result).length);   //type assertion

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱 새로운 숫자를 넣는것 어플이 죽어버리는 오류 생성 

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers!.push(2); // 😱 ! 절대적으로 값이 있을때 쓰는 것 

  const button = document.querySelector('class')!; // 선택자를 이용하여 돔요소를 받아 올 수 있음 
  button.nodeValue;
}
