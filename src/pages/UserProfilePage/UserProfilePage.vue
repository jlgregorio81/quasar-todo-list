<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div class="row justify-center items-center q-pa-md" style="height: 90vh">
      <div class="col-xs-12 col-md-3">
        <div>
          <q-icon
            name="account_box"
            size="48px"
            color="primary"
            class="float-left q-mr-sm"
          />
          <h3 class="pl-4 text-primary">Perfil</h3>
        </div>

        <q-input
          readonly
          v-model="user.email"
          autofocus
          filled
          label="E-mail"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Por favor, digite seu e-mail.',
            (val, rules) => rules.email(val) || 'Digite um e-mail válido.',
          ]"
        />

        <q-input
          label="Nova Senha"
          v-model="user.newPassword"
          filled
          maxlength="8"
          type="password"
        />

        <div class="row justify-center">
          <q-btn
            class="q-ma-md"
            label="Atualizar Senha"
            type="submit"
            color="primary"
            @click="updateUser()"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useUserProfilePage } from "./useUserProfilePage.js";

const { storeAuth, user, updateUser } = useUserProfilePage();
</script>

<style lang="scss" scoped></style>
