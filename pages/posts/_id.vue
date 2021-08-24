<template>
	<v-container class="mb-15">
		<v-row justify="center">
			<v-col xl="5" lg="7" md="10" sm="10">
				<v-skeleton-loader
					v-if="loading"
					class="mx-auto"
					type="card"
				></v-skeleton-loader>
				<v-card class="mb-10" elevation="3">
					<v-img :src="post.imageUrl"> </v-img>
					<v-card-title>{{ post.title }}</v-card-title>
					<v-card-text>{{ post.content }}</v-card-text>
				</v-card>
				<CommentInput
					v-if="!loading"
					:postId="this.post.id"
					:postTitle="post.title"
				></CommentInput>
				<br />
				<Comment
					v-for="comment in stateComments.filter(com => com.postId == post.id)"
					:key="comment.id"
					:authorName="comment.authorName || 'ناشناس'"
					:body="comment.body"
					:title="post.title"
				></Comment>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Comment from '../../components/comment.vue'
import CommentInput from '../../components/commentInput.vue'

export default {
	name: 'post',
	data() {
		return { id: this.$route.params.id, post: {}, loading: true }
	},
	components: { Comment, CommentInput },
	methods: {
		...mapMutations({ loadPost: 'loadPost' }),
	},
	computed: { ...mapGetters(['posts', 'stateComments']) },
	async mounted() {
		let post = {}
		if (this.$route.query.title) {
			post = this.$route.query
			post.id = Number(post.id)
			this.loadPost(post)
		} else {
			post = this.$route.query.title
				? this.$route.query
				: await this.$axios.$get(
						`http://fakeapi.jsonparseronline.com/posts/${this.id}`,
				  )
			// since this image address has sanctioned Iran, we substitute it
			// with a static file
			post.imageUrl =
				post.imageUrl == 'https://i.picsum.photos/id/348/600/300.jpg'
					? '/default.jpeg'
					: post.imageUrl
		}
		// since this image address has sanctioned Iran, we substitute it
		// with a static file
		this.post = post
		this.loading = false
	},
}
</script>

<style scoped>
.blog-list-link {
	text-decoration: none;
	color: #000 !important;
}

.blog-list-link:hover {
	color: rgb(92, 148, 252) !important;
}

.blog-title {
	font-size: 48px;
	font-weight: 400;
}

@media only screen and (max-width: 600px) {
	.blog-title {
		font-size: 36px;
	}
}

.blog-description {
	font-weight: 400;
	font-style: italic;
}

.blog-details {
	margin-top: 30px;
	margin-bottom: 40px;
}

.blog-time {
	font-size: 15px;
	font-weight: 300;
}

.nuxt-content h2 {
	font-weight: 500;
	font-size: 30px;
	padding-bottom: 0.3rem;
	border-bottom: 1px solid #eaecef;
	margin-bottom: 1rem;
}

.nuxt-content h3 {
	font-weight: 400;
	font-size: 22px;
}

.nuxt-content p {
	font-size: 16px;
	margin-bottom: 30px;
	word-spacing: 2px;
	line-height: 32px;
}

.nuxt-content p code,
.nuxt-content h2 code,
.nuxt-content h3 code {
	color: #476582;
	padding: 0.25rem 0.5rem;
	margin: 0;
	font-size: 0.85em;
	background-color: rgba(27, 31, 35, 0.05);
	border-radius: 3px;
	font-family: Consolas, Roboto Mono, monospace;
}

.nuxt-content ul {
	font-size: 16px;
	margin-bottom: 30px;
	word-spacing: 2px;
	line-height: 32px;
	display: block;
	list-style-type: disc;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	padding-inline-start: 40px;
}

.v-application code {
	all: initial;
	all: unset;
}

.v-application a {
	text-decoration: none;
}

.nuxt-content-highlight {
	font-family: Consolas;
	font-size: 16px;
	position: relative;
	z-index: 1;
	border-radius: 6px;
}

.nuxt-content-highlight > .filename {
	font-family: Roboto;
	right: 0;
	top: 0;
	position: absolute;
	margin-right: 0.8rem;
	font-size: 0.8rem;
	color: rgba(203, 213, 224, 1);
	font-weight: 300;
	z-index: 10;
	margin-top: 0.5rem;
}

.nuxt-content pre {
	position: static;
	border-radius: 6px;
	font-family: Consolas;
	font-size: 16px;
	padding: 20px;
}
</style>