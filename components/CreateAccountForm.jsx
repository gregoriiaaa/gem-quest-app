import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import authService from "../authService.jsx";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const TextInputLiveFeedback = ({
  label,
  helpText,
  formikProps,
  formikKey,
  placeholder,
  secureTextEntry = false,
}) => {
  const inputStyles = {
    borderWidth: 1,
    borderColor:
      formikProps.touched[formikKey] && formikProps.errors[formikKey]
        ? "#eeddee"
        : "lightblue",
  };

  const handleFocus = () => {
    formikProps.setFieldTouched(formikKey, true);
  };
  return (
    <View>
      <Text style={styles.inputField} variant="titleMedium">
        {label}
      </Text>
      <TextInput
        style={inputStyles}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        onFocus={handleFocus}
        value={formikProps.values[formikKey]}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
      />
      {formikProps.touched[formikKey] && formikProps.errors[formikKey] && (
        <Text style={{ color: "red" }}>{formikProps.errors[formikKey]}</Text>
      )}
      <Text style={{ fontSize: 12 }}>{helpText}</Text>
    </View>
  );
};

const CreateAccountForm = ({ navigation }) => {
  const initialValues = {
    name: "",
    email: "",
    birthday: "",
    pronouns: "",
    password: "",
    confirmpassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Must be at least 2 characters")
      .max(40, "Must be less than 40 characters")
      .required("Name is required")
      .matches(
        /^[a-zA-Z]+(\s[a-zA-Z]+)?$/,
        "Please enter a valid first and last name separated by a single space"
      ),
    email: Yup.string()
      .email("Invalid email")
      .required("Berkeley email is required")
      .matches(/^.*@berkeley\.edu$/, 'Email must end with "@berkeley.edu"'),
    birthday: Yup.string()
      .required("Bithday is required")
      .matches(
        /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/,
        "Must be in the format: MM/DD/YYYY"
      ),
    pronouns: Yup.string().required("Pronouns are required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
        "Password must contain at least a Capital Letter, a Number, and a Special Character."
      ),
    confirmpassword: Yup.string()
      .required("Password match is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmit = async (values) => {
    console.log(values);
    //alert(JSON.stringify(values, null, 2));
    await authService.SignUp(
      values.name,
      values.email,
      values.password,
      values.birthday,
      values.pronouns
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <View>
          <TextInputLiveFeedback
            label="Name"
            formikProps={formikProps}
            formikKey="name"
            placeholder="Enter your first and last name..."
          />

          <TextInputLiveFeedback
            label="Email"
            formikProps={formikProps}
            formikKey="email"
            placeholder="Enter @berkeley.edu email..."
          />

          <TextInputLiveFeedback
            label="Birthday"
            formikProps={formikProps}
            formikKey="birthday"
            placeholder="MM/DD/YYYY"
          />

          <TextInputLiveFeedback
            label="Pronouns"
            formikProps={formikProps}
            formikKey="pronouns"
            placeholder="Enter your pronouns..."
          />

          <TextInputLiveFeedback
            label="Password"
            formikProps={formikProps}
            formikKey="password"
            secureTextEntry={true}
          />

          <TextInputLiveFeedback
            label="Confirm Password"
            formikProps={formikProps}
            formikKey="confirmpassword"
            secureTextEntry={true}
          />
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => navigation.navigate("Welcome Screen")}
              mode="outlined"
              style={styles.button}
              icon="arrow-left"
            >
              Back
            </Button>
            <Button
              onPress={formikProps.handleSubmit}
              mode="contained"
              style={styles.button}
              buttonColor="#21005D"
              icon="arrow-right"
              contentStyle={styles.submitButtonContent}
            >
              Submit
            </Button>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    marginTop: ".5em",
    fontWeight: "700",
    color: "#56595D",
  },
  button: {
    marginVertical: 2,
    borderRadius: 5,
    marginTop: "1em",
    width: "150px",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "2em",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  submitButtonContent: {
    flexDirection: "row-reverse",
  },
});

export default CreateAccountForm;
