<template>
  <v-layout>
    <v-app-bar class="k1" elevation="15" color="#684b06" ass="bar">
      <v-container>
        <v-row>
          <v-col
            cols="4"
            sm="4"
            lg="4"
            md="4"
            class="text-h5 font-weight-bold"
            id="hi"
            >GO Discover</v-col
          >
          <v-col cols="4" sm="4" lg="4" md="4" class="font-weight-bold" id="hi">
            <router-link class="nbkj" to="/faq">
              <div class="mlk">FAQ</div>
            </router-link>
          </v-col>
          <v-col
            cols="4"
            sm="4"
            lg="4"
            md="4"
            class="text-h5 font-weight-bold"
            id="ho"
            >Carpintroni <v-icon>mdi-home</v-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </v-layout>
</template>

<style>
#hi {
  color: black;
}

.mlk {
  color: black;
}
.nbkj {
  text-decoration: none;
}

#ho {
  color: #a5b3ac;
}
</style>
