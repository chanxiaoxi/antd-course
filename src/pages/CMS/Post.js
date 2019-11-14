import React from "react";
import { Table } from "antd";
import { connect } from "dva";

function mapStateToProps(state) {
  return {
    cardsList: state.posts.postList,
    loading: state.loading.effects["posts/queryList"]
  };
}

class Posts extends React.Component {
  columns = [
    {
      title: "ID",
      dataIndex: "id"
    },
    {
      title: "图片",
      dataIndex: "image"
    },
    {
      title: "名称",
      dataIndex: "name"
    },
    {
      title: "栏目",
      dataIndex: "category"
    },
    {
      title: "创建时间",
      dataIndex: "created_at"
    },
    {
      title: "状态",
      dataIndex: "status"
    }
  ];

  componentDidMount() {
    this.props.dispatch({
      type: "posts/queryList"
    });
  }

  render() {}
}
