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
            name="person_add"
            size="48px"
            color="primary"
            class="float-left q-mr-sm"
          />
          <h3 class="pl-4 text-primary">Cadastrar</h3>
        </div>
        <q-form @submit.prevent="onSubmit" @reset="onReset">
          <q-input
            autofocus
            ref="emailRef"
            v-model="newUser.email"
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
            v-model="newUser.password"
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
              label="Cadastrar"
              type="submit"
              color="primary"
            />
            <q-btn
              @click.prevent="onReset()"
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
import { useNewUserPage } from "./useNewUserPage";
import { useQuasar } from "quasar";

//..the ref of HTML element
const emailRef = ref(null);

//..import the objects from use file
const { newUser, createUser } = useNewUserPage();

//..reset of the data
const onReset = () => {
  newUser.email = "";
  newUser.password = "";
  emailRef.value.focus();
};

//..button to submit
const onSubmit = () => {
  createUser();
};
</script>
<style lang="scss" scoped></style>
