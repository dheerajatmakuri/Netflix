import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut} from "firebase/auth";

import { addDoc, 
    collection, 
    getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCN5X8A6ihBEQ0e9NXV5x8-t7w0JNmXaiU",
  authDomain: "netflix-clone-4248c.firebaseapp.com",
  projectId: "netflix-clone-4248c",
  storageBucket: "netflix-clone-4248c.appspot.com",
  messagingSenderId: "467090589055",
  appId: "1:467090589055:web:2e43b49c5b56cf1d5e064a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db, "user"), {
           uid: user.uid,
           name,
           authProvider: "local",
           email,
        });

    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));

    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
            
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
        
}

const logout =  () => {
    signOut(auth) 
}

export {auth, db, login, signup, logout};