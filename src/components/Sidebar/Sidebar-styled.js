import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.header`
    display: flex;
    align-items: center;
    background-color: #F7F7F7;
    min-width: 1440px;
    border: 1px solid #F2F4F7;
    padding-left: 64px;
`;

export const HeaderMenu = styled.nav`
    display: flex;
    margin: 0 auto;
    padding: 30px 0 30px 0;
`;

export const HeaderHome = styled(NavLink)`
    margin-right: 17px;
    list-style: none;
    text-decoration: none;
    color: #101828;

    &.active {
        color: #D84343;
    }
`;

export const HeaderCatalog = styled(NavLink)`
    margin-left: 17px;
    list-style: none;
    text-decoration: none;
    color: #101828;

    &.active {
        color: #D84343;
    }
`;