import * as cardService from "../service/cards";

export default {
  namespace: "cards",
  state: {
    cardsList: []
  },
  effects: {
    *queryList({ _ }, { call, put }) {
      const res = yield call(cardService.queryList);
      yield put({ type: "saveList", payload: { cardsList: res.result } });
    }
  },
  reducers: {
    saveList(state, { payload: { cardsList } }) {
      //把cardsList merge到state中
      return {
        ...state,
        cardsList
      };
    }
  }
};
