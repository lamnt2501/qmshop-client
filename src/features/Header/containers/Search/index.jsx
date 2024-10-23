import { useEffect, useState } from "react";
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import {
  searchProductsByName,
  selectSearchResult,
  // selectSearchStatus,
} from "../../../../app/reducers";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router";

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
      disablePortal
      onChange={(e, newValue) => handleOnChange(e, newValue)}
      options={products}
      getOptionLabel={(option) => option.name}
      sx={{ width: 200 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Movie"
          onChange={(e) => setName(e.target.value)}
        />
      )}
    />
  );
};

export default Search;
