import React from 'react';
import "./login.css";

const LoginForm = (props) => {
  return (
    <div className="popup">
        <div className="popup-inner row">
            <div className="col testImage2" />
            <form className='col p-0'>
                <div className="row d-flex justify-content-end">
                    <button className="close-btn pe-5 pt-2" onClick={props.handleClose}>x</button>
                </div>
                <h2 className='d-flex justify-content-center pt-4 header pb-2'>welcome back!</h2>
                <div className='px-5 col col-lg-auto pb-3'>
                    <div className="pt-4">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="Email or Username" required/>
                            <label for="floatingInput">Email or Username</label>
                        </div>
                    </div>
                    <div className="pt-3">
                        <div className="form-floating">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                            <label for="floatingInput">Password</label>
                        </div>
                    </div>
                    <div className="form-check py-3">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                    </div>
                    <div className="d-flex justify-content-center py-4">
                        <button type="submit" className="btn btn-primary btn-lg w-100">log in</button>
                    </div>
                </div>
                <div className="registerBG py-3">
                    <small className="d-flex justify-content-center pt-2">Don't have an account?</small>
                    <div className="d-flex justify-content-center pb-3 px-5">
                        <button type="submit" className="btn btn-danger btn-lg w-100">register</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
};

export default LoginForm;