import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    Easing,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

const { height } = Dimensions.get('window');

const BurgerNavbar = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const translateY = useRef(new Animated.Value(height)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  const openMenu = () => {
    setVisible(true);
    Animated.parallel([
      Animated.timing(overlayOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeMenu = () => {
    Animated.parallel([
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: height,
        duration: 250,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start(() => {
      setVisible(false);
    });
  };

  const navigateAndClose = (path: string) => {
    closeMenu();
    router.push(path);
  };

  return (
    <>
      <TouchableOpacity onPress={openMenu} style={styles.burgerButton}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </TouchableOpacity>

      {visible && (
        <Modal transparent visible animationType="none">
          <TouchableWithoutFeedback onPress={closeMenu}>
            <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]}>
              <TouchableWithoutFeedback>
                <Animated.View style={[styles.bottomBar, { transform: [{ translateY }] }]}>
                  <TouchableOpacity onPress={() => navigateAndClose('/')} style={styles.menuItem}>
                    <Text style={styles.menuText}>🏠 Accueil</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigateAndClose('/parametres')} style={styles.menuItem}>
                    <Text style={styles.menuText}>⚙️ Paramètres</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={closeMenu} style={styles.menuItem}>
                    <Text style={[styles.menuText, { color: 'red' }]}>❌ Fermer</Text>
                  </TouchableOpacity>
                </Animated.View>
              </TouchableWithoutFeedback>
            </Animated.View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  burgerButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 100,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,          // contour fin
    borderColor: '#2563EB',  // couleur bleu contour
    borderRadius: 12,        // arrondi des coins
    backgroundColor: 'transparent', // fond transparent
  },
  line: {
    width: 24,
    height: 3,
    backgroundColor: '#2563EB', // traits en bleu
    borderRadius: 1.5,
    marginVertical: 2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // <-- couvre tout l'écran
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  bottomBar: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: 'center',
    paddingBottom: 40,
  },
  menuItem: {
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 18,
  },
});

export default BurgerNavbar;
