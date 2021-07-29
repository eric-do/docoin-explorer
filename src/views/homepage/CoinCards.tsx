import React from 'react';
import { IHistoricalCrypto } from '../../types';
import styled from 'styled-components';

const CardsContainer = styled.div`
  border-radius: 0.5rem;
  padding: 0;
`
const Card = styled.div``
const CardContent = styled.div``
const Content = styled.div``
const Level = styled.div``;
const LevelItem = styled.div`
  width: 240px;
`;

interface IProps {
  currencies: IHistoricalCrypto[]
};

const CoinCards = ({ currencies }: IProps) => {
  return (
    <div className="section">
    <CardsContainer className="level is-justify-content-space-evenly">
      {
        currencies.map(currency => (
          <Card className="card">
            <CardContent className="card-content">
              <Content className="content">
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
                      { currency.quote["USD"].price.toFixed(2)}
                    </div>
                    <div className="level-item">
                      { `${currency.quote["USD"].percent_change_24h.toFixed(2)}%`}
                    </div>
                  </div>
                </Level>
              </Content>
            </CardContent>
          </Card>
        ))
      }
    </CardsContainer>
    </div>
  )
}

export default CoinCards