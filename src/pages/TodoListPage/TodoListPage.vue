<template>
    <div>
        <h1>Todo List</h1>
    </div>
</template>

<script setup>
import { useTodoListPage } from './useTodoListPage';

const { todoList, onMounted } = useTodoListPage()

</script>

<style lang="scss" scoped>

</style>