import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import * as contactSelectors from '../src/redux/contact/contact-selectors';

const App = ({ loading }) => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {loading && <h1>Загружаем ...</h1>}
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: contactSelectors.getLoading(state),
  };
};

export default connect(mapStateToProps, null)(App);
