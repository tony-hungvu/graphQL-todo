const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
  },
];

export const resolvers = {
  Query: {
    books: () => books,
  },
};
