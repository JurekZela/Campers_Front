import {styled} from "styled-components";

export const ReviewsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 631px;
    margin: 55px 45px 0 0;
`;

export const ReviewName = styled.p`
    color: #101828;
    font-weight: 500;
    font-size: 16px;
`;

export const ReviewComment = styled.p`
    margin-top: 23px;
    color: #475467;
    font-weight: 400;
    font-size: 16px;
`;

export const UserInfoReview = styled.div`
    display: flex;
    gap: 17px;
`;