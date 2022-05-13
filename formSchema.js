import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').min(5).max(100).required('Email address is required'),
    firstName: Yup.string()
        .min(2, 'First name must be at least 2 characters')
        .max(100)
        .required('First name is required'),
    lastName: Yup.string().min(2, 'Last name must be at least 2 characters').max(100).required('Last name is required'),
    password: Yup.string()

        .matches(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
            'Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
        )
        .max(100)
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password does not match')
        .required('Must confirm the password'),
    agreeTerms: Yup.bool().isTrue('You must agree with the Terms and Conditions'),
});

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email address')
        .min(5)
        .max(100)
        .required('You must enter an email address'),
    password: Yup.string().max(100).required('You must enter a password'),
});

const forgotPassSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email address')
        .min(5)
        .max(100)
        .required('You must enter an email address'),
});

const editUserSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'First name must be at least 2 characters')
        .max(100)
        .required('First name is required'),
    lastName: Yup.string().min(2, 'Last name must be at least 2 characters').max(100).required('Last name is required'),
});

const updatePassSchema = Yup.object().shape({
    password: Yup.string()

        .matches(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
            'Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
        )
        .max(100)
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password does not match')
        .required('Must confirm the password'),
});
export { editUserSchema, registerSchema, loginSchema, forgotPassSchema, updatePassSchema };
