import React, { useCallback, useState } from 'react';
import { MdFeaturedPlayList, MdAttachMoney } from 'react-icons/md';

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

const AddDeposit: React.FC = () => {
  const [description, setDescription] = useState<string>('');
  const [valueDeposit, setValueDeposit] = useState<string>('');

  const handleBack = useCallback(() => {
    history.goBack();
  }, []);

  const handleDescription = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setDescription(event.currentTarget.value);
    },
    [],
  );

  const handleValueDeposit = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setValueDeposit(event.currentTarget.value);
    },
    [],
  );

  const handleAddDeposit = useCallback(() => {
    history.push(routesConstants.FEEDBACK_ADD_DEPOSIT);
  }, []);

  return (
    <Header withBackButton title="Add deposit">
      <Container>
        <ContainerInputs>
          <Input
            styles={{ marginBottom: 10 }}
            icon={MdFeaturedPlayList}
            name="Description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleDescription}
          />
          <Input
            styles={{ marginBottom: 10 }}
            icon={MdAttachMoney}
            name="Deposit value"
            type="number"
            placeholder="Deposit value"
            value={valueDeposit}
            onChange={handleValueDeposit}
          />
        </ContainerInputs>
        <ContainerButtons>
          <BackButton onClick={handleBack}>Back</BackButton>
          <AddButton onClick={handleAddDeposit}>Add</AddButton>
        </ContainerButtons>
      </Container>
    </Header>
  );
};

export default AddDeposit;
