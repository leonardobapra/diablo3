import { getToken } from "@/api/oauth";
export const SET_ACCESS_TOKEN = "setAccessToken";
export const GET_TOKEN = "getToken";

const state = {
  accessToken: null,
};

const mutations = {
  [SET_ACCESS_TOKEN](state, payload) {
    state.accessToken = payload;
  },
};

const actions = {
  async [GET_TOKEN]({ commit }) {
    commit("loading/SET_LOADING", true, { root: true });
    try {
      const { data } = await getToken();
      state.accessToken = data.access_token;
    } catch (e) {
      commit(SET_ACCESS_TOKEN, null);
      throw new Error("Error OAuth", e);
    } finally {
      console.info("Done!");
      commit("loading/SET_LOADING", false, { root: true });
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
