import { styled } from 'styled-components';

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(247, 247, 247, 1);
    margin-top: 43px;
    padding: 50px 44px;
    max-width: 631px;
    max-height: 588px;
    border-radius: 10px;
    gap: 100px;
`;

export const DetailsCategories = styled.ul`
  display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
`;

export const VehicleDetailsText = styled.h3`
    font-weight: 600;
    font-size: 20px;
    color: rgba(16, 24, 40, 1);
  border-bottom: 1px solid rgba(218, 221, 225, 1);
    padding-bottom: 27px;
`;