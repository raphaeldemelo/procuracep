import React, { useState, useRef } from 'react';
import { Keyboard, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import {
    Container,
    Texto,
    Header,
    Subtitulo,
    Area,
    Input,
    Botao,
    Titulo,
    AreaInput,
    AreaCentral,
    BotaoLimpar,
    TextoPesquisa,
    Descricao,
    AreaDescricao,
} from './styles';

export default function Home() {

    const [cep, setCep] = useState('');
    const inputRef = useRef(null);
    const [cepUser, setCepUser] = useState(null);


    async function Buscar() {
        if (cep == '') {
            alert('Coloque um cep válido')
            setCep('');
            return;
        }
        try {
            const response = await api.get(`/${cep}/json`);
            console.log(response.data);
            setCepUser(response.data);
            Keyboard.dismiss(); //Garantir que o teclado sera fechado!

        } catch (error) {
            console.log('ERROR: ' + error);
        }

    }

    function Limpar() {
        Keyboard.dismiss();
        setCepUser(null);
        setCep('');
    }


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
                        value={cep}
                        onChangeText={(texto) => setCep(texto)}
                        keyboardType='numeric'
                        ref={inputRef}
                    />
                    <Botao onPress={() => Buscar()}>
                        <Feather name='search' color='#fff' size={25} />
                    </Botao>
                </AreaInput>

                <AreaCentral>
                    <TextoPesquisa>Última pesquisa</TextoPesquisa>
                    <BotaoLimpar onPress={Limpar}>
                        <Feather name='trash' color='#fff' size={25} />
                    </BotaoLimpar>
                </AreaCentral>

                {!cepUser &&
                    <>
                    <Texto>Nenhuma pesquisa encontrada</Texto>
                        <Image
                            style={{ width: 100, height: 100, borderRadius: 50 , alignSelf: 'center' , marginTop: '15%'}}
                            source={require('../../assets/semdados.png')}
                        />

                    </>
                }

                {cepUser &&
                    <Area>
                        <Titulo>Cidade encontrada</Titulo>
                        <AreaDescricao>
                            <Descricao>CEP: <Texto style={{ fontSize: 14, alignItems: 'center', fontWeight: 'normal' }}>{cepUser.cep}</Texto></Descricao>
                            <Descricao>Logradouro: <Texto style={{ fontSize: 14, alignItems: 'center', fontWeight: 'normal' }}>{cepUser.logradouro}</Texto></Descricao>
                            <Descricao>Bairro:<Texto style={{ fontSize: 14, alignItems: 'center', fontWeight: 'normal' }}>{cepUser.bairro}</Texto></Descricao>
                            <Descricao>Cidade: <Texto style={{ fontSize: 14, alignItems: 'center', fontWeight: 'normal' }}>{cepUser.localidade}</Texto></Descricao>
                            <Descricao>Estado: <Texto style={{ fontSize: 14, alignItems: 'center', fontWeight: 'normal' }}>{cepUser.uf}</Texto></Descricao>
                            <Descricao>Estado: <Texto style={{ fontSize: 14, alignItems: 'center', fontWeight: 'normal' }}>{cepUser.ddd}</Texto></Descricao>
                        </AreaDescricao>
                    </Area>
                }


            </Container>

        </LinearGradient>
    );
}