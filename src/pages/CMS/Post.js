import React from "react";
import {
  Table,
  Avatar,
  Tag,
  Button,
  Tooltip,
  Modal,
  Form,
  FormItem,
  Input,
  Switch
} from "antd";
import { connect } from "dva";
import moment from "moment";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";

function mapStateToProps(state) {
  return {
    postList: state.posts.postList,
    loading: state.loading.effects["posts/queryList"]
  };
}

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createModalVisible: false,
      editorValue: ""
    };
  }

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

  handleCreateOk = () => {
    const {
      form: { validateFields }
    } = this.props;

    validateFields((err, values) => {
      if (!err) {
        this.setState({ createModalVisible: false });
      }
    });
  };

  handleCreateCancel = () => this.setState({ createModalVisible: false });

  showCreateModal = () => this.setState({ createModalVisible: true });

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <div style={{ textAlign: "left" }}>
          <Button
            type="primary"
            icon="plus-circle"
            style={{ marginBottom: "20px" }}
            onClick={this.showCreateModal}
          >
            新建文章
          </Button>
          <Modal
            title="新建文章"
            visible={this.state.createModalVisible}
            onOk={this.handleCreateOk}
            onCancel={this.handleCreateCancel}
            okText="确定"
            cancelText="取消"
            width={1000}
          >
            <Form layout="vertical">
              <Form.Item label="名称">
                {getFieldDecorator("name", {
                  placeholder: "名称",
                  rules: [{ required: true, message: "名称必须" }]
                })(<Input />)}
                {/* <Input name="name" placeholder="名称" size="large" /> */}
              </Form.Item>
              <Form.Item label="简介">
                <Input.TextArea
                  rows={4}
                  placeholder="请在这里输入简介，不超过200字"
                />
              </Form.Item>
              <Form.Item label="精选？">
                <Switch
                  checkedChildren="开"
                  unCheckedChildren="关"
                  defaultChecked
                />
              </Form.Item>
              <Form.Item label="内容">
                <div style={{ border: "1px solid #ccc" }}>
                  <BraftEditor
                    value={this.editorValue}
                    onChange={this.handleEditChange}
                    onSave={this.submitContent}
                  />
                </div>
              </Form.Item>
            </Form>
          </Modal>
        </div>

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

export default connect(mapStateToProps)(Form.create()(Posts));
