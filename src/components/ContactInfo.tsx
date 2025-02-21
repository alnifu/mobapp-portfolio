import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../contexts/ThemeContext';

const ContactInfo = () => {
  const { theme } = useTheme();

  const handlePhonePress = () => {
    Linking.openURL('tel:639064742567'); 
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:your.email@example.com'); 
  };

  return (
    <View style={[styles.container]}>
      {/* LinkedIn */}
      <TouchableOpacity 
        onPress={() => Linking.openURL('https://www.linkedin.com/in/your-profile')}
        style={styles.contactContainer}
      >
        <Icon name="linkedin-square" size={45} color={theme === 'light' ? '#0077B5' : '#0A66C2'} />
        <Text style={[styles.contactText, { color: theme === 'light' ? '#000' : '#fff' }]}>LinkedIn</Text>
      </TouchableOpacity>

      {/* Phone */}
      <TouchableOpacity 
        onPress={handlePhonePress} 
        style={styles.contactContainer}
      >
        <Icon name="phone-square" size={45} color={theme === 'light' ? '#0077B5' : '#0A66C2'} />
        <Text style={[styles.contactText, { color: theme === 'light' ? '#000' : '#fff' }]}>Phone</Text>
      </TouchableOpacity>

      {/* Email */}
      <TouchableOpacity 
        onPress={handleEmailPress} 
        style={styles.contactContainer}
      >
        <Icon name="envelope-square" size={45} color={theme === 'light' ? '#0077B5' : '#0A66C2'} />
        <Text style={[styles.contactText, { color: theme === 'light' ? '#000' : '#fff' }]}>Email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  contactContainer: {
    alignItems: 'center', // Center-align the icon and text
    marginHorizontal: 10, // Add some spacing between the icons
  },
  contactText: {
    fontSize: 16,
    textAlign: 'center', // Center-align the text
    marginTop: 5, // Add some spacing between the icon and text
  },
});

export default ContactInfo;
