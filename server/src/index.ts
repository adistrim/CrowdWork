import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

interface Data {
  message: string;
  data: {
    name: string;
    age: number;
  };
}

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  const data: Data = {
    message: "Hello from TypeScript Express Server!",
    data: {
      name: "John Doe",
      age: 30,
    },
  };

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running at port:${PORT}`);
});
