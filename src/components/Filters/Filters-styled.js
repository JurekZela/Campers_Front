import { styled } from 'styled-components';

export const FiltersContainer = styled.div`
  max-width: 360px;
  height: auto;
`;

export const FiltersTitle = styled.h3`
  color: #475467;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  margin-top: 46px;
`;

export const FilterSearchButton = styled.button`
    display: flex;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    align-items: center;
    text-decoration: none;
    border: none;
    border-radius: 200px;
    background-color: #E44848;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding: 16px 60px 16px 60px;
    
    &:hover {
        background-color: #D84343;
    }
`;