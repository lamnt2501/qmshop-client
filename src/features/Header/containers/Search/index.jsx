import { useEffect, useState } from "react";
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import {
  searchProductsByName,
  selectSearchResult,
} from "../../../../app/reducers";
import { useNavigate } from "react-router";
import { Autocomplete, TextField } from "@mui/material";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const products = useSelector(selectSearchResult);

  useEffect(() => {
    dispatch(searchProductsByName(name));
  }, [dispatch, name]);

  const handleOnChange = (event, newValue) => {
    if (event.type === "click") {
      navigate(`/products/${newValue.slug}`);
    }
  };

  return (
    <Autocomplete
      fullWidth
      freeSolo
      disableClearable
      placeholder={"Tìm kiếm"}
      onChange={(e, newValue) => handleOnChange(e, newValue)}
      options={products}
      getOptionLabel={(option) => option.name}
      // sx={{ width: 200 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Tìm kiếm"
          variant="filled"
          onChange={(e) => setName(e.target.value)}
        />
      )}
    />
  );
};

export default Search;
