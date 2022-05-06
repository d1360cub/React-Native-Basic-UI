import react from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function Card(props) {
  const {author, picture, about, tags, comments}= props;
  return (
    <View style={styles.containerCard}>
      <View style={styles.imageContainer}>
        <Image style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }} source={require('../assets/favicon.png')} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.aboutText}>{about}</Text>
        <Text style={styles.titleText}> by {author}</Text>
        <View style={styles.tagsContainer}>
          {tags.map((element) => <Text style={styles.tagsText}>{element}</Text>)}
        </View>
        <Text>{comments.length} Comments</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerCard: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  textContainer: {
    flex: 1,
  },
  aboutText: {
    textAlign: 'justify',
    paddingTop: 15,
    paddingRight: 5,
    paddingLeft: 5,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  tagsText: {
    margin: 2,
    borderRadius: 5,
    backgroundColor: `#6495ed`,
    padding: 10,
    fontWeight: 'bold',
  },
});

export default Card;