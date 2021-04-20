type PageInfo = {
    title: string;
};
type Page = 'home' | 'about' | 'contact';

//두개의 타입을 묶어 하나의 타입은 키 하나는 다른타입으로 묶을 수 있다
const nav: Record<Page, PageInfo> = {
    home: {title: 'home'},
    about: {title: 'about'},
    contact: {title: 'contact'},
}