import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBYp-btt1tFzzxc8AcSPwWCtJPPeTlr7nE",
	authDomain: "todo-clone-bdb05.firebaseapp.com",
	databaseURL: "https://todo-clone-bdb05.firebaseio.com",
	projectId: "todo-clone-bdb05",
	storageBucket: "todo-clone-bdb05.appspot.com",
	messagingSenderId: "947890386339",
	appId: "1:947890386339:web:c91bfe8c3bd6049f8a1616",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
