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
						<h3 style="text-align: center; margin: 15px 15px 15px 15px;">실시간 위치 전송 중입니다.</h3>
					</a-card>
				</a-col>
			</a-row>
		<!-- / Authors Table -->

	</div>
</template>

<style lang="scss">
</style>

<script>

	import axios from 'axios'

	export default {
		methods: {
			getLocation() {
				if (navigator.geolocation) { // GPS를 지원하면
					navigator.geolocation.getCurrentPosition(function(position) {
						// alert(position.coords.latitude + ' ' + position.coords.longitude);
						let form = new FormData()
						form.append('token', $cookies.get('token'))
						form.append('latitude', position.coords.latitude)
						form.append('longitude',position.coords.longitude)

						axios.post('http://192.168.0.13:4000/api/v1/add_maps', form)
						.then(function(response) {
							console.log(response);
							console.log(response.data);

							if (response.data.status != 200) {
								//alert(response.data.error)
							} else {
								//alert(response.data.message);
							}
						})
						.catch(function(error) {
							alert('서버에 오류가 발생해 일시적으로 로그인에 실패했습니다. 나중에 다시 시도해 주십시오.')
							console.error("통신 오류: ", error);
						});
					}, function(error) {
						if (error) {
							alert('GPS 권한이 없습니다. 앱 권한을 변경해 주세요.');
							location.hash='#/error';
						}
					}, {
						enableHighAccuracy: false,
						maximumAge: 0,
						timeout: Infinity
					});
				} else {
					alert('GPS를 사용할 수 없습니다.');
				}
			}
		},
		created() {
			if ( !$cookies.isKey('token') ) {
				alert('로그인을 해주세요.');
				location.hash='#/sign-in';
			} else {
				this.getLocation();
				setInterval(() => {
					this.getLocation();
				}, 5 * 60 * 1000); // 5분에 한번씩 위치 확인
			}
		}
	}
</script>