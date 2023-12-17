import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 2px solid #4f4d4d;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);

  label {
    font-size: 18px;
    color: white;
  }

  input {
    height: 26px;
    width: 100%;

    background: transparent;
    color: white;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    font-size: 14px;
  }

  button {
    display: inline-block;
    padding: 5px 10px;
    background: linear-gradient(to bottom, #4caf50, #45a049);
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.01);
    color: black;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
`;
