module.exports = async function (context, req) {
    if (!req.body) { context.res = { status: 400, body: 'Bad request' }; return; }

    let gamestate = req.body;

    context.log(gamestate);

    let movement = logic(gamestate);

    context.log(movement);

    context.res = {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            move: movement
        }
    }
};

function logic(gamestate) {
    return 'up';
}