<template>
    <div>
        <div class="arrow arrow__left" :data-scroll="scrollAmount" ref="scrollLeft" @click="scroll"></div>
        <div class="arrow arrow__right" :data-scroll="scrollAmount" ref="scrollRight" @click="scroll"></div>
    </div>
</template>

<script>
export default {
    name: "ScrollComponent",
    data() {
        return {
            scrollContainer: null,
            scrollAmount: 0
        }
    },
    mounted: function () {
        this.scrollContainer = this.$parent.$refs.scrollContainer;
        this.scrollAmount = this.scrollContainer.scrollWidth / this.scrollContainer.querySelectorAll("div[class$='__single']").length;
        window.container = this.scrollContainer;
        if (Math.round(this.scrollContainer.scrollLeft) < this.scrollContainer.scrollWidth - this.scrollContainer.clientWidth) {
            this.$refs.scrollRight.classList.add("arrow__active")
        }
        this.scrollContainer.addEventListener('scroll', this.checkScroll);
    },
    methods: {
        scroll: function (event) {
            console.log(this.scrollContainer);
            this.scrollContainer.classList.add("smoothScroll");
            if (!event.target.classList.contains("arrow__active")) {
                return;
            }
            if (event.target.classList.contains("arrow__right")) {
                this.scrollContainer.scrollLeft += this.scrollAmount;
            }
            if (event.target.classList.contains("arrow__left")) {
                this.scrollContainer.scrollLeft -= this.scrollAmount;
            }
            //dataconsole.log(this.scrollContainer.scrollLeft, this.scrollContainer.scrollWidth - this.scrollContainer.clientWidth);
        },
        checkScroll: function () {
            if (Math.round(this.scrollContainer.scrollLeft) < this.scrollContainer.scrollWidth - this.scrollContainer.clientWidth) {
                this.$refs.scrollRight.classList.add("arrow__active");
            } else {
                this.$refs.scrollRight.classList.remove("arrow__active");
            }
            if (Math.round(this.scrollContainer.scrollLeft) > 0) {
                this.$refs.scrollLeft.classList.add("arrow__active");
            } else {
                this.$refs.scrollLeft.classList.remove("arrow__active");
            }
            this.scrollContainer.classList.remove("smoothScroll");
        }
    }
}
</script>

<style lang="scss">
$arrow-color: grey;
$active-arrow-color: #3d46c2;
.arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;

    &__left {
        margin-right: 1em;
        border-right: 8px solid $arrow-color;
    }

    &__right {
        margin-left: 1em;
        border-left: 8px solid $arrow-color;
    }

    &__active {
        cursor: pointer;
        border-right-color: $active-arrow-color;
        border-left-color: $active-arrow-color;
    }
}
</style>