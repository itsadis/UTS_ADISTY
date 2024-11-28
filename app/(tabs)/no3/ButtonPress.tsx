import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonPress = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonBlue}>
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGreen}>
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',  // Menyusun tombol secara horizontal
    justifyContent: 'space-between',
    width: '80%',  // Menentukan lebar container tombol
  },
  buttonBlue: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '45%',  // Lebar tombol 45% dari lebar container
    alignItems: 'center',
  },
  buttonGreen: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ButtonPress;
