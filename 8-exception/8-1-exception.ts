// Java : Exception 같은 다른 언어에서는 Exception 이라는 오브젝트, 클래스가 존재함 
// Javascript : Error 클래스가 있음
//const array = new Array(1000000222222222222222);

//Error(Exception) Handling: try -> catch -> finally 

function readFile(fileName: string): string{
    if(fileName === 'not exist! 💩'){
        throw new Error(`file not exist! ${fileName}`);
    }
    return 'file contents🗒'
}

function closeFile(file: string){
    //    
}

const fileName = 'not exist! 💩';

//에러가 날 부분에서만! try문으로 감싸준다. 에러가 발생해도 앱이 죽지 않음 
try{
    console.log(readFile(fileName));
}   catch(error){
    console.log(`catched!!`);
}   finally{ //닫아주는 곳 성공하든 실패하던 실행을 하는 코드 -> catch 안에서 오류가 발생하면 try-catch 밖에서 실행을 못할 수 있다.
    closeFile(fileName);
    console.log(`finally`);
    
}

closeFile(fileName)
