import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
const PORT = 3000;
const books = [
  {
    id: 1,
    title: "Zero to One",
    description:
      "Notes on startups, or how to build the future. A guide to creating innovative businesses that go from 0 to 1.",
    author: "Peter Thiel",
    status: "unread",
  },
  {
    id: 2,
    title: "The Lean Startup",
    description:
      "A blueprint for building successful enterprises through continuous innovation and validated learning.",
    author: "Eric Ries",
    status: "unread",
  },
  {
    id: 3,
    title: "The Hard Thing About Hard Things",
    description:
      "Real-world advice on building a business from someone who's done it multiple times.",
    author: "Ben Horowitz",
    status: "unread",
  },
  {
    id: 4,
    title: "Traction",
    description:
      "Get a grip on your company's growth using the proven Entrepreneurial Operating System.",
    author: "Gino Wickman",
    status: "unread",
  },
  {
    id: 5,
    title: "Atomic Habits",
    description:
      "Tiny changes, remarkable results – essential for entrepreneurs building sustainable habits.",
    author: "James Clear",
    status: "unread",
  },
];

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.get("/books", (req, res) => {
  res.status(200).json({ books });
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const book = books.find((book) => book.id == id);
  res.status(200).json({ book });
});

app.post("/books", (req, res) => {
  const book = req.body.book;
  book.status = "unread";
  book.id = books[books.length - 1].id + 1;
  books.push(book);
  res.status(204).send({ success: true });
});

app.put("/books/:id", (req, res) => {
  const updatedStatus = req.body.status;
  const id = req.params.id;
  const bookInd = books.findIndex((book) => book.id == id);
  books[bookInd].status = updatedStatus;
  res.status(204).json();
});

app.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  const bookInd = books.findIndex((book) => book.id == id);
  books.splice(bookInd, 1);
  res.status(200).send("Book deleted successfully");
});

app.listen(PORT, () => {
  console.log(`Running on PORT: ${PORT}`);
});
