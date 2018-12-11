// VueResource for HTTP request
Vue.use(VueResource);

var app = new Vue({
    el: '#main-content',
    data: {
      error: '',
      data : '',
      likeImage : 'liked.png'
    },
    methods : {
        loadPosts(){
            // GET all post
            this.$http.get('/getAllPosts').then(response => {
                this.data = response.body;
            }, response => {
                this.error = 'Error Occured while fetching post!!';
            });
        },
        likeEvent: function(event){
            console.log(event);
        }
    },
    beforeMount(){
        this.loadPosts();
     }
  })