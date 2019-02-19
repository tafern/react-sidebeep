import styled from 'styled-components';

export const SiderInfo = styled.div``;
export const ImageSider = styled.img`
  border: 1px solid var(--gray-lighter);
  border-radius: 3px;
  float: left;
  width: 440px;
  max-height: 200px;
`;
export const SiderDescription = styled.div`
  padding: 5px;
  float: left;
`;
export const OrgBody = styled.div`
  font-size: 16px;
  line-height: 22px;

  > * {
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
export const CountProductListInfo = styled.div`
  margin: 10px;
  font-size: 14px;
`;
export const GridWrapper = styled.div``;
export const Block = styled.div`
  float: left;
  width: 19.3333%;
  @media (max-width: 1198px) {
    width: 24.333%;
  }
  @media (max-width: 990px) {
    width: 33.333%;
  }
  @media (max-width: 744px) {
    width: 33%;
  }
  @media (max-width: 638px) {
    width: 50%;
  }
  @media (max-width: 478px) {
    width: 50%;
  }
`;
