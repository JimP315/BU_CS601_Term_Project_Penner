<template>
    <div class="container">
        <div class="task">
            <!--title-->
            <div class="title">
                <h1>To Do list</h1>
            </div>
            <div class="form">
                <input type="text" placeholder="New Task" v-model="newTask"/>
                <button @click="addTask"><i class="fas solid fa-plus"></i></button>
            </div>
            <div class="taskItems">
                <ul>
                    <li v-for="task in tasks" :key="task.id">
                        <button>{{ task.title }}</button>
                        <button><i class="far fa-trash-alt"></i></button>
                    </li>

                </ul>
            </div>
            <div class="clearBtn">
                <button>@click="clearComplete">Clear completed</button>
                <button @click="clearAll">Clear all:</button>
            </div>
            <div class="pendingTasks">
                <span>Pending Tasks: {{ incomplete }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Task",
    props: ['tasks'],
    data() {
        return {
            newTask:"",
        }
    },
    computed: {
        incomplete() {
            return this.tasks.filter(this.inProgress).length;
        }
    },
    methods: {
        addTask() {
            if(this.newTask) {
                this.tasks.push({
                    title:this.newTask,
                    completed: false
                });
                this.newTask = "";
            }
        },
        inProgress(tasks) {
            return !this.isComplete(task);
        },
        isComplete(task) {
            return task.completed;
        },
        clearComplete() {
            this.tasks = this.tasks.filter(this.inProgress);
        },
        clearAll() {
            this.tasks = [];
        }
    },
};
</script>