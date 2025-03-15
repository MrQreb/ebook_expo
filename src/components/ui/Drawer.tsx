import React, { useCallback, useState } from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
import {
    GestureDetector,
    Gesture,
} from 'react-native-gesture-handler';
import { Menu } from 'lucide-react-native';
import { Link } from 'expo-router';
import globalStyles from '@/src/styles/globalStyles';
const { width } = Dimensions.get('screen');

const DRAWER_WIDTH = width * 0.65;

const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const translateX = useSharedValue(isOpen ? 0 : -DRAWER_WIDTH);

    // Animar la apertura/cierre del Drawer
    React.useEffect(() => {
        translateX.value = withTiming(isOpen ? 0 : -DRAWER_WIDTH, { duration: 300 });
    }, [isOpen]);

    // Estilo animado del Drawer
    const drawerStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    // Cerrar el drawer al tocar afuera
    const handleOutsidePress = useCallback(() => {
        if (isOpen) setIsOpen(false);
    }, [isOpen]);

    // Gesture para deslizar el drawer
    const gesture = Gesture.Pan()
        .onUpdate((event) => {
            translateX.value = Math.max(-DRAWER_WIDTH, Math.min(0, event.translationX));
        })
        .onEnd((event) => {
            if (event.translationX > 100) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }
        });

    return (
        <>
            <TouchableOpacity style={styles.openButton} onPress={() => setIsOpen(true)}>
                <Menu color="#fff" size={24} />
            </TouchableOpacity>

            {/* Fondo semitransparente al abrir */}
            {isOpen && <TouchableOpacity style={styles.overlay} onPress={handleOutsidePress} />}

            <GestureDetector gesture={gesture}>
                <Animated.View style={[styles.drawer, drawerStyle]}>
                    <Text style={styles.drawerTitle}>Menú</Text>

                    <TouchableOpacity style={styles.menuItem} onPress={() => alert('Inicio')}>
                        <Text style={styles.menuText}>🏠 Inicio</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={() => alert('Perfil')}>
                        <Text style={styles.menuText}>👤 Perfil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={() => alert('Configuración')}>
                        <Text style={styles.menuText}>⚙ Configuración</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => alert('Configuración')}>
                        <Text style={styles.menuText}>⚙ Configuración</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => alert('Configuración')}>
                        <Text style={styles.menuText}>⚙ Configuración</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => alert('Configuración')}>
                        <Link href="./register">
                            <Text style={styles.menuText}>⚙ Configuración</Text>
                        </Link>
                    </TouchableOpacity>


                </Animated.View>
            </GestureDetector>
        </>
    );
};

const styles = StyleSheet.create({
    openButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#3A3A3A'
    },
    openButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    drawer: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: DRAWER_WIDTH,
        backgroundColor: 'rgba(27, 27, 27, 0.92)', // Ajusta la transparencia aquí
        padding: 20,
        borderRightWidth: .5,
        borderColor: 'gray',
        borderRadius:10

    },
    drawerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily:globalStyles.fonts.interBold,
        color:globalStyles.colors.subTitle,


    },
    menuItem: {
        paddingVertical: 12,
    },
    menuText: {
        fontSize: globalStyles.fontSizes.small,
        fontFamily:globalStyles.fonts.jetBrainsMonoSemiBold,
        color:globalStyles.colors.subTitle,
        
    },
});

export default Drawer;