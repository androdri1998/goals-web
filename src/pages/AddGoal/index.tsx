import React, { useCallback, useState } from 'react';
import {
  MdFeaturedPlayList,
  MdAttachMoney,
  MdAccessTime,
} from 'react-icons/md';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { history } from '../../store';
import routesConstants from '../../utils/routesConstants';

import {
  Container,
  ContainerInputs,
  ContainerButtons,
  BackButton,
  AddButton,
} from './styles';

const AddGoal: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [expectValue, setExpectValue] = useState<string>('');
  const [expectDate, setExpectDate] = useState<string>('');

  const handleBack = useCallback(() => {
    history.goBack();
  }, []);

  const handleTitle = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setTitle(event.currentTarget.value);
    },
    [],
  );

  const handleExpectValue = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setExpectValue(event.currentTarget.value);
    },
    [],
  );

  const handleExpectDate = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setExpectDate(event.currentTarget.value);
    },
    [],
  );

  const handleAddGoal = useCallback(() => {
    history.push(routesConstants.FEEDBACK_ADD_GOAL);
  }, []);

  return (
    <Header withBackButton title="Add goal">
      <Container>
        <ContainerInputs>
          <Input
            styles={{ marginBottom: 10 }}
            icon={MdFeaturedPlayList}
            name="Título"
            type="text"
            placeholder="Título"
            value={title}
            onChange={handleTitle}
          />
          <Input
            styles={{ marginBottom: 10 }}
            icon={MdAttachMoney}
            name="Valor esperado"
            type="number"
            placeholder="Valor esperado"
            value={expectValue}
            onChange={handleExpectValue}
          />
          <Input
            styles={{ marginBottom: 10 }}
            icon={MdAccessTime}
            name="Quando irá alcançar"
            type="date"
            placeholder="Quando irá alcançar"
            value={expectDate}
            onChange={handleExpectDate}
          />
        </ContainerInputs>
        <ContainerButtons>
          <BackButton onClick={handleBack}>Back</BackButton>
          <AddButton onClick={handleAddGoal}>Add</AddButton>
        </ContainerButtons>
      </Container>
    </Header>
  );
};

export default AddGoal;
