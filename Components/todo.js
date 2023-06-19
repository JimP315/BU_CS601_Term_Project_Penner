// src/components/todo.js
import TodoComponent from './todoComponent.js';
export default {
  name: 'App',
  components: {
    TodoComponent,
  },
  template: `
      <div class="container mx-auto p-4">
        <todo-component></todo-component>
      </div>
    `,
};