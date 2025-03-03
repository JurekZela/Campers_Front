import { styled } from 'styled-components';

export const TruckContainer = styled.ul`
    display: block;
    margin-left: auto;
    width: 888px;
    height: 368px;
`;

export const TruckCard = styled.li`
    display: flex;
    margin: 0 0 32px 32px;
    padding: 23px 24px 23px 23px;
    border: 1px solid #DADDE1;
    border-radius: 20px;
    
    &:last-child {
        margin-bottom: 0;
    }
`;

export const TruckImg = styled.img`
    width: 292px;
    height: 320px;
    margin-right: 12px;
    border-radius: 10px;
`;

export const ListCardInfo = styled.div`
margin-left: 12px;
`;

export const Description = styled.p`

    color: #475467;
    font-weight: 400;
    font-size: 16px;
    font-family: Inter;
`;