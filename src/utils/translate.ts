// translate.ts
import axios from 'axios';

const GOOGLE_TRANSLATE_API_KEY = 'paid_google_api_key_:/';
const BASE_URL = 'https://translation.googleapis.com/language/translate/v2';

interface TranslationResponse {
    translations: {
      translatedText: string;
    }[];
}

export async function translateText(text: string, targetLang: string): Promise<string> {
  try {
    const response = await axios.post<TranslationResponse>(BASE_URL, {
      q: text,
      target: targetLang,
      key: GOOGLE_TRANSLATE_API_KEY,
    });

    const translatedText = response?.data?.translations[0]?.translatedText;
    if (translatedText) {
      return translatedText;
    }
  } catch (error) {
    console.error('Error translating text:', error);
  }

  return text;
}
