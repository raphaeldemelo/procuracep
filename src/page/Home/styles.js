import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
alignItems: center;
`;

export const Texto = styled.Text`
color: #fff;
font-weight: bold;
font-size: 20px;
`;

export const Subtitulo = styled.Text`
color: #D4E4F9;
font-size: 12px;
`;

export const Header = styled.View`
margin-top: 30%;
margin-left: 5%;
width: 90%;
`;

export const Area = styled.View`
margin-top: 3%;
background-color: #24528E;
width: 90%;
border-radius: 10px;
height: 40%;
padding: 15px;
`;



export const AreaBotao = styled.View`
margin-top: 3%;

`;

export const Botao = styled.TouchableOpacity`
background-color: #063777;
height: 50px;
align-items: center;
width: 50px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
justify-content: center;
`;

export const Titulo = styled.Text`
color: #fff;
font-weight: bold;
font-size: 20px;
align-self: center;
`;


export const AreaInput = styled.View`
align-items: center;
justify-content: center;
flex-direction: row;
margin-top: 3%;
`;

export const Input = styled.TextInput`
background-color: #fff;
height: 50px;
padding: 10px;
width: 75%;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
`;

export const AreaCentral = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 85%;
margin-top: 5%;
margin-bottom: 5%;

`;

export const BotaoLimpar = styled.TouchableOpacity`
background-color: #063777;
height: 40px;
align-items: center;
width: 40px;
border-radius: 25px;
justify-content: center;
`;

export const TextoPesquisa = styled.Text`
color: #fff;
font-weight: bold;
`;