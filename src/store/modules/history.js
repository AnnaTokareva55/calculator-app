const historyStore = {
  namespaced: true,
  state: {
    history: []
  },
  getters: {
    historyList: ({ history }) => history
  },
  mutations: {},
  actions: {}
};

export default historyStore;
