import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const ProfileSection = () => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/cover.jpg')}
        style={styles.coverImage}
      />
      <Image
        source={require('../assets/images/profile.jpg')}
        style={styles.profileImage}
      />
      <Text style={[styles.name, { color: theme === 'light' ? '#333' : '#fff' }]}>
        Mathew Alex T. Ulanday
      </Text>
      <Text style={[styles.bio, { color: theme === 'light' ? '#333' : '#fff' }]}>
        I have a passion for Back End Programming. I know how to code with C++, PHP, MySQL, React, React Native. I have also dealth with IOT. I have experience with creating an IOT Device. I have collaborated with many people in developing software and IOT Projects.      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  coverImage: {
    width: '100%',
    height: 150,
    position: 'absolute',
    top: 0,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default ProfileSection;
