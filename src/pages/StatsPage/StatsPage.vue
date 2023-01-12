<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div class="q-ma-md">
      <div class="row q-ma-sm justify-center">
        <div class="col-xs-12 col-md-3 q-ma-sm">
          <h4 class="text-indigo-14 text-center">Estatísticas</h4>
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
                Feito: {{ storeTodo.getCountDone }}
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
          <h4 class="text-indigo-14 text-center">Gráficos</h4>

          <Pie :data="chartData" :options="chartOptions" />
          <!-- <Bar :data="chartData" :options="chartOptions" /> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useStatsPage } from "./useStatsPage";
import {
  Chart as ChartJS,
  Title,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Pie, Bar } from "vue-chartjs";

ChartJS.register(
  Title,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const { storeTodo, chartData, chartOptions } = useStatsPage();
</script>

<style scoped>
stats {
  font-size: 1.5rem;
}
</style>
