import { defineStore } from "pinia";
import { db } from "src/js/firebase";
import { useStoreAuth } from "./storeAuth"
import { doc, deleteDoc, updateDoc, addDoc, collection, onSnapshot, serverTimestamp, query, orderBy } from "firebase/firestore"

//..store the todo list collection ref
let todoCollectionRef

//..notes snapshot
let todoListSnapshot = null


export const useStoreTodo = defineStore("storeTodo", {
    state: () => {
        return {
            todoList: [],
            isLoaded: false
        }
    },
    actions: {
        init() {
            setTimeout(() => {
                const storeAuth = useStoreAuth()
                let userUid = storeAuth.user.uid
                console.log("User: ", storeAuth.user)
                todoCollectionRef = collection(db, 'users', userUid, 'todo-list')
                //console.log("Collection REF: ", todoCollectionRef)
                this.getTodoList()
            }, 2000);
        },
        async getTodoList() {
            const q = query(todoCollectionRef, orderBy('time', 'desc'))
            // todoListSnapshot = onSnapshot(todoCollectionRef, (querySnapshot) => {
            todoListSnapshot = onSnapshot(q, (querySnapshot) => {
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
                this.isLoaded = true
                //console.log("Todo List: ", todoList)
            })
        },
        //..create a todo
        async createTodo(newTodo) {
            let currentDate = new Date().getTime().toString()
            await addDoc(todoCollectionRef, {
                description: newTodo.description,
                status: newTodo.status,
                time: currentDate
            })
        },
        //..delete the todo
        async deleteTodo(idToDelete) {
            await deleteDoc(doc(todoCollectionRef, idToDelete))
        },
        //update the todo
        async updateTodo(idToUpdate, todo){
            //console.log("id para atualziar: ", idToUpdate)
            await updateDoc(doc(todoCollectionRef, idToUpdate), {
                description: todo.description,
                status: todo.status
            })
        }

    }
})