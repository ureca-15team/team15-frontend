import styled, { css } from 'styled-components';
import theme from '../../lib/styles/theme';

const ShopListContainerBlock = styled.div`
  ${theme.flexCenterColumn}

  max-width: 1200px;
  margin-top: 70px;
  ${(props) =>
    props.searchItems &&
    css`
      margin-top: 10rem;
      margin-bottom: 8rem;
    `}
  h1 {
    width: 100%;
    font-size: 1.4rem;
    font-weight: bold;
  }

  li {
    margin-top: 1rem;
    width: 23%;
    min-width: 170px;
    max-height: 440px;
    cursor: pointer;
  }
  .postsContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    gap: 10px;
  }
  .pages {
    ${theme.flexCenter}
    background-color: ${theme.primaryColor};
    letter-spacing: 3px;
    width: 48px;
    height: 38px;
    border-radius: 10px;
    color: white;
    padding: 10px;
    font-weight: bold;
    font-size: 1rem;
    padding-bottom: 7px;
    padding-right: 7px;
  }
  .pagination {
    gap: 0.8rem;
    width: 140px;
    margin-top: 2rem;
    margin-bottom: 6rem;
    ${theme.flexCenter}
    button {
      background-color: ${theme.lightGrayColor};
    }
  }
`;

export default ShopListContainerBlock;
