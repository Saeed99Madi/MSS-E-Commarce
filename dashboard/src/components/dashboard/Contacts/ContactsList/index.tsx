/* eslint-disable no-param-reassign */
import { useContext, useEffect, useState } from 'react';

import ListItem from './ListItem';

// import { ICategories } from '../../../../interfaces/ICategories';
import { CategoriesListWrapper } from './component.style';
import ApiServices from '../../../../servises/ApiService';
import { DashboardContext } from '../../../../context/DashboardContext';
import { IContact } from '../../../../interfaces/IContact';
import ShowContact from './showContact';

const ContactsList = ({ open }: { open: boolean }) => {
  const { contacts, setContacts } = useContext(DashboardContext);
  // const fetchCategories = useCategories();

  useEffect(() => {
    (async () => {
      try {
        console.log('contacts useEffect is Running ');

        ApiServices.init();
        const { data } = await ApiServices.get('contacts');
        if (data.status === 200) {
          const updtaedContacts = data.data.map((ele: IContact) => {
            if (ele.content.length >= 40) {
              ele.shortContent = ele.content.substring(0, 40);
              return ele;
            }
            ele.shortContent = ele.content;
            return ele;
          });
          setContacts(updtaedContacts);
          console.log(data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <CategoriesListWrapper open={open}>
        {contacts.length > 0 ? (
          contacts?.map((contact: IContact) => {
            return <ListItem contact={contact} key={contact.id} />;
          })
        ) : (
          <h2>No Contacts yet</h2>
        )}
      </CategoriesListWrapper>
      <ShowContact />
    </>
  );
};

export default ContactsList;
