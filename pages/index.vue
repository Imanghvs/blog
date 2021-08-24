<template>
	<v-container fluid>
		<v-layout wrap>
			<v-flex xs12 md10>
				<v-skeleton-loader
					v-if="loading"
					class="mx-auto"
					type="card"
				></v-skeleton-loader>
				<v-card
					xs12
					md6
					class="ma-4"
					elevation="3"
					v-for="post in posts.slice((page - 1) * 10, page * 10)"
					:key="post.id"
				>
					<v-img :src="post.imageUrl" contain> </v-img>
					<v-card-title>{{ post.title }}</v-card-title>
					<v-card-text class="pt-0 pb-3">{{ post.content }}</v-card-text>
					<NuxtLink :to="{ path: `/posts/${post.id}`, query: post }">
						<v-card-actions> ادامه‌ی مطلب ... </v-card-actions>
					</NuxtLink>
				</v-card>
			</v-flex>
			<v-flex xs12 md10>
				<v-pagination v-model="page" :length="posts.length / 10"></v-pagination>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'index',
	data() {
		return {
			page: 1,
			loading: true,
		}
	},
	computed: {
		...mapGetters(['posts']),
	},
	methods: {
		...mapActions(['getAllPosts']),
	},
	mounted: async function () {
		if (!this.posts.length) await this.getAllPosts()
		this.loading = false
	},
}
</script>

<style scoped>
.post-card {
	text-decoration: none;
}

.read-more {
	color: rgb(92, 148, 252);
}
</style>