const Koa = require('koa');
const Joi = require('joi');
const { APPLICATION } = require('./environment');

const app = new Koa();

const schema = Joi.string().required().label('OMDb API token env');

const { value, error } = schema.validate(APPLICATION.omdbApiToken);

app.use(async (context) => {
    if (value) {
        console.log(`got OMDb API token successfully: ${value}`);
        context.body = 'Hello World!';
    }
    if (error) {
        context.throw(error);
    }
});

app.listen(3000);
