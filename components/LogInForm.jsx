import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";

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
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Berkeley email is required")
      .matches(/^.*@berkeley\.edu$/, 'Email must end with "@berkeley.edu"'),
  });

  const handleSubmit = async (values) => {
    await sleep(500);
    alert(JSON.stringify(values, null, 2));
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
            label="Email"
            formikProps={formikProps}
            formikKey="email"
            placeholder="Enter @berkeley.edu email..."
          />

          <TextInputLiveFeedback
            label="Password"
            formikProps={formikProps}
            formikKey="password"
            secureTextEntry={true}
          />
          <Text style={styles.forgotPassword} textColor="#21005D">
            Forgot password?
          </Text>
          <View style={styles.buttonContainer}>
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
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    marginTop: 10,
    fontWeight: "700",
    color: "#56595D",
  },
  forgotPassword: {
    marginTop: 10,
    fontStyle: "italic",
    fontSize: "x-small",
  },
  button: {
    marginVertical: 2,
    borderRadius: 5,
    marginTop: 20,
    width: 150,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "end",
    marginTop: 20,
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
