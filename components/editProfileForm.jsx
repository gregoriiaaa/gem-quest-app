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
  multiline = false,
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
        multiline={multiline}
        numberOfLines={multiline ? 2 : 1}
      />
      {formikProps.touched[formikKey] && formikProps.errors[formikKey] && (
        <Text style={{ color: "red" }}>{formikProps.errors[formikKey]}</Text>
      )}
      <Text style={{ fontSize: 12 }}>{helpText}</Text>
    </View>
  );
};

const editProfileForm = ({ navigation }) => {
  const initialValues = {
    GenderIdentity: "",
    EthnicIdentity: "",
    PersonalityType: "",
    Pets: "",
    DietaryRestriction: "",
    DrinkTypes: "",
    ComfortFood: "",
    EntertainmentType: "",
    TopMovie: "",
    TopShow: "",
    TopBook: "",
    MusicTaste: "",
    TopArtist: "",
  };

  const validationSchema = Yup.object({
    GenderIdentity: Yup.string(),
    EthnicIdentity: Yup.string(),
    PersonalityType: Yup.string(),
    Pets: Yup.string(),
    DietaryRestriction: Yup.string(),
    DrinkTypes: Yup.string(),
    ComfortFood: Yup.string(),
    EntertainmentType: Yup.string(),
    TopMovie: Yup.string(),
    TopShow: Yup.string(),
    TopBook: Yup.string(),
    MusicTaste: Yup.string(),
    TopArtist: Yup.string(),
  });

  const handleSubmit = async (values) => {
    // await sleep(500);
    // alert(JSON.stringify(values, null, 2));
    navigation.navigate("Profile", { profileData: values });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {(formikProps) => (
        <View>
          <View style={styles.h1Container}>
            {" "}
            <Text style={styles.h1} variant="titleLarge">
              Build Profile
            </Text>
          </View>
          <View style={styles.sections}>
            <Text style={styles.h2} variant="titleMedium">
              About You
            </Text>
          </View>

          <TextInputLiveFeedback
            label="Gender Identity:"
            formikProps={formikProps}
            formikKey="GenderIdentity"
            placeholder="Enter gender identity..."
          />

          <TextInputLiveFeedback
            label="Ethnic Identity:"
            formikProps={formikProps}
            formikKey="EthnicIdentity"
            placeholder="Enter ethnic identity..."
          />

          <TextInputLiveFeedback
            label="Personality Type:"
            formikProps={formikProps}
            formikKey="PersonalityType"
            number="2"
            multiline={true}
            placeholder="How would you describe your personality..."
          />

          <TextInputLiveFeedback
            label="Do you have any pets?"
            formikProps={formikProps}
            formikKey="Pets"
            multiline={true}
            placeholder="Enter the kind of pet and any other information about your pet you’d like to share..."
          />
          <View style={styles.sections}>
            <Text style={styles.h2} variant="titleMedium">
              Food
            </Text>
          </View>
          <TextInputLiveFeedback
            label="Dietary Restriction?"
            formikProps={formikProps}
            formikKey="DietaryRestriction"
            placeholder="Enter your dietary restrictions..."
          />

          <TextInputLiveFeedback
            label="Coffee, Tea, Boba, or All?"
            formikProps={formikProps}
            formikKey="DrinkTypes"
            placeholder="Enter preference..."
          />

          <TextInputLiveFeedback
            label="Comfort meals/food?"
            formikProps={formikProps}
            formikKey="ComfortFood"
            multiline={true}
            placeholder="Enter you comfort meals and favorite foods..."
          />
          <View style={styles.sections}>
            <Text style={styles.h2} variant="titleMedium">
              Entertainment
            </Text>
          </View>
          <TextInputLiveFeedback
            label="Movie, show, book person:"
            formikProps={formikProps}
            formikKey="EntertainmentType"
            multiline={true}
            placeholder="Enter your movie, show, and book person..."
          />

          <TextInputLiveFeedback
            label="Top Movie:"
            formikProps={formikProps}
            formikKey="TopMovie"
            placeholder="Enter your top movie..."
          />

          <TextInputLiveFeedback
            label="Top Show:"
            formikProps={formikProps}
            formikKey="TopShow"
            placeholder="Enter your top show..."
          />

          <TextInputLiveFeedback
            label="Top Book:"
            formikProps={formikProps}
            formikKey="TopBook"
            placeholder="Enter your top book..."
          />

          <TextInputLiveFeedback
            label="Music Taste:"
            formikProps={formikProps}
            formikKey="MusicTaste"
            placeholder="Describe your taste in music..."
          />

          <TextInputLiveFeedback
            label="Top Artist"
            formikProps={formikProps}
            formikKey="TopArtist"
            placeholder="Enter your top artist..."
          />
          <View style={styles.buttonContainer}>
            <Button
              mode="outlined"
              style={styles.button}
              icon="book-remove-outline"
              onPress={() => {
                formikProps.resetForm();
              }}
            >
              Clear
            </Button>
            <Button
              onPress={() => {
                formikProps.handleSubmit();
                // navigation.navigate("LayoutScreen");
              }}
              mode="contained"
              style={styles.button}
              buttonColor="#21005D"
              icon="file-document-edit"
              contentStyle={styles.submitButtonContent}
            >
              Save
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
  h1Container: {
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 900,
    color: "#56595D",
  },
  // Source for bottom border:  https://reactnativecode.com/add-border-to-only-bottom-side-of-view/
  sections: {
    width: 300,
    height: 70,
    borderBottomWidth: 3,
    borderBottomColor: "#21005d",
  },
  h2: {
    marginTop: 20,
    fontWeight: "800",
    color: "#56595D",
  },
  inputField: {
    marginTop: 10,
    fontWeight: "700",
    color: "#56595D",
  },
  button: {
    marginVertical: 2,
    borderRadius: 5,
    marginTop: "1em",
    width: 130,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "2em",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    width: "100%",
  },
  submitButtonContent: {
    // flexDirection: "row-reverse",
  },
});

export default editProfileForm;
