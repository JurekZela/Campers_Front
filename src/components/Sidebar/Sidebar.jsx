import { SidebarContainer, HeaderMenu, HeaderHome, HeaderCatalog } from './Sidebar-styled.js';

export default function Sidebar() {
  return (
    <SidebarContainer>
      <img src="/images/TravelTrucks.svg" width="136px" height="15px" alt="sidebar logo" loading='lazy' />
      <HeaderMenu>
        <HeaderHome to="/">Home</HeaderHome>
        <HeaderCatalog to="/campers">Catalog</HeaderCatalog>
      </HeaderMenu>
    </SidebarContainer>
  )
}
