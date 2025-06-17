import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import auth from "../Firebase/firebase.config";
import { useEffect, useState } from "react";
import axios from "axios";

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)

    const googleProvider = new GoogleAuthProvider()

    const googleSingIn = ()=>{

        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)

    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            if(currentUser?.email){
                const userData = {email:currentUser.email}
                axios.post('https://socio-server.vercel.app/jwt',userData,{
                    withCredentials:true
                })
                .then(res => {
                    console.log('token after jwt',res.data);
                    
                })
                .catch(error => console.log(error))
            }

        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authData = {
        user,setUser,
        createUser,
        signIn,
        loading,
        setLoading,
        updateUser,
        logOut,
        googleSingIn
    }


    return <AuthContext.Provider value={authData} >{children}</AuthContext.Provider>

};

export default AuthProvider; 