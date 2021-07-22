import React from 'react';
import Styled, { keyframes } from 'styled-components';

interface ButtonProps {
  hovered: boolean;
}

interface FormInputs {
  amount: number;
  email: string;
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const NakedInput = Styled.input`
  border: 0;
  outline: none;
`;

const Denomination = Styled.span`
  color: rgb(152, 161, 178);
`;

const BuyButton = Styled.button<ButtonProps>`
  max-width: ${props => props.hovered ? "12rem" : 0};
  -webkit-transition: max-width 0.5s;
  transition: max-width 0.5s;
  display: inline-flex;
`;

const DropUpMenu = Styled.div`
  width: 20rem;
`

const ButtonText = Styled.span`
  animation: ${fadeIn} 0.75s;
`

const BuyMenu = () => {
  const [hover, setHover] = React.useState<boolean>(false);
  const [displayMenu, setDisplayMenu] = React.useState<boolean>(false);
  const [formInputs, setFormInputs] = React.useState<FormInputs>({ amount: 0, email: '' })

  const handleInputs = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormInputs({
      ...formInputs,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <div className="is-flex is-justify-content-flex-end section">
      <div className={`dropdown is-right is-up ${displayMenu && 'is-active'}`}>
        <div className="dropdown-trigger">
          <BuyButton
            aria-label="Buy Docoin"
            hovered={hover}
            onClick={() => setDisplayMenu(!displayMenu)}
            aria-haspopup="true"
            aria-controls="buy-drop-up"
            className="button is-rounded is-primary is-large buy-box"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
              { displayMenu && <span className="icon is-medium"><i className="fas fa-times"></i></span>}
              { hover && !displayMenu && <ButtonText>Buy Docoin</ButtonText> }
              { !hover && !displayMenu && <span className="icon is-medium"><i className="fas fa-home"></i></span> }

          </BuyButton>
        </div>
        <DropUpMenu className="dropdown-menu" id="buy-drop-up" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <h4 className="title has-text-left is-4">
                Buy Docoin
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="is-flex is-justify-content-flex-start">
                    <Denomination className="is-size-2">$</Denomination>
                    <NakedInput
                      className="is-size-2"
                      name="amount"
                      type="number"
                      min=".01"
                      placeholder="0"
                      step=".01"
                      required
                      value={formInputs.amount}
                      onChange={handleInputs}
                    />
                </div>
                <div className="field">
                  <label className="label has-text-left">
                    Your Email
                  </label>
                  <div className="control">
                    <input
                      className="input is-primary"
                      type="email"
                      name="email"
                      value={formInputs.email}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <button className="button is-primary">Continue</button>
              </form>
            </div>
          </div>
        </DropUpMenu>
      </div>
    </div>
  )
};

export default BuyMenu;