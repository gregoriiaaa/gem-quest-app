import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
//import CalendarPicker from 'react-native-calendar-picker';

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

const QuestForm = ({ navigation }) => {
  const initialValues = {
    title: "",
    date: "",
    time: "",
    agegroup: "",
    rsvplimit: "",
    restaurant: "",
    outdoorspace: "",
    planofaction: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(2, "Must be at least 2 characters")
      .max(40, "Must be less than 40 characters")
      .required("Event title is required"),
    date: Yup.string()
      .required("Event date is required")
      .matches(
        /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/,
        "Must be in the format: MM/DD/YYYY"
      ),
    time: Yup.string()
      .required("Time is required")
      .matches(
        /^(1[012]|0?[1-9]):[0-5][0-9](am|pm)$/,
        "Must be in the format: HH:MMam or HH:MMpm"
      ),
    agegroup: Yup.string().required("Age group is required"),
    rsvplimit: Yup.string().required("RSVP limit is required"),
    planofaction: Yup.string().required("Plan of action is required"),
  });

  const handleSubmit = async (values) => {
    await sleep(500);
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  };

  const ageList = [
    {
      label: "18-20",
      value: "18-20",
    },
    {
      label: "21-25",
      value: "21-25",
    },
    {
      label: "25+",
      value: "25+",
    },
  ]

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <View>
          <TextInputLiveFeedback
            label="Title"
            formikProps={formikProps}
            formikKey="title"
            placeholder="Enter your event title..."
          />

          <TextInputLiveFeedback
            label="Date"
            formikProps={formikProps}
            formikKey="date"
            placeholder="MM/DD/YYYY"
          />

          <TextInputLiveFeedback
            label="Time"
            formikProps={formikProps}
            formikKey="time"
            placeholder="00:00am"
          />

          <TextInputLiveFeedback
            label="Restaurant"
            formikProps={formikProps}
            formikKey="restaurant"
          />

          <TextInputLiveFeedback
            label="Outdoor Space"
            formikProps={formikProps}
            formikKey="outdoorspace"
          />

          <TextInputLiveFeedback
            label="Plan of Action"
            formikProps={formikProps}
            formikKey="planofaction"
          />

          <View style={styles.buttonContainer}>
            <Button
              onPress={() => navigation.navigate("LayoutScreen")}
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

export default QuestForm;