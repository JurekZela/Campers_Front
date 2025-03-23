import { styled } from 'styled-components';

export const AccurateContainer = styled.section`
  margin-bottom: 70px;
`;

export const DetailsImages = styled.img`
    min-width: 292px;
    height: 320px;
    object-fit: fill;
    border-radius: 10px;
`;

export const ImgContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 48px;
    margin-bottom: 34px;
`;

export const RatLoc = styled.div`
  display: flex;
    margin: 20px 0 24px 0;
    gap: 16px;
`;

export const Reviews = styled.p`
    display: flex;
    gap: 6px;
    font-weight: 400;
    font-size: 16px;
    color: #101828;
    text-decoration: underline;
`;

export const Price = styled.p`
    margin-bottom: 34px;
    color: #101828;
    font-weight: 600;
    font-size: 24px;
`;