import React, { useMemo } from 'react';

import Goal from '../../../../models/Goal';
import { formatCurrency } from '../../../../utils/helpers';

import {
  Container,
  Header,
  ProgressBar,
  Footer,
  Content,
  Title,
} from './styles';

interface IResumeGoalsProps {
  goals: Goal[];
}

const ResumeGoals: React.FC<IResumeGoalsProps> = ({ goals }) => {
  const currencyDepositsGoals = useMemo(() => {
    return formatCurrency({ value: 0 });
  }, []);

  const currencyTotalGoals = useMemo(() => {
    const totalValueGoals = goals.reduce((acumulador, goal) => {
      return acumulador + goal.value;
    }, 0);

    return formatCurrency({ value: totalValueGoals });
  }, [goals]);

  const percentageToReachAllGoals = useMemo(() => {
    return 0;
  }, []);

  const totalGoalsReached = useMemo(() => {
    return 0;
  }, []);

  return (
    <Container>
      <Title>Resume</Title>
      <Header>
        <div>
          <p>{currencyDepositsGoals}</p>
          <p>{currencyTotalGoals}</p>
        </div>
      </Header>
      <Content>
        <div>
          <ProgressBar percentage={percentageToReachAllGoals}>
            <div />
          </ProgressBar>
        </div>
      </Content>
      <Footer>
        <div>
          <p>{totalGoalsReached}</p>
        </div>
        <span className="description">Goals reached</span>
      </Footer>
    </Container>
  );
};

export default ResumeGoals;
