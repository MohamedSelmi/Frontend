<template>
  <card-item v-for="item in items" :offer="item" :key="item.id" />
</template>

<script>
import axios from "axios";
import CardItem from '@/components/CardItem.vue'

export default {
  components: { CardItem },
  data: () => ({
    items: [
      {
        name: "African Elephant",
        species: "Loxodonta africana",
        diet: "Herbivore",
        habitat: "Savanna, Forests",
      },
    ],
    //
  }),
  mounted() {
    console.log(`the component is now mounted.`);
    this.loadOffers();
  },
  methods: {
    async loadOffers() {
      axios
        .get("http://localhost:8000/api/offer")
        .then((response) => {
          // Handle the successful response here
          console.log("Offers:", response.data);
          this.items = response.data;
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error:", error);
        });
    },
  },
};
</script>
