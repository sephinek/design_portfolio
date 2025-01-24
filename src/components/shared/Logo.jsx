import styled from 'styled-components';

const StyledLogo = styled.h2`
  font-family: 'Fraunces', serif;
  font-weight: 700;
  /* font-style: italic; */
  letter-spacing: -0.8px;
`;

export default function Logo() {
  return <StyledLogo>Sephine</StyledLogo>;
}
