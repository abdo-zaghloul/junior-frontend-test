import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/redux/store';
import { fetchUsers, loadMore } from './src/redux/usersSlice';
import UserCard from './src/components/UserCard';
import AppStyles from './src/css/App.styles';

function UserListScreen() {
  const dispatch = useDispatch();
  const { items, status, error, visibleCount } = useSelector((state) => state.users);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = items.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const visibleUsers = filteredUsers.slice(0, visibleCount);

  const handleLoadMore = useCallback(() => {
    dispatch(loadMore());
  }, [dispatch]);

  const renderItem = useCallback(({ item }) => <UserCard user={item} />, []);
  const keyExtractor = useCallback((item) => String(item.id), []);

  if (status === 'loading' && items.length === 0) {
    return (
      <SafeAreaView style={AppStyles.centered}>
        <ActivityIndicator size="large" color="#3b82f6" />
      </SafeAreaView>
    );
  }

  if (status === 'failed' && items.length === 0) {
    return (
      <SafeAreaView style={AppStyles.centered}>
        <Text style={AppStyles.errorText}>Failed to load users: {error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={AppStyles.container}>
      <Text style={AppStyles.title}>Users</Text>

      <TextInput
        style={AppStyles.searchInput}
        placeholder="Search by name..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={visibleUsers}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
        removeClippedSubviews
        ListEmptyComponent={
          <Text style={AppStyles.emptyText}>No users found.</Text>
        }
        ListFooterComponent={
          visibleCount < filteredUsers.length ? (
            <TouchableOpacity style={AppStyles.loadMoreBtn} onPress={handleLoadMore}>
              <Text style={AppStyles.loadMoreText}>Load More</Text>
            </TouchableOpacity>
          ) : null
        }
      />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <UserListScreen />
    </Provider>
  );
}

