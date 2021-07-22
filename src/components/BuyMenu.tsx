import React from 'react';
import Styled, { keyframes } from 'styled-components';

interface ButtonProps {
  hovered: boolean;
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const StyledButton = Styled.button<ButtonProps>`
  max-width: ${props => props.hovered ? "10rem" : 0};
  -webkit-transition: max-width 0.5s;
  transition: max-width 0.5s;
  display: inline-flex;
`;

const ButtonText = Styled.span`
  animation: ${fadeIn} 0.75s;
`

const BuyMenu = () => {
  const [hover, setHover] = React.useState<boolean>(false);

  return (
    <div className="is-flex is-justify-content-flex-end section">
      <StyledButton
        hovered={hover}
        className="button is-rounded is-primary is-large buy-box"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
          { hover && <ButtonText>Buy Docoin</ButtonText> }
          { !hover && <span className="icon is-medium"><i className="fas fa-home"></i></span> }
      </StyledButton>
    </div>
  )
};

export default BuyMenu;