import { View, Text, Button } from 'react-native';
import React from 'react';
import { useRouter, useSearchParams } from 'expo-router';

const profile = () => {
  const router = useRouter();
  const { name, username } = useSearchParams();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Aloha {name} (@{username})
      </Text>
      <Button title='Go Back' onPress={() => router.back()} />
    </View>
  );
};

export default profile;
