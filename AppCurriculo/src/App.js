import React from 'react';
import {StyleSheet, View, Image, ViewBase, Text, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/perf.jpg';
import Card from './components/Card/index';


const App = () => {

  function handleRedeSocial(rede_social) {
    switch(rede_social){
      case 'linkedin':
            Alert.alert('Meu Linkedin', 'www.linkedin.com/in/rogerio-da-silva-10b166216')
      break
      case 'github':
            Alert.alert('Meu GitHub', 'https://github.com/RogerioPradoo')
      break
      case 'instagram':
        Alert.alert('Perfil', 'Em Desenvolvimento...')
  break
}
  }

  return (
  <>
    <View style={style.page}>
      <View style={style.container_cabecalho}>
        <Image source={foto} style={style.foto}/>
        <Text style={style.nome}>Rogerio Junior</Text>
        <Text style={style.funcao}>Desenvolvedor Front-End | Mobile</Text>
        <View style={style.redes_sociais}>
        <TouchableOpacity onPress={() => handleRedeSocial('github')}>
          <Icon name="github" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
          <Icon name="instagram" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
          <Icon name="linkedin" size={30}  />
        </TouchableOpacity>
        </View>
      </View>

      <Card titulo="Formação Academica">
          <Text style={style.cart_contend_text}>Faculdade Impacta 2* semestre</Text>
          <Text style={style.cart_contend_text}>Web Desenv</Text>
          <Text style={style.cart_contend_text}>Orbi Web Games Dev</Text>
      </Card>
      <Card titulo="Experiencias">
        <Text style={style.cart_contend_text}>Dev Web</Text>
        <Text style={style.cart_contend_text}>Mobile</Text>
      </Card>
  </View>
</>
);
};

const style = StyleSheet.create({

  page: {
    backgroundColor: '#E7E7E7',
    flex: 1
  },

  container_cabecalho: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginTop: 15
  },
  cart_contend_text:{
    color: '#939393',
    marginBottom: 10
  }
})


export default App;
