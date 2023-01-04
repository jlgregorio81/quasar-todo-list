import { defineStore } from "pinia";
import { auth } from "src/js/firebase";
import {
    createUserWithEmailAndPassword
} from "firebase/auth"

export const useStoreAuth = defineStore("storeAuth", {
    state: () => {
        return {
            user: {}
        }
    },
    actions: {
        //..create a new user in Firestore
        async createUser(newUser) {
            return await createUserWithEmailAndPassword(
                auth, newUser.email,
                newUser.password
            ).then(userCredential => {
                this.user = userCredential.user
            }).catch(error => {
                //..throws the error
                throw error
            })
        }
        //....
        async loginUser(credentials){
            
        }
    }
})

