/* eslint-disable no-unused-vars */
// import "./FileUpload.css";
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import axios from 'axios';

function FileUpload() {
  return (
    <Formik
      initialValues={{
        profile: [],
      }}
      onSubmit={(values, props) => {
        let data = new FormData();
        values.profile.forEach((photo, index) => {
          data.append('photo', values.profile[index]);
          console.log(data);
        });
      }}
    >
      {(formik) => {
        return (
          <>
            <Form>
              <input
                id="file"
                name="profile"
                type="file"
                onChange={(event) => {
                  const files = event.target.files;
                  let myFiles = Array.from(files);
                  formik.setFieldValue('profile', myFiles);
                }}
                multiple
              />
              <ErrorMessage name="profile" />
              <button type="submit">Submit</button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

export default FileUpload;
