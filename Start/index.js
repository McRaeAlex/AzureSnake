module.exports = async function (context, req) {
    context.res = {
        status: 200,
        body : {
            color: '#ffffff',
            headType: 'fang',
            tailType: 'bolt'
        }
    }
};