import { useStoreTodo } from "src/stores/storeTodo";
import { onMounted, reactive } from "vue";
import { Loading, Dialog } from 'quasar'
import { Notify } from 'quasar'


export function useTodoListPage() {

    const storeTodo = useStoreTodo()

    const statusList = ['A fazer', 'Fazendo', 'Feito']

    const newTodo = reactive({
        description: '',
        status: 'A fazer',
    })

    onMounted(() => {        
        storeTodo.init()
    })

    const addTodo = () => {
        Loading.show({ message: 'Aguarde...' })
        setTimeout(() => {
            storeTodo.createTodo({
                description: newTodo.description,
                status: newTodo.status
            }).then(() => {
                newTodo.description = ''
                newTodo.status = 'A fazer'
                Notify.create({ message: 'Tarefa salva com sucesso!', color: 'indigo-10', icon: 'info', timeout: 2500 })
            }).catch((error) => {
                Notify.create({ message: 'Algo errado não está certo... A tarefa não foi salva!', color: 'red-10', icon: 'error', timeout: 3000 })
            }).finally(() => {
                Loading.hide()
            })
        }, 500);
    }

    const deleteTodo = (idToDelete) => {
        //console.log("Delete was clicked! See the id: ", idToDelete)
        Loading.show({ message: 'Aguarde...' })
        storeTodo.deleteTodo(idToDelete
            ).then(() => {
                Notify.create({ message: 'Tarefa excluída com sucesso!', color: 'indigo-10', icon: 'info', timeout: 2500 })
                console.log('Notificação!')
            }).catch(()=>{
                Notify.create({ message: 'Algo errado não está certo... Não foi possível excluir a tarefa!', color: 'red-10', icon: 'error', timeout: 3000 })
            }).finally(()=>{
                Loading.hide()
            })            
    }

    return { storeTodo, onMounted, statusList, newTodo, addTodo, deleteTodo }
}