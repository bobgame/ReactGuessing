import React, { Component } from 'react'
// import store from '../store'
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
import { Input, Button, List, Menu, Icon, Layout } from 'antd'
const { Header, Content, Footer, Sider } = Layout

class Lists extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    // this.state = store.getState()
  }
  render() {
    const { inputValue, inputChange, clickAddBtn, list, deleteItem } = this.props
    return (
      <div style={{ margin: '10px' }}>
        <h2>List: {this.state.id}</h2>
        <div>
          <Input
            placeholder="写点什么"
            style={{ width: '250px', marginRight: '10px' }}
            onChange={inputChange}
            value={inputValue}
          />
          <Button
            type="primary"
            onClick={clickAddBtn}
          >增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={list}
            renderItem={
              (item, index) => (
                <List.Item>
                  <span>{item}</span>
                  <Button type="danger"
                    // size={size}
                    onClick={() => deleteItem(index)}>X</Button>
                </List.Item>
              )
            }
          />
        </div>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken)
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type)
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['4']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="user" />
                <span className="nav-text">nav 4</span>
              </Menu.Item>
            </Menu>
          </Sider>
        </Layout>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </div>
    )
  }
  componentDidMount() {
    console.log(this.props.match)
    let tempId = this.props.match.params.id
    this.setState({ id: tempId })
  }
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: 'change_input',
        value: e.target.value
      }
      dispatch(action)
    },
    clickAddBtn() {
      let action = {
        type: 'add_item',
      }
      dispatch(action)
    },
    deleteItem(index) {
      let action = {
        type: 'delete_item',
        index
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Lists)
