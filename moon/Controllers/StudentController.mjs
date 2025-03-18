import pool from "../config/db.mjs";

//get method
export const getStd = (req, res) => {
  const query = "SELECT * FROM students";
  try {
    pool.query(query, (err, results) => {
      if (err) {
        console.error(err);

        res.status(500).send("Error retrieving Std");
      } else {
        res.status(200).send(results);
      }
    });
  } catch (err) {
    console.error(err);
    res.status(404).send("Error to funtion");
  }
};

//post method
export const postStd = (req, res) => {
  const { name, gender, address, contact_phone, contact_email } =
    req.body;

  const query =
    "INSERT INTO students (name, gender, address, contact_phone, contact_email) VALUE (?,  ?, ?, ?, ?)";

  if (
    !name &&
    !gender &&
    !address &&
    !contact_phone &&
    !contact_email
  ) {
    return res.send("All fields are Required");
  }
  try {
    pool.query(
      query,
      [name,  gender, address, contact_phone, contact_email],
      (err, results) => {
        if (err) {
            console.error('Error inserting the data to dataBase',err);   
           res.status(500).send("Error insert to the std");
        } else {
          res.status(201).send("Std Created successfully");
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(404).send("Error to function");
  }
};

//Put method
export const updateStd = (req, res) => {
  const { student_id } = req.params;
  const { name, date_of_birth, gender, address, contact_phone, contact_email } =
    req.body;

  const query = "UPDATE students SET name = ?,  gender = ?, address = ?, contact_phone = ?, contact_email = ? WHERE student_id = ?";
  try {
    pool.query( query, [name,  gender, address, contact_phone, contact_email, student_id], (err, results) => {
        if (err) {
            console.error('Error to updata data to DataBase',err);
          res.status(500).send("Error update to the Std");
        } else {
          if (results.affectedRows === 0) {
            console.error(err);
            return res.status(404).send("User not found");
          }
          res.status(203).send("Update the Std");
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(404).send({ message: "Error to function" });
  }
};

//Delete method
export const deleteStd = (req, res) => {
  const { student_id } = req.params;
  const query = "DELETE  FROM students WHERE student_id = ?";
  try {
    pool.query(query, [student_id], (err, results) => {
      if (err) {
        res.status(500).send("Error delete to the Std");
      } else {
        if (results.affectedRows === 0) {
            console.error(err);
            
          return res.status(404).send("User not found");
        }
        res.status(204).send( "Std Deleted Successfully" );
      }
    });
  } catch (err) {
    console.error(err);
    res.status(404).send("Error to function");
  }
};
