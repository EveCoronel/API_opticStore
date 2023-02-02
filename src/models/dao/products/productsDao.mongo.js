const { HTTP_STATUS } = require('../constants/api.constants');
const { HttpError } = require('../utils/utils');
const MongoContainer = require('../../containers/mongo.container');
const productSchema = require('../../schemas/Product.schema')

const collection = 'products';

class Products extends MongoContainer {
    constructor() {
        super(collection, productSchema)
    }
}

module.exports = Products;