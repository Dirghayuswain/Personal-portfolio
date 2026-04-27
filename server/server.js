const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection (Replace <db_password> with your actual password)
mongoose.connect('mongodb://localhost:27017/portfolio')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Project Schema
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  link: String
});

const Project = mongoose.model('Project', projectSchema);

// API Routes
app.get('/api/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
