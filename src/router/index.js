import { route, store } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { useStoreAuth } from 'src/stores/storeAuth'


/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  //..protect the routes
  Router.beforeEach((to, from) => {
    
    const storeAuth = useStoreAuth()
    if(!storeAuth.user.uid && to.name != 'signin' && to.name != 'signup' && to.name != 'home' ){
      //console.log("From:", from, "To:", to )
      return { name: 'signin' }
    } 

    if(storeAuth.user.uid && (to.name == 'signin' || to.name == 'signup' || to.name == 'home')){
      return false
    }
  
  })

  return Router
})



