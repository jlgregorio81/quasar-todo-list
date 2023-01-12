import { reactive } from 'vue'
import { useStoreAuth } from 'src/stores/storeAuth'
import { Loading, Dialog } from 'quasar'
import { useRouter } from 'vue-router'


export function useNewUserPage() {

  //..router
  const router = useRouter()

  //..store to deal with authentication
  const storeAuth = useStoreAuth()

  //..new user data
  const newUser = reactive({
    email: '',
    password: ''
  })

  //..add a new user, using the auth
  const createUser = () => {
    Loading.show({ message: 'Aguarde...' })
    setTimeout(() => {
      storeAuth.createUser(newUser)
        .then(() => {
          Dialog.create({ title: 'Deu certo!', message: 'Usuário cadastrado com sucesso!' })
            .onDismiss(() => {
              router.push('/tasks')
            })
        })
        .catch((error) => {
          //console.log("Erro:", error) 
          Dialog.create({ title: 'Deu errado!', message: error.message, style: 'color:red' })
        })
        .finally(() => { Loading.hide() })

    }, 1500)
  }


  return { newUser, createUser }

}
