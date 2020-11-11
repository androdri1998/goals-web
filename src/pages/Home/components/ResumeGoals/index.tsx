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
        <p>2/</p>
        <span>10</span>
        <span className="description">goals</span>
      </Footer>
    </Container>
  );
};

export default ResumeGoals;
