<template>
    <div class="row flex position-relative">
      <div class="col-lg-1 col-md-2 d-none d-md-flex">
        <SideBarComponent/>
      </div>
      <div class="col-lg-6 col-md-10 col-12">
        <div :class="['content', this.sideOpened ? `sideOpened` : '']">
          <div class="container">
            <HeaderComponent/>
            <StoriesBarComponent/>
            <TopArtistsComponent @toggleProfile="toggle"></TopArtistsComponent>
            <FeedComponent/>
          </div>
        </div>
      </div>
      <div class="col-lg-1">&nbsp;</div>
      <div class="col-lg-4 d-none d-lg-block">
        <SideProfileComponent></SideProfileComponent>
      </div>
    </div>
    <SideBarComponent :additional="true"></SideBarComponent>
</template>

<script>
import StoriesBarComponent from "@/components/StoriesBarComponent";
import TopArtistsComponent from "@/components/TopArtistsComponent";
import FeedComponent from "@/components/FeedComponent";
import HeaderComponent from "@/components/HeaderComponent";
import SideBarComponent from "@/components/SideBarComponent";
import SideProfileComponent from "@/components/SideProfileComponent.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FeedComponent,
    StoriesBarComponent,
    TopArtistsComponent,
    SideBarComponent,
    SideProfileComponent
  },
  data(){
    return {
      sideOpened: false
    }
  },
  methods: {
    toggle(data){
      console.log(`toggle recieved`)
      this.sideOpened = data
    }
  }
}
</script>

<style lang="scss">
html, body{
  margin: 0;
  width: 100%;
  height: 100%;
  background: #eaeaea;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #021a22;
  //display: flex;
  //flex-direction: row;
  //justify-content: space-between;
  width: 100%;
}
.content{
  display: flex;
  transition: all 1s ease-in;
  position: relative;
  width: 100%;
}
.sticky{
  position: -webkit-sticky; /* for Safari */
  position: sticky;
  top: 0;
  align-self: flex-start; /* <-- this is the fix */
}
.sideOpened{
  margin-left: 4rem;
}
.container{
  width: 100%;
  margin: 0 auto;
  display: block;
  &__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > *{
      display: inline-flex;
    }
  }
}
</style>
