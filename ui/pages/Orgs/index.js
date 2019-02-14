import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import OrgItem from '../../components/OrgItem';
import BlankState from '../../components/BlankState';
import { orgs as orgQuery } from '../../queries/Orgs.gql';
import Styles from './styles';

const Orgs = ({ data }) => (
  <Styles.GridWrapper className="clearfix">
    {/* <TotalCountSearch>
        {searchKeyword
          ? countPage > 0 ? `( ${countPage} Result Search )` : ''
          : countPage > 0 ? `( ${countPage} Available Services )` : ''}
      </TotalCountSearch> */}
    {data.orgs && data.orgs !== undefined ? (
      <div>
        {data.orgs.map((item) => (
          <Styles.Block key={item._id}>
            <OrgItem
              orgName={item.name}
              updatedAt={item.updatedAt}
              orgDescription={item.description}
              files={item.files}
              isPublic={item.isPublic}
              id={item._id}
            />
          </Styles.Block>
        ))}
      </div>
    ) : (
      <BlankState
        icon={{ style: 'solid', symbol: 'file-alt' }}
        title="You're plum out of orgs, friend!"
        subtitle="Add your first org by clicking the button below."
      />
    )}
  </Styles.GridWrapper>
);

Orgs.propTypes = {
  data: PropTypes.object.isRequired,
};

export default graphql(orgQuery)(Orgs);
