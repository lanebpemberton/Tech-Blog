//import models
const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey:'post_id'
})

User.hasMany(Comment, {
    foreignKey: 'commenter_id',
    onDelete: 'CASCADE'
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(User, {
    foreignKey: 'commenter_id'
});



module.exports = { Post, Comment, User };