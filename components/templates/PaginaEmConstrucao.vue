<template>
  <div class="wrapper">
    <img class="astronauta-trabalhando" src="~/assets/images/astronautas/astronauta-trabalhando.png" alt="Astronauta trabalhando">
    <div class="content">
      <h1>Página em construção!</h1>
      <p>Lamentamos informar mas essa página está em construção! Volte aqui mais tarde para ver ela pronta!</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 65px);
}

.astronauta-trabalhando{
  height: 60vh;
}

.content{
  height: 60vh;
  max-width: 500px;
}
</style>
