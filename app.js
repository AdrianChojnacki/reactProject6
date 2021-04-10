// CURRENCY COMPONENT
const Currency = (props) => {
  const value = ((props.cash / props.ratio) * props.price).toFixed(2);

  return (
    <div>
      {props.text} {props.cash <= 0 ? "" : value}
    </div>
  );
};

// MAIN COMPONENT
class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "electricity",
  };

  static defaultProps = {
    currencies: [
      { id: 0, name: "zloty", ratio: 1, title: "zł:" },
      { id: 1, name: "dollar", ratio: 3.8, title: "$:" },
      { id: 2, name: "euro", ratio: 4.5, title: "€:" },
      { id: 3, name: "pound", ratio: 5.2, title: "£:" },
    ],
    prices: {
      electricity: 0.5,
      gas: 5,
      oranges: 3.5,
    },
  };

  // SELECT PRODUCT PRICE
  selectPrice(select) {
    return this.props.prices[select];
  }

  // SELECT PRODUCT FUNCTION
  handleSelect = (e) => {
    this.setState({
      amount: "",
      product: e.target.value,
    });
  };

  // INPUT CHANGE FUNCTION
  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  // SWITCH INPUT SUFFIX
  insertSuffix(select) {
    if (select === "electricity") return <em>kWh</em>;
    else if (select === "gas") return <em>l</em>;
    else if (select === "oranges") return <em>kg</em>;
  }

  render() {
    const { amount, product } = this.state;

    // MAP ON CURRENCIES ARRAY TO RETURN ALL 'CURRENCY' COMPONENTS
    const currencies = this.props.currencies.map((currency) => (
      <Currency
        key={currency.id}
        text={currency.title}
        ratio={currency.ratio}
        cash={amount}
        price={this.selectPrice(product)}
      />
    ));

    return (
      <div className="app">
        <label>
          Wybierz produkt:
          <select value={product} onChange={this.handleSelect}>
            <option value="electricity">prąd</option>
            <option value="gas">benzyna</option>
            <option value="oranges">pomarańcze</option>
          </select>
        </label>
        <br />
        <label>
          <input value={amount} onChange={this.handleChange} type="number" />
          {this.insertSuffix(product)}
        </label>
        {currencies}
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.querySelector(`#root`));
