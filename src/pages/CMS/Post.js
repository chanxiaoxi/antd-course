import React from "react";
import { Table, Avatar, Tag, Button, Tooltip } from "antd";
import { connect } from "dva";
import moment from "moment";

function mapStateToProps(state) {
  return {
    postList: state.posts.postList,
    loading: state.loading.effects["posts/queryList"]
  };
}

class Posts extends React.Component {
  columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "图片",
      dataIndex: "image",
      key: "image",
      render: url => {
        return <Avatar shape="square" size={64} src={url} />;
      }
    },
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
        return <a href={record.id}>{text}</a>;
      }
    },
    {
      title: "栏目",
      dataIndex: "categories",
      key: "categories",
      render: (text, record) => {
        return record.categories.map(category => (
          <Tag key={category.id} color="cyan">
            {category.name}
          </Tag>
        ));
      }
    },
    {
      title: "创建时间",
      dataIndex: "updated_at",
      key: "updated_at",
      sorter: (a, b) => moment(a.updated_at).isBefore(b.updated_at)
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: text => {
        if (text === 0) {
          return <Tag color="#f50">已禁用</Tag>;
        }
        if (text === 1) {
          return <Tag color="#2db7f5">已发布</Tag>;
        }
      }
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => {
        return (
          <div>
            <Tooltip placement="top" title="编辑">
              <Button
                type="primary"
                icon="edit"
                style={{ marginRight: "10px" }}
              />
            </Tooltip>
            <Tooltip placement="top" title="删除">
              <Button type="danger" icon="delete" />
            </Tooltip>
          </div>
        );
      }
    }
  ];

  componentDidMount() {
    this.props.dispatch({
      type: "posts/queryList"
    });
  }

  render() {
    return (
      <div>
        <Table
          columns={this.columns}
          dataSource={this.props.postList}
          loading={this.props.loading}
          rowKey="id"
        ></Table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Posts);
