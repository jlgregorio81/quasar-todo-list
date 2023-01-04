<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat icon="home" to="/" />
        <q-toolbar-title> {{ appName }} </q-toolbar-title>
        <q-btn color="white" icon="person_add" flat to="/signup"
          >Cadastrar</q-btn
        >
        <q-btn color="white" icon="login" flat>Entrar</q-btn>
        <q-btn
          round
          flat
          color="white "
          @click="toggleRightDrawer"
          icon="menu"
        ></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" bordered side="right" id="main-drawer">
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
        <q-item>
          <q-item-section avatar>
            <img
              style="width: 32px"
              src="https://cdn.quasar.dev/img/avatar.png"
            />
          </q-item-section>
          <q-item-section>Nome do Usuário</q-item-section>
        </q-item>
        <q-item v-for="item in linkItems" :key="item.name" :to="item.link">
          <q-item-section avatar>
            <q-icon color="primary" :name="item.icon" />
          </q-item-section>
          <q-item-section>
            {{ item.title }}
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section> Sair </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const appName = 'Lista de Tarefas'

const rightDrawerOpen = ref(false)

const linkItems = [
  { name: 'tasks', title: 'Tarefas', icon: 'task_alt', link: '/tasks' },
  { name: 'stats', title: 'Estatísticas', icon: 'bar_chart', link: '/stats' },
  { name: 'account', title: 'Minha Conta', icon: 'badge', link: '/account' }
]

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>

<style lang="scss">
#main-drawer {
  background-color: $indigo-1;
}
</style>
