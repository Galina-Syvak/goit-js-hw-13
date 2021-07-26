const axios = require('axios');

async function fetchImages(name, page) {
  const response = await axios({
    url: 'https://pixabay.com/api/',
    params: {
      key: '22650980-2b5610170143806532e4d0fe1',
      q: `${name}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
      page: `${page}`,
    },
  });

  return response.data;
}

export { fetchImages };
// export const fetchImages = function (name) {
//   const API_KEY = '22650980-2b5610170143806532e4d0fe1';
//   const URL = 'https://pixabay.com/api/';
//   const params = new URLSearchParams({
//     per_page: 40,
//     page: 1,
//   });

//   return fetch(
//     `${URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&${params}`,
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// };
