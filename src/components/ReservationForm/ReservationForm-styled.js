import { styled } from 'styled-components';
import { Field, Form } from 'formik';

export const ReservationContainer = styled.div`
    width: 641px;
    border: 1px solid #DADDE1;
    border-radius: 10px;
    margin-top: 46px;
    margin-left: 42px;
    padding: 44px 56px 44px 56px;
`;

export const HeaderForm = styled.h3`
    color: #101828;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 7px;
    
`;

export const TextForm = styled.p`
    color: #6C717B;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 17px;
`;

export const FormStyle = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 10px;
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

export const NameForm = styled(Field)`
    color: #6C717B;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    
    background-color: #F7F7F7;
    border-radius: 12px;
    border: none;
    padding: 18px 337px 18px 18px;
    
    &:hover {
        border: none;
    }
`;

export const EmailForm = styled(Field)`
    color: #6C717B;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    
    background-color: #F7F7F7;
    border-radius: 12px;
    border: none;
    padding: 18px 341px 18px 18px;
`;

export const BookingDateForm = styled(Field)`
    color: #6C717B;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    
    background-color: #F7F7F7;
    border-radius: 12px;
    border: none;
    padding: 18px 282px 18px 18px;
`;

export const CommentForm = styled(Field)`
    color: #6C717B;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    
    background-color: #F7F7F7;
    border-radius: 12px;
    border: none;
    padding: 18px 308px 76px 18px;
`;