<template>
  <div class="boite">
    <div class="imageavant">
      <h3>Gourmand</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoCategorie",
  props: {
    taille: {
      type: String,
      default: "40px",
    },
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style scoped>
.boite {
  margin: 0 20px 0 0;
}

.imageavant {
  margin-bottom: 15px;
  border-radius: 10px;
  width: 100px;
  min-width: 100px;
  height: 100px;
  background-image: linear-gradient(rgba(0, 0, 0, 0),rgb(10, 10, 10, 0.8)),
    url(../assets/choco.png);
  background-size: cover;
}

h3 {
  padding: 80% 0 0 5%;
  color: white;
  font-size: 12px;
  font-weight: 700;
}
</style>
