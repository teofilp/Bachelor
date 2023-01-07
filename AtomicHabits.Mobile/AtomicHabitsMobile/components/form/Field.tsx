import React, { FunctionComponent } from "react";
import { useController } from "react-hook-form";

interface FieldProps {
  name: string;
  control: any;
  label: string;
  component: FunctionComponent<{
    value: any;
    onValueChanged: (val: any) => void;
    label: string;
  }>
  defaultValue?: any;
  onChange?: (val: any) => void;
  [key: string]: any;
}

const Field = ({ defaultValue, control, name, component: Component, onChange, label, ...rest }: FieldProps) => {
  const { field } = useController({
    control,
    name,
    defaultValue,
  });

  const valueChangedHandler = (value: any) => {
    field.onChange(value);
    onChange?.(value);
  }

  return (
    <Component label={label} value={field.value} onValueChanged={valueChangedHandler} {...rest} />
  );
};

export default Field;