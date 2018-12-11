// VueResource for HTTP request
Vue.use(VueResource);

var app = new Vue({
    el: '#main-content',
    data: {
      error: '',
      data : ''
    },
    methods : {
        loadPosts : function(){
            // GET all post
            this.$http.get('/getAllPosts').then(response => {
               response.body.forEach(element => {
                   console.log(element);
                    let template = `<div class="card newsfeed-card" id ="${element.id}">
                    <div class='newsfeed-card__top'>
                        <div class="newsfeed-card__top-image">
                            <img src="https://instagram.fyvr2-1.fna.fbcdn.net/vp/e71f03a4b1e41b36ab77f5ddcb347673/5C8B9A5B/t51.2885-19/s150x150/44885401_295306307781183_7772622368773505024_n.jpg?_nc_ht=instagram.fyvr2-1.fna.fbcdn.net" alt="">
                            <span class="newsfeed-card__top-name"><a>Dev Singh</a></span>
                        </div>
                    </div>
                    <div class="card-body newsfeed-card__image-div">
                        <img src="${element.media}" alt="" class = 'newsfeed-card__image'>
                    </div>
                    <div class="card-footer text-muted">
                        <!-- <img class="newsfeed-card__like" src="images/icons8-heart-outline-50.png"> -->
                        <img class="newsfeed-card__like" src="images/icons8-heart-outline-80.png" alt="">
                        <span>${element.likes}</span>
                        <span>${element.text}</span>
                    </div>
                </div>`
                this.data += template;
               });
            }, response => {
                this.error = 'Error Occured while fetching post!!';
            });
        }
    },
    beforeMount(){
        this.loadPosts();
     }
  })