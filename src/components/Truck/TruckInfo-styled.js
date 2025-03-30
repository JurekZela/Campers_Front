import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TruckContainer = styled.ul`
    display: block;
    margin-left: auto;
`;

export const TruckCard = styled.li`
    display: flex;
    margin: 0 0 32px auto;
    padding: 23px 24px 23px 23px;
    border: 1px solid #DADDE1;
    border-radius: 20px;
    width: 888px;
    min-height: 368px;
    height: auto;
    
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
    max-width: 292px;
    height: auto;
    object-fit: cover;
    margin-right: 12px;
    border-radius: 10px;
`;

export const ListCardInfo = styled.div`
margin-left: 12px;
`;

export const Description = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #475467;
    font-weight: 400;
    font-size: 16px;
`;

export const InfoLocMap = styled.div`
    display: flex;
    margin: 20px 0 36px 0;
    gap: 18px;
`;

export const HeardPrc = styled.div`
    display: flex;
    gap: 15px;
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

export const Categories = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 26px 0 23px 0;
`;

export const ShowMore = styled(NavLink)`
    display: flex;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    align-items: center;
    padding: 22px 41px 22px 41px;
    width: 166px;
    height: 56px;
    
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