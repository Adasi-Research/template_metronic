import React, {useState} from 'react';
import * as Yup from 'yup';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';
import {getUserByToken, login} from '../core/_requests';
import {toAbsoluteUrl} from '../../../../config/helpers';

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
    password: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
});

const initialValues = {
    email: '',
    password: '',
};

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login(): JSX.Element {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (): void => {
        setLoading(true);
        /*authentication
          .auth({
            username: formik.values.email,
            password: formik.values.password,
          })
          .then((res) => {
            saveAuth({
              api_token: res.accessToken,
            });

            setCurrentUser({
              id: 1,
              username: 'Jonatas',
              password: 'asjdoias',
              email: 'asdasdasda@gmail.com',
              first_name: 'Jonatas',
              last_name: 'Alves',
            });
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });*/
    };

    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            setLoading(true);
        },
    });

    return (
        <form
            className='form w-100'
            onSubmit={formik.handleSubmit}
            noValidate
            id='kt_login_signin_form'
        >
            {/* begin::Heading */}
            <div className='text-center mb-11'>
                <h1 className='text-dark fw-bolder mb-3'>Sign In</h1>
                <div className='text-gray-500 fw-semibold fs-6'>Your Social Campaigns</div>
            </div>
            {/* begin::Heading */}

            {/* begin::Login options */}
            <div className='row g-3 mb-9'>
                {/* begin::Col */}
                <div className='col-md-6'>
                    {/* begin::Google link */}
                    <a
                        href='src/presentation/app/modules/auth/components#'
                        className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
                    >
                        <img
                            alt='Logo'
                            src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
                            className='h-15px me-3'
                        />
                        Sign in with Google
                    </a>
                    {/* end::Google link */}
                </div>
                {/* end::Col */}

                {/* begin::Col */}
                <div className='col-md-6'>
                    {/* begin::Google link */}
                    <a
                        href='src/presentation/app/modules/auth/components#'
                        className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
                    >
                        <img
                            alt='Logo'
                            src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')}
                            className='theme-light-show h-15px me-3'
                        />
                        <img
                            alt='Logo'
                            src={toAbsoluteUrl('/media/svg/brand-logos/apple-black-dark.svg')}
                            className='theme-dark-show h-15px me-3'
                        />
                        Sign in with Apple
                    </a>
                    {/* end::Google link */}
                </div>
                {/* end::Col */}
            </div>
            {/* end::Login options */}

            {/* begin::Separator */}
            <div className='separator separator-content my-14'>
                <span className='w-125px text-gray-500 fw-semibold fs-7'>Or with email</span>
            </div>
            {/* end::Separator */}

            {formik.status ? (
                <div data-testid={'error-wrap'} className='mb-lg-15 alert alert-danger'>
                    <div className='alert-text font-weight-bold'>{formik.status}</div>
                </div>
            ) : (
                <div className='mb-10 bg-light-info p-8 rounded'>
                    <div className='text-info'>
                        Use account <strong>admin@demo.com</strong> and password <strong>demo</strong> to
                        continue.
                    </div>
                </div>
            )}

            {/* begin::Form group */}
            <div className='fv-row mb-8'>
                <label className='form-label fs-6 fw-bolder text-dark'>Email</label>
                <input
                    {...formik.getFieldProps('email')}
                    className={clsx(
                        'form-control bg-transparent',
                        {'is-invalid': formik.touched.email && formik.errors.email},
                        {
                            'is-valid': formik.touched.email && !formik.errors.email,
                        }
                    )}
                    type='email'
                    name='email'
                    autoComplete='off'
                />
                {formik.touched.email && formik.errors.email && (
                    <div className='fv-plugins-message-container'>
                        <span role='alert'>{formik.errors.email}</span>
                    </div>
                )}
            </div>
            {/* end::Form group */}

            {/* begin::Form group */}
            <div className='fv-row mb-3'>
                <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
                <input
                    type='password'
                    autoComplete='off'
                    {...formik.getFieldProps('password')}
                    className={clsx(
                        'form-control bg-transparent',
                        {
                            'is-invalid': formik.touched.password && formik.errors.password,
                        },
                        {
                            'is-valid': formik.touched.password && !formik.errors.password,
                        }
                    )}
                />
                {formik.touched.password && formik.errors.password && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                            <span role='alert'>{formik.errors.password}</span>
                        </div>
                    </div>
                )}
            </div>
            {/* end::Form group */}

            {/* begin::Wrapper */}
            <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
                <div/>

                {/* begin::Link */}
                <Link to='/auth/forgot-password' className='link-primary'>
                    Forgot Password ?
                </Link>
                {/* end::Link */}
            </div>
            {/* end::Wrapper */}

            {/* begin::Action */}
            <div className='d-grid mb-10'>
                <button
                    type='button'
                    id='kt_sign_in_submit'
                    className='btn btn-primary'
                    onClick={handleSubmit}
                    disabled={formik.isSubmitting || !formik.isValid}
                >
                    {!loading && <span className='indicator-label'>Continue</span>}
                    {loading && (
                        <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
                    )}
                </button>
            </div>
            {/* end::Action */}

            <div className='text-gray-500 text-center fw-semibold fs-6'>
                Not a Member yet?{' '}
                <Link to='/auth/registration' className='link-primary'>
                    Sign up
                </Link>
            </div>
        </form>
    );
}
