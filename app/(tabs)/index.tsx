import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import ClassComponent from './no2/ClassComponent';
import FuncionalComponent from './no2/FunctionalComponent';
import ButtonPress from './no3/ButtonPress';
import DuaLayar from './no5/DuaLayar';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ClassComponent />
        <FuncionalComponent /> 
        <ButtonPress />
        <DuaLayar />
      </ScrollView>
    </View>
  );
};

export default App;
