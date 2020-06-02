//bookmarkModel.js
/*
1. For this laboratory you will have to open your previous work(Bookmarks - app).
2. You will be integrating the database with mongoose.Call this database bookmarksdb.
3. Add a model file and build up the schema of the collection and the service object holding
the queries.
4. You must write a query for each of the endpoints already completed.The rules for the
endpoints stay the same as in the previous laboratory but you may need to adjust them so
that they manipulate the database instead of the dummy array.
5. Test your work before submission and when finished you can update the same Github
used in the previous laboratory and hand it in.

        
*/

const mongoose = require('mongoose');

const bookmarksSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }

});

const bookmarksCollection = mongoose.model('bookmarks', bookmarksSchema);

const Bookmarks = {
    createBookmark: function (newBookmark) {
        return bookmarksCollection
            .create(newBookmark)
            .then(createdBookmark => {
                return createdBookmark;
            })
            .catch(err => {
                return err;
            })
    },
    getAllBookmarks: function () {
        return bookmarksCollection
            .find()
            .then(allBookmarks => {
                return allBookmarks;
            })
            .catch(err => {
                return err;
            })
    },
    getBookmarksByTitle: function (title_input) {
        return bookmarksCollection
            .find({ title: title_input })
            .then(found_bookmarks => {
                return found_bookmarks;
            })
            .catch(err => {
                return err;
            })
    },
    deleteBookmarkById: function (id_input) {
        return bookmarksCollection
            .deleteMany({ id: id_input })
            .then(result => {
                //console.log("Sent a delete request to the db. Here's what we got back:", result);
                return result;
            })
            .catch(err => {
                return err;
            })
    },
    
    updateById: function (id_input,updates) {
        return bookmarksCollection
            .findOneAndUpdate({ id: id_input }, updates, { new: true })
            .then(result => {
                return result;
            })
            .catch(err => {
                return err;
            })
    }

};

module.exports = { Bookmarks };