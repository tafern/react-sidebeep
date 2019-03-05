import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

const HeaderWrapper = styled.div`
  .noBorder {
    border-bottom: none !important;
  }
`;
const CenteredContent = styled.div`
  margin: 0 auto !important;
  width: 100%;
  text-align: center !important;
`;
const StyledModal = styled(Modal)`
  z-index: 1051;
`;
const Img = styled.img`
  width: 100%;
`;
// const CaptionWrapper = styled.h3`
//   margin-top: 15px;
//   font-weight: bold;
//   text-transform: capitalize;
//   font-size: 20px;
// `;
// const DescriptionWrapper = styled.div`
//   font-size: 14px;
//   margin-top: 15px;
// `;
const SliderWrapper = styled(Slider)``;
const ArrowIconNext = styled.img`
  width: 50px;
  height: 50px;
  right: 0px !important;
`;
const ArrowIconPrev = styled.img`
  width: 50px;
  height: 50px;
  z-index: 1000;
  left: 0px !important;
`;
function PortfolioModal(props) {
  const { showModal, close, portfolioList, slideIndex } = props;
  const settings = {
    dots: false,
    speed: 500,
    arrows: true,
    autoplay: false,
    infinite: true,
    pauseOnHover: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: slideIndex,
    nextArrow: <ArrowIconNext src="/img/icons/next-button-banner.png" />,
    prevArrow: <ArrowIconPrev src="/img/icons/back-button-banner.png" />,
  };
  return (
    <div>
      <StyledModal show={showModal} onHide={close}>
        <HeaderWrapper>
          <Modal.Header closeButton className="noBorder" />
        </HeaderWrapper>
        <Modal.Body>
          <SliderWrapper {...settings}>
            {portfolioList.map((item, index) => {
              if (item.refType === 'Portfolio') {
                return (
                  <CenteredContent key={item.id}>
                    <Img className="img img-responsive" src={item.images[index].imgUrl} />
                    {/* <CaptionWrapper>{item.caption}</CaptionWrapper>
                    <DescriptionWrapper>{item.description}</DescriptionWrapper> */}
                  </CenteredContent>
                );
              }
              return null;
            })}
          </SliderWrapper>
        </Modal.Body>
      </StyledModal>
    </div>
  );
}
PortfolioModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  portfolioList: PropTypes.array.isRequired,
  slideIndex: PropTypes.number.isRequired,
};
export default PortfolioModal;
