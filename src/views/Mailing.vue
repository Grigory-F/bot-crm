<template>
  <div class="content">
    <h1>Рассылка</h1>
    <div class="row">
      <div class="col-12">
        <div class="d-flex flex-column" style="max-width: 900px;">
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
      <div class="col">
        <div class="table-responsive">
          <table class="table table-borderless table-striped table-responsive">
            <thead>
              <tr class="text-muted">
                <th scope="col">ID</th>
                <th scope="col">Отправитель</th>
                <th scope="col">Платформы</th>
                <th scope="col">Время</th>
                <th scope="col">Подробнее</th>
              </tr>
            </thead>
            <tbody class="table-striped">
              <tr v-for="item in fetchData" :key="item.id">
                <td class="p-4">{{ item.id }}</td>
                <td class="p-4">{{ item.user.first_name + " " + item.user.last_name }}</td>
                <td class="p-4">{{ joinPlatforms(item.is_tg, item.is_vk) }}</td>
                <td class="p-4">{{ item.created_at }}</td>
                <td class="p-4">{{ item.id }}</td>
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
import MailingService from "@/api/MailingService";
export default {
  components: { ImageUploadPreview },
  data() {
    return {
      uploadConfig: {
        onceImage: false,
      },
      fetchData: null,
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
    joinPlatforms(is_tg, is_vk) {
      if (is_tg && is_vk) {
        return 'TG, VK'
      } else if(is_tg) {
        return 'TG'
      } else {
        return 'VK'
      }
    }
  },
  computed: {
    /* joinPlatforms(is_tg, is_vk) {
      return is_tg
    } */
  },
  mounted() {
    MailingService.getMail(10, 0).then((data) => {
      this.fetchData = data.data.result;
      console.log(this.fetchData[0].is_tg);
      
    });
  },
};
</script>
