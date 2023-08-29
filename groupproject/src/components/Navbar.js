function Navbar() {
  return (
    <Nav>
      <Logo>
        <span>Shopify</span>
      </Logo>
      <LinksContainer>
        <List>
          <ListItem>
            <NavLink to="/">Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/about">About</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/contact">Contact</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/login">Login</NavLink>
          </ListItem>
        </List>
      </LinksContainer>
      
    </Nav>
  );
}

export default Navbar;