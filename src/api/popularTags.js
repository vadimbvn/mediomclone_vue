import axios from '@/api/axios'

const getPopularTags = () => {
  return axios.get('/tags').then((responce) => responce.data.tags)
}
export default {
  getPopularTags,
}
