import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    padding-left: 64px;
    max-width: 1440px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    text-align: center;
    color: white;
    background-image: url("/images/banner.svg");
`;

export const HomeTitle = styled.h1`
    color: #F7F7F7;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 48px;
    font-family: Inter;
`;

export const HomeSubTitle = styled.h2`
    color: #F7F7F7;
    margin-top: 8px;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 24px;
    font-family: Inter;
`;

export const HomeButton = styled(NavLink)`
    display: flex;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    align-items: center;
    text-decoration: none;
    width: 173px;
    padding: 22px 49px 22px 49px;
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
    background-color: #E44848;
    margin-top: 20px;
    border: none;
    border-radius: 200px;
    
    &:hover {
        background-color: #D84343;
    }
`;