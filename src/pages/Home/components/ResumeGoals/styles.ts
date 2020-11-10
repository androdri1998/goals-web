import styled from 'styled-components';

export const Container = styled.section`
  margin: 10px;
  padding: 15px;

  border-radius: 10px;
  background-color: #fcfcfc;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Title = styled.p`
  font-size: 1.8em;
  font-weight: 500;
  color: black;
  margin-bottom: 10px;
`;

export const Header = styled.header`
  div {
    display: flex;

    align-items: center;
    justify-content: space-between;

    p {
      color: black;
      font-family: sans-serif;

      font-size: 1.5em;
      font-weight: 300;
    }
  }
`;

export const Content = styled.section`
  margin-top: 15px;
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
  background: #d3d3d3;

  div {
    display: flex;
    justify-content: flex-end;

    height: 100%;
    width: 20%;

    background: #1d7835;
    border-radius: 10px;

    p {
      color: white;
      font-family: sans-serif;

      font-size: 0.8em;
      font-weight: 100;

      margin-right: 5px;
    }
  }
`;

export const Footer = styled.footer`
  p {
    color: black;
    font-weight: 300;

    font-size: 0.9em;
  }
`;
