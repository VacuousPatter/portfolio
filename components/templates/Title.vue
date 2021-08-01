<template>
  <div>
    <h2>{{ title }}</h2>
    <hr>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
div{
  width: max-content;
  margin: 0 auto;
}

h2{
  text-align: center;
  font-size: 36px;
  margin-bottom: 15px;
}

hr{
  border: none;
  height: 3px;
  width: calc(100% - 50px);
  background: var(--primary);
  border-radius: 999rem;
}
</style>
