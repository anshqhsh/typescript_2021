{
  /**
   * Type Assertions π©
   * νμμ κ°μ
   */
  //λΆκ°νΌνκ² μ¬μ©ν΄μΌνλ κ²½μ° μλ°μ€ν¬λ¦½νΈμμ μ€νΈλ§μ λν ν¨μ 
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();//any νμμ΄λΌ, λ¬Έμμ΄ νμμ μ¬μ©νλ APIλ₯Ό μ¬μ© ν  μ μλ€
  console.log((result as string).length); //type assertion κ°μ λ‘ λ¬Έμμ΄λ‘ μ¬μ©ν  μ μμ 
  console.log((<string>result).length);   //type assertion

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // π± μλ‘μ΄ μ«μλ₯Ό λ£λκ² μ΄νμ΄ μ£½μ΄λ²λ¦¬λ μ€λ₯ μμ± 

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers!.push(2); // π± ! μ λμ μΌλ‘ κ°μ΄ μμλ μ°λ κ² 

  const button = document.querySelector('class')!; // μ νμλ₯Ό μ΄μ©νμ¬ λμμλ₯Ό λ°μ μ¬ μ μμ 
  button.nodeValue;
}
