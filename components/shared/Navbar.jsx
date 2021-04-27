/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
const Navbar = () => (
  <nav class="light-blue lighten-1" role="navigation">
  <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">APC LP MdN</a>
    <ul class="right hide-on-med-and-down">
      <li><a href="#">Compétences</a></li>
      <li><a href="#">SAE</a></li>
    </ul>

    <ul id="nav-mobile" class="sidenav">
      <li><a href="#">Navbar Link</a></li>
    </ul>
    <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  </div>
</nav>
);

export default Navbar;
