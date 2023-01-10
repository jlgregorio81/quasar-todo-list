import { useStoreAuth } from "src/stores/storeAuth";
import { reactive } from "vue";


export function useUserProfilePage() {


    const user = reactive({
        uid : '',
        email: '', 
        
    })

    const storeAuth = useStoreAuth()




    return { storeAuth }

}