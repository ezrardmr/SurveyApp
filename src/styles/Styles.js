import React from "react";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  HomeFooter: {
    flex: 11,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  RegisterFooter: {
    flex: 11,
    flexDirection: "column",
  },
  LoginFooter: {
    flex: 12,
    flexDirection: "column",
    justifyContent: "center",
  },
  GenerateFooter: {
    flex: 12,
    flexDirection: "column",
    marginTop: "5%",
  },
  header: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: "3%",
  },
  LoginStyle: {
    width: "95%",
  },
  RegisterStyle: {
    justifyContent: "center",
    backgroundColor: "white",
    height: 200,
    width: 280,
    borderBottomRightRadius: 60,
    borderTopRightRadius: 60,
    marginTop: "15%",
    elevation: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  input: {
    textAlign: "left",
    fontSize: 17,
    lineHeight: 19,
    fontWeight: "500",
    top: 9,
  },
  ViewStyle: {
    flex: 1,
  },
  LoginText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
    padding: 15,
  },
  LabelStyle: {
    borderBottomWidth: 0,
    //height: "100%",
  },
  InputStyle: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    backgroundColor: "white",
    marginBottom: 10,
  },
  PhoneNumLabelStyle: {
    borderBottomWidth: 0,
    width: "100%",
  },
  PhoneNumInputStyle: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 20,
    flex: 3,
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  PhoneNumField: {
    textAlign: "center",
    fontSize: 25,
    width: "100%",
  },
  ButtonContainerStyle: {
    height: "18%",
  },
  LoginButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#ffae33",
    height: "100%",
  },
  GenerateButtonStyle: {
    borderRadius: 30,
    backgroundColor: "#ffae33",
    height: 50,
    width: "95%",
    alignSelf: "center",
    marginTop: "5%",
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
  CardStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000",
    height: 350,
    backgroundColor: "white",
    padding: 10,
  },
  CardStyle2: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000",
    height: 460,
    backgroundColor: "white",
    padding: 10,
  },
  RegisterCardStyle: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 200,
  },
  deleteContainer: {
    flex: 1,
  },
  deleteScrollView: {
    backgroundColor: "white",
  },
  deleteText: {
    fontSize: 26,
  },
  otpInput: {
    fontSize: 22,
    fontWeight: "bold",
    width: 60,
    height: 60,
    //borderWidth: 2,
    //borderColor: '#ffae33',
    textAlign: "center",
    borderRadius: 15,
    backgroundColor: "#F0F0F0",
    elevation: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
});

export default Styles;
