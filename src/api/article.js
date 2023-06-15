import axios from '@/api/axios'

const getArticle = (sluq) => {
  return axios
    .get(`/articles/${sluq}`)
    .then((response) => response.data.article)
}

export default {
  getArticle,
}
