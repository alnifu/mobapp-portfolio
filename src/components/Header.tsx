import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

type HeaderProps = {
  scrollToSection: (y: number) => void;
};

const Header = ({ scrollToSection }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownAnimation = useRef(new Animated.Value(0)).current;

  const handleScrollTo = (section: string) => {
    setDropdownVisible(false); // Close the dropdown
    switch (section) {
      case 'profile':
        scrollToSection(0); // Scroll to the top (ProfileSection)
        break;
      case 'projects':
        scrollToSection(300); // Adjust this value based on your layout
        break;
      case 'contact':
        scrollToSection(600); // Adjust this value based on your layout
        break;
      default:
        break;
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    Animated.timing(dropdownAnimation, {
      toValue: dropdownVisible ? 1 : 0,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [dropdownVisible]);

  const dropdownTranslateY = dropdownAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 0],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown}>
        <Feather name="menu" size={24} color={theme === 'light' ? '#000' : '#fff'} />
      </TouchableOpacity>
      {dropdownVisible && (
        <Animated.View
          style={[
            styles.dropdown,
            {
              transform: [{ translateY: dropdownTranslateY }],
              backgroundColor: theme === 'light' ? '#fff' : '#333',
            },
          ]}
        >
          <TouchableOpacity onPress={() => handleScrollTo('profile')}>
            <Text style={[styles.dropdownText, { color: theme === 'light' ? '#000' : '#fff' }]}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleScrollTo('projects')}>
            <Text style={[styles.dropdownText, { color: theme === 'light' ? '#000' : '#fff' }]}>Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleScrollTo('contact')}>
            <Text style={[styles.dropdownText, { color: theme === 'light' ? '#000' : '#fff' }]}>Contact</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
      <TouchableOpacity onPress={toggleTheme}>
        <MaterialIcons
          name={theme === 'light' ? 'nights-stay' : 'wb-sunny'}
          size={24}
          color={theme === 'light' ? '#000' : '#fff'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: 40,
    left: 0,
    padding: 8,
    borderRadius: 4,
    elevation: 3,
    zIndex: 1,
  },
  dropdownText: {
    padding: 4,
  },
});

export default Header;
