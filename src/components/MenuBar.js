import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Header } = Layout

function MenuBar() {
     return (
          <Header
               style={{
                    position: 'fixed',
                    zIndex: 1,
                    width: '100vw',
               }}
          >
               <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1">
                         <Link to="/">LOGO</Link>
                    </Menu.Item>
                    <Menu.Item key="1">
                         <Link to="/login">Log In</Link>
                    </Menu.Item>
                    <Menu.Item key="2">Sign Up</Menu.Item>
                    <Menu.Item key="3">Post Quote</Menu.Item>
                    <Menu.Item key="4">Logout</Menu.Item>
               </Menu>
          </Header>
     )
}

export default MenuBar
