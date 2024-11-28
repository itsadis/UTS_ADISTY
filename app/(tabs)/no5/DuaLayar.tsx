import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

// Komponen HomeScreen dengan latar belakang putih
const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Go to Second Screen</Text>
  </View>
);

// Komponen ProfileScreen dengan latar belakang putih
const ProfileScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>This is the Second Screen</Text>
  </View>
);

const DuaLayar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Latar belakang putih
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#000000', // Warna teks hitam
  },
});

export default DuaLayar;
