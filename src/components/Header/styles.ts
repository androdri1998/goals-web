import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  max-width: 800px;
  margin: 0 auto;
`;

export const ContentHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 15px 20px 15px 20px;

  p {
    font-size: 1.7em;
    font-weight: 300;
  }
`;

export const ContainerBackButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;

  border: none;
  background: transparent;
  border-radius: 20px;

  &:hover {
    transition: 0.6s background;
    background: rgba(0, 0, 0, 0.1);
  }
`;
