import React from 'react';

import {
  Container,
  Header,
  ProgressBar,
  Footer,
  Content,
  Title,
} from './styles';

const ResumeGoals: React.FC = () => {
  return (
    <Container>
      <Title>Resume</Title>
      <Header>
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
        <div>
          <p>2</p>
        </div>
        <span className="description">Goals acomplished</span>
      </Footer>
    </Container>
  );
};

export default ResumeGoals;
