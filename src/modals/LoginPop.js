import React, { useState } from "react";
import { Button, Modal, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function LoginPop() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpenModal}>
        Open Modal
      </Button>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            p: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            Modal Content
          </Typography>
          <Typography variant="body1">
            This is the content of the modal. You can add your form or details
            here.
          </Typography>
          <Button onClick={handleCloseModal} sx={{ float: "right" }}>
            <CloseIcon />
          </Button>
        </Paper>
      </Modal>
    </div>
  );
}

export default LoginPop;
