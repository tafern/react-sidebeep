import React from 'react';
import PropTypes from 'prop-types';
import { timeago } from '../../../modules/dates';
import Styles from './styles';

const OrgItem = ({ id, isPublic, orgName, orgDescription, files, createdAt }) => (
  <Styles.OrgItemWrapper to={`/org/${id}`}>
    <Styles.HeaderContentWrapper>
      {files.map((item) => {
        if (item.type === 'Org') {
          return (
            <div key={item._id}>
              <Styles.OrgImage src={item.images[0].imgUrl} alt="imgOrg" />
            </div>
          );
        }
        return null;
      })}
      <Styles.ItemWrapper>
        {isPublic ? (
          <span className="label label-success">Public</span>
        ) : (
          <span className="label label-info">Private</span>
        )}
        <Styles.OrgName>{orgName}</Styles.OrgName>
        <Styles.OrgPrice>{orgDescription}</Styles.OrgPrice>
        <Styles.OrgRating>{timeago(createdAt)}</Styles.OrgRating>
      </Styles.ItemWrapper>
    </Styles.HeaderContentWrapper>
  </Styles.OrgItemWrapper>
);

OrgItem.defaultProps = {
  isPublic: null,
};
OrgItem.propTypes = {
  id: PropTypes.string.isRequired,
  isPublic: PropTypes.bool,
  orgName: PropTypes.string.isRequired,
  orgDescription: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default OrgItem;
