<template>
  <div>
    <div class="bg-blue-1 q-pa-md">
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
        label="Aguarde! Carregando tarefas..."
        label-class="text-indigo-14"
        label-style="font-size: 2rem"
        color="indigo-14"
      />
      <div
        class="col-xs-12 col-md-6 col-lg-3"
        v-for="todo in storeTodo.todoList"
        :key="todo.id"
      >
        <Todo
          class="q-ma-sm"
          :todo="todo"
          @deleteClicked="deleteTodo(todo.id)"
          @statusChanged="updateTodo(todo.id, todo)"
          @saveClicked="updateTodo(todo.id, todo)"
        />
      </div>
      <div
        class="col-xs-12"
        v-if="storeTodo.todoList.length == 0 && storeTodo.isLoaded"
      >
        <h4 class="text-grey text-center">Nenhuma tarefa cadastrada....!</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTodoListPage } from "./useTodoListPage";
import Todo from "components/Todo.vue";

const { storeTodo, onMounted, statusList, newTodo, addTodo, deleteTodo, updateTodo } =
  useTodoListPage();
</script>

<style></style>
