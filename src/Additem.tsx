import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import { useState } from "react"
import { Item } from "./App";


type AddItemprops={
    addItem:(item:Item)=>void
}

const Additem = (props: AddItemprops) => {
    const[open,setOpen]=useState(false);
    const[item,setItem]=useState<Item>({
        product:'',
        amount:'',
    })
    const AddItem=()=>{
        props.addItem(item);
        setItem({
            product:'',
            amount:'',
        })
    }

    const handleClose=()=>{
        setOpen(false)
    }
    const handleOpen=()=>{
        setOpen(true)
    }
  return (
   <>
   <Button onClick={handleOpen} variant="contained" color="secondary">
    Add Item
   </Button>
   <Dialog open={open} onClose={handleClose}>
    <DialogTitle>
        New Item
    </DialogTitle>
    <DialogContent>
        <TextField value={item.product}onChange={e=>setItem({...item,product:e.target.value})} label="product" margin="dense" fullWidth></TextField>
        <TextField value={item.amount}onChange={e=>setItem({...item,amount:e.target.value})} label="amount" margin="dense" fullWidth></TextField>
        <DialogActions>
            <Button onClick={handleClose} color="error">cancel</Button>
            <Button onClick={AddItem}  color="primary">Add</Button>
        </DialogActions>
    </DialogContent>
   </Dialog>
   </>
  )
}

export default Additem