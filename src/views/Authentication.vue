<template>
  <div class="hero-static d-flex align-items-center">
    <div class="content">
      <div class="row justify-content-center">
        <div class="col col-md-8 col-lg-6 col-xl-4">
          <div class="block block-rounded mb-0">
            <div class="block-header block-header-default">
              <h3 class="block-title">Войти</h3>
            </div>
            <div class="block-content">
              <div class="p-sm-3 px-lg-4 px-xxl-5 py-lg-5">
                <h1>Админ Панель</h1>

                <form @submit.prevent="loginOn">
                  <div class="pt-4">
                    <div class="mb-4">
                      <input
                        type="login"
                        class="form-control form-control-lg mb-2"
                        placeholder="Логин"
                        v-model="login"
                        aria-label="Login"
                      />
                    </div>
                    <div class="mb-4">
                      <div class="position-relative">
                        <input
                          :type="showPassword ? 'text' : 'password'"
                          class="form-control form-control-lg mb-2"
                          placeholder="Password"
                          v-model="password"
                          aria-label="Пароль"
                          autocomplete="on"
                          ref="passwordInput"
                        />
                        <div
                          style="width: 50px"
                          class="
                            d-flex
                            cursor-pointer
                            end-0
                            h-100
                            top-0
                            position-absolute
                          "
                          @click="showPassword = !showPassword"
                        >
                          <font-awesome-icon
                            v-if="!showPassword"
                            class="m-auto"
                            icon="fa-regular fa-eye"
                          />
                          <font-awesome-icon
                            v-if="showPassword"
                            class="m-auto"
                            icon="fa-regular fa-eye-slash"
                          />
                        </div>
                      </div>

                      <span
                        class="text-danger fw-medium fs-8"
                        aria-errormessage="Your password must be at least 5 characters long"
                        >Неверный логин или пароль</span
                      >
                    </div>
                    <label class="form-check mb-4">
                      <input type="checkbox" class="form-check-input" />
                      <span>Запоминть меня</span>
                    </label>
                  </div>

                  <div
                    @click="loginOn"
                    style="width: 100%"
                    class="btn btn-primary mb-4"
                  >
                    Войти
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/http-common.js'
export default {
  data() {
    return {
      login: null,
      password: null,
      showPassword: false,
    };
  },
  methods: {
    loginOn: function () {
      http
        .post(
          "auth/",
          JSON.stringify({
            "email": `${this.login}`,
            "password": `${this.password}`,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response.data.token);
        }).catch(error => {
          console.log(error);
          
        })
    },
  },
};
</script>
