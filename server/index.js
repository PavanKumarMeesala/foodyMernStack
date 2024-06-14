const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const multer = require('multer');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const client = new MongoClient('mongodb+srv://admin:admin@foody.mg3thxk.mongodb.net/?retryWrites=true&w=majority');
client.connect();
const db = client.db('Hotels');
const col = db.collection('Restroes');
const colImages = db.collection('Images'); // New collection for storing images

// Define storage for the images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

// Initialize multer
const upload = multer({ storage: storage });

app.get('/home', (req, res) => {
  res.send("It is a Home Page - New Page - New 2 Page");
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await col.findOne({ Email: username });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isPasswordValid = (password == user.Password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  res.status(200).json({ message: "Login successful", user });
});

app.post('/insert', upload.single('profilePhoto'), async (req, res) => {
  try {
    const { firstName, lastName, GSTIN, email, password } = req.body;
    let profilePhoto = null;

    // Check if profile photo is uploaded
    if (req.file) {
      const profilePhotoData = req.file.buffer; // Get the file buffer
      profilePhoto = profilePhotoData; // Assign the file buffer directly
    }

    const newUser = {
      FirstName: firstName,
      LastName: lastName,
      GSTIN: GSTIN,
      Email: email,
      Password: password,
      ProfilePhoto: profilePhoto // Save the profile photo buffer in the database
    };

    await col.insertOne(newUser);
    res.status(200).json({ message: "Sign Up Successful" }); // Modify the response message
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).json({ message: "Error inserting user", error });
  }
});

app.post('/insertImage', upload.single('image'), async (req, res) => {
  try {
    const { filename, path } = req.file;

    const newImage = {
      filename,
      path
    };

    await colImages.insertOne(newImage);
    res.status(200).json({ message: "Image Uploaded Successfully" });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: "Error uploading image", error });
  }
});

app.post('/api/dishes', upload.single('image'), async (req, res) => {
  const { name, description, price } = req.body;
  const image = req.file.path;

  const newDish = { name, description, price, image };

  try {
    const result = await col.insertOne(newDish);
    console.log('Dish added successfully:', result);
    res.send(true);
  } catch (error) {
    console.error('Error adding dish:', error);
    res.status(500).json({ message: "Error adding dish", error });
  }
});

app.listen(8081, () => {
  console.log("Server Running");
});
