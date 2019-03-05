import styled from 'styled-components';
import { Grid } from 'react-bootstrap';

const App = styled.div`
  visibility: ${(props) => (props.ready && !props.loading ? 'visible' : 'hidden')};

  > .container {
    margin-bottom: 80px;
    padding-bottom: 20px !important;
  }

  .verify-email {
    margin-bottom: 0;
    padding: 0;
    border-bottom: 1px solid #e7e7e7;
    background: #fff;
    color: var(--gray-dark);
    border-radius: 0;

    p {
      padding: 19px;
    }

    .btn {
      padding: 0;
    }
  }
`;
const GridWrapper = styled(Grid)`
  margin-top: 80px;
`;

export default {
  App,
  GridWrapper,
};
