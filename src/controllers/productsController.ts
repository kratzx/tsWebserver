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
  deleteOneProduct: (req: Request, res: Response) => {
    let foundProduct: any;
    ProductModel.findById(req.params.id).exec()
      .then(product => {
        if(!product) throw new Error('ID not found');
        foundProduct = product;
        return ProductModel.deleteOne({ _id: req.params.id });
      })
      .then(product => {
        res.status(200).json(foundProduct);
      })
      .catch(e => {
        console.log('Error: ', e);
        res.status(500).send(e);
      });
  },
  updateProduct: (req: Request, res: Response) => {
    ProductModel.updateOne({_id: req.params.id}, req.body)
      .then(res => {
        if (res.n == 0) throw new Error('ID not found');
        return ProductModel.findById(req.params.id).exec();
      })
      .then(product => {
        console.log(product)
        res.status(200).json(product);
      })
      .catch(e => {
        console.log('Error: ', e);
        res.status(500).send(e);
      });
  }
}
