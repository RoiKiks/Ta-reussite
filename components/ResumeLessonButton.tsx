import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

type Props = {
  onPress?: () => void;
};

const ResumeLessonButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Reprendre la leçon</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 140,
    marginBottom:20,
    width: width / 2,
    alignSelf: 'center',
    paddingVertical: 12,
    backgroundColor: '#2563EB',
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ResumeLessonButton;
