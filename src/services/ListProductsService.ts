import { getRepository } from 'typeorm';

import Product from '../models/Product';

interface Request {
  page: number;
  per_page: number;
}

class ListProductsService {
  public async execute({ page, per_page }: Request): Promise<Product[]> {
    const productsRepository = getRepository(Product);

    const products = await productsRepository.find({
      skip: per_page * (page - 1),
      take: per_page,
    });

    return products;
  }
}

export default ListProductsService;
