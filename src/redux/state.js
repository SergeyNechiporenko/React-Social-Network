let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "It is my first post", likesCount: 20 },
        { id: 3, message: "Hi!", likesCount: 50 },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
        { id: 6, message: "Yo" },
      ],
      newPostText: "",
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
      newMessageText: "",
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
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  addMessage() {
    let newMessage = {
      id: 7,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newMessage) {
    this._state.dialogsPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
