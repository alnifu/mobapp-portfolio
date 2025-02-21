import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

const projects = [
  { id: '1', title: 'DLSociety', image: require('../assets/images/project1.jpg'), description: 'A student organization mobile application. With also a web application for organzation officer. Currently approved for thesis.' },
  { id: '2', title: 'Blind Spot Detection Device', image: require('../assets/images/project2.jpg'), description: 'A Blint Spot Detection Device used for vehicles. It alerts the driver on incoming obstacles.' },
  { id: '3', title: 'La Serve', image: require('../assets/images/project3.jpg'), description: 'An Item Reservation System of De La Salle Lipa.' },
];

const ProjectList = () => {
  const { theme } = useTheme();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setExpandedId(expandedId === item.id ? null : item.id)}>
      <View style={[styles.projectContainer, { backgroundColor: theme === 'light' ? '#fff' : '#333' }]}>
        <Image
          source={item.image}
          style={[
            styles.projectImage,
            expandedId === item.id ? styles.squareImage : styles.rectangularImage,
          ]}
        />
        <Text style={[styles.projectTitle, { color: theme === 'light' ? '#333' : '#fff' }]}>
          {item.title}
        </Text>
        {expandedId === item.id && (
          <View style={styles.expandedContent}>
            <Text style={[styles.projectDescription, { color: theme === 'light' ? '#333' : '#fff' }]}>
              {item.description}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={projects}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  projectContainer: {
    margin: 10,
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 4, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  projectImage: {
    width: '100%',
  },
  rectangularImage: {
    height: 150, // Rectangular height
    borderRadius: 10, // Rounded edges
  },
  squareImage: {
    height: 400, // Square height (adjust as needed)
    borderRadius: 0, // No rounded edges when expanded
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  expandedContent: {
    padding: 10,
  },
  projectDescription: {
    fontSize: 14,
  },
});

export default ProjectList;
