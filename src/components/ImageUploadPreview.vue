<template>
  <div class="drop-grid">
    <div class="box-images" v-for="image of arrayFiles" :key="image">
      <picture>
        <img class="box-images__images box-images__images--square" :src="image" />
      </picture>
      <div class="box-images__coverage">
        <div @click="deleteImage(image)" class="box-images__inner-icon">
          <font-awesome-icon width="30px" :icon="['fas', 'xmark']" />
        </div>
      </div>
    </div>
    <label
      class="drop-zone mb-0"
      :class="[paramDeterm ? ' opacity-25 cursor-default' : '']"
    >
      <input
        type="file"
        class="d-none"
        accept="image/*"
        @change="changeImages"
        :multiple="!uploadConfig.onceImage"
        :disabled="paramDeterm"
      />
      <div
        v-if="!loading"
        class="drop-zone__sign fs-3 text-muted text-center"
      >{{ !arrayFiles.length ? "Перетащите или нажмите" : '+'}}</div>
      <font-awesome-icon v-if="loading" :icon="['fas', 'circle-notch']" class="fa-spin" />
    </label>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    uploadConfig: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      arrayFiles: [],
      files: null,
      unraw: null,
      loading: false
    }
  },
  methods: {
    changeImages (e) {
      this.loading = !this.loading
      this.unraw = e.target.files
      console.log(this.unraw);
      
      this.files = Array.from(e.target.files)
      this.files.forEach((file) => {
        console.log(file);
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (event) => {
          this.arrayFiles.push(event.target.result)
          this.arrayFiles.filter((item, index) => {
            return this.arrayFiles.indexOf(item) === index
          })
        }
      })
      this.loading = !this.loading
    },
    
    
    deleteImage (images) {
      this.arrayFiles.splice(this.arrayFiles.indexOf(images), 1)
    }
  },
  computed: {
    paramDeterm: function () {
      this.arrayFiles.length && this.uploadConfig.onceImage ? true : false
      
    }
  }
}
</script>
