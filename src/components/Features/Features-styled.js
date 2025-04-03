import { styled } from 'styled-components';

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    background-color: rgba(247, 247, 247, 1);
    margin-top: 43px;
    padding: 45px 50px;
    max-width: 631px;
    height: auto;
    border-radius: 10px;
    
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

export const VehicleDetailsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-top: 30px;
`;