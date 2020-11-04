import { firebase, GoogleAuthProvider } from '../../firebase/firebase'

export const login = (uid, name) => ({
    type: 'SIGN_IN',
    uid, name
})

export const startLogin = (email, password) => {
    return async () => {
        try {
            if(email && password) {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } else {
                await firebase.auth().signInWithPopup(GoogleAuthProvider)
            }
        } catch(e) {
            console.log('Error====>', e)
            console.log('Code====>', e.code)
            console.log('Msg====>', e.message)
            throw new Error(e.message)
        }
    }
}

export const startSignup = (email, password, name) => {
    return async () => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            const user = await firebase.auth().currentUser
            await user.updateProfile({displayName: name})
        } catch(e) {
            throw new Error(e.message)
        }
    }
}

export const logout = () => ({
    type: 'SIGN_OUT'
})

export const startLogout = () => {
    return async () => {
        try {
            await firebase.auth().signOut()
        } catch(e) {
            throw new Error(e.message)
        }
    }
}