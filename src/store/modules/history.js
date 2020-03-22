import axios from "axios";

const historyStore = {
  namespaced: true,
  state: {
    operator: {
      divide: "/",
      multiply: "*",
      subtract: "-",
      add: "+"
    },
    history: []
  },
  getters: {
    operator: ({ operator }) => operator,
    historyList: ({ history }) => history
  },
  mutations: {
    LOAD_HISTORY(state, data) {
      state.history = data;
    },
    ADD_OPERATION(state, newEl) {
      state.history.push(newEl);
    }
  },
  actions: {
    getHistory({ commit }) {
      axios.get("/api/history").then(response => {
        commit("LOAD_HISTORY", response.data);
      });
    },
    addToHistory({ commit }, newEl) {
      commit("ADD_OPERATION", newEl);
    }
  }
};

export default historyStore;
