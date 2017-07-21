import React from 'react'
import {Table, Button} from 'reactstrap'

const Compare = ({products}) =>
  <div className="row">
    <div className="col-12 mt-5">
      <h3 className={"text-center " + (products.length > 1 ? 'hidden-xs-up' : '')}>
        Select two or more products
      </h3>

      <div className={(products.length < 2 ? 'hidden-xs-up' : '')}>
        <Table>
          <thead>
          <tr>
            <th></th>
            {products.map(product =>
              <td key={product.id}>
                <img width="100%"
                     src={'http://localhost/v1/api/products/image/' + product.img}
                     alt={product.name}/>
              </td>
            )}
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>Name</th>
            {products.map(product =>
              <td key={product.id} className="text-center">{product.name}</td>
            )}
          </tr>
          <tr>
            <th>Categories</th>
            {products.map(product =>
              <td key={product.id}>
                {product.categories.map((category, index) =>
                  <div className="text-center category" key={index}>{category}</div>
                )}
              </td>
            )}
          </tr>
          <tr>
            <th>Balance Transfer Rates</th>
            {products.map(product =>
              <td key={product.id} className="text-center">
                <div className="rate">{product.rates.balance.rate}% for up to</div>
                <div className="period">{product.rates.balance.period} months</div>
                <div className="fee">({product.rates.balance.fee}% handling fee)</div>
              </td>
            )}
          </tr>
          <tr>
            <th>Money Transfer Rates</th>
            {products.map(product =>
              <td key={product.id} className="text-center">
                <div className="rate">{product.rates.money.rate}% for up to</div>
                <div className="period">{product.rates.money.period} months</div>
                <div className="fee">({product.rates.money.fee}% handling fee)</div>
              </td>
            )}
          </tr>
          <tr>
            <th>Card Purchases</th>
            {products.map(product =>
              <td key={product.id} className="text-center">
                <div className="rate">{product.rates.purchases.rate}% for up to</div>
                <div className="period">{product.rates.purchases.period} months</div>
                <div className="fee">({product.rates.purchases.fee}% handling fee)</div>
              </td>
            )}
          </tr>
          <tr>
            <th>Additional Info</th>
            {products.map(product =>
              <td key={product.id} className="text-center">{product.info}</td>
            )}
          </tr>
          <tr className="text-center">
            <td></td>
            {products.map(product =>
              <td key={product.id}>
                <Button color="primary">More info</Button>
              </td>
            )}
          </tr>
          </tbody>
        </Table>
      </div>
    </div>
  </div>;

export default Compare;