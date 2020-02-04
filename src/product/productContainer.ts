import { withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import Product from './Product';
import {
  defaultSaga,
} from './productSagas';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  defaultSaga,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));
