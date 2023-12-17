import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 60px;
  padding: 20px;
  border: 2px solid #4f4d4d;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);

  p {
    font-size: 18px;
    color: white;
  }

  input {
    font-size: 14px;

    height: 26px;
    width: 100%;
    border: none;
    border-bottom: 1px solid white;
    outline: none;

    background: transparent;
    color: white;
  }
`;
