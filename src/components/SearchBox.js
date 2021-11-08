import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import { spacing } from '../utils/sizes';

export function SearchBox() {
    return (
        <View style={styles.container}>
            <Text style={styles.innerItem}>Search</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 0.1,
        backgroundColor: "green",
        flexDirection: "row",
        padding: spacing.medium,
    },
    innerItem: {
        flex: 1
    }
})