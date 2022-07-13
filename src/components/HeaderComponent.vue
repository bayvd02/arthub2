<template>
    <div class="container__header">
        <div class="container__row">
            <div class="search-field">
                <i class="fas fa-search"></i>
                <input id="search" type="text" placeholder="Search">
                <i class="fas fa-microphone"></i>
            </div>
        </div>
        <div class="container__row">
            <div class="btn btn-search">Add Photo</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style lang="scss" scoped>
.btn {
    padding: 10px 20px;
    color: white;
    border-radius: 30px;
    width: 140px;
    background: linear-gradient(to right, #4250e7, #6714be);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 600;
}

.search-field {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f3f3f3;
    max-width: 300px;
    height: 45px;
    border-radius: 30px;
    width: 100%;

    i {
        cursor: pointer;
    }
}

input[type="text"] {
    border-radius: 30px;
    border: none;
    font-size: 1rem;
    padding: 0 20px;
    max-width: 260px;
    height: 45px;
    background: transparent;
    width: 100%;

    &:focus {
        outline: none;

        &::placeholder {
            color: transparent;
        }
    }

    &::placeholder {
        color: #999999;
    }
}

.fa-search {
    color: #999999;
    margin-left: 20px;
}

.fa-microphone {
    background: linear-gradient(to bottom, #4250e7, #6714be);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-right: 20px;
}
.container{
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  display: block;
  &__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    //background: #ffffff;
    border-bottom: 2px solid #eaeaea;
    & > *{
      display: inline-flex;
    }
  }
}
</style>