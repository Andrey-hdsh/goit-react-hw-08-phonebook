import styled from 'styled-components';

export const WrapperForm = styled.div`
  max-width: 500px;
  padding: 20px;
  border: 2px solid #4f4d4d;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);

  form {
    display: flex;
    flex-direction: column;
    gap: 26px;
    color: white;
  }

  label {
    font-size: 17px;
  }

  input {
    height: 26px;
    width: 100%;
    margin-top: 4px;

    background: transparent;
    color: white;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    font-size: 16px;
  }

  button {
    padding: 5px 10px;
    background: linear-gradient(to bottom, #4caf50, #45a049);
    border: none;
    color: white;
    text-align: center;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  button:hover {
    background-color: #40803f;
    transform: scale(1.01);
    color: black;
  }
`;
