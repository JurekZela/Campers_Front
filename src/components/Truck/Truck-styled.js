import { styled } from 'styled-components';

export const TruckContainer = styled.ul`
    display: block;
    margin: 48px 0 0 auto;
    width: 888px;
    height: 368px;
`;

export const TruckCard = styled.li`
    display: flex;
    margin: 0 0 32px 0;
    padding: 23px 24px 23px 23px;
    border: 1px solid #DADDE1;
    border-radius: 20px;
    
    &:last-child {
        margin-bottom: 0;
    }
`;

export const InfoPriNam = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TruckName = styled.h2`
    color: #101828;
    font-weight: 600;
    font-size: 24px;
    
`;

export const TruckPrice = styled.p`
    color: #101828;
    font-weight: 600;
    font-size: 24px;
    
`;

export const TruckImg = styled.img`
    width: 292px;
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
`;

export const InfoLocMap = styled.div`
display: flex;
    margin: 20px 0 36px 12px;
`;

export const Rating = styled.p`
    display: flex;
    gap: 6px;
    font-weight: 400;
    font-size: 16px;
    color: #101828;
`;

export const Location = styled.p`
    display: flex;
    gap: 6px;
`;

export const ShowMore = styled.button`
    display: flex;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    min-width: 166px;
    padding: 22px 41px 22px 41px;
    color: #FFFFFF;
    background-color: #E44848;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
    
    border-radius: 200px;
    border: none;
    
    &:hover {
        background-color: #D84343;
    }
`;