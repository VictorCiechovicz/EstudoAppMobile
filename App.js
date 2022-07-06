import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'
import Capa from './assets/Capa.jpg'
import Perfil from './assets/Perfil.jpg'

export default function App() {
  return (
    <View style={estilos.container}>
      <View style={estilos.boxcapa}>
        <Image style={estilos.capa} source={Capa} />
      </View>

      <View style={estilos.boxperfil}>
        <Image style={estilos.perfil} source={Perfil} />
      </View>
      <Text style={estilos.nome}>Victor Avila Ciechovicz</Text>
      <Text style={estilos.sobre}>
        Iniciante no desenvolvimento de software e aplicações para web, com
        pouco experiência no mercado mas um entusiasta das novas tecnologias.
        Atualmente trabalhando como Assistente de Qualidade da Empresa Fockink,
        líder no mercado de irrigação agro. Mas em busca de aperfeiçoamento na
        área de desenvolvimento de software e aplicações para web.
      </Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },

  boxcapa: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start'
  },
  capa: {
    width: 500,
    height: 300
  },

  boxperfil: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    width: 250,
    height: 250
  },
  perfil: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderRadius: 125
  },
  nome: {
    fontSize: 30
  },

  sobre: {
    fontStyle: 'italic',
    fontSize: 20,
    textAlign: 'justify',
    margin: 20
  }
})
