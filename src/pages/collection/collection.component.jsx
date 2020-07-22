import React from "react";
import { connect } from "react-redux";

import CollectonItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

import { selectCollection } from "../../redux/shop/shop.selectors";
const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectonItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
