import { ref, onMounted } from "vue";
import { useStoreAuth } from "src/stores/storeAuth";
import { useRouter } from "vue-router";

export function useMainLayout() {

  //..the router
  const router = useRouter()

  //..get the state
  const storeAuth = useStoreAuth()


  //..app name
  const appName = "Lista de Tarefas";

  //..control the menu drawer
  const rightDrawerOpen = ref(false);

  //..link items
  const linkItems = [
    { name: "tasks", title: "Tarefas", icon: "task_alt", link: "/tasks" },
    { name: "stats", title: "Estatísticas", icon: "bar_chart", link: "/stats" },
  ];

  //..control the drawer
  const toggleRightDrawer = () => {
    rightDrawerOpen.value = !rightDrawerOpen.value;
  };

  //..logout
  const logout = () => {
    storeAuth.logout()
    router.push('/signin')
    router.go()
  }

  onMounted(() => {
    storeAuth.init()
  })

  //..return
  return { appName, linkItems, rightDrawerOpen, toggleRightDrawer, storeAuth, logout, onMounted }

}