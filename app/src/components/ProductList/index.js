import React from 'react'
import {CardBlock, Card, CardDeck, CardTitle} from 'reactstrap'

const ProductList = ({products, compare}) =>
  <div>
    <h3>Select products</h3>

    <div className="row mt-3">
      <CardDeck>
        {products.map(product =>
          <div key={product.id} className="col-3 product-card">
            <Card inverse
                  onClick={() => compare(product)}
                  color={product.compare ? "success" : "primary"}
            >
              <CardBlock>
                <CardTitle>{product.name}</CardTitle>
              </CardBlock>
            </Card>
          </div>
        )}
      </CardDeck>
    </div>
  </div>;

export default ProductList;
