// src/components/TodoList.js
const TodoList = () => import("./todolist.js");

export default {
    name: "TodoComponent",
    components: {
        TodoList,
    },
    data() {
        return {
            users: [
                {
                    img: "./Assets/jimp3fp.jpg",
                    name: "Jim Penner",
                    department: "Development",
                    info:
                        "Aspiring FinTech entrepreneur",
                    showInfo: false
                }
                // ...
            ],
            lists: [
                {
                    id: 1,
                    title: 'Updload Driver License',
                    isComplete: false,
                },
                {
                    id: 2,
                    title: 'Provide Tax File Number',
                    isComplete: true,
                },
                {
                    id: 3,
                    title: 'Submit Funds',
                    isComplete: false
                }
            ],
            addTodoInput: '',
            hasError: false,
            message: 'Welcome to client todo app',
        };
    },
    computed: {
        filterLists: function () {
            console.log('Should be filtering', this.lists);
            return _.orderBy(this.lists, ['isComplete', false])
        }
    },
    methods: {
        toggleUserDetails: function (user) {
            console.log("Am i getting called?", user);
            user.showInfo = !user.showInfo;
        },
        addTask: function () {
            if (!this.addTodoInput) {
                this.hasError = true;
                return;
            }

            this.hasError = false;

            this.lists.push({
                id: this.lists.length + 1,
                title: this.addTodoInput,
                isComplete: false
            });

            this.addTodoInput = ''; // clear the input
        },
        removeItem(item) {
            console.log("REMOVE item ", item);
            var index = _.findIndex(this.lists, item);
            this.lists.splice(index, 1);
        },
        updateItem(item) {
            console.log('UPDATE', item);
            item.isComplete = !item.isComplete;
        }
    },
    template: `
    <div>
      <h3>{{message}}</h3>
      <form name="todo-form" method="post" action="" v-on:submit.prevent="addTask">
        <input name="add-todo" v-model="addTodoInput" type="text"/>
        <button class="" type="submit">Add</button>
      </form>

      <div class="todo-lists" v-if="lists.length">
        <h3>My Todo Tasks</h3>
        <ul>
          <todo-list v-for="list in filterLists" v-bind:todo="list" 
            v-bind:key="list.id" 
            v-on:remove="removeItem"
            v-on:updateItem="updateItem"></todo-list>
        </ul>
      </div>

    </div>
  `
};
