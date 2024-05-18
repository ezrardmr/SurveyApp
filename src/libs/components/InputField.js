import React, { useState } from "react";
import { View } from "react-native";
import { Icon, Input, Text } from "react-native-elements";
import { useFormik, useFormikContext } from "formik";
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

  const handleFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
    form.handleBlur(field.name);
  };

  return (
    <View>
      <Text
        onPress={() => inputRef.current.focus()}
        suppressHighlighting={true}
        style={{
          position: "absolute",
          zIndex: 1,
          color: focus || field.value ? "#4568e0" : "#8c9397",
          left: 10,
          fontSize: focus || field.value ? 13 : 17,
          fontWeight: "400",
          top: focus || field.value ? 4 : 15,
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
        value={field.value}
        onChangeText={form.handleChange(field.name)}
        onFocus={handleFocus}
        onBlur={onBlur}
        isValid={form.touched[field.name] && isValid}
        isInvalid={isInvalid}
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
      ></Input>
    </View>
  );
};
export default InputField;
