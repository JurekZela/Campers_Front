import { styled, css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Block = styled.div`
    display: flex;
    align-items: center;
    background-color: #F7F7F7;
    height: 72px;
    min-width: 1440px;
    border: 1px solid #F2F4F7;
    padding-left: 64px;
`;

export const HeaderMenu = styled.div`
    display: block;
    margin: 0 auto;
`;

// margin-right: 17px;
// list-style: none;
// text-decoration: none;
// color: #101828;
//
// & {
//   color: #D84343;
// }

export const HeaderHome = styled(NavLink)`
      ${(props) => {
          console.log(props);
    switch(props.children === 'Home') {
      case 'active':
        return css`
            color: #D84343;
        `;
      
    default: return css`
    margin-right: 17px;
    list-style: none;
    text-decoration: none;
    color: #101828
    `;
    }
      }}`;

export const HeaderCatalog = styled(NavLink)`
    margin-left: 17px;
    list-style: none;
    text-decoration: none;
    color: #101828;
`;