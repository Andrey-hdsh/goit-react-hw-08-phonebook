import styled from 'styled-components';

export const Header = styled.header`
  max-width: 100%;
  left: 0;
  right: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  font-size: 28px;
  padding: 30px;
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  font-weight: lighter;
  line-height: 1.5;

  a {
    color: white;
    position: relative;
    padding-bottom: 4px;
    line-height: 1.5;
  }

  a:hover {
    color: #c69e9e;
  }

  .active {
    color: #c69e9e;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 2px;
      background-color: #c69e9e;
    }
  }
`;
