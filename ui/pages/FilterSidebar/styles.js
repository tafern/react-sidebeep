import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import {
  SB_GREY,
  SB_BLACK,
  SB_DARK_GREEN,
  SB_GREEN,
  SB_LIGHT_GREY,
  SB_WHITE,
} from '../../../modules/styleConstants';

export const FilterSidebarContainer = styled.div`
  max-width: 400px;
  padding: 10px 20px;
  @media (max-width: 768px) {
    padding: 5px 8px 10px 8px;
  }
  box-shadow: 3px 4px 10px -3px #888;
  border-radius: 3px;
  position: relative;
  ${(props) => (props.isClear ? 'margin-top: 15px; cursor: pointer;' : '')};
`;
export const Wrapper = styled.div``;
export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${SB_BLACK};
`;
export const CheckBoxWrapper = styled.div`
  margin: 10px 0;
`;
export const ContainerCheckBox = styled.label`
  display: block;
  position: relative;
  margin-bottom: 12px;
  color: ${SB_GREY};
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-weight: normal !important;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    right: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  input:checked ~ .checkmark {
    background-color: ${SB_GREEN};
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
export const TitleNearMe = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
  color: ${SB_BLACK};
  float: left;
`;
export const ButtonNearMe = styled(Button)`
  background-color: ${SB_GREEN};
  color: ${SB_WHITE};
  cursor: pointer;
  float: right;
  &:hover {
    background-color: ${SB_DARK_GREEN};
  }
`;
export const FilterDivider = styled.div`
  border: 0.4px solid ${SB_LIGHT_GREY};
  width: 100%;
  margin: 10px 0;
`;
export const PriceFormInput = styled.div`
  width: 100%;
  margin: 10px 0px;
`;
export const ClearWrapper = styled.div`
  color: ${SB_GREEN};
  font-size: 20px;
  margin: 11px;
  text-align: center;
`;
