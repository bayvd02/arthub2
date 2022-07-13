<template>
    <div :class="['sidebar', 'sticky', additional ? 'd-none' : '']">
        <div class="sidebar__group">
            <a class="sidebar__link" href="#">
                <img class="logo" src="../assets/logo.png" alt="">
            </a>
        </div>
        <div class="sidebar__group">   
            <a class="sidebar__link active" href="#">
                <i class="fa fa-home"></i>
            </a>
            <a class="sidebar__link" href="#">
                <i class="fa fa-bell fa-rotate-by" style="--fa-rotate-angle: 45deg;"></i>
            </a>
            <a class="sidebar__link" href="#">
                <i class="fa fa-plus"></i>
            </a>
            <a class="sidebar__link" href="#">
                <i class="fa fa-heart"></i>
            </a>
            <a class="sidebar__link" href="#">
                <i class="fa fa-user"></i>
            </a>
        </div>
        <div class="sidebar__group">
            <div class="sidebar__divider"></div>
            <a class="sidebar__link" href="#">
                <i class="fa fa-power-off" @click="showModal = true"></i>
            </a>
        </div>
    </div>
    
    <modal-component v-if="showModal" @close="showModal = false"/>
</template>


<script>
import modalComponent from "@/components/ModalComponent";

export default({
    name: "SideBarComponent",
    components: {
        modalComponent
    },
    props: ['additional'],
    data(){
        return {
            showModal: false
        }
    } 
})
</script>

<style lang="scss">
$iconWidth: 24px;
$active-color: #414FE4;
$active-bg-color: #1F1C2F;
.sidebar{
    padding: 2rem 0;
    width: 100%;
    background-color: #03030f;
    height: 100vh;
    display: flex;
    //border-radius: 0 10px 10px 0;
    border-right: 2px solid #eaeaea;
    flex-direction: column;
    justify-content: space-between;
    &__divider{
        width: 60px;
        height: 0;
        margin: 0 auto;
        border-top: 1px solid $active-bg-color;
        display: flex;
    }
    &__link{
        width: $iconWidth;
        margin: 0 auto;
        color: #524F64;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        text-decoration: none;
        &:hover{
            color: $active-color;
        }
        i{
            font-size: $iconWidth; 
            display: flex;
            align-items: center;
        }
        &.active{
            background: $active-bg-color;
            border-radius: 10px;
            color: $active-color;
        }
    }
    &__group{
        display: flex;
        flex-direction: column;
        img{
            display: block;
            width: 100%;
            height: auto;
        }
    }
}
@media (max-width: 768px) {
    .sidebar{
        flex-direction: row;
        position: absolute;
        bottom: 0;
        height: 80px;
        z-index: 3;
        display: flex !important;
        border-right: none;
        &__group{
            flex-direction: row;
            &:nth-child(2n-1){
                width: 10%;
            }
            &:nth-child(2){
                justify-content: space-between;
                width: 60%;
            }
        }
        &__link{
            width: 40px;
            height: 40px;
        }
        &__divider{
            display: none;
        }
    }
    .sticky{
        position: absolute;
    }
}
</style>