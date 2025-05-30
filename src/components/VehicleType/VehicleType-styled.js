import { styled } from 'styled-components';

export const Vehicle = styled.div`
    margin-top: 35px;
    margin-bottom: 40px;
`;

export const VehicleContainer = styled.ul`
    display: flex;
    gap: 8px;
`;

export const TypeTitle = styled.h4`
  color: #101828;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 28px;
  
  border-bottom: 1px solid #DADDE1;
`;

export const TypeList = styled.li`
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 22px;
    border: 1px solid #DADDE1;
    border-radius: 10px;
    padding: 16px 32px;
    width: 112px;
    height: 96px;
`;