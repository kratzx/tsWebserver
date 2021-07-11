import { Request, Response } from 'express'
import { ProductModel } from '../services/schemas/productSchema';

const addOneProduct = (req: Request, res: Response) => {
  ProductModel.create(req.body)
    .then(value => {
      console.log('Success!');
      console.log('ID:', value.id);
      res.status(200).json(value);
    })
    .catch(e => {
      console.log('Error: ', e);
      res.status(500).send(e);
    });
}
const addManyProducts = (req: Request, res: Response) => {
  ProductModel.insertMany(req.body.products)
    .then(value => {
      console.log('Success!');
      res.status(200).json(value);
    })
    .catch(e => {
      console.log('Error: ', e);
      res.status(500).send(e);
    });
}

export const productsController = {
  getFeaturedProducts: (req: Request, res: Response) => {
    ProductModel.find().limit(4).exec()
      .then(products => {
        console.log({ products });
        res.status(200).json({ products });
      })
      .catch(e => {
        console.log('Error: ', e);
        res.status(500).send(e);
      })
  },
  getAllProducts: (req: Request, res: Response) => {
    ProductModel.find().exec()
      .then(products => {
        console.log({ products });
        res.status(200).json({ products });
      })
      .catch(e => {
        console.log('Error: ', e);
        res.status(500).send(e);
      })
  },
  getOneProduct: (req: Request, res: Response) => {
    res.status(200).send('Ok getOne');
    //const id = Number(req.params.id) - 1;
    //const product =  ProductModel.findById(id);
    //res.status(200).json(product);
  },
  addProducts: (req: Request, res: Response) => {
    console.log('Adding to DB:\n', req.body);
    req.body.products
      ? addManyProducts(req, res)
      : addOneProduct(req, res);
  },
  updateProducts: (req: Request, res: Response) => {
    res.status(200).send('Ok update');
    console.log(req.body);
    //const id = Number(req.params.id) - 1;
    //const product =  ProductModel.findById(id);
    //res.status(200).json(product);
  }
}
