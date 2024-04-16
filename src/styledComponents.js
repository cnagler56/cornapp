import styled from 'styled-components'

export const PostWrapper = styled.div`
height:90vh;
display:flex;
flex-direction:column;
 margin-top:4px;

`
export const Box = styled.div`
flex-grow: 1; 
width: 35em;
height:76vh;
 border:2px solid black;
 overflow:scroll;
 margin: auto; 
`

export const Filtered = styled.div`
/* display:flex; */
flex-direction:row;
place-content:center;
margin:auto;
margin-top: 0;
justify-content: space-around;
height: 125px;
width: 35em;
border: 2px solid black;
font-weight:bold;
`

export const ItemWrapper = styled.article`
border:2px solid black;
height: 14em;
margin:auto;
`
export const GuessView = styled.div`
 margin:auto;
 padding:9em;
 height:10vh;
//  border:2px solid black;
`
export const EstimateWrapper = styled.div`
 
height:7em;
`