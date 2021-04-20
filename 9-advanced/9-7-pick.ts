{
    //Pick
    /** T타입을 받아와서 K(T타입의 키를 상속) 전달된 키에 한에서 타입을 결정
     * type Pick<T, K extends keyof T> = {
     *[P in K]: T[P];};
     */

    type Video = {
        id: string;
        title: string;
        url:string;
        data: string;
    };
    
    //Pick을 따로 선언해서 재사용성 있는 코드를 작성 
    type VideoMetadata = Pick<Video, 'id' | 'title'>;
    
    //function이 무거울때 
    function getVideo(id: string):Video{
        return{
            id,
            title: 'video',
            url: 'http://..',
            data: 'byte-data..'
        }
    }
    //무거운 getVideo중 원하는 값만 받아올 수 있음 
    function getVideoMetadata(id: string): VideoMetadata{
        return{
            id: id,
            title: 'title',
        }
    }    
}