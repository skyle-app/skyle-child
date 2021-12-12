<!-- 
	This is the tables page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
	<div>

		<!-- Authors Table -->
			<a-row :gutter="24" type="flex">

				<!-- Projects Table Column -->
				<a-col :span="24" class="mb-24">
					<a-card :bordered="false" class="header-solid h-full" :bodyStyle="{padding: 0,}">
						<h3 style="text-align: center; margin: 15px 15px 15px 15px;">GPS 권한이 없습니다. 앱 권한을 변경해 주세요.</h3>
					</a-card>
				</a-col>
			</a-row>
		<!-- / Authors Table -->

	</div>
</template>

<style lang="scss">
</style>

<script>

export default {
	mounted() {
		if ( !$cookies.isKey('token') ) {
			alert('로그인을 해주세요.');
			location.hash='#/sign-in';
		}
	}
}
</script>