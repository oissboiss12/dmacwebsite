const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('config');
const Admin = require('./models/admin');

const db = config.get('mongoURI');

mongoose.connect( db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error(err.message));

const createAdmin = async () => {
    const name = 'DMACTruckandTrailers';
    const email = 'info@dmactruckandtrailer.co.uk';
    const password = 'MacsportR5';

    try {
        let admin = await Admin.findOne( {name, email });
        if (admin) {
            console.log('Admin user already exists');
            process.exit(1);
        }

        admin = new Admin({ name, email, password });

        await admin.save();
        console.log('Admin user created successfully');
        process.exit(0);
    } catch (err) {
        console.error(err, message);
        process.exit(1);
    }
};

createAdmin();