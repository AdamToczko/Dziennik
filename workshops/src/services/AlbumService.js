export const fetchAlbums = () => {
  return fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      return data.slice(0, 5).map(album => {
        return {
          id: album.id,
          name: album.title
        };
      });
    });
};
