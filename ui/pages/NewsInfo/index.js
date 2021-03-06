import React from 'react';
import Slider from 'react-slick';
import Styles from './styles';
import NewsInfoData from './NewsInfo';

const newsInfoDataList = NewsInfoData;
const settings = {
  dots: false,
  speed: 500,
  arrows: true,
  nextArrow: <Styles.ArrowIconNext src="/img/icons/back-button-slider.png" />,
  prevArrow: <Styles.ArrowIconPrev src="/img/icons/next-button-slider.png" />,
  autoplay: false,
  infinite: true,
  pauseOnHover: true,
  autoplaySpeed: 4000,
  slidesToShow: 2,
  slidesToScroll: 2,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 448,
      settings: {
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const NewsInfo = () => (
  <Slider {...settings}>
    {newsInfoDataList.map((news) => (
      <Styles.NewsInfoWrapper key={news.news_info_id}>
        <a href={news.news_info_link}>
          <Styles.ImageNewsInfo src={news.news_info_image_url} alt={news.news_info_name} />
        </a>
      </Styles.NewsInfoWrapper>
    ))}
  </Slider>
);

export default NewsInfo;
