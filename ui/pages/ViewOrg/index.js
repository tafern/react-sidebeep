import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import parseMarkdown from '../../../modules/parseMarkdown';
import SEO from '../../components/SEO';
// import ProductItem from '../../components/ProductItem';
import BlankState from '../../components/BlankState';
import { org as orgQuery } from '../../queries/Orgs.gql';
import Styles from './styles';

class ViewOrg extends React.Component {
  componentWillMount() {
    this.props.data.refetch();
  }
  render() {
    const { data } = this.props;
    console.log('data', data);
    if (!data.loading && data.org) {
      return (
        <React.Fragment>
          <SEO
            title={data.org && data.org.name}
            description={data.org && data.org.description}
            url={`org/view/${data.org && data.org._id}`}
            contentType="article"
            created={data.org && data.org.createdAt}
            twitter="clvrbgl"
          />
          <Styles.SiderInfo className="clearfix">
            {data.org.files.map((item) => {
              if (item.refType === 'PictureProfile') {
                return (
                  <Styles.ImageSider
                    className="mr-3"
                    src={item.images[0].imgUrl}
                    alt="Generic placeholder"
                  />
                );
              }
              return null;
            })}
            <Styles.SiderDescription>
              <h3>{data.org && data.org.name}</h3>
              <Styles.OrgBody
                dangerouslySetInnerHTML={{
                  __html: parseMarkdown(data.org && data.org.description),
                }}
              />
            </Styles.SiderDescription>
          </Styles.SiderInfo>
          <Styles.CountProductListInfo>
            Display 5.702 product for Beauty Promo Jumbo (1 - 60 dari 5.702)
          </Styles.CountProductListInfo>
          <Styles.GridWrapper className="clearfix">
            {/* <TotalCountSearch>
              {searchKeyword
                ? countPage > 0 ? `( ${countPage} Result Search )` : ''
                : countPage > 0 ? `( ${countPage} Available Services )` : ''}
            </TotalCountSearch> */}
            {data.org.products && data.org.products !== undefined ? (
              <div>
                {data.org.products.map((item) => (
                  <Styles.Block key={item._id}>
                    {console.log('item', item.files)}
                    {/* <ProductItem
                      productName={item.name}
                      updatedAt={item.updatedAt}
                      productDescription={item.description}
                      files={item.files}
                      isPublic={item.isPublic}
                      id={item._id}
                      isGrid
                    /> */}
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
