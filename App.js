import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView } from 'react-native';
import data from './assets/data.json';
import Card from './components/Card';

export default function App() {
  return (
    <ScrollView>
      <StatusBar style="auto" />
      {data.map((item,index) =>
            <Card
            author = {item.author}
            picture = {item.picture}
            about = {item.about}
            tags = {item.tags}
            comments = {item.comments}
            key = {index} />
        )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
