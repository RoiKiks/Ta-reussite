import ResumeLessonButton from '@/components/ResumeLessonButton';
import SubjectWidget from '@/components/SubjectWidget';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <ResumeLessonButton />
      <SubjectWidget subject="Matière" />
      {/* Tu peux ajouter d'autres widgets ou composants ici */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#f0F4FF',
    flex: 1,
  },
});

export default Home;
