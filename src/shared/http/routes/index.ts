import productsRouter from "@modules/products/routes/products.routes";
import usersRoutes from "@modules/users/routes/users.routes";
import { Router } from "express";

const routes = Router();


routes.use('/products', productsRouter);
routes.use('/users', usersRoutes);

export default routes;