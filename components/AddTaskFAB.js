import React from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';

const AddTaskFAB = props => {
    return (
        <View style={styles.fab}>
            <Button color='green' title='ADD' onClick={() => {}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20
    }
});

export default AddTaskFAB;