import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten, darken } from 'polished';

const textColor = '#4285F4';

const Welcome = styled.div`
  padding: 20px;
  background: var(--cb-blue);
  text-align: center;
  border-radius: 3px;
  color: #fff;

  img {
    width: 100px;
    height: auto;
  }

  h1 {
    font-size: 28px;
  }

  p {
    font-size: 18px;
    color: ${lighten(0.25, textColor)};
  }

  > div {
    display: inline-block;
    margin: 10px 0 0;

    .btn:first-child {
      margin-right: 10px;
    }

    .btn {
      border: none;
    }
  }

  footer {
    margin: 20px -20px -20px;
    border-top: 1px solid ${darken(0.1, textColor)};
    padding: 20px;

    p {
      font-size: 14px;
      line-height: 22px;
      color: ${lighten(0.35, textColor)};
      margin: 0;
    }

    p a {
      color: ${lighten(0.35, textColor)};
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 30px;

    footer {
      margin: 30px -30px -30px;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 40px;

    footer {
      margin: 40px -40px -40px;
    }
  }
`;
const LinkCampaign = styled(Link)`
  margin: 5px;
  padding: 6px 12px;
  max-width: 500px;
  background-color: #ffffff;
  color: #333;
  display: inline-block;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
  @media (min-width: 1080px) {
    width: 100%;
    display: inline-block;
  }
`;
const Category = styled.div`
  margin: 20px 0;
  padding: 20px;
  background: var(--cb-blue);
  text-align: center;
  border-radius: 3px;
  color: #fff;

  img {
    width: 100px;
    height: auto;
  }

  h1 {
    font-size: 28px;
  }

  p {
    font-size: 18px;
    color: ${lighten(0.25, textColor)};
  }

  > div {
    display: inline-block;
    margin: 10px 0 0;

    .btn:first-child {
      margin-right: 10px;
    }

    .btn {
      border: none;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 30px;
    margin: 10px 0;
  }

  @media screen and (min-width: 992px) {
    padding: 40px;
    margin: 20px 0;
  }
`;
const ServicePopuler = styled.div`
  margin: 20px 0;
  padding: 20px;
  background: var(--cb-blue);
  text-align: center;
  border-radius: 3px;
  color: #fff;

  img {
    width: 100px;
    height: auto;
  }

  h1 {
    font-size: 28px;
  }

  p {
    font-size: 18px;
    color: ${lighten(0.25, textColor)};
  }

  > div {
    display: inline-block;
    margin: 10px 0 0;

    .btn:first-child {
      margin-right: 10px;
    }

    .btn {
      border: none;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 30px;
    margin: 10px 0;
  }

  @media screen and (min-width: 992px) {
    padding: 40px;
    margin: 20px 0;
  }
`;
const News = styled.div`
  margin: 20px 0;
  padding: 20px;
  background: var(--cb-blue);
  text-align: center;
  border-radius: 3px;
  color: #fff;

  img {
    width: 100px;
    height: auto;
  }

  h1 {
    font-size: 28px;
  }

  p {
    font-size: 18px;
    color: ${lighten(0.25, textColor)};
  }

  @media screen and (min-width: 768px) {
    padding: 30px;
    margin: 10px 0;
  }

  @media screen and (min-width: 992px) {
    padding: 40px;
    margin: 20px 0;
  }
`;
const AllServices = styled.div`
  margin: 20px 0;
  padding: 20px;
  background: var(--cb-blue);
  text-align: center;
  border-radius: 3px;
  color: #fff;

  img {
    width: 100px;
    height: auto;
  }

  h1 {
    font-size: 28px;
  }

  p {
    font-size: 18px;
    color: ${lighten(0.25, textColor)};
  }

  @media screen and (min-width: 768px) {
    padding: 30px;
    margin: 10px 0;
  }

  @media screen and (min-width: 992px) {
    padding: 40px;
    margin: 20px 0;
  }
`;

export default {
  Welcome,
  LinkCampaign,
  Category,
  ServicePopuler,
  News,
  AllServices,
};
