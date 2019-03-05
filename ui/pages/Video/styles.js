import styled from 'styled-components';
import { SB_DARK_GREY } from '../../../modules/styleConstants';

export const VideoContainer = styled.div`
  margin-top: 5px;
`;
export const VideoTitle = styled.h3`
  margin-bottom: 10px;
  color: ${SB_DARK_GREY}
  font-weight: bold;
`;
export const VideoDescription = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: ${SB_DARK_GREY} > * {
    margin-bottom: 20px;
    white-space: pre-line;
  }

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`;
