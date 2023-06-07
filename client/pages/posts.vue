<template>
<div class="posts">
    <div class="posts__body">
        <div class="posts-list">
            <div class="posts-list-item">
                <div class="posts-list-item__head">
                    <div class="posts-list-item__face"><img src="/media/profile/profile-1686042429395-273351095-404.png" alt=""></div>
                    <div class="posts-list-item__author"><span>Никита</span> <span>вчера в 10:55</span></div>
                </div>
                <div class="posts-list-item__description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia tempore molestiae omnis.
                        Illum odio, laboriosam labore sunt voluptates velit iste, ab ipsa nobis repudiandae cumque nisi
                        dicta delectus, nostrum beatae harum nemo quidem doloremque voluptate quaerat quam ad dolorem
                        nulla eos! Corrupti doloribus autem quasi commodi sunt deleniti minima numquam sequi fugiat
                        aliquam recusandae tenetur quis, possimus ipsum quae, laboriosam quia sed tempora quam animi
                        atque nam et similique. Saepe dolorem dignissimos, deleniti nam tempore at voluptate in, commodi
                        numquam quibusdam officia sint distinctio beatae minus reprehenderit veritatis! Id, fugit!
                        Beatae enim ad pariatur non quasi itaque ipsum iusto.</p>
                </div>
                <div class="posts-list-item__media">
                    <img src="/media/profile/profile-1686042429395-273351095-404.png" alt="">
                </div>
                <div class="posts-list-item__comments">
                    <div class="posts-comment posts__comments">
                        <div class="posts-comment__head">
                            <div class="posts-comment__face">
                                <img src="/media/profile/profile-1686042429395-273351095-404.png" alt="">
                            </div>
                            <div class="posts-comment__name">
                                <span>Нкита Кузнецов</span>
                                <span>07.06.2023</span>
                            </div>
                        </div>
                        <div class="posts-comment__body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, animi accusamus ipsam suscipit similique harum architecto quis, fugit iure dignissimos illo mollitia aut unde. Assumenda eius temporibus dicta accusamus accusantium?</p>
                        </div>
                        <div class="posts-comment__footer">
                            <div class="posts-comment__like">
                                <span class="material-symbols-outlined">
                                    thumb_up
                                </span>
                                <span>12</span>
                            </div>
                            <div class="posts-comment__dislike">
                                <span class="material-symbols-outlined">
                                    thumb_down
                                </span>
                                <span>3</span>
                            </div>
                        </div>
                    </div>
                    <div class="posts-comment posts__comments">
                        <div class="posts-comment__head">
                            <div class="posts-comment__face">
                                <img src="/media/profile/profile-1686042429395-273351095-404.png" alt="">
                            </div>
                            <div class="posts-comment__name">
                                <span>Нкита Кузнецов</span>
                                <span>07.06.2023</span>
                            </div>
                        </div>
                        <div class="posts-comment__body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, animi accusamus ipsam suscipit similique harum architecto quis, fugit iure dignissimos illo mollitia aut unde. Assumenda eius temporibus dicta accusamus accusantium?</p>
                        </div>
                        <div class="posts-comment__footer">
                            <div class="posts-comment__like">
                                <span class="material-symbols-outlined">
                                    thumb_up
                                </span>
                                <span>12</span>
                            </div>
                            <div class="posts-comment__dislike">
                                <span class="material-symbols-outlined">
                                    thumb_down
                                </span>
                                <span>3</span>
                            </div>
                        </div>
                    </div>
                    <div class="posts-comment posts__comments">
                        <div class="posts-comment__head">
                            <div class="posts-comment__face">
                                <img src="/media/profile/profile-1686042429395-273351095-404.png" alt="">
                            </div>
                            <div class="posts-comment__name">
                                <span>Нкита Кузнецов</span>
                                <span>07.06.2023</span>
                            </div>
                        </div>
                        <div class="posts-comment__body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, animi accusamus ipsam suscipit similique harum architecto quis, fugit iure dignissimos illo mollitia aut unde. Assumenda eius temporibus dicta accusamus accusantium?</p>
                        </div>
                        <div class="posts-comment__footer">
                            <div class="posts-comment__like">
                                <span class="material-symbols-outlined">
                                    thumb_up
                                </span>
                                <span>12</span>
                            </div>
                            <div class="posts-comment__dislike">
                                <span class="material-symbols-outlined">
                                    thumb_down
                                </span>
                                <span>3</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="posts-list-item__footer">
                    <div class="posts-list-item__like active"><span class="material-symbols-outlined">favorite</span><span>3
                            645</span></div>
                    <div class="posts-list-item__message"><span class="material-symbols-outlined">chat_bubble</span><span>21</span></div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.posts {
    display: flex;
    flex-direction: column;
    height: 100%;

    &__comments {
        & + & {
            margin-top: 30px;
        }
    }
}

.posts-list-item {
    padding: 30px;
    border: 1px solid #ddd;
    border-radius: 15px;
    background-color: #f1f1f1;

    &__head {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }

    &__face {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #ddd;
        overflow: hidden;
        margin-right: 10px;
        background-color: #fff;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__author {
        display: flex;
        flex-direction: column;
        line-height: 1.2;
    }

    &__media {
        background-color: #fff;
        border-radius: 15px;
        margin-bottom: 15px;

        & img {
            max-height: 600px;
        }
    }

    &__footer {
        display: flex;
        align-items: center;
        column-gap: 10px;
    }

    &__like,
    &__message {
        display: flex;
        align-items: center;
        column-gap: 5px;
        color: #8e8e8e;

        &.active {
            &.posts-list-item__like {
                & span:first-child {
                    color: #ff0000;
                    font-variation-settings: 'FILL'1
                }
            }
        }
    }

    &__footer {
        margin-top: 30px;
        justify-content: flex-end;
    }
}

.posts-comment {
    &__head {
        display: flex;
        align-items: center;
    }

    &__face {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #fff;
        margin-right: 5px;
    }

    &__name {
        display: flex;

        & span {    
            line-height: 1.2;
            font-size: 14px;

            &:first-child {
                margin-right: 5px;
            }
        }
    }

    &__footer {
        display: flex;
        align-items: center;
    }

    &__body {
        color: #818181;
        
        & p {
            margin-bottom: 5px;
        }
    }

    &__like,
    &__dislike {
        display: flex;
        align-items: center;
        color: #8e8e8e;

        & .material-symbols-outlined {
            font-size: 18px;
            margin-right: 3px;
            cursor: pointer;
        }
    }

    &__like {
        margin-right: 10px;
    }
}
</style>
