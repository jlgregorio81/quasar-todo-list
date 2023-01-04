import { useStoreTodo } from "src/stores/storeTodo";
import { onMounted, ref } from "vue";

export function useTodoListPage() {


    const storeTodo = useStoreTodo()

    const todoList = ref([])


    onMounted(() => {
        storeTodo.init()
        todoList.value = storeTodo.getTodoList()
        //console.log("Store Todo: ", storeTodo)
    })


    return { todoList, onMounted }


}