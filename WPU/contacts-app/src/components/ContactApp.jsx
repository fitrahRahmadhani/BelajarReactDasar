// eslint-disable-next-line no-unused-vars
import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";

function ContactApp(){
    const contact = getData();

    return(
        <div className="contact-app">
            <h1>Daftar Kontak</h1>
            <ContactList contact={contact} />
        </div>
    )
}
export default ContactApp;