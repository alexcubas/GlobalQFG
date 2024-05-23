import { Input, Textarea } from "@chakra-ui/react";

type InputCardType = {
  placeholder: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
export default function TextAreaCard({
  placeholder,
  value,
  onChange,
}: InputCardType) {
  return (
    <Textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      textColor={"pink1"}
      sx={{
        "&::placeholder": {
          color: "pink1",
        },
      }}
      minH={"150px"}
      borderRadius={"15px"}
      backgroundColor={"white"}
    />
  );
}
