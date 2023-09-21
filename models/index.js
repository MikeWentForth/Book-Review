const User = require('./User');
const Book = require('./Book');
const Review = require('./Review');

User.hasMany(Book, {
    foreignKey: 'user_id',
});

Book.hasMany(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Book.hasMany(Review, {
    foreignKey: 'review_id'
});

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});

Review.belongsTo(Book, {
    foreignKey: 'book_id'
});

module.exports = { User, Book, Review };