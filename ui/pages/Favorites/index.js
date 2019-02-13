import React from 'react';
import { Link } from 'react-router-dom';
import { timeago } from '../../../modules/dates';
import { StyledFavorites, FavoritesList, Favorite } from './styles';
import FavoriteData from './Favorites';

const favoriteLists = FavoriteData;
const Favorites = () => (
  <StyledFavorites>
    <FavoritesList>
      {favoriteLists.data.favorites.map((item) => (
        <Favorite key={item._id}>
          <Link to={`/product/view/${item._id}`} />
          <header>
            {item.isPublic ? (
              <span className="label label-success">Public</span>
            ) : (
              <span className="label label-default">Private</span>
            )}
            <h2>{item.name}</h2>
            <p>{timeago(item.updatedAt)}</p>
          </header>
        </Favorite>
      ))}
    </FavoritesList>
  </StyledFavorites>
);

export default Favorites;
