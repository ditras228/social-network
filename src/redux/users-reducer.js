const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
let initialState={
        users: [
            {id: 1, photoLink:'https://www.tarkett.ru/media/img/M/TH_RED.jpg', follow: false, fullname: 'alex', status:'test'},
            {id: 2, photoLink:'https://www.tarkett.ru/media/img/M/TH_RED.jpg', follow: false, fullname: 'dmitry', status:'test2'},
            {id: 3, photoLink:'https://www.tarkett.ru/media/img/M/TH_RED.jpg', follow: true, fullname: 'sasha', status:'test3'},
            {id: 4, photoLink:'https://www.tarkett.ru/media/img/M/TH_RED.jpg', follow: false, fullname: 'bubble', status:'test4'},
        ]
}
const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case FOLLOW

        default:
            return state;
    }


}
export default dialogsReducer;
export const follow = () => ({type: FOLLOW, id});
export const unFollow = () => ({type: UNFOLLOW, id});