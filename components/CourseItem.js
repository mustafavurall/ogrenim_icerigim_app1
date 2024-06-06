import { Pressable, StyleSheet, Text, View, Animated } from 'react-native';
import React, { useRef } from 'react';
import { getFormattedDate } from '../helper/date';
import { useNavigation } from '@react-navigation/native';
// ANA SAYFA

export default function CourseItem({ amount, date, description, id }) {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(1)).current;
  const rotateValue = useRef(new Animated.Value(0)).current;

  function coursePressIn() {
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 0.95,
        useNativeDriver: true,
      }),
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function coursePressOut() {
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(rotateValue, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.navigate('ManageCourse', {
        courseId: id,
      });
    });
  }

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '15deg'],
  });

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }, { rotate }] }}>
      <Pressable
        onPressIn={coursePressIn}
        onPressOut={coursePressOut}
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressed,
        ]}
      >
        <View style={styles.courseContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.date}>{getFormattedDate(date)}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{amount}</Text>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  pressed: {
    backgroundColor: '#FFD700', // Altın sarısı tonu
  },
  courseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFB300', // Koyu sarı tonu
    marginVertical: 10,
    padding: 15,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowRadius: 6,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', // Krem rengi
    marginBottom: 8,
    fontFamily: 'Roboto', // Daha yumuşak bir font
  },
  date: {
    fontSize: 20,
    color: '#FFF8DC', // Krem rengi
    fontFamily: 'Roboto', // Daha yumuşak bir font
  },
  priceContainer: {
    backgroundColor: '#FF8C00', // Koyu turuncu tonu
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    elevation: 3,
    shadowColor: '#333',
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
  },
  price: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 24,
    fontFamily: 'Roboto', // Daha yumuşak bir font
  },
});
