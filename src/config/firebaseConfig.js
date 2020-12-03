import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
	apiKey: 'AIzaSyAHpErQIC6WAwTX7cMvlHxBRbpYBxFTOvw',
	authDomain: 'japan-hoops.firebaseapp.com',
	databaseURL: 'https://japan-hoops.firebaseio.com',
	projectId: 'japan-hoops',
	storageBucket: 'japan-hoops.appspot.com',
	messagingSenderId: '431099929808',
	appId: '1:431099929808:web:b8efbf1fc92a6f62392ad5',
	measurementId: 'G-SM0LX05JYH',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
