import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      drivers: [],
      teams: []
    };
  },
  mutations: {
    setDrivers(state, payload) {
      state.drivers = payload;
    },
    setTeams(state, payload){
      state.teams = payload;
    }
  }
});