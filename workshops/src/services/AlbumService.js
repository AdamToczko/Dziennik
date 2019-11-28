export const fetchAlbums = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (response.ok !== true) {
    return;
  }
  const data = await response.json();
  return data.slice(0, 5).map(album => {
    return {
      id: album.id,
      name: album.title
    };
  });
};
