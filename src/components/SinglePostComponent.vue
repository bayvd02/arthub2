<template>
    <div class="post__single">
        <div class="post__header">
            <div class="post__header__row">
                <div class="post__header__avatar"
                    :style="{'background-image': 'url(' + require('../assets/profile_images/'+this.name+'.jpg') + ')' }">
                </div>
                <div class="post__header__user">
                    <div class="post__header__user-name">
                        {{ name }}
                    </div>
                    <div class="post__header__user-uploaded">
                        {{ uploaded }}
                    </div>
                </div>
            </div>
            <div class="post__header__row">
                <i class="fas fa-ellipsis" @click="showModal = true"></i>
                <modal-component v-if="showModal" @close="showModal = false" />
            </div>
        </div>
        <div class="post__content">
            <div class="post__content__image-3" v-for="(image) in this.images" :key="image"
                :style="{'background-image': 'url(' + require('@/assets/posts/'+id+'/'+image) + ')' }">
            </div>
        </div>
        <div class="post__footer">
            <div class="post__footer__row">
                <div class="post__footer-item">
                    <i class="fa fa-heart-o" @click="like"></i>&nbsp;{{ this.postData.likes }} Like
                </div>
                <div class="post__footer-item">
                    <i class="fa fa-comment-o"></i>&nbsp;{{ this.postData.comments.count }} Comment
                </div>
                <div class="post__footer-item">
                    <i class="fa-solid fa-share-nodes"></i>&nbsp;{{ this.postData.reposts }} Share
                </div>
                <div class="post__footer-item">
                    <i class="fa fa-bookmark-o"></i>&nbsp;{{ this.postData.reposts }} Saved
                </div>
            </div>
            <div class="post__footer__row">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique hic quaerat pariatur error, voluptatibus est esse nihil maiores ex et! Illum, voluptatibus molestiae. Suscipit magnam laborum facilis officia enim distinctio cupiditate, excepturi, dignissimos nisi fugiat ratione, architecto unde temporibus voluptatem.
            </div>
            <div class="post__footer__row">
                <div class="post__footer__avatar"
                    :style="{'background-image': 'url(' + require('../assets/profile_images/'+this.name+'.jpg') + ')' }">
                </div>
                <div class="comment">
                    <input type="text" class="commentInput" placeholder="Write your comment...">
                    <button type="submit" class="commentBtn">
                        <i class="fa-solid fa-caret-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import modalComponent from "@/components/ModalComponent";

    export default {
        name: "SinglePostComponent",
        components: {
            modalComponent
        },
        props: {
            id: Number,
            name: String,
            uploaded: String,
            images: Array,
            postData: {
                likes: Number,
                comments: {
                    count: Number,
                    content: Array
                },
                reposts: Number,
                views: Number
            }
        },
        data() {
            return {
                showModal: false,
                liked: false
            }
        },
        methods: {
            like: function (event) {
                this.liked = !this.liked;
                if (this.liked) {
                    event.target.classList = "fa fa-heart liked";
                    this.$props.postData.likes++;
                } else {
                    event.target.classList = "fa fa-heart-o";
                    this.$props.postData.likes--;
                }

            }
        }
    }
</script>

<style lang="scss">
    .post {
        &__header {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            i {
                color: #121212;
                cursor: pointer;
                font-size: 2rem;
                margin-right: 4px;

                &:hover {
                    color: #3d46c2;
                }
            }

            &__row {
                display: flex;
            }

            &__avatar {
                width: 90px;
                height: 90px;
                border-radius: 50%;
                border: solid 2px white;
                background-size: cover;
            }

            &__user {
                margin: 0 1em;
                flex-direction: column;
                align-self: center;

                &-name {
                    font-weight: 600;
                    color: #121212;
                    font-size: 1.25rem;
                }

                &-uploaded {
                    margin-top: 0.25rem;
                    font-size: 0.75rem;
                    color: #777777;
                }
            }
        }

        &__content {
            margin-top: 1em;
            display: flex;
            width: 100%;
            flex-direction: row;
            position: relative;

            &__image-3 {
                flex: 1;
                max-width: 50%;
                background-size: cover;
                margin: 0 0.25em;
                overflow: hidden;
                background-position: top center;
                background-repeat: no-repeat;
                border-radius: 0.5em;
                height: auto;

                &:before {
                    content: '';
                    float: left;
                    padding-top: 100%;
                }
            }
        }

        &__single {
            width: 100%;
            margin-bottom: 2em;
            background: #f3f3f3;
            border-radius: 10px;
            padding: 1rem 2rem;
        }

        &__footer {
            display: flex;
            flex-direction: column;
            color: #111111;
            font-weight: 500;
            font-family: "Roboto Slab";
            font-size: 1rem;
            margin-top: 0.5rem;
            /*border-top: 1px solid #a5a5a5;*/
            padding-top: 1rem;

            i {
                font-size: 1.25rem;
                margin-right: 0.25rem;
            }
            @media(max-width: 768px){   
                i {
                    font-size: 1rem;
                    margin-right: 0.25rem;
                }
            }

            &-item {
                display: flex;
                align-items: center;
                line-height: 1.5rem;
            }

            
            &__avatar {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                border: solid 2px white;
                background-size: cover;
            }

            &__row {
                margin: 1rem 4px;
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding-bottom: 1.5rem;
                padding-right: 0.5rem;

                .comment {
                    width: 80%;
                    position: relative;
                    display: flex;
                }

                .commentInput {
                    width: 100%;
                    height: 60px;
                    padding: 10px 20px;
                    border-radius: 25px 0 0 25px;
                    border: none;
                    outline: none;
                    color: #9DBFAF;
                    background: #eaeaea;
                    &:focus {
                        color: #00B4CC;
                    }
                    &::placeholder{
                        font-size: 1rem;
                    }
                }

                .commentBtn {
                    width: 40px;
                    height: 60px;
                    border: none;
                    background: #eaeaea;
                    text-align: center;
                    color: #fff;
                    border-radius: 0 25px 25px 0;
                    cursor: pointer;
                    font-size: 20px;
                }

                &:first-of-type {
                    border-bottom: 2px solid #eaeaea;
                }

                

                &:first-of-type {
                    .fa {
                        &:hover {
                            color: #474747;
                            cursor: pointer;
                        }
                    }

                    .liked {
                        color: red;

                        &:hover {
                            color: red;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>