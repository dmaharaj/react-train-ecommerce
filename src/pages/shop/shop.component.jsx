import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchCollectionsStart} from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
  
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPage from '../collection/collection.component';
import CollectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';

import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {


    unsubscribeFromSnapshot = null;

    componentDidMount() { 
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    render() {
        console.log("shop.component props is ", this.props); 
        const { match } = this.props;
        
        return (
            <div className='shop-page'>
                <Route 
                exact 
                path={`${match.path}`}
                component={CollectionsOverviewComponent}
                />
                <Route path={`${match.path}/:collectionId`}
                component={CollectionPageContainer} 
                />
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);