import React from 'react';
import {withFormik} from 'formik';
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
                name="message"
            />
            {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
            <button type="submit">Submit</button>
        </form>
    );
};

const MessagesForm = withFormik({

    mapPropsToValues: (props) => ({name: props.status}),
    // Custom sync validation


    handleSubmit: (values, {props, setSubmitting}) => {
 let data = {messageData: values.message, value: props.value}
        props.setDialogsMessage(data)
        props.setCount2(props.count2 + 1)

    },

    displayName: 'MessageForm',
})(MyForm);
export default MessagesForm