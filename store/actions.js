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
	 * @param {Object} post
	 */
	createPost: async function ({ commit }, newPost) {
		console.log('new post: ', newPost)
		let postId = 0
		try {
			const response = await this.$axios.$post(baseURL + 'posts/', {
				...newPost,
				userId: 10,
				categoryId: 3,
			})
			postId = response.id
		} catch (e) {
			postId = Math.random() * 10000000 + 200
		}
		commit('loadPost', { ...newPost, id: postId })
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
