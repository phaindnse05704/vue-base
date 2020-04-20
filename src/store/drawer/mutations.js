import { mutations as TYPES } from "./types";
import { defaultState } from "./state";

const mutations = {
  [TYPES.DRAWER_RESET](state) {
    const defaults = defaultState();
    defaults.keys().forEach(key => {
      state[key] = defaults[key];
    })
  },
  [TYPES.TOGGLE_DRAWER](state, status = null) {
    if (status != null) {
      state.opening = status;
    } else {
      state.opening = !state.opening;
    }
  },
  [TYPES.UPDATE_WINDOW_SIZE](state, { height, width }) {
    state.windowHeight = height;
    state.windowWidth = width;
  }
};

export default mutations;
