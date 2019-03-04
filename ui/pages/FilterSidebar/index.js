import React from 'react';
import { SideNav, Nav } from 'react-sidenav';
import {
  FilterSidebarContainer,
  Wrapper,
  Title,
  FilterDivider,
  CheckBoxWrapper,
  ContainerCheckBox,
  TitleNearMe,
  ButtonNearMe,
  PriceFormInput,
  ClearWrapper,
} from './styles';

class FilterSidebar extends React.Component {
  render() {
    return (
      <div>
        <FilterSidebarContainer>
          <Wrapper>
            <Title>Category</Title>
            <SideNav onItemSelection={this.onItemSelection}>
              <Nav id="1">
                Repair
                <Nav id="1">Electronic</Nav>
                <Nav id="2">Gadget</Nav>
                <Nav id="3">Accessories</Nav>
                <Nav id="4">Camera</Nav>
                <Nav id="5">Others</Nav>
              </Nav>
              <Nav id="2">
                Home Care
                <Nav id="1">Utilities</Nav>
              </Nav>
              <Nav id="3">
                Beauty & Groom
                <Nav id="1">Nav 3.1</Nav>
                <Nav id="2">
                  Nav 3.2
                  <Nav id="1">Nav 3.2.1</Nav>
                  <Nav id="2">Nav 3.2.2</Nav>
                </Nav>
              </Nav>
              <Nav id="4">Health</Nav>
              <Nav id="5">Fashion</Nav>
              <Nav id="6">Art</Nav>
              <Nav id="7">Hobbies</Nav>
              <Nav id="8">Others</Nav>
            </SideNav>
          </Wrapper>
          <FilterDivider />
          <Wrapper>
            <Title>Location</Title>
            <CheckBoxWrapper>
              <ContainerCheckBox>
                <input type="checkbox" checked="checked" />
                <span className="checkmark" />
                Jabodetabek
              </ContainerCheckBox>
              <ContainerCheckBox>
                <input type="checkbox" />
                <span className="checkmark" />
                Bandung
              </ContainerCheckBox>
              <ContainerCheckBox>
                <input type="checkbox" />
                <span className="checkmark" />
                Bali
              </ContainerCheckBox>
            </CheckBoxWrapper>
          </Wrapper>
          <FilterDivider />
          <Wrapper className="clearfix">
            <TitleNearMe>Near Me</TitleNearMe>
            <ButtonNearMe>Search</ButtonNearMe>
          </Wrapper>
          <FilterDivider />
          <Wrapper>
            <Title>Price</Title>
            <PriceFormInput>
              <input type="name" className="form-control" placeholder="< IDR 100.000" />
            </PriceFormInput>
            <PriceFormInput>
              <input type="name" className="form-control" placeholder="> IDR 100.000" />
            </PriceFormInput>
          </Wrapper>
          <FilterDivider />
          <Wrapper>
            <Title>Rating</Title>
            <CheckBoxWrapper>
              <ContainerCheckBox>
                <input type="checkbox" checked="checked" />
                <span className="checkmark" />
                More Than
              </ContainerCheckBox>
              <ContainerCheckBox>
                <input type="checkbox" />
                <span className="checkmark" />
                Less Than
              </ContainerCheckBox>
            </CheckBoxWrapper>
          </Wrapper>
          <FilterDivider />
          <Wrapper>
            <Title>Service For</Title>
            <CheckBoxWrapper>
              <ContainerCheckBox>
                <input type="checkbox" checked="checked" />
                <span className="checkmark" />
                Female
              </ContainerCheckBox>
              <ContainerCheckBox>
                <input type="checkbox" />
                <span className="checkmark" />
                Male
              </ContainerCheckBox>
            </CheckBoxWrapper>
          </Wrapper>
          <FilterDivider />
          <Wrapper>
            <Title>Service Provider By</Title>
            <CheckBoxWrapper>
              <ContainerCheckBox>
                <input type="checkbox" checked="checked" />
                <span className="checkmark" />
                Female
              </ContainerCheckBox>
              <ContainerCheckBox>
                <input type="checkbox" />
                <span className="checkmark" />
                Male
              </ContainerCheckBox>
            </CheckBoxWrapper>
          </Wrapper>
        </FilterSidebarContainer>
        <FilterSidebarContainer isClear>
          <ClearWrapper>CLEAR ALL</ClearWrapper>
        </FilterSidebarContainer>
      </div>
    );
  }
}

export default FilterSidebar;
