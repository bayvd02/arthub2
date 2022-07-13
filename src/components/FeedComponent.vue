<template>
    <div style="min-height: 800px">
        <div class="container__header">
            <h2>Your Feed</h2>
        </div>
        <SinglePostComponent
            v-for="post in posts"
            :key="post.id"
            :name="post.name"
            :uploaded="post.uploaded"
            :id="post.id"
            :images="post.images"
            :postData="post.postData"/>
    </div>
</template>

<script>

import SinglePostComponent from "@/components/SinglePostComponent";

export default {
    name: "FeedComponent",
    components: {
        SinglePostComponent
    },
    data() {
        return {
            posts: [
                {
                    id: 1,
                    name: 'Drake',
                    uploaded: '3 minutes ago',
                    images: ['Pbh4YpIIaLo.jpg', 'yZhdmto65ME.jpg'],
                    postData: {
                        likes: 0,
                        comments: {
                            count: 0,
                            content: []
                        },
                        reposts: 0,
                        views: 0
                    }
                },
                {
                    id: 2,
                    name: 'Bella',
                    uploaded: 'yesterday',
                    images: ['167560061_275407617375941_9116528618175634390_n.jpg', '2.jpg'],
                    postData: {
                        likes: 0,
                        comments: {
                            count: 0,
                            content: []
                        },
                        reposts: 0,
                        views: 0
                    }
                }
            ],
            showModal: false
        }
    },
    mounted() {
        const images = document.querySelectorAll('.post__content__image-3');

        for (let i = 0; i < images.length; i++) {
            images[i].addEventListener("dblclick", function () {
                //this.$refs.sing
            });
        }
    }
}
</script>

<style scoped>

</style>