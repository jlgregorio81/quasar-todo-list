import { defineStore } from "pinia";
import { db } from "src/js/firebase";
import { useStoreAuth } from "./storeAuth"
import { doc, setDoc, addDoc, collection, onSnapshot, serverTimestamp } from "firebase/firestore"

//..store the todo list collection ref
let todoCollectionRef

//..notes snapshot
let todoListSnapshot = null


export const useStoreTodo = defineStore("storeTodo", {
    state: () => {
        return {
            todoList: []
        }
    },
    actions: {
        init() {
            const storeAuth = useStoreAuth()
            let userUid = storeAuth.user.uid
            console.log("User: ", storeAuth.user)
            todoCollectionRef = collection(db, 'users', userUid, 'todo-list')
            //console.log("Collection REF: ", todoCollectionRef)
            this.getTodoList()
        },
        async getTodoList() {
            todoListSnapshot = onSnapshot(todoCollectionRef, (querySnapshot) => {
                let todoList = []
                querySnapshot.forEach((doc) => {
                    let todo = {
                        id: doc.id,
                        description: doc.data().description,
                        status: doc.data().status,
                        time: doc.data().time
                    }
                    todoList.push(todo)
                })
                this.todoList = todoList
                //console.log("Todo List: ", todoList)
            })
        },
        async createTodo(newTodo) {
            console.log("New Todo:", newTodo)
            await addDoc(todoCollectionRef, {
                description: newTodo.description,
                status: newTodo.status,
                time: serverTimestamp()
            })
        },
    }
})