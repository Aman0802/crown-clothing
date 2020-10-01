import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  // componentDidMount() {
  //   const { fetchCollectionsStart } = this.props;
  //   fetchCollectionsStart();

  //   // const { updateCollections } = this.props;
  //   // const collectionRef = firestore.collection("collections");

  //   //using firbase methods
  //   // this.unsubscribeFromSnapShot = collectionRef.onSnapshot(
  //   //   async (snapshot) => {
  //   //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   //     updateCollections(collectionsMap);
  //   //     this.setState({ loading: false });
  //   //   }
  //   // );

  //   //using promises
  //   //what get does is get back the data associated with the collectionRef(which is exactly the same as snapshot object we got).
  //   // collectionRef.get().then((snapshot) => {
  //   //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   //   updateCollections(collectionsMap);
  //   //   this.setState({ loading: false });
  //   // });

  //   // //using fetch
  //   // //https://firestore.googleapis.com/v1/projects/crown-db-169a7/databases/(default)/documents/
  //   // fetch(
  //   //   "https://firestore.googleapis.com/v1/projects/crown-db-169a7/databases/(default)/documents/collections"
  //   // )
  //   //   .then((response) => response.json())
  //   //   .then((collections) => console.log(collections));
  // }

  useEffect(() => {
    fetchCollectionsStart();
  });

  return (
    <div className="shop-page">
      {/* render value in the route takes a function where the parameters in the function are the parameters that the function will receive */}
      <Route
        exact
        path={`${match.path}`}
        /*component={CollectionsOverview}*/

        // render={(props) => (
        //   <CollectionsOverviewWithSpinner
        //     isLoading={isCollectionFetching}
        //     {...props}
        //   />
        // )}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        /* component={CollectionPage}*/
        // render={(props) => (
        //   <CollectionPageWithSpinner
        //     isLoading={!isCollectionLoaded}
        //     {...props}
        //   />
        // )}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
