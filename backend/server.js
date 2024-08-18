const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Admin = require('./models/Admin');

const adminRoutes = require('./routes/admin');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://abc:1234@atlascluster.88ax3.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));



// MongoDB Connection


// Import Routes
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);
app.use('/api/admins', adminRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
