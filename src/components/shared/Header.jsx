import styled from 'styled-components';

const Logo = styled.h2`
  font-family: 'Fraunces', serif;
  font-weight: 200;
  font-style: italic;
`;

export default function Header() {
  return (
    <div>
      <Logo>Sephine Kang</Logo>
    </div>
  );
}
