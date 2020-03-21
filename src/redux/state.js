import {RerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello how are you", likesCount: 11},
            {id: 1, message: "Barev aper", likesCount: 25},
            {id: 1, message: "Barev aper", likesCount: 55}
        ],
        inputText: {inputT: "gri aper"}
    },
    dialogpage: {
        dialogs: [
            {id: 1, name: 'Tigo'},
            {id: 2, name: 'Pash'},
            {id: 3, name: 'Tehmina'},
            {id: 4, name: 'Sevak'},
            {id: 5, name: 'Gor'},
            {id: 6, name: 'Arev'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-camasutra'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'}
        ]
    },
    navbar: {
        friends: [
            {id: 1, user: 'Tigo', ava:'https://avatars.mds.yandex.net/get-pdb/1748372/2290e7d1-f820-4e85-aa0b-57c54492a9dc/s1200'},
            {id: 2, user: 'Pash', ava:'https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-5.png'},
            {id: 3, user: 'Ezo', ava:'https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-9.png'},
            {id: 3, user: 'Ezo', ava:'https://academvisa.ru/wp-content/uploads/2019/10/avatar-icon-images-4.png'},
            {id: 3, user: 'Ezo', ava:'https://cdn4.iconfinder.com/data/icons/avatar-circle-1-1/72/5-512.png'},
        ]
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 20
    }
    state.profilePage.posts.push(newPost);
    RerenderEntireTree(state)
}
export let chahgeInnerText = (innertext) => {
    state.profilePage.inputText = innertext;
    RerenderEntireTree(state)
}

export default state;