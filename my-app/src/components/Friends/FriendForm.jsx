import React from 'react';
import {withFormik} from 'formik';
import { useDispatch } from 'react-redux'
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

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
            />
            {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
            <button type="submit">Submit</button>
        </form>
    );
};

const FriendsForm = withFormik({
    

    mapPropsToValues: (props) => ({name: props.status}),
    // Custom sync validation
    validate: values => {
      /*  const errors = {};

        if (!values.name) {
            errors.name = 'Required';
        }

        return errors;*/
    },

    handleSubmit: (values, {props, setSubmitting}) => {

        props.getUsersData(10, 1 , values.name)
props.setPage(1)
props.setFriend(null)
    },

    displayName: 'BasicForm',
})(MyForm);
export default FriendsForm