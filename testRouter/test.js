var express = require('express');

var router = express.Router();


//include the file

 //Genre = require('./models/genre');

// Book = require('./models/book');

router.get('/genres',function(req,res){
    
    Genre.getGenres(function(err,genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });

});


//add genre
router.post('/genres',function(req,res){
    
    var genre = req.body;
            Genre.addGenre(genre,function(err,genre){
            if(err){
                throw err;
            }
            res.json(genre);
        });
    
    });


    //update the genres table
    router.put('/api/genres/:_id', function(req,res){
    
    var id = req.params._id;
    var genre = req.body;
    console.log(genre);
        Genre.updateGenre(id, genre, {}, function(err,genre){
            if(err){
                throw err;
            }
            res.json(genre);
        });
    
    });

       //delete the genres table
       router.delete('/genres/:_id', function(req,res){
    
    var id = req.params._id;
   
        Genre.deleteGenre(id, function(err,genre){
            if(err){
                throw err;
            }
            res.json(genre);
        });
    
    });


   //get all book from mongodb 
   router.get('/books',function(req,res){
    
        Book.getBooks(function(err,books){
            if(err){
                throw err;
            }
            res.json(books);
        });
    
    });

//add the new book
router.post('/books',function(req,res){
        
        var book = req.body;
        console.log(book);
            Book.addBook(book, function(err,book){
                if(err){
                    throw err;
                }
                res.json(book);
            });
        
        });





        router.get('/books/:id',function(req,res){
        
            Book.getBookById(req.params.id,function(err,book){
                if(err){
                    throw err;
                }
                res.json(book);
            });
        
        });

        //update the book object using id

        router.put('/books/:_id',function(req,res){

            var id = req.params._id;
            var book = req.body;
            console.log(book);

                Book.updateBook(id, book, {}, function(err,book){
                    if(err){
                        throw err;
                    }
                    res.json(book);
                });
            
            });
module.exports = router;