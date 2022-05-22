<template>
  <div id="fond">
    <router-link to="/"
      ><img src="../assets/return.svg" alt="fleche retout" class="return"
    /><div class="cacher" style="color:white; padding:0 0 0 15px">Revenir en arrière</div></router-link>
    <div class="brand">
      <h1>Food & Drink's</h1>
      <img src="../assets/LOGO.svg" alt="Logo de Food & Drink's" />
    </div>
     <div class="cacher blabla">Se régaler sans culpabiliser</div>
    <div id="interface">
      <h2>Se régaler sans culpabiliser</h2>
      <input
        class="first"
        type="text"
        placeholder="Adresse e-mail ou nom d'utilisateur"
      />
      <input type="text" placeholder="Mot de passe" />
      <div class="memo">
        Mémoriser mon choix
        <div>
          <!-- On/Off -->
          <div></div>
        </div>
      </div>
      <router-link to="/phonemain" class="orange">CONNEXION</router-link>
      <div class="trait">
        <hr />
        Ou
        <hr />
      </div>
      <div id="RS">
        <img src="../assets/GOOGLE.svg" alt="Google logo" />
        <img src="../assets/FB.svg" alt="Facebook logo" />
        <img src="../assets/TWITTER.svg" alt="Twitter logo" />
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
h1,
h2 {
  color: white;
  font-weight: 700;
  margin: 0px;
}
.cacher{
  display: none;
}
h2 {
  margin-bottom: 50px;
  font-size: 20px;
}

#fond {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(
      0deg,
      rgb(0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url("../assets/burger.jpg");
  background-size: auto;
  background-repeat: repeat-x;
  background-position-x: 24%;
}

.return {
  margin: 50px 0 0 25px;
}

#RS{
  width: 50%;
  display:flex;
  justify-content: space-between;
}

.brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
}

#interface {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  text-decoration: none;
  text-align: center;
  padding: 10px 0 10px 0;
  width: 295px;
  border-radius: 25px;
  font-weight: 700;
  font-size: 18px;
}

.memo {
  margin: 10px;
  font-size: 12px;
  color: white;
}

.first {
  margin-bottom: 15px;
}

.orange {
  background: #ec9631;
  color: white;
}

::placeholder {
  color: white;
}

input {
  padding: 10px 0 10px 20px;
  width: 275px;
  border-radius: 25px;
  border: none;
  font-weight: 500;
  font-size: 12px;
  background-color: #555555;
}

hr {
  margin: 0 10px 0 10px;
  width: 110px;
  height: 1px;
  border: none;
  background-color: white;
}

.trait {
  margin: 15px;
  display: flex;
  color: white;
  font-size: 12px;
  align-items: center;
}



@media screen and (min-width: 1200px){
h1,
h2 {
  color: white;
  font-weight: 700;
  margin: 0px;
}

h2 {
display: none;
}

#fond {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(
      0deg,
      rgb(0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url("../assets/back.png");
  background-size: cover;
  background-repeat: no-repeat;
}


.brand {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
}

h1{
  font-size: 90px;
}

.cacher{
  display:inherit;
}

.blabla{
   color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
  margin-left:150px;
}

.return {
  margin: 50px 0 0 25px;
}

#RS{
  width: 25%;
  display:flex;
  justify-content: space-between;
}



.orange {
  background: #ec9631;
  color: white;
  padding: 20px 0 20px 20px;
  width: 500px;
}

input {
  padding: 20px 0 20px 20px;
  width: 500px;
  border-radius: 25px;
  border: none;
  font-weight: 500;
  font-size: 12px;
  background-color: #555555;
}


}

</style>
