import React from "react";

class Topheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [
        "ae",
        "ar",
        "at",
        "au",
        "be",
        "bg",
        "br",
        "ca",
        "ch",
        "cn",
        "co",
        "cu",
        "cz",
        "de",
        "eg",
        "fr",
        "gb",
        "gr",
        "hk",
        "hu",
        "id",
        "ie",
        "il",
        "in",
        "it",
        "jp",
        "kr",
        "lt",
        "lv",
        "ma",
        "mx",
        "my",
        "ng",
        "nl",
        "no",
        "nz",
        "ph",
        "pl",
        "pt",
        "ro",
        "rs",
        "ru",
        "sa",
        "se",
        "sg",
        "si",
        "sk",
        "th",
        "tr",
        "tw",
        "ua",
        "us",
        "ve",
        "za",
      ],
      inputValue: "",
      id: null,
    };
  }

  render() {
    let country = this.state.countries;

    return (
      <div className="top_header flex">
        <div className="logo">
          <h1>gizmo</h1>
        </div>
        <div className="search_bar">
          <form>
            <input
              type="text"
              // value={this.state.inputValue}
              placeholder="search keyword"
              // onChange={this.handleChange}
              onChange={(event) => this.props.handleSearch(event.target.value)}
            ></input>
            <select id="country" name="country" onChange={this.handleChange}>
              {country.map((val, index) => {
                return (
                  <>
                    <option
                      value={val}
                      name={val}
                      onClick={() => this.handleClick(index)}
                    >
                      {val}
                    </option>
                  </>
                );
              })}
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default Topheader;
