import { Field } from "formik";
import InputField from "../../libs/components/InputField";
import Styles from "../../styles/Styles";
import { useRef } from "react";
import { Text } from "react-native";

const LoginForm = ({ handleChange, handleBlur, setFieldValue, values }) => {
  const nicknameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  return (
    <>
      <Text style={{ bottom: 10 }}>{"Nickname"}</Text>
      <Field
        inputContainerStyle={Styles.LabelStyle}
        containerStyle={Styles.InputStyle}
        style={Styles.input}
        type="text"
        name="username"
        value={values.username}
        onChangeText={handleChange("username")}
        //placeholder="Nickname"
        id="username"
        component={InputField}
        // validate={validateFirstName}
        hasFeedback
        inputRef={nicknameInputRef}
        onSubmitEditing={() => {
          // Geç butonuna basıldığında bir sonraki alanı odaklayın
          if (values.firstname) {
            passwordInputRef.current.focus();
          } else {
            nicknameInputRef.current.shake();
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
        //placeholder="Şifre"
        id="password"
        component={InputField}
        // validate={validateFirstName}
        hasFeedback
        inputRef={passwordInputRef}
      />
    </>
  );
};

export default LoginForm;
