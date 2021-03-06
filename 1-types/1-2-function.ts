{
  // // JavaScript ๐ฉ
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript โจ
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // JavaScript ๐ฉ
  // function jsFetchNum(id) {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TypeScript โจ
  // function fetchNum(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // JavaScript โจ => TypeScript
  // Optional parameter ?์ถ๊ฐํด์ ์์ฑํ๋ฉด ์ ๋ฌ ๋ฐ์์๋์๊ณ  ์๋ฐ์์๋ ์์ 
  function printName(firstName: string, lastName?: string) {//-> lastName: String| undefined ์ธ์๋ฅผ undefined๋ก ์๋ ฅ ํด์ค์ผํจ 
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName('Steve', 'Jobs');
  printName('Ellie');//Ellie, undefined
  printName('Anna');

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
