import React from 'react';
import { StyleSheet, Button, View, TextInput, Text } from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';
import LoginSubmitButton from '../shared/login_submit_button';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../src/aws-exports';

Amplify.configure(awsconfig);

// const reviewSchema = yup.object({
//   title: yup.string()
//     .required()
//     .min(4),
//   body: yup.string()
//     .required()
//     .min(8),
//   rating: yup.string()
//     .required()
//     .test('is-num-1-5', 'Rating must be a number 1-5', (val)=>{
//       return parseInt(val)<6 && parseInt(val)>0;
//     })
// })

export default function LoginForm({submitLoginForm}) {

  const aws_login = (value) => {
    if (value['Username']==''){
      value['Username'] = ' '
    }
    if (value['Password']==''){
      value['Password'] = ' '
    }
    Auth.signIn({
        username: value['Username'],
        password: value['Password'],
      })
      .then(res =>{
          console.log('signed in!', res)
          submitLoginForm(value)
        })
      .catch(err=>{
          console.log('Signed in!', err)
        })
  }

    return (
      <View style={globalStyles.container}>
        <Formik
          initialValues={{ Username: '', Password: ''}}
          onSubmit={(values, actions)=>{
            actions.resetForm();
            aws_login(values);
          }}
        >
          {(props)=>(
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder='Username'
                onChangeText={props.handleChange('Username')}
                value={props.values.title}
              />

              <TextInput
                secureTextEntry={true}
                style={globalStyles.input}
                placeholder='Password'
                onChangeText={props.handleChange('Password')}
                value={props.values.body}
              />

              <LoginSubmitButton text='submit' onPress={props.handleSubmit}/>
            </View>
          )}
        </Formik>

      </View>
    )

}
