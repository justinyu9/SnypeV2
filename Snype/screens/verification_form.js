import React from 'react';
import { StyleSheet, Button, View, TextInput, Text } from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';
import LoginSubmitButton from '../shared/login_submit_button';

const reviewSchema = yup.object({
  verification: yup.string()
    .required()
    .min(4)
})

export default function VerificationForm({submitVerificationForm}) {

    return (
      <View style={globalStyles.container}>
        <Formik
          initialValues={{ verification: ''}}
          validationSchema={reviewSchema}
          onSubmit={(values, actions)=>{
            actions.resetForm();
            submitVerificationForm(values);
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
