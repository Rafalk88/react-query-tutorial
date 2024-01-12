import axios from 'axios'

export async function getPosts() {
  const res = await axios
    .get('http://localhost:3000/posts', { params: { _sort: 'title' } })
  return res.data
}