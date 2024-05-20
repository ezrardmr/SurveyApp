import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Styles from "../../styles/Styles";
import GoogleIcons from "react-native-vector-icons/MaterialIcons";
import * as Yup from "yup";
import { Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import ProfileForm from "../../components/Form/ProfileForm";
import { useDispatch } from "react-redux";
import { getUser, logout } from "../../store/actions/securityActions";

const Profile = ({}) => {
  const [currentUser, setCurrentUser] = useState({});
  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch();
  const scrollRef = useRef();

  useEffect(() => {
    dispatch(getUser()).then((response) => {
      setCurrentUser(response);
    });
  }, []);

  const initialValues = {
    username: "",
    email: "",
    dateBirth: "",
    genger: "",
  };

  const validationSchema = Yup.object().shape({
    nickName: Yup.string().label("nickName").required(""),
    email: Yup.string().label("email").required(""),
    dateBirth: Yup.string().label("dateBirth").required(""),
    genger: Yup.string().label("genger").required(""),
  });

  const handleEditPress = () => {
    setEditable(!editable);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          ref={scrollRef}
          style={{ flexDirection: "column", paddingBottom: 100 }}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={{
              flex: 1,
              left: 40,
              marginTop: 10,
            }}
          >
            <View
              style={{ width: "80%", justifyContent: "space-between", flex: 1 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <GoogleIcons name={"person"} style={styles.icon} />
                  <Text style={{ top: 20, color: "#101090", fontSize: 20 }}>
                    {" "}
                    PROFİL{" "}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => dispatch(logout())}>
                    <GoogleIcons
                      name={"logout"}
                      style={{
                        right: 10,
                        top: 20,
                        fontSize: 30,
                        color: "#101090",
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ flex: 1, top: 20 }}>
                <Text style={{ opacity: 0.5 }}> Hesap Bilgileri</Text>
                <Formik
                  enableReinitialize={true}
                  initialValues={currentUser}
                  onSubmit={(values) => {
                    handleSubmit(values);
                  }}
                  validator={validationSchema}
                >
                  {({
                    handleChange,
                    values,
                    handleSubmit,
                    errors,
                    isValid,
                    isSubmitting,
                    touched,
                    handleBlur,
                    setFieldValue,
                  }) => (
                    <>
                      <ProfileForm
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        setFieldValue={setFieldValue}
                        values={values}
                        editable={editable}
                        onEditPress={handleEditPress}
                      />

                      <Text style={{ top: 10, opacity: 0.5 }}> Hakkımızda</Text>

                      <TouchableOpacity
                        style={{
                          borderColor: "#d6d5d8",
                          borderWidth: 1,
                          borderRadius: 8,
                          height: 50,
                          backgroundColor: "#d6d5d8",
                          marginBottom: 10,
                          top: 20,
                        }}
                      >
                        <Text
                          style={{
                            textAlign: "left",
                            fontSize: 15,
                            lineHeight: 19,
                            fontWeight: "500",
                            top: 9,
                            color: "#101090",
                          }}
                        >
                          {" "}
                          Gizlilik Politikası
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          borderColor: "#d6d5d8",
                          borderWidth: 1,
                          borderRadius: 8,
                          height: 50,
                          backgroundColor: "#d6d5d8",
                          marginBottom: 10,
                          top: 20,
                        }}
                      >
                        <Text
                          style={{
                            textAlign: "left",
                            fontSize: 15,
                            lineHeight: 19,
                            fontWeight: "500",
                            top: 9,
                            color: "#101090",
                          }}
                        >
                          {" "}
                          Şartlar ve Koşullar
                        </Text>
                      </TouchableOpacity>
                    </>
                  )}
                </Formik>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  menuTextStyle: {
    position: "absolute",
    bottom: "15%",
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
  },
  header: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  icon: {
    top: 20,
    fontSize: 30,
    color: "#101090",
  },
});
