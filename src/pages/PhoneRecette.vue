<template>
  <div id="fond">
    <div class="pad">
      <div id="HEADER">
        <router-link to="/"
          ><img src="../assets/return.svg" alt="fleche retout" class="return"
        /></router-link>
        <img src="../assets/LOGO.svg" alt="Logo de Food & Drink's" />
        <PhotoProfile :class="{ petit: isActive }" />
      </div>
    </div>
  </div>
</template>

<script>
import PhotoProfile from "../components/PhotoProfile.vue";

export default {
  name: "PhoneRecette",
  components: {
    PhotoProfile,
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
  justify-content: space-between;
  width: 60%;
  margin-left: auto;
  margin-bottom: 25px;
}

#HEADER img {
  width: 75px;
  height: auto;
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
  margin-bottom: 30px;
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
