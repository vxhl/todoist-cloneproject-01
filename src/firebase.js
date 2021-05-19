import firebase from 'firebase/app';
import 'firebase/firestore';
 
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAXPv0rYeiilIg1xARuXaI_E90J2KhNVWU",
    authDomain: "todoist-clone1-b24f8.firebaseapp.com",
    databaseURL: "https://todoist-clone1-b24f8-default-rtdb.firebaseio.com",
    projectId: "todoist-clone1-b24f8",
    storageBucket: "todoist-clone1-b24f8.appspot.com",
    messagingSenderId: "1004463906967",
    appId: "1:1004463906967:web:5272fd2829b653423389d2"
})
export {firebaseConfig as firebase};