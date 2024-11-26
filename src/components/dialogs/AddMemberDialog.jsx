import {
    Button,
    Dialog,
    DialogTitle,
    Skeleton,
    Stack,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { sampleUsers } from "../../constants/sampleData";
  import UserItem from "../shared/UserItem";
import { useState } from "react";
 
  const AddMemberDialog = ({ chatId,addMember,isLoadingMember }) => {

    const [members, setMembers] = useState(sampleUsers)
    const [selectedMembers, setselectedMembers] = useState([]);
    console.log(selectedMembers);


const selectedMembersHandler = (id) => {
    setselectedMembers((prev)=>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id])
}
 const closeHandler = () => {
setselectedMembers([]);
setMembers([])
    };
 
  
const isLoading=false;

const submitHandler = () => {
    closeHandler();
}
    return (
      <Dialog open >
        <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
          <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
  
          <Stack spacing={"1rem"}>
            {isLoading ? (
              <Skeleton />
            ) : members?.length > 0 ? (
              members?.map((i) => (
                <UserItem
                  key={i._id}
                  user={i}
                  handler={selectedMembersHandler}
                  isAdded={selectedMembers.includes(i._id)}
                />
              ))
            ) : (
              <Typography textAlign={"center"}>No Friends</Typography>
            )}
          </Stack>
  
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Button color="error" onClick={closeHandler}>
              Cancel
            </Button>
            <Button onClick={submitHandler}
              variant="contained"
              disabled={isLoading}
            >
              Submit Changes
            </Button>
          </Stack>
        </Stack>
      </Dialog>
    );
  };
  
  export default AddMemberDialog;