import { Router } from 'express';

import CreateUsersService from '../services/CreateUserService';

import UserMap from '../mappers/UserMap';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUser = new CreateUsersService();

  const user = await createUser.execute({ name, email, password });

  const mappedUser = UserMap.toDTO(user);

  return response.json(mappedUser);
});

export default usersRouter;
