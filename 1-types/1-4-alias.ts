{
  /**
   * Type Aliases 타입스크립트가 강력한 이유!
   * -새로운 타입을 정의 할 수 있음 
   */
  type Text = string; 
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {// 오브젝트 형태로 정의 가능 
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',
    age: 12,
  };

  /**
   * String Literal Types
   * - 타입을 문자열로 지정 가능
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
}
