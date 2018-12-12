export const GET_POSTS = 'GET_POSTS';

const initialPosts = [
  {
  id: 1,
  title: 'Avery Fimbulvvinter',
  tags: ['beer', 'avery', 'belgian'],
  content: 'It is incredible.',
  score: 5,
  rating: 5,
  picture: 'https://cdn.beeradvocate.com/im/beers/310321.jpg'
  },
  {
  id: 2,
  title: 'Old Rasputin',
  tags: ['beer', 'north coast', 'imperial', 'stout'],
  score: 3,
  rating: 5,
  picture: 'https://www.totalwine.com/media/sys_master/twmmedia/h75/h5d/9071470805022.png'
},
{
  id: 3,
  title: '90 Shilling',
  tags: ['beer', 'odell', 'amber'],
  score: 4,
  rating: 5,
  picture: 'https://cdn.beeradvocate.com/im/beers/740.jpg'
}
]

export const getPosts = () => {
  return dispatch => {
    dispatch({
      type: GET_POSTS,
      payload: initialPosts
    });
  }
}
