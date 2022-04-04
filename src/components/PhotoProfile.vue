<template>
  <div id="pp" width="{{taille}}" height="{{taille}}">
  </div>
</template>

<script>
export default {
  name: "PhotoProfile",
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
#pp {
  background-image: url(../assets/me.jpg);
  background-size: cover;
  background-repeat: none;
  background-position-x: 50%;
    border-radius: 50%;
}

.petit{
  width:40px;
  height: 40px;
}
.moyen{
  width:50px;
  height: 50px;
}
</style>
