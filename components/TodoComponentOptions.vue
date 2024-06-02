<script>
import { defineNuxtComponent } from '#app'

export default defineNuxtComponent({
  name: 'TodoApp',
  data: () => ({
    todosList: [],
    photoList: [],
  }),
  methods: {
    fetchTodos() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
          this.todosList = json
        })
    },
    changeTodoStatus(myTodo) {
      const todo = this.todosList.find(todo => todo.id === myTodo.id)
      todo.completed = !todo.completed
    },
  },
  computed: {
    numberOfTodos() {
      return this.todosList.length
    },
    completedTodos() {
      return this.todosList.filter(todo => todo.completed)
    },
    pendingTodos() {
      return this.todosList.filter(todo => !todo.completed)
    },
    percentageOfCompletedTodos() {
      let completedTodos = this.completedTodos.length
      return completedTodos === 0 ? 0 : (completedTodos / this.numberOfTodos) * 100
    },
  },
})
</script>


<template>
  <button @click="fetchTodos">Fetch Todos</button>
  <p>Total Number of Todos: {{ numberOfTodos }}</p>
  <p>Completed Todos: {{ completedTodos.length }}</p>
  <p>Pending Todos: {{ pendingTodos.length }}</p>
  <p>Percentage of Completed Todos: {{ percentageOfCompletedTodos }}%</p>
  <ul>
    <li v-for="todo in todosList" :key="`todo-id-${todo.id}`">
      <input type="checkbox" :checked="todo.completed" @click="changeTodoStatus(todo)" />
      {{ todo.title }}
    </li>
  </ul>
  <img src="/sunset.jpg" />
  <span>
        <slot />
    </span>
</template>
