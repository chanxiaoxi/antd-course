import request from "../util/request";

export function queryList() {
  return request("/api/blog/posts");
}
