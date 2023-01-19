<template>
  <div class="content">
    <h1>Рассылка</h1>
    <div class="row">
      <div class="col-xl-6">
        <div class="d-flex flex-column gap-30px">
          <div class="d-flex flex-column mb-5">
            <span class="text-muted">Сообщение</span>
            <textarea
              v-model="dataToSend.mail"
              class="d-block text-reset form-control"
            ></textarea>
          </div>
          <div class="mb-5">
            <span class="text-muted">Картинки</span>
            <ImageUploadPreview
              :uploadConfig="uploadConfig"
            ></ImageUploadPreview>
          </div>
          <div class="mb-5">
            <span class="text-muted">Мессенджер</span>
            <div class="d-flex gap-10 flex-wrap">
              <input
                type="radio"
                class="btn-check"
                name="options-outlined"
                id="success-outlined-vk"
                autocomplete="off"
                value="vk"
                v-model="dataToSend.whereTo"
              />
              <label class="btn btn-outline-primary" for="success-outlined-vk"
                >ВКонтакте</label
              >

              <input
                type="radio"
                class="btn-check"
                name="options-outlined"
                id="success-outlined-tg"
                autocomplete="off"
                value="tg"
                v-model="dataToSend.whereTo"
              />
              <label class="btn btn-outline-primary" for="success-outlined-tg"
                >Телеграмм</label
              >

              <input
                type="radio"
                class="btn-check"
                name="options-outlined"
                id="danger-outlined"
                autocomplete="off"
                value="vk, tg"
                v-model="dataToSend.whereTo"
                checked
              />
              <label class="btn btn-outline-primary" for="danger-outlined"
                >ВКонтакте и Телеграмм</label
              >
            </div>
          </div>
          <div class="mb-5 d-flex flex-column flex-md-row gap-10">
            <button
              title="Отправить всем подписанным на бота"
              class="btn btn-primary"
            >
              Отправить всем
            </button>
            <button
              title="Отправить себе для превью"
              class="btn btn-outline-muted"
              @click="checkMethod"
            >
              <font-awesome-icon width="30px" :icon="['fas', 'flask-vial']" />
            </button>
          </div>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="table-responsive">
          <table class="table table-borderless table-striped table-responsive">
            <thead>
              <tr class="text-muted">
                <th scope="col">ID</th>
                <th scope="col">Отправитель</th>
                <th scope="col">Рассылка</th>
                <th scope="col">Время</th>
                <th scope="col">Подробнее</th>
              </tr>
            </thead>
            <tbody class="table-striped">
              <tr class>
                <td class="p-4"></td>
                <td class="p-4"></td>
                <td class="p-4"></td>
                <td class="p-4"></td>
                <td class="p-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageUploadPreview from "@/components/ImageUploadPreview.vue";
export default {
  components: { ImageUploadPreview },
  data() {
    return {
      uploadConfig: {
        onceImage: false,
      },

      dataToSend: {
        mail: null,
        whereTo: null,
        images: null,
        isTest: null,
      },
    };
  },
  methods: {
    checkMethod() {
      console.log(this.dataToSend, this.dataToSend.whereTo.split(","));
    },
  },
};
</script>
