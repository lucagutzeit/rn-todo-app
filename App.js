import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button} from 'react-native';
import Header from './components/Header';
import TaskOverviewScreen from './screens/TaskOverviewScreen';


export default function App() {
  const [tasks, setTasks] = useState([{title: 'test', key: Math.random().toString()}]);
  const [taskID, setTaskID] = useState(0);

  return (
    <View style={styles.screen}>
        <Header title='Tasks' />
        <TaskOverviewScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
