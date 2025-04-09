import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TabsContainer = styled.div`
    border-bottom: 1px solid #DADDE1;
    padding-bottom: 28px;
`;

export const MoreInfoFormContainer = styled.div`
  display: flex;
`;

export const TabFeatures = styled(NavLink)`
    margin-right: 20px;
    font-weight: 600;
    font-size: 20px;
    color: #101828;
    text-decoration: none;
    
    &.active {
        padding-bottom: 27px;
        border-bottom: 5px solid #E44848;
    }
`;

export const TabReviews = styled(NavLink)`
    margin-left: 20px;
    font-weight: 600;
    font-size: 20px;
    color: #101828;
    text-decoration: none;

    &.active {
        padding-bottom: 27px;
        border-bottom: 5px solid #E44848;
    }
`;