import { Component } from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: "100vh", color: "white" }}>
          <div style={{ height: '32px', background: 'rgba(255, 255, 255, .2)', margin: '16px'}} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Helloworld</span>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}>
              <Menu.Item key="2">分析页</Menu.Item>
              <Menu.Item key="3">监控页</Menu.Item>
              <Menu.Item key="4">工作台</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: "#fff", textAlign: "center", padding: 0 }}
          >
            Header
          </Header>
          <Content style={{ textAlign: "center" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
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
