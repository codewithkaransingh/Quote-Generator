import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/500.css";
import Stack from "@mui/material/Stack";
import CircularProgress from '@mui/material/CircularProgress';


function App() {
  const [quotes, setquotes] = React.useState([]);
  const [index, setindex] = React.useState(0);
  const [loading, setloading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setquotes(data);
        setloading(false);
      });
  }, []);

  function quotechange() {
    let value = Math.floor(Math.random() * quotes.length);
    if (value == index) {
      value = Math.floor(Math.random() * quotes.length);
      setindex(value);
    } else {
      setindex(value);
    }
  }

  if (loading) {
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
              display:'flex',
              justifyContent:'center'
            }}
          >
            <CardContent>
            <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    </CardContent>
          </Card>
        </center>
      </div>
    );
  } else {
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
                variant="contained"
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
              <Typography variant="h5">"{quotes[index].text}"</Typography>{" "}
            </CardContent>

            <CardContent style={{ fontSize: "18px", fontStyle: "italic" }}>
              {quotes[index].author}
            </CardContent>
          </Card>
        </center>
      </div>
    );
  }
}

export default App;
