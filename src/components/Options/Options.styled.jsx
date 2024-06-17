import styled from "styled-components";

export const FeedbackBtns = styled.div`
    display: inline-flex;
    // flex-direction: column;
    justify-content: left;
    gap: 5px;
    
`
export const FeedbackButton = styled.button`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:active {
        background-color: #e6e6e6;
        transform: translateY(1px); 
    }
`