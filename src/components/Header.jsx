function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Kitchenpedia</h1>

      <nav>
        <ul className="navList">
          <li><a className="navLink" href="/">Home</a></li>
          <li><a className="navLink" href="/">Explore</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
