const Currency = (props) => {
  const value = (props.cash / props.ratio).toFixed(2);

  return (
    <div>
      {props.text} {props.cash <= 0 ? "" : value}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    // ratioDollar: 3.8,
    // ratioEuro: 4.5,
  };

  currencies = [
    { id: 1, name: "dollar", ratio: 3.8, title: "$:" },
    { id: 2, name: "euro", ratio: 4.5, title: "€:" },
    { id: 3, name: "pound", ratio: 5.2, title: "£:" },
  ];

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  render() {
    const { amount } = this.state;

    const currencies = this.currencies.map((currency) => (
      <Currency key={currency.id} text={currency.title} cash={amount} ratio={currency.ratio} />
    ));

    return (
      <div className="app">
        <label>
          <input value={amount} onChange={this.handleChange} type="number" />
        </label>
        {currencies}
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.querySelector(`#root`));
