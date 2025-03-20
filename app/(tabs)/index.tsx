
import BooksScreen from '@/src/screens/BookScreen';
import HomeScreen from '@/src/screens/HomeScreen';
import { ScreenContainer } from '@/src/screens/Screen-Container';

export default function Home() {
  return (
   <ScreenContainer >
        {/* <HomeScreen></HomeScreen> */}
        <BooksScreen></BooksScreen>
    </ScreenContainer>
  );
}
