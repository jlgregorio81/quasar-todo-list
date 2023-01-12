import { useStoreAuth } from "src/stores/storeAuth";
import { reactive } from "vue";
import { Notify } from 'quasar'


export function useUserProfilePage() {


    const user = reactive({
        uid : '',
        email: '',
        newPassword: ''         
    })

    const storeAuth = useStoreAuth()

    user.uid = storeAuth.user.uid
    user.email = storeAuth.user.email

    const updateUser = () =>{
        storeAuth.updatePassword(user.newPassword)
            .then(()=>{
                Notify.create({ message: 'Senha Atualizada com sucesso!', color: 'indigo-10', icon: 'info', timeout: 1000 })
            })
            .catch((error) => {
                console.log("Error updating password: ", error.message)
                Notify.create({ message: 'Erro! Não foi possível atualizar a senha...', color: 'indigo-10', color: 'red-10', icon: 'error', timeout: 1000 })
            })

    }

    return { storeAuth, user, updateUser }

}