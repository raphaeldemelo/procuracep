import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import {
    Container,
    Texto,
    Header,
    Subtitulo,
    Area,
    Input,
    AreaBotao,
    Botao,
    Titulo,
    AreaInput,
    AreaCentral,
    BotaoLimpar,
    TextoPesquisa,
} from './styles';

export default function Home() {
    return (
        <LinearGradient
            colors={['#497ABC', '#00429A', '#0E3567']}
            style={{
                flex: 1,
            }}
        >
            <Container>
                <Header>
                    <Texto>Onde fica ?</Texto>
                    <Subtitulo>procure o endereço pelo cep</Subtitulo>
                </Header>

                <AreaInput>
                    <Input
                        placeholder="digite o cep"
                    />
                    <Botao>
                        <Feather name='search' color='#fff' size={25} />
                    </Botao>
                </AreaInput>

                <AreaCentral>
                    <TextoPesquisa style={{}}>Última pesquisa</TextoPesquisa>

                    <BotaoLimpar>
                        <Feather name='trash' color='#fff' size={25} />
                    </BotaoLimpar>

                </AreaCentral>

                <Area>
                    <Titulo>Cidade encontrada</Titulo>
                </Area>
            </Container>

        </LinearGradient>
    );
}