import { withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import Dashboard from './Dashboard';
import {
  defaultSaga,
} from './dashboardSagas';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  defaultSaga,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
