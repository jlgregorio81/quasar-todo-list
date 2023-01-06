import { useStoreTodo } from "src/stores/storeTodo";
import { onMounted, reactive } from "vue";


export function useTodoListPage() {

    const storeTodo = useStoreTodo()

    const statusList = ['A fazer', 'Fazendo', 'Feito']

    const newTodo = reactive({
        description : '',
        status: 'A fazer',
    })

    onMounted(() => {
        storeTodo.init()
    })

    const addTodo = () => {
        storeTodo.createTodo({
            description : newTodo.description,
            status : newTodo.status
        })
    }

    return { storeTodo, onMounted, statusList, newTodo, addTodo }
}