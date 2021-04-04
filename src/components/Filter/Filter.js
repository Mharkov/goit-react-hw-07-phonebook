import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/contact/contact-actions';
import * as contactSelectors from '../../redux/contact/contact-selectors';

const Filter = ({ value, onFilter }) => {
  return (
    <div>
      Find contacts by name
      <input type="text" value={value} onChange={onFilter} />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  value: contactSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilter: (e) => dispatch(actions.contactFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
