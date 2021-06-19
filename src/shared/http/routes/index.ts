import productsRouter from "@modules/products/routes/products.routes";
import passwordRouter from "@modules/users/routes/password.routes";
import sessionsRouter from "@modules/users/routes/sessions.routes";
import usersRoutes from "@modules/users/routes/users.routes";
import { Router } from "express";

const routes = Router();

routes.use('/password', passwordRouter);
routes.use('/products', productsRouter);
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRouter);

export default routes;