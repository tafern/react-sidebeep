import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Styles from './styles';
import OrgItem from '../../components/OrgItem';
import BlankState from '../../components/BlankState';

const settings = {
  dots: false,
  speed: 500,
  arrows: true,
  nextArrow: <Styles.ArrowIconNext src="/img/icons/sb-arrow-next.png" />,
  prevArrow: <Styles.ArrowIconPrev src="/img/icons/sb-arrow-prev.png" />,
  autoplay: false,
  infinite: true,
  pauseOnHover: true,
  autoplaySpeed: 4000,
  slidesToShow: 5,
  slidesToScroll: 5,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 548,
      settings: {
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 744,
      settings: {
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1128,
      settings: {
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
};
const OrgList = ({ data }) => (
  <Styles.Wrapper>
    {data.orgs !== undefined ? (
      <Slider {...settings}>
        {data.orgs.map((item) => (
          <div key={item._id}>
            <OrgItem
              orgName={item.name}
              createdAt={item.createdAt}
              orgDescription={item.description}
              files={item.files}
              isPublic={item.isPublic}
              id={item._id}
            />
          </div>
        ))}
      </Slider>
    ) : (
      <BlankState
        icon={{ style: 'solid', symbol: 'file-alt' }}
        title="You're plum out of orgs, friend!"
        subtitle="Add your first org by clicking the button below."
      />
    )}
  </Styles.Wrapper>
);

OrgList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default OrgList;
