<template>
    <div>
        <div class="container__header">
            <h2>Top Photographers</h2>
            <ScrollComponent ref="scrollComponent"/>
        </div>
        <div class="card__container noselect" ref="scrollContainer" v-draggable>
            <div class="card__shadow"></div>
            <div class="card__single">
                <div class="card__single__top">
                    <div class="card__single__squared" :key="key" v-for="(img, key) in images"
                         :style="{ 'background-image': 'url(' + require('../assets/related_artists/1' + key.substr(1)) + ')' }"></div>
                </div>
                <div class="card__single__round" @click="toggleSlide"
                     :style="{'background-image': 'url(' + require('../assets/profile_images/zendaya.jpg') + ')' }"></div>
                <div class="card__single__artist">
                    <div class="card__single__artist-name">Zendaya</div>
                    <div class="card__single__artist-city">USA, California</div>
                </div>
            </div>
            <div class="card__single">
                <div class="card__single__top">
                    <div class="card__single__squared" :key="key" v-for="(img, key) in images"
                         :style="{ 'background-image': 'url(' + require('../assets/related_artists/1' + key.substr(1)) + ')' }"></div>
                </div>
                <div class="card__single__round" @click="toggleSlide"
                     :style="{'background-image': 'url(' + require('../assets/profile_images/zendaya.jpg') + ')' }"></div>
                <div class="card__single__artist">
                    <div class="card__single__artist-name">Zendaya</div>
                    <div class="card__single__artist-city">USA, California</div>
                </div>
            </div>
            <div class="card__single">
                <div class="card__single__top">
                    <div class="card__single__squared" :key="key" v-for="(img, key) in images"
                         :style="{ 'background-image': 'url(' + require('../assets/related_artists/1' + key.substr(1)) + ')' }"></div>
                </div>
                <div class="card__single__round" @click="toggleSlide"
                     :style="{'background-image': 'url(' + require('../assets/profile_images/zendaya.jpg') + ')' }"></div>
                <div class="card__single__artist">
                    <div class="card__single__artist-name">Zendaya</div>
                    <div class="card__single__artist-city">USA, California</div>
                </div>
            </div>
            <div class="card__single">
                <div class="card__single__top">
                    <div class="card__single__squared" :key="key" v-for="(img, key) in images"
                         :style="{ 'background-image': 'url(' + require('../assets/related_artists/1' + key.substr(1)) + ')' }"></div>
                </div>
                <div class="card__single__round" @click="toggleSlide"
                     :style="{'background-image': 'url(' + require('../assets/profile_images/zendaya.jpg') + ')' }"></div>
                <div class="card__single__artist">
                    <div class="card__single__artist-name">Zendaya</div>
                    <div class="card__single__artist-city">USA, California</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ScrollComponent from "./ScrollComponent";

export default {
    name: "TopArtistsComponent",
    components: {
        ScrollComponent
    },
    data() {
        return {
            imageDir: "../assets/related_artists/1",
            images: {},
            slide: false
        }
    },
    mounted() {
        this.importAll(require.context("../assets/related_artists/1", true, /\.jpg$/));
    },
    methods: {
        importAll(r) {
            var imgs = {}
            r.keys().forEach(key => (
                imgs[key] = r(key)
            ))
            this.images = imgs;
        },
        updateScroll() {
            this.$refs.ScrollComponent.checkScroll();
        },
        toggleSlide(){ 
            console.log(`clicked on profile pic`+this.slide)
            this.slide = !(this.slide)
            this.$emit('toggleProfile', this.slide);
            console.log(`clicked on profile pic`+this.slide)
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;600;700;900&display=swap');

.smoothScroll{
    scroll-behavior: smooth;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.card {
    &__container {
        //
        position: relative;
        -webkit-overflow-scrolling: touch;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: hidden;
    }
    &__single {
        font-family: 'Roboto Slab', serif;
        position: relative;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        flex: 0 0 auto;
        border-radius: 15px;
        box-shadow: 0 0 15px 0 rgba(34, 60, 80, 0.2);
        width: 320px;
        height: 240px;
        margin: 1rem 1.5rem 1rem 0.5rem;

        &:last-of-type {
            &:after {
                content: '';
                position: absolute;
                right: -0.5rem;
                width: 0.5rem;
                height: 100%;
            }
        }

        &__top {
            display: flex;
            justify-content: center;
        }

        &__squared {
            background-size: cover;
            justify-self: flex-start;
            display: flex;
            border-radius: 15px;
            width: 135px;
            height: 135px;
            margin: 15px 5px;
            box-shadow: 0 0 4px 1px rgba(34, 60, 80, 0.2);
        }

        &__round {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            border: solid 2px white;
            position: absolute;
            background-size: cover;
            z-index: 2;
            top: calc(50% - 20px);
            left: calc(50% - 45px);
            cursor: pointer;
        }

        &__artist {
            margin: 1em auto;
            display: flex;
            flex-direction: column;
            text-align: center;

            &-name {
                color: #121212;
                font-weight: 600;
                font-size: 14px;
                width: 100%;
            }

            &-city {
                color: #727272;
                font-size: 10px;
                font-weight: 400;
                width: 100%;
            }
        }
    }

    &__shadow {
        width: 10px;
        position: absolute;
        height: 100%;
        right: 0;
    }
}
</style>