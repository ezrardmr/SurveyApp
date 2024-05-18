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
import { useRef } from "react";
import ProfileForm from "../../components/Form/ProfileForm";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/securityActions";

const Profile = ({}) => {
  const dispatch = useDispatch();

  const initialValues = {
    nickName: "",
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

  const scrollRef = useRef();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          ref={scrollRef}
          style={styles.vehicleAdNewFooter}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={{
              flex: 15,
              left: 40,
              marginTop: 40,
            }}
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
                      right: 85,
                      top: 20,
                      fontSize: 30,
                      color: "#101090",
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{ top: 30, opacity: 0.5 }}> Hesap Bilgileri</Text>

            <View style={{ width: "92%", top: 50, width: "80%" }}>
              <Formik
                enableReinitialize={true}
                initialValues={initialValues}
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
