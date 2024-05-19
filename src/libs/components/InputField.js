import React, { useState } from "react";
import { View, Text } from "react-native";
import { Icon, Input } from "react-native-elements";
import { useFormikContext } from "formik";

const InputField = ({
  label,
  field,
  form,
  type,
  value,
  name,
  id,
  display,
  validate,
  maxLength,
  keyboardType,
  inputRef,
  containerStyle,
  placeholder,
  ...props
}) => {
  const isValid = !form.errors[field.name];
  const isInvalid = form.touched[field.name] && !isValid;
  const [focus, setFocus] = useState(false);
  const { handleBlur, validateField } = useFormikContext();

  const handleFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
    handleBlur(id);
    validateField(id);
  };

  return (
    <View>
      <Text
        onPress={() => inputRef.current.focus()}
        suppressHighlighting={true}
        style={{
          position: "absolute",
          zIndex: 1,
          color: focus || value ? "#4568e0" : "#8c9397",
          left: 10,
          fontSize: focus || value ? 13 : 17,
          fontWeight: "400",
          top: focus || value ? 4 : 15,
        }}
      >
        {placeholder}
      </Text>
      <Input
        ref={inputRef}
        containerStyle={{
          ...containerStyle,
          borderColor: focus ? "#4568e0" : !isValid ? "red" : "#d6d5d8",
        }}
        type={type}
        value={value}
        name={name}
        id={id}
        onFocus={handleFocus}
        onBlur={onBlur}
        maxLength={maxLength}
        keyboardType={keyboardType}
        placeholder={display}
        isValid={form.touched[field.name] && isValid}
        isInvalid={isInvalid}
        feedback={form.errors[field.name]}
        autoComplete={
          id === "firstname"
            ? "name-given"
            : id === "lastname"
            ? "name-family"
            : null
        }
        textContentType={
          id === "firstname"
            ? "givenName"
            : id === "lastname"
            ? "familyName"
            : null
        }
        rightIcon={
          isValid ? (
            <Icon
              name="exclamation-circle"
              type="font-awesome"
              color="transparent"
            />
          ) : (
            <Icon name="exclamation-circle" type="font-awesome" color="red" />
          )
        }
        {...props}
      />
    </View>
  );
};

export default InputField;
