{
  /**
   * Intersection Types: & and의 의미를 지니고 있음
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void; // 아무것도 아닌 함수 
  };

  function internWork(person: Student & Worker) { // 인턴이 일하는 함수 
    console.log(person.name, person.empolyeeId, person.work()); // 학생과 인턴 타입에 적용한 것들을 다 접근 가능하다. 
  }

  // 타입에 들어가는 모든 값을 입력해야 오류가 나지 않음 
  internWork({
    name: 'ellie',
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
