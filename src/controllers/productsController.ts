import { Request, Response } from 'express'
import { ProductModel } from '../services/schemas/productSchema';

const addOneProduct = (req: Request, res: Response) => {
  ProductModel.create(req.body)
    .then(product => {
      console.log('Success!');
      console.log('ID:', product.id);
      res.status(200).json(product);
    })
    .catch(e => {
      console.log('Error: ', e);
      res.status(500).send(e);
    });
}
const addManyProducts = (req: Request, res: Response) => {
  ProductModel.insertMany(req.body.products)
    .then(products => {
      console.log('Success!');
      res.status(200).json(products);
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
  getProducts: (req: Request, res: Response) => {
    let search;
    req.query
      ? search = ProductModel.find(req.query)
      : search = ProductModel.find();
    search.exec()
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
    ProductModel.findById(req.params.id).exec()
      .then( product => {
        console.log(product)
        res.status(200).json(product);
      })
      .catch(e => {
        console.log('Error: ', e);
        res.status(500).send(e);
      })
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
