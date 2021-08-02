<template>
  <main>
    <img class="astronauta-erro" src="~/assets/images/astronautas/astronauta-erro.png" alt="Astronauta erro">
    <div class="content">
      <h1>404 - Página não encontrada!</h1>
      <p>A página na qual você está procurando não existe!</p>
      <Button class="button-home" color="var(--primary)" to="/">
        Ir para página inicial
      </Button>
    </div>
  </main>
</template>

<script>
import Button from '../components/Button.vue'
export default {
  components: { Button }
}
</script>

<style scoped>
main{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 50px;
  height: calc(100vh - 65px);
  box-sizing: border-box;
}

.astronauta-erro{
  height: 60vh;
}

.content{
  min-height: 60vh;
  max-width: 500px;
  margin-left: 50px;
}

.button-home{
  margin-top: 35px;
}
</style>
