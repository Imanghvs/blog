<template>
	<v-container fluid class="pa-3">
		<v-layout wrap>
			<v-flex xs12 md10>
				<!-- contents heading -->
				<v-row class="pa-3">
					<h1 class="heading">مطالب</h1>
					<v-spacer></v-spacer>
					<!-- to make a new post -->
					<v-btn @click="newPost = !newPost" class="button"> مطلب جدید </v-btn>
				</v-row>
				<PostInput :open="newPost"></PostInput>
				<!-- list of posts -->
				<v-list two-line class="transparent">
					<v-list-item
						v-for="post in posts.slice((page - 1) * 10, page * 10)"
						:key="post.id"
						class="item-container teal darken-1 mb-2"
					>
						<p class="title-paragraph mb-0">
							{{
								post.title.slice(0, 24) + (post.title.length > 25 ? '...' : '')
							}}
						</p>
						<v-spacer></v-spacer>
						<!-- edit a post (button) -->
						<v-btn class="button edit-button">ویرایش</v-btn>
						<!-- remove a post (button) -->
						<v-btn class="button remove-button">حذف</v-btn>
					</v-list-item>
				</v-list>
			</v-flex>
			<v-flex xs12 md10>
				<v-pagination
					v-show="posts.length"
					v-model="page"
					:length="posts.length / 10"
				></v-pagination>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PostInput from '../components/postInput.vue'

export default {
	name: 'panel',
	data() {
		return {
			page: 1,
			newPost: false,
		}
	},
	components: { PostInput },
	methods: {
		...mapActions(['getAllPosts']),
	},
	computed: {
		...mapGetters(['posts']),
	},
	created() {
		this.getAllPosts()
	},
}
</script>

<style scoped>
.button {
	margin: 3px;
}
.item-container {
	border-radius: 6px;
}
.title-paragraph {
	color: white;
	font-weight: bold;
}
.edit-button {
	color: green;
}
.remove-button {
	color: red;
}
.pagination-container {
	direction: ltr;
}
</style>
