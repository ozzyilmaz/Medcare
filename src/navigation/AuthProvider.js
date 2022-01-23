import React, {useState, useEffect, createContext} from 'react';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const usersColl = firestore().collection('users');
  const [user, setUser] = useState(null); // user tanımlama oluşturma
  // Firebase ile kullanıcı ekleme ya da giriş yapma

  async function isUsernameUnique(username) {
    return usersColl
      .where('Username', '==', username)
      .get()
      .then(querySnapshot => {
        return querySnapshot.empty;
      });
  }
  ////////
  const hasUndefinedChar = s => {
    let regSpace = new RegExp(/\s/);
    let regTR = new RegExp(/[şüöıçğ]/);
    let regSpecial = new RegExp(
      /[-!"`'’#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/,
    );

    if (regSpace.test(s) || regTR.test(s) || regSpecial.test(s)) {
      Alert.alert(
        'Uyarı',
        'Kullanıcı adınız Türkçe karakter, boşluk ya da özel karakter içermemeli',
      );
      return false;
    }
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,

        //giriş yap
        login: async (email, password) => {
          try {
            await auth()
              .signInWithEmailAndPassword(email, password)
              .then(result => {
                if (!result.user.emailVerified) {
                  result.user.email.sendEmailVerification();
                  alert('Lütfen email adresinize gelen maili onaylayın!');
                }
              });
          } catch (error) {
            if (
              error.message !==
              "result.user.email.sendEmailVerification is not a function. (In 'result.user.email.sendEmailVerification()', 'result.user.email.sendEmailVerification' is undefined)"
            ) {
              Alert.alert('Hatalı Giriş', 'E-mail veya Şifre hatalı');
            }
          }
        },
        // kayıt ol
        signup: async (email, password, name, username, navigation) => {
          if (hasUndefinedChar(username)) {
            if (await isUsernameUnique(username)) {
              //proceed

              try {
                await auth()
                  .createUserWithEmailAndPassword(email, password)
                  .then(async result => {
                    var uid = result.user.email;
                    result.user.sendEmailVerification();
                    result.user.updateProfile({
                      displayName: name,
                    });
                    await usersColl.doc(uid).set({
                      ImageUrl:
                        'https://media.istockphoto.com/vectors/missing-image-of-a-person-placeholder-vector-id1288129985?k=20&m=1288129985&s=612x612&w=0&h=OHfZHfKj0oqIDMl5f_oRqH13MHiB63nUmySYILbWbjE=',
                      Email: email,
                      Name: name,
                      Username: username,
                      createdDate: new Date(),
                    });

                    Alert.alert(
                      'Başarılı Kayıt',
                      'Başarıyla kayıt oldunuz. Güvenliğiniz için E-mail adresinize gelen maili onaylamayı unutmayın.',
                    );
                  });
              } catch (error) {
                if (
                  error.message ===
                  '[auth/email-already-in-use] The email address is already in use by another account.'
                ) {
                  Alert.alert(
                    'E-mail Kullanılıyor',
                    'Girdiğiniz e-mail başkası tarafından kullanılıyor. ',
                  );
                }
              }
            } else {
              Alert.alert(
                'Kullanıcı Adı Alınmış',
                'Lütfen başka bir kullanıcı adı belirleyin',
              );
            }
          }
        },

        //şifre sıfırlama
        resetPassword: async email => {
          try {
            await auth().sendPasswordResetEmail(email);
            alert('Şifre sıfırlama linki mail adresinize gönderildi.');
          } catch (error) {
            alert(error);
          }
        },
        //çıkış yap
        signout: async () => {
          try {
            await auth().signOut();
          } catch (error) {}
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
