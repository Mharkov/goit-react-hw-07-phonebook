import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { connect, useDispatch } from 'react-redux';
import * as contactOperations from '../../redux/contact/contact-operations';
import * as contactSelectors from '../../redux/contact/contact-selectors';

const ContactList = ({ onDel, contacts }) => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactOperations.fetchContacts()), [dispatch]);

  return (
    <ul className={styles.TaskList}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.TaskList_item} key={id}>
          {name} : {number}
          {
            <button
              className={styles.TaskList_button}
              type="button"
              name="delte"
              onClick={() => onDel(id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDel: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: contactSelectors.filteredContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDel: (id) => dispatch(contactOperations.contactDelete(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
