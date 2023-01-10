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
      <div class="col-xs-12 text-body-1">
        <q-input
          filled
          dense
          label="Descrição"
          :readonly="!needToSave"
          type="text-area"
          autogrow
          v-model="todo.description"
          ref="inputDescription"
        />
      </div>
      <!-- <div class="col-xs-12 col-md-3">
        <q-input
          class="q-ml-sm"
          readonly
          label="Status"
          dense
          filled
          v-model="todo.status"
        />
      </div> -->
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-4 text-grey q-pa-sm">
        Criado em: {{ formatDate(todo.time) }}
      </div>
      <div class="col-xs-12 col-md-8">
        <div class="row justify-end">
          <q-select
            :options="statusList"
            dense
            label="Status"
            v-model="todo.status"
            @update:model-value="$emit('statusChanged')"
          />
          <q-btn icon="save" flat color="primary" :disable="!needToSave" @click="saveClicked()" />
          <q-btn icon="cancel" flat color="secondary" :disable="!needToSave" @click="cancelClicked()"  />
          <q-btn
            icon="edit"
            flat
            color="secondary"
            @click="editClicked()"
            :disable="needToSave"
          ></q-btn>
          <q-btn
            icon="delete"
            flat
            color="red"
            @click="$emit('deleteClicked')"
          ></q-btn>
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
      needToSave: false,
      oldTodo: {
        description: '',
        status: ''
      },

    };
  },
  methods: {
    formatDate(timeStampDate) {
      let date = new Date(parseInt(timeStampDate));
      return date.toLocaleDateString("pt-BR");
    },
    editClicked() {
      this.$emit("editClicked");
      this.needToSave = true
      this.oldTodo.description = this.todo.description
      this.oldTodo.status = this.todo.status
      this.$refs.inputDescription.focus()
    },
    saveClicked(){
      this.needToSave = false
      this.$emit("saveClicked")
    },
    cancelClicked(){
      this.needToSave = false
      this.todo.description = this.oldTodo.description
      this.todo.status = this.oldTodo.status
    }
  },
  emits: ["saveClicked", "editClicked", "deleteClicked", 'statusChanged'],
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
