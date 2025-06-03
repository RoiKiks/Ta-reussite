import BurgerNavbar from '@/components/BurgerNavbar';
import ProfileButton from '@/components/ProfileButton';
import { Slot } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Layout() {
  return (
    <View style={styles.container}>
      {/* Navbar visible sur toutes les pages */}
      <BurgerNavbar />
      <ProfileButton />

      {/* Contenu des pages */}
      <View style={styles.content}>
        <Slot />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
