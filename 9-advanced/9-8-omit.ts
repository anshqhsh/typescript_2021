{
    //Omit 원하는 것만 위해 빼고 쓰는 것 
    type Video = {
        id: string;
        title: string;
        url:string;
        data: string;
    };
    
    //Video에 없는 키도 입력은 가능함 
    type VideoMetadata = Omit<Video, 'url' | 'data'>;
    

    function getVideo(id: string):Video{
        return{
            id,
            title: 'video',
            url: 'http://..',
            data: 'byte-data..'
        }
    }
    //무거운 getVideo중 원하는 값을 빼고 받아옴
    function getVideoMetadata(id: string): VideoMetadata{
        return{
            id: id,
            title: 'title',
        }
    }    
}