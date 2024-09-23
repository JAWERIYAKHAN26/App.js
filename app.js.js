import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity,StatusBar } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const picImage1 = require('./assets/pic1.png');
const picImage2 = require('./assets/pic2.png');
const picImage3 = require('./assets/pic3.png');
const picImage4 = require('./assets/pic4.png');

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.searchBar}>
        <MaterialCommunityIcons name="magnify" size={24} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Search conditions doctors..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <Text style={styles.textBelowSearch}>Let's find your doctor</Text>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image source={picImage1} style={styles.cardImage} />
          <Text style={styles.cardText}>Dr. John Smith</Text>
          <Text style={styles.cardSubText}>Dermatologist</Text>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonContent}>
              <FontAwesome name="star" size={16} color="#FFD700" />
              <Text style={styles.buttonText}> 4.9</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={picImage2} style={styles.cardImage} />
          <Text style={styles.cardText}>Dr. Angela Reyaz</Text>
          <Text style={styles.cardSubText}>Therapist</Text>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonContent}>
              <FontAwesome name="star" size={16} color="#FFD700" />
              <Text style={styles.buttonText}> 4.9</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image source={picImage3} style={styles.cardImage} />
          <Text style={styles.cardText}>Dr. Emily Johnson</Text>
          <Text style={styles.cardSubText}>Pediatrician</Text>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonContent}>
              <FontAwesome name="star" size={16} color="#FFD700" />
              <Text style={styles.buttonText}> 4.8</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={picImage4} style={styles.cardImage} />
          <Text style={styles.cardText}>Dr. Michael Brown</Text>
          <Text style={styles.cardSubText}>Cardiologist</Text>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonContent}>
              <FontAwesome name="star" size={16} color="#FFD700" />
              <Text style={styles.buttonText}> 5.0</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5eefe',
    marginTop: 20,
    padding: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    elevation: 2,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  textBelowSearch: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  cardContainer: {
    flexDirection: 'row', // Align cards in a row
    justifyContent: 'space-between', // Space out cards evenly
    marginTop: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    padding: 16,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 160, // Fixed width for consistency
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  cardSubText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#773ff8',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 2,
    height:37,
    borderColor: '#7243e7',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;