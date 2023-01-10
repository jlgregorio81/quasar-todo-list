<template>
  <div>
    <div class="q-pa-md" style="max-width: 400px; margin: 0 auto">
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
        autofocus="true"
        filled
        label="E-mail"
        hint="E-mail"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Por favor, digite seu e-mail.',
          (val, rules) => rules.email(val) || 'Digite um e-mail válido.',
        ]"
      />

      <q-input
        filled
        maxlength="8"
        type="text"
        label="Nome Completo"
        lazy-rules
        :rules="[
          (val) =>
            (val !== null && val !== '') || 'Por favor, digite uma senha',
        ]"
      />

      <div class="row justify-center">
        <q-btn
          label="Atualizar"
          type="submit"
          color="primary"
          @click="onSubmit"
        />
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
  </div>
</template>

<script setup>
import { useUserProfilePage } from "./useUserProfilePage.js";

const { storeAuth } = useUserProfilePage();
</script>

<style lang="scss" scoped></style>
