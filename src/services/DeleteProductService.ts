import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Product from '../models/Product';

interface Request {
  id: string;
}

class DeleteProductService {
  public async execute({ id }: Request): Promise<void> {
    const productsRepository = getRepository(Product);

    const product = await productsRepository.findOne(id);

    if (!product) throw new AppError('Product not found', 404);

    await productsRepository.remove(product);
  }
}

export default DeleteProductService;
