import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [
      {
        _id: '1',
        title: 'Walk the dog',
        description: 'Go to the forest near the zoo'
      },
      {
        _id: '2',
        title: 'Buy grocery',
        description: 'Bread, tomatoes and potatoes'
      },
      {
        _id: '3',
        title: 'Learn coding',
        description: 'Tomorrow learn VueJs'
      }
    ],
    modalOpen: false
  },
  mutations: {
    toggleModalWindow: (state, payload) => {
      state.modalOpen = payload;
    },
    addTodo: (state, payload) => {
      state.list.push(payload);
    },
    updateTodo: (state, payload) => {
      const oldTodo = state.list.find(el => el._id === payload.id);
      Object.assign(oldTodo, payload);
    },
    deleteTodo: (state, id) => {
      const index = state.list.findIndex(el => el._id === id);
      state.list.splice(index, 1);
    }
  },
  actions: {
    openModalWindow: ({ commit }) => {
      commit('toggleModalWindow', true);
    },
    closeModalWindow: ({ commit }) => {
      commit('toggleModalWindow', false);
    },
    addTodo: ({ commit }, payload) => {
      commit('addTodo', payload);
      commit('toggleModalWindow', false);
    },
    updateTodo: ({ commit }, payload) => {
      commit('updateTodo', payload);
    },
    deleteTodo: ({ commit }, payload) => {
      commit('deleteTodo', payload);
    }
  },
  getters: {
    newId(state) {
      if (state.list.length) {
        return +state.list[state.list.length - 1]._id + 1;
      } else {
        return 1;
      }
    }
  }
});
