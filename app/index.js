import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const users = [
  {
    username: 'kailanip',
    name: 'Kailani Wahine',
  },
  {
    username: 'jackp',
    name: 'Jack Pyles',
  },
  {
    username: 'hkc82',
    name: 'Hetty KC',
  },
];

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>

        {/* <Link href='/Kailani' style={styles.link}>
          Open Kailani's Profile
        </Link>
        <Link
          href={{
            pathname: '/JackJohnsonPyles',
            params: { name: 'Jack' },
          }}
          style={styles.link}
        >
          Open Jack's Profile
        </Link> */}

        {users.map((user) => (
          <Link href={`/${user.username}`} style={styles.link}>
            Open {user.name}'s Profile
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },

  link: {
    fontSize: 20,
    marginVertical: 20,
    font: 'bold',
    textTransform: 'uppercase',
  },
});
