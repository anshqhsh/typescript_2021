{
  // Array
  const fruits: string[] = ['🍅', '🍌'];
  const scroes: Array<number> = [1, 3, 4];//array object types
  function printArray(fruits: readonly string[]) {} //readonly 데이터를 변경 하지 않음 

  // Tuple -> interface, type alias, class 서로다른 타입이 들어 갈 수 있는 배열 
  let student: [string, number]; // 고정된 사이즈의 서로다른 타입을 선언
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student; //좀더 명확하게 볼수 있긴함 
}
//튜플은 권장 x class 나 인터페이스 typr alias 로 묶는게 좋을 것 
