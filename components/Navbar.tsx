import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Navbar = () => {
  const router = useRouter();

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>Ta Réussite</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={() => router.push('/')} style={styles.button}>
          <Text style={styles.buttonText}>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/about')} style={styles.button}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/profil')} style={styles.button}>
          <Text style={styles.buttonText}>Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 10,
    padding: 6,
    backgroundColor: '#0d6efd',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Navbar;
