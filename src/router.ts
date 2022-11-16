import { Router } from 'express';

export const router = Router();

// List categories
router.get('/categories', (req, res) => {
  res.send('OK');
});

// Create category
router.post('/categories', (req, res) => {
  res.send('OK');
});

// List product
router.get('/products', (req, res) => {
  res.send('OK');
});

// Create category
router.post('/products', (req, res) => {
  res.send('OK');
});

// Get product by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

//List orders
router.get('/orders', (req, res) => {
  res.send('OK');
});

// Create order
router.post('/orders', (req, res) => {
  res.send('OK');
});

// Change order status
//<--- !important ---> put alteração completa do dado, patch vai alterar somente uma informação
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
