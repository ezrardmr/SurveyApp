import { Field } from "formik";
import InputField from "../../libs/components/InputField";
import Styles from "../../styles/Styles";
import { useRef } from "react";
import { Text, TouchableOpacity } from "react-native";

const RegisterForm = ({ handleChange, handleBlur, setFieldValue, values }) => {
  const nicknameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const dateBirthInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  return (
    <>
      <Text style={{ bottom: 10 }}>{"E-Mail"}</Text>
      <Field
        inputContainerStyle={Styles.LabelStyle}
        containerStyle={Styles.InputStyle}
        style={Styles.input}
        type="text"
        name="email"
        value={values.email}
        onChangeText={handleChange("email")}
        //placeholder="E-mail"
        label={"E-mail"}
        id="email"
        component={InputField}
        // validate={validateFirstName}
        hasFeedback
        inputRef={emailInputRef}
        onSubmitEditing={() => {
          // Geç butonuna basıldığında bir sonraki alanı odaklayın
          if (values.firstname) {
            nicknameInputRefInputRef.current.focus();
          } else {
            emailInputRef.current.shake();
          }
        }}
      />
      <Text style={{ bottom: 5 }}>{"Nickname"}</Text>
      <Field
        inputContainerStyle={Styles.LabelStyle}
        containerStyle={Styles.InputStyle}
        style={Styles.input}
        type="text"
        name="nickName"
        value={values.nickName}
        onChangeText={handleChange("nickName")}
        //placeholder="Nickname"
        id="nickName"
        component={InputField}
        // validate={validateFirstName}
        hasFeedback
        inputRef={nicknameInputRef}
        onSubmitEditing={() => {
          // Geç butonuna basıldığında bir sonraki alanı odaklayın
          if (values.firstname) {
            passwordInputRef.current.focus();
          } else {
            emailInputRefInputRef.current.shake();
          }
        }}
      />
      <Text style={{ bottom: 10 }}>
        {
          "Gizliliğinizi önemsiyoruz. Lütfen ad ve soyad girmeden nickname oluşturunuz."
        }
      </Text>
      <Text style={{ bottom: 5 }}>{"Şifre"}</Text>
      <Field
        inputContainerStyle={Styles.LabelStyle}
        containerStyle={Styles.InputStyle}
        style={Styles.input}
        type="text"
        name="password"
        value={values.password}
        onChangeText={handleChange("password")}
        //placeholder="Nickname"
        id="password"
        component={InputField}
        // validate={validateFirstName}
        hasFeedback
        inputRef={nicknameInputRef}
        onSubmitEditing={() => {
          if (values.firstname) {
            dateBirthInputRef.current.focus();
          } else {
            passwordInputRef.current.shake();
          }
        }}
      />
      <Text style={{ bottom: 5 }}>{"Doğum Tarihi"}</Text>
      <Field
        inputContainerStyle={Styles.LabelStyle}
        containerStyle={Styles.InputStyle}
        style={Styles.input}
        type="text"
        name="dateBirth"
        value={values.dateBirth}
        onChangeText={handleChange("dateBirth")}
        //placeholder="Nickname"
        id="dateBirth"
        component={InputField}
        hasFeedback
        inputRef={dateBirthInputRef}
      />
    </>
  );
};

export default RegisterForm;
