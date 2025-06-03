import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const ProfileButton = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push('/profil')}
      style={styles.profileButton}
      accessibilityLabel="Profil"
    >
      <View style={styles.profileIcon}>
        <View style={styles.profileCircle} />
        <View style={styles.profileBody} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 100,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2563EB',
    borderRadius: 12,
    backgroundColor: 'transparent',
  },
  profileIcon: {
    alignItems: 'center',
  },
  profileCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#2563EB',
    marginBottom: 2,
  },
  profileBody: {
    width: 20,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2563EB',
  },
});

export default ProfileButton;
