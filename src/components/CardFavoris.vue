<template>
    <div class="card">
      <div class="imageavant" 
      :style="{
          background:
            'linear-gradient(rgb(10, 10, 10, 0.8), rgba(0, 0, 0, 0)), url(' +
            reciepe.attributes.Image.data.attributes.formats.medium.url,
        }"></div>
      <div class="description">
         <div>{{ reciepe.attributes.Name }}</div>
        <div>
          Lorem ipsum dolor sit amet, volupti iure officia tenetur, similique
          exercitationem, modi, vel consequatur. Sequi facere eius saepe culpa
          quod hic minus quisquam!
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "CardFavoris",
  props: {
     reciepe: {
      type: Object,
    },
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

.card {
  margin: 0 0 15px 0;
  display: flex;
}

.imageavant {
  border-radius: 5px;
  width: 80px;
  min-width: 80px;
  height: 80px;
  background-image: linear-gradient(rgb(10, 10, 10, 0.8), rgba(0, 0, 0, 0)),
    url(../assets/bowl.png);
  background-size: cover;
}

.description {
  background-color: #dedede;
  color: #101010;
  padding: 0 10px 0 10px;
  border-radius: 5px;
  margin: 0 0 0 20px;
}

.description div:first-child {
  font-weight: 700;
  font-size: 12px;
}
.description div:last-child {
  font-weight: 300;
  font-size: 8px;
}
</style>
