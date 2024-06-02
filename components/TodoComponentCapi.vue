<script setup>
  import {ref, computed} from 'vue'

  const todoList = ref([])
  const numberOfTodos = computed(() => todoList.value.length)
  const completedTodos = computed(() => todoList.value.filter(todo => todo.completed))
  const pendingTodos = computed(() => todoList.value.filter(todo => !todo.completed))
  const percentageOfCompletedTodos = computed(() => {
    let myCompletedTodos = completedTodos.value.length
    return myCompletedTodos === 0 ? 0 : (myCompletedTodos / numberOfTodos.value) * 100
  })
  const changeTodoStatus = (myTodo) => {
    const todo = todoList.value.find(todo => todo.id === myTodo.id)
    todo.completed = !todo.completed
  }

  const fetchTodos = async () => {
    await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        todoList.value = json
      })
  }

</script>

<template>
  <button @click="fetchTodos">Fetch Todos</button>
  <p>Total Number of Todos: {{ numberOfTodos }}</p>
  <p>Completed Todos: {{ completedTodos.length }}</p>
  <p>Pending Todos: {{ pendingTodos.length }}</p>
  <p>Percentage of Completed Todos: {{ percentageOfCompletedTodos }}%</p>
  <ul>
    <li v-for="todo in todoList" :key="`todo-id-${todo.id}`">
      <input type="checkbox" :checked="todo.completed" @click="changeTodoStatus(todo)" />
      {{ todo.title }}
    </li>
  </ul>
</template>
