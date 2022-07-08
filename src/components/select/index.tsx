import Select, { Props as SelectProps } from "react-select";

export type OptionType = { label: string; value: string | number };
export type isMultiType = boolean;

const SelectComponent = <T extends boolean>(
  props: SelectProps<OptionType, T>
) => {
  const { ...rest } = props;

  return <Select {...rest} />;
};
export default SelectComponent;
