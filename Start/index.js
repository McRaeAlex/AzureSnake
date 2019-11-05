module.exports = async function (context, req) {
    context.res = {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body : {
            color: '#ffffff',
            headType: 'fang',
            tailType: 'bolt'
        }
    }
};