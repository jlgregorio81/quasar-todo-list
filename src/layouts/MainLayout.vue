<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn flat round dense icon="tasks" to="/" /> -->
        <q-avatar>
          <q-icon name="tasks"/>
        </q-avatar>
        <q-toolbar-title> {{ appName }} </q-toolbar-title>
        <div v-if="!storeAuth.user.uid">
          <div class="gt-sm">
            <q-btn
              label="Cadastrar"
              color="white"
              icon="person_add"
              flat
              to="/signup"
            />
            <q-btn
              label="Entrar"
              color="white"
              icon="login"
              flat
              to="/signin"
            />
          </div>
          <div class="lt-md">
            <q-btn color="white" icon="person_add" flat to="/signup" />
            <q-btn color="white" icon="login" flat to="/signin" />
          </div>
        </div>
        <q-btn
          class="gt-sm"
          flat
          color="cyan-12"
          icon="help"
          to="/"
          label="Sobre"
        />
        <q-btn class="lt-md" flat color="cyan-12" icon="help" to="/" />
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

    <q-drawer
      behavior="mobile"
      v-model="rightDrawerOpen"
      bordered
      side="right"
      id="main-drawer"
    >
      <q-list>
        <q-item-label header> Links Essenciais </q-item-label>
        <q-item clickable to="/profile">
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>{{
            storeAuth.user.fullName
              ? storeAuth.user.fullName
              : storeAuth.user.email
          }}</q-item-section>
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
            <q-icon name="logout" color="red-10" />
          </q-item-section>
          <q-item-section class="text-red-10"> Sair </q-item-section>
        </q-item>
        <!-- <q-btn flat align="left" icon="logout" color="red" class="full-width">Sair</q-btn> -->
      </q-list>
    </q-drawer>
    <q-page-container style="padding: 0">
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
