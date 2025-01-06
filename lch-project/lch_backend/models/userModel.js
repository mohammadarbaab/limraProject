import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADzSURBVHgBnVOLFYIwDDyZgBE6giN0BDcAJ8AN0BGcwBF0A3QC3AA3gA0wqUFKPyDee/d4TS/XNgmAj5RYEitiS+zly+ucqLCAwkm8Ei+OYUM8xAxKS6Qjmlz2e9EHDWp5jo3Quhb990bKukEaOLmXr2vEen5imlhuJ2IHH7HYXsxMfi2O/6CVfHPdKiLS+HRHR/ZN1xLMQ2F5NkxNXvAL+is4r2OTJ3GL9UZK8h5scpZgiXUY9LchwAXiAmeB03L4NckwztZEHB1nB4VloBA4tcH0J9MS38m6njMYwMU9WmYuW9mfNGGDODTGrvGYcxfvIeEbjaBNjIqFy20AAAAASUVORK5CYII="
  },
  address: {
    type: Object,
    default:{
        line1:"",
        line2:"",
    }
  },
  gender: {
    type: String,
    default: "NOT SELECTED",
  },
  dob: {
    type: String,
    default: "NOT SELECTED",
  },
  phone: {
    type: String,
    default: "000000000",
  },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
