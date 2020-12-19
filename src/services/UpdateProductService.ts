import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Product from '../models/Product';

interface Request {
  id: string;
  name: string;
  value: number;
}

class ListProductsService {
  public async execute({ id, name, value }: Request): Promise<Product> {
    const productsRepository = getRepository(Product);

    const productToUpdate = await productsRepository.findOne(id);

    if (!productToUpdate) throw new AppError('Product not found', 404);

    productToUpdate.name = name || productToUpdate.name;
    productToUpdate.value = value || Number(productToUpdate.value);

    const updatedProduct = await productsRepository.save(productToUpdate);

    return updatedProduct;
  }
}

export default ListProductsService;
