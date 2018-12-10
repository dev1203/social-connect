module.exports = class PostModel {
    getPostData(connection, callback){
        connection.query("SELECT * FROM posts LIMIT 15;", function (error, results, fields){
            if(error){
                throw error;
            }
            return callback(results);
        });
    }
};