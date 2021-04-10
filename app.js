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
    ratioDollar: 3.8,
    ratioEuro: 4.5,
  };

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  render() {
    const { amount, ratioDollar, ratioEuro } = this.state;

    return (
      <div className="app">
        <label>
          <input value={amount} onChange={this.handleChange} type="number" />
        </label>
        <Currency text={"$:"} cash={amount} ratio={ratioDollar} />
        <Currency text={"€:"} cash={amount} ratio={ratioEuro} />
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.querySelector(`#root`));
