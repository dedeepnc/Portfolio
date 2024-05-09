// *NEW* RRD6 "Outlet" component
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => (
  <div className="app">
    <Navbar />
    <div className="appContent">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Layout