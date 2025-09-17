import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { toNamespacedPath } from "path/posix";
import { setThePassword } from "whatwg-url";
const app = express();
mongoose.set("strictQuery", false);
const port = process.env.PORT || 5001;
const mongodbURI =
  process.env.mongodbURI ||
  "mongodb+srv://tester:f0eqkEcuW3OqDctb@cluster0.so7bbbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(cors());
app.use(express.json());


const ProductSchema = new mongoose.Schema({
  Name: String ,
 Des: String,
 unitName: String,
 price: Number,
 cate:String,
 createdOn: { type: Date, default: Date.now },
});
const ProductModal = mongoose.model("Product", ProductSchema);

const LogSchema = new mongoose.Schema({
  fullName:String,
  Contact: Number,
  Email:String,
  Password: String ,
 createdOn: { type: Date, default: Date.now },
});
const LogModal = mongoose.model("log", LogSchema);


app.post("/signin", (req, res) => {
  var b = new LogModal({
    fullName:req.body.fullName,
    Contact: req.body.Contact,
    Email: req.body.Email,
    Password:req.body.Password,

  });

  b.save()
    .then((res) => {
      console.log(res, b);
      res.send(res);
    })
    .catch((err) => {
      res.send(err);
    });
});








app.get("/products", (req, res) => {
  ProductModal.find({}, (err, data) => {
    if (!err) {
      res.send({
        message: "got all products successfully",
        data: data,
      });
    } else {
      res.status(500).send({
        message: "server error",
      });
    }
  });
});

app.post("/productData", (req, res) => {
  var a = new ProductModal({
   Name:req.body.Name,
   Des: req.body.Des,
   unitName: req.body.unitName,
   price:req.body. price,
   cat:req.body.cat,

  });

  a.save()
    .then((res) => {
      console.log(res, a);
      res.send(res);
    })
    .catch((err) => {
      res.send(err);
    });
});



const categorySchema = new mongoose.Schema({
  Name:String,
  createdOn: { type: Date, default: Date.now },
});
const categoryModal = mongoose.model("categori", categorySchema);


app.post("/categori", (req, res) => {
  var c = new categoryModal({
    Name:req.body.Name,
  });

  c.save()
    .then((res) => {
      console.log(res, c);
      res.send(res);
    })
    .catch((err) => {
      res.send(err);
    });
});


app.get("/getCategories", (req, res) => {
  categoryModal.find({}, (err, data) => {
    if (!err) {
      res.send({
        message: "got all categories successfully",
        data: data,
      });
    } else {
      res.status(500).send({
        message: "server error",
      });
    }
  });
});





//app.get("/getAddress", (req, res) => {
// ProductModal.find({}, (err, data) => {
//    if (!err) {
//      res.send({
//        message: "got all Address successfully",
//        data: data,
//      });
//    } else {
//      res.status(500).send({
//        message: "server error",
//      });
//    }
//  });
//});


// Customer
//
//let customerSchema = new mongoose.Schema({
//  customername: { type: String, required: true },
//  phone: Number,
//  customerid: Number,
//  email: String,
//  notes: String,
//  createdOn: { type: Date, default: Date.now },
//});
//const customerModel = mongoose.model("customers", customerSchema);
//
//app.post("/customerData", (req, res) => {
//  var b = new customerModel({
//    customername: req.body.customername,
//    phone: req.body.phone,
//    notes: req.body.notes,
//    email: req.body.email,
//    customerid: req.body.customerid,
//  });
//  b.save()
//    .then((res) => {
//      console.log(res, a);
//      res.send(res);
//    })
//    .catch((err) => {
//      res.send(err);
//    });
//});
//
//


//app.get("/customers", (req, res) => {
//  customerModel.find({}, (err, data) => {
//    if (!err) {
//      res.send({
//        message: "got all cutomers successfully",
//        data: data,
//      });
//    } else {
//      res.status(500).send({
//        message: "server error",
//      });
//    }
//  });
//});
//
//app.delete("/customer/:id", (req, res) => {
//  const id = req.params.id;
//
//  customerModel.deleteOne({ _id: id }, (err, deletedData) => {
//    console.log("deleted: ", deletedData);
//    if (!err) {
//      if (deletedData.deletedCount !== 0) {
//        res.send({
//          message: "Product has been deleted successfully",
//        });
//      } else {
//        res.status(404);
//        res.send({
//          message: "No Product found with this id: " + id,
//        });
//      }
//    } else {
//      res.status(500).send({
//        message: "server error",
//      });
//    }
//  });
//});

// History  api

//app.get("/historyCustomer", (req, res) => {
//  historyModel.find({}, (err, data) => {
//    if (!err) {
//      res.send({
//        message: "got all cutomers successfully",
//        data: data,
//      });
//    } else {
//      res.status(500).send({
//        message: "server error",
//      });
//    }
//  });
//});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/////////////////////////////////////////////////////////////////////////////////////////////////
mongoose.connect(mongodbURI);

////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on("connected", function () {
  //connected
  console.log("Mongoose is connected");
});

mongoose.connection.on("disconnected", function () {
  //disconnected
  console.log("Mongoose is disconnected");
  process.exit(1);
});

mongoose.connection.on("error", function (err) {
  //any error
  console.log("Mongoose connection error: ", err);
  process.exit(1);
});

process.on("SIGINT", function () {
  /////this function will run jst before app is closing
  console.log("app is terminating");
  mongoose.connection.close(function () {
    console.log("Mongoose default connection closed");
    process.exit(0);
  });
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////