export const runCodeService = async (code, language) => {
  const endpoint = `http://localhost:3001/results?code=${encodeURIComponent(code)}&language=${language}`;
  const response = await fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  
  if (data && data.length) {
    return data[0].output;
  } else {
    throw new Error('Ошибка выполнения кода');
  }
};
