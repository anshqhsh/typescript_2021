{
  // Array
  const fruits: string[] = ['π', 'π'];
  const scroes: Array<number> = [1, 3, 4];//array object types
  function printArray(fruits: readonly string[]) {} //readonly λ°μ΄ν°λ₯Ό λ³κ²½ νμ§ μμ 

  // Tuple -> interface, type alias, class μλ‘λ€λ₯Έ νμμ΄ λ€μ΄ κ° μ μλ λ°°μ΄ 
  let student: [string, number]; // κ³ μ λ μ¬μ΄μ¦μ μλ‘λ€λ₯Έ νμμ μ μΈ
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student; //μ’λ λͺννκ² λ³Όμ μκΈ΄ν¨ 
}
//ννμ κΆμ₯ x class λ μΈν°νμ΄μ€ typr alias λ‘ λ¬Άλκ² μ’μ κ² 
