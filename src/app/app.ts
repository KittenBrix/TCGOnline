import * as Koa from 'koa';
import * as HttpStatus from 'http-status-codes';
import userController from '../user/user.controller';
import * as bodyParser from 'koa-bodyparser';

const app:Koa = new Koa();

// Generic error handling middleware.
app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.statusCode || error.status || HttpStatus.INTERNAL_SERVER_ERROR;
    error.status = ctx.status;
    ctx.body = { error };
    ctx.app.emit('error', error, ctx);
  }
});


// Middleware
app.use(bodyParser());

// Routes
app.use(userController.routes());
app.use(userController.allowedMethods());

// Error Logging
app.on('error', console.error);

export default app;