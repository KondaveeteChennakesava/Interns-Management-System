const InternData = require("../models/User");

//controller code to add any data in to database.
const AddIntern = async (req, res, next) => {
  const {
    username,
    internId,
    email,
    campus,
    branch,
    technology,
    gender,
    slot,
    startDate,
    mobileNo,
    endDate,
    acntHolderName,
    bankBranch,
    ifscCode,
    bankAcntNo,
  } = req.body;
  let existingUser;
  try {
    existingUser = await InternData.findOne({ internId });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({ message: "Intern Already Exists" });
  }
  const intern = new InternData({
    username,
    internId,
    email,
    campus,
    branch,
    technology,
    slot,
    gender,
    mobileNo,
    startDate,
    endDate,
    acntHolderName,
    bankBranch,
    ifscCode,
    bankAcntNo,
  });
  try {
    await intern.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ intern });
};

//controller code to get all data from database.
const GetInternsData = async (req, res, next) => {
  let interns;
  try {
    interns = await InternData.find();
  } catch (err) {
    return console.log(err);
  }
  if (!interns) {
    return res.status(400).json({ message: "No Users Found." });
  }
  return res.status(201).json({ interns });
};

//controller code to get single record of data by Id from database.
const InternDataById = async (req, res, next) => {
  const _id = req.params.id;
  await InternData.findById(_id)
    .then((response) => {
      res
        .status(200)
        .json({ msg: "successfully fetched single data", response });
    })
    .catch((error) => console.log(error));
};

//controller code to update single record of data by Id in database
const UpdateSingleIntern = async (req, res, next) => {
  const _id = req.params.id;
  console.log(req.body);
  InternData.findByIdAndUpdate(_id, req.body)
  .then(res => {
      return res.status(200).json({ message: "User updated successfully" });
  })
  .catch(err =>{
    console.log(err)
      return res.status(400).json({ message: "User not updated" });
  })
  // let intern = await InternData.findByIdAndUpdate(_id, req.body);
  // intern = await intern
  //   .save()
  //   .then(() => {
  //     console.log("updated");
  //     return res.status(200).json({ message: "User updated successfully" });
  //   })
  //   .catch((er) => {
  //     console.log(er);
  //     return res.status(400).json({ message: "User not updated" });
  //   });
};

//controller code to delete single record of data using Id from database;
const DeleteInternData = async (req, res, next) => {
  const id = req.params.id;
  // console.log(user_ID)
  await InternData.findByIdAndDelete({ _id: id })
    .then(() => {
      res.status(200).json({ message: "User data deleted succeffully" });
      console.log("data deleted succeffully");
    })
    .catch((er) => {
      res.status(400).json({ message: "user data not deleted" });
      console.log(er);
    });
};

exports.AddIntern = AddIntern;
exports.GetInternsData = GetInternsData;
exports.UpdateSingleIntern = UpdateSingleIntern;
exports.InternDataById = InternDataById;
exports.DeleteInternData = DeleteInternData;