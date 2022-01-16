<template>
  <section class="vh-100" style="background-color: #c5adf1">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 15px">
            <div class="card-body p-5">
              <fa :icon="['fas', 'dog']" size="4x" class="mb-3" />
              <form @submit.prevent="addItems">
                <div>
                  <input v-model="item" type="text" placeholder="What to do?" />
                  <fa
                    :icon="['far', 'star']"
                    v-if="!favorite"
                    @click="favorite = !favorite"
                    class="ms-2"
                    style="color: darkgoldenrod"
                  />
                  <fa
                    v-else
                    :icon="['fas', 'star']"
                    @click="favorite = !favorite"
                    class="ms-2"
                    style="color: darkgoldenrod"
                  />
                </div>
              </form>

              <ul class="list-group mb-0">
                <li
                  v-for="todo in todos"
                  :key="todo"
                  :class="[
                    todo.complete
                      ? 'text-decoration-line-through list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2'
                      : 'list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2',
                  ]"
                >
                  <div class="d-flex align-items-center">
                    <fa
                      :icon="['far', 'square']"
                      v-if="!todo.complete"
                      @click="completeItem(todo)"
                      class="me-2"
                    />
                    <fa
                      v-else
                      :icon="['far', 'check-square']"
                      @click="completeItem(todo)"
                      class="me-2"
                    />

                    {{ todo.title }}
                  </div>
                  <div class="mr-0">
                    <fa
                      :icon="['far', 'star']"
                      v-if="!todo.favorite"
                      @click="setFavoriteItem(todo)"
                      class="me-2"
                      style="color: darkgoldenrod"
                    />
                    <fa
                      v-else
                      :icon="['fas', 'star']"
                      @click="setFavoriteItem(todo)"
                      class="me-2"
                      style="color: darkgoldenrod"
                    />
                    <fa
                      :icon="['far', 'trash-alt']"
                      @click="delteItem(todo)"
                      style="color: red"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'addItems',
  data() {
    return {
      todos: [],
      item: '',
      favorite: false,
      complete: false,
    };
  },
  methods: {
    addItems: function () {
      if (this.item !== '') {
        let date = new Date();
        let newEntry = {
          id: date.getTime(),
          title: this.item,
          favorite: this.favorite,
          complete: this.complete,
        };
        if (newEntry.favorite) {
          this.todos.splice(0, 0, newEntry);
        } else {
          this.todos.push(newEntry);
        }
      }
      this.item = '';
      this.favorite = false;
    },
    completeItem(todo) {
      todo.complete = !todo.complete;
    },
    setFavoriteItem(todo) {
      todo.favorite = !todo.favorite;

      let index = this.todos.findIndex((element) => element.id === todo.id);
      if (todo.favorite === true) {
        this.todos.splice(index, 1);
        this.todos.splice(0, 0, todo);
      } else {
        this.todos.splice(index, 1);
        this.todos.push(todo);
      }
    },
    delteItem(todo) {
      let index = this.todos.findIndex((element) => element.id === todo.id);
      this.todos.splice(index, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container {
  width: 540px;
}
</style>
