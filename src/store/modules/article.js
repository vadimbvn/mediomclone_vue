import articleApi from '@/api/article'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

export const mutationTypes = {
  getArticleStart: '[article] Get acticle start',
  getArticleSuccess: '[article] Get article success',
  getArticleFailure: '[article] Get article failure',
}

export const actionTypes = {
  getArticle: '[article] Get article',
}

const mutations = {
  [mutationTypes.getArticleStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getArticleSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getArticleFailure](state) {
    state.isLoading = false
  },
}

const actions = {
  [actionTypes.getArticle](context, {slug}) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getArticleStart, slug)
      articleApi
        .getArticle(slug)
        .then((acticle) => {
          context.commit(mutationTypes.getArticleSuccess, acticle)
          resolve(acticle)
        })
        .catch(() => {
          context.commit(mutationTypes.getArticleFailure)
        })
    })
  },
}

export default {
  state,
  actions,
  mutations,
}
