# AWeber - Password Entry Application

This project is a React application featuring a password entry form with validation, integrated within a modal dialog. It uses React, Formik for form management, and Tailwind CSS for styling. React application featuring a password entry form with validation, integrated within a modal dialog. It uses React, Formik for form management, React application featuring a password entry form with validation, integrated within a modal dialog. It uses React application featuring a password entry form with validation

## Features

Password validation with custom rules:

- Has two input fields to validate the entry from the user (both inputs must match)
- Password has a min length of 6 characters
- Password has at least 1 uppercase character
- Password has at least 1 lowercase character
- Password has at least 1 number
- Password has at least 1 special character `!@#$%^&\*()\_-+={[}]|:;"'<,>.`
- Has a submit button that will trigger validation and present success or why the password entry failed

## Installation

To run this application, you need to have Node.js and npm installed on your system. If you don't have them installed, download and install them from Node.js and npm installed on your system.

```
git clone git@github.com:sm7rt/AWeber.git
cd Aweber
npm install
```

## Running the Application

To start the application, run the following command in your terminal:

```
npm start
```

This will start the development server and open the application in your default web browser.

## Project Structure

`src/components/PasswordEntryForm.js`: Contains the password entry form with validation logic.

`src/components/Modal.js`: A reusable modal component.

`src/App.js`: The main application component that integrates the PasswordEntryForm within the Modal.

`tailwind.config.js`: Tailwind CSS configuration file.
