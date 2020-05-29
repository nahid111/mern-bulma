import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ForgotPassword = ({ isAuthenticated }) => {

    const [email, setEmail] = useState('');

    const onChange = e => setEmail(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        // forgotPassword(email);
    }
    
    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <div className="block">
              <div className="columns">
                <div className="column is-6 is-offset-3">
                  <h1 className="title has-text-primary">Reset Password</h1>
                  <p className="subtitle">
                    <span className="icon">
                      <i className="fas fa-key"></i>
                    </span>
                    <span>Submit your email to reset the password</span>
                  </p>
                  <hr />

                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="field">
                      <label className="label">Email</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="email"
                          value={email}
                          onChange={(e) => onChange(e)}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <button className="button is-primary">Submit</button>
                      </div>
                    </div>
                  </form>
                  <hr />
                </div>
              </div>
            </div>
          </div>

          <div className="block has-text-centered">
            <p>
              Don't have an account? <Link to="/register" className="has-text-danger">Sign Up</Link>
            </p>
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </section>
      </Fragment>
    );
}

ForgotPassword.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(ForgotPassword);
