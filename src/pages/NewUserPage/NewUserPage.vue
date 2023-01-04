<template>
  <div class="q-pa-md" style="max-width: 400px; margin: 0 auto">
    <div>
      <q-icon
        name="person_add"
        size="48px"
        color="primary"
        class="float-left q-mr-sm"
      />
      <h3 class="pl-4 text-primary">Cadastrar</h3>
    </div>

    <q-input
      autofocus="true"
      ref="emailRef"
      v-model="newUser.email"
      filled
      label="E-mail"
      hint="Seu melhor e-mail"
      lazy-rules
      :rules="[
        (val) => (val && val.length > 0) || 'Por favor, digite seu e-mail.',
        (val, rules) => rules.email(val) || 'Digite um e-mail válido.',
      ]"
    />

    <q-input
      v-model="newUser.password"
      filled
      maxlength="8"
      type="password"
      label="Senha"
      lazy-rules
      :rules="[
        (val) => (val !== null && val !== '') || 'Por favor, digite uma senha',
      ]"
    />

    <div class="row justify-center">
      <q-btn label="Cadastrar" type="submit" color="primary" @click="onSubmit" />
      <q-btn
        @click="onReset"
        label="Limpar"
        type="reset"
        color="primary"
        flat
        class="q-ml-sm"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
import { useNewUserPage } from "./useNewUserPage";
import { useQuasar } from 'quasar'

//..the ref of HTML element
const emailRef = ref(null)

//..import the objects from use file
const { newUser, createUser } = useNewUserPage();

//..use quasar to show spinner
const $q = useQuasar()

//..reset
const onReset = () => {
    newUser.email = ''
    newUser.password = ''
    emailRef.value.focus()
}

//..button to submit
const onSubmit = () => {
  createUser(newUser)
}

</script>
<style lang="scss" scoped></style>
