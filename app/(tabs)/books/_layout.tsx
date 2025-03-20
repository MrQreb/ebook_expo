import BooksScreen from '@/src/screens/BookScreen';
import Register from '@/src/screens/RegisterScreen';
import { ScreenContainer } from '@/src/screens/Screen-Container';

export default function HomeScreen() {
  return (
    <ScreenContainer>
      <BooksScreen />
    </ScreenContainer>
  );
}