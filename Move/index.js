module.exports = async function (context, req) {
    let gamestate = JSON.parse(req.body);

    // DO STUFF BASED ON GAME STATE
    context.res = {
        status: 200,
        body: {
            move: 'up'
        }
    }
};