![image-20240412144001983](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20240412144001983.png)

记录一下,居然被一道简单的v-for题难住了

```vue
<script>
// 给每个 todo 对象一个唯一的 id
let id = 0

export default {
  data() {
    return {
      newTodo: '',
      todos: [
        { id: id++, text: 'Learn HTML' },
        { id: id++, text: 'Learn JavaScript' },
        { id: id++, text: 'Learn Vue' }
      ]
    }
  },
  methods: {
    addTodo() {
      // ...
      this.todos.push({id:id++,text:this.newTodo})
      this.newTodo = ''
    },
    removeTodo(todo) {
      // ...
      this.todos=this.todos.filter((t)=>t!==todo)
    }
  }
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>
```

一开始的是写了`this.todos.push(this.newTodo)`,忘了`todos`数组中还嵌套着对象了

后面`filter()`竟然没有想出来。t是遍历出来的所有对象,与点击时传入的`todo`对比。`filter()`方法中括号内为真时保留,为假时过滤,故只有点击时的`todo`与`todos`相同的时候`t!==todo`为假值,过滤掉此项