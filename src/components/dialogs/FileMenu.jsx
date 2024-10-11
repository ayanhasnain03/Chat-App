import { Menu } from "@mui/material";

const FileMenu = ({ anchor1 }) => {
  return (
    <Menu open anchorEl={anchor1}>
      <div>
        <p>File</p>
        <p>View</p>
        <p>Settings</p>
        <p>Help</p>
      </div>
    </Menu>
  );
};

export default FileMenu;
