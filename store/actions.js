export default {
	getAllPosts: async function ({ commit, state }, limit = 10) {
		const response = await this.$axios.$get(
			'http://fakeapi.jsonparseronline.com/posts',
			{ params: { _page: state.page, _limit: limit } },
		)
		commit('loadPosts', response)
	},
}
