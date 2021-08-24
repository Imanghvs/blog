export default {
	/**
	 * sets posts inside states
	 * @param {Object} state
	 * @param {Array<Object>} posts
	 */
	loadPosts(state, posts) {
		state.posts = posts
	},

	/**
	 * adds a post to the state
	 * @param {Objet} state
	 * @param {Object} comment
	 */
	loadPost(state, post) {
		state.posts.unshift(post)
	},

	/**
	 * adds a new comment at the first of the comments array of the post
	 * @param {Objet} state
	 * @param {Array<Object>} comments
	 */
	loadComments(state, comments) {
		state.comments = comments
	},

	/**
	 * adds a new comment at the first of the comments array of the post
	 * @param {Objet} state
	 * @param {Object} comment
	 */
	loadComment(state, comment) {
		state.comments.unshift(comment)
	},
}
