<template>
  <section>
    <Title title="Sobre Mim" />

    <div class="content">
      <div class="picture">
        <img src="~/assets/images/eu-sobre-mim.png" alt="Foto do Maycon">
      </div>
      <div class="about-me">
        <article>
          <h3>
            Olá, tudo bem?
          </h3>
          <p>
            Olá! Me chamo Maycon e gosto de criar coisas para a internet, principalmente websites.
            Meu interesse por desenvolvimento WEB começou em 2018 quando eu precisava de um site para um chatbot do discord que eu tinha desenvolvido, e desde então eu venho me aprimorando.
          </p>

          <p>Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:</p>

          <ul>
            <li>JavaScript (ES6+)</li>
            <li>Mysql</li>
            <li>Node.js</li>
            <li>Typescript</li>
            <li>Vue.js</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '../templates/Title.vue'

export default {
  components: { Title }
}
</script>

<style scoped>
section{
  padding: 50px 25px;
}

.content{
  margin-top: 60px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.picture > img{
  height: 500px;
}

.about-me{
  margin-left: 50px;
  max-width: 791px;
  transition: 0.3s;
}

h3{
  font-weight: bold;
  font-size: 36px;
  margin: 0px 0px 10px 0px;
}

article p{
  margin: 0px 0px 10px 0px;
}

article ul{
  margin-top: 25px;
  padding: 0px 50px;
  display: flex;
  flex-flow: row wrap;
  list-style-position: inside;
}

article ul li{
  display: list-item;
  width: 50%;
  box-sizing: border-box;
}

article ul li::marker{
  content: "> ";
  color: var(--primary);
}

@media (max-width:1050px) {
  .content{
    flex-flow: column nowrap;
    align-items: center;
  }

  .content .about-me{
    margin-left: 0;
  }
}

@media (max-width:680px) {
  article ul{
    padding: 0 25px;
  }

  article ul li{
    width: 100%;
  }
}
</style>
