<template>
  <div class="content">
    <h2>{{expandData.question}}</h2>
    <div>
      <div class="d-flex gap-20">
        <div>
          <span class="text-muted fs-8">Откуда</span>
          <p class="fw-semi-bold mb-0 text-uppercase">{{expandData.client_type}}</p>
        </div>
        <div>
          <span class="text-muted fs-8">Дата</span>
          <p class="fw-semi-bold mb-0">{{expandData.created_at}}</p>
        </div>
        <div>
          <span class="text-muted fs-8">Статус</span>
          <p class="fw-semi-bold mb-0 text-danger">{{expandData.status}}</p>
        </div>
      </div>
      <textarea
        v-model="fillAnswer.textAnswer"
        placeholder="Напишите ответ..."
        class="d-block text-reset form-control bg-white mt-3"
      ></textarea>
      <span
        class="text-danger"
        :class="[emptyField ? 'd-none' : 'd-inline']"
      >Заполнение поля ответа обязательно!</span>
      <div class="d-flex gap-5 mt-3 flex-column flex-md-row justify-content-between">
        <button class="btn btn-primary wp-auto wp-md-50" @click="editOne(joinPropert(expandData))">Отетить</button>
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
    joinPropert(item) {
      item.status = "answered";
      item.answer = this.fillAnswer.textAnswer
      return item;
    },
    ...mapActions("feedback", ["editOne"]),
  },
  computed: {
    ...mapState("feedback", ["data"]),
  },
  mounted() {
    let indexed = this.data.findIndex((x) => x.id == this.$route.params.id);
    this.expandData = this.data[indexed];
  },
};
</script>

<style>
</style>