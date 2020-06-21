import React from 'react';
import { StyleSheet, Button, View, TextInput, Text } from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';
import LoginSubmitButton from '../shared/login_submit_button';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../src/aws-exports';

Amplify.configure(awsconfig);

var successtoken = false;

const reviewSchema = yup.object({
  verification: yup.string()
    .required()
    .min(4)
})

const verify = (value, {submitVerificationForm}, {globalUsername}) => {
    if (JSON.stringify(value['verification']).replace(/[^0-9]/g,'') != '') {
      Auth.confirmSignUp(globalUsername, JSON.stringify(value['verification']).replace(/[^0-9]/g,''))
      .then(res =>{
          console.log('Verified!', res)
          submitVerificationForm(value)
        })
      .catch(err=>{
          console.log('Error Verified!', err)
        })
    }
  }

export default function VerificationForm({submitVerificationForm,globalUsername}) {

    return (
      <View style={globalStyles.container}>
        <Formik
          initialValues={{ verification: ''}}
          validationSchema={reviewSchema}
          onSubmit={(values, actions)=>{
            actions.resetForm();
            verify(values, {submitVerificationForm}, {globalUsername});
          }}
        >
          {(props)=>(
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder='######'
                onChangeText={props.handleChange('verification')}
                value={props.values.title}
              />
              <Text style={globalStyles.errorText}>{props.touched.verification && props.errors.verification}</Text>

              <LoginSubmitButton text='Verify' onPress={props.handleSubmit}/>
            </View>
          )}
        </Formik>

      </View>
    )

}
