import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword, getIdToken } from "firebase/auth";
import { useEffect } from "react";
import initializeFirebase from "../firebase.init";

initializeFirebase();

const useFirebase = () =>{
    const [user,setUser] = useState('');
    const [error,setError] = useState('');
    const [isloading,setIsLoading] = useState(true);
    const [token,setToken] = useState('');

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn= (location,navigate)=>{
        setIsLoading(true);
        signInWithPopup(auth, provider)
        .then(() => {
         alert("sign in successfully");
         setError('');
         const destination = location?.state?.from || '/';
         navigate(destination);
        }).catch((error) => {
         setError(error.message)
        })
        .finally(()=> setIsLoading(false))
    }

    //observe user
    useEffect(()=>{
        const Subscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                //use id token
                getIdToken(user)
                .then(function(idToken) {
                //    console.log(idToken);
                   setToken(idToken);
                  })
            } else {
                setUser('');
            }
            setIsLoading(false);
            return () => Subscribe;
          });
    },[auth])

    //create new user
    const createUser=(email,password)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert('successfully create user')
            setError('');
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(()=> setIsLoading(false))
    }
    //login with email and password
    const login =(email,password)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("login successfully");
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(()=> setIsLoading(false))
    }

    //signout
    const signout =()=>{
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            alert("sign out successfully");
            setError('');
          }).catch((error) => {
            setError(error.message);
          })
          .finally(()=> setIsLoading(false))
    }

    return {
        user,
        googleSignIn,
        signout,
        createUser,
        login,
        error,
        handleShow,
        handleClose,
        show,
        isloading,
        token
    }
}
export default useFirebase;