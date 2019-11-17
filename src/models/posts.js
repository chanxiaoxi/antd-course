import * as postService from '../service/posts';

export default {
  namespace: "posts",
  state: {
    postList: []
  },
  effects: {
    *queryList({ _ }, { call, put }) {
      const res = yield call(postService.queryList);
      yield put({ type: "saveList", payload: { postList: res.data } });
    }
  },
  reducers: {
    saveList(state, { payload: { postList } }) {
      return {
        ...state,
        postList
      };
    }
  }
};
