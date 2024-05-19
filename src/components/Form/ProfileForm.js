import { Field } from "formik";
import InputField from "../../libs/components/InputField";
import Styles from "../../styles/Styles";
import { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import GoogleIcons from "react-native-vector-icons/MaterialIcons";

const ProfileForm = ({
  handleChange,
  handleBlur,
  setFieldValue,
  values,
  editable,
  onEditPress,
}) => {
  const nicknameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const dateBirthInputRef = useRef(null);
  const gengerInputRef = useRef(null);

  const [nicknameEditable, setNicknameEditable] = useState(false);
  const [emailEditable, setEmailEditable] = useState(false);
  const [dateBirthEditable, setDateBirthEditable] = useState(false);
  const [genderEditable, setGenderEditable] = useState(false);

  return (
    <>
      <Field
        inputContainerStyle={Styles.LabelStyle}
        containerStyle={
          nicknameEditable ? Styles.InputStyle : Styles.InputStyleDisabled
        }
        style={Styles.input}
        type="text"
        name="username"
        value={values.username}
        onChangeText={handleChange("username")}
        placeholder="Nickname"
        id="username"
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
      <TouchableOpacity
        onPress={() => setNicknameEditable(!nicknameEditable)}
        style={{ bottom: 40, left: 300 }}
      >
        <GoogleIcons name={"edit"} style={{}} />
      </TouchableOpacity>
      <Field
        inputContainerStyle={Styles.LabelStyle}
        containerStyle={
          emailEditable ? Styles.InputStyle : Styles.InputStyleDisabled
        }
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
      <TouchableOpacity
        onPress={() => setEmailEditable(!emailEditable)}
        style={{ bottom: 40, left: 300 }}
      >
        <GoogleIcons name={"edit"} style={{}} />
      </TouchableOpacity>

      <Field
        inputContainerStyle={Styles.LabelStyle}
        containerStyle={
          dateBirthEditable ? Styles.InputStyle : Styles.InputStyleDisabled
        }
        style={Styles.input}
        type="text"
        name="dateBirth"
        value={values.dateBirth || "10.10.1998"}
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
      <TouchableOpacity
        onPress={() => setDateBirthEditable(!dateBirthEditable)}
        style={{ bottom: 40, left: 300 }}
      >
        <GoogleIcons name={"edit"} style={{}} />
      </TouchableOpacity>

      <Field
        inputContainerStyle={Styles.LabelStyle}
        containerStyle={
          genderEditable ? Styles.InputStyle : Styles.InputStyleDisabled
        }
        style={Styles.input}
        type="text"
        name="genger"
        value={values.genger || "Erkek"}
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
      <TouchableOpacity
        onPress={() => setGenderEditable(!genderEditable)}
        style={{ bottom: 40, left: 300 }}
      >
        <GoogleIcons name={"edit"} style={{ color: "#101090" }} />
      </TouchableOpacity>
    </>
  );
};

export default ProfileForm;
