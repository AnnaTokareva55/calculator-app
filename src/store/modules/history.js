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
    ADD_OPERATION(state, newEl) {
      state.history.push(newEl);
    }
  },
  actions: {
    addToHistory({ commit }, newEl) {
      commit("ADD_OPERATION", newEl);
    }
  }
};

export default historyStore;
