import styled from 'styled-components';

export const Container = styled.section`
  margin: 10px;
  padding: 30px;

  border-radius: 20px;
  background-color: #41187a;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Title = styled.p`
  font-size: 1.1em;
  font-weight: 300;
  color: #fafafa;
  margin-bottom: 10px;
`;

export const Header = styled.header`
  margin-bottom: 10px;

  div {
    display: flex;

    align-items: center;
    justify-content: space-between;

    p {
      color: #fafafa;
      font-family: sans-serif;

      font-size: 1.6em;
      font-weight: 600;
    }
  }
`;

export const Content = styled.section`
  margin-bottom: 5px;

  div {
    display: flex;

    align-items: center;
    justify-content: flex-start;
  }
`;

export const ProgressBar = styled.div`
  flex: 1;
  height: 15px;

  border-radius: 10px;
  background: #260e47;

  div {
    display: flex;
    justify-content: flex-end;

    height: 100%;
    width: 20%;

    background: #fafafa;
    border-radius: 10px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  margin-top: 80px;

  div {
    display: flex;
    align-items: flex-end;

    p {
      color: #fafafa;
      font-weight: 600;

      font-size: 3em;
    }

    span {
      font-size: 1.6em;
      color: #fafafa;

      margin-bottom: 5px;
    }
  }

  .description {
    color: #fafafa;
    font-size: 1.5em;

    font-weight: 500;
  }
`;
