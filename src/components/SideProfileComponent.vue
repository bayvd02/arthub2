<template>
    <!--<div class="sideprofile" :class="[this.slide ? 'slide-in' : '']"></div> -->
    <div class="sideprofile sticky">
        <div class="sideprofile__header">
            <div class="sideprofile__user">
                <div class="sideprofile__user-avatar gradient">
                    <div class="sideprofile__user-avatarimage"
                        style="background-image: url('/img/Drake.37e95805.jpg')">
                    </div>
                </div>
            </div>
            <div class="sideprofile__user-info">
                <div class="sideprofile__user-name">Drake</div>
                <div class="sideprofile__user-location">
                    <i class="fa-solid fa-location-dot"></i>
                    <div class="sideprofile__user-location-name">New-Your, USA</div>
                </div>
            </div>
            <div class="sideprofile__user-actions">
                <i class="fas fa-ellipsis-v"></i>
            </div>
        </div>
        <div class="sideprofile__stats">
            <div class="sideprofile__stats-tab">
                <div class="sideprofile__stats-tab-number">17k</div>
                <div class="sideprofile__stats-tab-label">followers</div>
            </div>
            <div class="sideprofile__stats-tab">
                <div class="sideprofile__stats-tab-number">387</div>
                <div class="sideprofile__stats-tab-label">following</div>
            </div>
            <div class="sideprofle__stats-btn">
                <div class="btn">Follow</div>
            </div>
        </div>
        <div class="sideprofile__tags">
            <span>travel</span>
            <span>urban</span>
            <span>fashion</span>
            <span>lifestyle</span>
            <span>street</span>
        </div>
        <div class="sideprofile__content">
            <h2>Portfolio</h2>
            <div class="album__tags">
                <span>Featured</span>
                <span class="selected">Neon City</span>
                <span>Streat Art</span>
                <span>Fashion</span>
            </div>
            <div class="album__row">
                <div class="img img-1"></div>
                <div class="img img-2"></div>
                <div class="img img-3"></div>
                <div class="img img-4"></div>
            </div>
        </div>
    </div>
</template>


<script>
    export default ({
        name: "SideProfileComponent",
        props: ["slide"]
    })
</script>

<style lang="scss">
    $iconWidth: 24px;
    $active-color: #414FE4;
    $active-bg-color: #1F1C2F;
.btn {
    padding: 12px 20px;
    color: white;
    border-radius: 30px;
    width: 120px;
    background: linear-gradient(to right, #4250e7, #6714be);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 600;
}
.sideprofile {
    width: 100%;
    background-color: #03030f;
    height: 100vh;
    display: flex;
    //border-radius: 10px 0 0 10px;
    flex-direction: column;
    //overflow: hidden;
    &__content{
        margin-top: 1rem;
        padding: 1rem 2.5rem;
        border-radius: 20px 20px 0  0;
        background: #ffffff;
        height: 600px;
        box-shadow: -15px 5px 20px 0px #dadada;
        .album{
            &__tags{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                span{
                    color: #cccccc;
                    font-weight: 600;
                    transition: color 0.1s ease-in;
                    &:hover{
                        color: $active-color;
                        cursor: pointer;
                    }
                }
                .selected{
                    color: $active-color;
                    position: relative;
                    &::before {
                        transform: translateX(-50%);
                        border-radius: 100%;
                        position: absolute;
                        background: blue;
                        top: 25px;
                        height: 6px;
                        content: '';
                        width: 6px;
                        left: 50%;
                    }
                }
            }
            &__row{
                width: 100%;
                height: 350px;
                margin: 20px 0;
                display: flex;
                flex-wrap: wrap;
                .img{
                    height: 50%;
                    margin: 5px;
                    box-shadow: 10px 14px 20px 0px rgba(226,204,189,1);
                }
                .img-1{
                    background: url('https://images.unsplash.com/photo-1422205512921-12dac7b3b603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80') no-repeat center center;
                    background-size: cover;
                
                }
                .img-2{
                    background: url('https://images.unsplash.com/photo-1528696892704-5e1122852276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80') no-repeat center center;
                    background-size: cover;
                }
                .img-3{
                    background: url('https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80') no-repeat center center;
                    background-size: cover;
                
                }
                .img-4 {
                    background: url('https://images.unsplash.com/photo-1563305145-b64e0c2184aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80') no-repeat center center;
                    background-size: cover;
                
                }
                .img{
                    height: 50%;  
                }
                
                .img-1,
                .img-4 {
                    width: 24%;
                }
                .img-2,
                .img-3 {
                    width: 70%;
                }
            }
        }
    }
    &__tags{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 2.5rem;
        span{
            border: 1px solid rgba(103, 20, 190, 0.5);
            border-radius: 10px;
            padding: 5px 10px;
            color: rgb(197, 197, 197);
            font-size: 12px;
            &:hover{
                cursor: pointer;
                background: rgba(103, 20, 190, 0.5);
                color: white;
            }
        }
    }
    &__stats{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 2.5rem;
        &-tab{
            display: block;
            text-align: center;
            cursor: pointer;
            &-number{
                color: #fff;
                font-size: 1.5rem;
                font-weight: 700;
                text-transform: capitalize;
            }
            &-label{
                color: rgb(223, 223, 223);
                display: block;
            }
        }
    }
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
    &__header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 1rem 2.5rem;
    }

    &__user {
        display: inline-flex;
        &-actions{
            color: #777777;
            display: flex;
            font-size: 1rem;
            align-items: center;
            cursor: pointer;
        }
        &-info{
            width: 70%;
            flex-direction: column;
            justify-content: center;
            display: flex;
        }

        &-name {
            margin-bottom: 0.5rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #fff;
            font-size: 1.75rem;
            cursor: pointer;

            &:first-letter {
                text-transform: capitalize;
            }
        }
        &-location{
            display: flex;
            cursor: pointer;
            i{
                color: #7b60ea;
                margin-right: 0.5rem;
                font-size: 1.25rem;
            }
            &-name{
                color: #777777;
                font-size: 1rem;
                line-height: 1.5rem;
            }
        }

        &-avatar {
            width: 82px;
            height: 82px;
            line-height: 82px;
            background-color: #03030f;
            border-radius: 50%;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;

            &image {
                position: relative;
                border: solid 2px #03030f;
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

</style>