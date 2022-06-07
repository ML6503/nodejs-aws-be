'use strict';

module.exports.product = async (event) => {
  return {
    statusCode: 200,
    body:
      {
        productName: 'Book',
        price: 123,
      },  
  
  };
};
