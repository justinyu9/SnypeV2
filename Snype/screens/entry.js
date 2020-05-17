import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {globalStyles} from '../styles/global';
import LoginButton from '../shared/login_button';
import LoginForm from '../screens/login_form'
import SignUpForm from '../screens/signup_form'
import VerificationForm from '../screens/verification_form'

export default function Entry({navigation}) {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const submitLoginForm = (form) => {
    console.log(form);
    setLoginModalOpen(false);
  }

  const submitSignUpForm = (form) => {
    console.log(form);
    setSignupModalOpen(false);
    setConfirmModalOpen(true);
  }

  const submitVerificationForm = (form) => {
    console.log(form);
    setConfirmModalOpen(false);
  }

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
            <LoginForm submitLoginForm={submitLoginForm}/>
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
            <SignUpForm submitSignUpForm={submitSignUpForm}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal visible={confirmModalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={28}
              onPress = {()=>setConfirmModalOpen(false)}
              style={{...styles.modalToggle, ...styles.modalClose}}
            />
            <VerificationForm submitVerificationForm={submitVerificationForm}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <LoginButton text='Login' onPress = {()=>setLoginModalOpen(true)}/>
      <LoginButton text='Signup' onPress = {()=>setSignupModalOpen(true)}/>
      <LoginButton text='Go to Main Page' onPress={() => navigation.navigate('Main')}/>

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
