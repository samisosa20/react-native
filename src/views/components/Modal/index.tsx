import { Modal, StyleSheet, Pressable, View } from 'react-native';

// Interface
import { ModalProps } from './Modal.interface'

// Components
import Typography from '../Typography';

const ModalDefault = (props: ModalProps) => {
    const {show, onClose} = props

    return <Modal
    animationType="slide"
    transparent={true}
    visible={show}
    onRequestClose={onClose}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Typography style={styles.modalText}>Hello World!</Typography>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={onClose}>
          <Typography style={styles.textStyle}>Hide Modal</Typography>
        </Pressable>
      </View>
    </View>
  </Modal>;
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

export default ModalDefault