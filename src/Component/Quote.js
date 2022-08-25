import React, { useState, useEffect } from "react";

const url = "https://api.quotable.io/random?=author";

const Quote = () => {


  const [quotes, setQuotes] = useState([]);
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };




  const { content, author } = quotes;

  return (
    <div className="hero">
      <div className="container" >
        <div className="row ">
          <div className=" col-sm-4">
          <div class="card text-center">
 
  <div class="card-body">
    <h4>{author}</h4>
    <p className="card-text">{content}</p>
    <button className="btn btn-primary" onClick={getNewQuote}>New Quote</button>
  </div>
</div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Quote;