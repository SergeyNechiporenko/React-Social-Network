let rerenderEntireTree = () => {
  console.log('State changed')
}

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 15 },
      { id: 2, message: "It is my first post", likesCount: 20 },
      { id: 3, message: "Hi!", likesCount: 50 },
      { id: 4, message: "Yo" },
      { id: 5, message: "Yo" },
      { id: 6, message: "Yo" },
    ],
    newPostText: '',
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dimych", ava: "https://i.imgur.com/8tPmy2Vh.jpg" },
      { id: 2, name: "Andrey", ava: "https://i.imgur.com/8tPmy2Vh.jpg" },
      { id: 3, name: "Sveta", ava: "https://i.imgur.com/8tPmy2Vh.jpg" },
      { id: 4, name: "Sasha", ava: "https://i.imgur.com/8tPmy2Vh.jpg" },
      { id: 5, name: "Viktor", ava: "https://i.imgur.com/8tPmy2Vh.jpg" },
      { id: 6, name: "Valera", ava: "https://i.imgur.com/8tPmy2Vh.jpg" },
    ],
    messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Yo" },
      { id: 5, message: "Yo" },
      { id: 6, message: "Yo" },
    ],
    newMessageText: '',
  },
  friendsPage: {
    friends: [
      { id: 1, name: "Dimych", ava: "https://i.imgur.com/8tPmy2Vh.jpg" },
      { id: 2, name: "Andrey", ava: "https://i.imgur.com/8tPmy2Vh.jpg" },
      { id: 3, name: "Sveta", ava: "https://i.imgur.com/8tPmy2Vh.jpg" },
      { id: 4, name: "Sasha", ava: "https://i.imgur.com/8tPmy2Vh.jpg" },
      { id: 5, name: "Viktor", ava: "https://i.imgur.com/8tPmy2Vh.jpg" },
      { id: 6, name: "Valera", ava: "https://i.imgur.com/8tPmy2Vh.jpg" },
    ],
  },
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const addMessage = () => {
  let newMessage = {
    id: 7,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
}

export const updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
