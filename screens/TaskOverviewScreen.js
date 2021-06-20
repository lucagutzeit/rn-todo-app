import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList} from 'react-native';
import TaskItem from '../components/TaskItem';
import AddTaskFAB from '../components/AddTaskFAB';

const TaskOverviewScreen = props => {
    const [tasks, setTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([{key: 2, title:'Wake up'}]);
    const [modalVisible, setModalVisible] = useState(false);

    
    const addTaskHandler = (taskTitle) => {
        setTasks(currentTasks => 
            [...currentTasks,
                { key: Math.random().toString(), title: taskTitle}
            ]);
    };
    const removeTaskHandler = (taskKey) => {
        setTasks(currentTasks =>
            currentTasks.filter(task => task.key!==taskKey)
        );
    };

    const addDoneTaskHandler = (taskTitle) => {
        setDoneTasks(currentTasks => 
            [...currentTasks,
                { key: Math.random().toString(), title: taskTitle}
            ]);
    };
    const removeDoneTaskHandler = taskKey => {
        setDoneTasks(currentTasks => 
            currentTasks.filter(task => task.key!==taskKey)
        );
    };

    const taskFinishedHandler = task => {
        removeTaskHandler(task.key);
        addDoneTaskHandler 
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Step by step</Text>
            <FlatList 
                data={tasks}
                renderItem={itemData => <TaskItem task={itemData.item} onLongPress={()=>{}}/>}
            />
            <Text style={styles.title}>Done</Text>
            <FlatList 
                data={doneTasks}
                renderItem={itemData => <TaskItem task={itemData.item}/>}
            />

            <AddTaskFAB/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10
    },
    title: {
        fontSize:20,
        marginVertical: 8

    }
});

export default TaskOverviewScreen;