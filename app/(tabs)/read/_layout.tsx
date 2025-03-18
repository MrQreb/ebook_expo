import PdfReader from '@/src/components/ui/PdfReader';
import { ScreenContainer } from '@/src/screens/Screen-Container';
import { useGlobalSearchParams } from 'expo-router';

export default function ReadPdf() {
  const { ebookUrl } = useGlobalSearchParams();
  const pdfUrl = Array.isArray(ebookUrl) ? ebookUrl[0] : ebookUrl;

  return (
    <ScreenContainer>
      <PdfReader pdfUrl={pdfUrl} />
    </ScreenContainer>
  );
}