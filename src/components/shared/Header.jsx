import styled from 'styled-components';

const Logo = styled.h2`
  font-family: 'Fraunces', serif;
  font-weight: 700;
  /* font-style: italic; */
  letter-spacing: -0.8px;
`;

export default function Header() {
  return (
    <div>
      <Logo>Sephine</Logo>
    </div>
  );
}
