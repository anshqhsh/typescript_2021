class NetworkClient { 
    tryConnect(): void{
        throw new Error('no network');
    }
}

class UserService {
    //dependency injection 필요한 것을 외부에서 받아오는 컴포지션
    constructor(private client: NetworkClient){}

    login(){
        this.client.tryConnect();
        //login.......
    }
    
}


class App {
    constructor(private userService: UserService){}
    run(){
        //의미 있는 위치에서 try-catch문으로서 핸들링을 해줘야한다.
        try{
            this.userService.login();
        } catch(error){
            // show dialog to user
        }
    }
}
const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();