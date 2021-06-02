import React from 'react';
import './style.scss';
import { BellOutlined, createFromIconfontCN, QuestionCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
//const
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
function Home() {
    return (
        <div className='product'>
            <div className='product__header'>
                <div className='product__header--top'>
                    <div className='product__header--top__content'>
                        <div className='product__header--top__content--right'>
                            <div>Kênh người bán</div>
                            <div>Trở thành Người bán Shopee</div>
                            <div>Tải ứng dụng</div>
                            <div style={{ borderRight: 'none' }}>Kết nối</div>
                            <IconFont type='icon-facebook' style={{ color: '#fff', marginRight: 5, lineHeight: 2.1 }} />
                            <IconFont type='icon-twitter' style={{ color: '#fff', lineHeight: 2.1 }} />
                        </div>
                        <div className='product__header--top__content--left'>
                            <div className='product__header--top__content--left__item'>
                                <BellOutlined style={{ marginRight: 5 }} />
                                Thông báo
                            </div>
                            <div className='product__header--top__content--left__item'>
                                <QuestionCircleOutlined style={{ marginRight: 5 }} />
                                Hỗ trợ
                            </div>
                            <Link to={'/register'}>
                                <div className='product__header--top__content--left__item' style={{ borderRight: '2px solid hsla(0, 0%, 100%, 0.22)' }}>
                                    Đăng ký
                                </div>
                            </Link>
                            <Link to={'/register'}>
                                <div className='product__header--top__content--left__item'>Đăng nhập</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='product__header--bottom'></div>
            </div>
            <div className='product__content'>
                <div className='product__content--title'>ĐÁNH GIÁ SẢN PHẨM</div>
                <div className='product__content--element'>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
