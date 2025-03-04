import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #F7F7F7;
    height: 72px;
    width: 100vh;
    min-width: 1550px;
    border: 1px solid #F2F4F7;
    padding-left: 64px;
`;

export const HeaderMenu = styled.div`
    display: block;
    margin: 0 auto;
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