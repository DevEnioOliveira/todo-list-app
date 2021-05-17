module.exports = function( request , response, next) {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Methods', 'get,post,put,patch,delete')
    response.header('Access-Control-Allow-Headers','Origin, X-Request-With','Content-Type, Accept')
    next()
}