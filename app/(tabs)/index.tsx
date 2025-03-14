import { Text ,StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    // <PdfReader/>
    <Text className="m-auto font-JetBrainsMonoBold text-3xl">Hola</Text>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
