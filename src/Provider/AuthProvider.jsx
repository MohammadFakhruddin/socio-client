import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import auth from "../Firebase/firebase.config";
import { useEffect, useState } from "react";

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


    return <AuthContext value={authData} >{children}</AuthContext>

};

export default AuthProvider;