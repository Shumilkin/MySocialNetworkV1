import React from 'react';
import {withFormik, useField, Formik} from 'formik';
import {useState} from 'react'

const MyForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,

    } = props;


    let list = Object.assign({}, props.contacts)
    /*   let a = (props) => {return {...props, list:'list'}}
       props = {...props , list: 'list' }*/
    let contacts = ''
    for (var key in list) {
        contacts = [...contacts, <div><input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={list[key] != null ? list[key] : key}
            value={values[`${key}`]}
            name={key}
        /></div>]
    }


    return (
        <Formik initialValues={list}>

            <form onSubmit={handleSubmit}>
                {/*            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.vk}
                name="vk"
            />

            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.github}
                name="github"
            />*/}
                {/* {errors.name && touched.name && <div id="feedback">{errors.name}</div>}*/}

                {contacts}
                <button type="submit">Submit</button>
            </form>
        </Formik>
    );
};

const ProfileContactsForm = withFormik({

    mapPropsToValues: (props) => (props.contacts),

    // Custom sync validation
    /*   validate: values => {
           const errors = {};

           if (!values.name) {
               errors.name = 'Required';
           }

           return errors;
       },*/

    handleSubmit: (values, {props, setSubmitting}) => {
        /*let contactsForSet = {}
        for (var key in list) {
            contactsForSet = {...contactsForSet, key: values.key}
        }*/

        let listOfContacts = {}
        let list2 = props.contacts

        for (var key in list2) {
            let key2 = key
            Object.assign(listOfContacts, {[key]: values[key2]});
            /*listOfContacts = { [key] :values[key2]}*/
        }

        props.setProfileContacts({
            lookingForAJob: true,
            lookingForAJobDescription: "test",
            fullName: "shumila",
            aboutMe: "test",
            contacts: listOfContacts
        })

    },

    displayName: 'BasicForm',
})(MyForm);
export default ProfileContactsForm