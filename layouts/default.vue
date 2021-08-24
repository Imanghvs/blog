<template>
	<v-app>
		<!-- navigation button -->
		<v-app-bar :clipped-right="clipped" fixed app>
			<v-btn icon @click.stop="rightDrawer = !rightDrawer">
				<v-icon>mdi-menu</v-icon>
			</v-btn>
			<v-toolbar-title v-text="title" />
		</v-app-bar>
		<!-- here a page loads -->
		<v-main>
			<v-container>
				<Nuxt />
			</v-container>
		</v-main>
		<!-- navigation drawer -->
		<v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
			<v-list>
				<!-- Welcome -- can be substituted by another welcome text -->
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title v-text="'خوش آمدید'" />
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
				<!-- list of pages to navigate -->
				<v-list-item
					v-for="(item, i) in items"
					:key="i"
					:to="item.to"
					router
					exact
				>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<!-- copyright sign and the year we are in -->
		<v-footer :absolute="!fixed" app yellow accent-1>
			<span
				>&copy; {{ new Date().getFullYear() }} - ساخته شده توسط ایمان
				غواصیه</span
			>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			clipped: false,
			fixed: false,
			items: [
				{
					title: 'صفحه‌ی اصلی',
					to: '/',
				},
				{
					title: 'مدیریت وبلاگ',
					to: '/panel',
				},
				{
					title: 'نظرات',
					to: '/comments',
				},
			],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: 'ایــــمــانـــگـــرام',
		}
	},
}
</script>
