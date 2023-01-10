<template>
  <div class="q-ma-sm">
    <div class="row q-ma-sm justify-center">
      <div class="col-xs-12 col-md-3 q-ma-sm">
        <h4 class="text-indigo-14">Estatísticas</h4>
        <q-list separator>
          <q-item class="bg-red-2 text-h6">
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>
            <q-item-section>
              A fazer: {{ storeTodo.getCountTodo }}
            </q-item-section>
          </q-item>
          <!--  -->
          <q-item class="bg-blue-2 text-h6">
            <q-item-section avatar>
              <q-icon name="play_arrow" />
            </q-item-section>
            <q-item-section>
              Fazendo: {{ storeTodo.getCountDoing }}
            </q-item-section>
          </q-item>
          <!--  -->
          <q-item class="bg-green-2 text-h6">
            <q-item-section avatar>
              <q-icon name="done" />
            </q-item-section>
            <q-item-section>
              Fazendo: {{ storeTodo.getCountDone }}
            </q-item-section>
          </q-item>
          <!--  -->
          <q-item class="bg-black text-h6 text-white">
            <q-item-section avatar>
              <q-icon name="summarize" />
            </q-item-section>
            <q-item-section>
              Total: {{ storeTodo.getLength }}
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-xs-12 col-md-5 q-ma-sm">
        <h4 class="text-indigo-14">Gráficos</h4>
          
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStatsPage } from "./useStatsPage";

const { storeTodo } = useStatsPage();
</script>

<style scoped>
stats {
  font-size: 1.5rem;
}
</style>
