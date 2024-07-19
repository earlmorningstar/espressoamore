import { useEffect, useState } from 'react';

const PurchasePage = () => {
  const [coffeeData, setCoffeeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCoffeeData = async () => {
    try {
      const response = await fetch('https://api.sampleapis.com/coffee/hot');
      const data = await response.json();
      const translatedData = await translateData(data);
      setCoffeeData(translatedData);
    } catch (error) {
      console.error('Error fetching coffee data:', error);
    } finally {
      setLoading(false);
    }
  };

  const translateText = async (text) => {
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const data = new URLSearchParams();
    data.append('q', text);
    data.append('target', 'en');
    data.append('source', 'sv');

    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': '63156e791bmsh1049185d1a7ee8ep1da5f6jsnb9a597a5e8d1',
        'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
        'Accept-Encoding': 'application/gzip',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.data && result.data.translations && result.data.translations.length > 0) {
        return result.data.translations[0].translatedText;
      } else {
        console.error('Unexpected response structure:', result);
        return text; // return the original text if translation fails
      }
    } catch (error) {
      console.error('Error translating text:', error);
      return text; // return the original text if translation fails
    }
  };

  const translateData = async (data) => {
    const translatedData = await Promise.all(
      data.map(async (item) => {
        const translatedTitle = await translateText(item.title);
        const translatedDescription = await translateText(item.description);
        const translatedIngredients = await Promise.all(item.ingredients.map(ingredient => translateText(ingredient)));
        return {
          ...item,
          title: translatedTitle,
          description: translatedDescription,
          ingredients: translatedIngredients,
        };
      })
    );
    return translatedData;
  };

  useEffect(() => {
    fetchCoffeeData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Coffee Menu</h1>
      <ul>
        {coffeeData.map((coffee) => (
          <li key={coffee.id}>
            <h2>{coffee.title}</h2>
            <p>{coffee.description}</p>
            <img src={coffee.image} alt={coffee.title} width="200" />
            <ul>
              {coffee.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PurchasePage;
