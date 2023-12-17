import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-image: url(${require('../../image/tekstura-fon.jpg')});
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  margin: 200px auto 0;
  width: 600px;
`;
export const ErrorMsg = styled.p`
  color: red;
  font-size: 24px;
  margin-top: 30px;
`;
