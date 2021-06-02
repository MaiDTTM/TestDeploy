import React from 'react';
// import PropTypes from 'prop-types';
import './style.scss';
import { GoogleLogin } from 'react-google-login';
import Facebook from './RegisterFace/Facebook';
function Register() {
    const responseGoogle = (response) => {
        console.log('response', response);
    };
    return (
        <div style={{ backgroundImage: 'url("https://www.teahub.io/photos/full/103-1031614_cosmetics-wallpapers-wallpapers-html-code-beautiful-background-make.jpg")' }}>
            <form style={{ display: ' block', marginTop: '0em', height: '100%' }}>
                <div className='register'>
                    <div className='register__header'>
                        <div className='register__header--item'>Đăng Ký</div>
                    </div>
                    <div className='register__content'>
                        <div className='register__content--container'>
                            <div className='register__content--container__input'>
                                <input className='yReWDs' type='text' placeholder='Số điện thoại' autoComplete='tel' name='phone' value='' />
                            </div>
                            <button className='register__content--container__btn' disabled=''>
                                Tiếp theo
                            </button>
                            <div className='register__content--container__option'>
                                <div className='register__content--container__option--hr'>
                                    <div className='_3svg61' />
                                    <span className='_1ZEpVL'>HOẶC</span>
                                    <div className='_3svg61' />
                                </div>
                                <div className='register__content--container__option--item'>
                                    <div>
                                        <Facebook />
                                    </div>
                                    <div style={{ width: '48%', marginLeft: 5, height: '2.5rem', margin: '0.3125rem' }}>
                                        <GoogleLogin clientId='326538060414-5vqrgaosddu857h2siom011r796tfl4j.apps.googleusercontent.com' buttonText='Login' onSuccess={responseGoogle} onFailure={responseGoogle} />
                                    </div>
                                </div>
                            </div>
                            <div className='register__content--container__footer'>
                                <span className='R49cvp'>Bằng việc đăng kí, bạn đã đồng ý về</span>
                                <span className='_3LmzHH' target='_blank' rel='noopener noreferrer'>
                                    Điều khoản dịch vụ
                                </span>
                                <span className='_1YqulL'> &amp; </span>
                                <span className='_3LmzHH' target='_blank' rel='noopener noreferrer'>
                                    Chính sách bảo mật
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='register__footer'>
                        <div className='_2O9TWB'>
                            <span className='yjBjsT'>Bạn đã có tài khoản?</span>
                            <span className='_25Fkvp'>Đăng nhập</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
