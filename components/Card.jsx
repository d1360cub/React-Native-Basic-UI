import react from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function Card(props) {
  const {author, picture, about, tags, comments}= props;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: 'picture'}} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.aboutText}>{about}</Text>
        <Text style={styles.titleText}> by {author}</Text>
        <Text>{comments.length} Comments</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#f1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    backgroundColor: '#ff1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutText: {
    textAlign: 'justify',
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default Card;