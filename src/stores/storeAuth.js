import { defineStore } from "pinia";
import { auth } from "src/js/firebase";
import {
    createUserWithEmailAndPassword
} from "firebase/auth"
import { Loading, Dialog } from 'quasar'

export const useStoreAuth = defineStore("storeAuth", {
    state: () => {
        return {
            user: {}
        }
    },
    actions: {
        //..create a new user in Firestore
        createUser(newUser) {
            Loading.show({ message: 'Aguarde...', delay: 500 })
            setTimeout(() => {
                createUserWithEmailAndPassword(
                    auth, newUser.email,
                    newUser.password
                ).then(userCredential => {
                    this.user = userCredential.user
                    Loading.hide()
                    //.dialog
                    Dialog.create({
                        title: "Cadastro Realizado com sucesso!"
                    }).onDismiss(() =>{
                        this.router.push("/")
                    })
                }).catch(error => {
                    Loading.hide()
                    Dialog.create({
                        style: "color: red",
                        title: "⚠️Erro",
                        message: error.message
                    })
                })
            }, 1000)
        }
        //....
    }
})

