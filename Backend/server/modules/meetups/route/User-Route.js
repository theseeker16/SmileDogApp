import { Router } from 'express';
import * as UserController from './User-Controller';

const routes = new Router();

routes.post("/meetups/controller", UserController.createUser);