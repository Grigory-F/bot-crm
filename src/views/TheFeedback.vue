<template>
  <div class="content">
    <h1>Фидбеки</h1>
    <div class="row gy-3">
      <div v-for="(item, index) of data" :key="index" class="col-lg-6">
        <div class="p-3 p-md-4 bg-white h-100 rounded-1">
          <div class="h-100 d-flex flex-column justify-content-between">
            <div>
              <div class="d-flex justify-content-between align-items-center">
                <router-link
                  :to="`/feedback/${item.id}`"
                  class="fs-4 fw-medium d-block"
                  style="
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  "
                  >{{ item.question }}</router-link
                >
                <span class="fw-bold text-muted fs-5">#{{ item.id }}</span>
              </div>
              <div class="d-flex gap-20">
                <div>
                  <span class="text-muted fs-8">Откуда</span>
                  <p class="fw-semi-bold mb-0 text-uppercase">
                    {{ item.client_type }}
                  </p>
                </div>
                <div>
                  <span class="text-muted fs-8">Дата</span>
                  <p class="fw-semi-bold mb-0">
                    {{ formattingData(item.created_at) }}
                  </p>
                </div>
                <div>
                  <span class="text-muted fs-8">Статус</span>
                  <p class="fw-semi-bold mb-0 text-danger">{{ item.status }}</p>
                </div>
              </div>
              <div v-if="item.answer">
                <span class="text-muted fs-8">Ответ</span>
                <p class="text-muted">{{ item.answer }}</p>
              </div>
            </div>
            <div
              class="
                d-flex
                gap-5
                mt-5
                flex-column flex-md-row
                justify-content-between
              "
            >
              <router-link
                :to="`/feedback/${item.id}`"
                class="btn btn-primary wp-md-auto wp-100"
                tag="button"
                :disabled="selectStatus(item.status)"
                >Перейти</router-link
              >
              <div class="d-flex gap-5">
                <button
                :disabled="selectStatus(item.status)"
                  class="btn btn-danger wp-50 wp-md-auto"
                  @click="editOne(joinPropert(item, 'closed'))"
                >
                  Без ответа
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      www: "waiting",
    };
  },
  methods: {
    ...mapActions("feedback", ["editOne"]),
    formattingData(dateUnrow) {
      return dateUnrow.split(" ").splice(-2, 1).join().toLocaleString("ru-RU");
    },
    selectStatus(statusFeedback) {
      if (statusFeedback == "answered" || statusFeedback == "closed") {
        return true;
      } 
      return false;
    },
    joinPropert(item) {
      item.status = "closed";
      return item;
    },
  },
  computed: {
    ...mapState("feedback", ["data"]),
  },
};
</script>

