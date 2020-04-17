import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
  

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {


    unsubscribeFromSnapshot = null;

    componentDidMount() { 
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        console.log("shop.component props is ", this.props); 
        const { match, isCollectionFetching } = this.props;
        
        return (
            <div className='shop-page'>
                <Route 
                exact 
                path={`${match.path}`} 
                render={props => (
                    <CollectionsOverview isLoading={isCollectionFetching} {...props} /> 
                )} 
                />
                <Route path={`${match.path}/:collectionId`} render={props => (
                    <CollectionPage isLoading={isCollectionFetching} {...props} /> )} />
            </div>
        );
    }
}

const mapStatetoProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);