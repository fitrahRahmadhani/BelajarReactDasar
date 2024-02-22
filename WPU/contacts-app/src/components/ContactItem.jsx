// eslint-disable-next-line no-unused-vars
import React from "react";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import PropTypes from "prop-types";

function ContactItem({ imageUrl, name, tag }){
    return(
        <div className="contact-item">
            <ContactItemImage imageUrl={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
        </div>
    )
}

ContactItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
};

export default ContactItem;