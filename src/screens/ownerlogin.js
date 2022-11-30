import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Button } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
  const [counter, setCounter] = useState(100);
  const myCustomShare = async () => {
    const shareOptions = {
      message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
      url: files.appLogo,
      // urls: [files.image1, files.image2]
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 145 }}>
          <Avatar.Image
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={120}
          />
          <View style={{ marginLeft: 15, marginTop: 12 }}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>John Doe</Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row1}>
          <Icon name="map-marker-radius" color="#777777" size={30} />
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20 }}>Chandigarh, India</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={30} />
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20 }}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={30} />
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20 }}>john_doe@email.com</Text>
        </View>
      </View>

      <View style={[styles.button, { marginTop: 40 }]}>
        <Button title="Increase"
          onPress={() => {
            // Dont modify a state variable directly
            // counter++;
            setCounter(counter + 1);
            console.log(counter);
          }}
        />
      </View>
      <View style={styles.button}>
        <Button title="Decrease"
          onPress={() => {
            // counter--;
            setCounter(counter - 1);
          }}
        />
        <Text style={styles.xyzstyle}>Parking slots Available:{counter}</Text>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={myCustomShare}>
          <View style={styles.menuItem1}>
            <Icon name="share-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  xyzstyle: {
    alignSelf: "center",
    marginTop: 50,
    fontSize: 20
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    alignSelf: "center",
  },
  title: {
    lineHeight: 34,
    fontSize: 34,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '500',
  },
  row1: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem1: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 80,
    marginLeft: 2,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginLeft: 2,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  button: {
    alignItems: "center",
    // backgroundColor: "#DDDDDD",
    padding: 10,
    width: 400,
    alignSelf: "center",
  },
});