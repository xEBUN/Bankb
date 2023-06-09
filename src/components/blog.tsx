import React from 'react';
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 13px;
  overflow: auto;
  .blog-card{
    background-color: #1C1C1E;
    border-radius: 15px;
    padding: 22px 35px 24px 20px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    p{
      margin-top: 17px;
      font-weight: 400;
      font-size: 12px;
      line-height: 110%;
      letter-spacing: 0.02em;
      color: #999999;
    }
    b{
      margin-top: 6px;
      font-weight: 500;
      font-size: 16px;
      line-height: 110%;
      letter-spacing: 0.02em;
      color: #FFFFFF;

    }
  }
  .blog-card b{
    max-width: 97px;
  }
`;

const Blog = () => {
    return (
        <Container>
            <NavLink className="blog-card" to='/'>
                <svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="42" rx="20" fill="#FFDD2D"/>
                    <g clipPath="url(#clip0_1_120)">
                        <path d="M14.9435 15.0876C15.0789 14.5798 15.5588 14.1579 16.1822 14.1579C16.6867 14.1579 17.1092 14.4391 17.3184 14.822C17.8105 15.7282 18.8031 16.3454 19.9434 16.3454C21.0836 16.3454 22.0762 15.7282 22.5684 14.822C22.7775 14.4391 23.2 14.1579 23.7045 14.1579C24.332 14.1579 24.8119 14.5798 24.9432 15.0876C25.2303 16.1735 26.2639 16.9743 27.4902 16.9743C27.9332 16.9743 28.3516 16.8688 28.7125 16.6852C29.057 16.5134 29.4877 16.5095 29.8445 16.7204C30.3777 17.0329 30.5459 17.697 30.2219 18.2048L25.8373 25.0954H25.1934H23.5363H16.3504H14.6934H14.0494L9.66484 18.2048C9.34081 17.697 9.50898 17.0329 10.0422 16.7204C10.399 16.5134 10.8297 16.5134 11.1742 16.6852C11.5393 16.8688 11.9535 16.9743 12.3965 16.9743C13.6228 16.9743 14.6564 16.1735 14.9435 15.0876ZM14.0371 26.3454H25.8496L27.5476 27.9626C27.7199 28.1266 27.8184 28.3532 27.8184 28.5876C27.8184 29.0759 27.4041 29.4704 26.8914 29.4704H12.9953C12.4826 29.4704 12.0684 29.0759 12.0684 28.5876C12.0684 28.3532 12.1668 28.1266 12.3391 27.9626L14.0371 26.3454Z" fill="#1E1D1B"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1_120">
                            <rect width="21" height="20" fill="white" transform="translate(9.5 11)"/>
                        </clipPath>
                    </defs>
                </svg>
                <p>Выгода</p>
                <b>Кэшбэк 3% на всё</b>
            </NavLink>
            <NavLink className="blog-card" to='/'>
                <svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="42" rx="20" fill="#FFDD2D"/>
                    <g clipPath="url(#clip0_1_123)">
                        <path d="M19.8881 10.1246C19.7076 10.043 19.5143 10 19.3123 10C19.1104 10 18.917 10.043 18.7366 10.1246L10.6455 13.5578C9.70023 13.9574 8.99554 14.8898 8.99984 16.0156C9.02132 20.2781 10.7744 28.077 18.178 31.6219C18.8955 31.9656 19.7291 31.9656 20.4467 31.6219C27.8502 28.077 29.6034 20.2781 29.6248 16.0156C29.6291 14.8898 28.9244 13.9574 27.9791 13.5578L19.8881 10.1246ZM15.1873 16.6344C15.1873 16.3852 15.3893 16.1875 15.6342 16.1875H15.6428C15.7889 16.1875 15.9221 16.2563 16.008 16.3723L17.7268 18.6625C17.8557 18.8344 18.0619 18.9375 18.2768 18.9375H20.3393C20.5541 18.9375 20.7604 18.8344 20.8893 18.6625L22.608 16.3723C22.694 16.2563 22.8315 16.1875 22.9733 16.1875H22.9819C23.2311 16.1875 23.4287 16.3895 23.4287 16.6344V21.6875C23.4287 23.9648 21.5811 25.8125 19.3037 25.8125C17.0264 25.8125 15.1787 23.9648 15.1787 21.6875V16.6344H15.1873ZM17.5936 22.375C17.7759 22.375 17.9508 22.3026 18.0797 22.1736C18.2087 22.0447 18.2811 21.8698 18.2811 21.6875C18.2811 21.5052 18.2087 21.3303 18.0797 21.2014C17.9508 21.0724 17.7759 21 17.5936 21C17.4113 21 17.2364 21.0724 17.1075 21.2014C16.9785 21.3303 16.9061 21.5052 16.9061 21.6875C16.9061 21.8698 16.9785 22.0447 17.1075 22.1736C17.2364 22.3026 17.4113 22.375 17.5936 22.375ZM21.7186 21.6875C21.7186 21.5052 21.6462 21.3303 21.5172 21.2014C21.3883 21.0724 21.2134 21 21.0311 21C20.8488 21 20.6739 21.0724 20.545 21.2014C20.416 21.3303 20.3436 21.5052 20.3436 21.6875C20.3436 21.8698 20.416 22.0447 20.545 22.1736C20.6739 22.3026 20.8488 22.375 21.0311 22.375C21.2134 22.375 21.3883 22.3026 21.5172 22.1736C21.6462 22.0447 21.7186 21.8698 21.7186 21.6875Z" fill="#1E1D1B"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1_123">
                            <rect width="22" height="22" fill="white" transform="translate(9 10)"/>
                        </clipPath>
                    </defs>
                </svg>

                <p>Инвест прайм</p>
                <b>Выгода в одном нажатии</b>
            </NavLink>
        </Container>
    );
};

export default Blog;