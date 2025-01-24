import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  font-size: 1.4rem;
  display: flex;
  gap: 3rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

export default function NavBar() {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/about">About</StyledNavLink>
      <StyledNavLink to="/projects">Projects</StyledNavLink>
      <StyledNavLink to="/contact">Contact</StyledNavLink>
    </StyledNav>
  );
}
