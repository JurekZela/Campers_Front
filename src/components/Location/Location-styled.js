import { styled } from 'styled-components';

export const LocationHead = styled.h4`
    color: #6C717B;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    margin-bottom: 14px;
`;

export const LocationInput = styled.input`
    width: 100%;
    background-color: #F7F7F7;
    border-radius: 12px;
    padding: 18px 215px 18px 52px;
    border: none;
    background-image: url('/filtersIcon/location.svg');
    background-repeat: no-repeat;
    background-position: 18px center;
    background-size: 20px 20px;

    &:focus {
        outline: none;
    }


    &::placeholder {
        font-weight: 400;
        font-size: 16px;
        color: #6C717B;
        transition: color 0.2s ease;
    }

`;