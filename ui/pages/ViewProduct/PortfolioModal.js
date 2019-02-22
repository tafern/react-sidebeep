import React from 'react';
// import Slider from 'react-slick';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Modal } from 'react-bootstrap';
// import { getImageUrl } from 'utils/formatter/image';

// const HeaderWrapper = styled.div`
//   .noBorder {
//     border-bottom: none !important;
//   }
// `;
// const CenteredContent = styled.div`
//   margin: 0 auto !important;
//   width: 100%;
//   text-align: center !important;
// `;
// const StyledModal = styled(Modal)`
//   z-index: 1051;
// `;
// const Img = styled.img`
//   width: 100%;
// `;
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
// const SliderWrapper = styled(Slider)``;
// const ArrowIconNext = styled.img`
//   width: 50px;
//   height: 50px;
//   right: 0px !important;
// `;
// const ArrowIconPrev = styled.img`
//   width: 50px;
//   height: 50px;
//   z-index: 1000;
//   left: 0px !important;
// `;
function PortfolioModal() {
  // const { showModal, close, data, portfolioList, slideIndex, portfolioMeta } = props;
  // const settings = {
  //   dots: false,
  //   speed: 500,
  //   arrows: true,
  //   autoplay: false,
  //   infinite: true,
  //   pauseOnHover: true,
  //   autoplaySpeed: 4000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   swipeToSlide: true,
  //   // initialSlide: slideIndex,
  //   nextArrow: <ArrowIconNext src="/img/icons/right-shadow-button.png" />,
  //   prevArrow: <ArrowIconPrev src="/img/icons/left-shadow-button.png" />,
  // };
  return (
    <div>
      mantap
      {/* <StyledModal show={showModal} onHide={close}>
        <HeaderWrapper>
          <Modal.Header closeButton className="noBorder" />
        </HeaderWrapper>
        <Modal.Body>
          <SliderWrapper {...settings}>
            {portfolioList.map((portfolios) => (
              <CenteredContent key={portfolios.id}>
                <Img
                  className="img img-responsive"
                  src={getImageUrl(portfolios.file_id, {
                    w: 500,
                    h: 500,
                    c: 'fit',
                  })}
                />
                <CaptionWrapper>{portfolios.caption}</CaptionWrapper>
                <DescriptionWrapper>{portfolios.description}</DescriptionWrapper>
              </CenteredContent>
            ))}
          </SliderWrapper>
        </Modal.Body>
      </StyledModal> */}
    </div>
  );
}
// PortfolioModal.propTypes = {
//   showModal: PropTypes.bool,
//   close: PropTypes.func,
//   data: PropTypes.object,
//   portfoliolist: PropTypes.array,
//   portfolioMeta: PropTypes.object,
// };
export default PortfolioModal;
