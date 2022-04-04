<template>
  <div id="fond">
    <div class="pad">
      <div id="HEADER">
        <img src="../assets/LOGO.svg" alt="Logo de Food & Drink's" />
        <PhotoProfile :class="{ petit: isActive }" />
      </div>
      <div id="BONJOUR">Bonjour {{ nom }}</div>
      <div id="SUB">Qu'allez vous cuisiner</div>
      <div id="SEARCH">Tiramisu</div>
    </div>
    <div class="gauchepad">
      <h2>En tendance</h2>
      <div class="carouselle">
        <CardCarouselle :class="{ mainimage: isActive }"/>
        <CardCarouselle :class="{ mainimage: isActive }"/>
      </div>
    </div>

    <div class="pad">
      <h2>Selon vos envis</h2>
      <div class="carouselle">
        <CardCategorie />
        <CardCategorie />
        <CardCategorie />
      </div>

      <h2>Vos favoris</h2>
      <div>
        <CardFavoris />
        <CardFavoris />
      </div>
    </div>
  </div>
</template>

<script>
import PhotoProfile from "../components/PhotoProfile.vue";
import CardCarouselle from "../components/CardCarouselle.vue";
import CardCategorie from "../components/CardCategorie.vue";
import CardFavoris from "../components/CardFavoris.vue";

export default {
  name: "PhoneMain",
  components: {
    PhotoProfile,
    CardCarouselle,
    CardCategorie,
    CardFavoris,
  },
  props: {
    nom: {
      type: String,
      default: "Evan",
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
* {
  color: white;
}

a {
  text-decoration: none;
}

#fond {
  background-color: #101010;
  min-height: 100vh;
}

.pad {
  padding: 25px;
}

.gauchepad {
  padding-left: 25px;
}

#HEADER {
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-bottom: 25px;
}

#HEADER img {
  width: 75px;
  height: auto;
  margin: 0 auto 0 auto;
  padding-left:11px;
}

#BONJOUR {
  font-size: 20px;
  font-weight: 700;
}
#SUB {
  font-size: 12;
  font-weight: 400;
  margin-bottom: 10px;
}
#SEARCH {
  padding: 15px;
  background-color: #dedede;
  width: 90%;
  color: #575757;
  border-radius: 25px;
  font-size: 12px;
  font-weight: 400;
  font-style: italic;
}

h2 {
  font-size: 12px;
  font-weight: 700;
}

.carouselle {
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
