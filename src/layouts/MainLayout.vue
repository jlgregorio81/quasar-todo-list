<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat icon="home" to="/" />
        <q-toolbar-title> {{ appName }} </q-toolbar-title>
        <div v-if="!storeAuth.user.uid">
          <q-btn color="white" icon="person_add" flat to="/signup"
            >Cadastrar</q-btn
          >
          <q-btn to="/signin" color="white" icon="login" flat>Entrar</q-btn>
        </div>
        <q-btn
          v-if="storeAuth.user.uid"
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
        <q-item clickable @click="logout()">
          <q-item-section avatar>
            <q-icon name="logout" color="" />
          </q-item-section>
          <q-item-section> Sair </q-item-section>
        </q-item>
        <!-- <q-btn flat align="left" icon="logout" color="red" class="full-width">Sair</q-btn> -->
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useMainLayout } from "./useMainLayout";

//..import the uses
const {
  appName,
  linkItems,
  rightDrawerOpen,
  toggleRightDrawer,
  storeAuth,
  logout,
  onMounted,
} = useMainLayout();
</script>

<style lang="scss">
#main-drawer {
  background-color: $indigo-1;
}
</style>
