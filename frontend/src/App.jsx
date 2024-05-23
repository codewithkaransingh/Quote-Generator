import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/500.css";
import Stack from "@mui/material/Stack";

function App() {
  const quotes = [
    {
      quote:
        "The only thing necessary for the triumph of evil is for good men to do nothing.",
      author: "Edmund Burke",
    },
    {
      quote:
        "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr.",
    },
    {
      quote:
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote:
        "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote: "It does not do to dwell on dreams and forget to live.",
      author: "J.K. Rowling, Harry Potter and the Sorcerer's Stone",
    },
    {
      quote:
        "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
      author: "Albert Einstein",
    },
    {
      quote:
        "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky",
    },
    {
      quote: "The purpose of our lives is to be happy.",
      author: "Dalai Lama",
    },
  ];
  const [index, setindex] = React.useState(
    Math.floor(Math.random() * quotes.length)
  );
  function quotechange() {
    let value = Math.floor(Math.random() * quotes.length);
    if (value == index) {
      value = Math.floor(Math.random() * quotes.length);
      setindex(value);
    } else {
      setindex(value);
    }
  }
  return (
    <div>
      <center style={{ marginTop: "80px" }}>
        <Typography variant="h1" style={{ fontStyle: "italic" }}>
          Quotifier
        </Typography>
      </center>
      <center>
        <Card
          style={{
            width: "750px",
            height: "300px",
            marginTop: "40px",
            backgroundColor: "#EADBC8",
            borderRadius: "20px",
          }}
        >
          <CardContent style={{ marginBottom: "10px", marginTop: "10px" }}>
            <Button
              variant="conatined"
              style={{
                backgroundColor: "#102C57",
                textTransform: "capitalize",
                color: "white",
              }}
              onClick={quotechange}
            >
              New Quote
            </Button>
          </CardContent>
          <CardContent>
            <Typography variant="h5">" {quotes[index].quote}"</Typography>
          </CardContent>

          <CardContent style={{ fontSize: "18px", fontStyle: "italic" }}>
            - {quotes[index].author}
          </CardContent>
        </Card>
      </center>
    </div>
  );
}

export default App;
