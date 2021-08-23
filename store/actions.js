export default {
	/**
	 * fetches posts from server and the commits it.
	 * @param {commit, state}
	 * @param {Integer} limit // number of  posts you want to fetch. It's 10 by default.
	 */
	getAllPosts: async function ({ commit, state }, limit = 10) {
		const response = await this.$axios.$get(
			'http://fakeapi.jsonparseronline.com/posts',
			{ params: { _page: state.page, _limit: limit } },
		)
		commit('loadPosts', response)
	},
}
