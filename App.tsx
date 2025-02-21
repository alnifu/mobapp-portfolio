import React, { useRef, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, ScrollView } from 'react-native';
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext';
import Header from './src/components/Header';
import ProfileSection from './src/components/ProfileSection';
import ProjectList from './src/components/ProjectList';
import ContactInfo from './src/components/ContactInfo';

const AppContent = () => {
  const { theme } = useTheme();
  const scrollViewRef = useRef<ScrollView>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (y: number) => {
    scrollViewRef.current?.scrollTo({ y, animated: true });
  };

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setIsScrolled(offsetY > 0); // Set isScrolled to true if the user has scrolled down
  };

  const backgroundStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#121212',
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <SafeAreaView style={[styles.container, backgroundStyle]}>
        <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
        <Header scrollToSection={scrollToSection} isScrolled={isScrolled} />
        <ScrollView
          ref={scrollViewRef}
          style={styles.scrollView}
          onScroll={handleScroll}
          scrollEventThrottle={16} // Adjust for smoother scroll tracking
        >
          <ProfileSection />
          <ProjectList />
          <ContactInfo />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export default App;
