<template>
  <div class="list-item">
    <a v-if="course.url" :href="course.url" target="_blank" class="list-item-title">
      {{ course.name }}
    </a>
    <p v-else class="list-item-title">
      {{ course.name }}
    </p>

    <div class="list-item-content">
      <a class="school" :href="course.school.url" target="_blank">
        <p>
          {{ course.school.name }}
        </p>
      </a>

      <a v-if="course.professor" class="professor before-point" :href="course.professor.url" target="_blank">{{ course.professor.name }}</a>

      <a v-if="course.certificate" class="link-certificado before-point" :href="course.certificate.url" target="_blank">Ver Certificado</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.list-item{
  padding: 15px 30px;
  margin-top: 15px;
  display: flex;
  flex-flow: column nowrap;
}

.list-item-content{
  margin-top: 5px;
}

p{
  margin: 0;
  display: inline;
}

/* REMOVER ESTILOS DE LINKS */
.professor,
.link-certificado,
.school,
.list-item-title{
  text-decoration: none;
  color: inherit;
}

.list-item-title{
  font-weight: 500;
  font-size: 18px;
}

.list-item-content{
  font-size: 14px;
}

.school{
  color: var(--primary);
}

.link-certificado{
  font-weight: 500;
}

.before-point::before{
  content: " • ";
}
</style>
