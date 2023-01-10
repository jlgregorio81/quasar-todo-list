import { useStoreTodo } from "src/stores/storeTodo"

export function useStatsPage () {

    const storeTodo = useStoreTodo()



    return { storeTodo }

}