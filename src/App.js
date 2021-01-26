import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import StarCanvas from './StarfieldCanvas';
import 'bootstrap/dist/css/bootstrap.min.css';

import Graphical from './Calculate/Root of Equation/Graphical';
import Bisection from './Calculate/Root of Equation/Bisection';
import FalsePosition from './Calculate/Root of Equation/False_position';
import Onepoint from './Calculate/Root of Equation/Onepoint';
import Newton from './Calculate/Root of Equation/Newton-raphson';
import Secant from './Calculate/Root of Equation/Secant';
// import Cramer from './Calculate/Linear Algebra/Cramer';
// import Gauss from './Calculate/Linear Algebra/Gauss';
// import Jordan from './Calculate/Linear Algebra/Jordan';
// import Inverse from './Calculate/Linear Algebra/Inverse';
// import LU from './Calculate/Linear Algebra/LU';
// import Cholesky from './Calculate/Linear Algebra/Cholesky';
// import Jacobi from './Calculate/Linear Algebra/Jacobi';
// import Seidel from './Calculate/Linear Algebra/Seidel';
// import Gradient from './Calculate/Linear Algebra/Gradient';
// import NewtonInterpolate from './Calculate/Interpolation/Newton';
// import Lagrange from './Calculate/Interpolation/Lagrange';
// import Spline from './Calculate/Interpolation/Spline';
// import Linear from './Calculate/Regression/Linear';
// import Polynomial from './Calculate/Regression/Polynomial';
// import MultipleLinear from './Calculate/Regression/MultipleLinear';
// import CompositeTrapezoidal from './Calculate/Integration/CompositeTrapzoidal';
// import CompositeSimpson from './Calculate/Integration/CompositeSimpson';
// import ForwardH from './Calculate/Differentiation/Forwardh';
// import ForwardH2 from './Calculate/Differentiation/ForwardH2';
// import BackwardH from './Calculate/Differentiation/Backwardh';
// import BackwardH2 from './Calculate/Differentiation/Backwardh2';
// import CentralH from './Calculate/Differentiation/Centralh';
// import CentralH2 from './Calculate/Differentiation/Centralh2';
// import Euler from './Calculate/ODE/Euler';
// import Heun from './Calculate/ODE/Heun';
// import ModifiedEuler from './Calculate/ODE/Modified_Euler';


const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class App extends Component {

  render() {
    return (
      <Router>
        <Layout>
          <Header className="header" style={{ height: "80px" }}>
            <div className="headertext">
              {/* <Icon type="fund" theme="filled" style={{ color: "white", fontSize: "70%", float: "left", marginTop: "2%" }} /> */}
              <label className="typewriter">
                &nbsp;&nbsp;&nbsp;Numerical Method
              </label>

            </div>
          </Header>

          <Layout>
            <StarCanvas />
            <Sider width={335} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                style={{ height: '80vh', borderRight: 0, backgroundColor: "#001529", overflowY: "scroll" }}
                theme="dark"

              >
                <SubMenu key="root_submenu" title={<span>Root of Equation</span>}>
                  <Menu.Item key="menu_graphical" ><Link to="/graphical">Graphical</Link></Menu.Item>
                  <Menu.Item key="menu_bisection" ><Link to="/bisection">Bisection</Link></Menu.Item>
                  <Menu.Item key="menu_false"><Link to="/false-position">False Position</Link></Menu.Item>
                  <Menu.Item key="menu_onepoint"><Link to="/one-point">One-Point Iteration</Link></Menu.Item>
                  <Menu.Item key="menu_newton"><Link to="/newton-raphson">Newton-Raphson</Link></Menu.Item>
                  <Menu.Item key="menu_secant"><Link to="/secant">Secant Method</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="algebra_submenu" title={<span>Linear Algebra</span>}>
                  <Menu.Item key="menu_cramer">Cramer's Rule</Menu.Item>
                  <Menu.Item key="menu_gauss">Gauss's Elimination</Menu.Item>
                  <Menu.Item key="menu_jordan">Gauss Jordan Method</Menu.Item>
                  <Menu.Item key="menu_inverse">Matrix Inversion</Menu.Item>
                  <Menu.Item key="menu_lu">LU Decomposition</Menu.Item>
                  <Menu.Item key="menu_cholesky">Cholesky Decomposition</Menu.Item>
                  <Menu.Item key="menu_jacobi">Jacobi Iteration Method</Menu.Item>
                  <Menu.Item key="menu_seidel">Gauss Seidel Iteration</Menu.Item>
                  <Menu.Item key="menu_gradient">Conjugate Gradient Method</Menu.Item>
                </SubMenu>
                <SubMenu key="interpolate_submenu" title={<span>Interpolation</span>}>
                  <Menu.Item key="menu_divide">Newton Divide Difference</Menu.Item>
                  <Menu.Item key="menu_lagrange">Lagrange</Menu.Item>
                  <Menu.Item key="menu_spline">Spline</Menu.Item>
                </SubMenu>
                <SubMenu key="regression_submenu" title={<span>Least Squares Regression</span>}>
                  <Menu.Item key="menu_linear">Linear Regression</Menu.Item>
                  <Menu.Item key="menu_poly">Polynomial Regression</Menu.Item>
                  <Menu.Item key="menu_multiple">Multiple Linear Regression</Menu.Item>
                </SubMenu>
                <SubMenu key="integrate_submenu" title={<span>Integration</span>}>
                  <Menu.Item key="menu_compositeTrapzoidal">Composite Trapezoidal Rule</Menu.Item>
                  <Menu.Item key="menu_compositeSimpson">Composite Simpson's Rule</Menu.Item>
                </SubMenu>
                <SubMenu key="diff_submenu" title={<span>Differentiation</span>}>
                  <Menu.Item key="menu_forwardh">Forward Divided-Differences O(h)</Menu.Item>
                  <Menu.Item key="menu_backwardh">Backward Divided-Differences O(h)</Menu.Item>
                  <Menu.Item key="menu_centralh">Central Divided-Differences O(h{<sup>2</sup>})</Menu.Item>
                  <Menu.Item key="menu_forward2h">Forward Divided-Differences O(h{<sup>2</sup>})</Menu.Item>
                  <Menu.Item key="menu_backward2h">Backward Divided-Differences O(h{<sup>2</sup>})</Menu.Item>
                  <Menu.Item key="menu_central2h">Central Divided-Differences O(h{<sup>4</sup>})</Menu.Item>
                </SubMenu>
                <SubMenu key="de_submenu" title={<span>Ordinary Differential Equation</span>}>
                  <Menu.Item key="menu_euler">Euler's Method</Menu.Item>
                  <Menu.Item key="menu_heun">Heun's Method</Menu.Item>
                  <Menu.Item key="menu_modifier">Modifier Euler's Method</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content style={{ padding: 24, margin: 0, minHeight: 280, }}>
                <Switch>
                  <Route exact path="/graphical" component={Graphical} />
                  <Route exact path="/bisection" component={Bisection} />
                  <Route exact path="/false-position" component={FalsePosition} />
                  <Route exact path="/one-point" component={Onepoint} />
                  <Route exact path="/newton-raphson" component={Newton} />
                  <Route exact path="/secant" component={Secant} />
                </Switch>

              </Content>
            </Layout>
          </Layout>
          <Footer style={{ backgroundColor: "#001529", minHeight: 120 }}>
            {/* <p style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>
              © All Right Reserved<br />
              <Icon type="facebook" theme="filled" style={{ fontSize: "30px" }} /><a target="_blank" rel="noopener noreferrer" href="http://www.facebook.com/kornkung.h" style={{ color: "white", textDecoration: "none" }}> Ronnakorn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hompoa</a>
              <p style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>
                <Icon type="book" theme="filled" style={{ fontSize: "30px" }} /> Department of Computer and Information Science - King Mongkut's University of Technology North Bangkok
              </p>
            </p> */}


          </Footer>
        </Layout>
      </Router>
    )
  }
}
export default App;