export default {
    name: 'TodoList',
    props: ['todo'],
    methods: {
        updateTask: function (e, list) {
            // this may or may not be working correctly :)
            e.preventDefault();
            console.log(e, list);
            e.target.blur();
        },
        completeTask: function (item) {
            this.$emit('updateItem', item);
        },
        removeTask: function (list) {
            // need to emit event to parent to remove from lists
            this.$emit('remove', list);
        }
    },
    template: `
      <li>
        <input type="checkbox" v-on:change="completeTask(todo)" v-bind:checked="todo.isComplete"/>
        <span class="title" contenteditable="true" v-on:keydown.enter="updateTask($event, todo)" v-on:blur="updateTask($event, todo)" v-bind:class="{completed: todo.isComplete}">{{todo.title}}</span>
        <span class="remove" v-on:click="removeTask(todo)">x</span>
      </li>
  `,
};