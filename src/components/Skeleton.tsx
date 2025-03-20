import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat } from 'react-native-reanimated';

const Skeleton = () => {
    const translateX = useSharedValue(-200); // Start shimmer off-screen

    // Animated style for the shimmer effect
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    // Start infinite shimmer animation
    useEffect(() => {
        translateX.value = withRepeat(
            withTiming(300, { duration: 1500 }), // Move shimmer across the container
            -1, // Infinite repeat
            false // No reverse
        );
    }, [translateX]);

    return (
        <View style={styles.container}>
            <View style={styles.skeletonItem}>
                <Animated.View style={[styles.shimmer, animatedStyle]} />
            </View>
            <View style={styles.skeletonItem}>
                <Animated.View style={[styles.shimmer, animatedStyle]} />
            </View>
            <View style={styles.skeletonItem}>
                <Animated.View style={[styles.shimmer, animatedStyle]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    skeletonItem: {
        width: '90%',
        height: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 4,
        overflow: 'hidden',
        marginBottom: 10,
    },
    shimmer: {
        width: '100%', // Make shimmer as wide as the container
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Lighter color for shimmer
        position: 'absolute', // Allow it to move freely
        opacity: 0.7,
    },
});

export default Skeleton;