import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Form, Input, SearchButton, SearchIcon } from "./SearchForm.styled";

const SearchForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const [searchParams] = useSearchParams();
  const params = searchParams.get("query");
  const [value, setValue] = useState(params || "");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        onInput={handleChange}
        value={value}
        {...register("movieName")}
        type="text"
      ></Input>

      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </Form>
  );
};

export default SearchForm;
