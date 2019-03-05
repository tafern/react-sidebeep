import styled from 'styled-components';

const SearchInput = styled.div`
  position: relative;
  float: left;
  margin-top: 15px;
  width: 100%;

  i {
    position: absolute;
    left: 12px;
    top: 10px;
    color: var(--gray-light);
  }

  .form-control {
    padding-left: 30px;
  }

  @media (max-width: 380px) {
    position: relative;
    margin-top: 8px;
    margin-left: 0px;
  }
`;

export default {
  SearchInput,
};
