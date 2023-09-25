const User = require('./User');
const Book = require('./Book');
const Review = require('./Review');


User.hasMany(Book, {
    foreignKey: 'user_id',
});

User.belongsToMany(Book, {
    through: 'userFavorites',
    foreignKey: 'user_id'
});

Book.belongsToMany(User, {
    through: 'bookUsers',
    foreignKey: 'book_id'
});

Book.hasMany(Review, {
    foreignKey: 'book_id'
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
