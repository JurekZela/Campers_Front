import { Categorie } from './Categorie-styled.js';

export const renderCategory = (icon, label) => (
  <Categorie>
    <img src={icon} alt={label} width="20px" height="20px" />
    {label}
  </Categorie>
);