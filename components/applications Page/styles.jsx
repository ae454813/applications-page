import styled from "styled-components";

export const ApplicationPageContainer = styled.div`
    padding: 15px 44px 15px 40px;

    .go-back{
        margin-bottom: 10px;
        font-size: 18px;
        cursor: pointer;
        font-weight: 600;
        color: ${(props) => props.theme.customColors.primary};

        .go-apps{
            color: ${(props) => props.theme.customColors.primary};
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
`

export const ReviewAppCard = styled.div`
    padding: 25px 30px;
    background-color: #FBFBFB;

    .app-title{
        font-weight: 700;
        color: ${(props) => props.theme.colors.black3};
    }
    
    .app-descriprion{
        font-size: 16px;
        color: ${(props) => props.theme.colors.Gray2};
    }
    
    .app-supplier{
        font-weight: 500;
        margin: 2px;
        color: ${(props) => props.theme.customColors.secondary};
    }

    .btn-1{
        padding: 7px 20px;
        border-radius: 4px;
        background-color: ${(props) => props.theme.customColors.lightBlue1};
        font-size: 12px;
        font-weight: 600;
    }
    .btn-2{
        padding: 0 20px;
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme.customColors.lightBlue1};
        color: ${(props) => props.theme.customColors.lightBlue1};
        font-size: 12px;
        font-weight: 600;

    }
`;

