import React, {useState} from 'react';
import { StyleSheet, Button, View, TextInput, Text, ModTouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';
import SignupSubmitButton from '../shared/signup_submit_button';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../src/aws-exports';

Amplify.configure(awsconfig);

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const reviewSchema = yup.object({
  username: yup.string()
    .required()
    .label('Username')
    .min(4),
  email: yup.string()
    .required()
    .label('Email')
    .email()
    .min(8),
  password: yup.string()
    .required()
    .label('Password')
    .min(2, 'Password too short'),
  verify_password: yup.string()
    .required()
    .test('passwords-match', 'Passwords must match', function(val) {
      return this.parent.password === val;
    }),
  phone_number: yup.string()
    .required()
    .matches(phoneRegExp, 'Phone number is not valid')
})

export default function SignUpForm({submitSignUpForm}) {

  const [authCode, setAuthCode] = useState('0');

  const onChangeText = (value) => {
    setAuthCode(value)
  }

  const aws_signup = (value) => {
      console.log("AWS SIGN UP")
      console.log(value);
      console.log(value['email']);
    }

  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const submitConfirmForm = (form) => {
    console.log(form);
    setConfirmModalOpen(false);
  }

    return (
      <View style={globalStyles.container}>
        <Formik
          initialValues={{ username: '', email: '', password: '',  verify_password: '',  phone_number: ''}}
          validationSchema={reviewSchema}
          onSubmit={(values, actions)=>{
            console.log("LOOOL THIS IS GREAT")
            aws_signup(values);
            actions.resetForm();
            submitSignUpForm(values);

          }}
        >
          {(props)=>(
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder='Username'
                onChangeText={props.handleChange('username')}
                value={props.values.username}
              />
              <Text style={globalStyles.errorText}>{props.touched.username && props.errors.username}</Text>

              <TextInput
                style={globalStyles.input}
                placeholder='Email'
                onChangeText={props.handleChange('email')}
                value={props.values.email}
              />
              <Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>

              <TextInput
                style={globalStyles.input}
                placeholder='Password'
                onChangeText={props.handleChange('password')}
                value={props.values.password}
                secureTextEntry={true}
              />
              <Text style={globalStyles.errorText}>{props.touched.password && props.errors.password}</Text>

              <TextInput
                style={globalStyles.input}
                placeholder='Re-enter Password'
                onChangeText={props.handleChange('verify_password')}
                value={props.values.verify_password}
                secureTextEntry={true}
              />
              <Text style={globalStyles.errorText}>{props.touched.verify_password && props.errors.verify_password}</Text>

              <TextInput
                style={globalStyles.input}
                placeholder='Phone Number'
                onChangeText={props.handleChange('phone_number')}
                value={props.values.phone_number}
                keyboardType='numeric'
              />
              <Text style={globalStyles.errorText}>{props.touched.phone_number && props.errors.phone_number}</Text>

              <SignupSubmitButton text='Submit' onPress={props.handleSubmit}/>
            </View>
          )}
        </Formik>

      </View>
    )

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
