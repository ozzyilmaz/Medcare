import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  BackHandler,
  Modal,
  Platform,
} from 'react-native';

import {Header} from '@react-navigation/stack';

import Box from '../components/box';
import Input from '../components/input';
import Text from '../components/text';
import Button from '../components/button';

import {Back, Lock, At, PassHide, PassShow} from '../components/icons';

import {Formik} from 'formik';
import * as yup from 'yup';
import {AuthContext} from '../navigation/AuthProvider';

function Login({navigation}) {
  const [isSecurePass, setSecurePass] = useState(true);

  const {login} = useContext(AuthContext);
  const loginvalidationSchema = yup.object().shape({
    email: yup
      .string()
      .required('E-mail boş Geçilemez')
      .email('Geçerli bir email adresi giriniz!'),
    password: yup
      .string()
      .required('Şifre Boş Geçilemez')
      .min(6, ({min}) => 'Şifre en az ' + min + ' karakter olmalı'),
  });
  const [showModal, setShowModal] = useState(false);

  const {resetPassword} = useContext(AuthContext);
  const resetLoginvalidationSchema = yup.object().shape({
    email: yup
      .string()
      .required('Boş geçilemez!')
      .email('Geçerli bir email adresi giriniz!'),
  });

  return (
    <Box as={SafeAreaView} flex={1} justifyContent="space-between">
      <Box flexDirection="row" justifyContent="space-between">
        <Box
          as={Button}
          bg="#FF3939"
          width={50}
          height={50}
          borderTopRightRadius={10}
          borderBottomRightRadius={10}
          alignItems="center"
          justifyContent="center"
          onPress={() => {
            BackHandler.exitApp();
          }}>
          <Back color="white" marginLeft={-10} />
        </Box>

        <Box marginTop={10} marginRight={18}>
          <Text fontSize={28} fontFamily="Futura-Medium">
            Medcare
          </Text>
        </Box>
      </Box>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}>
        <Box bg="white" width="100%" height={500} borderRadius={45}>
          <Text pt={20} pl={51} fontSize={24} fontFamily="Futura-Medium">
            Hoş geldin
          </Text>
          <Formik
            validationSchema={loginvalidationSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={values => login(values.email, values.password)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <Box>
                  <Text
                    pl={40}
                    pt={21}
                    fontSize={13}
                    fontFamily="Futura-Medium">
                    E-mail
                  </Text>
                  <Box position="relative">
                    <Input
                      ml={40}
                      pl={40}
                      mt={1}
                      width="78%"
                      height={50}
                      borderWidth={1}
                      borderColor="black"
                      borderRadius={10}
                      placeholder="E-mail adresinizi giriniz"
                      name="email"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                    {errors.email && (
                      <Text marginLeft={40} fontSize={14} color="red">
                        {errors.email}
                      </Text>
                    )}
                    <Box position="absolute">
                      <At
                        color="black"
                        width={28}
                        height={28}
                        marginLeft={45}
                        marginTop={12}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Text
                    pl={40}
                    pt={21}
                    fontSize={13}
                    fontFamily="Futura-Medium">
                    Şifre
                  </Text>
                  <Box position="relative">
                    <Input
                      ml={40}
                      pl={40}
                      mt={1}
                      width="78%"
                      height={50}
                      borderWidth={1}
                      borderColor="black"
                      borderRadius={10}
                      name="password"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      placeholder="Şifrenizi giriniz"
                      secureTextEntry={isSecurePass}
                    />
                    <Box position="absolute">
                      <Lock
                        color="black"
                        width={30}
                        height={30}
                        marginLeft={45}
                        marginTop={14}
                      />
                    </Box>
                    <Box
                      as={Button}
                      onPress={() => {
                        setSecurePass(!isSecurePass);
                      }}
                      position="absolute"
                      alignSelf="flex-end">
                      {isSecurePass ? (
                        <PassHide
                          fill="black"
                          width={20}
                          height={20}
                          marginRight={55}
                          marginTop={17.5}
                        />
                      ) : (
                        <PassShow
                          fill="black"
                          width={20}
                          height={20}
                          marginRight={55}
                          marginTop={17.5}
                        />
                      )}
                    </Box>
                    {errors.password && (
                      <Text marginLeft={40} fontSize={14} color="red">
                        {errors.password}
                      </Text>
                    )}
                  </Box>
                </Box>
                <Box
                  as={Button}
                  alignItems="flex-end"
                  mt={9}
                  pr={40}
                  onPress={() => setShowModal(!showModal)}>
                  <Text>Şifreni mi unuttun?</Text>
                </Box>
                <Box alignItems="center">
                  <Button
                    width={155}
                    height={40}
                    borderRadius={30}
                    bg="red"
                    mt={21}
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    onPress={handleSubmit}
                    disabled={!isValid}>
                    <Text fontFamily="Futura-Bold" fontSize={24} color="white">
                      Giriş Yap
                    </Text>
                  </Button>
                </Box>
              </>
            )}
          </Formik>
          <Box width="100%" height={80} justifyContent="flex-end" marginTop={3}>
            <Box
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
              opacity={0.7}
            />

            <Box flexDirection="row" justifyContent="center" marginBottom={50}>
              <Text paddingTop={10} fontFamily="Futura-Medium">
                Hesabın yok mu?
              </Text>
              <Button onPress={() => navigation.navigate('Register')}>
                <Text paddingTop={10} fontFamily="Futura-Bold">
                  {' '}
                  Kaydol
                </Text>
              </Button>
            </Box>
          </Box>
        </Box>
      </KeyboardAvoidingView>

      <Box width="100%">
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            alert('Güle Güle');
            setShowModal(!showModal);
          }}>
          <Box flex={1} justifyContent="flex-end">
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : null}
              keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}>
              <Box
                bg="#FF3939"
                height={200}
                borderTopLeftRadius={25}
                borderTopRightRadius={25}
                alignItems="center">
                <Formik
                  validationSchema={resetLoginvalidationSchema}
                  initialValues={{email: ''}}
                  onSubmit={values => resetPassword(values.email)}>
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                  }) => (
                    <>
                      <Input
                        name="email"
                        placeholder="E-mail adresi giriniz"
                        backgroundColor="white"
                        height={50}
                        width="80%"
                        margin={10}
                        marginTop={30}
                        padding={10}
                        borderColor="white"
                        borderWidth={1}
                        borderRadius={10}
                        fontSize={16}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                        autoCorrect={false}
                      />
                      {errors.email && (
                        <Text fontSize={14} mb={2} color="white">
                          {errors.email}
                        </Text>
                      )}

                      <Button
                        bg="black"
                        borderRadius={20}
                        width={120}
                        height={50}
                        onPress={() => {
                          handleSubmit,
                            setShowModal(!showModal),
                            values.email !== ''
                              ? alert('Mail Gönderildi')
                              : null;
                        }}
                        disabled={!isValid}
                        justifyContent="center"
                        alignItems="center">
                        <Text
                          fontFamily="Futura-Bold"
                          fontSize={16}
                          color="white">
                          Şifre Sıfırla
                        </Text>
                      </Button>
                    </>
                  )}
                </Formik>
              </Box>
            </KeyboardAvoidingView>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}

export default Login;
