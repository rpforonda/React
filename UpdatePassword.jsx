import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import debug from 'sabio-debug';
import * as usersService from '../../services/usersService';
import { updatePassSchema } from './formSchema';
import 'toastr/build/toastr.css';
import toastr from 'toastr';
import { Container, Button } from 'react-bootstrap';
import './userauth.css';
import PropTypes from 'prop-types';

function UpdatePassword({ current }) {
    const _logger = debug.extend('updatePassword');

    const [userData] = useState({
        password: '',
        confirmPassword: '',
    });

    const onSubmitSuccess = () => toastr.success('Password update successful');
    const onSubmitError = (response) => toastr.error(response);
    const submitForm = (values) => {
        _logger(values);
        usersService.updatePass(current, values).then(onSubmitSuccess).catch(onSubmitError);
    };

    const updatePassForm = (
        <Container className="container-fluid">
            <h4 className="mt-0">{'Edit User Profile'}</h4>
            <p className="text-muted mb-4">{'Please click Submit Changes below to save changes.'}</p>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    password: userData.password,
                    confirmPassword: userData.confirmPassword,
                }}
                validationSchema={updatePassSchema}
                onSubmit={submitForm}>
                <Form>
                    <div className="form-group  justify-content-center">
                        <div className="  my-2">
                            <label htmlFor="password" className="col-form-label">
                                Password
                            </label>
                            <Field
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Enter new password"
                            />

                            <ErrorMessage name={'password'} component="div" className="error my-1 mx-1" />
                        </div>
                    </div>

                    <div className="form-group  justify-content-center">
                        <div className="my-2">
                            <label htmlFor="confirmPassword" className="col-form-label">
                                Confirm Password
                            </label>
                            <Field
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Re-type password"
                            />
                            <ErrorMessage name={'confirmPassword'} component="div" className="error my-1 mx-1" />
                        </div>
                        <Button variant="primary" type="submit">
                            <i className="mdi mdi-account-circle"></i> {'Change Password'}
                        </Button>
                    </div>
                </Form>
            </Formik>
        </Container>
    );
    return <React.Fragment>{updatePassForm}</React.Fragment>;
}
UpdatePassword.propTypes = {
    current: PropTypes.number,
};
export default UpdatePassword;
