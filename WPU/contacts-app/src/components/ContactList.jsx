// eslint-disable-next-line no-unused-vars
import React from "react";
import ContactItem from "./ContactItem";
import PropTypes from "prop-types";

function ContactList({ contact }){
    return(
        <div className="contact-list">
            {
                contact.map((contact) => (
                    <ContactItem key={contact.id} {...contact} />
                ))
            }
        </div>
    )
}

ContactList.propTypes = {
    contact: PropTypes.string.isRequired
}

export default ContactList;