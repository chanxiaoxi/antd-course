import { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import Link from "umi/link";

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: "100vh", color: "white" }}>
          <div
            style={{
              height: "32px",
              background: "rgba(255, 255, 255, .2)",
              margin: "16px"
            }}
          />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="home" />
                <span>仪表盘</span>
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="2">
              <Icon type="file" />
              <span>页面</span>
            </Menu.Item> */}
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="inbox" />
                  <span>新闻</span>
                </span>
              }
            >
              <Menu.Item key="2">
                <Link to="/cms/article">文章</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/cms/category">栏目</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/cms/tag">标签</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="5">
              <Link to="/puzzlecards">PuzzleCards</Link>
            </Menu.Item>
            {/* <Menu.Item key="3">
              <Icon type="team" />
              <span>会员</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="folder-open" />
              <span>媒体</span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="skin" />
                  <span>网站外观</span>
                </span>
              }
            >
              <Menu.Item key="2">小工具</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="apartment" />
                  <span>机构</span>
                </span>
              }
            >
              <Menu.Item key="2">机构列表</Menu.Item>
              <Menu.Item key="3">用户管理</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="setting" />
                  <span>设置</span>
                </span>
              }
            >
              <Menu.Item key="2">通用</Menu.Item>
              <Menu.Item key="3">电子邮件</Menu.Item>
              <Menu.Item key="4">API Clients</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              title={
                <span>
                  <Icon type="setting" />
                  <Icon type="security-scan" />
                  <span>后台管理</span>
                </span>
              }
            >
              <Menu.Item key="2">角色组及权限</Menu.Item>
              <Menu.Item key="3">用户管理</Menu.Item>
              <Menu.Item key="4">超级用户管理</Menu.Item>
              <Menu.Item key="5">系统信息</Menu.Item>
              <Menu.Item key="6">缓存管理</Menu.Item>
              <Menu.Item key="7">翻译</Menu.Item>
              <Menu.Item key="8">系统日志</Menu.Item>
              <Menu.Item key="9">历史记录</Menu.Item>
              <Menu.Item key="10">备份</Menu.Item>
              <Menu.Item key="11">请求日志</Menu.Item>
              <Menu.Item key="12">插件</Menu.Item>
            </SubMenu> */}
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: "#fff", textAlign: "center", padding: 0 }}
          >
            Header
          </Header>
          <Content className="ant-layout" style={{ textAlign: "center" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360, margin: 25 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer>Ant Design &copyright;2019 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
