export default {
  namespace: "posts",
  state: {
    postList: []
  },
  effects: {
    *queryList({ _ }, { call, put }) {
      const res = yield call(postService.queryList);
      yield put({ type: "queryList", paylaod: { postList: res.result } });
    }
  },
  reducers: {
    queryList(state, { payload: { postList } }) {
      return {
        ...state,
        postList
      };
    }
  }
};
