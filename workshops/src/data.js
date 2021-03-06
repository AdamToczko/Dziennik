import uuid from "uuid";

export const albums = [
  {
    id: 0,
    name: "Rodzinne",
    photos: [0]
  }
];

export const photos = [
  {
    id: 0,
    desc: "Zdjecie z wakacji",
    date: "12-12-2012",
    image:
      "https://images.pexels.com/photos/2658457/pexels-photo-2658457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: 1,
    desc: "Dziwne zdjecie",
    date: "21-07-2012",
    image:
      "https://images.pexels.com/photos/2538412/pexels-photo-2538412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: 2,
    desc: "Selfie",
    date: "01-12-2002",
    image:
      "https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
];

export const todos = [
  {
    id: uuid.v4(),
    isDone: true,
    label: "Finish components extraction"
  },
  {
    id: uuid.v4(),
    isDone: false,
    label: "a"
  },
  {
    id: uuid.v4(),
    isDone: true,
    label: "b"
  },
  {
    id: uuid.v4(),
    isDone: false,
    label: "Finish components extraction"
  }
];
