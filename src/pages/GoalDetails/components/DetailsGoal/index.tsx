import React from 'react';

import {
  Container,
  Header,
  ProgressBar,
  Footer,
  Content,
  Title,
} from './styles';

const DetailsGoal: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>My new goal</Title>
        <div>
          <p>R$ 200</p>
          <p>R$ 1000</p>
        </div>
      </Header>
      <Content>
        <div>
          <ProgressBar>
            <div />
          </ProgressBar>
        </div>
      </Content>
      <Footer>
        <span className="description">2 Deposits</span>
        <span className="description">Until 00/00/0000</span>
      </Footer>
    </Container>
  );
};

export default DetailsGoal;
