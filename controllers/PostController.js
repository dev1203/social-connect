var PostModel = require('../models/PostsModel.js');

module.exports = class Posts {
    constructor() {
        this.userPosts = new PostModel();
        // To-do: Add auth to check for users.
    }

    getPosts(connection,callback) {
        this.userPosts.getPostData(connection,function(response){
            return callback(response);
        });
    }
};