// Render Prop
import React, { ReactEventHandler } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Button,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  makeStyles,
  Typography
} from "@material-ui/core";
import classes from "*.module.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

const StudyQuiz: React.FC = () => {
  const [state, setState] = React.useState({
    q1a: false,
    q1b: false,
    q1c: false,
    q1d: false,
    q2a: false,
    q2b: false,
    q2c: false,
    q2d: false
  });
  const { q1a, q1b, q1c, q1d, q2a, q2b, q2c, q2d } = state;
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      {({ isSubmitting, values }) => (
        <>
          <Typography>Java Quiz</Typography>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              "How many instances can a singleton class have?"
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={q1a} onChange={handleChange} name="q1a" />
                }
                label="2"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={q1b} onChange={handleChange} name="q1b" />
                }
                label="3"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={q1c} onChange={handleChange} name="q1c" />
                }
                label="4"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={q1d} onChange={handleChange} name="q1d" />
                }
                label="1"
              />
            </FormGroup>
            <FormLabel component="legend">
              "Why would you use a singleton class?"
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={q2a} onChange={handleChange} name="q2a" />
                }
                label="To create a single instance of a class. All of it’s methods and variables belong to one instance. For example when you want to limit having one connection to a database due to driver limitations or license issues.You create the class, declare a private static instance of the class, create a private constructor and in the public constructor you create one new instance of the class. "
              />
              <FormControlLabel
                control={
                  <Checkbox checked={q2b} onChange={handleChange} name="q2b" />
                }
                label="To give more access to database connections."
              />
              <FormControlLabel
                control={
                  <Checkbox checked={q2c} onChange={handleChange} name="q2c" />
                }
                label="To create a single instance of a class. None of it’s methods and variables belong to one instance. For example when you want to limit having one connection to a database due to driver limitations or license issues.You create the class, declare a public static instance of the class, create a private constructor and in the public constructor you create one new instance of the class. 
                "
              />
              <FormControlLabel
                control={
                  <Checkbox checked={q2d} onChange={handleChange} name="q2d" />
                }
                label="All of the above."
              />
            </FormGroup>
          </FormControl>
        </>
      )}
    </Formik>
  );
};

export default StudyQuiz;
