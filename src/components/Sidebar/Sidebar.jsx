import { Block, HeaderMenu } from './Sidebar-styled.js';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <Block>
      <img src="../../../public/images/TravelTrucks.svg" width="136px" height="15px" alt="sidebar logo" loading='lazy' />
      <HeaderMenu>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
      </HeaderMenu>
    </Block>
  )
}