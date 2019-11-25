export const fetchPhotos = () => {
  return fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      return data.slice(0, 10).map(photo => {
        return {
          id: photo.id,
          desc: photo.title,
          date: "Unknown",
          image: photo.thumbnailUrl
        };
      });
    });
};
