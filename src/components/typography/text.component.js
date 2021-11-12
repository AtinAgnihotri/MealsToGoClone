import styled from "styled-components/native";

const defaultTextStyle = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
        color: ${theme.colors.text.primary};
flex-wrap: wrap;
margin-top: ${theme.space[0]};
margin-bottom: ${theme.space[0]};
`;
