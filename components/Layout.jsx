/* eslint-disable react/react-in-jsx-scope */

import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <div class="container">
      {children}
    </div>
    <Footer />
  </div>
)
export default Layout;