import React, {useState, useContext} from 'react';
import {SafeAreaView, KeyboardAvoidingView} from 'react-native';

import Box from '../components/box';
import Input from '../components/input';
import Text from '../components/text';
import Button from '../components/button';

import {
  Back,
  Lock,
  At,
  RegisterProfile,
  PassHide,
  PassShow,
  Cancel,
} from '../components/icons';

import {Formik} from 'formik';
import * as yup from 'yup';
import {AuthContext} from '../navigation/AuthProvider';

import {Modal} from 'react-native-paper';

function Register({navigation}) {
  const [isSecurePass, setSecurePass] = useState(true);

  const {signup} = useContext(AuthContext);
  const signupvalidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Boş Geçilemez!')
      .min(3, ({min}) => 'Kullanıcı adınız en az ' + min + ' karakter olmalı'),
    email: yup
      .string()
      .required('Boş Geçilemez!')
      .email('Geçerli bir email adresi giriniz!'),
    password: yup
      .string()
      .required('Boş Geçilemez!')
      .min(6, ({min}) => 'Şifre en az ' + min + ' karakter olmalı')
      .matches(/\d/, 'En az 1 adet rakam kullanmalısınız'),
    username: yup
      .string()
      .required('Boş Geçilemez!')
      .min(3, ({min}) => 'Kullanıcı adınız en az ' + min + ' karakter olmalı'),
  });

  const [showModal, setShowModal] = useState(false);

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
            navigation.goBack();
          }}>
          <Back color="white" marginLeft={-10} />
        </Box>

        <Box marginTop={10} marginRight={18}>
          <Text fontSize={30} fontFamily="Futura-Medium">
            Medcare
          </Text>
        </Box>
      </Box>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}>
        <Box
          bg="white"
          width="100%"
          height={350}
          borderTopRightRadius={45}
          borderTopLeftRadius={45}>
          <Text pt={30} pl={51} fontSize={24} fontFamily="Futura-Medium">
            Hoş geldin
          </Text>
          <Formik
            validationSchema={signupvalidationSchema}
            initialValues={{
              name: '',
              email: '',
              password: '',
              username: '',
            }}
            onSubmit={values =>
              signup(
                values.email,
                values.password,
                values.name,
                values.username,
                navigation,
              )
            }>
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
                    pt={10}
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
                      name="email"
                      placeholder="E-mail adresinizi giriniz"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      keyboardType="email-address"
                      autoCapitalize="none"
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
                    pt={10}
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
                      placeholder="Şifre belirleyiniz"
                      secureTextEntry={isSecurePass}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                    <Box position="absolute">
                      <Lock
                        color="black"
                        width={28}
                        height={28}
                        marginLeft={45}
                        marginTop={12}
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
                  </Box>
                  {errors.password && (
                    <Text marginLeft={40} fontSize={14} color="red">
                      {errors.password}
                    </Text>
                  )}
                </Box>

                <Box alignItems="center">
                  <Button
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    width={155}
                    height={40}
                    borderRadius={30}
                    bg="red"
                    mt={21}
                    onPress={() => setShowModal(!showModal)}>
                    <Text fontFamily="Futura-Bold" fontSize={24} color="white">
                      Devam Et
                    </Text>
                  </Button>
                </Box>
                <Modal animationType="slide" visible={showModal}>
                  <Box bg="white" height={365}>
                    <Box
                      as={Button}
                      bg="#FF3939"
                      width={40}
                      height={40}
                      borderTopRightRadius={10}
                      borderBottomRightRadius={10}
                      alignItems="center"
                      justifyContent="center"
                      onPress={() => {
                        setShowModal(!showModal);
                      }}>
                      <Cancel color="white" marginLeft={-10} />
                    </Box>
                    <Box>
                      <Text
                        pl={40}
                        pt={21}
                        fontSize={13}
                        fontFamily="Futura-Medium">
                        Ad Soyad
                      </Text>
                      <Box position="relative">
                        <Input
                          ml={40}
                          pl={40}
                          mt={1}
                          width="78%"
                          height={48}
                          borderWidth={1}
                          borderColor="black"
                          borderRadius={10}
                          placeholder="Adınızı ve soyadınızı giriniz"
                          name="name"
                          onChangeText={handleChange('name')}
                          onBlur={handleBlur('name')}
                          value={values.name}
                          keyboardType="email-address"
                          autoCapitalize="none"
                          autoCorrect={false}
                        />
                        {errors.name && (
                          <Text marginLeft={40} fontSize={14} color="red">
                            {errors.name}
                          </Text>
                        )}
                        <Box position="absolute">
                          <RegisterProfile
                            color="black"
                            width={28}
                            height={28}
                            marginLeft={45}
                            marginTop={14}
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
                        Kullanıcı Adınız
                      </Text>
                      <Box position="relative">
                        <Input
                          ml={40}
                          pl={40}
                          mt={1}
                          width="78%"
                          height={48}
                          borderWidth={1}
                          borderColor="black"
                          borderRadius={10}
                          placeholder="Kullanıcı adınızı giriniz"
                          name="username"
                          value={values.username.toLowerCase()}
                          onChangeText={handleChange('username')}
                          onBlur={handleBlur('username')}
                          keyboardType="email-address"
                          autoCapitalize="none"
                          autoCorrect={false}
                        />
                        {errors.username && (
                          <Text marginLeft={40} fontSize={14} color="red">
                            {errors.username}
                          </Text>
                        )}
                        <Box position="absolute">
                          <RegisterProfile
                            color="black"
                            width={28}
                            height={28}
                            marginLeft={45}
                            marginTop={14}
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box alignItems="center">
                      <Button
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                        width={155}
                        height={40}
                        borderRadius={30}
                        bg="red"
                        mt={21}
                        onPress={handleSubmit}
                        disabled={!isValid}>
                        <Text
                          fontFamily="Futura-Bold"
                          fontSize={24}
                          color="white">
                          Kaydol
                        </Text>
                      </Button>
                    </Box>
                  </Box>
                </Modal>
              </>
            )}
          </Formik>
        </Box>
      </KeyboardAvoidingView>
    </Box>
  );
}

export default Register;
