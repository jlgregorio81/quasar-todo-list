import { defineStore } from "pinia";
import { auth } from "src/js/firebase";
import {
    createUserWithEmailAndPassword,
    getAuth, signInWithEmailAndPassword, signOut,
    onAuthStateChanged
} from "firebase/auth"

export const useStoreAuth = defineStore("storeAuth", {
    state: () => {
        return {
            user: {}
        }
    },
    actions: {
        //..to verify the user signed in
        init() {
            onAuthStateChanged(auth, user => {
                if (user) {
                    this.user.uid = user.uid
                    this.user.email = user.email
                    this.user.displayName = 'Eita...!'
                    this.router.push('/tasks')
                } else {
                    this.user = {}
                    this.router.push('/signin')
                }
            })
        },
        //..create a new user in Firestore
        async createUser(newUser) {
            return await createUserWithEmailAndPassword(
                auth, newUser.email,
                newUser.password
            ).then((userCredential) => {
                this.user = userCredential.user
            }).catch((error) => {
                //..throws the error
                throw error
            })
        },
        //....
        async loginUser(credentials) {
            const fireBaseAuth = getAuth()
            return await signInWithEmailAndPassword(fireBaseAuth,
                credentials.email,
                credentials.password
            ).then((userCredential) => {
                this.user = userCredential.user
            }).catch((error) => {
                throw error
            })
        },
        //...
        async logout() {
            return await signOut(auth
            ).then(() => {
                this.user = {}
            }).catch((error) => {
                throw error
            })
        },

        //..
    },
    getters: {
        getUser: (state) => {
            return state.user
        }
    }
})

