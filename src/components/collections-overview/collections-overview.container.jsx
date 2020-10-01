//container is a component that gets wrapped up in all higher order components that it needs in order to run properly in a way it expects itself to run
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

//   The below line is quite complicated to understand what happens in which order and if we had to nest more HOCs it could become even more complex. For this purpose we use compose from 'redux' in which we just have to call the fuction. The uncommented line below it has exactly the same meaning as the below line!
//   const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
