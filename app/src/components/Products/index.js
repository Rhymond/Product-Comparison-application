import React from 'react'
import {Table, Button, CardBlock, Card, CardDeck, CardTitle} from 'reactstrap'

export default class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      compare: []
    };

    this.selectProduct = this.selectProduct.bind(this);
  }

  selectProduct(value) {
    const compare = this.state.compare;
    const index = compare.indexOf(value);

    if (index === -1) {
      compare.push(value);
    } else {
      compare.splice(index, 1);
    }

    this.setState({
      compare,
    });
  }

  componentDidMount() {
    this.ProductList();
  }

  ProductList() {
    return fetch('http://localhost/v1/api/products')
      .then(response => response.json())
      .then(response => {
        this.setState({products: response});
      });
  }

  render() {
    return (
      <div>
        <h3>Select products</h3>

        <div className="row mt-3">
          <CardDeck>
            {this.state.products.map((product, index) =>
              <div key={index} className="col-3 product-card">
                <Card inverse
                      onClick={this.selectProduct.bind(this, index)}
                      color={this.state.compare.indexOf(index) === -1 ? "primary" : "success"}
                >
                  <CardBlock>
                    <CardTitle>{product.name}</CardTitle>
                  </CardBlock>
                </Card>
              </div>
            )}
          </CardDeck>
        </div>

        <div className="row">

          <div className="col-12 mt-5">

            <h3 className={"text-center " + (this.state.compare.length > 1 ? 'hidden-xs-up' : '')}>
              Select two or more products
            </h3>

            <div className={(this.state.compare.length < 2 ? 'hidden-xs-up' : '')}>
              <Table>
                <thead>
                <tr>
                  <th></th>
                  {this.state.compare.map(index =>
                    <td key={index}>
                      <img width="100%"
                           src={'http://localhost/v1/api/products/image/' + this.state.products[index].img}
                           alt={this.state.products[index].name}/>
                    </td>
                  )}
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th>Name</th>
                  {this.state.compare.map(index =>
                    <td key={index} className="text-center">{this.state.products[index].name}</td>
                  )}
                </tr>
                <tr>
                  <th>Categories</th>
                  {this.state.compare.map(index =>
                    <td key={index}>
                      {this.state.products[index].categories.map((category, index) =>
                        <div className="text-center category" key={index}>{category}</div>
                      )}
                    </td>
                  )}
                </tr>
                <tr>
                  <th>Balance Transfer Rates</th>
                  {this.state.compare.map(index =>
                    <td key={index} className="text-center">
                      <div className="rate">{this.state.products[index].rates.balance.rate}% for up to</div>
                      <div className="period">{this.state.products[index].rates.balance.period} months</div>
                      <div className="fee">({this.state.products[index].rates.balance.fee}% handling fee)</div>
                    </td>
                  )}
                </tr>
                <tr>
                  <th>Money Transfer Rates</th>
                  {this.state.compare.map(index =>
                    <td key={index} className="text-center">
                      <div className="rate">{this.state.products[index].rates.money.rate}% for up to</div>
                      <div className="period">{this.state.products[index].rates.money.period} months</div>
                      <div className="fee">({this.state.products[index].rates.money.fee}% handling fee)</div>
                    </td>
                  )}
                </tr>
                <tr>
                  <th>Card Purchases</th>
                  {this.state.compare.map(index =>
                    <td key={index} className="text-center">
                      <div className="rate">{this.state.products[index].rates.purchases.rate}% for up to</div>
                      <div className="period">{this.state.products[index].rates.purchases.period} months</div>
                      <div className="fee">({this.state.products[index].rates.purchases.fee}% handling fee)</div>
                    </td>
                  )}
                </tr>
                <tr>
                  <th>Additional Info</th>
                  {this.state.compare.map(index =>
                    <td key={index} className="text-center">{this.state.products[index].info}</td>
                  )}
                </tr>
                <tr className="text-center">
                  <td></td>
                  {this.state.compare.map(index =>
                    <td key={index}>
                      <Button color="primary">More info</Button>
                    </td>
                  )}
                </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
