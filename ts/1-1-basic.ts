{//로컬 스코프
  /**
   * JavaScript type
   * Primitive(원시타입): 7가지 number, string, boolean, bigint(더큰숫자), symbol, null, undefined
   * Object: function, array.....
   */
/**
 * TypeScript
 * 타입명시를 해줌
 */
  // number
  const num: number = -6;//소수점, 마이너스 값도 가능함

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩 잘 사용하지 않은 타입 
  let age: number | undefined; // | 또는을 의미 optional type을 선언할때 사용 
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = 'hello';

  // void 아무것도 리턴하지 않을때
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message); //어플리케이션에서도 never를 던지면서 죽게됨
    while (true) {}//이것도 never
  }
  let neverEnding: never; // 💩

  // objet
  let obj: object; // 💩 원시타입을 제외한 모든 타입을 전달 가능 
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
