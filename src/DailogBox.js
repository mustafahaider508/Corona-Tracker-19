import React from 'react';
import {Button,Dialog,DialogContent,DialogTitle,DialogContentText} from "@material-ui/core";
import {showDataOnModal}  from "./Utils";
import "./DailogBox.css";

function DailogBox({countries,casesType}) {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    return (
        <div className="Dailog-box">
         <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle >   {showDataOnModal(countries,casesType)} </DialogTitle>
        <DialogContent>
          <DialogContentText >
           
          </DialogContentText>
        </DialogContent>
      </Dialog>
            
        </div>
    )
}

export default DailogBox
