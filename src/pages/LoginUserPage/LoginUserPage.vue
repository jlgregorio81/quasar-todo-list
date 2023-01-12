<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div class="row q-pa-md justify-center items-center" style="height: 90vh">
      <div class="col-xs-12 col-md-3">
        <div>
          <q-icon
            name="login"
            size="48px"
            color="primary"
            class="float-left q-mr-sm"
          />
          <h3 class="pl-4 text-primary">Entrar</h3>
        </div>
        <q-form @submit.prevent="onSubmit" @reset="onReset">
          <q-input
            autofocus
            ref="emailRef"
            v-model="user.email"
            filled
            label="E-mail"
            hint="Seu melhor e-mail"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor, digite seu e-mail.',
              (val, rules) => rules.email(val) || 'Digite um e-mail válido.',
            ]"
          />

          <q-input
            v-model="user.password"
            filled
            maxlength="8"
            type="password"
            label="Senha"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Por favor, digite uma senha',
            ]"
          />

          <div class="row justify-center">
            <q-btn
              label="Entrar"
              type="submit"
              color="primary"
            />
            <q-btn
              label="Limpar"
              type="reset"
              color="secondary"              
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </div>
    </div>
  </transition>
</template>
<script setup>
import { ref } from "vue";
import { useLoginUserPage } from "./useLoginUserPage";

//..the ref of HTML element
const emailRef = ref(null);

//..import the objects from use file
const { user, loginUser } = useLoginUserPage();

//..reset of the data
const onReset = () => {
  user.email = "";
  user.password = "";
  emailRef.value.focus();
};

//..button to submit
const onSubmit = () => {
  loginUser();
};
</script>
<style lang="scss" scoped></style>
