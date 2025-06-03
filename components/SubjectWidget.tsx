import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  subject?: string;
};

const SubjectWidget: React.FC<Props> = ({ subject = 'Matière' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{subject}</Text>
      <View style={styles.chartPlaceholder}>
        {/* Ici tu pourras ajouter ton graphique */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    // Ombre légère (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // Ombre Android
    elevation: 3,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2563EB',
  },
  chartPlaceholder: {
    height: 150,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
});

export default SubjectWidget;
