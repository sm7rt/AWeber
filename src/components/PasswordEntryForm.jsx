import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const PasswordEntryForm = () => {
  return (
    <Formik
      initialValues={{ password: "", confirmPassword: "" }}
      validationSchema={PasswordSchema}
      onSubmit={(values, { setSubmitting }) => {
        alert("Password is valid!");
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Field
              type="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xs italic"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <Field
              type="password"
              name="confirmPassword"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500 text-xs italic"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PasswordEntryForm;
