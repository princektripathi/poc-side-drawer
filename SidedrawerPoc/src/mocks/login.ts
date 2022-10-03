export function login() {
  this.get('/api/movies', () => {
    return {
      movies: [
        {id: 1, name: 'Inception', year: 2010},
        {id: 2, name: 'Interstellar', year: 2014},
        {id: 3, name: 'Hello', year: 2017},
      ],
    };
  });
}
