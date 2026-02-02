import express from "express";
const app = express();

app.use(express.json());

function requestLogger(req, res, next) {
  console.log(req.method + " " + req.url);
  next();
}

app.use(requestLogger);

const PORT = 3000;

const users = [
  {
    id: 1,
    name: "Vaibhav",
    batch: "OBP-3",
    city: "Pune",
  },
  {
    id: 2,
    name: "Prateek",
    batch: "OBP-3",
    city: "Pune",
  },
  {
    id: 3,
    name: "Rani",
    batch: "OBP-2",
    city: "Mumbai",
  },
];

app.get("/", (req, res) => {
  res.send(users);
});

const products = [
  {
    id: 168,
    title: "Charger SXT RWD",
    price: 32999.99,
    quantity: 3,
    total: 98999.97,
    discountPercentage: 13.39,
    discountedTotal: 85743.87,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
  },
  {
    id: 78,
    title: "Apple MacBook Pro 14 Inch Space Grey",
    price: 1999.99,
    quantity: 2,
    total: 3999.98,
    discountPercentage: 18.52,
    discountedTotal: 3259.18,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
  },
  {
    id: 183,
    title: "Green Oval Earring",
    price: 24.99,
    quantity: 5,
    total: 124.95,
    discountPercentage: 6.28,
    discountedTotal: 117.1,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
  },
  {
    id: 100,
    title: "Apple Airpods",
    price: 129.99,
    quantity: 5,
    total: 649.95,
    discountPercentage: 12.84,
    discountedTotal: 566.5,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
  },
];

//make a get request for /even_ids, which will respond with title array of all products with even id
// response for above arr: ["Apple Airpods", "Apple MacBook Pro 14 Inch Space Grey", "Charger SXT RWD"]
app.get("/even_ids", (req, res) => {
  const evenIds = products
    .filter((product) => product.id % 2 == 0)
    .map((product) => product.title);

  res.send({ evenIds });
});

//we can send any form of data from here
app.get("/html", (req, res) => {
  res.send("<h1>Hi I'm H1 tag</h1>");
});

//Route parameters
app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  res.send(users.find((user) => user.id == req.params.id));
});

//Query Parameters
app.get("/users", (req, res) => {
  console.log(req.query);
  const city = req.query.city;
  const batch = req.query.batch;

  const PuneOBP2Users = users.filter(
    (user) => user.city === city && user.batch === batch,
  );

  res.send({ users: PuneOBP2Users });
});

app.post("/", (req, res) => {
  //   console.log(req.body);
  const { propertyName, id, propertyValue } = req.body;

  for (let i = 0; i < users.length; i++) {
    const idx = id.indexOf(users[i].id);
    if (idx != -1) {
      users[i][propertyName] = propertyValue[idx];
    }
  }
  console.log({ users });

  res.send("Successfully saved data!!");
});

app.listen(PORT, () => {
  console.log(`Running on PORT: ${PORT}`);
});