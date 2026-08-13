import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserCardStyles from '../css/UserCard.styles';

function UserCard({ user }) {
  return (
    <View style={UserCardStyles.card}>
      <Text style={UserCardStyles.name}>{user.name}</Text>
      <Text style={UserCardStyles.email}>{user.email}</Text>
      <Text style={UserCardStyles.address}>{user.address}</Text>
    </View>
  );
}

// React.memo to avoid re-rendering cards that haven't changed
export default React.memo(UserCard);