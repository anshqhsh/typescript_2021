{
class TimeoutError extends Error{
    
}class OfflineError extends Error{
    
}

type NetworkErrorState = {
    result : 'fail';
    reason : 'offline' | 'down' | 'timeout';
}

type SuccessState = {
    result : 'success';
}

type ResultState = SuccessState | NetworkErrorState

class NetworkClient { 
    tryConnect(): ResultState{}
}

class UserService {
    //dependency injection 필요한 것을 외부에서 받아오는 컴포지션
    constructor(private client: NetworkClient){}

    login(){
        this.client.tryConnect();
        //login.......
    }
    
}

//try-catch문에서 error는 any type
class App {
    constructor(private userService: UserService){}
    run(){
        //의미 있는 위치에서 try-catch문으로서 핸들링을 해줘야한다.
        try{
            this.userService.login();
        } catch(error){
            // show dialog to user
            if(error instanceof OfflineError) {
                //오프라인에 대한 에러 를 해주고 싶어도 error가 any타입이므로 세부적인 에러 관리가 불가능하다. 
            }
        }
    }
}
const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
}