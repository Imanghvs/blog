const baseURL = 'http://fakeapi.jsonparseronline.com/'
export default {
	/**
	 * fetches posts from server and then commits it.
	 * @param {commit}
	 */
	getAllPosts: async function ({ commit }) {
		const response = await this.$axios.$get(baseURL + 'posts')
		commit(
			'loadPosts',
			response.map(post => ({
				...post,
				imageUrl: '/default.jpeg',
			})),
		)
	},

	/**
	 * fetches one post from server and then commits it.
	 * @param {commit}
	 * @param {Number} id
	 */
	getPost: async function ({ commit }, id) {
		const post = await this.$axios.$get(baseURL + 'posts/' + id)
		// since this image address has sanctioned Iran, we substitute it
		// with a static file
		console.log('post', post)
		post.imageUrl =
			post.imageUrl == 'https://i.picsum.photos/id/348/600/300.jpg'
				? '/default.jpeg'
				: post.imageUrl
		commit('loadPost', post)
	},

	getAllComments: async function ({ commit }) {
		const comments = await this.$axios.$get(baseURL + 'comments')
		commit('loadComments', comments)
	},
	/**
	 * posts a comment to the server, and commits it to the state
	 * @param {commit}
	 * @param {Object} comment
	 */
	addComment: async function (
		{ commit },
		{ authorName, userId, body, postId, postTitle },
	) {
		const response = await this.$axios
			.$post(baseURL + 'comments', {
				authorName,
				userId,
				body,
				postId,
			})
			.catch(console.log)
		commit('loadComment', {
			authorName,
			userId,
			body,
			postId,
			id: response.id,
			postTitle,
		})
	},
}
