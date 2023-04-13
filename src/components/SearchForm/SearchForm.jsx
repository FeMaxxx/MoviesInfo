import { useForm } from "react-hook-form";

import { Form, Input, SearchButton, SearchIcon } from "./SearchForm.styled";

const SearchForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("movieName")} type="text"></Input>

      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </Form>
  );
};

export default SearchForm;
