import { styled } from 'styled-components';

export const ReservationContainer = styled.div`
    width: 641px;
    border: 1px solid #DADDE1;
    border-radius: 10px;
    margin-top: 46px;
    padding: 44px 56px 44px 56px;
`;

export const HeaderForm = styled.h3`
    color: #101828;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    
`;

export const TextForm = styled.p`
    color: #6C717B;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;

export const ButtonForm = styled.button`
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: #E44848;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 16px;
    vertical-align: middle;
    cursor: pointer;
    padding: 16px 60px 16px 60px;
    border: none;
    border-radius: 200px;
    
    &:hover {
        background-color: #D84343;
    }
`;