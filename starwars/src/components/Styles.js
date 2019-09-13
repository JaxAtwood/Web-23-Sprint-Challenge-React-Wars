import styled from "styled-components";

const Box = styled.div `
    border: solid 3px black;
    display: flex;
    width: 80%;
    justify-content: center;
    padding: 20px;
    margin: 3% 8%;
    background: white;
`
const Global = styled.div `
    // display: flex;
    // flex-wrap: wrap;
    margin: 0 auto;
    width: 80%;
    border: solid 5px red;
    // background: red;
    // opacity: -5;
`

export { Box, Global };