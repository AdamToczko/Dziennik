export const fetchPhotos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  if (!response.ok) {
    return;
  }
  const data = await response.json();
  return data.slice(0, 10).map(photo => {
    return {
      id: photo.id,
      desc: photo.title,
      date: "Unknown",
      image: photo.thumbnailUrl
    };
  });
};
