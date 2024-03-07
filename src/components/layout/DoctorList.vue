<template>
  <section>
    <div>
      <img class="w-100" src="../../img/background-light-blue.png" alt="" />
    </div>
    <v-container>
      <div class="mb-4 d-flex flex-row justify-space-between">
        <div class="px-0 v-col-2">
          <h2 style="font-weight: 600">Bác sĩ nổi bật</h2>
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
              width="320"
              @click="toggle"
            >
              <div class="d-flex fill-height align-center justify-center">
                
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </div>
    </div>
    </v-container>
  </section>
</template>

<style scoped>
.w-100 {
  height: 530px;
  object-fit: cover;
}

section {
  position: relative;
}

.v-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
</style>
