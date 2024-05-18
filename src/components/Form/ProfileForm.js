import { Field } from "formik";
import InputField from "../../libs/components/InputField";
import Styles from "../../styles/Styles";
import { useRef } from "react";

const ProfileForm = ({ handleChange, handleBlur, setFieldValue, values }) => {
  const nicknameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const dateBirthInputRef = useRef(null);
  const gengerInputRef = useRef(null);
  return (
    <>
      <Field
        inputContainerStyle={Styles.LabelStyle}
        containerStyle={Styles.InputStyle}
        style={Styles.input}
        type="text"
        name="nickName"
        value={values.nickName}
        onChangeText={handleChange("nickName")}
        placeholder="Nickname"
        id="nickName"
        component={InputField}
        // validate={validateFirstName}
        hasFeedback
        inputRef={nicknameInputRef}
        onSubmitEditing={() => {
          // Geç butonuna basıldığında bir sonraki alanı odaklayın
          if (values.firstname) {
            emailInputRef.current.focus();
          } else {
            nicknameInputRef.current.shake();
          }
        }}
      />
      <Field
        inputContainerStyle={Styles.LabelStyle}
        containerStyle={Styles.InputStyle}
        style={Styles.input}
        type="text"
        name="email"
        value={values.email}
        onChangeText={handleChange("email")}
        placeholder="E-mail"
        label={"E-mail"}
        id="email"
        component={InputField}
        // validate={validateFirstName}
        hasFeedback
        inputRef={emailInputRef}
        onSubmitEditing={() => {
          // Geç butonuna basıldığında bir sonraki alanı odaklayın
          if (values.firstname) {
            dateBirthInputRef.current.focus();
          } else {
            emailInputRef.current.shake();
          }
        }}
      />

      <Field
        inputContainerStyle={Styles.LabelStyle}
        containerStyle={Styles.InputStyle}
        style={Styles.input}
        type="text"
        name="dateBirth"
        value={values.dateBirth}
        onChangeText={handleChange("dateBirth")}
        placeholder="Doğum Günü"
        id="dateBirth"
        component={InputField}
        // validate={validateFirstName}
        hasFeedback
        inputRef={dateBirthInputRef}
        onSubmitEditing={() => {
          // Geç butonuna basıldığında bir sonraki alanı odaklayın
          if (values.firstname) {
            gengerInputRef.current.focus();
          } else {
            dateBirthInputRef.current.shake();
          }
        }}
      />

      <Field
        inputContainerStyle={Styles.LabelStyle}
        containerStyle={Styles.InputStyle}
        style={Styles.input}
        type="text"
        name="genger"
        value={values.dateBirth}
        onChangeText={handleChange("genger")}
        placeholder="Cinsiyet"
        id="genger"
        component={InputField}
        // validate={validateFirstName}
        hasFeedback
        inputRef={gengerInputRef}
        /* onSubmitEditing={() => {
            // Geç butonuna basıldığında bir sonraki alanı odaklayın
            if (values.firstname) {
                gengerInputRef.current.focus()
            } else {
                dateBirthInputRef.current.shake()
            }
          }}*/
      />
    </>
  );
};

export default ProfileForm;
