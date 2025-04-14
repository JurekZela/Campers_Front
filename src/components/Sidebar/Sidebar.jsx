import { useDispatch } from 'react-redux';
import { SidebarContainer, HeaderMenu, HeaderHome, HeaderCatalog } from './Sidebar-styled.js';

export default function Sidebar() {
  const dispatch = useDispatch();

  const changeInitialStatePage = () => dispatch({page: 1,});

  return (
    <SidebarContainer>
      <img src="/images/TravelTrucks.svg" width="136px" height="15px" alt="sidebar logo" loading='lazy' />
      <HeaderMenu>
        <HeaderHome to="/" end>Home</HeaderHome>
        <HeaderCatalog onClick={changeInitialStatePage} to="/campers" end>Catalog</HeaderCatalog>
      </HeaderMenu>
    </SidebarContainer>
  )
}
