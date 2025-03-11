import { useInputValidation } from "6pp";
import { Search as SearchIcon, Close as CloseIcon } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  IconButton,
  InputAdornment,
  List,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import UserItem from "../shared/UserItem";
import { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";
import { useSelector, useDispatch } from "react-redux";
import { setIsSearch } from "../../redux/reducer/misc";
import { useSearchUserQuery } from "../../redux/api/api";
import { useErrors } from "../../hooks/hook";

const Search = () => {
  const dispatch = useDispatch();
  const search = useInputValidation("");
  const [users, setUsers] = useState(sampleUsers);
  const { isSearch } = useSelector((state) => state.misc);
  const isLoadingSendFriendRequest = false;
  const {data, isLoading, isError, error} = useSearchUserQuery(search.value);


  useErrors([{isError, error}])

  const addFriendHandler = (id) => {
    console.log(`Friend request sent to user with ID: ${id}`);
  };

  const handleClose = () => {
    dispatch(setIsSearch(false));
  };

  return (
    <Dialog open={isSearch} onClose={handleClose} fullWidth maxWidth="sm">
      <Stack spacing={2} p={3}>
        {/* Header with Title and Close Button */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <DialogTitle>Find People</DialogTitle>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Stack>

        {/* Search Input */}
        <TextField
          placeholder="Search users..."
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* User List */}
        {data?.users?.length > 0 ? (
          <List>
            {data?.users?.map((user) => (
              <UserItem
                user={user}
                key={user._id}
                handler={addFriendHandler}
                isAdded
                handlerIsLoading={isLoadingSendFriendRequest}
              />
            ))}
          </List>
        ) : (
          <Typography align="center" color="textSecondary">
            No users found.
          </Typography>
        )}
      </Stack>
    </Dialog>
  );
};

export default Search;
