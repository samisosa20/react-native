import React, {useState} from 'react';
import { Alert, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'

// Componets
import useComponents from '../../components';

// themes
import theme from '../../../themes'

const Home = (props: any) => {
  const {navigation} = props

  const { ButtonDefault, Typography, ModalDefault } = useComponents()
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1, padding: 10, alignItems: 'center', justifyContent: 'center'}}>
      <Typography style={{...theme.textTitle, marginBottom: 12}}>Hello Word!</Typography>
      <Typography style={{...theme.textP, marginBottom: 8}}>se esta usando las constante de expo para garantizar las dimensiones en los diferentes dispositivos</Typography>
      <Typography style={{ ...theme.textSubtitle, marginBottom: 4 }}>A continucaion tendremos varias acciones:</Typography>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
        <View style={{width: 150 }}>
          <Typography style={theme.textP}>Button</Typography>
          <ButtonDefault title="alert button" onPress={() => Alert.alert('Esto es un mensaje mostrado por un alert')} />
        </View>
        <View style={{width: 150, marginLeft: 8}}>
          <Typography style={theme.textP}>TouchableOpacity</Typography>
          <TouchableOpacity  onPress={() => setModalVisible(!modalVisible)} style={theme.buttonPrimary}>
            <Typography style={theme.textButtonPrimary}>Open Modal</Typography>
          </TouchableOpacity>
        </View>
        <View style={{width: 150 }}>
          <Typography style={theme.textP}>Navegation</Typography>
          <ButtonDefault title="Listado" onPress={() =>  navigation.navigate('List', {name: 'Jane'})} />
        </View>
      </View>
      <ModalDefault onClose={() => setModalVisible(!modalVisible)} show={modalVisible}/>
    </View>
  );
}


export default Home