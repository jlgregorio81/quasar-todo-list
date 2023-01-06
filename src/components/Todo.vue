<template>
  <div class="todo shadow-2 rounded-borders">
    <div
      class="row q-pa-sm"
      :class="
        todo.status == 'A fazer'
          ? 'bg-red-2'
          : todo.status == 'Fazendo'
          ? 'bg-blue-2'
          : 'bg-green-2'
      "
      style="cursor: pointer"
    >
      <div class="col-xs-12 col-md-9 text-body-1">
        <q-input
          filled
          dense
          label="Descrição"
          readonly
          type="text"
          v-model="todo.description"
        />
      </div>
      <div class="col-xs-12 col-md-3">
        <q-input
          class="q-ml-sm"
          readonly
          label="Status"
          dense
          filled
          v-model="todo.status"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-6 text-grey q-pa-sm">Atualizado em: {{ formatDate(todo.time) }}</div>
      <div class="col-xs-12 col-md-6">
        <div class="row justify-end">
          <q-btn
            icon="edit"
            flat
            color="secondary"
            @click="$emit('editClicked')"
            >Editar</q-btn
          >
          <q-btn icon="delete" flat color="red" @click="$emit('deleteClicked')"
            >Excluir</q-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      statusList: ["A fazer", "Fazendo", "Feito"],
      oldTodoData: {},
    };
  },
  methods: {
    formatDate(timeStampDate) {
      let date = new Date(parseInt(timeStampDate));
      return date.toLocaleDateString('pt-BR')
    },
  },
  watch: {},
  emits: ["editClicked", "deleteClicked"],
  props: {
    todo: {
      id: {
        type: String,
        required: true,
        default: "ID da tarefa...",
      },
      description: {
        type: String,
        required: true,
        default: "Descrição da tarefa...",
      },
      status: {
        type: String,
        required: true,
        default: "todo",
      },
      time: {
        type: String,
        require: true,
        default: new Date().getTime(),
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.todo {
  margin-bottom: 10px;
  background-color: rgb(247, 246, 251);
}
</style>
