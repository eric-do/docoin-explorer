import React from 'react';
import styled from 'styled-components';
import { IHistoricalCrypto } from '../../types';
import { dollarFormatter } from '../../utils';

const CardsSection = styled.div`
  margin-top: -130px;
`

const CardsContainer = styled.div`
  border-radius: 0.5rem;
  padding: 0;
  top: -150px;
`
const Card = styled.div``
const CardContent = styled.div``
const Content = styled.div``
const Level = styled.div``;

const Percentage = styled.div<{ isPositive: boolean}>`
  color: ${p => p.isPositive ? 'rgb(0, 178, 107)' : 'rgb(255, 68, 58)'}
`

interface IProps {
  currencies: IHistoricalCrypto[]
};

const CoinCards = ({ currencies }: IProps) => {
  return (
    <CardsSection className="section">
      <CardsContainer className="level is-justify-content-space-evenly is-mobile">
        {
          currencies.map(currency => (
            <Card className="card">
              <CardContent className="card-content ">
                <Content className="content">
                  <Level className="level">
                    <div className="level-left">
                    </div>
                    <div className="level-right">
                      <button className="button is-small level-item is-light is-link">Buy</button>
                      <button className="button is-small level-item is-light is-primary">Trade</button>
                    </div>
                  </Level>
                  <Level className="level">
                    <div className="level-left has-text-left">
                      <div className="level-item">
                        { currency.name }
                      </div>
                      <div className="level-item">
                      { currency.symbol }
                      </div>
                    </div>
                  </Level>
                  <Level className="level">
                    <div className="level-left">
                      <div className="level-item">
                        { dollarFormatter(currency.quote["USD"].price) }
                      </div>
                      <Percentage
                        isPositive={currency.quote["USD"].percent_change_1h >= 0}
                        className="level-item"
                      >
                        { `${currency.quote["USD"].percent_change_1h.toFixed(2)}%`}
                      </Percentage>
                    </div>
                  </Level>
                </Content>
              </CardContent>
            </Card>
          ))
        }
      </CardsContainer>
    </CardsSection>
  )
}

export default CoinCards