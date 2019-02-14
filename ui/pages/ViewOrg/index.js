import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import SEO from '../../components/SEO';
import parseMarkdown from '../../../modules/parseMarkdown';
import BlankState from '../../components/BlankState';
import { org as orgQuery } from '../../queries/Orgs.gql';
import Styles from './styles';

class ViewOrg extends React.Component {
  componentWillMount() {
    this.props.data.refetch();
  }
  render() {
    const { data } = this.props;
    if (!data.loading && data.org) {
      return (
        <React.Fragment>
          <Styles.StyledViewOrg>
            <SEO
              title={data.org && data.org.name}
              description={data.org && data.org.description}
              url={`org/view/${data.org && data.org._id}`}
              contentType="article"
              created={data.org && data.org.createdAt}
              twitter="clvrbgl"
            />
            <React.Fragment>
              <h1>{data.org && data.org.name}</h1>
              <Styles.OrgBody
                dangerouslySetInnerHTML={{
                  __html: parseMarkdown(data.org && data.org.description),
                }}
              />
            </React.Fragment>
          </Styles.StyledViewOrg>
        </React.Fragment>
      );
    }
    if (!data.loading && !data.org) {
      return (
        <BlankState
          icon={{ style: 'solid', symbol: 'file-alt' }}
          title="No document here, friend!"
          subtitle="Make sure to double check the URL! If it's correct, this is probably a private document."
        />
      );
    }

    return null;
  }
}

ViewOrg.propTypes = {
  data: PropTypes.object.isRequired,
};

export default graphql(orgQuery, {
  options: ({ match }) => ({
    variables: {
      _id: match.params._id,
    },
  }),
})(ViewOrg);
