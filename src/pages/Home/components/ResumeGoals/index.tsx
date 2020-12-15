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
  ContainerItemsFooter,
} from './styles';

interface IResumeGoalsProps {
  goals: Goal[];
}

const ResumeGoals: React.FC<IResumeGoalsProps> = ({ goals }) => {
  const currencyDepositsGoals = useMemo(() => {
    let totalDeposit = 0;
    if (goals) {
      // eslint-disable-next-line array-callback-return
      goals.map(goal => {
        const totalDepositGoal = goal.deposits.reduce((acumulador, deposit) => {
          return acumulador + deposit.value;
        }, 0);

        totalDeposit += totalDepositGoal;
      });
    }

    return formatCurrency({ value: totalDeposit });
  }, [goals]);

  const currencyTotalGoals = useMemo(() => {
    if (goals) {
      const totalValueGoals = goals.reduce((acumulador, goal) => {
        return acumulador + goal.value;
      }, 0);
      return formatCurrency({ value: totalValueGoals });
    }

    return formatCurrency({ value: 0 });
  }, [goals]);

  const percentageToReachAllGoals = useMemo(() => {
    if (goals) {
      let totalDeposit = 0;
      // eslint-disable-next-line array-callback-return
      goals.map(goal => {
        const totalDepositGoal = goal.deposits.reduce((acumulador, deposit) => {
          return acumulador + deposit.value;
        }, 0);

        totalDeposit += totalDepositGoal;
      });

      const totalValueGoals = goals.reduce((acumulador, goal) => {
        return acumulador + goal.value;
      }, 0);

      const percentage = (totalDeposit / totalValueGoals) * 100;

      return percentage;
    }

    return 0;
  }, [goals]);

  const totalGoalsReached = useMemo(() => {
    let totalRached = 0;
    if (goals) {
      // eslint-disable-next-line array-callback-return
      goals.map(goal => {
        const totalDepositGoal = goal.deposits.reduce((acumulador, deposit) => {
          return acumulador + deposit.value;
        }, 0);

        if (totalDepositGoal >= goal.value) {
          totalRached += 1;
        }
      });
    }

    return totalRached;
  }, [goals]);

  const totalGoals = useMemo(() => {
    if (goals) {
      return goals.length;
    }

    return 0;
  }, [goals]);

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
        <ContainerItemsFooter>
          <div>
            <p>{totalGoalsReached}</p>
          </div>
          <span className="description">Goals reached</span>
        </ContainerItemsFooter>
        <ContainerItemsFooter>
          <div>
            <p>{totalGoals}</p>
          </div>
          <span className="description">Total goals</span>
        </ContainerItemsFooter>
      </Footer>
    </Container>
  );
};

export default ResumeGoals;
