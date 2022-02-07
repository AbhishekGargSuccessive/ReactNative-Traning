import React from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {NewHeader, TextInputs} from '../../common';
import {constants, icons, images} from '../../constants';
import styles from './styles';

interface NewCardProps {
  navigation: any;
}

const AddNewCardScreen = (props: NewCardProps) => {
  const {navigation} = props;
  return (
    <KeyboardAvoidingView style={styles.container}>
      <NewHeader
        navigation={navigation}
        HeaderText={constants.keywords.Add_New_Card}
      />
      <ScrollView
        style={styles.marginContainer}
        showsVerticalScrollIndicator={false}>
        <ImageBackground source={images.card} style={styles.cardImage}>
          <Image source={icons.apple} style={styles.appleIcon} />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardNameText}>{constants.keywords.name}</Text>
            <View style={styles.innerCardTextContainer}>
              <Text style={styles.cardText}>{constants.keywords.card_No}</Text>
              <Text style={styles.cardText}>{constants.keywords.Date}</Text>
            </View>
          </View>
        </ImageBackground>

        <View style={{marginVertical: '14%'}}>
          <Text style={styles.text}>{constants.keywords.Card_Number}</Text>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.inputText}
              keyboardType="number-pad"
              maxLength={16}
            />
            <Image source={icons.correct} style={styles.correctIcon} />
          </View>

          <Text style={styles.text}>{constants.keywords.CardHolder_Name}</Text>
          <View style={styles.InputContainer}>
            <TextInput style={styles.inputText} maxLength={25} />
            <Image source={icons.correct} style={styles.correctIcon} />
          </View>

          <View style={styles.midContainer}>
            <View>
              <Text style={styles.text}>{constants.keywords.Expiry_Date}</Text>
              <View style={styles.EmailInputContainer}>
                <TextInput
                  style={styles.EmailInputText}
                  keyboardType="name-phone-pad"
                  maxLength={5}
                />
                <Image source={icons.correct} style={styles.correctIcon} />
              </View>
            </View>

            <View>
              <Text style={styles.text}>{constants.keywords.CVV}</Text>
              <View style={styles.EmailInputContainer}>
                <TextInput
                  style={styles.EmailInputText}
                  keyboardType="number-pad"
                  maxLength={3}
                  secureTextEntry
                />
                <Image source={icons.correct} style={styles.correctIcon} />
              </View>
            </View>
          </View>
          <View style={styles.rememberContainer}>
            <TouchableOpacity>
              <Image source={icons.check_on} style={styles.checkonIcon} />
            </TouchableOpacity>
            <Text style={styles.rememberText}>
              {constants.keywords.Remember}
            </Text>
          </View>
          <TouchableOpacity style={styles.AddButton}>
            <Text style={styles.AddButtonText}>
              {constants.keywords.Add_Card}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddNewCardScreen;
