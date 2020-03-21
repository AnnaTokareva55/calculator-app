const historyStore = {
  namespaced: true,
  state: {
    operator: {
      divide: "/",
      multiply: "*",
      subtract: "-",
      add: "+"
    },
    history: [
      "2020-3-21 23:3:29 8 * 6 = 48",
      "2020-3-21 23:3:50 56 / 3 = 18.666666666666668"
    ]
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
