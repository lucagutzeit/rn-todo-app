import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Pressable} from 'react-native';

const TaskItem = props => {
    return (
        <View>
            <Pressable onLongPress={props.onLongPress}>
                <Text>{props.task.title}</Text>
            </Pressable>
        </View>
        
    )
}

const styles = StyleSheet.create({

});
export default TaskItem;