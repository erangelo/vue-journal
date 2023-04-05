
<template>
<div>
  <div class="entry-title d-flex justify-content-betwenn p-2">
      <div>
          <span class="text-success fs-3 fw-bold">15</span>
          <span class="mx-1 fs-3">Julio</span>
          <span class="mx-2 fs-3 fw-light">2021, jueves</span>
      </div>

      <div>
          <button class="btn btn-danger mx-2">
              Borrar
              <i class="fa fa-trash-alt"></i>
          </button>
          <button class="btn btn-primary">
              Subir foto
              <i class="fa fa-upload"></i>
          </button>
      </div>

  </div>

  <hr>
  <div class="d-flex flex-column px-3 h75">
      <textarea name="" id="" cols="30" rows="10" placeholder="que sucedio hoy?"></textarea>

  </div>

  <Fab icon="fa-save"/>
  <img class="img-thumbnail" src="https://www.robertlandscapes.com/wp-content/uploads/2022/09/Jonathan-Robert-Landscapes_Installing-A-Fire-Pit-In-Your-Backyard.jpg" alt="entry-picture"/>
</div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
 components:{
     Fab: defineAsyncComponent(()=> import('../components/FabAddCom.vue'))
 }
}
</script>

<style lang="scss" scoped>
    textarea{
        border:none;
        font-size: 20px;
        height: 100%;

        &:focus{
            outline:none;
        }
    }

    img{
        bottom:150px;
        box-shadow: 0px 5px 10px rgb($color:#000000, $alpha:0.2);
        position:fixed;
        right:20px;
        width:200px;
    }
</style>