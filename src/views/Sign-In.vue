<!-- 
	This is the sign in page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template>
	<div class="sign-in">
		
		<a-row type="flex" :gutter="[24,24]" justify="space-around" align="middle">

			<!-- Sign In Form Column -->
			<a-col :span="24" :md="12" :lg="{span: 12, offset: 0}" :xl="{span: 6, offset: 2}" class="col-form">
				<h1 class="mb-15">로그인</h1>
				<h5 class="font-regular text-muted">보호 대상자 아이디와 보호자 비밀번호를 입력하여 로그인 하세요.</h5>

				<!-- Sign In Form -->
				<a-form
					id="components-form-demo-normal-login"
					:form="form"
					class="login-form"
					@submit="handleSubmit"
					:hideRequiredMark="true"
				>
					<a-form-item class="mb-10" label="ID" :colon="false">
						<a-input 
						v-decorator="[
						'id',
						{ rules: [{ required: true, message: 'Please input your ID!' }] },
						]" placeholder="보호 대상자 아이디" />
					</a-form-item>
					<a-form-item class="mb-5" label="Password" :colon="false">
						<a-input
						v-decorator="[
						'password',
						{ rules: [{ required: true, message: 'Please input your password!' }] },
						]" type="password" placeholder="보호자 비밀번호" />
					</a-form-item>
					<a-form-item>
						<a-button type="primary" block html-type="submit" class="login-form-button">
							로그인
						</a-button>
					</a-form-item>
				</a-form>
				<!-- / Sign In Form -->
			</a-col>
			<!-- / Sign In Form Column -->

			<!-- Sign In Image Column -->
			<a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img">
				<img src="images/img-signin.jpg" alt="">
			</a-col>
			<!-- Sign In Image Column -->

		</a-row>
		
	</div>
</template>

<script>

	import axios from 'axios'

	export default ({
		data() {
			return {
				// Binded model property for "Sign In Form" switch button for "Remember Me" .
				rememberMe: true,
			}
		},
		beforeCreate() {
			// Creates the form and adds to it component's "form" property.
			this.form = this.$form.createForm(this, { name: 'normal_login' });
		},
		created() {
			if ($cookies.isKey('token')) {
				alert('이미 로그인 되어 있습니다.');
				location.hash='#/manage';
			}
		},
		methods: {
			// Handles input validation after submission.
			handleSubmit(e) {
				e.preventDefault();
				this.form.validateFields((err, values) => {
					if ( !err ) {
						// console.log('Received values of form: ', values) ;
						let form = new FormData()
						form.append('id', values.id)
						form.append('password',values.password)

						axios.post('http://192.168.0.13:4000/api/v1/child_signin', form)
						.then(function(response) {
							console.log(response);
							console.log(response.data);

							if (response.data.status != 200) {
								alert(response.data.error)
							} else {
								document.cookie = 'token=' + response.data.token;
								alert(response.data.message);
								location.hash='#/main';
							}
						})
						.catch(function(error) {
							alert('서버에 오류가 발생해 일시적으로 로그인에 실패했습니다. 나중에 다시 시도해 주십시오.')
							console.error("통신 오류: ", error);
						});
					}
				});
			},
		},
	})

</script>

<style lang="scss">
	body {
		background-color: #ffffff;
	}
</style>