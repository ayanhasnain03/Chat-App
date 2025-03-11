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
  CircularProgress,
} from "@mui/material";
import UserItem from "../shared/UserItem";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsSearch } from "../../redux/reducer/misc";
import {
  useSearchUserQuery,
  useSendFriendRequestMutation,
} from "../../redux/api/api";
import { useAsyncMutation, useErrors } from "../../hooks/hook";
import toast from "react-hot-toast";

const Search = () => {
  const dispatch = useDispatch();
  const search = useInputValidation("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const { isSearch } = useSelector((state) => state.misc);

  const [sendFriendReq,isLoadingSendFriendRequest] = useAsyncMutation(useSendFriendRequestMutation);



  // Debouncing: Wait for 500ms before setting the search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search.value);
    }, 500);

    return () => clearTimeout(handler);
  }, [search.value]);

  // Fetch users (If search is empty, get all users)
  const { data, isLoading, isError, error } = useSearchUserQuery(
    debouncedSearch,
    {
      skip: !isSearch, // Fetch only when dialog is open
    }
  );

  useErrors([{ isError, error }]);

  const addFriendHandler = async(id) => {
await sendFriendReq("Sending Friend request...",{userId:id})
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

        {/* Loading Indicator */}
        {isLoading ? (
          <Stack alignItems="center" py={2}>
            <CircularProgress size={24} />
          </Stack>
        ) : data?.users?.length > 0 ? (
          <List>
            {data.users.map((user) => (
              <UserItem
                user={user}
                key={user._id}
                handler={addFriendHandler}
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
