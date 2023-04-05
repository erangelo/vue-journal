<template>
<div>
    <NavBar />
    <div class="d-flex">
        <div class="col-4"><EnteryList/></div>
        <div class="col">
            <router-view/>
        </div>
    </div>
</div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
    components:{
        NavBar:defineAsyncComponent(()=>import('../components/NavBar1.vue')),
        EnteryList:defineAsyncComponent(()=>import('../components/EntryList.vue'))
    }   
}
</script>
