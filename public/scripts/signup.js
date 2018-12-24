{
var typingTimer;                //timer identifier
var doneTypingInterval = 5000;  //time in ms, 5 second for example
// VueResource for HTTP request
Vue.use(VueResource);
var app = new Vue({
    el : '#sign_up_page',
    data : {
        allowded : false
    },
    methods : {
        verifyUsername : ($event) => {
            clearTimeout(typingTimer);
            // Post request to check if the username exists in the db.
            let formData = {
                ajax : true,
                inputValue : $event.target.value
            };
            // post 
            Vue.http.post('/verifyusername', formData, {
                // use before callback
                before(request) {
                // abort previous request, if exists
                if (this.previousRequest) {
                    this.previousRequest.abort();
                }
                // set previous request on Vue instance
                this.previousRequest = request;
                }
            }).then(response => {
                if(response.body == true){
                    this.allowded = true;
                }
            }, response => {
                // error callback
            });
        }
    }
});
}