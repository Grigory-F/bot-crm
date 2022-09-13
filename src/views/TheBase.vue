<template>
  <div class="content">
    <h1>Рассылка</h1>
    <div class="row">
      <div class="col-xl-6">
        <div class="d-flex flex-column gap-30px">
          <div class="d-flex flex-column mb-5">
            <span class="text-muted">Сообщение</span>
            <!-- <input
          type="text"
          class="d-block text-reset form-control bg-transparent"
          v-model="content.subtitle"
            />-->
            <textarea v-model="textTo" class="d-block text-reset form-control bg-transparent" name id></textarea>
          </div>
          <div class="mb-5">
            <span class="text-muted">Картинки</span>
            <ImageUploadPreview :uploadConfig="uploadConfig"></ImageUploadPreview>
          </div>
          <div class="mb-5">
            <span class="text-muted">Мессенджер</span>
            <div class="d-flex gap-3 flex-wrap">
              <label class="d-block p-2 border border-dark">
                Вконтакте
                <input class="d-none" name type="checkbox" />
              </label>
              <label class="d-block p-2 border border-dark">
                Телеграм
                <input class="d-none" name type="checkbox" />
              </label>
              <label class="d-block p-2 border border-dark">
                Вконтакте и Телеграм
                <input class="d-none" name type="checkbox" />
              </label>
            </div>
          </div>
          <div class="mb-5 d-flex flex-column flex-md-row gap-md-5 gap-2">
            <button
              class="btn-lg btn-success text-white text-uppercase border-0 w-100"
            >отправить всем</button>
            <button
              class="btn-lg btn-success text-white text-uppercase border-0 w-100"
            >отправить себе</button>
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
              <tr class="">
                <td  class="p-4">{{textTo}}</td>
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
  components: {
    ImageUploadPreview,
  },

  data() {
    return {
        textTo: '',
      uploadConfig: {
        onceImage: false,
      },
    };
  },
};
</script>
