import { reactive } from 'vue'
import { useStoreAuth } from 'src/stores/storeAuth'
import { Loading, Dialog } from 'quasar'
import { useRouter } from 'vue-router'


export function useLoginUserPage() {

  //..router
  const router = useRouter()

  //..store to deal with authentication
  const storeAuth = useStoreAuth()

  //..new user data
  const user = reactive({
    email: '',
    password: ''
  })

  //..login user, using the auth
  const loginUser = () => {
    Loading.show({ message: 'Aguarde...' })
    setTimeout(() => {
      storeAuth.loginUser(user)
        .then(() => {
          Dialog.create({ title: 'Deu certo!', message: 'Bem vindo!' })
            .onDismiss(() => {
              router.push('/')
            })
        })
        .catch((error) => {
          //console.log("Erro:", error) 
          Dialog.create({ title: 'Algo errado não está certo...', message: error.message, style: 'color:red' })
        })
        .finally(() => { Loading.hide() })
    }, 1500)
  }


  return { user, loginUser }

}
