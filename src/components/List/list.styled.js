import styled from 'styled-components';

export const Wrapper = styled.div`
  li {
    margin-top: 20px;

    background-color: #fff;
    border: 2px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    background: transparent;
    color: white;
  }

  p {
    margin-bottom: 8px;
    font-size: 18px;
    color: white;
  }

  button {
    display: inline-block;
    background: linear-gradient(to bottom, #c90000, #880e0e);
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2px 5px;
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.05);
    color: black;
  }
`;
