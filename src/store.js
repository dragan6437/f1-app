import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      loggedUser: null,
      drivers: [],
      teams: [],
      webApiKey: null
    };
  },
  mutations: {
    loginUser(state, payload) {
      state.loggedUser = payload;
    },
    logoutUser(state) {
      state.loggedUser = null;
    },
    setDrivers(state, payload) {
      state.drivers = payload;
    },
    setTeams(state, payload) {
      state.teams = payload;
    },
    setWebApiKey(state, payload){
      state.webApiKey = payload;
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.loggedUser !== null;
    }
  }
});