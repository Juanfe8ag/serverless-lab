const { app } = require('@azure/functions');

app.http('hello', {
    methods: ['GET'],
    authLevel: 'anonymous',
    route: 'hello',
    handler: async (request, context) => {
        const name = request.query.get('name') || 'Mundo';
        return {
            status: 200,
            jsonBody: {
                message: `¡Hola, ${name}!`
            }
        };
    }
});