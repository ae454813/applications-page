import styled from "styled-components";
import { Breakpoints } from "../../constants";

export const ApplicationPageContainer = styled.div`
    padding: 15px 44px 15px 40px;
    @media (max-width: ${Breakpoints.sm}){
        padding: 16px;
    }
    .go-back{
        margin-bottom: 10px;
        font-size: 18px;
        cursor: pointer;
        font-weight: 600;
        color: ${(props) => props.theme.customColors.primary};

        .go-apps{
            color: ${(props) => props.theme.customColors.primary};
            @media (max-width: ${Breakpoints.sm}){
                font-size: 14px;
            }
        }
    }
    .right-arrow{
        font-size: 12px;
    }

    .app-page-description{
        max-width: 635px;
        margin: 25px 0 10px;
        color: ${(props) => props.theme.colors.Gray2};
        line-height: 24px;
    }

    .hint-description{
        color: ${(props) => props.theme.colors.Gray2};
        line-height: 32px;
        font-weight: 600;
    }
    .images-grid{
        margin-top: 30px;
    }
    .paragraph-col{
        display: ${(props) => props.data.paragraph ? `unset` : `none` };
    }
    .features-hint{
        @media (max-width: ${Breakpoints.sm}){
           gap: 16px !important;
        }
    }
`

export const ReviewAppCard = styled.div`
    padding: 24px 30px;
    background-color: #FBFBFB;
    @media (max-width: ${Breakpoints.sm}){
        padding: 24px 16px 32px;
    }
    @media (max-width: ${Breakpoints.xs}){
        padding: 0;
    }

    .app-title{
        font-weight: 700;
        color: ${(props) => props.theme.colors.black3};
        @media (max-width: ${Breakpoints.sm}){
            font-size: 18px;
        }
    }
    
    .app-descriprion{
        font-size: 16px;
        color: ${(props) => props.theme.colors.Gray2};
        @media (max-width: ${Breakpoints.sm}){
            font-size: 14px;
        }
    }
    
    .app-supplier{
        font-weight: 500;
        margin: 2px;
        color: ${(props) => props.theme.customColors.secondary};
    }

    .btn-1{
        padding: 7px 20px;
        border-radius: 4px;
        height: 36px;
        background-color: ${(props) => props.theme.customColors.lightBlue1};
        font-size: 14px;
        font-weight: 600;
        @media (max-width: ${Breakpoints.sm}){
            font-size: 12px;
        }
    }
    .btn-2{
        padding: 0 20px;
        border-radius: 4px;
        height: 36px;
        border: 1px solid ${(props) => props.theme.customColors.lightBlue1};
        color: ${(props) => props.theme.customColors.lightBlue1};
        font-size: 14px;
        font-weight: 600;
        @media (max-width: ${Breakpoints.sm}){
            font-size: 12px;
        }
    }
    .btn-3{
        padding: 7px 20px;
        border-radius: 4px;
        height: 36px;
        background-color: ${(props) => props.theme.customColors.lightBlue1};
        font-weight: 500;
    }
    .space-card{
        @media (max-width: ${Breakpoints.sm}){
        gap: 14px !important;
        }
        @media (max-width: ${Breakpoints.xs}){
            gap: 5px !important;
    }
    }
`;
