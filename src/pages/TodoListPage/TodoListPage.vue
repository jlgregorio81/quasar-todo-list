<template>
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="bg-blue-1 q-pa-lg">
        <div class="row justify-center">
          <div class="col-xs-12 col-md-4">
            <h4 class="text-center text-primary">
              <q-icon name="task" size="lg" />Cadastrar Nova Tarefa
            </h4>
          </div>
        </div>
        <div class="row q-ma-sm justify-center">
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <q-input
              type="text"
              filled
              label="Descrição"
              v-model="newTodo.description"

            />
          </div>
          <div class="col-xs-12 col-md-2 q-pa-sm">
            <q-select filled :options="statusList" v-model="newTodo.status" />
          </div>
        </div>
        <div class="row justify-center">
          <div class="col-xs-12 col-md-4">
            <q-btn
              flat
              color="primary"
              label="Salvar"
              icon="save"
              style="width: 100%"
              size="md"
              @click="addTodo"
            />
          </div>
          <div class="col-xs-12 col-md-4">
            <q-btn
              flat
              color="secondary"
              label="Limpar"
              icon="clear"
              style="width: 100%"
              size="md"
            />
          </div>
        </div>
      </div>
    </transition>
    <!-- <div v-if="!storeTodo.isLoaded">
      <div class="row justify-center">
        <q-spinner-dots color="primary" size="5em" :thickness="3" />
      </div>
      <div>
        <h5 class="text-center text-indigo-10">
          Aguarde! carregando tarefas....
        </h5>
      </div>
    </div> -->
    <div class="row q-ma-sm">
      <q-inner-loading
        :showing="storeTodo.isLoaded == false"
        label="Carregando tarefas..."
        label-class="text-indigo-14"
        label-style="font-size: 2rem"
        color="indigo-14"
      />
      <transition-group
        name="list"
      >
        <div
          class="col-xs-12 col-md-4 col-lg-3"
          v-for="todo in storeTodo.todoList"
          :key="todo.id"
        >
          <Todo
            :key="todo.id"
            class="q-ma-sm"
            :todo="todo"
            @deleteClicked="deleteTodo(todo.id)"
            @statusChanged="updateTodo(todo.id, todo)"
            @saveClicked="updateTodo(todo.id, todo)"
          />
        </div>
      </transition-group>
      <div
        class="col-xs-12"
        v-if="storeTodo.todoList.length == 0 && storeTodo.isLoaded"
      >
        <h4 class="text-grey text-center">Nenhuma tarefa cadastrada....!</h4>
      </div>
    </div>
</template>

<script setup>
import { useTodoListPage } from "./useTodoListPage";
import Todo from "components/Todo.vue";

const {
  storeTodo,
  onMounted,
  statusList,
  newTodo,
  addTodo,
  deleteTodo,
  updateTodo,
} = useTodoListPage();
</script>

<style>
/* this transitions were used because move transitions is not allowed using AnimateCSS */
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-120px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
