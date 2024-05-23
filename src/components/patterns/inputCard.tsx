import { Input } from "@chakra-ui/react";

type InputCardType = {
  placeholder: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function InputCard({
  placeholder,
  value,
  onChange,
}: InputCardType) {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      borderRadius={"15px"}
      textColor={"pink1"}
      sx={{
        "&::placeholder": {
          color: "pink1",
        },
      }}
      backgroundColor={"white"}
      isRequired
      _focus={{ borderColor: "white", boxShadow: "0 0 0 2px #DF4076" }}
    />
  );
}
