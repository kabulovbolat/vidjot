if (process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://kaboul:chelseafc100390@ds123624.mlab.com:23624/vidjot-prod'}
} else {
module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
