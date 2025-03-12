import { styled } from 'styled-components';

export const LoadMoreBtn = styled.button`
    display: flex;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    align-items: center;
    text-decoration: none;
    gap: 10px;
    background-color: #ffffff;
    border: 1px solid #DADDE1;
    border-radius: 200px;
    padding: 16px 32px;
    font-family: Inter;
    color: #101828;
    font-weight: 500;
    font-size: 16px;
    
    &: hover {
        border: 1px solid #D84343;
    }
`;