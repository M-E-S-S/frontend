import { withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import Products from './Products';
import {
  defaultSaga,
} from './productsSagas';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  defaultSaga,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Products));
