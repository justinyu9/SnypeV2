import React from 'react';
import { StyleSheet, Button, View, TextInput, Text } from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';
import LoginSubmitButton from '../shared/login_submit_button';

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

export default function LoginForm() {

    return (
      <View style={globalStyles.container}>
        <Formik
          initialValues={{ Username: '', Password: ''}}
        >
          {(props)=>(
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder='Username'
                onChangeText={props.handleChange('title')}
                value={props.values.title}
              />

              <TextInput
                secureTextEntry={true}
                style={globalStyles.input}
                placeholder='Password'
                onChangeText={props.handleChange('body')}
                value={props.values.body}
              />

              <LoginSubmitButton text='submit' onPress={props.handleSubmit}/>
            </View>
          )}
        </Formik>

      </View>
    )

}
