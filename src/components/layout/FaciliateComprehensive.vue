<template>
  <section>
    <div class="mb-4 d-flex flex-row justify-space-between">
      <div class="px-0 v-col-2">
        <h2 style="font-weight: 600">Chuyên khoa</h2>
      </div>
      <div class="px-0 v-col-2">
        <router-link class="text-decoration-none" to="/">
          <v-btn
          size="x-large"
          class="bg-teal-lighten-5 text-cyan-accent-4 text-capitalize"
          block
          >Xem thêm</v-btn
        >
        </router-link>
      </div>
    </div>
    <div class="carousel">
      <v-sheet max-width="1200">
        <v-slide-group
          v-model="model"
          selected-class="bg-primary"
          mandatory
          show-arrows
        >
          <v-slide-group-item
            v-for="n in 15"
            :key="n"
            
          >
            <v-card
              class="ma-4"
              color="white"
              height="350"
              width="323"
              @click="toggle"
            >
              <div class="d-flex fill-height align-center justify-center">
                
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </div>
  </section>
  <div class="space"></div>
  <section>
    <div class="mb-4 d-flex flex-row justify-space-between">
      <div class="px-0 v-col-2">
        <h2 style="font-weight: 600">Cơ sở y tế</h2>
      </div>
      <div class="px-0 v-col-2">
        <router-link class="text-decoration-none" to="/">
          <v-btn
          size="x-large"
          class="bg-teal-lighten-5 text-cyan-accent-4 text-capitalize"
          block
          >Xem thêm</v-btn
        >
        </router-link>
      </div>
    </div>
    <div class="carousel">
      <div max-width="1200">
        <v-slide-group
          v-model="model"
          selected-class="bg-primary"
          mandatory
          show-arrows
        >
          <v-slide-group-item
            v-for="n in 15"
            :key="n"
            
          >
            <v-card
              class="ma-4"
              color="white"
              height="350"
              width="323"
              @click="toggle"
            >
              <div class="d-flex fill-height align-center justify-center">
                
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    model: null,
  }),
};
</script>

<style scoped>
.ma-4 {
  border: 2px solid #ccc;
  border-radius: 20px;
}

.space {
  height: 50px;
}
</style>
