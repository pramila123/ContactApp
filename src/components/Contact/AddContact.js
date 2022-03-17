import { Button, Dialog, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import FormikController from "../Form/FormikController";
import logo from "../../assets/contact.png";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
const DialogContainer = styled.div`
  padding: 1rem 2.5rem 1.9rem 2.5rem;
  .heading {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 4vh;
      object-fit: cover;
      background: #d9f4fc;
      border-radius: 50%;
      padding: 0.01rem 0.2rem;
    }
    h3 {
      text-transform: uppercase;
    }
  }
  .errors
  {
    color:red;
    margin:0.2rem 0rem 0rem 0.8rem;
  }
`;
const AddContact = () => {
  const [open, setopen] = useState(true);
  const handleClose = () => {
    setopen(false);
  };

  // const [contact, setstate] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  // });
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setstate((initial) => ({ ...initial, [name]: value }));
  // };

  // const { contacts } = useSelector((state) => state.addContact);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Username Required !"),
      email: Yup.string().email().required("Email  Required !"),
      phone: Yup.string()
        .matches(
          /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
          "Must be number"
        )
        .required("Required"),
    }),
    onSubmit: (values) => {
     
      dispatch({
        type: "ADD_CONTACT",
        payload: { values },
      });
      formik.resetForm();
    },
  });

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        BackdropProps={{ invisible: true }}
        PaperProps={{
          style: {
            maxWidth: "500px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          },
        }}
      >
        <DialogContainer>
          <div className="heading">
            <img src={logo} alt="" />
            <h3>Add Contact</h3>
          </div>

          <Grid container spacing={1}>
            <Grid item xs={12}>
              <FormikController
                control="textfield"
                label="Full Name"
                name="name"
                {...formik.getFieldProps("name")}
              />
            </Grid>
          <div className="errors"> {formik.touched.name ? formik.errors.name : ""}{" "}</div>
            <Grid item xs={12}>
              <FormikController
                control="textfield"
                label="Email"
                name="email"
                {...formik.getFieldProps("email")}
              />
            </Grid>
            <div className="errors"> {formik.touched.email ? formik.errors.email : ""}{" "}</div>
            <Grid item xs={12}>
              <FormikController
                control="textfield"
                label="Phone no"
                name="phone"
                {...formik.getFieldProps("phone")}
              />
            </Grid>
            <div className="errors"> {formik.touched.phone ? formik.errors.phone : ""}{" "}</div>
            <Grid item xs={12}>
              <Button
                size="small"
                variant="contained"
                onClick={formik.handleSubmit}
              >
                Add Contact
              </Button>
            </Grid>
          </Grid>
        </DialogContainer>
      </Dialog>
    </>
  );
};

export default AddContact;
