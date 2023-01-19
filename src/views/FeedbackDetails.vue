<template>
  <div class="content">
    <h2>{{ expandData.question }}</h2>
    <div>
      <div class="d-flex gap-20">
        <div>
          <span class="text-muted fs-8">Откуда</span>
          <p class="fw-semi-bold mb-0 text-uppercase">
            {{ expandData.client_type }}
          </p>
        </div>
        <div>
          <span class="text-muted fs-8">Дата</span>
          <p class="fw-semi-bold mb-0">{{ expandData.created_at }}</p>
        </div>
        <div>
          <span class="text-muted fs-8">Статус</span>
          <p class="fw-semi-bold mb-0 text-danger">{{ expandData.status }}</p>
        </div>
      </div>
      <div v-if="expandData.status == 'waiting'">
        <textarea
          v-model="fillAnswer.textAnswer"
          @input="emptyField = true"
          placeholder="Напишите ответ..."
          class="d-block text-reset form-control bg-white mt-3"
        ></textarea>
        <span class="text-danger" :class="[emptyField ? 'd-none' : 'd-inline']"
          >Заполнение поля ответа обязательно!</span
        >
        <div
          class="
            d-flex
            gap-5
            mt-3
            flex-column flex-md-row
            justify-content-between
          "
        >
          <button
            class="btn btn-primary wp-auto wp-md-50"
            @click="pushData"
          >
            Отетить
          </button>
        </div>
      </div>
      <div v-if="expandData.answer">
        <span class="text-muted fs-8">Ответ</span>
          <p class="fw-semi-bold mb-0">
            {{ expandData.answer }}
          </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      emptyField: true,
      expandData: "",
      fillAnswer: {
        textAnswer: "",
      },
    };
  },
  methods: {
    ...mapActions("feedback", ["editOne", "requestOne"]),
    joinPropert(item) {
      item.status = "answered";
      item.answer = this.fillAnswer.textAnswer;
      return item;
    },
    pushData() {
      if (this.fillAnswer.textAnswer) {
        this.editOne(this.joinPropert(this.expandData))
      } else {
        this.emptyField = false
      }
    },
  },
  computed: {
    ...mapState("feedback", ["data"]),
  },
  mounted() {
    this.requestOne(this.$route.params.id);
    let indexed = this.data.findIndex((x) => x.id == this.$route.params.id);
    this.expandData = this.data[indexed];
  },
};
</script>

<style>
</style>