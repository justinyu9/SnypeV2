import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {globalStyles} from './styles/global';
import LoginButton from './shared/login_button';
import LoginForm from './screens/login_form'
import SignUpForm from './screens/signup_form'

export default function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Modal visible={loginModalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={28}
              onPress = {()=>setLoginModalOpen(false)}
              style={{...styles.modalToggle, ...styles.modalClose}}
            />
            <LoginForm/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal visible={signupModalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={28}
              onPress = {()=>setSignupModalOpen(false)}
              style={{...styles.modalToggle, ...styles.modalClose}}
            />
            <SignUpForm/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Text style={globalStyles.titleText}>Snype</Text>
      <LoginButton text='Login' onPress = {()=>setLoginModalOpen(true)}/>
      <LoginButton text='Signup' onPress = {()=>setSignupModalOpen(true)}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalToggle:{
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#f2f2f2',
      padding: 10,
      borderRadius: 10,
      alignSelf: 'center',
    },
  modalClose:{
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent:{
    flex: 1,
  },
});
