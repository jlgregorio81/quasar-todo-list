import { reactive } from 'vue'
import { useStoreAuth } from 'src/stores/storeAuth' 

export function useNewUserPage() {

  //..store to deal with authentication
  const storeAuth = useStoreAuth()

  //..new user data
  const newUser = reactive({
    email: 'teste@teste.com',
    password: '123456'
  })

  //..add a new user, using the auth
  const createUser = (newUser) => {
    storeAuth.createUser(newUser);
  }


  return { newUser, createUser }

}
