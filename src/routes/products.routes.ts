import { Router } from 'express';

import { getRepository } from 'typeorm';

import ListProductsService from '../services/ListProductsService';
import ShowProductService from '../services/ShowProductService';
import UpdateProductService from '../services/UpdateProductService';
import DeleteProductService from '../services/DeleteProductService';

import Product from '../models/Product';

import checkAuthentication from '../middlewares/checkAuthentication';

const productsRouter = Router();

productsRouter.get('/', async (request, response) => {
  const { page = 1, per_page = 10 } = request.query;

  const formattedQueryParams = {
    page: Number(page),
    per_page: Number(per_page),
  };

  const listProductsService = new ListProductsService();

  const products = await listProductsService.execute({
    page: formattedQueryParams.page,
    per_page: formattedQueryParams.per_page,
  });

  return response.json({
    products,
    ...formattedQueryParams,
  });
});

productsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const showProductService = new ShowProductService();

  const product = await showProductService.execute({ id });

  return response.json(product);
});

productsRouter.post('/', checkAuthentication, async (request, response) => {
  const { name, value } = request.body;

  const productsRepository = getRepository(Product);

  const product = await productsRepository.create({ name, value });

  await productsRepository.save(product);

  return response.json(product);
});

productsRouter.put('/:id', checkAuthentication, async (request, response) => {
  const { id } = request.params;
  const { name, value } = request.body;

  const updateProductService = new UpdateProductService();

  const product = await updateProductService.execute({ id, name, value });

  return response.json(product);
});

productsRouter.delete(
  '/:id',
  checkAuthentication,
  async (request, response) => {
    const { id } = request.params;

    const deleteProductService = new DeleteProductService();

    await deleteProductService.execute({ id });

    return response.status(201).send();
  }
);

export default productsRouter;
