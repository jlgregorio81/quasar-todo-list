<template>
  <div>
    <div class="bg-blue-1 q-pa-md">
      <div class="row justify-center">
        <div class="col-xs-12 col-md-4">          
          <h4 class="text-center text-indigo-8"><q-icon name="task" size="lg" />Cadastrar Nova Tarefa</h4>
        </div>
      </div>
      <div class="row q-ma-sm justify-center">
        <div class="col-xs-12 col-md-6 q-pa-sm">
          <q-input type="text" filled label="Descrição" v-model="newTodo.description" />
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
        <div class="col-xs-12 col-md-4 ">
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
    <div class="row q-ma-sm">
      <div
        class="col-xs-12 col-md-6 col-lg-3"
        v-for="todo in storeTodo.todoList"
        :key="todo.id"
      >
        <Todo class="q-ma-sm" :todo="todo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTodoListPage } from "./useTodoListPage";
import Todo from "components/Todo.vue";

const { storeTodo, onMounted, statusList, newTodo, addTodo } = useTodoListPage();
</script>

<style></style>
