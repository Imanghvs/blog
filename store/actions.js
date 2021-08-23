export default {
	/**
	 * fetches posts from server and the commits it.
	 * @param {commit, state}
	 */
	getAllPosts: async function ({ commit }) {
		const response = await this.$axios.$get(
			'http://fakeapi.jsonparseronline.com/posts',
		)
		commit(
			'loadPosts',
			response.map(post => ({
				...post,
				imageUrl: '/default.jpeg',
			})),
		)
	},
}
