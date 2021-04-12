{
  /**
   *  Union Types: OR
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');// 자동으로 타입에서 설정한 데이터를 선택 할 수 있게 해줌 

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail ⏱
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };

    // function login(): Promise<LoginState>{}
    //   return {
    //     response: {
    //       body: 'logged in!',
    //     },
    //   }; 비동기 로그인
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  //type : LoginState 
  //response라는 키가 state안에 있으면 이런식으로 코드를 짜게 됨 
  //state.response 는 현재 알 수 없으므로 타입스크립트에서는 작동하지 않음 
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
