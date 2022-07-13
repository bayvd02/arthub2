<template>
    <div class="story__container">
        <div class="container__header">
            <h2>Stories</h2>
            <p>Watch All</p>
        </div>
        <div class="story-bar" v-draggable>
            <div :key="story.id" v-for="story in stories" class="story-bar__user" :story-id="story.id">
                <div
                    :class="((story.id === 1) || (story.id > 3))?'story-bar__user-avatar':'story-bar__user-avatar gradient'">
                    <div class="story-bar__user-avatarimage"
                         :style="{ 'background-image': 'url(' + require('../assets/profile_images/' + story.avatar) + ')' }">
                        <div v-if="story.id === 1" class="story-bar__add">&#43;</div>
                    </div>
                </div>
                <div class="story-bar__user-name">{{ story.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StoriesComponent",
    data() {
        return {
            imageDir: "../assets/profile_images",
            images: {},
            stories: [
                {
                    id: 1,
                    name: "Amandla",
                    avatar: "amandla.jpg"
                },
                {
                    id: 2,
                    name: "Awkwafina",
                    avatar: "Awkwafina.jpg"
                },
                {
                    id: 3,
                    name: "Bella",
                    avatar: "Bella.jpg"
                },
                {
                    id: 4,
                    name: "Drake",
                    avatar: "Drake.jpg"
                },
                {
                    id: 5,
                    name: "EmmaWatson",
                    avatar: "EmmaWatson.jpg"
                },
                {
                    id: 6,
                    name: "Justin",
                    avatar: "justin.jpg"
                },
                {
                    id: 7,
                    name: "Kylie",
                    avatar: "kylie.jpg"
                },
                {
                    id: 8,
                    name: "Zendaya",
                    avatar: "zendaya.jpg"
                },
                {
                    id: 9,
                    name: "Bella",
                    avatar: "Bella.jpg"
                },
                {
                    id: 10,
                    name: "Drake",
                    avatar: "Drake.jpg"
                },
                {
                    id: 11,
                    name: "EmmaWatson",
                    avatar: "EmmaWatson.jpg"
                },
                {
                    id: 12,
                    name: "Justin",
                    avatar: "justin.jpg"
                },
                {
                    id: 13,
                    name: "Kylie",
                    avatar: "kylie.jpg"
                },
                {
                    id: 14,
                    name: "Zendaya",
                    avatar: "zendaya.jpg"
                }
            ]
        }
    },
    mounted() {
        this.importAll(require.context("../assets/profile_images", true, /\.jpg$/))
    },
    methods: {
        importAll(r) {
            var imgs = {}
            r.keys().forEach((key, index) => {
                imgs[key] = {
                    "key": r(key),
                    "index": index
                }
            })
            this.images = imgs;
        }
    }
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

.story {
    &__container {
        .container__header {
            p {
                color: #a5a5a5;
                font-weight: 700;
            }
        }
    }
}

.story-bar {
    position: relative;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: hidden;
    min-height: 140px;
    padding: 12px 16px;
    border-bottom: 3px solid #eee;
    background-color: #f3f3f3;

    &__add {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        content: '';
        width: 12px;
        height: 12px;
        text-align: center;
        background-color: #404fef;
        border: 1px solid #3d46c2;
        color: white;
        font-weight: 600;
        border-radius: 50%;
        right: 0;
        bottom: 0;
        font-size: 8px;
    }

    &__user {
        display: inline-flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;

        &-name {
            width: 84px;
            margin: 2px 8px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
            font-size: 12px;
            color: #777777;

            &:first-letter {
                text-transform: capitalize;
            }
        }

        &-avatar {
            width: 82px;
            height: 82px;
            line-height: 82px;
            background-color: white;
            border-radius: 50%;
            margin: 0 8px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;

            &image {
                position: relative;
                border: solid 2px white;
                width: 78px;
                height: 78px;
                cursor: pointer;
                border-radius: 50%;
                background-size: cover;
                display: block;
            }
        }
    }
}

.gradient {
    background-image: linear-gradient(135deg, #ee0979, #ff6a00);
}
</style>