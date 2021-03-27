{
  /**
   * Enum : 여러가지의 관련된 상수를 모아서 정의 하는 타입 
   */
  // JavaScript 자바스크립트에서 Enum을 쓰는 법  
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 }); // 오브젝트를 한번만 정의 할 수 있게 만듦 
  const dayOfToday = DAYS_ENUM.MONDAY; //0이 할당 

 
  //enum은 앞만 대문자로 적음
  enum Days {
    Monday, //  //0 // = 1 1부터 시작도 가능  = 'monday' 문자열로도 출력 가능함
    Tuesday,  //1
    Wednesday,//2
    Thursday,//3
    Friday,//4
    Saturday,
    Sunday,
  }
  console.log(Days.Monday); // 0
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10; // 타입스크립트에서는 enum으로 할당한 변수에 값을 할당이 가능해서 문제가 있음 타입이 보장되지 않음 //타입스크립트에서는 union을 사용함 모바일 데이터에서 json으로 묶을땐 enum을 사용할 수 밖에 없음 
  console.log(day);
 // TypeScript
 type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday'; //enum대신 union을 사용함 
  let dayOfweek: DaysOfWeek = 'Monday';
  //dayOfweek = 'Wednesday';
//  dayOfweek = 'hello'; error 
}
