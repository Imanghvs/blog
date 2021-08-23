<template>
	<v-container fluid class="container pa-3">
		<v-layout wrap>
			<v-flex xs12 md10>
				<!-- contents heading -->
				<h1 class="heading">مطالب</h1>
				<!-- list of posts -->
				<v-list two-line class="transparent">
					<v-list-item
						v-for="post in posts.slice((page - 1) * 10, page * 10)"
						:key="post.id"
						class="item-container post teal darken-1 mb-2"
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
				<v-pagination v-model="page" :length="posts.length / 10"></v-pagination>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'Panel',
	data() {
		return {
			page: 1,
		}
	},
	methods: {
		...mapActions(['getAllPosts']),
	},
	computed: {
		...mapGetters(['posts']),
	},
	created: function () {
		this.getAllPosts()
	},
}
</script>

<style scoped>
.button {
	margin: 3px;
}
.container {
	direction: rtl;
}
.item-container {
	border-radius: 6px;
}
.post {
	color: white !important;
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
