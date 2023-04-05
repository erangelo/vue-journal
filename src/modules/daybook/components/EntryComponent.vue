<template>
  <div class="entry-container mb-3 ponter p-2" @click="$router.push({name:'entry',params:{id:10}})">
      <div class="entry-title d-flex">
          <span class="text-success fs-5 fw-bold">15</span>
          <span class="mx-1 fs-5">Julio</span>
          <span class="mx-2 fw-light">2021, jueves</span>

      </div>
      <div class="entry-description">
        Anim magna ut do eu cillum eu sit tempor sunt. Exercitation veniam eu est eu minim id Lorem duis nostrud ipsum minim tempor anim. Minim veniam nisi cupidatat cupidatat eiusmod incididunt et tempor nostrud nulla. Do mollit adipisicing proident aliquip ut. Non nulla excepteur incididunt do veniam veniam tempor.
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover{
    background-color: lighten($color: blue, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description{
    font-size: 12px;
  }
}
</style>