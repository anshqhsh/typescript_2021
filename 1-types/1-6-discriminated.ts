{
  // function: login -> success, fail ⏱
  type SuccessState = {
    result: 'success'; // 문자열 타입
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(`🎉 ${state.response.body}`); //response 안 바디 내용이 출력 
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
