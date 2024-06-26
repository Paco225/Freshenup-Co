import { View, Text,FlatList,StyleSheet, ScrollView  } from 'react-native'
import React from 'react'


const reviews = [
  {
    id: '1',
    author: 'Ange Roddy',
    date: '20/02/2024',
    rating: 0,
    content: 'Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit.'
  },
  {
    id: '2',
    author: 'Pacome Brou',
    date: '20/02/2024',
    rating: 4,
    content: 'Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit.'
  },


  
];

const ReviewItem = ({ review }) => {
  return (
    <ScrollView>
         <View style={styles.reviewContainer}>
      <View style={styles.header}>
        <Text style={styles.author}>{review.author}</Text>
        <Text style={styles.date}>{review.date}</Text>
      </View>
      <View style={styles.rating}>
        {/* Affichage des étoiles en fonction de la note */}
        {[...Array(5)].map((_, index) => (
          <Text key={index} style={index < review.rating ? styles.starFilled : styles.starEmpty}>★</Text>
        ))}
      </View>
      <Text style={styles.content}>{review.content}</Text>
    </View>
    </ScrollView>
   
  );
};

const Commentaire = () => {
  return (
    <FlatList
      data={reviews}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ReviewItem review={item} />}
      contentContainerStyle={styles.list}
      horizontal={false}
    />
  );
};
const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  reviewContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  author: {
    fontWeight: 'bold',
  },
  date: {
    color: '#777',
  },
  rating: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  starFilled: {
    color: '#ffd700',
  },
  starEmpty: {
    color: '#d3d3d3',
  },
  content: {
    color: '#333',
  },
});

export default Commentaire