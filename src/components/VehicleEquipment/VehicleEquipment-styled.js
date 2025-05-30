import { styled } from 'styled-components';

export const Equipment = styled.div`
  margin-top: 40px;
`;

export const EquipmentTitle = styled.h4`
  color: #101828;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 28px;

  border-bottom: 1px solid #DADDE1;
`;

export const EquipmentContainer = styled.ul`
    display: flex;
    gap: 8px;
    margin-top: 22px;
    flex-wrap: wrap;
`;

export const EquipmentList = styled.li`
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 16px 18px;
    border: 1px solid #DADDE1;
    border-radius: 12px;
    width: 112px;
    height: 96px;
`;